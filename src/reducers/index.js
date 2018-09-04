import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import garden from './garden'

export default combineReducers({
    auth,
    form: formReducer,
    garden
})