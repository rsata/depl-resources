import Deployment from './Deployment';
import { connect } from 'react-redux';
import { loadData } from '../../actions/initActions';

const mapStateToProps = (state) => {
  return {
    deploymentDocs: state.deploymentDocs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(loadData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deployment);
