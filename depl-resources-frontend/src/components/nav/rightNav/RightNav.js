import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './main.scss';

class RightNav extends React.Component{
  componentDidMount() {
    this.props.getNavItems();
  }
  render() {
    return (
      <div styleName='wrapper'>
        <ul>
          {
            Object.entries(this.props.nav).map(x => {
              return (
                <li key={x} styleName='listHeaders'>
                  <NavList title={x[0]} data={x}/>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
};

const NavList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.data[1].map(x => {
          return (<li key={x.title}>{x.title}</li>);
        })}
      </ul>
    </div>
  );
};

export default CSSModules(RightNav, styles);
