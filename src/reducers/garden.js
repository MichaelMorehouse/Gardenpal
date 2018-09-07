import types from '../actions/types'

const initialState = {
  activeGarden: {},
  gardens: [],
  createError: '',
  plantChanges: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ACTIVATE_GARDEN:
      return {...state, activeGarden: action.payload}
    case types.GARDEN_FETCH_ALL:
      return {...state, gardens: action.payload}
    case types.GARDEN_ERROR:
      return {...state, createError: action.payload}
    case types.PLANT_NEW:
      return {...state, plantChanges: [...state.plantChanges, action.payload]}
    case types.CLEAR_PLANT_CHANGES:
      return {...state, plantChanges: []}
    default:
      return state
  }
}
