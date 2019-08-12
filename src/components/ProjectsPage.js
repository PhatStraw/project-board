import React from 'react'
import {connect} from 'react-redux'

import { fetchProjects} from "../actions/index"
import ProjectCard from './ProjectCard';


class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }
  
    render() {       
        return (
            <div>
                <div className="header-title"> 
                Current Project List
                </div>
                
                {this.props.projects.map(project => (
                 <ProjectCard 
                    toggle={this.toggle}
                    user={project.user_id}
                    collapse={this.state.collapse}/>
                ))}
            </div>
        )
    }
    componentDidMount() {
      this.props.fetchProjects();
    }
}

const mapStateToProps = state => ({
  projects: state.projects  
})

export default connect(mapStateToProps, { fetchProjects})(ProjectsPage)