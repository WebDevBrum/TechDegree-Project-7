import React, { Component } from 'react';

import PropTypes from 'prop-types';

/*Components*/
import Photo from './Photo';


class PhotoContainer extends Component {

  static propTypes = {


  }

  state = {
    photos: [],
    loading: true
  };



  componentDidMount() {
    let search = this.props.search;
    this.props.query(search);

  }





  render() {
    console.log(this.state.photos);
    return (
      <div className="photo-container">
        <h2>{this.props.title}</h2>
        <ul>
          <Photo />


        </ul>
      </div>
    );
  }
};


export default PhotoContainer;