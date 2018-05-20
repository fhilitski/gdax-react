import React, { Component } from 'react';
import {BarLoader, ScaleLoader} from 'react-spinners';
import Header from './Header';
import RateDisplay from './RateDisplay';
import ProductList from './ProductList';
import ClickCounter from './ClickCounter';
import mockdata from './data/mockdata';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div id='mainpart'>
        <ProductList/>
        <ClickCounter/>
        <ScaleLoader color = "#13B187"/>
          </div>
          </div>
    );
  }
};


export default App;