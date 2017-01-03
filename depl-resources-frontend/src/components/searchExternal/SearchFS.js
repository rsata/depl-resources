import React from 'react';
import MdSearch from 'react-icons/lib/md/search';

function searchFS(e) {
  e.preventDefault();
  const query = encodeURI(e.target.searchFSInput.value);
  window.open('https://fs.rubicon.com/i/adminsite/global_search.php?GlobalSearch=' + query);
}

export const SearchFS = (props) => {
  return (
    <li>
      <form onSubmit={searchFS.bind(this)}>
        <input type='text' className='searchBox' name='searchFSInput' placeholder='Search Flight School'/>
        <span><MdSearch /></span>
      </form>
    </li>
  );
};
