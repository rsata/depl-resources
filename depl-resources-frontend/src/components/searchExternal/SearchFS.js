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

function searchFS(e) {
  e.preventDefault();
  const query = encodeURI(e.target.searchFSInput.value);
  window.open('https://fs.rubicon.com/i/adminsite/global_search.php?GlobalSearch=' + query)
}

export const SearchFS = (props) => {
  return (
    <form onSubmit={searchFS.bind(this)}>
      <input style={styles.formSearchFS} type='text' className='searchBox' name='searchFSInput' placeholder='Search Flight School'/>
    </form>
  )
}
