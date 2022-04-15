import { NavLink } from 'react-router-dom';
const Ticker = ({ ticker }) => {
  return (
    <li key={ticker.id} style={{
      backgroundImage:
        'url("https://cryptoicons.org/api/icon/' +
        ticker.symbol.toLowerCase() +
        '/400")',
    }} className="item-container imaged-bg">
      <NavLink to={'tickers/' + ticker.id}>
        
        <section
          
          className="item">
          <h2>{ticker.name}</h2>
          <p>
            <span>
              <b>Supply: </b>
            </span>
            {ticker.total_supply.toLocaleString()}
          </p>
          <i class="far fa-arrow-alt-circle-right"></i>
        </section>
      </NavLink>
    </li>
  );
};

export default Ticker;
