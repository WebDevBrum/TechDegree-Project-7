import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

const Nav = () => {
  return (
    <Fragment>
      <nav className="main-nav">
        <ul>
          <li><a href='#'>Cats</a></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
        </ul>
      </nav>


    </Fragment>

  );

};

Nav.propTypes = {


};

export default Nav;