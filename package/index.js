
import Button from './button/index.js';
import collapseTransition from './collapse-transition/collapse-transition.js';
import Message from './message/index.js';
import Carousel from './carousel/index.js';
import CarouselItem from './carousel-item/index.js';


const components = [
  Button,
  collapseTransition,
  Carousel,
  CarouselItem,
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Message,
  collapseTransition,
  Carousel,
  CarouselItem,
}
