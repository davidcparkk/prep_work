import React from 'react';

class SearchBar extends React.Component {
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick(){
  //   console.log('Input was clicked');
  // }

  state = { term: '' };

  render() {
    return(
       <div className="ui segment">
         <form className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input type = "text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value.toUpperCase()})} />
            </div>
         </form>
       </div>
    )
  }
}

export default SearchBar;