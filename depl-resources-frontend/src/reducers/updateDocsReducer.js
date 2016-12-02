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
      })
      return state = {
        ...state,
        standards,
        siteConfig,
        advancedConfig,
        mapLoading,
        siteBuild
      }

    case 'UPDATE_DOCS':
      const stateItemArray = state[action.payload.type];
      var index = stateItemArray.map(function(el) {
        return el.id;
      }).indexOf(action.payload.id);

      return state = {
        ...state,
        [action.payload.type]: [
          // ...stateItemArray,
          // [index]: action.payload
          ...stateItemArray.slice(0, index),
          action.payload,
          ...stateItemArray.slice(index + 1)
        ]
      }

    default: {
      return {
        ...state
      }
    }
  }
}

export default updateDocsReducer;
