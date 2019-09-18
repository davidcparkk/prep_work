import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect} from 'react-redux';
import KEYS from '../config/keys';

class MapContainer extends React.Component {
  constructor (props){
    super(props);
  }

  displayMarkersResidences = () => {
    return this.props.residences.map( (residence, index) => {
      return <Marker key={index} id={index} position={{
        lat: residence.lat,
        lng: residence.lng
      }}
      onClick={() => console.log("You clicked me!")}
      />
    })
  }

  displayMarkersEmployers = () => {
    return this.props.employers.map( (employer, index) => {
      return <Marker key={index} id={index} position={{
        lat: employer.lat,
        lng: employer.lng
      }}
      onClick={() => console.log("You clicked me!")}
      />
    })
  }  

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map 
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
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
