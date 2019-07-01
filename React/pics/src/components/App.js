import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term },
      headers: {
        Authorization: 'Client-ID f13c50006d7d63bf5c56d39572a4a1cd3f9d6dfed7fc453ad6504155a7671b68'
      }
    });
    
    this.setState({ images: response.data.results });

    // .then((response) => {
    //   console.log(response.data.results);
    // });
    
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
      </div>
    )
  }
}

export default App;