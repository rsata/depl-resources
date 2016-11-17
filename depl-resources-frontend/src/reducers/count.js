function count(state=0, action) {
  switch(action.type) {
    case 'INC': return {
      ...state, count: state.count + 1
    }
    case 'DEC': return {
      ...state, count: state.count - 1
    }
    default:
      return state;
  }
}

export default count;
