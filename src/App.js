import React, { Component } from 'react';

import './App.css';

import Router from './Router';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <>
        <Router/>
        <Footer/>
        </>
    )
          
  }
}

export default App;
