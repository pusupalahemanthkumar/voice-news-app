// Importing Required Files And Packages Here.
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// ServiceWorkers SetUp Here.
serviceWorker.unregister();
