import { EDIT_LOCATION, DELETE_LOCATION, ADD_LOCATION } from './../const'

const initialState = {
  locations: [
    {
      id: 0,
      name: 'location 1',
      address: 'address 1',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: 0
    },
    {
      id: 1,
      name: 'location 2',
      address: 'address 2',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: 1
    },
    {
      id: 2,
      name: 'location 3',
      address: 'address 3',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: 2
    },
    {
      id: 3,
      name: 'location 4',
      address: 'address 4',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: 3
    },
    {
      id: 4,
      name: 'location 5',
      address: 'address 5',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: 4
    },
    {
      id: 5,
      name: 'location 6',
      address: 'address 6',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: 5
    },
    {
      id: 6,
      name: 'location 7',
      address: 'address 7',
      coordinates_lat: 31.768318,
      coordinates_lng: 35.213711,
      categoryId: 6
    }
  ]
}

export default (state = initialState, action) => {
  let newLocationsArr = [ ...state.locations ]
  let foundIndex

  switch (action.type) {
    case EDIT_LOCATION:
      const foundIndex = state.locations.findIndex(location => location.id ===  action.payload.id);
      newLocationsArr[foundIndex] = action.payload
      return { ...state, locations: newLocationsArr }
    case DELETE_LOCATION:
      foundIndex = state.locations.findIndex(
        category => category.id == action.payload
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
