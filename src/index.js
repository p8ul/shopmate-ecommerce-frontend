import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import indexRoutes from './routes/index';
import store from './redux/store';
import Template from './components/Templates/TemplateDefault';
import './assets/styles/main.sass';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Template>
        <Switch>
          {indexRoutes.map((route) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
      </Template>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
