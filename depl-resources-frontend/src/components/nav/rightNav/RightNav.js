import React from 'react';
import { Link } from 'react-router';
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
        {/* FOR NOW, MUST BE EXTERNAL URL IN ADMIN, NOT ENTRY */}
        {props.data[1].map(x => {
          // return (x.url==='' ? <NavItem key={x.lastEdited} title={x.title} data={x} /> : <NavItemLink key={x.lastEdited} title={x.title} data={x} />);
          return <NavItemLink key={x.lastEdited} title={x.title} data={x} />;
        })}
      </ul>
    </div>
  );
};

// const NavItem = (props) => {
//   return (
//     <li>
//       <Link to={`resource/${props.data.type}/${props.data.id}`}>{props.title}</Link>
//     </li>
//   );
// };

const NavItemLink = (props) => {
  return (
    <li>
      <a href={props.data.url} target='_blank'>{props.data.title}</a>
    </li>
  );
};

export default CSSModules(RightNav, styles);
