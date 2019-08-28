import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const Location = ({ text }) => <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>;

class Map extends Component {
  static defaultProps = {
    zoom: 11
  };

 toFixed(num, precision) {
  return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
}

  render () {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
       <GoogleMapReact
         bootstrapURLKeys={{ key: "AIzaSyCYl736a2rxD0qd9a5fMAxW30V8mqRg_Vs"}}
         defaultCenter={{
           lat: parseFloat(this.toFixed(this.props.lat, 2)),
           lng: parseFloat(this.toFixed(this.props.lng, 2))
         }}
         defaultZoom={this.props.zoom}
       >
       <Location
          lat={this.props.lat}
          lng={this.props.lng}
          text={this.props.name}
        />
       </GoogleMapReact>
     </div>
    )
  }
}

export default Map
