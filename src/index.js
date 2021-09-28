import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BooksContainer from './components/Books/BooksContainer';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BooksContainer />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
