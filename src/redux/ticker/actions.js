import TickersService from '../../services/tickers-service';
import {
  TICKER_RETRIEVED,
  TICKER_ERROR_FETCHING,
  TICKER_FETCHING_STARTED,
} from './actionTypes';

const tickerFetchingStarted = () => ({ type: TICKER_FETCHING_STARTED });

const tickerFetched = (data) => ({ type: TICKER_RETRIEVED, payload: data });

const tickerFetchingErrored = () => ({ type: TICKER_ERROR_FETCHING });

const tickerRetrieved = (id) => async (dispatch) => {
  dispatch(tickerFetchingStarted());
  try {
    const res = await TickersService.get(id);

    dispatch(tickerFetched(res.data));
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch(tickerFetchingErrored());
    return Promise.resolve(error);
  }
};

export default tickerRetrieved;
