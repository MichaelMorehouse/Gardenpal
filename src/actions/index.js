import axios from 'axios'
import types from './types'

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            'http://localhost:3090/signup', 
            formProps
        )
        dispatch({ type: types.AUTH_USER, payload: response.data.token })
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (err) {
        dispatch({type: types.AUTH_ERROR, payload: 'Email in use'})
    }
}

export const signout = () => {
    localStorage.removeItem('token')

    return {
        type: types.AUTH_USER,
        payload: ''
    }
}

export const signin = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            'http://localhost:3090/signin', 
            formProps
        )
        dispatch({ type: types.AUTH_USER, payload: response.data.token })
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (err) {
        dispatch({type: types.AUTH_ERROR, payload: 'Invalid login credentials'})
    }
}

export const gardenCreate = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            'http://localhost:3090/gardencreate',
            formProps
        )
        console.log(formProps)
        callback()
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Invalid garden properties'})
    }
}

export const gardenFetchAll = () => async dispatch => {
    try {
        const response = await axios.get(
            'http://localhost:3090/gardenlist'
        )
        console.log(response)
        dispatch({type: types.GARDEN_FETCH_ALL, payload: response.data})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error retrieving garden list'})
    }
}

export const gardenActivate = (garden) => {
    
}