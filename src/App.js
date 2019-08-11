import React from "react";
import { Route, Link } from "react-router-dom";

// import Login from './components/Login';
// import SignupPage from './components/SignUpPage'
// import ProjectsPage from './components/ProjectsPage'

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div >
          <Link className="logo" to="/">Project Board</Link>
        </div>
        <div className="navitems">
          {loggedIn ? 
          <>  
            <Link>Logout</Link>
          </>
          :
          <>
            <Link className="navitem" to="/signup">Signup</Link>
            <Link className="navitem" to="/login">Login</Link>
          </>}
        </div>
      </div>

      {/* <div className="container">
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignupPage} />
        <Route exact path="/" component={ProjectsPage} />  
      </div> */}
    </div>
  );
}

export default App;