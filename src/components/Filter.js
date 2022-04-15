import React from 'react';
import { useDispatch } from 'react-redux';
import { startedSearching, tickerSearched } from '../redux/tickers/actions';
const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(startedSearching())
        dispatch(tickerSearched(e.target.value))
    }
  const handleSubmit = (e) => {
      e.preventDefault()
    console.log(e);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">
        <input type="text" onChange={(e)=>handleChange(e)} name="tickerName" id="name" placeholder="Filter..." />
      </label>
    </form>
  );
};
export default Filter;
