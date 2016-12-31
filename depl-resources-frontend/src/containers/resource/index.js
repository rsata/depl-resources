import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loadData } from '../../actions/initActions';

const tempStyle = {
  backgroundColor: '#2980B9',
  color: '#fff',
  padding: '6px 12px',
  borderRadius: '4px',
  button: {
    border: 'none'
  }
};

class Resource extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentWillMount() {
    this.setState({
      type: this.props.params.type,
      id: this.props.params.id
    });
    // need to trigger state setting after data loaded on page refresh
    if (Object.keys(this.props.data).length === 0) {
      this.props.loadData();

    };
  }

  createMarkup(str) {
    return {__html: str};
  }

  render() {
    if (Object.keys(this.props.data).length === 0) return <div>Loading...</div>;
    return(
      <div>
        <button style={tempStyle.button}><Link style={tempStyle} to='/deployment'>Back</Link></button>
        <h1>{this.props.data[this.state.type].find((el) => {return el.id === this.state.id;}).title}</h1>
        <div dangerouslySetInnerHTML={this.createMarkup(this.props.data[this.state.type].find((el) => {return el.id === this.state.id;}).entry
          )
        } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.deploymentDocs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(loadData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
