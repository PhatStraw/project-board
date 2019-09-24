import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from "react-router-dom";

import { fetchProjects } from "../actions/index"
import ProjectCard from './ProjectCard';
import {Card, Img, ListGroup, ListGroupItem} from "react-bootstrap"


var imgStyle = {
  minWidth: "1rem",
  minHeight: "15rem"
}

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     user: {}
    }
  }

  render() {
    return (
      <div style={{display:'flex', width: '100%'}}>  
          <div className="sidenav" style={{height: '100%', paddingLeft: '1rem'}}>
          <Card bg="dark" text="white" style={{ width: '12rem', marginTop: '3.5rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <Card.Img variant="top" style={imgStyle} src={this.props.user.img} alt=''/>
            <Card.Body>
              <Card.Title>{this.props.user.username}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {/* <ListGroupItem style={{backgroundColor:'#343a40'}}><Link href="#" style={{color: '#fff', textDecoration: 'none' }}>Profile</Link></ListGroupItem> */}
              <ListGroupItem style={{backgroundColor:'#343a40' }}><Link to="/addproject" style={{color: '#fff', textDecoration: 'none' }}>Add Project</Link></ListGroupItem>
            </ListGroup>
          </Card>
        </div> 
      
       
        <div className="content" style={{display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', width: '80%', paddingLeft: '2rem', marginTop: '3.5rem'}}>
          <h1 className="header-title" style={{backgroundColor:'#ff6000', color: '#343a40'}}>
            Current Project List
                </h1>
          <ProjectCard
            toggle={this.toggle}
            projects={this.props.projects}
            collapse={this.state.collapse} />
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.fetchProjects();
    // this.props.fetchUser()
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  user: state.user
})

export default withRouter(connect(mapStateToProps, { fetchProjects })(ProjectsPage))