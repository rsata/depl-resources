import React from 'react';

import { SearchFS } from './SearchFS';
import { SearchStandards } from './SearchStandards';
import { SearchStandardsID } from './SearchStandardsID';

const styles = {
  formSearchStandards: {
    float: 'right'
  },
  formSearchFS: {
    float: 'left'
  },
  searchWrapper: {
    width: '70%'
  }
};

export const SearchExternal = (props) => {
  return (
    <div style={styles.searchWrapper}>
      <SearchFS />
      <SearchStandards />
      <SearchStandardsID />
    </div>
  );
};
