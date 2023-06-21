// Immport React
import React from "react";
// Import the ReactDOM
import ReactDOM from "react-dom/client";
// Import App from the src folder
import {App} from './App'
// Import the Browser Router for urls
import { BrowserRouter } from "react-router-dom";

// get App from the index.html for DOM manipulation and urls.
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);