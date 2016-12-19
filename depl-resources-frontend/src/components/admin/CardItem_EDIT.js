import React from 'react';
import CardItemEditForm from './CardItemForm_EDIT';
import CSSModules from 'react-css-modules';
import styles from './cardItem_EDIT.scss';

class CardItemEdit extends React.Component {
  constructor() {
    super();
    this.state={
      toggleEdit: false
    };
  }

  handleToggleEdit() {
    this.setState({toggleEdit: !this.state.toggleEdit});
  }

  handleDelete() {
    const id = this.props.data.id;
    const type = this.props.data.type;
    this.props.removeDoc({id, type});
  }

  handleEditFormSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  render(){
    return (
      <li styleName='listItemWrapper'>
        <span styleName='title'>{this.props.title}</span>
        {this.state.toggleEdit===true ? <CardItemEditForm data={this.props.data} updateDocs={this.props.updateDocs} handleToggleEdit={this.handleToggleEdit.bind(this)} /> : null}
        <button styleName='edit' onClick={this.handleToggleEdit.bind(this)}>{this.state.toggleEdit===true ? 'Cancel' : 'Edit'}</button>
        <button styleName='delete' onClick={this.handleDelete.bind(this)}>x</button>
      </li>
    );
  }
}

export default CSSModules(CardItemEdit, styles);
