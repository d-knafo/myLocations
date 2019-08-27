import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { deleteCategory } from '../../redux/actions/categories'

class RowCategory extends Component {

  onDelete (id) {
    let canDelete = true
    this.props.locations.map(c => {
      if(c.categoryId === id) {
        canDelete = false
        return
      }
    })
    if(canDelete){
      return this.props.deleteCategory(id)
    }
    return  this.notifyError()
  }

  notifyError = () => toast.error("This category used, please remove first the location!", {
    position: toast.POSITION.TOP_RIGHT
  })


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

const mapStateToProps = state => ({
  categories: state.categories.categories,
  locations: state.locations.locations
})
const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ deleteCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RowCategory)
