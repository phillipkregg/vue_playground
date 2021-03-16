
Vue.component('task-list', {
  template: `<div><task v-for="task in tasks">{{task.task}}</task></div>`,

  data() {
    return {
      tasks: [
        { task: 'Go to the store', complete: true },
        { task: 'Be awesome', complete: false },
        { task: 'Do cool stuff', complete: false },
      ]
    }
  }
})

Vue.component('task', {
  template: '<li><slot></slot></li>',
  data() {
    return {
      message: 'sup'
    }
  }
})

new Vue({
  el: '#root'
});