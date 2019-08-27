import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCategory } from '../../redux/actions/categories'

class AddCategory extends Component {
  constructor () {
    super()
    this.setState({ name: '' })
  }

  onNameChange (value) {
    this.setState({ name: value })
  }

  onAdd () {
    if (this.state.name != '') {
      this.props.addCategory(this.state.name)
    } else {
      alert('Must fill input')
    }
  }

  render () {
    return (
      <li className='list-group-item'>
        <div class='row'>
          <div class='col-6'>
            <input
              type='text'
              className='form-control'
              onChange={e => this.onNameChange(e.target.value)}
            />
          </div>
          <div className='col-6'>
            <button className='btn btn-success' onClick={this.onAdd.bind(this)}>
              Add category
            </button>
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ categories }) => ({})

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({ addCategory }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory)
