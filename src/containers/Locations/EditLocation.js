import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Select from 'react-select';
import { editLocation } from '../../redux/actions/locations'

class EditLocation extends Component {
  constructor(props) {
    super(props)
    const id = parseInt(this.props.match.params.id)
    const categories = this.props.categories
    const initObj = this.props.locations.find(e => e.id === id)
    const selectedOptionArr = initObj.categoryId.map(e => {
      return categories.filter(c => c.id === e)
    })

    this.state = {
      name: initObj.name,
      id: initObj.id,
      address: initObj.address,
      coordinates_lat: initObj.coordinates_lat,
      coordinates_lng: initObj.coordinates_lng,
      categoryId: initObj.categoryId,
      selectedOption: selectedOptionArr.map(o => o[0]),
    }
  }

  onNameChange(value, field) {
    this.setState({ [field]: value })
  }

  onChangeCategories = selectedOption => {
    console.log(selectedOption);
     this.setState({ selectedOption });
     let ids = selectedOption.map(o => o.id)
     this.setState({categoryId: ids})
   };

  onSave() {
    if (
      this.state.name &&
      this.state.address &&
      this.state.coordinates_lat &&
      this.state.coordinates_lng &&
      this.state.categoryId
    ) {
      this.props.editLocation({
        name: this.state.name,
        id: this.state.id,
        address: this.state.address,
        coordinates_lat: this.state.coordinates_lat,
        coordinates_lng: this.state.coordinates_lng,
        categoryId: this.state.categoryId
      })
      this.notifySuccess()
      this.props.history.goBack()
    } else {
      this.notifyError()
    }
  }

  notifyError = () =>
    toast.error('All fields required!', {
      position: toast.POSITION.TOP_RIGHT
    })

  notifySuccess = () =>
    toast.success('New Locations been created', {
      position: toast.POSITION.TOP_RIGHT
    })

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <span className="navbar-text">
            Edit Location
          </span>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <button className='btn btn-warning mr-2' onClick={this.props.history.goBack}>
                Back
              </button>
              <button className='btn btn-success' onClick={this.onSave.bind(this)}>
                Save
              </button>
            </li>
          </ul>
        </nav>

      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.onNameChange(e.target.value, 'name')}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label> Address</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.onNameChange(e.target.value, 'address')}
              value={this.state.address}
            />
          </div>
          <div className="form-group">
            <label> Coordinates Latitude</label>
            <input
              type="text"
              className="form-control"
              onChange={e =>
                this.onNameChange(e.target.value, 'coordinates_lat')
              }
              value={this.state.coordinates_lat}
            />
          </div>
          <div className="form-group">
            <label> Coordinates Longitude</label>
            <input
              type="text"
              className="form-control"
              onChange={e =>
                this.onNameChange(e.target.value, 'coordinates_lng')
              }
              value={this.state.coordinates_lng}
            />
          </div>
          <div className="form-group">
            <label> Category </label>
            <select
              className="form-control"
              onChange={e => this.onNameChange(e.target.value, 'categoryId')}
              value={this.state.categoryId}>
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
                 onChange={this.onChangeCategories}
                 options={this.props.categories}
                 isMulti={true}
                 getOptionValue={option => option.id}
                 getOptionLabel={option => option.name}
               />
          </div>
          <button className="btn btn-success" onClick={this.onSave.bind(this)}>
            Save
          </button>
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
  bindActionCreators({ editLocation }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLocation)
