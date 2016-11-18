function count(state={}, action) {
  switch(action.type) {
    case 'INC': return {
      ...state, count: state + action.payload
    }
    case 'DEC': return {
      ...state, count: state - action.payload
    }
    default:
      return state;
  }
}

export default count;
