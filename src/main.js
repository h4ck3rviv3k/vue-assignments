import Vue from 'vue'
import Todo from './Todo.vue'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(Todo),
})
