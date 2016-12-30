import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './main.scss';

// WTF this should work with just /card
import Card from '../../components/card/index';

// Eventually, make dynamic so can add new cards without touching this
let typeToHeaderMapping = {
  standards: 'Standards',
  siteConfig: 'Site Configuration',
  advancedConfig: 'Advanced Configuration',
  mapLoading: 'Map Loading',
  siteBuild: 'Site Build',
  pleiades: 'Pleiades'
};


class Deployment extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    if (!this.props.deploymentDocs) return <div>Loading...</div>;
    return(
      <div styleName='wrapper'>
        <ul>
          {Object.entries(this.props.deploymentDocs).map(i => {
            return <Card key={i} title={typeToHeaderMapping[i[0]]} data={i[1]} />;
          })}
        </ul>
      </div>
    );
  }
}

export default CSSModules(Deployment, styles);
