import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
      <Container className="container">
        {loading ? (
          <div className="d-none">
            <span className="mt-5 h3">Loading...</span>
          </div>
        ) : (
          <Row>{continents.continent.map((continent) => (
            
            <div key={continent.id}></Row>
             <div className="col-6 bg-warning border h-100">
               {continent.name}
                {continent.image}
                    <Link to={`/CountryDetail/${continent.id}`} className="m-2">
                      <p className="d-none">{continent.name}</p>
                    </Link>
                  </div>
                </div>
            ))}
        )}
      </Container>
    );
  }

  return (
    <>
      <div>error</div>
    </>
  );
};

export default Continents;
