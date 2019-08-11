import axios from 'axios';

export const ADD_USER = "ADD_USER";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const addUser = newUser => dispatch => {
  axios
      .post("http://localhost:3000/users/register", newUser)
      .then(res => {
        console.log(res)
        dispatch({ type: ADD_USER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_USER_FAILURE, payload: err.response });
      });
  };


export const ADD_DONATION = "ADD_DONATION";
export const ADD_DONATION_FAILURE = "ADD_DONATION_FAILURE";
  
export const addProject = newProject => dispatch => {
    axios
    .post("http://localhost:3000/:id/addproject", newProject)
    .then(() => {
      fetchProjects()
    })
    .catch(err => {
      dispatch({ type: ADD_PROJECT_FAILURE, payload: err.response });
    });
};


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios    
    .post('http://localhost:3000/users/login', creds)
    .then(res => {          
    //   localStorage.setItem('token', res.data.access_token);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log('ERROR', err));
  }


export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE";

export const fetchProjects = () => dispatch => {
    dispatch({ type: FETCH_PROJECTS_START });
    axios
    .post("http://localhost:3000/projects")
      .then(res => {
        dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
        console.log(res, 'THIS IS FETCH PROJECTS RESULTS')
      })
      .catch(err => {
        dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err });
      });
  };


  export const DELETE_PROJECT_START = 'DELETE_PROJECT_START';
  export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
  export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

  export const deleteProject = id => dispatch => {
    dispatch({ type: DELETE_PROJECT_START });
    axios
      .delete(`http://localhost:3000/projects/delete/${id}`)
      .then(res => { 
        console.log(res)             
        dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
      })
      .catch(err => {      
        dispatch({ type: DELETE_PROJECT_FAILURE, payload: err });
      });
  };