import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RowLocations from './RowLocations'

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
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <span className='navbar-text'>
            Manage your Locations
          </span>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='btn btn-primary' to='/location/new/'>
                Add new
              </Link>
            </li>
          </ul>
        </nav>
        <div class='card'>
          <div class='card-body'>
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
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
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
