import React from 'react';
import { connect } from 'react-redux';
import { insertNewDoc, updateDocs, removeDoc } from '../actions/updateDocsActions';
import { loadData } from '../actions/initActions';

import { InsertDoc } from '../components/InsertDoc'
import { CardEdit } from '../components/Card_EDIT'

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

  componentDidMount() {
    this.props.loadData();
  }

  handleToggleAddNew() {
    this.setState({toggleAddNew: !this.state.toggleAddNew})
  }

  render() {
    if (!this.props.deploymentDocs) return <div>Loading...</div>
    return(
      <div className='adminPageWrapper'>
        <h1>Admin</h1>
        {this.state.toggleAddNew===true ? <InsertDoc insertNewDoc={({type, title, url, entry}) => this.props.insertNewDoc({type, title, url, entry})} /> : null}
        <button onClick={this.handleToggleAddNew.bind(this)}>{this.state.toggleAddNew===true ? 'Cancel' : 'Add New'}</button>

        <h3>Manage Docs</h3>
        <ul>
        {Object.entries(this.props.deploymentDocs).map(i => {
          return <CardEdit key={i} title={typeToHeaderMapping[i[0]]} data={i[1]} updateDocs={({id, type, title, url, entry}) => this.props.updateDocs({id, type, title, url, entry})} removeDoc={({id, type}) => this.props.removeDoc({id, type})} />
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
    },
    updateDocs: ({id, type, title, url, entry}) => {
      dispatch(updateDocs({id, type, title, url, entry}));
    },
    removeDoc: ({id, type}) => {
      dispatch(removeDoc({id, type}));
    },
    loadData: () => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
