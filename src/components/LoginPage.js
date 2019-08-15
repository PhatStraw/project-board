import React from 'react'
import {connect} from 'react-redux'

import LoginForm from './LoginForm.js'

class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        }
    }

    render(){
        return(
            <div>
                <LoginForm />
            </div>
        )
    }
    // handleSubmit = () => {

    // }

    // handleChange = () => {

    // }
}

export default LoginPage
