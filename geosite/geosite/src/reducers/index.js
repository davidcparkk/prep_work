import { combineReducers } from 'redux';

const residencesReducer = () => {
  return [
    { lat: 0, lng: 0, name: 'Oakland' },
    { lat: 0, lng: 0, name: 'Downtown Los Angeles' },
    { lat: 0, lng: 0, name: 'UCLA' },
  ]
}

const employersReducer = () => {
  return [
    { lat: 0, lng: 0, name: 'App Academy'},
    { lat: 0, lng: 0, name: 'AECOM' },
    { lat: 0, lng: 0, name: 'Financial Compound' },
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