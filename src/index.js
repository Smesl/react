import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import widgetCommentsReducer from './reducers/widgetCommentsReducer';
import { statusReducer } from './reducers/statusCommentReducer';
import store, {persistor} from './reducers';

// import rootReducer from './reducers/index'
import App from './components/App/AppComponent';
import {LocalStorageAPI} from './localStorage/storageComments';
import { composeWithDevTools } from '@redux-devtools/extension';

import './style/index.css';
import { PersistGate } from 'redux-persist/integration/react';

// const localStorageAPI = new LocalStorageAPI();

// const composeEnhancers = composeWithDevTools({
// });
// const rootReducer = combineReducers({
//   widget: widgetCommentsReducer,
//   status: statusReducer
// })
 

// localStorageAPI.getInitialState().then(response =>{
//   const store =  createStore(
//         widgetCommentsReducer,
//         response,
//         composeEnhancers(
//           applyMiddleware()
//         )
//   )
  
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
// });