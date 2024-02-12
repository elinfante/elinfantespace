import { createApp } from 'vue'; // Import createApp from 'vue' package

import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app'); // Use createApp instead of new Vue
