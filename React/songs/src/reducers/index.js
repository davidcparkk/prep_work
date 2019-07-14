import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Blackstreet', duration: '4:05' },
    { title: 'All Star', duration: '1:05' },
    { title: 'Macerana', duration: '2:05' },
    { title: 'All I want is you', duration: '10:05' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});