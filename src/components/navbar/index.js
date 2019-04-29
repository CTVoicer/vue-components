import Navbar from './Navbar.vue'

import { use, registerComponent } from '../../vue-plugins'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, Navbar)
  }
}

use(Plugin)

export default Plugin

export {
  Navbar
}
