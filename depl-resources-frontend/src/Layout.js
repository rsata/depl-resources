// import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import './main.css';

import { AppBar } from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox/lib/navigation';
import { Link } from 'react-toolbox/lib/link';

import { Nav } from './components/nav/Nav';
import { Footer } from './components/footer/Footer';
import { SearchExternal } from './components/searchExternal/SearchExternal';

const styles = {
  headerWrapper: {
    width: '100%'
  }
};

export default class Layout extends Component{
  render() {
    return (
      <div>
        <div style={styles.headerWrapper}>
          <Nav />
          <SearchExternal />
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
