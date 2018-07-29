import React, { Fragment } from 'react';
import './App.css';
import { Footer } from './partials/Footer';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Switch, Route } from 'react-router-dom';

export const App = () => {
 

    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Fragment>
    )
  }



