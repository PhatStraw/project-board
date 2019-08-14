import React from "react";
import { Route } from "react-router-dom";
import {Navbar,
        Nav
        } from "react-bootstrap";

// import Login from './components/Login';
// import SignupPage from './components/SignUpPage'
import ProjectsPage from './components/ProjectsPage'

const appStyle = {
  padding: '1%',
  margin:'.5%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
  
}

function App() {
  return (
    <div className="App" style={appStyle}>
       <Navbar bg="dark" variant="dark" style={{margin: '1rem', width: '90%'}}>
        <Navbar.Brand href="#home">Project Board</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Login</Nav.Link>
          <Nav.Link href="#pricing">Register</Nav.Link>
        </Nav>
      </Navbar>
      {/* <div className="navbar">
        <div >
          <Link className="logo" to="/">Project Board</Link>
        </div>
      </div> */}

      <div className="container">
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupPage} /> */}
        <Route exact path="/" component={ProjectsPage} />  
      </div>
    </div>
  );
}

export default App;