import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteCategory } from '../../redux/actions/categories'
import RowCategory from './RowCategory'
import AddCategory from './AddCategory'

class Categories extends Component {
  constructor () {
    super()
  }

  onDelete (id) {
    this.props.deleteCategory(id)
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm'>
            <h1> Add Category</h1>
            <AddCategory />
          </div>
          <div className='col-sm'>
            <h1> My Categories </h1>
            <ul className='list-group'>
              {
                this.props.categories.map(category => (
                  <RowCategory category={category} />
                ))
              }
            </ul>
          </div>
        </div>
        <ul />
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories
})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ deleteCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
