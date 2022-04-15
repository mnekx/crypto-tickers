import {
  ERROR_FETCHING,
  FETCHING_STARTED,
  STARTED_SEARCHING,
  TICKERS_FETCHED,
  TICKER_SEARCHED
} from './actionTypes';

import TickersService from '../../services/tickers-service';

const tickersFetchingStarted = () => ({ type: FETCHING_STARTED });

const tickersFetched = (data) => ({ type: TICKERS_FETCHED, payload: data });

const errorFetchingTickers = () => ({ type: ERROR_FETCHING });

export const tickerSearched = (tickerName) => ({
  type: TICKER_SEARCHED,
  name: tickerName,
});

export const startedSearching = () => ({type: STARTED_SEARCHING})

export const tickersRetrieved = () => async (dispatch) => {
  dispatch(tickersFetchingStarted());
  try {
    const res = await TickersService.getAll();

    dispatch(tickersFetched(res.data.slice(0, 100)));
    return Promise.resolve(res.data.slice(0, 100));
  } catch (error) {
    dispatch(errorFetchingTickers());
    return Promise.resolve(error);
  }
};
