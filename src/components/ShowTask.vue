<template>
  <div class="task">
    <input type="checkbox" class="right-spacing" @change="strikeOut($event)"/>
    <h2 width="20px" height="20px" :class="['right-spacing', isChecked? 'strike-out':'']">{{ tasks.name }} </h2> <img
      class="left-spacing"
      src=".././assets/cancel.png"
      width="15px"
      height="15px" @click="removeTask">
  </div>
</template>

<script>
export default {
  name: "ShowTask",
  data() {
    return {
      isChecked: undefined
    }
  },
  props: {
    tasks: Object
  },
  methods: {
    strikeOut: function (event) {
      this.isChecked = event.currentTarget.checked
    },
    removeTask: function () {
      this.$emit("remove",this.tasks.position)
    }
  }
}
</script>
<style scoped>

.task {
  display: inline-block;
  background-color: bisque;
  width: 100%;
}

div > * {
  display: inline-block;
  vertical-align: center;
}

.left-spacing {
  margin-left: 40px;
}

.right-spacing {
  margin-right: 10px
}

.strike-out {
  text-decoration: line-through;
}
</style>
