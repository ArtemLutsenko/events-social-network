import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, document.getElementById('root'));



serviceWorker.unregister();
