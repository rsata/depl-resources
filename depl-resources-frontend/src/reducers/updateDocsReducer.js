const updateDocsReducer = (state={}, action) => {
  switch(action.type) {
    case 'LOAD_DATA':
      let standards = [];
      let siteConfig = [];
      let advancedConfig = [];
      let mapLoading = [];
      let siteBuild = [];
      action.payload.forEach((i) => {
        if (i.type==='standards') standards.push(i);
        if (i.type==='siteConfig') siteConfig.push(i);
        if (i.type==='advancedConfig') advancedConfig.push(i);
        if (i.type==='mapLoading') mapLoading.push(i);
        if (i.type==='siteBuild') siteBuild.push(i);
      });
      return state = {
        ...state,
        standards,
        siteConfig,
        advancedConfig,
        mapLoading,
        siteBuild
      };

    case 'UPDATE_DOCS_INSERT':
      const stateItemInsertArray = state[action.payload.type];
      return state = {
        ...state,
        [action.payload.type]: [
          ...stateItemInsertArray,
          action.payload
        ]
      };

    case 'UPDATE_DOCS_UPDATE':
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

      case 'UPDATE_DOCS_DELETE':
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
