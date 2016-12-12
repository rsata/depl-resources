// import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import './main.css';

import { Nav } from './components/nav/Nav';
import { Footer } from './components/footer/Footer';
import { SearchExternal } from './components/searchExternal/SearchExternal';

const styles = {
  headerWrapper: {
    width: '100%'
  }
}

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

// global search
// https://fs.rubicon.com/i/adminsite/global_search.php?GlobalSearch=hogwarts

// Standards
// https://hogwarts.rubiconatlas.org/Atlas/References/Standards/View/Default?tab=17&TabName=Standards&FromReferences=1&ShowKey=1&AllStatuses=1&DistrictID=422&StandardsName=Alabama&
