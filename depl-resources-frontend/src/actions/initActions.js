export function loadData() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/data/deployment/get')
      .then(r => r.json())
      .then(r => dispatch({
        type: 'LOAD_DATA',
        payload: r
      }));
  };
}

export function getNavItems() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/data/nav')
      .then(r => r.json())
      .then(r => dispatch({
        type: 'LOAD_NAV_DATA',
        payload: r
      }));
  };
}
