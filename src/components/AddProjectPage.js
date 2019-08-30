import React from 'react'
import {connect} from 'react-redux'
import AddProjectForm from './AddProjectForm.js'
import { withRouter } from "react-router-dom";

class AddProjectPage extends React.Component { 
    render(){
        return(
            <div>
             <AddProjectForm />
            </div>
        )
    }
}
  
export default AddProjectPage
