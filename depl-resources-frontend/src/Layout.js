// import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
// import { Link } from 'react-router'
import './main.css';

import { Nav } from './components/nav/Nav.js';

export default class Layout extends Component{
  render() {
    return (
      <div>
        <Nav />

        {/* We use cloneElement here so we can auto pass down props */}
        {/* Essentially each element is getting cloned with its own props so children of it can call this.props */}
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
};
