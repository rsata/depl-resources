import React from 'react';

export class SearchStandardsID extends React.Component{

  constructor() {
    super();
    this.state = {
      renderSearchResults: false,
      query: null
    };
  }

  handlePageClick() {
    this.setState({renderSearchResults: false});
  }

  handleSearchStandardsIDInputChange(e) {
    e.preventDefault();
    const input = e.target.value;
    const query = input.split(' ').join('+');
    this.setState({query});
  }

  submitSearchStandardsID(e) {
    e.preventDefault();
    this.setState({renderSearchResults: !this.state.renderSearchResults});
  }

  render() {
    return (
      <li>
        <div>
          <form onSubmit={this.submitSearchStandardsID.bind(this)}>
            <input type='text' className='searchBox' name='searchStandardsID' placeholder='Standards Search' onChange={this.handleSearchStandardsIDInputChange.bind(this)} />
          </form>
          {this.state.renderSearchResults===true ? <SearchResultsModal query={this.state.query} handlePageClick={this.handlePageClick.bind(this)} /> : null}
        </div>
      </li>      
    );
  }
}

const SearchResultsModal = (props) => {
  return (
    <div className='searchResultsModal'>
      <div className='searchResultsModalWrapper'>
        <h1>Search Results</h1>
        <button onClick={props.handlePageClick} className='searchResultsCloseButton'>X</button>
        <div>
          <iframe className='searchResultsModalPopup' src={'https://fs.rubicon.com/Internal/Standards/SetEditor/View/Default?GlobalSearch=&OrderBy=&OrderDirection=&DistrictNameQuery=' + props.query} frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
};
