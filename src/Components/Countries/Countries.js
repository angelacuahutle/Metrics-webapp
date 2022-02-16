import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../Redux/ReducerCountries';
import Country from './Contry';
import '../../index.css';
import logo from '../../assets/loguito.png';

const Countries = () => {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const { loading, countries } = useSelector((state) => state.countriesReducer);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setSearch(countries);
  }, [countries]);

  const SearchHandler = (e) => {
    setSearch(
      countries.filter((c) => c.id.toLowerCase().includes(e.target.value)),
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="d-flex row logo">
          <img alt="logo" src={logo} className="mb-4" />
        </div>
        <div className="d-flex d-flex justify-content-center">
          <div className="row justify-content-center">
            <h1 className="alert alert-secondary mt-4 mb-4 justify-content-center">COVID DATA BY COUNTRY</h1>
            <br />
          </div>
        </div>
        <div>
          <input type="text" placeholder="FIND YOUR COUNTRY USING PROPER SYNTAX" onChange={SearchHandler} className="p-2 search-country" />
        </div>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          <div className="d-flex row">
            {search?.map((country) => (
              <Country key={country.id} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Countries;
