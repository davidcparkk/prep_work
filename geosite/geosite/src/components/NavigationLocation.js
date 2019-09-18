import React from 'react';
import { connect} from 'react-redux';
import LocationList from './LocationList';

class NavigationLocation extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectedSubgroup: 'Residences'
    };
  }

  handleChange = (e) => {
    this.setState({ selectedSubgroup: e.currentTarget.dataset.id });
  }

  render(){
    return(
      <div className="nav-container">
        <ul className="navbar">
          <li value="Residences" onClick={this.handleChange} data-id="Residences" className="navbar-li" style={{backgroundColor: '#66ccff'}}>Residences</li>
          <li value="Employers" onClick={this.handleChange}data-id="Employers" className="navbar-li" style={{backgroundColor: '#ffcccc'}}>Employers</li>
        </ul>
        
        {
          this.state.selectedSubgroup === 'Employers' ?
          <LocationList subgroup={this.props.employers} color={'#ffcccc'}/>
          : <LocationList subgroup={this.props.residences} color={'66ccff'}/>
        }
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

export default connect(mapStateToProps, {} )(NavigationLocation);