import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { loadData } from '../actions/initActions';

class Resource extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    this.setState({
      type: this.props.params.type,
      id: this.props.params.id
    })
    // need to trigger state setting after data loaded on page refresh
    if (Object.keys(this.props.data).length === 0) {
      this.props.loadData()
    };
  }

  // componentDidMount() {
  //   if (this.state.data) {
  //     const type = this.props.params.type;
  //     const id = this.props.params.id;
  //     const data = this.props.data;
  //     this.setState({
  //       data: data[type].find((el) => {return el.id === id})
  //     });
  //   }
  // }

  // componentDidMount() {
  //   this.setState({data: this.props.data})
  // }

  // componentWillReceiveProps() {
  //   if (Object.keys(this.props.data).length !== 0) {
  //     const type = this.props.params.type;
  //     const id = this.props.params.id;
  //     const data = this.props.data;
  //     this.setState({
  //       data: data[type].find((el) => {return el.id === id})
  //     });
  //     console.log('will rec',this.props)
  //   }
  // }

  render() {
    if (Object.keys(this.props.data).length === 0) return <div>Loading...</div>
    return(
      <div>
        <button><Link to='/deployment'>Back</Link></button>
        <h1>{this.props.data[this.state.type].find((el) => {return el.id === this.state.id}).title}</h1>
        {this.props.data[this.state.type].find((el) => {return el.id === this.state.id}).entry}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.deploymentDocs
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
