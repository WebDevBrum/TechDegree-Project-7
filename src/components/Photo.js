import React from 'react';

import PropTypes from 'prop-types';

const Photo = (props) => {
  return (
    <li>
      <img src={props.url} alt="" />
    </li>




  );

};

Photo.propTypes = {


};

export default Photo;

