import React from "react"; 
import ReactDOM from "react-dom"; 
import "./assets/css/brooke.css";
import App from "./components/App";

import { createStore, applyMiddleware, compose } from "redux";  //imp  redux
import rootReducer from "./reducers";  //imp reducers 
import { Provider } from "react-redux";  // imp react redux
import Thunk from "redux-thunk"; // for redux async calls

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(Thunk))
);
 
ReactDOM.render( 
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById("root")
);