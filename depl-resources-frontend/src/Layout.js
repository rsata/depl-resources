// import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Link } from 'react-router'
import './main.css';

export default class Layout extends Component{
  render() {
    return (
      <div>
        <h1><Link to="/">BLAAAA</Link></h1>
        <ul>
          <li><Link to="/deployment">deployment</Link></li>
          <li><Link to="/heat">heat</Link></li>
        </ul>

        {/* We use cloneElement here so we can auto pass down props */}
        {/* Essentially each element is getting cloned with its own props so children of it can call this.props */}
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
};
