export function loadData() {
  return dispatch => {
    fetch('http://localhost:3001/api/data/deployment/get')
      .then(r => r.json())
      .then(r => dispatch({
        type: 'LOAD_DATA',
        payload: r
      }))
  }
}
