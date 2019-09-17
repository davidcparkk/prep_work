import React from 'react';
import { connect} from 'react-redux';
import LocationItem from './LocationItem';

class LocationList extends React.Component {
  renderResidences(){
    return this.props.residences.map( residence => {
      return(
        <div>
          {residence.name}
        </div>
      )
    })
  }

  renderEmployers(){
    return this.props.employers.map( employer => {
      return(
        <div>
          {employer.name}
        </div>
      )
    })
  }

  render(){
    return(
      <div className="location-list">
        {this.renderResidences()}
        {this.renderEmployers()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    residences: state.residences,
    employers: state.employers
  }
}

export default connect(mapStateToProps, {} )(LocationList);