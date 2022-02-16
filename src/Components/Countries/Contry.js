import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../App.css';

const Country = ({ country }) => (
  <div className="col col-6 text-center col-size shadow back-color">
    <div className="m-4">
      <div className="d-flex justify-content-end m-2">
        <Link to={`/CountryInfo/${country.id}`} className="m-2">
          <FontAwesomeIcon icon={faPlusCircle} color="balck" className="justify-content-end" />
        </Link>
      </div>
      <h5 className="">{country.name}</h5>
      <span className="text-uppercase">
        Deaths:
        {country.deaths}
      </span>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
};

export default Country;
