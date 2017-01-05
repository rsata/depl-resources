import React from 'react';
import { connect } from 'react-redux';
import { insertNewDoc, updateDocs, removeDoc, updateNavSidebar } from '../../actions/updateDocsActions';
import { loadData, getNavItems } from '../../actions/initActions';

import { InsertDoc } from '../../components/admin/InsertDoc';
import { CardEdit } from '../../components/admin/Card_EDIT';

let typeToHeaderMapping = {
  standards: 'Standards',
  siteConfig: 'Site Configuration',
  advancedConfig: 'Advanced Configuration',
  mapLoading: 'Map Loading',
  siteBuild: 'Site Build',
  pleiades: 'Pleiades'
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

  makeList(l) {
    console.log(l);
    l.map(i => {
      return i.title;
    });
  }

  render() {
    if (!this.props.deploymentDocs || Object.keys(this.props.nav).length < 1) return <div>Loading...</div>;
    return(
      <div className='adminPageWrapper'>
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
          {/* {console.log(this.props.nav)} */}
        {
          Object.values(this.props.nav).map((x, i) => {
            const keys = Object.keys(this.props.nav)[i];
            // return Array.isArray(x) === true ? x.forEach(t => {return <li key={t.lastEdited}>{keys}: {t.title}</li>;}) : <li key={x.lastEdited}>{keys}: {x.title}</li>;
            // return Array.isArray(x) === true ? x.forEach(t => {return console.log(t);}) : <li key={x.lastEdited}>{keys}: {x.title}</li>;
            // return Array.isArray(x) === true ? <li key={x.lastEdited}>{x.title}{console.log(x)}</li> : <li key={x.lastEdited}>{keys}: {x.title}</li>;
            return Array.isArray(x) === true ? this.makeList(x) : <li key={x.lastEdited}>{keys}: {x.title}</li>;
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
