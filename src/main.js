import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Table_english from './components/Table_english'
import Table_spanish from './components/Table_spanish'
import Issue from './components/Issue'
import Phishing from './components/Phishing'
import HelloWorld from './components/HelloWorld'

const routes =[
  {
    path: '/spanish',
   component: Table_spanish,
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
    path: '/',
   component: HelloWorld,
  },

]

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({routes})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
