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
