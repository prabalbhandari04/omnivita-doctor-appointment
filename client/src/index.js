import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@material-ui/core/styles";


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

