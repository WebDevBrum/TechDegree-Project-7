import React, { Component } from 'react';

import PropTypes from 'prop-types';

/*Components*/
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

  static propTypes = {


  }

  state = {

  };

  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          <Photo />
          {/* Not Found */}
          <NotFound />

        </ul>
      </div>
    );
  }
};


export default PhotoContainer;