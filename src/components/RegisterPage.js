import React from 'react'
import {connect} from 'react-redux'

import RegisterForm from './RegisterForm.js'

class RegisterPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
        return(
            <div>
                <RegisterForm />
            </div>
        )
    }
    // handleSubmit = () => {

    // }

    // handleChange = () => {

    // }
}

export default RegisterPage