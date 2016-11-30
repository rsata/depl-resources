import React from 'react';
import { Card } from '../components/card';

import { connect } from 'react-redux';
import { loadData } from '../actions/initActions';


let typeToHeaderMapping = {
  standards: 'Standards',
  siteConfig: 'Site Configuration',
  advancedConfig: 'Advanced Configuration',
  mapLoading: 'Map Loading',
  siteBuild: 'Site Build',
  pleiades: 'Pleiades'
}


class Deployment extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    if (!this.props.deploymentDocs) return <div>Loading...</div>
    return(
      <div>
        <h1>Deployment Page</h1>
        {Object.entries(this.props.deploymentDocs).map(i => {
          return <Card key={i} title={typeToHeaderMapping[i[0]]} data={i[1]} />
        })}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    deploymentDocs: state.deploymentDocs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deployment);
