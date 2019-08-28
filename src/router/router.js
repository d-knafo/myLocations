import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/home/index'
import Categories from '../containers/Categories/index'
import EditCategory from '../containers/Categories/EditCategory'
import AddCategory from '../containers/Categories/AddCategory'
import Locations from '../containers/Locations/index'
import EditLocation from '../containers/Locations/EditLocation'
import ViewLocation from '../containers/Locations/ViewLocation'
import AddLocation from '../containers/Locations/AddLocation'

class ReactRouter extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/category/new' component={AddCategory} />
        <Route path='/category/:id/edit' component={EditCategory} />
        <Route path='/locations' component={Locations} />
        <Route path='/location/new' component={AddLocation} />
        <Route path='/location/:id/edit' component={EditLocation} />
        <Route path='/location/:id/view' component={ViewLocation} />
      </React.Fragment>
    )
  }
}

export default ReactRouter
