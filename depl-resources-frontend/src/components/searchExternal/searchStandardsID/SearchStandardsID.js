import React from 'react';
import MdSearch from 'react-icons/lib/md/search';
import SearchResultsModal from './SearchResultsModal';

export class SearchStandardsID extends React.Component {

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
            <input type='text' className='searchBox' name='searchStandardsID' placeholder='Search for District ID' onChange={this.handleSearchStandardsIDInputChange.bind(this)} />
            <span><MdSearch /></span>
          </form>
          {this.state.renderSearchResults===true ? <SearchResultsModal query={this.state.query} handlePageClick={this.handlePageClick.bind(this)} styleName='searchResultsModal' /> : null}
        </div>
      </li>
    );
  }
}
