import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './searchResultsModal.scss';

class SearchResultsModal extends React.Component {
  render() {
    return (
      <div styleName='searchResultsModalWrapper'>
        <h1>Search Results</h1>
        <button styleName='searchResultsCloseButton' onClick={this.props.handlePageClick}>X</button>
        <div>
          <iframe styleName='searchResultsModal' src={'https://fs.rubicon.com/Internal/Standards/SetEditor/View/Default?GlobalSearch=&OrderBy=&OrderDirection=&DistrictNameQuery=' + this.props.query} frameBorder="0"></iframe>
        </div>
      </div>
    );
  }
};

export default CSSModules(SearchResultsModal, styles);
