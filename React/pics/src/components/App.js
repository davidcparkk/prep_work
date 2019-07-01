import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID f13c50006d7d63bf5c56d39572a4a1cd3f9d6dfed7fc453ad6504155a7671b68'
      }
    });
    // console.log(term);
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;