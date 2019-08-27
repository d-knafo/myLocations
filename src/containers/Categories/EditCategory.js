import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { editCategory } from '../../redux/actions/categories'

class EditCategory extends Component {
  componentWillMount() {
    const id = parseInt(this.props.match.params.id)
    const initObj = this.props.categories.find(e => e.id === id)

    this.setState({
      name: initObj.name
    })
  }

  onNameChange(value) {
    this.setState({ name: value })
  }

  onSave() {
    if (this.state.name) {
      this.props.editCategory({
        name: this.state.name,
        id: parseInt(this.props.match.params.id)
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
      <div className="card">
        <div className="card-body">
          <div className="form-group">
            <label>Enter the name of category</label>
            <input
              type="text"
              className="form-control"
              onChange={e => this.onNameChange(e.target.value)}
              value={this.state.name}
            />
          </div>
          <button className="btn btn-primary" onClick={this.onSave.bind(this)}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories
})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ editCategory }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory)
