import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends React.Component {
  constructor (props){
    super(props);

    this.state={
      employers: [{
        lat: 34.0522, lng: -118.2437
      }],
      residences:[{
        lat: 37.8044, lng: -122.2712
      }]

    }
  }

  displayMarkers = () => {
    return this.state.residences.map( (residence, index) => {
      return <Marker key={index} id={index} position={{
        lat: residence.lat,
        lng: residence.lng
      }}
      onClick={() => console.log("You clicked me!")}
      />
    })
  }
  

  render() {
    const mapStyles = {
      width: '50%',
      height: '50%',
    };

    return <div>
      <Map 
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }}
      >
        {this.displayMarkers()}
      </Map>
        
    </div>;
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC3K5QN8HIQwZwa-fb2iGL868KC6z9J3ZE'
})(MapContainer);