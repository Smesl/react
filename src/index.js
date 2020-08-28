import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import widgetCommentsReducer from './reducers'
import App from './components/App/AppComponent';
import {LocalStorageAPI} from './localStorage/storageComments';

import './style/index.css';

const localStorageAPI = new LocalStorageAPI();

localStorageAPI.getInitialState().then(response =>{
  const store =  createStore(
        widgetCommentsReducer,
        response,
        applyMiddleware(      
          thunk
        )   
  )
  
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
})