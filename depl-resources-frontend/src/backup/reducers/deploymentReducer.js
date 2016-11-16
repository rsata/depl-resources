//
// // I would live in a separate file
// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case "SET_NAME": {
//       return {...state, name: action.payload};
//       break;
//     }
//     case "SET_AGE": {
//       return {...state, age: action.payload};
//       break;
//     }
//   }
//   return state;
// }

// export default function reducer(state={
//   docs: [],
//   fetching: false,
//   fetched: false,
//   error: null
// }, action) {
//   switch(action.type) {
//     case 'FETCH_DOCS': {
//       return {...state, fetching: true}
//     }
//     case 'FETCH_DOCS_ERROR': {
//       return {...state, fetching: false, error: action.payload}
//     }
//     case 'FETCH_DOCS_COMPLETE': {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         docs: action.payload
//       }
//     }
//   }
// }

// export default function reducer(state, action) {
//   switch(action.type) {
//     case 'INCREMENT': {
//       return {...state, count: 1}
//     }
//   }
// }

export default function increment(state=[], action) {
  // console.log('yay dep action');
  // console.log(state, action);
  // return state;
  switch(action.type) {
    case 'INCREMENT': {
      return {...state, count: 1}
    }
  }
}
