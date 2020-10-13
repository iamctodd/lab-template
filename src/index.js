import React from 'react';
import ReactDOM from 'react-dom';
import MMProvider, { PrivateRoute } from 'mm-react-tools';
import './index.css';
import App from './App';

ReactDOM.render(
  <MMProvider
    domain={process.env.REACT_APP_URL}
    clientId={process.env.REACT_APP_CLIENT_ID}
    clientSecret={process.env.REACT_APP_CLIENT_SECRET}
    scope={'reporting'}
    releaseStage={process.env.REACT_APP_RELEASE_STAGE}
  >
    <PrivateRoute component={App} />
  </MMProvider>,
  document.getElementById('root')
);
