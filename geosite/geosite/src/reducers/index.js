import { combineReducers } from 'redux';

const residencesReducer = () => {
  return [
    { lat: 37.8044, lng: -122.2712, name: 'Oakland (2019 - Present)' },
    { lat: 34.0407, lng: -118.2468, name: 'Downtown Los Angeles (2014-2018)' },
    { lat: 34.0689, lng: -118.4452, name: 'UCLA (2010 - 2014)' },
  ]
}

const employersReducer = () => {
  return [
    { lat: 37.7749, lng: -122.4194, name: 'App Academy (SF)'},
    { lat: 34.0407, lng: -118.2468, name: 'AECOM (DTLA)' },
    { lat: 34.0195, lng: -118.4912, name: 'Financial Compound (SaMo)' },
  ]
}

const selectedLocationReducer = (selectedLocation = null, action) => {
  if (action.type === 'LOCATION_SELECTED'){
    return action.payload;
  }
  return selectedLocation;
}

export default combineReducers({
  residences: residencesReducer,
  employers: employersReducer,
  selectedLocation: selectedLocationReducer
});