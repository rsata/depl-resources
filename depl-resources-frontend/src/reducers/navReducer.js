const updateDocsReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOAD_NAV_DATA':
      let resources = [];
      let tips = [];
      let password;
      action.payload.forEach((i) => {
        if (i.type==='resources') resources.push(i);
        if (i.type==='tips') tips.push(i);
        if (i.type==='password') password = i;
      });
      return state = {
        ...state,
        tips,
        resources,
        password
      };

    case 'UPDATE_NAV_SIDEBAR':
      const stateItemArray = state[action.payload.type];
      var updateIndex = stateItemArray.map(function(el) {
        return el.id;
      }).indexOf(action.payload.id);

      return state = {
        ...state,
        [action.payload.type]: [
          ...stateItemArray.slice(0, updateIndex),
          action.payload,
          ...stateItemArray.slice(updateIndex + 1)
        ]
      };

    default: {
      return {
        ...state
      };
    }
  }
};

export default updateDocsReducer;
