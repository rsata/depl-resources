import React from 'react';
import { connect } from 'react-redux';
import { insertNewDoc, updateDocs, removeDoc, updateNavSidebar, removeNavItem } from '../../actions/updateDocsActions';
import { loadData, getNavItems } from '../../actions/initActions';

import { InsertDoc } from '../../components/admin/InsertDoc';
import { CardEdit } from '../../components/admin/Card_EDIT';

let typeToHeaderMapping = {
  standards: 'Standards',
  siteConfig: 'Site Configuration',
  advancedConfig: 'Advanced Configuration',
  mapLoading: 'Map Loading',
  siteBuild: 'Site Build',
  pleiades: 'Pleiades',
  resources: 'Resources',
  tips: 'Tips',
  password: 'Password'
};

class Admin extends React.Component {

  constructor() {
    super();
    this.state={
      toggleAddNew: false
    };
  }

  componentDidMount() {
    this.props.loadData();
    this.props.getNavItems();
  }

  handleToggleAddNew() {
    this.setState({toggleAddNew: !this.state.toggleAddNew});
  }

  render() {
    if (!this.props.deploymentDocs || Object.keys(this.props.nav).length < 1) return <div>Loading...</div>;
    return(
      <div className='adminPageWrapper' style={{marginBottom: '75px'}}>
        <h1>Admin</h1>

        {/*
          *****

          deployment resources

          *****
        */}

        <h2>Manage Docs</h2>

        {
          this.state.toggleAddNew===true ?
          <InsertDoc
            insertNewDoc={({type, title, url, entry}) => this.props.insertNewDoc({type, title, url, entry})}
            handleToggleAddNew={this.handleToggleAddNew.bind(this)} /> :
          null
        }

        <button onClick={this.handleToggleAddNew.bind(this)}>{this.state.toggleAddNew===true ? 'Cancel' : 'Add New'}</button>

        <ul>
        {
          Object.entries(this.props.deploymentDocs).map(i => {
          return <CardEdit
            key={i}
            title={typeToHeaderMapping[i[0]]}
            data={i[1]}
            updateDocs={({id, type, title, url, entry}) => this.props.updateDocs({id, type, title, url, entry})}
            removeDoc={({id, type}) => this.props.removeDoc({id, type})}
          />;
        })}
        </ul>

        {/*
          *****

          navigation settings

          *****
        */}

        <h2>Nav Config</h2>
        <ul>
        {
          Object.entries(this.props.nav).map(i => {
            // return <li key={x.lastEdited}>{x.type}: {x.title}</li>;
            return <CardEdit
              key={i}
              title={typeToHeaderMapping[i[0]]}
              data={i[1]}
              updateDocs={({id, type, title, url, entry}) => this.props.updateNavSidebar({id, type, title, url})}
              removeDoc={({id, type}) => this.props.removeNavItem({id, type})}
            />;
          })
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deploymentDocs: state.deploymentDocs,
    nav: state.nav
  };
};

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
    },
    getNavItems: () => {
      dispatch(getNavItems());
    },
    updateNavSidebar: ({id, type, title, url}) => {
      dispatch(updateNavSidebar({id, type, title, url}));
    },
    removeNavItem: ({id, type}) => {
      dispatch(removeNavItem({id, type}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
