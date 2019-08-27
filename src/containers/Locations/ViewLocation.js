import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import GoogleMapReact from 'google-map-react'
import Map from './Map'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class ViewLocation extends Component {
  componentWillMount () {
    if ("vibrate" in navigator) {
  	// vibration API supported
      navigator.vibrate(1000);
    }
    
    const id = this.props.match.params.id
    const initObj = this.props.locations.find(e => e.id == id)
    this.setState({
      name: initObj.name,
      address: initObj.address,
      coordinates_lat: initObj.coordinates_lat,
      coordinates_lng: initObj.coordinates_lng,
      categoryId: initObj.categoryId
    })
  }

  render () {
    return (
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
            </div>
            <div className='col-6'>
              <Map coordinates={{lat: this.state.coordinates_lat, lng: this.state.coordinates_lng }} />
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
