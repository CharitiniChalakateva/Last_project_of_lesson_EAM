import Vue from 'vue';
import App from './App.vue';
import Store from './STORE';
import VueRouter from 'vue-router';

// Import the login and register components
import Login from '@/components/LOGIN.vue';
import Register from '@/components/REGISTER.vue';

// Use Vue Router
Vue.use(VueRouter);

// Create the router instance
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    // Add other routes as needed
  ],
});

// Create the Vue app instance
new Vue({
  router,
  store: Store,
  render: h => h(App)
}).$mount('#app');
