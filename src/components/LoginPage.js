import React from 'react'
import {connect} from 'react-redux'

import LoginForm from './LoginForm.js'

class LoginPage extends React.Component {
render(){
    return(
        <div>
         <LoginForm />
        </div>
    )
 }
}

export default LoginPage
