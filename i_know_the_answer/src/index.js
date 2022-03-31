import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import Reducers from './Reducers';
import App from './App';

ReactDOM.render(
  <Provider store={createStore(Reducers, applyMiddleware(thunk))}>
    <Router>
      <App />
    </Router>
  </Provider >,
  document.getElementById('root')
);
