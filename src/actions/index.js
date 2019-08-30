import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

export const ADD_USER = "ADD_USER";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const addUser = newUser => dispatch => {
  axios
      .post("https://projectboarddb.herokuapp.com/users/register", newUser)
      .then(res => {
        console.log(res)
        dispatch({ type: ADD_USER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_USER_FAILURE, payload: err.response });
      });
  };


export const ADD_PROJECT = "ADD_PROJECT";
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";
  
export const addProject = newProject => dispatch => {
    return axiosWithAuth()
    .post("https://projectboarddb.herokuapp.com/projects/addproject", newProject)
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
    .post('https://projectboarddb.herokuapp.com/users/login', creds)
    .then(res => {          
      localStorage.setItem('token', res.data.token);
      dispatch({type: ADD_USER, payload: res.data.user})
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
    return axiosWithAuth()
    .get("https://projectboarddb.herokuapp.com/projects")
      .then(res => {
        console.log(res, 'THIS IS FETCH PROJECTS RESULTS')
        dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: res.data });
        
      })
      .catch(err => {
        dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err });
      });
  };


export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsers = () => dispatch => {
    dispatch({ type: FETCH_USERS_START });
    return axiosWithAuth()
    .get("https://projectboarddb.herokuapp.com/users")
      .then(res => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
        console.log(res, 'THIS IS FETCH USERS RESULTS')
      })
      .catch(err => {
        dispatch({ type: FETCH_PROJECTS_FAILURE, payload: err });
      });
  };


  export const FETCH_USER_START = "FETCH_USER_START";
  export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
  export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
  
  export const fetchUser = () => dispatch => {
      return axiosWithAuth()
      .get(`https://projectboarddb.herokuapp.com/users/user`)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          dispatch({type: ADD_USER, payload: res.data.user})
          dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
          console.log(res, 'THIS IS FETCH USER RESULTS')
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
    return axiosWithAuth()
      .delete(`https://projectboarddb.herokuapp.com/projects/delete/${id}`)
      .then(res => { 
        console.log(res)             
        dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
      })
      .catch(err => {      
        dispatch({ type: DELETE_PROJECT_FAILURE, payload: err });
      });
  };