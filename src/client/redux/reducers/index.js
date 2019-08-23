import { combineReducers } from 'redux';
import landingPageReducer from './landingPage';

export default combineReducers({
  landing_page_data: landingPageReducer
});