import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.scss';
import App from './App';
import history from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';


ReactDOM.render( <BrowserRouter basename={process.env.PUBLIC_URL}>
<App />
</BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
