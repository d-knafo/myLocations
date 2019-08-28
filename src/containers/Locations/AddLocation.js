import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Select from 'react-select';
import { addLocation } from '../../redux/actions/locations'

class AddLocation extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      address: '',
      coordinates_lat: '',
      coordinates_lng: '',
      categoryId: '',
      selectedOption: null,
    }
  }

  onChangeCategories = selectedOption => {
     this.setState({ selectedOption });
     let ids = selectedOption.map(o => o.id)
     this.setState({categoryId: ids})
   };

  onNameChange (value, field) {
    this.setState({ [field]: value })
  }

  onAdd () {
    if (this.state.name && this.state.address && this.state.coordinates_lat && this.state.coordinates_lng &&  this.state.categoryId) {
      this.props.addLocation({
        name: this.state.name,
        address: this.state.address,
        coordinates_lat: this.state.coordinates_lat,
        coordinates_lng: this.state.coordinates_lng,
        categoryId: this.state.categoryId
      })
      this.notifySuccess()
    } else {
      this.notifyError()
    }
  }

  notifyError = () => toast.error("All fields required!", {
    position: toast.POSITION.TOP_RIGHT
  })

  notifySuccess = () => toast.success("New Locations been created", {
    position: toast.POSITION.TOP_RIGHT
  })

  render () {
    return (
      <div>
        
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <span className="navbar-text">
              Manage your Locations &nbsp;
            </span>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <button className='btn btn-warning mr-2' onClick={this.props.history.goBack}>
                  Back
                </button>
                <button className='btn btn-success' onClick={this.onAdd.bind(this)}>
                  Add Location
                </button>
              </li>
            </ul>
          </nav>

          <div className='card'>
            <div className='card-body'>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    onChange={e => this.onNameChange(e.target.value, 'name')}
                  />
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
                   <label> Category v2 </label>
                     <Select
                       value={this.state.selectedOption}
                       onChange={this.onChangeCategories}
                       options={this.props.categories}
                       isMulti={true}
                       getOptionValue={option => option.id}
                       getOptionLabel={option => option.name}
                     />
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
  bindActionCreators({ addLocation }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation)
