import {
  TICKER_ERROR_FETCHING,
  TICKER_FETCHING_STARTED,
  TICKER_RETRIEVED,
} from './actionTypes';

const defautState = { data: null, error: false, loading: false };

const selectedTicker = (prevState = defautState, action) => {
  switch (action.type) {
    case TICKER_FETCHING_STARTED:
      return { ...prevState, loading: true };
    case TICKER_RETRIEVED:
      return { data: action.payload, loading: false, error: false };
    case TICKER_ERROR_FETCHING:
      return { ...prevState, error: true };
    default:
      return prevState;
  }
};
export default selectedTicker;
