import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

class Search extends Component {

  static propTypes = {
    data: PropTypes.string,
    search: PropTypes.func
  }

  state = {
    searchText: '',
    loading: true
  };

  /* Utilisation of search input data */

  onChange = (e) => {
    this.setState({ searchText: e.target.value });
  }

  /* Updates page and url on form submission and clears form data */
  /** Pushes path to history  */

  handleSubmit = (e) => {
    e.preventDefault();
    let searchInput = this.state.searchText;
    let path = `/search/${searchInput}`;
    this.props.search(searchInput);
    this.props.history.push(path);
    document.getElementById('search').reset();
  }

  /* For browser forward/back, syncs search value with page url*/

  componentDidUpdate() {
    let pathArray = window.location.pathname.split('/');
    let search = pathArray.length - 1;
    let searchLoc = pathArray[search];

    if (this.props.data !== searchLoc) {
      this.props.search(searchLoc);
    }
  }

  render() {
    return (
      <Fragment>
        <form className="search-form" id="search" onSubmit={this.handleSubmit}>
          <input type="search" name="search" placeholder="Search" required onChange={this.onChange} />
          <button type="submit" className="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>
      </Fragment>
    );
  }
};

export default withRouter(Search);