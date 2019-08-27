import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addLocation } from '../../redux/actions/locations'

class AddLocation extends Component {
  constructor () {
    super()
    this.setState({
      name: '',
      address: '',
      coordinates_lat: '',
      coordinates_lng: '',
      categoryId: ''
    })
  }

  onNameChange (value, field) {
    this.setState({ [field]: value })
  }

  onAdd () {
    if (this.state.name) {
      this.props.addLocation({
        name: this.state.name,
        address: this.state.address,
        coordinates: this.state.coordinates,
        categoryId: this.state.categoryId
      })
    } else {
      alert('Must fill input')
    }
  }

  render () {
    return (
      <div className='card'>
        <div className='card-body'>
            <div className='form-group'>
              <label>Name</label>
              <input
                type='text'
                className='form-control'
                onChange={e => this.onNameChange(e.target.value, 'name')}
              />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label> Address</label>
              <input
                type='text'
                className='form-control'
                onChange={e => this.onNameChange(e.target.value, 'address')}
              />
            </div>
            <div className='form-group'>
              <label> Coordinates Latitude</label>
              <input
                type='text'
                className='form-control'
                onChange={e => this.onNameChange(e.target.value, 'coordinates_lat')}
              />
            </div>
            <div className='form-group'>
              <label> Coordinates Longitude</label>
              <input
                type='text'
                className='form-control'
                onChange={e => this.onNameChange(e.target.value, 'coordinates_lng')}
              />
            </div>
            <div className='form-group'>
              <label> Category </label>
              <select
                className='form-control'
                onChange={e => this.onNameChange(e.target.value, 'categoryId')}
              >
                <option value=""> Choose category </option>
                {
                  this.props.categories.map(category => (
                    <option value={category.id} key={category.id}> {category.name} </option>
                  ))
                }
              </select>
            </div>
            <button className='btn btn-success' onClick={this.onAdd.bind(this)}>
              Add category
            </button>
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
  bindActionCreators({ addLocation }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation)
