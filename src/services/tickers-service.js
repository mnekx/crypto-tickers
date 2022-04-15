import http from '../server/http-tickers';

const getAll = () => http.get('/tickers');

const get = (id) => http.get(`/tickers/${id}`);

const TickersService = {
  getAll,
  get,
};

export default TickersService;
