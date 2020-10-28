<template>
  <div>
    <input type="text" v-model="task" required/> <input type="button" value="Add Task" @click="addTask"/>
    <div v-if="tasks.length>0">
      <p>Task List</p>
      <show-task v-for="(tsk,index) in tasks" :key="tsk" :task-name="tsk" :index="index" :tasks="tasks"></show-task>
    </div>
  </div>
</template>

<script>
import showTask from './ShowTask.vue'

export default {
  name: 'AddTask',
  components: {
    ShowTask: showTask
  },
  data() {
    return {
      tasks: [],
      task: undefined
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push(this.task)
      this.task = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
