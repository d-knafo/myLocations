import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteLocation } from '../../redux/actions/locations'

function Categories (data) {
  return data.locations.categoryId.map(c => {
    let category = data.categories.find(e => e.id === c)
    return <span class='badge badge-primary m-1'>{category.name}</span>
  })
}

class RowLocations extends Component {
  onDelete (id) {
    this.props.deleteLocation(id)
  }

  render () {
    const { location, categories } = this.props
    const FilterCategory = this.props.FilterCategory

    if ( FilterCategory === 'all' || (FilterCategory !== 'all' && location.categoryId.includes(FilterCategory)) ) {
      return (
        <li key={location.id} className='list-group-item'>
          Name: {location.name} <br />
          Address: {location.address} <br />
          Coordinates: Latitude: {location.coordinates_lat}, Longitude: {location.coordinates_lng}
          <br />
          Categories: <Categories locations={location} categories={categories} />
          <br />
          <div
            className='btn-group float-right'
            role='group'
            aria-label='Basic example'
          >
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
    } else {
      return <span />
    }
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  locations: state.locations.locations
})
const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ deleteLocation }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RowLocations)
