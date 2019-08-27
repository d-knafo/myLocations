import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editLocation } from '../../redux/actions/locations'

class EditLocation extends Component {
  componentWillMount () {
    const id = this.props.match.params.id
    const initObj = this.props.locations.find(e => e.id == id)
    this.setState({
      name: initObj.name,
      id: initObj.id,
      address: initObj.address,
      coordinates_lat: initObj.coordinates_lat,
      coordinates_lng: initObj.coordinates_lng,
      categoryId: initObj.categoryId
    })
  }

  onNameChange (value, field) {
    this.setState({ [field]: value })
  }

  onSave () {
    console.log(this.state)
    if (this.state.name) {
      this.props.editLocation({
        name: this.state.name,
        id: this.state.id,
        address: this.state.address,
        coordinates_lat: this.state.coordinates_lat,
        coordinates_lng: this.state.coordinates_lng,
        categoryId: this.state.categoryId
      })
      this.props.history.goBack()
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
              value={this.state.name}
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
              value={this.state.address}
            />
          </div>
          <div className='form-group'>
            <label> Coordinates Latitude</label>
            <input
              type='text'
              className='form-control'
              onChange={
                e => this.onNameChange(e.target.value, 'coordinates_lat')
              }
              value={this.state.coordinates_lat}
            />
          </div>
          <div className='form-group'>
            <label> Coordinates Longitude</label>
            <input
              type='text'
              className='form-control'
              onChange={
                e => this.onNameChange(e.target.value, 'coordinates_lng')
              }
              value={this.state.coordinates_lng}
            />
          </div>
          <div className='form-group'>
            <label> Category </label>
            <select
              className='form-control'
              onChange={e => this.onNameChange(e.target.value, 'categoryId')}
              value={this.state.categoryId}
            >
              {this.props.categories.map(category => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
                ))}
            </select>
          </div>
          <button className='btn btn-success' onClick={ this.onSave.bind(this) }>
            Save
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
  bindActionCreators({ editLocation }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditLocation)
