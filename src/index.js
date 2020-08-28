import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {createStore} from 'redux';

import widgetCommentsReducer from './reducers'
import App from './components/App/AppComponent';
import {LocalStorageAPI} from './localStorage/storageComments';

import './style/index.css';

const localStorageAPI = new LocalStorageAPI();

localStorageAPI.getInitialState().then(response =>{
  const store =  createStore(
        widgetCommentsReducer,
        response  
  )
  
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  );
});