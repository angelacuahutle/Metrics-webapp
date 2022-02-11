import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow bg-light mb-3">
      <h1 className="navbar-brand links-nav display-4">Covid Tracker</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
