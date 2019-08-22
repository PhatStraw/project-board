import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addUser } from '../actions/index.js'

class RegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            img:'',
            error: {},
            isLoading: false
        }
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', margin: '1rem', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Register Form</h1>
            <Card style={{width: '27rem', height: '20.2rem'}}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formUsername">

                    <Form.Label style={{margin: '.5rem'}}>
                        Username
                    </Form.Label>

                    <Form.Control 
                        type="username"
                        name="username" 
                        placeholder="Enter Username" 
                        value={this.state.username} 
                        onChange={this.handleChange} required
                    />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">

                    <Form.Label style={{margin: '.5rem'}}>
                        Password
                    </Form.Label>

                    <Form.Control 
                        type="password"
                        name="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange} required 
                    />

                </Form.Group>

                <Form.Group controlId="img">

                    <Form.Label style={{margin: '.5rem'}}>
                        Picture
                    </Form.Label>

                    <Form.Control 
                        type="img"
                        name="img" 
                        placeholder="Enter a Image URL to express yourself" 
                        value={this.state.img} 
                        onChange={this.handleChange} required
                    />

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
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            img: this.state.img
        };
        console.log(newUser)
        this.props.addUser(newUser)
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
    users: state.users
})

export default connect(mapStateToProps, { addUser })(RegisterForm)