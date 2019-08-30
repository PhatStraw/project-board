import {
    ADD_USER,
    ADD_USER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_PROJECTS_START,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    ADD_PROJECT,
    ADD_PROJECT_FAILURE,
    DELETE_PROJECT_START,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_START, 
    FETCH_USER_SUCCESS, 
    FETCH_USER_FAILURE
} from "../actions/index.js"

const initialState = {
    users: [],
    projects: [],
    signingUp: false,
    error: null,
    loading: true,
    deleting: false,
    token: localStorage.getItem("token"),
    user: {
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USER:
            return {
            ...state,
            user: action.payload
        };
        case ADD_USER_FAILURE:
            return {
            ...state,
            error: action.payload
            };
        case LOGIN_START:
            return {
            ...state,
            error: '',
            loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
            ...state,
            loggingIn: false,
            error: ''
            };
        case LOGIN_FAILURE:
            return {
            ...state,
            loggingIn: false,
            error: action.payload
            };
        case FETCH_PROJECTS_START:
            return {
            ...state,
            loading: true,
            error: null
            };
        case FETCH_PROJECTS_SUCCESS:
            return {
            ...state,
            projects: action.payload,
            loading: false,
            error: null
            };
        case FETCH_PROJECTS_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.payload
            };
        case ADD_PROJECT:
            state.projects[action.payload.users.id].projectlist = action.payload;
            return {
            ...state,
            projects: state.projects                
            };
        case ADD_PROJECT_FAILURE:
            return {
            ...state,
            error: action.payload
            };
        case DELETE_PROJECT_START:
            return {
            ...state,
            deleting: true,
            error: ''
            };
        case DELETE_PROJECT_SUCCESS:
            let newProjects = state.projects.filter(e => e.id !== action.payload);
            return {
            ...state,
            error: '',
            deleting: false,                  
            projects: newProjects
            };
        case DELETE_PROJECT_FAILURE:
            return {
            ...state,
            deleting: false,
            error: action.payload
            };
        case FETCH_USERS_START:
            return {
            ...state,
            loading: true,
            error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
            ...state,
            users: action.payload,
            loading: false,
            error: null
            };
        case FETCH_USERS_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.payload
            };
        case FETCH_USER_START:
            return {
            ...state,
            loading: true,
            error: null
            };
        case FETCH_USER_SUCCESS:
            return {
            ...state,
            user: action.payload,
            loading: false,
            error: null
            }
        case FETCH_USER_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.payload
            }
        default:
            return state;
    }
}
export default reducer;