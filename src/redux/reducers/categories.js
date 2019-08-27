import { EDIT_CATEGORY, DELETE_CATEGORY, ADD_CATEGORY } from './../const'

const initialState = {
  categories: [
    { id: 0, name: 'category 1 ' },
    { id: 1, name: 'category 2 ' },
    { id: 2, name: 'category 3 ' },
    { id: 3, name: 'category 4 ' },
    { id: 4, name: 'category 5 ' },
    { id: 5, name: 'category 6 ' },
    { id: 6, name: 'category 7 ' }
  ]
}

export default (state = initialState, action) => {
  let newCategoriesArr = [ ...state.categories ]
  let foundIndex

  switch (action.type) {
    case EDIT_CATEGORY:
      foundIndex = state.categories.findIndex(
        category => category.id == action.payload.id
      )
      newCategoriesArr[foundIndex].name = action.payload.name
      return { ...state, categories: newCategoriesArr }

    case DELETE_CATEGORY:
      foundIndex = state.categories.findIndex(
        category => category.id == action.payload
      )
      delete newCategoriesArr[foundIndex]
      let organize = []
      newCategoriesArr.map(item => organize.push(item))
      return { ...state, categories: organize }

    case ADD_CATEGORY:
      newCategoriesArr.push({ id: newCategoriesArr.slice(-1).pop().id + 1, name: action.payload })
      return { ...state, categories: newCategoriesArr }

    default:
      return state
  }
}
