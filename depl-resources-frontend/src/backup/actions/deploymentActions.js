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


export function increment() {
  return {
    type: 'INCREMENT',
    payload: 1
  }
}

export function decrement() {
  return {
    type: 'DECREMENT',
    payload: 1
  }
}
