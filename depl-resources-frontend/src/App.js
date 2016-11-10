import React, { Component } from 'react';

import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Deployment from './pages/Deployment/deployment';
import docItem from './pages/Deployment/docItem'
import Heat from './pages/Heat/heat';
import Layout from './pages/Layout/layout';
import Settings from './pages/Settings/settings';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/data/deployment/get')
      .then(r => r.json())
      .then(data => this.setState({data}));
  }

  render() {
    if (!this.state.data) return <h1>Loading...</h1>

    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRedirect to="/deployment" />
          <Route path='deployment' component={Deployment} data={this.state.data}/>
          <Route path='doc/:id' component={docItem} data={this.state.data}/>
          <Route path='heat' component={Heat} />
          <Route path='settings' component={Settings} />
        </Route>
      </Router>
    );
  }
}

export default App;
