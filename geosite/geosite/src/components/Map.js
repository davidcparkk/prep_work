import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import KEYS from '../config/keys';

class MapContainer extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      currentLocation: {
        lat: 37.7749, lng: -122.4194
      }
    }
  }

  displayMarkersResidences = () => {
    return this.props.residences.map( (residence, index) => {
      return <Marker key={index} id={index} position={{
        lat: residence.lat,
        lng: residence.lng
      }}
      />
    })
  }

  displayMarkersEmployers = () => {
    return this.props.employers.map( (employer, index) => {
      return <Marker key={index} id={index} position={{
        lat: employer.lat,
        lng: employer.lng
      }}
      />
    })
  }  

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    const coords = !this.props.selectedLocation ? {lat: this.state.currentLocation.lat,
      lng: this.state.currentLocation.lng,} 
      : {
      lat: this.props.selectedLocation.lat,
      lng: this.props.selectedLocation.lng,
    };

    return (
      <Map 
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        center={coords}
      >
        {this.displayMarkersResidences()}
        {this.displayMarkersEmployers()}
      </Map>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedLocation: state.selectedLocation,
    residences: state.residences,
    employers: state.employers
  }
}

 const WrappedContainer = GoogleApiWrapper({
  apiKey: KEYS
})(MapContainer);

export default connect(mapStateToProps, {} )(WrappedContainer);
