import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/app';
import Routers from './routers';
import store from './store';

import 'normalize.css/normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <Routers />
      </App>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
