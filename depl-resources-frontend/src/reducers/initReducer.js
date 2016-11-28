const initReducer = (state={
  data: null
}, action) => {
  switch(action.type) {
    case 'LOAD_DATA':
      state = {
        ...state,
        data: action.payload
      }
      break;

    default: {
      return {
        ...state
      }
    }
  }
  return state;
}

export default initReducer;
