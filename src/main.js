import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VeeValidatePlugin from './includes/validations'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'

import router from './router'
createApp(App)
    .use(store)
    .use(VeeValidatePlugin)
    // .use(BootstrapVue)
    // .use(IconsPlugin)
    .use(router)
    .mount('#app')
