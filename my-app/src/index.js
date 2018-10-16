import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './chat';
import store from './reduce.js'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Chat /></Provider>, document.getElementById('root'));
registerServiceWorker();
