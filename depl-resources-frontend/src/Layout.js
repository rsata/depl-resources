// import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inc, dec } from './actions/countActions';
import { loadData } from './actions/initActions';
import { Link } from 'react-router'

class Layout extends Component{
  render() {
    console.log(this.props)
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


const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
