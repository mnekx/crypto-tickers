import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import tickerRetrieved from '../redux/ticker/actions';

const TickerDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tickerRetrieved(id));
  }, [dispatch, id]);
  const currentTicker = useSelector((state) => state.selectedTicker);
  if (currentTicker.loading || currentTicker.data === null) {
    return <span>Loading...</span>;
  }
  if (currentTicker.error) {
    return <span>There has been an error</span>;
  }
  const detail = (
    <div>
      <section
        style={{
          backgroundImage:
      `url("https://cryptoicons.org/api/icon/${
        currentTicker.data.symbol.toLowerCase()
      }/400")`,
        }}
        className="imaged-bg befored"
      >
        <hgroup>
          <h2>{currentTicker.data.name}</h2>
          <h3>
            <span>
              <b>Supply:</b>
            </span>
            {currentTicker.data.total_supply.toLocaleString()}
          </h3>
        </hgroup>
      </section>
      <section className="info-container">
        <h2>Coin Information</h2>
        <ul className="info">
          <li className="d-flex befored">
            <span>Circulating Supply: </span>
            {' '}
            <div className="d-flex">
              <span>{currentTicker.data.circulating_supply.toLocaleString()}</span>
              <i className="far fa-arrow-alt-circle-right" />
            </div>
          </li>
          <li className="d-flex">
            <span>Total Supply: </span>
            {' '}
            <div className="d-flex">
              <span>{currentTicker.data.total_supply.toLocaleString()}</span>
              <i className="far fa-arrow-alt-circle-right" />
            </div>
          </li>
          <li className="d-flex befored">
            <span>Maximum Supply: </span>
            {' '}
            <div className="d-flex">
              <span>{currentTicker.data.max_supply.toLocaleString()}</span>
              <i className="far fa-arrow-alt-circle-right" />
            </div>
          </li>
          <li className="d-flex">
            <span>Maximum Supply: </span>
            {' '}
            <div className="d-flex">
              <span>{currentTicker.data.max_supply.toLocaleString()}</span>
              <i className="far fa-arrow-alt-circle-right" />
            </div>
          </li>
          <li className="d-flex befored">
            <span>First Data: </span>
            {' '}
            <div className="d-flex">
              <span>{currentTicker.data.first_data_at.toLocaleString()}</span>
              <i className="far fa-arrow-alt-circle-right" />
            </div>
          </li>
          <li className="d-flex">
            <span>Last Updated: </span>
            {' '}
            <div className="d-flex">
              <span>{currentTicker.data.last_updated.toLocaleString()}</span>
              <i className="far fa-arrow-alt-circle-right" />
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
  return detail;
};

export default TickerDetail;
