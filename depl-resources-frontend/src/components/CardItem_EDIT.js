import React from 'react';
import { CardItemEditForm } from './CardItemForm_EDIT';

export class CardItemEdit extends React.Component {
  constructor() {
    super();
    this.state={
      toggleEdit: false
    }
  }

  handleToggleEdit() {
    this.setState({toggleEdit: !this.state.toggleEdit})
    console.log(this.props)
  }

  handleEditFormSubmit(e) {
    e.preventDefault();
    console.log('submitted')
  }

  render(){
    return (
      <li>
        {this.props.title}
        {this.state.toggleEdit===true ? <CardItemEditForm data={this.props.data} /> : null}
        <button onClick={this.handleToggleEdit.bind(this)}>{this.state.toggleEdit===true ? 'Cancel' : 'Edit'}</button>
      </li>
    )
  }
}
