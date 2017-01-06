import React from 'react';
import Jira from './jira';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
  }

  componentDidMount() {
    const item = document.getElementById('channelMap');
    item.addEventListener("mouseover", this.handleOver.bind(this), false);
    item.addEventListener("mouseout", this.handleOut.bind(this), false);
  }

  handleOver() {
    this.setState({hover: true});
  }

  handleOut() {
    this.setState({hover: false});
  }

  render() {
    return (
      <div styleName='footer'>
        <ul>
          <li><a href='https://fs.rubicon.com/Rubicon%20Underground/Default.htm' target='_blank'>Facebook</a></li>
          <li id='channelMap'><ChannelMap hover={this.state.hover} /></li>
          <li><Jira /></li>
          <li>Onboarding</li>
        </ul>
      </div>
    );
  }
};

const ChannelMap = (props) => {
  return(
    <div>
      <a href='https://fs.rubicon.com/Rubicon%20Underground/Default.htm#BuckinghamPalace/Channel Map.htm%3FTocPath%3DBuckingham%2520Palace%7C_____1'>Channel Map</a>
      {props.hover===true ? <img src={require('./channels.png')} /> : null}
    </div>
  );
};

export default CSSModules(Footer, styles);
