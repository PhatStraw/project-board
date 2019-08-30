import React from 'react'
import {connect} from 'react-redux'

import RegisterForm from './RegisterForm.js'
import { addUser } from '../actions/index.js'

class RegisterPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }

    render(){
        return(
            <div>
                <RegisterForm addUser={addUser}/>
            </div>
        )
    }
}

export default connect(null, { addUser })(RegisterPage)