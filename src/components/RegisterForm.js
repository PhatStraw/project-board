import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

class RegisterForm extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', margin: '1rem', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Register Form</h1>
            <Card style={{width: '27rem', height: '15.7rem'}}>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label style={{margin: '.5rem'}}>Username</Form.Label>
                    <Form.Control type="Username" placeholder="Enter Username" />
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label style={{margin: '.5rem'}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card>
            </div>
        )
    }
}

export default RegisterForm