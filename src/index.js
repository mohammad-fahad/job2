import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Spinner from "./views/spinner/Spinner";
import "./assets/scss/style.scss";
import 'semantic-ui-css/semantic.min.css'
import App from './App';

ReactDOM.render(
    <Suspense fallback={<Spinner />}>
        <App />
    </Suspense>,
    document.getElementById("root")
);
