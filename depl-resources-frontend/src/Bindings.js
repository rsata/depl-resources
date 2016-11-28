// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inc, dec } from './actions/countActions';

import Layout from './containers/Layout';

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (n) => {
      dispatch(inc(n));
    },
    decrement: (n) => {
      dispatch(dec(n));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);;
