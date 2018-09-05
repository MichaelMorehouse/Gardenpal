import types from '../actions/types'

const initialState = {
  activeGarden: null,
  gardens: [],
  createError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GARDEN_FETCH_ALL:
      return {...state, gardens: action.payload}
    case types.GARDEN_ERROR:
      return {...state, createError: action.payload}
    default:
      return state
  }
}
