import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

/* Components */
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './config';
import InvalidRoute from './InvalidRoute';

class App extends Component {

  state = {
    photos: [],
    result: 'guitars',
    loading: true
  }

  /* Requests data from the api and populates component state */

  performSearch = (query = 'guitars') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=relevance&is_getty=true&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  /* Updates the result state where required, syncs search with other components */

  updateResult = (text) => { this.setState({ result: text }) };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search data={this.state.result} search={this.updateResult} />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/guitars" loading={this.state.loading} />)} />
            <Route path="/guitars" render={() => <PhotoContainer title='Make some noise!' search='guitars' query={this.performSearch} data={this.state.photos} loading={this.state.loading} />} />
            <Route path="/beer" render={() => <PhotoContainer title='What can we get you?' search='beer' query={this.performSearch} data={this.state.photos} loading={this.state.loading} />} />
            <Route path="/burgers" render={() => <PhotoContainer title='Feeling Hungry?' search='burgers' query={this.performSearch} data={this.state.photos} loading={this.state.loading} />} />
            <Route path="/search/:result" render={() => <PhotoContainer title='Search results' search={this.state.result} query={this.performSearch} data={this.state.photos} loading={this.state.loading} />} />
            <Route component={InvalidRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
