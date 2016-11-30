import React from 'react';

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
    if (this.state.toggleEdit===true)
      return (
        <div>
          <h2>Insert new document (defaults to depl team for now...)</h2>
          <form onSubmit={this.handleEditFormSubmit.bind(this)}>
          <select name='type'>
            <option value="standards">Standards</option>
            <option value="siteConfig">Site Configuration</option>
            <option value="advancedConfig">Advanced Configuration</option>
            <option value="mapLoading">Map Loading</option>
            <option value="siteBuild">Site Build</option>
          </select>
          <h3>Title</h3>
          <input type='text' name='title' value={this.props.data.title} />
          <h3>External URL (if applicable)</h3>
          <input type='text' name='url' value={this.props.data.url} />
          <h3>Entry (leave blank if external URL)</h3>
          <textarea name='entry' value={this.props.data.entry}/>
          <br />
          <button type='submit'>Submit</button>
          </form>
          <button onClick={this.handleToggleEdit.bind(this)}>Cancel</button>
        </div>
      );

    return (
      <li>
        {this.props.title}
        <button onClick={this.handleToggleEdit.bind(this)}>edit</button>
      </li>
    )
  }
}
