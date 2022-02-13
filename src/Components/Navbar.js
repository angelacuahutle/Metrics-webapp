import React from 'react';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow bg-light mb-3">
      <FontAwesomeIcon icon={faGlobe} className="my-3" />
      <h1 className="navbar-brand links-nav display-4">Covid Tracker</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
