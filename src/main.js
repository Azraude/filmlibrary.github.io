import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import i18n from './Plugins/i18n'
import dico from './Plugins/dico'
import VueAxios from 'vue-axios'
import router from './router'

createApp(App).use(router).use(VueAxios, axios).use(i18n, dico).mount('#app')
