import { React, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../../Redux/ReducerCountries';

function CountryInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry(id));
  }, []);
  const { country, loading } = useSelector((state) => state.countryReducer);
  return (
    <div className="container">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3">Loading...</span>
        </div>
      ) : (
        country.map((countryId) => (
          <>
            <div className="d-flex row shadow col col-sm-12 mx-2" key={id}>
              <h1 className="d-flex justify-content-end">
                {countryId.name}
              </h1>
              <h5 className="d-flex justify-content-start ">
                Deaths:
                {countryId.today_deaths}
              </h5>
              <h5 className="d-flex justify-content-start ">
                Positive:
                {countryId.today_positive}
              </h5>
            </div>
          </>
        ))
      )}
    </div>
  );
}

export default CountryInfo;
