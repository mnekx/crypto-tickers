import tickers from '../../redux/tickers/reducers';
import { FETCHING_STARTED } from '../../redux/tickers/actionTypes';
import mockStore from './mocc.store';

let state = mockStore;
describe('Redux should work properly', () => {
  it('should dispatch fetch start action properly', () => {
    state = tickers(state, { type: FETCHING_STARTED });
    expect(state.loading).toBeTruthy();
  });
});
