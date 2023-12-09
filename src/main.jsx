import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';

import { createStore } from 'redux'; 
import allReducers from './reducers';
import {Provider} from 'react-redux';

export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);