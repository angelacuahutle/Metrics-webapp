import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow bg-light mb-4">
      <div className="d-flex aling-item-start">
        <FontAwesomeIcon icon={faGlobeAmericas} className="d-flex aling-item-start m-2" />
        <h1 className="navbar-brand links-nav font-weight-light d-flex">COVID-TRACKER</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
