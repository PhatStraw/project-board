import React from "react";
import { Route } from "react-router-dom";
import {Navbar,
        Nav,
        Link
        } from "react-bootstrap";
import Background from '../img/bg-img.jpg'

import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage'
import ProjectsPage from './components/ProjectsPage'

import ProtectedRoute from './ProtectedRoute.js'

const appStyle = {
  padding: '1%',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundImage: `url(${Background})`
}

function App() {
  return (
    <div className="App" style={appStyle}>
       <Navbar bg="dark" variant="dark" style={{margin: '1rem', width: '90%'}}>
        <Navbar.Brand href="#home">Project Board</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar>

      <div className="container">
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <ProtectedRoute exact path="/" component={ProjectsPage} />  
      </div>
    </div>
  );
}

export default App;