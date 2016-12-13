const initReducer = (state={}, action) => {
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
      state = {
        ...state,
        standards,
        siteConfig,
        advancedConfig,
        mapLoading,
        siteBuild
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

export default initReducer;
