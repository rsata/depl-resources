import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions/deploymentActions';

import Layout from './Layout';

function mapStateToProps(state) {
  return {
    dep: state.dep,
    heat: state.heat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const Redux = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default Redux;
