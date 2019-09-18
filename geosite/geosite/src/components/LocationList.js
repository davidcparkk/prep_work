import React from 'react';
import { connect} from 'react-redux';
import LocationItem from './LocationItem';
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
        {/* {this.renderEmployers()} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    residences: state.residences,
    employers: state.employers
  }
}

export default connect(mapStateToProps, { selectLocation } )(LocationList);