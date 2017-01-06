const updateDocsReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOAD_NAV_DATA':
      let resources = [];
      let tips = [];
      let password= [];
      action.payload.forEach((i) => {
        if (i.type==='resources') resources.push(i);
        if (i.type==='tips') tips.push(i);
        if (i.type==='password') password.push(i);
      });
      return state = {
        ...state,
        resources,
        tips,
        password
      };

    case 'UPDATE_NAV_INSERT':
      const stateItemInsertArray = state[action.payload.type];
      return state = {
        ...state,
        [action.payload.type]: [
          ...stateItemInsertArray,
          action.payload
        ]
      };

    case 'UPDATE_NAV_SIDEBAR':
      const stateItemArray = state[action.payload.type];
      var updateIndex = stateItemArray.map(function(el) {
        return el.id;
      }).indexOf(action.payload.id);
      console.log(action.payload);
      return state = {
        ...state,
        [action.payload.type]: [
          ...stateItemArray.slice(0, updateIndex),
          action.payload,
          ...stateItemArray.slice(updateIndex + 1)
        ]
      };

      case 'UPDATE_NAV_DELETE':
        console.log(state);
        const stateItemDeleteArray = state[action.payload.type];
        var deleteIndex = stateItemDeleteArray.map(function(el) {
          return el.id;
        }).indexOf(action.payload.id);

        return state = {
          ...state,
          [action.payload.type]: [
            ...stateItemDeleteArray.slice(0, deleteIndex),
            ...stateItemDeleteArray.slice(deleteIndex + 1)
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
