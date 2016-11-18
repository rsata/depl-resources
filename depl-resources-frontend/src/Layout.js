import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({

  render() {
    console.log(this.props)
    // Then we go ahead and return some JSX
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

});

export default Main;
