import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import mitt from 'mitt';
import App from './App.vue'
import router from './router'


const emitter = mitt();
const app = createApp(App)

app.config.globalProperties.emitter = emitter;
app.use(router, bootstrap)
app.mount('#app')

