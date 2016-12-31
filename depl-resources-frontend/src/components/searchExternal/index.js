import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './searchExternal.scss';

import { SearchFS } from './SearchFS';
import { SearchStandards } from './SearchStandards';
import { SearchStandardsID } from './searchStandardsID/SearchStandardsID';

const SearchExternal = (props) => {
  return (
    <div styleName='searchBar'>
      <ul>
        <SearchFS />
        <SearchStandardsID />
        <SearchStandards />
      </ul>
    </div>
  );
};

export default CSSModules(SearchExternal, styles);
