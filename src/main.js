// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import store from './store/store'
import  { ToastPlugin } from 'vux'
import './assets/iconfont'
import './style/common.less'

Vue.use(ToastPlugin)
Vue.use(ToastPlugin, {position: 'middle'})
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.filter('substr', function(value) {
	if (value.length>4) {
		return value.substr(0,4)+"...";
	}
	return value.substr(0,4);
    
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
