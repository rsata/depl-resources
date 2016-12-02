import React from 'react';

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
}

function searchStandards(e) {
  e.preventDefault();
  const query = encodeURI(e.target.searchStandardsInput.value);
  window.open('https://hogwarts.rubiconatlas.org/Atlas/References/Standards/View/Default?tab=17&TabName=Standards&FromReferences=1&ShowKey=1&AllStatuses=1&DistrictID='+ query +'&StandardsName=Alabama&')
}

export const SearchStandards = (props) => {
  return (
    <form style={styles.formSearchStandards} onSubmit={searchStandards.bind(this)}>
      <input type='text' className='searchBox' name='searchStandardsInput' placeholder='Standards Search by ID' />
    </form>
  )
}

//https://fs.rubicon.com/Internal/Standards/SetEditor/View/Default?DistrictNameQuery=common+core&DistrictID=804
