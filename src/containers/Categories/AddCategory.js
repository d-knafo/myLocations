import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

 import { addCategory } from '../../redux/actions/categories'

class AddCategory extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
    }
  }

  onNameChange (value) {
    this.setState({ name: value })
  }

  onAdd () {
    if (this.state.name) {
      this.props.addCategory(this.state.name)
      this.notifySuccess()
      this.props.history.goBack()
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
              Manage your categories &nbsp;
            </span>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <button className='btn btn-success' onClick={this.onAdd.bind(this)}>
                  Add Category
                </button>
                <button className='btn btn-warning ml-2' onClick={this.props.history.goBack}>
                  Back
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
                      onChange={e => this.onNameChange(e.target.value)}
                    />
                </div>
            </div>
          </div>

        </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ addCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)
