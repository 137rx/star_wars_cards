import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import CompareContext, { CompareProvider } from "./useContext/CompareContext";
import PreviousCategoriesContext, {
  PreviousCategoriesProvider,
} from "./useContext/PreviousCategoriesContext";

import PreviousCardsContext, {
  PreviousCardsProvider,
} from "./useContext/PreviousCardsContext";

ReactDOM.render(
  <React.StrictMode>
    <CompareProvider>
      <PreviousCategoriesProvider>
        <PreviousCardsProvider>
          <App />
        </PreviousCardsProvider>
      </PreviousCategoriesProvider>
    </CompareProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
