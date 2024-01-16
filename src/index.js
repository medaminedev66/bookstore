import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/configureStore';
import './App.css';
import BooksContainer from './components/Books/BooksContainer';
import Categories from './components/Categories/Categories';
import Navbar from './components/Main/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <BooksContainer />
          </Route>
          <Route exact path="/bookstore">
            <BooksContainer />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
