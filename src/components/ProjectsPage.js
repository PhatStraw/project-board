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
                
                 <ProjectCard 
                    toggle={this.toggle}
                    projects={this.props.projects}
                    collapse={this.state.collapse}/> 
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