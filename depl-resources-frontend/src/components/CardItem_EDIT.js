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
  }

  handleDelete() {
    const id = this.props.data.id;
    const type = this.props.data.type;
    this.props.removeDoc({id, type});
  }

  handleEditFormSubmit(e) {
    e.preventDefault();
    console.log('submitted')
  }

  render(){
    return (
      <li>
        {this.props.title}
        {this.state.toggleEdit===true ? <CardItemEditForm data={this.props.data} updateDocs={this.props.updateDocs} handleToggleEdit={this.handleToggleEdit.bind(this)} /> : null}
        <button onClick={this.handleToggleEdit.bind(this)}>{this.state.toggleEdit===true ? 'Cancel' : 'Edit'}</button>
        <button onClick={this.handleDelete.bind(this)}>x</button>
      </li>
    )
  }
}
