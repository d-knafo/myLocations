import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RowLocations from './RowLocations'
import AddLocation from './AddLocation'

class Locations extends Component {
  constructor () {
    super()
    this.state = { filterCategory: 'all' }
  }

  onFilterCategory (categoryId) {
    this.setState({ filterCategory: parseInt(categoryId) })
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm'>
            <h1> Add Location</h1>
            <AddLocation />
          </div>
          <div className='col-sm'>
            <h1> My Locations </h1>
            <form>
              <div className='form-row'>
                <div className='col'>
                  Filter by category
                </div>
                <div className='col'>
                  <select
                    className='form-control'
                    onChange={e => this.onFilterCategory(e.target.value)}
                    value={this.state.filterCategory}
                  >
                    <option value='all'>
                      All
                    </option>
                    {this.props.categories.map(category => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                      ))}
                  </select>
                </div>
              </div>
            </form>
            <ul className='list-group'>
              {
                this.props.locations.map(location => (
                  <RowLocations
                    location={location}
                    key={location.id}
                    FilterCategory={this.state.filterCategory}
                  />
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

const mapStateToProps = state => ({
  categories: state.categories.categories,
  locations: state.locations.locations
})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
