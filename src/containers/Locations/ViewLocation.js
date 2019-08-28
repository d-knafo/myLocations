import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'
import Map from './Map'

class ViewLocation extends Component {
  constructor (props) {
    super(props)
    if ('vibrate' in navigator) {
      navigator.vibrate(1000)
    }

    const categories = this.props.categories
    const id = parseInt(this.props.match.params.id)
    const initObj = this.props.locations.find(e => e.id === id)
    const selectedOptionArr = initObj.categoryId.map(e => {
      return categories.filter(c => c.id === e)
    })
    this.state = {
      name: initObj.name,
      address: initObj.address,
      coordinates_lat: initObj.coordinates_lat,
      coordinates_lng: initObj.coordinates_lng,
      categoryId: initObj.categoryId,
      selectedOption: selectedOptionArr.map(o => o[0])
    }
  }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
          <span className='navbar-text'>
            View location
          </span>
          <ul className='nav navbar-nav ml-auto'>
            <li className='nav-item'>
              <button
                className='btn btn-warning ml-2'
                onClick={this.props.history.goBack}
              >
                Back
              </button>
            </li>
          </ul>
        </nav>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-6'>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    className='form-control disabled'
                    value={this.state.name}
                    disabled
                  />
                </div>
                <div className='form-group'>
                  <label> Address</label>
                  <input
                    type='text'
                    className='form-control disabled'
                    value={this.state.address}
                    disabled
                  />
                </div>
                <div className='form-group'>
                  <label> Coordinates Latitude</label>
                  <input
                    type='text'
                    className='form-control disabled'
                    value={this.state.coordinates_lat}
                    disabled
                  />
                </div>
                <div className='form-group'>
                  <label> Coordinates Longitude</label>
                  <input
                    type='text'
                    className='form-control disabled'
                    value={this.state.coordinates_lng}
                    disabled
                  />
                </div>
                <div className='form-group'>
                  <label> Category </label>
                  <select
                    className='form-control disabled'
                    value={this.state.categoryId}
                    disabled
                  >
                    {this.props.categories.map(category => (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                      ))}
                  </select>
                </div>
                <div className='form-group'>
                  <label> Category v2 </label>
                  <Select
                    value={this.state.selectedOption}
                    options={this.props.categories}
                    isMulti
                    getOptionValue={option => option.id}
                    getOptionLabel={option => option.name}
                    isDisabled
                  />
                </div>
              </div>
              <div className='col-6'>
                <Map
                  lat={this.state.coordinates_lat}
                  lng={this.state.coordinates_lng}
                  name={this.state.name}
                />
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewLocation)
