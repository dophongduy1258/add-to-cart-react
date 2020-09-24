import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import About from './components/about';
import Home from './components/home';
import NavMenu from './components/navMenu';
import Products from './components/products';



class App extends Component{
  render(){
    return (
      
      <Router>
        <div className="App">
          <NavMenu/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
        </div>
      </Router>
    );
  }
}

export default App;
