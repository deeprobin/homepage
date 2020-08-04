import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt, faEnvelope, faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faGitlab, faTwitter, faCodepen, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueParticles from 'vue-particles'
import VueAnalytics from 'vue-analytics';

library.add(faBuilding, faMapMarkerAlt,  faLinkedin, faGithub, faGitlab, faTwitter, faCodepen, faStackOverflow, faEnvelope, faBalanceScale)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAnalytics, {
    id: 'UA-73395240-4',
    router
})

Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
