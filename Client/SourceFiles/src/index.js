import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {jwtInterceptor} from "./utils/jwt.interceptor";
import * as serviceWorker from './serviceWorker';
jwtInterceptor();
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
