import React from 'react';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import Ticker from './Ticker';

const Tickers = () => {
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
  const tickersList = tickers.filteredList?.length === 0
    ? tickers.list : tickers.filteredList;
  const tickersUL = (
    <ul className="items d-grid">
      {tickersList.map((ticker) => (
        <Ticker key={ticker.id} ticker={ticker} />
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

export default Tickers;
