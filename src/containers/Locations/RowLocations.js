import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteLocation } from '../../redux/actions/locations'

class RowLocations extends Component {
  constructor () {
    super()
  }

  onDelete (id) {
    this.props.deleteLocation(id)
  }

  render () {
    const location = this.props.location
    const category = this.props.categories.find(
      e => e.id == location.categoryId
    )
    return (
      <li key={location.id} className='list-group-item'>
        Name: {location.name} <br />
        Address: {location.address} <br />
        Coordinates: Latitude:{' '}
        {location.coordinates_lat}
        ,  Longitude:{' '}
        {location.coordinates_lng}
        {' '}
        <br />
        CategoryId: {category.name} <br />
      <div className='btn-group float-right' role='group' aria-label='Basic example'>
          <Link
            className='btn btn-secondary'
            to={'/location/' + location.id + '/edit/'}
          >
            Edit
          </Link>
          <Link
            className='btn btn-primary'
            to={'/location/' + location.id + '/view/'}
          >
            View
          </Link>
          <button
            type='button'
            className='btn btn-danger'
            onClick={e => this.onDelete(location.id)}
          >
            Delete
          </button>
        </div>
      </li>
    )
  }
}

const mapStateToProps = state => ({ categories: state.categories.categories })

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ deleteLocation }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RowLocations)
