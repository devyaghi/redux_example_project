import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./Test";
import store from "./store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store} >
      <Test/>
    </Provider>
  );
}

export default App;
