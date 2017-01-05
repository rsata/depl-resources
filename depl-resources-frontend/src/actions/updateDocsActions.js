export function insertNewDoc({type, title, url, entry}) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/insert', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        type,
        title,
        url,
        entry
      })
    }).then(
      dispatch({
        type: 'UPDATE_DOCS_INSERT',
        payload: {type, title, url, entry}
      })
    );
    // update state?
  };
}

export function updateDocs({id, type, title, url, entry}) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/update', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id,
        type,
        title,
        url,
        entry
      })
    }).then(
      dispatch({
        type: 'UPDATE_DOCS_UPDATE',
        payload: {id, type, title, url, entry}
      })
    );
  };
}

export function removeDoc({id, type}) {
  let confirm = window.confirm('Are you sure you want to delete?');
  if (!confirm) return null;
  return (dispatch) => {
    fetch('http://localhost:3001/api/delete', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    }).then(
      dispatch({
        type: 'UPDATE_DOCS_DELETE',
        payload: {id, type}
      })
    );
  };
}

export function updateNavSidebar({id, type, title, url}) {
  return (dispatch) => {
    fetch('http://localhost:3001/api/updateNavSidebar', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id,
        type,
        title,
        url
      })
    }).then(
      dispatch({
        type: 'UPDATE_NAV_SIDEBAR',
        payload: {id, type, title, url}
      })
    );
  };
}
