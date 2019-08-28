import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RowLocations from './RowLocations'
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa'

class Locations extends Component {
  constructor (props) {
    super(props)
    this.state = { filterCategory: 'all', locations: this.props.locations }
  }

  onFilterCategory (categoryId) {
    this.setState({ filterCategory: parseInt(categoryId) })
  }

  componentWillReceiveProps (props) {
    this.setState({ locations: props.locations })
  }

  sortAscByName () {
    const locationsSorted = this.props.locations.sort(
      (a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    )
    this.setState({ locations: locationsSorted })
  }

  sortDescByName () {
    const locationsSorted = this.props.locations.sort(
      (a, b) => a.name < b.name ? 1 : b.name < a.name ? -1 : 0
    )
    this.setState({ locations: locationsSorted })
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
                  Sort <br />
                  <div
                    class='btn-group btn-group-sm'
                    role='group'
                    aria-label='Basic example'
                  >
                    <button
                      type='button'
                      class='btn btn-primary'
                      onClick={this.sortAscByName.bind(this)}
                    >
                      <FaSortAlphaDown />
                    </button>
                    <button
                      type='button'
                      class='btn btn-primary'
                      onClick={this.sortDescByName.bind(this)}
                    >
                      <FaSortAlphaUp />
                    </button>
                  </div>
                </div>
                <div className='col'>
                  Filter by category

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
                this.state.locations.map(location => (
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
