import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store/index";
import GlobalStyle from "./components/styles/Global";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <App />
     </BrowserRouter>
  </Provider> 
);

