import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContinents } from '../Redux/ReducerContinent';

const Continents = () => {
  const dispatch = useDispatch();
  const { loading, continents } = useSelector((state) => state.continentReducer);

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3">Loading...</span>
        </div>
      ) : (
        <div className="d-flex">
          {continents.map((continent) => (
            <div key={continent.id}>
              <p>{continent.id}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Continents;
