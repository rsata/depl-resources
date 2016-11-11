import React, { Component } from 'react';

import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Deployment from './pages/Deployment/deployment';
import docEdit from './pages/Documents/docEdit';
import docItem from './pages/Documents/docItem';
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
    this.getData();
  }

  updateEntry({id, title, entry}) {
    // update the particular part of the state based on id
    // make server call to /api/data/deployment/update
    fetch('http://localhost:3001/api/data/deployment/update', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        title: title,
        entry: entry
      })
    })
      .then(r => r.json())
      .then(r => console.log(r))
      .catch(err => console.log(err));
  }

  getData() {
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
          <Route path='deployment' component={Deployment} data={this.state.data} />
          <Route path='doc/:id' component={docItem} data={this.state.data} />
          <Route path='doc/edit/:id' component={docEdit} data={this.state.data} updateEntry={this.updateEntry} />
          <Route path='heat' component={Heat} />
          <Route path='settings' component={Settings} />
        </Route>
      </Router>
    );
  }
}

export default App;
