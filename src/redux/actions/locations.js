import { EDIT_LOCATION, DELETE_LOCATION, ADD_LOCATION } from './../const'

export const editLocation = data => {
  return dispatch => {
    dispatch({
      type: EDIT_LOCATION,
      payload: {
        id: data.id,
        name: data.name,
        address: data.address,
        coordinates_lat: data.coordinates_lat,
        coordinates_lng: data.coordinates_lng,
        categoryId: data.categoryId
      }
    })
  }
}

export const deleteLocation = id => {
  return dispatch => {
    dispatch({ type: DELETE_LOCATION, payload: id })
  }
}

export const addLocation = data => {
  return dispatch => {
    dispatch({
      type: ADD_LOCATION,
      payload: {
        name: data.name,
        address: data.address,
        coordinates_lat: data.coordinates_lat,
        coordinates_lng: data.coordinates_lng,
        categoryId: data.categoryId
      }
    })
  }
}
