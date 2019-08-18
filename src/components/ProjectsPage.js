import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

import { fetchProjects, fetchUser } from "../actions/index"
import ProjectCard from './ProjectCard';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"



class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     user: {}
    }
  }

  render() {
    return (
      <div>  
          <div className="sidenav" style={{height: '100%', position: 'fixed'}}>
          <Card style={{ width: '12rem', marginTop: '3.5rem' }}>
            <Card.Img variant="top" src={this.props.user.img} alt=''/>
            <Card.Body>
              <Card.Title>{this.props.user.username}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><Card.Link href="#">Card</Card.Link></ListGroupItem>
              <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
              <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
            </ListGroup>
          </Card>
        </div> 
      
       
        <div className="content" style={{marginLeft:'200px', paddingLeft: '20px'}}>
          <h1 className="header-title">
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