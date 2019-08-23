import {
  GET_LANDING_PAGE_DATA
} from '../constants';

const initialLandingPageState = {
  data: []
}

const landingPageReducer  = (state=initialLandingPageState, action={}) => {
  switch(action.type) {
    case GET_LANDING_PAGE_DATA:
      return Object.assign({}, state, {
        data: action.payload
      });
    default:
      return state;
  }      
}

export default landingPageReducer;