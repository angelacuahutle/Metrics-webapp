import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getContinents } from '../Redux/ReducerContinent';

const Continents = () => {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continentReducer);
  const loading = false;

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);
  if (continents.continent !== undefined) {
    return (
      <>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          <div className="d-flex">
            {continents.continent.map((continent) => (
              <div key={continent.id}>
                <p>{continent.name}</p>
                <Link to={`/CountryDetail/${continent.id}`} className="m-2">
                  <p>{continent.name}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div>error</div>
    </>
  );
};

export default Continents;
