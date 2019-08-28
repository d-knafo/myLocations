import { EDIT_CATEGORY, DELETE_CATEGORY, ADD_CATEGORY } from './../const'

export const editCategory = data => {
  return dispatch => {
    dispatch({
      type: EDIT_CATEGORY,
      payload: { id: data.id, name: data.name }
    })
  }
}

export const deleteCategory = id => {
  return dispatch => {
    dispatch({ type: DELETE_CATEGORY, payload: id })
  }
}

export const addCategory = name => {
  return dispatch => {
    dispatch({ type: ADD_CATEGORY, payload: name })
  }
}
