import React from "react";
import { Route, Link } from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import Background from '../img/bg-img.jpg'

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
import ProjectsPage from './components/ProjectsPage'
import AddProjectPage from './components/AddProjectPage'

import ProtectedRoute from './ProtectedRoute.js'

const appStyle = {
  padding: '1%',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}

function App() {
  return (
    <div className="App" style={appStyle}>
       <Navbar bg="dark" variant="dark" style={{margin: '1rem', width: '90%', padding: ".5rem"}}>
        <Navbar.Brand style={{paddingLeft: '1rem'}}to="/">Project Board</Navbar.Brand>
        <Nav>
          <Link style={{color: '#fff', textDecoration: 'none', paddingRight: '3rem', marginBottom: '.4rem' }} to="/">Home</Link>
          <Link style={{color: '#fff', textDecoration: 'none', paddingRight: '3rem', marginBottom: '.4rem' }} to="/login">Login</Link>
          <Link style={{color: '#fff', textDecoration: 'none', paddingRight: '3rem', marginBottom: '.4rem' }} to="/register">Register</Link>
        </Nav>
      </Navbar>

      <div className="container">
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/" component={ProjectsPage} />  
        <ProtectedRoute exact path="/addproject" component={AddProjectPage} />
      </div>
    </div>
  );
}

export default App;