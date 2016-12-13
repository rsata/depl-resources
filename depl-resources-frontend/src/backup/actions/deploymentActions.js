// export function getDocs() {
//   return function(dispatch) {
//     fetch('http://localhost:3001/api/data/deployment/get')
//       .then(r => {
//         dispatch({type: 'FETCH_DOCS_COMPLETE', payload: r.data})
//       })
//       .catch(e => {
//         dispatch({type: 'FETCH_DOCS_ERROR', payload: e})
//       });
//   }
// }


export function increment(index) {
  return {
    type: 'INCREMENT',
    index
  };
}

export function decrement(index) {
  return {
    type: 'DECREMENT',
    index
  };
}
