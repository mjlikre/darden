import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

// Import Containers
import App from './containers/App';


import ProviderSignup from './containers/ProviderSignup';
import Hub from './components/Hub'
import Dashboard from './components/Dashboard'
import Signout from './containers/Signout'
import Signin from './containers/Signin'
import SeekerSignup from "./containers/Signup"

// Import components
import Welcome from './components/Welcome';

import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css'

// configure redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token')}
  },
  composeEnhancers(applyMiddleware(reduxThunk))
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/signup' component={ProviderSignup}/>
        <Route exact path='/seekersignup' component={SeekerSignup}/>
        <Route exact path='/hub' component={Hub}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/signout' component={Signout}/>
        <Route exact path='/signin' component={Signin}/>

      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));