import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import SingleShow from './pages/SingleShow';
import TVShows from './pages/TVShows';

import {Switch, Route, Redirect} from 'react-router-dom';



class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/shows" component={TVShows} />
          <Route path="/shows/:id" component={SingleShow} />
          <Redirect from='/' to='/shows' />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;

