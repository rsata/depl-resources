import React from 'react';
import { Link } from 'react-router';
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

  // constructor() {
  //   super();
  //   let data = this.props.data.data;
  // }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    console.log(this.props)
    if (!this.props.deploymentDocs) return <div>Loading...</div>
    return(
      <div>
        <h1>Deployment Page</h1>
        {Object.entries(this.props.deploymentDocs).map(i => {
          console.log(i)
        })}
        {Object.keys(this.props.deploymentDocs).map(i => {
          console.log(typeToHeaderMapping[i]);
          return <Card title={typeToHeaderMapping[i]} />
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
