import React, { Component } from 'react';

import PropTypes from 'prop-types';

/*Components*/
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

  static propTypes = {


  }

  state = {
    loading: true,

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
    let notFound;
    if (results.length > 0) {
      photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />);
    } else {
      notFound = <NotFound />
    }
    if (this.props.loading === false) {
      return (
        <div className="photo-container">

          <h2>{this.props.title}</h2>


          <ul>

            {photos}


          </ul>
          {notFound}
        </div>

      );
    } else {
      return (
        <div className="photo-container">

          <h2>'loading...'</h2>


        </div>

      );



    }
  }
};


export default PhotoContainer;