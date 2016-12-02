import React from 'react';

export class SearchStandardsID extends React.Component{

  constructor() {
    super();
    this.state = {
      renderSearchResults: false,
      query: null
    }
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.handlePageClick.bind(this));
  }

  handlePageClick() {
    this.setState({renderSearchResults: false})
  }

  handleSearchStandardsIDInputChange(e) {
    e.preventDefault();
    const input = e.target.value;
    const query = input.split(' ').join('+');
    this.setState({query})
  }

  submitSearchStandardsID(e) {
    e.preventDefault();
    this.setState({renderSearchResults: !this.state.renderSearchResults})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearchStandardsID.bind(this)}>
          <input type='text' className='searchBox' name='searchStandardsID' placeholder='Lookup standards district ID' onChange={this.handleSearchStandardsIDInputChange.bind(this)} />
        </form>
        {this.state.renderSearchResults===true ? <StandardsIDSearchResults query={this.state.query} /> : null}
      </div>
    )
  }
}

const StandardsIDSearchResults = (props) => {
  return (
    <div id='yo'>
      <iframe width="100%" height="100%" className='searchPopupResult' src={'https://fs.rubicon.com/Internal/Standards/SetEditor/View/Default?GlobalSearch=&OrderBy=&OrderDirection=&DistrictNameQuery=' + props.query} frameBorder="0"></iframe>
    </div>
  )
}
