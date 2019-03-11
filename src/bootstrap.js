import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

import AddBook from './components/addBook'

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <div>
        <div className='nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/add_book'>AddBook</NavLink>
        </div>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/add_book' component={AddBook} />
        </div>
      </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
