import {
  GET_LANDING_PAGE_DATA
} from '../constants';

import client from '../../../config';

export const getLandingPageData = () => (dispatch) => {
  client.getEntries().then(entries => {
    dispatch({
      type: GET_LANDING_PAGE_DATA,
      payload: entries
    });  
  });
}