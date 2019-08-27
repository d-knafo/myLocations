import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editCategory } from '../../redux/actions/categories'

class EditCategory extends Component {
  componentWillMount () {
    this.setState({
      name: this.props.categories[this.props.match.params.id].name
    })
  }

  onNameChange (value) {
    this.setState({ name: value })
  }

  onSave () {
    this.props.editCategory({
      name: this.state.name,
      id: this.props.match.params.id
    })
    this.props.history.goBack()
  }

  render () {
    return (
      <div className='card'>
        <div className='card-body'>
          <div className='form-group'>
            <label>Enter the name of category</label>
            <input
              type='text'
              className='form-control'
              onChange={e => this.onNameChange(e.target.value)}
              value={this.state.name}
            />
          </div>
          <button className='btn btn-primary' onClick={this.onSave.bind(this)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)
