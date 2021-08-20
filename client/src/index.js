import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from "react-router";

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Pages
import Dashboard from './pages/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={Dashboard} exact/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);