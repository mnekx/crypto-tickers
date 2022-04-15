import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  Route, Routes, Outlet, NavLink,
} from 'react-router-dom';
import { tickersRetrieved } from './redux/tickers/actions';
import TickerDetail from './components/TickerDetail';
import Tickers from './components/Tickers';
import '@fortawesome/fontawesome-free/js/all';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tickersRetrieved());
  }, [dispatch]);
  return (
    <div>
      <nav className="d-flex">
        <NavLink to="/"><i className="fa-solid fa-angle-left" /></NavLink>
        <div>
          <i className="fa-solid fa-magnifying-glass" />
          <i className="fa-solid fa-gear" />
        </div>
      </nav>
      <Routes>
        <Route exact path="/tickers/:id" element={<TickerDetail />} />
        <Route path="*" element={<Tickers />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
