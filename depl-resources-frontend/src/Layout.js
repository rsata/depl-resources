// import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import './main.css';

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import RightNav from './components/nav/rightNav';
import SearchExternal from './components/searchExternal/SearchExternal';

export default class Layout extends Component{
  render() {
    return (
      <div>
        <div>
          <Nav path={this.props.location.pathname}/>
          <SearchExternal />
          <RightNav />
        </div>
        <div className='pageWrapper'>
          {/* We use cloneElement here so we can auto pass down props */}
          {/* Essentially each element is getting cloned with its own props so children of it can call this.props */}
          { React.cloneElement(this.props.children, this.props) }
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};
