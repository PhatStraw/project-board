import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from '../actions/index.js'
import { BrowserRouter as Router } from "react-router-dom";

class RegisterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', margin: '1rem', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Register Form</h1>
            <Card style={{width: '27rem', height: '15.7rem'}}>
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

                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>

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

                <Button variant="primary" type="submit" disabled={this.state.isLoading}>
                    Submit
                </Button>
            </Form>
            </Card>
            </div>
        )
    }
    handleSubmit = (e) => {
        const creds = {username: this.state.username, password: this.state.password}
        e.preventDefault();
        this.props.login(creds)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, { login })(RegisterForm)