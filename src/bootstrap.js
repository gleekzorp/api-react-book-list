import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';

import AddBook from './components/addBook';
import DeleteLanding from './components/deleteLanding';
import ViewBook from './components/viewBook';
import UpdateBook from './components/updateBook';
import { FlexArea, NavBar } from './style/primitives'

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
      <div>
        <NavBar>
          <FlexArea justifyContent="space-evenly">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/add_book'>AddBook</NavLink>
          </FlexArea>
        </NavBar>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/add_book' component={AddBook} />
          <Route path='/deleted_book' component={DeleteLanding} />
          <Route path='/view_book/:id' component={ViewBook} />
        </div>
      </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
