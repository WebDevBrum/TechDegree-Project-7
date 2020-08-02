import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';


import PropTypes from 'prop-types';

const Nav = () => {
  return (
    <Fragment>
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/bars'>Bars</NavLink></li>
          <li><NavLink to='/beer'>Beer</NavLink></li>
          <li><NavLink to='/burgers'>Burgers</NavLink></li>
        </ul>
      </nav>


    </Fragment>

  );

};

Nav.propTypes = {


};

export default Nav;