/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import LibaryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
export default combineReducers({
  libraries: LibaryReducer,
  selectedLibraryId: SelectionReducer,
// eslint-disable-next-line eol-last
});