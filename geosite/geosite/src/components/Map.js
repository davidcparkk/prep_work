import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect} from 'react-redux';
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


  // componentDidUpdate(prevProps, prevState){
  //   if (prevProps.selectedLocation !== this.props.selectedLocation){
  //     const params = this.props.google.maps.LatLng({
  //       lat: this.props.selectedLocation.lat,
  //       lng: this.props.selectedLocation.lng,
  //     });
  //     // this.props.google.maps.Map.panTo( 
  //     //   params
  //     //  );
  //     console.log(params);
  //     // console.log(this.props.google.maps);
  //     // console.log(this.props.google.maps.Map);
  //   } 
  // }

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

    const coords = !this.props.selectedLocation ? {lat: this.state.currentLocation.lat,
      lng: this.state.currentLocation.lng,} 
      : {
      lat: this.props.selectedLocation.lat,
      lng: this.props.selectedLocation.lng,
    };

    return (
      
      <Map 
        google={this.props.google}
        zoom={8}
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
