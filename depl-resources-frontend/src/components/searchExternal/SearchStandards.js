import React from 'react';

function searchStandards(e) {
  e.preventDefault();
  const query = encodeURI(e.target.searchStandardsInput.value);
  window.open('https://hogwarts.rubiconatlas.org/Atlas/References/Standards/View/Default?tab=17&TabName=Standards&FromReferences=1&ShowKey=1&AllStatuses=1&DistrictID='+ query +'&StandardsName=Alabama&');
}

export const SearchStandards = (props) => {
  return (
    <li>
      <form onSubmit={searchStandards.bind(this)}>
        <input type='text' className='searchBox' name='searchStandardsInput' placeholder='Standards Search by ID' />
      </form>
    </li>
  );
};

//https://fs.rubicon.com/Internal/Standards/SetEditor/View/Default?DistrictNameQuery=common+core&DistrictID=804
