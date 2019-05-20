import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowseRouter as Router, Route, Link, Redirect} from "react-router-dom";    
import './dropbox.css';
import App from  './MainApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
//    <Router basename={process.env.PUBLIC_URL}>
     <App />,
//    </Router>,      
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
