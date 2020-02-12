import React from 'react';
import Home from '../src/home/home';
import Nav from '../src/components/nav/nav'
import Admin from './pages/admin/admin'
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route exact path='/admin'><Admin/></Route>
        <Route path='/home'><Home/></Route>
      </Switch>
    </Router>
  )
}

export default App;
