import React, { Component } from 'react';
import Header from './Header';
import RateDisplay from './RateDisplay';
import mockdata from './data/mockdata';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <div className="container">
          <RateDisplay rates={mockdata}/>
        </div>
      </div>
    );
  }
};


export default App;