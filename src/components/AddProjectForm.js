import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { Card, Form, Button } from 'react-bootstrap'
import { addProject } from '../actions/index.js'

class AddProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         user_id: null,
         name: '',
         img: '',
         contact: '',
         languages: '',
         description: ''
        }
      }

    render(){
        return(
            <div>
            <Card>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="#">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                 type="name"
                 name="name" 
                 placeholder="Enter a Name for your project" 
                 value={this.state.name} 
                 onChange={this.handleChange} required/>
                </Form.Group>

                <Form.Group controlId="#">
                <Form.Label>Image</Form.Label>
                <Form.Control 
                 type="img"
                 name="img" 
                 placeholder="Enter a Image URL to express yourself" 
                 value={this.state.img} 
                 onChange={this.handleChange} required/>
                </Form.Group>

                <Form.Group controlId="#">
                <Form.Label>Contact</Form.Label>
                <Form.Control 
                 type="contact"
                 name="contact" 
                 placeholder="Enter a Contact URL to express yourself" 
                 value={this.state.contact} 
                 onChange={this.handleChange} required/>
                </Form.Group>

                <Form.Group controlId="#">
                <Form.Label>Languages</Form.Label>
                <Form.Control 
                 type="languages"
                 name="languages" 
                 placeholder="Enter Languages you would like to use on your project" 
                 value={this.state.languages} 
                 onChange={this.handleChange} required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    rows="3"
                    type="description"
                    name="description" 
                    placeholder="Enter a Image URL to express yourself" 
                    value={this.state.description} 
                    onChange={this.handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={this.state.isLoading}>
                    Submit
                </Button>
            </Form>
            </Card>
            </div>
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const newProject = {
            name: this.state.name,
            description: this.state.description,
            img: this.state.img,
            languages: this.state.languages,
            contact: this.state.contact,
            user_id: this.props.user.id
        };
        console.log(newProject)
        this.props.addProject(newProject)
    }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

const mapStateToProps = state => ({
    user: state.user
  })

export default withRouter(connect(mapStateToProps, { addProject })(AddProjectForm))