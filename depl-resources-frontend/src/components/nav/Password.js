import React from 'react';
import ContentCopy from 'react-icons/lib/md/content-copy';

// sorry...
const styles = {
  position: 'fixed',
  marginTop: '-500px'
};

export class Password extends React.Component {
  copyPw(e) {
    e.preventDefault();
    document.querySelector('#pw').select();
    var lag = window.setTimeout(
      document.execCommand('copy')
    , 500);
  }

  render() {
    return (
      <li>
        <div onClick={this.copyPw.bind(this)}>{this.props.password}&nbsp;&nbsp;<ContentCopy /></div>
        <div><input id='pw' defaultValue={this.props.password} style={styles} /></div>
      </li>
    );
  }
};
