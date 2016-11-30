import React from 'react';
import { connect } from 'react-redux';
import { insertNewDoc } from '../actions/updateDataActions';

import { InsertDoc } from '../components/InsertDoc'

let typeToHeaderMapping = {
  standards: 'Standards',
  siteConfig: 'Site Configuration',
  advancedConfig: 'Advanced Configuration',
  mapLoading: 'Map Loading',
  siteBuild: 'Site Build',
  pleiades: 'Pleiades'
}

class Admin extends React.Component {

  constructor() {
    super();
    this.state={
      toggleAddNew: false
    }
  }

  handleToggleAddNew() {
    this.setState({toggleAddNew: !this.state.toggleAddNew})
  }

  render() {
    console.log(this.props)
    if (!this.props.deploymentDocs) return <div>Loading...</div>
    return(
      <div>
        <h1>Admin</h1>
        {this.state.toggleAddNew===true ? <InsertDoc insertNewDoc={({type, title, url, entry}) => this.props.insertNewDoc({type, title, url, entry})}/> : null}
        <button onClick={this.handleToggleAddNew.bind(this)}>{this.state.toggleAddNew===true ? 'Cancel' : 'Add New'}</button>
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
    insertNewDoc: ({type, title, url, entry}) => {
      dispatch(insertNewDoc({type, title, url, entry}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
