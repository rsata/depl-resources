import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
  textInput: {
      width: '500px',
      height: '200px'
  }
}

class docEdit extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      entry: null
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEntryChange = this.handleEntryChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  componentDidMount() {
    this.props.route.data.filter(doc => {
      if(doc._id !== this.props.params.id) return null;
      return this.setState({
        title: doc.title,
        entry: doc.entry
      });
    });
  }

  // componentWillUnmount() {
  //   console.log('about to unmount')
  //   this.props.route.reloadData();
  // }

  handleTitleChange(e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  handleEntryChange(e) {
    e.preventDefault();
    this.setState({entry: e.target.value});
  }

  handleSubmitClick(e) {
    e.preventDefault();
    const id = this.props.params.id;
    const title = this.state.title;
    const entry = this.state.entry;

    this.props.route.updateEntry({id, title, entry})
  }

  render() {
    if(!this.state.title) return <h1>Loading...</h1>
    return(
      <div>
        <form>
          <h3>Title: </h3><input value={this.state.title} onChange={this.handleTitleChange} />
          <h3>Entry: </h3><textarea value={this.state.entry} style={styles.textInput} onChange={this.handleEntryChange} />
        </form>
        <button onClick={this.handleSubmitClick}>Save</button>
        <button><Link to={`/doc/${this.props.params.id}`}>Cancel</Link></button>
      </div>
    )
  }
}

export default docEdit;
