import { EDIT_LOCATION, DELETE_LOCATION, ADD_LOCATION } from './../const'

const initialState = {
  locations: [
    {
      id: 0,
      name: 'Location 1',
      address: 'Address 1',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: [ 0, 1 ]
    },
    {
      id: 1,
      name: 'Location 2',
      address: 'Address 2',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: [ 1, 3 ]
    },
    {
      id: 2,
      name: 'Location 3',
      address: 'Address 3',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: [ 2, 1 ]
    },
    {
      id: 3,
      name: 'Location 4',
      address: 'Address 4',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: [ 3, 1 ]
    },
    {
      id: 4,
      name: 'Location 5',
      address: 'Address 5',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: [ 4, 2 ]
    },
    {
      id: 5,
      name: 'Location 6',
      address: 'Address 6',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: [ 5, 1 ]
    },
    {
      id: 6,
      name: 'Location 7',
      address: 'Address 7',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: [ 6, 3 ]
    }
  ]
}

export default (state = initialState, action) => {
  let newLocationsArr = [ ...state.locations ]
  let foundIndex

  switch (action.type) {
    case EDIT_LOCATION:
      foundIndex = state.locations.findIndex(
        location => location.id === action.payload.id
      )
      newLocationsArr[foundIndex] = action.payload
      return { ...state, locations: newLocationsArr }
    case DELETE_LOCATION:
      foundIndex = state.locations.findIndex(
        category => category.id === action.payload
      )
      delete newLocationsArr[foundIndex]
      let organize = []
      newLocationsArr.map(item => organize.push(item))
      return { ...state, locations: organize }
    case ADD_LOCATION:
      action.payload.id = newLocationsArr.slice(-1).pop().id + 1
      newLocationsArr.push(action.payload)
      return { ...state, locations: newLocationsArr }
    default:
      return state
  }
}
