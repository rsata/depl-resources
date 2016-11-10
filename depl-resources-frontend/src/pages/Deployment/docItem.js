import React, { Component } from 'react';
import { Link } from 'react-router';

class docItem extends Component {
  constructor() {
    super();
    this.state = {
      doc: null
    }
  }

  componentDidMount() {
    this.props.route.data.filter(doc => {
      if(doc._id !== this.props.params.id) return null;
      return this.setState({doc});
    });
  }

  render() {
    if(!this.state.doc) return <h1>Loading...</h1>
    console.log(this.state)
    return(
      <div>
          <button><Link to='/deployment'>Back</Link></button>
          <h1>{this.state.doc.title}</h1>
          <p>{this.state.doc.entry}</p>
      </div>
    )
  }
}

export default docItem;
