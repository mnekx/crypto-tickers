import {
  FETCHING_STARTED,
  TICKERS_FETCHED,
  ERROR_FETCHING,
  TICKER_SEARCHED,
  STARTED_SEARCHING,
} from './actionTypes';

const defaultState = {
  list: [],
  loading: false,
  error: false,
  searching: false,
  filteredList: [],
};

const tickers = (prevState = defaultState, action) => {
  const re = new RegExp(`${action.name}`, 'img');
  switch (action.type) {
    case FETCHING_STARTED:
      return { ...prevState, loading: true };
    case TICKERS_FETCHED:
      return {
        ...prevState,
        list: action.payload,
        loading: false,
        error: false,
      };
    case ERROR_FETCHING:
      return { ...prevState, error: true, loading: false };
    case TICKER_SEARCHED:
      return {
        ...prevState,
        searching: false,
        filteredList: prevState.list.filter(
          (ticker) => ticker.name.match(re) !== null,
        ),
      };
    case STARTED_SEARCHING:
      return { ...prevState, searching: true };

    default:
      return prevState;
  }
};

export default tickers;
