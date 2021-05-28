import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./configureStore";
import { Global } from "@emotion/react";
import { globalStyles } from "./global-styles";
import "./fonts/fonts.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyles} />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
