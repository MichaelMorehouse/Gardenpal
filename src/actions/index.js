import axios from 'axios'
import types from './types'

const host = process.env.API_URI || 'https://gardenpal-api.herokuapp.com/' || 'http://localhost:3090/'

const route = route => host + route

export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            route('signup'), 
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
            route('signin'), 
            formProps
        )
        dispatch({ type: types.AUTH_USER, payload: response.data.token })
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        callback()
    } catch (err) {
        dispatch({type: types.AUTH_ERROR, payload: 'Invalid login credentials'})
    }
}

export const gardenCreate = (formProps, callback) => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        const postData = {...formProps, token}
        await axios.post(
            route('gardencreate'),
            postData
        )
        callback()
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Invalid garden properties'})
    }
}

export const gardenFetchAll = () => async dispatch => {
    try {
        const postData = { token: localStorage.getItem('token')}
        const response = await axios.post(
            route('gardenlist'),
            postData
        )
        dispatch({type: types.GARDEN_FETCH_ALL, payload: response.data})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error retrieving garden list'})
    }
}

export const activateGarden = gardenId => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        const postData = {...gardenId, token}
        const response = await axios.post(
            route('activategarden'),
            postData
        )
        console.log(response)
        dispatch({type: types.ACTIVATE_GARDEN, payload: response.data})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error activating garden'})
    }
}

export const plantNew = plant => dispatch => {
    try {
        console.log(plant)
        dispatch({type: types.PLANT_NEW, payload: plant})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error planting new'})
    }
}

export const clearPlantChanges = () => dispatch => {
    try {
        dispatch({type: types.CLEAR_PLANT_CHANGES})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error clearing pending changes'})
    }
}

export const confirmPlantChanges = plantChanges => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        const postData = {plantChanges, token}
        const response = await axios.post(
            route('confirmplantchanges'),
            postData
        )
        console.log(response)
        dispatch({type: types.CLEAR_PLANT_CHANGES})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error saving plant changes'})
    }
}

export const fetchGarden = () => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(
            route('fetchgarden'),
            {token}
        )
        dispatch({type: types.ACTIVATE_GARDEN, payload: response.data})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error fetching garden'})
    }
}