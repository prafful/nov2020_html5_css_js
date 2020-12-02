import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducerCombined from './reducer/reducer-combinedall';
import RootComponent from "./root/app";


const reduxStore = createStore(allReducerCombined)


ReactDOM.render(
  <Provider store={reduxStore}>
    <RootComponent></RootComponent>
   </Provider>
,
  document.getElementById('root')
);

