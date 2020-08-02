import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

/* Components */
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';
import apiKey from './config';


const api = apiKey;
console.log(api); //delete this it works


class App extends Component {

  state = {
    photos: [],
    loading: true
  };

  componentDidMount() {
    this.performSearch();

  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd9015f95b68df39e6664091f1621d26&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="container">
          <Search />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <PhotoContainer title='Click or Search to Start' search='welcome' query={this.performSearch} />} />
            <Route path="/bars" render={() => <PhotoContainer title='Please come in!' search='bars' query={this.performSearch} />} />
            <Route path="/beer" render={() => <PhotoContainer title='What can we get you?' search='beer' query={this.performSearch} />} />
            <Route path="/burgers" render={() => <PhotoContainer title='What would you like to eat?' search='burgers' />} query={this.performSearch} />
            <Route component={NotFound} />
          </Switch>





        </div>
      </BrowserRouter>
    );


  }
}

export default App;
