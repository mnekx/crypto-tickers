import renderWthRedux from '../utils/testHelpers';
import TickerDetail from '../components/TickerDetail';
import Ticker from '../components/Ticker';
import Filter from '../components/Filter';
import {Tickers} from '../components/Tickers';

describe('All components should render without crashing', () => {
  it('TickerDetail should render perfectly.', () => {
    renderWthRedux( <TickerDetail/>);
  });
  it('Ticker should render perfectly.', () => {
    renderWthRedux(<Ticker ticker={{symbol: 's', name: 'name', total_supply: 10}}/>);
  });
  it('Filter should render perfectly.', () => {
    renderWthRedux(<Filter/>);
  });
  it('Tickers should render perfectly.', () => {
    renderWthRedux(<Tickers/>);
  });
});
