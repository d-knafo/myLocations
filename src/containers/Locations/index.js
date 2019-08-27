import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RowLocations from './RowLocations'
import AddLocation from './AddLocation'

class Locations extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm'>
            <h1> Add Location</h1>
            <AddLocation />
          </div>
          <div className='col-sm'>
            <h1> My Locations </h1>
            <ul className='list-group'>
              {
                this.props.locations.map(location => (
                  <RowLocations location={location} key={location.id}/>
                ))
              }
            </ul>
          </div>
        </div>
        <ul />
      </div>
    )
  }
}

const mapStateToProps = ({ locations }) => ({ locations: locations.locations })

const mapDispatchToProps = (dispatch, myProps) =>
  bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Locations)
