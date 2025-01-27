import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import './styles/style.scss'
//import store from './store'

library.add(fas);

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app')