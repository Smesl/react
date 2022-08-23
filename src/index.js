import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore, applyMiddleware} from 'redux';

import widgetCommentsReducer from './reducers'
import App from './components/App/AppComponent';
import {LocalStorageAPI} from './localStorage/storageComments';
import { composeWithDevTools } from '@redux-devtools/extension';

import './style/index.css';

const localStorageAPI = new LocalStorageAPI();

const composeEnhancers = composeWithDevTools({
});

localStorageAPI.getInitialState().then(response =>{
  const store =  createStore(
        widgetCommentsReducer,
        response,
        composeEnhancers(
          applyMiddleware()
        )
  )
  
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
});