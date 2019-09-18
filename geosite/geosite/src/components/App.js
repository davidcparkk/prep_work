import React from 'react';
import MapContainer from './Map';
import LocationList from './LocationList';
import NavigationLocation from './NavigationLocation';
import '../stylesheets/Map.css';

class App extends React.Component {
  state = {
    selectedLocation: null
  };

  render(){
    return(
        <div className="ui-grid">
          <div className="ui-row">
            <div className="header">
              <div className="title">
                <h1>Geosite Coding Task (Frontend Engineer)</h1>
                <h2>David Park's Residences and Employers</h2>
              </div>
              <div className="list-container">
                <NavigationLocation />
              </div>
            </div>
            <div className="map-container">
              <MapContainer />
            </div>
            
          </div>
        </div>
    )
  }
};

export default App;