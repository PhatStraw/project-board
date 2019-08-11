import React from 'react'
import {connect} from 'react-redux'

import './DonationsPage.css'
import { fetchProjects, addProject } from "../actions/index"
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard';


class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: ''
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

Collapse.propTypes = {
  ...Transition.propTypes,
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
  innerRef: PropTypes.object,
};

const mapStateToProps = state => ({
  projects: state.projects  
})

export default connect(mapStateToProps, { fetchProjects, addProject })(DonationsPage)