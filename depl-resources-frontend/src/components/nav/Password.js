import React from 'react';
import ContentCopy from 'react-icons/lib/md/content-copy';

// sorry...
const styles = {
  position: 'fixed',
  marginTop: '-500px',
  copied: {
    position: 'fixed',
    backgroundColor: '#555',
    margin: '10px',
    padding: '10px',
    zIndex: '99'
  }
};

export class Password extends React.Component {
  constructor() {
    super();
    this.state = {
      copied: false
    };
  }

  copyPw(e) {
    e.preventDefault();
    document.querySelector('#pw').select();
    let copy = window.setTimeout(() => {
      document.execCommand('copy');
      this.setState({copied: !this.state.copied});
    }, 100);
    let hide = window.setTimeout(() => {
      this.setState({copied: !this.state.copied});
    }, 2000);
  }

  render() {
    return (
      <li>
        <div onClick={this.copyPw.bind(this)}>{this.props.password}&nbsp;&nbsp;<ContentCopy /></div>
        <div><input id='pw' defaultValue={this.props.password} style={styles} /></div>
        {this.state.copied === true ? <Copied /> : null}
      </li>
    );
  }
};

const Copied = (props) => {
  return (
    <div style={styles.copied}>Copied to clipboard!</div>
  );
};
