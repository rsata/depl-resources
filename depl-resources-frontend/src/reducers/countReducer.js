const countReducer = (state={
  count: 0
}, action) => {
  switch(action.type) {
    case 'INC':
      state = {
        ...state,
        count: state.count + action.payload
      };
      break;

    case 'DEC':
      state = {
        ...state,
        count: state.count - action.payload
      };
      break;

    default: {
      return {
        ...state
      };
    }
  }
  return state;
};

export default countReducer;
