import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import VueClipboard from 'vue-clipboard2'
import Table_english from './components/Table_english'
// import Table_spanish from './components/Table_spanish'
import Issue from './components/Issue'
import Info_Library from './components/Info_Library'
import Phishing from './components/Phishing'
import HelloWorld from './components/HelloWorld'
import NotFound from './components/404'
import Login from './components/Login'
import LoginIn from './components/LoginIn'
import TLS from './components/TLS.vue'
import Library from './components/Library'

const routes =[
  {
    path: '/spanish',
   component: NotFound,
  },
  {
    path: '/issue',
    name: 'issue_item',    
   component: Issue,
   props: (route) => ({    
    ...route.params
})
  },
  {
    path: '/english',
   component: Table_english,
  },
  {
    path: '/phishing',
   component: Phishing,
  },
  {
    path: '/tls',
   component: TLS,
  },
  {
    path: '/lib',
   component: Library,
  },
  {
    path: '/libs',
    name:'lib_info',
    component: Info_Library,
    props: (route) => ({    
     ...route.params
 }),
  },
  {
    path: '/',
   component: HelloWorld,
  },
  {
    path: '*',
   component: NotFound,
  },  
  {
    path: '/admin',
   component: Login,
  },
  
  {
    path: '/login',
   component: LoginIn,
  },


]

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueClipboard)
const router = new VueRouter({routes})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
