import Nav from '../../components/nav';
import { connect } from 'react-redux';
import { getNavItems } from '../../actions/initActions';

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNavItems: () => {
      dispatch(getNavItems());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
