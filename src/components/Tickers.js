import React from 'react';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import Ticker from './Ticker';
export const Tickers = () => {
  const tickers = useSelector((state) => state.tickers);

  if (tickers.loading) {
    return (
      <section>
        <Filter />
        <span>Loading...</span>
      </section>
    );
  }
  if (tickers.error) {
    return (
      <section>
        <Filter />
        <span>There has been an error!</span>
      </section>
    );
  }
  const tickersUL = (
    <ul className='items d-grid'>
      {tickers.list.map((ticker) => (
        <Ticker ticker={ticker} />
      ))}
    </ul>
  );

  const searchingSpan = <span>Searching...</span>;
  return (
    <section>
      <Filter />
      {tickers.searching ? searchingSpan : tickersUL}
    </section>
  );
};
