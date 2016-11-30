import React from 'react';
import { connect } from 'react-redux';
// import { loadData } from '../actions/initActions';

import { InsertDoc } from '../components/InsertDoc.js'

let typeToHeaderMapping = {
  standards: 'Standards',
  siteConfig: 'Site Configuration',
  advancedConfig: 'Advanced Configuration',
  mapLoading: 'Map Loading',
  siteBuild: 'Site Build',
  pleiades: 'Pleiades'
}

class Admin extends React.Component {
  render() {
    if (!this.props.deploymentDocs) return <div>Loading...</div>
    return(
      <div>
        <h1>Admin</h1>
        <InsertDoc />
        <h3>Manage Docs</h3>
        <ul>
        {Object.entries(this.props.deploymentDocs).map(i => {
          return <li key={i}>{typeToHeaderMapping[i[0]]}</li>
        })}
        </ul>
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
    // loadData: () => {
    //   dispatch(loadData());
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
