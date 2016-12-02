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
    })
    // update state?
  }
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
    )
  }
}

export function removeDoc({id, type}) {
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
    )
  }
}
