import Vue from 'vue'
import App from './App.vue'
import MeUI from '../src/index'
import router from './router'
Vue.use(MeUI)

Vue.config.productionTip = false

import hljs from 'highlight.js'
import demoBlock from './components/demo-block'
import 'highlight.js/styles/stackoverflow-light.css'

Vue.component('demo-block', demoBlock)

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'me-ui'
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
