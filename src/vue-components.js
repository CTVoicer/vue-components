import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as components from './components'
import { use } from './vue-plugins'

const VueComponents = {
  install (Vue, config = { options: {}, buefyOptions: {} }) {
    Vue.use(Buefy, config.buefyOptions)

    for (let componentKey in components) {
      Vue.use(components[componentKey], config.options)
    }
  }
}

use(Buefy)
use(VueComponents)

export default VueComponents
