import React from 'react';
import { connect } from 'react-redux';
import { selectLocation } from '../actions';

class LocationList extends React.Component {
  renderList(){
    return this.props.subgroup.map( location => {
      return(
        <div className="item" key={location.name}>
          <div>
            {location.name}
          </div>
          <div>
            <button onClick={() => this.props.selectLocation(location)}>
              Select
            </button>
          </div>
        </div>
      )
    })
  }

  render(){
    return(
      <div className={`location-list-${this.props.color}`}>
        {this.renderList()}
      </div>
    )
  }
}

export default connect(null, { selectLocation } )(LocationList);