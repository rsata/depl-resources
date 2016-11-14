import React from 'react';

class Settings extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div>Eventually...
        {this.props.children}
      </div>
    )
  }
}

export default Settings;
