import React, { Component } from 'react';

import PropTypes from 'prop-types';

/*Components*/
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

  static propTypes = {


  }

  state = {


  }

  componentDidMount() {
    this.search();
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {

      this.search();
    }

  }



  search = () => {
    this.props.query(this.props.search);
  }




  render() {

    console.log(this.props.search);
    console.log(this.props.data);
    const results = this.props.data;

    let photos;
    if (results.length > 0) {
      photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />);
    } else {
      photos = <NotFound />
    }

    return (
      <div className="photo-container">
        <h2>{this.props.title}</h2>
        <ul>
          {photos}


        </ul>
      </div>
    );
  }
};


export default PhotoContainer;