import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/guitars'>Guitars</NavLink></li>
          <li><NavLink to='/beer'>Beer</NavLink></li>
          <li><NavLink to='/burgers'>Burgers</NavLink></li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;