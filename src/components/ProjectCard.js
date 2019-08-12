import React from 'react'
import {connect} from 'react-redux'

class ProjectCard extends React.Component {
    constructor(props){
       super(props);
       this.state = {

        } 
    }
   render(){        
  return (
    <div className="card">
           <div className="list">
             <div className="details">
              {this.props.projects.map(obj => (
                <div className="tabledata">
                    <span className="date">{obj.name}</span>
                    <span className="amt">${obj.description}</span>
                    <span className="note">{obj.tasks}</span>
                    <span className="note">{obj.languages}</span>

                </div>             
             ))}
              </div>
             </div>
    </div>
  );
}
}
const mapStateToProps = state => ({
    projects: state.projects
  })
  
  export default connect(mapStateToProps)(ProjectCard)