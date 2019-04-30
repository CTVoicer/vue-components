import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@ctvoicer/ctstyle'
import * as Components from './components'
import { use, registerComponent } from './vue-plugins'

// Exporta os componentes individualmente
export * from './components'

// Plugin de instalação de todos os componentes
const VueComponents = {
  install (Vue, config = { options: {}, buefyOptions: {} }) {
    Vue.use(Buefy, config.buefyOptions)

    for (let componentKey in Components) {
      const plugin = {
        install (Vue) {
          registerComponent(Vue, Components[componentKey])
        }
      }

      Vue.use(plugin, config.options)
    }
  }
}

use(Buefy)
use(VueComponents)

export default VueComponents
