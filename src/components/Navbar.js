import React from 'react';
import Link from 'gatsby-link';

import logo from '../img/logo.svg';

const Navbar = () => (
  <div className="nav has-text-centered">
      <div className="navbar-links">
      <Link to="/">
        About
      </Link>
      <Link to="/">
        Gallery
      </Link>
      <Link className="logo" to="/">
        Brendan Lynch
      </Link>
      <Link to="/">
        Testimonials
      </Link>
      <Link to="/">
        Contact
      </Link>
      </div>
      <h4 className="is-size-4">Photographer - Weddings - Gothenburg</h4>
  </div>
    
);

export default Navbar;
