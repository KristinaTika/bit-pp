import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { PostPage } from './pages/PostPage';



class App extends Component {



  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <PostPage />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
