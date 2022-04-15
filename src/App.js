import './App.css';
import { Tickers } from './components/Tickers';
import TickerDetail from './components/TickerDetail';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { tickersRetrieved } from './redux/tickers/actions';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tickersRetrieved());
  }, [dispatch]);
  return (
    <div>
      <nav className='d-flex'>
        <NavLink to="/" ><i className="fa-solid fa-angle-left"></i></NavLink>
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-gear"></i>
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
