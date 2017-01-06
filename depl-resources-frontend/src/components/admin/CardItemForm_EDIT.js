import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './cardItemForm_EDIT.scss';

class CardItemEditForm extends React.Component {

  constructor() {
    super();
    this.state = {
      text: null
    };
  }

  componentDidMount() {
    this.setSelectedIndex(document.getElementById("typeDropdown"), this.props.data.type);
  }

  handleUpdateDocs(e) {
    e.preventDefault();
    const id = this.props.data.id;
    const type = e.target.type.value;
    const title = e.target.title.value;
    const url = e.target.url.value;
    const entry = e.target.entry.value;
    this.props.updateDocs({id, type, title, url, entry});
    this.props.handleToggleEdit();
  }

  setSelectedIndex(s, type) {
    // Loop through all the items in drop down list
    for (let i = 0; i< s.length; i++) {
      if (s[i].value == type) {
        // Item is found. Set its property and exit
        s[i].selected = true;
        break;
      }
    }
    return;
  }

  render() {
    console.log(this.props.data);
    return(
      <div styleName='editForm'>
        <h2>Insert new document (defaults to depl team page for now...)</h2>
        <form onSubmit={this.handleUpdateDocs.bind(this)}>
        <select id='typeDropdown' name='type'>
          <option value="standards">Standards</option>
          <option value="siteConfig">Site Configuration</option>
          <option value="advancedConfig">Advanced Configuration</option>
          <option value="mapLoading">Map Loading</option>
          <option value="siteBuild">Site Build</option>
          <option value="resources">Resources</option>
          <option value="tips">Tips</option>
          <option value="password">Password</option>
        </select>
        <h3>Title</h3>
        <input type='text' name='title' defaultValue={this.props.data.title} />
        <h3>External URL (if applicable - MUST BE FULL LINK - e.g. http://google.com NOT google.com)</h3>
        <input type='text' name='url' defaultValue={this.props.data.url} />
        <h3>Entry (leave blank if external URL)</h3>
        <textarea name='entry' defaultValue={this.props.data.entry} />
        <br />
        <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
};

export default CSSModules(CardItemEditForm, styles);
