// Use if you need jira open issues, not just link to open issues

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './main.scss';

class Jira extends React.Component{
  constructor() {
    super();
    this.state = {
      counter: 0,
      data: null,
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      5000
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const username = email.split('@')[0];
    console.log(username);
    fetch('http://localhost:3001/api/jira', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({username})
    })
      .then(r => r.json())
      .then(data => this.setState({data}))
      .catch(err => console.log(err));
  }

  tick() {
    let counter = this.state.counter + 1;
    if (counter > this.state.data.issues.length) {
      counter=0;
    }
    this.setState({counter});
  }

  render() {
    if (!this.state.data) {
      return(
        <div styleName='wrapper'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' name='email' placeholder='Enter email' />
          </form>
        </div>
      );
    }
    return (
      <div styleName='wrapper'>
        <div><a href={'https://jira.rubicon.com/browse/'+ this.state.data.issues[this.state.counter].key}>{this.state.data.issues[this.state.counter].fields.summary}</a></div>
      </div>
    );
  }
}

export default CSSModules(Jira, styles);
