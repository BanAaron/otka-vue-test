import sampleConfig from '@/config'
import {OktaAuth} from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const oktaAuth = new OktaAuth(sampleConfig.oidc)

createApp(App)
  .use(router)
  .use(OktaVue, {oktaAuth})
  .mount('#app')
