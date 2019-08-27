import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    zoom: 11
  };

  render () {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyCYl736a2rxD0qd9a5fMAxW30V8mqRg_Vs"}}
         defaultCenter={this.props.coordinates}
         defaultZoom={this.props.zoom}
       >
       </GoogleMapReact>
     </div>
    )
  }
}

export default Map
