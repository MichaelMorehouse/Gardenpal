import types from '../actions/types'

const initialState = {
  gardens: [],
  createError: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GARDEN_FETCH_ALL:
      return {...state, gardens: action.payload}
    default:
      return state
  }
}
