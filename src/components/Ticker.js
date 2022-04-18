import { NavLink } from 'react-router-dom';
import PropTypes from 'proptypes';

const Ticker = ({ ticker }) => (
  <li
    key={ticker.id}
    style={{
      backgroundImage:
        `url("https://cryptoicons.org/api/icon/${
          ticker.symbol.toLowerCase()
        }/400")`,
    }}
    className="item-container imaged-bg"
  >
    <NavLink to={`tickers/${ticker.id}`}>

      <section
        className="item"
      >
        <h2>{ticker.name}</h2>
        <p>
          <span>
            <b>Supply: </b>
          </span>
          {ticker.total_supply.toLocaleString()}
        </p>
        <i className="far fa-arrow-alt-circle-right" />
      </section>
    </NavLink>
  </li>
);

Ticker.propTypes = {
  ticker: PropTypes.shape({
    id: PropTypes.string,
    symbol: PropTypes.string,
    total_supply: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Ticker;
