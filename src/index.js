import React from 'react';
import ReactDOM from 'react-dom';
import AnimalSound from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AnimalSound />, document.getElementById('AS'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
