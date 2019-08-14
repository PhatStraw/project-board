import React from 'react'
import { connect } from 'react-redux'

import { fetchProjects } from "../actions/index"
import ProjectCard from './ProjectCard';
import {Card, ListGroup, ListGroupItem} from "react-bootstrap"



class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="sidenav" style={{height: '100%', position: 'fixed'}}>
          <Card style={{ width: '12rem', marginTop: '3.5rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><Card.Link href="#">Card Link</Card.Link></ListGroupItem>
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
  }
}

const mapStateToProps = state => ({
  projects: state.projects
})

export default connect(mapStateToProps, { fetchProjects })(ProjectsPage)