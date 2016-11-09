import React, { Component } from 'react';

class docItem extends Component {
  render() {
    return(
      <li id={this.props.id}>
        {this.props.title}
      </li>
    )
  }
}

export default docItem;
