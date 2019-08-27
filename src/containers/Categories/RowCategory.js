import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteCategory } from '../../redux/actions/categories'

class RowCategory extends Component {
  constructor () {
    super()
  }

  onDelete (id) {
    this.props.deleteCategory(id)
  }

  render () {
    const category = this.props.category
    return (
      <li key={category.id} className='list-group-item'>
        {category.name}
        <div className='btn-group float-right' role='group' aria-label='Basic example'>
          <Link
            className='btn btn-secondary'
            to={'/category/' + category.id + '/edit/'}
          >
            Edit
          </Link>
          <button
            type='button'
            className='btn btn-danger'
            onClick={e => this.onDelete(category.id)}
          >
            Delete
          </button>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ categories }) => ({})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ deleteCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RowCategory)
