import * as Components from "./components";

// Exporta os componentes individualmente
export * from "./components";

// Plugin de instalação de todos os componentes
const VueComponents = {
  install(Vue, options = {}) {
    for (let key in Components) {
      const plugin = {
        install(Vue) {
          Vue.component(Components[key].name, Components[key]);
        }
      };

      Vue.use(plugin, options);
    }
  }
};

export default VueComponents;
