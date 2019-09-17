import React from 'react';
import Map from './Map';
import LocationList from './LocationList';

class App extends React.Component {
  state = {
    selectedLocation: null
  };

  render(){
    return(
      <div className="ui container">
        <div className="ui grid">
          <div className="ui row">
            <Map />
            <LocationList />
          </div>
        </div>
      </div>
    )
  }
};

export default App;