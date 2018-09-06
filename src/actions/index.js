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
            'http://localhost:3090/gardencreate',
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
            'http://localhost:3090/gardenlist',
            postData
        )
        console.log(response)
        dispatch({type: types.GARDEN_FETCH_ALL, payload: response.data})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error retrieving garden list'})
    }
}

export const activateGarden = gardenId => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        const postData = {...gardenId, token}
        console.log(postData)
        const response = await axios.post(
            'http://localhost:3090/activategarden',
            postData
        )
        console.log(response.data)
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

export const confirmPlantChanges = plantChanges => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        const postData = {plantChanges, token}
        const response = await axios.post(
            'http://localhost:3090/confirmplantchanges',
            postData
        )
        console.log(response)
        // dispatch({type: types.FETCH_GARDEN, payload: response.data})
    } catch (err) {
        dispatch({type: types.GARDEN_ERROR, payload: 'Error saving plant changes'})
    }
}