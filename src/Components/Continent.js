import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
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
      <div className="container">
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          <div className="row">
            {continents.continent.map((continent) => (
              <div key={continent.id} className="col col-6 col-size shadow bg-secondary border">
                <div className="">
                  <div className="d-flex justify-content-start">
                    <p>{continent.name}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <p>Here!</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div>error</div>
    </>
  );
};

export default Continents;
