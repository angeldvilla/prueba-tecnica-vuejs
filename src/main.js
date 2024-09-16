import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './utils/store'
import router from './routes/index'

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
