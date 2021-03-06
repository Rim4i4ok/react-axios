import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// base url for all requests
axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

// default request settings
axios.defaults.headers.common['Authorixation'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);

    // Edit request config
    return request;
}, error => {
    // On send request
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);

    // Edit request config
    return response;
}, error => {
    // On response
    console.log(error);
    return Promise.reject(error);
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
