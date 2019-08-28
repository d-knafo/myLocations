import { EDIT_CATEGORY, DELETE_CATEGORY, ADD_CATEGORY } from './../const'

const initialState = {
  categories: [
    { id: 0, name: 'Home' },
    { id: 1, name: 'Work' },
    { id: 2, name: 'Parents' },
    { id: 3, name: 'School' },
    { id: 4, name: 'Backery' },
    { id: 5, name: 'Grocery' },
    { id: 6, name: 'Shoe Store' }
  ]
}

export default (state = initialState, action) => {
  let newCategoriesArr = [ ...state.categories ]
  let foundIndex

  switch (action.type) {
    case EDIT_CATEGORY:
      foundIndex = state.categories.findIndex(
        category => category.id === action.payload.id
      )
      newCategoriesArr[foundIndex].name = action.payload.name
      return { ...state, categories: newCategoriesArr }

    case DELETE_CATEGORY:
      foundIndex = state.categories.findIndex(
        category => category.id === action.payload
      )
      delete newCategoriesArr[foundIndex]
      let organize = []
      newCategoriesArr.map(item => organize.push(item))
      return { ...state, categories: organize }

    case ADD_CATEGORY:
      newCategoriesArr.push({
        id: newCategoriesArr.slice(-1).pop().id + 1,
        name: action.payload
      })
      return { ...state, categories: newCategoriesArr }

    default:
      return state
  }
}
