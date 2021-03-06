import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCategory } from '../../redux/actions/categories'
import RowCategory from './RowCategory'

class Categories extends Component {
  onDelete (id) {
    this.props.deleteCategory(id)
  }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <span className='navbar-text'>
            Manage your Categories
          </span>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='btn btn-primary' to='/category/new/'>
                Add new
              </Link>
            </li>
          </ul>
        </nav>
        <div className='card'>
          <div className='card-body'>
            <ul className='list-group'>
              {
                this.props.categories.map(category => (
                  <RowCategory category={category} key={category.id} />
                ))
              }
            </ul>
          </div>
        </div>
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
