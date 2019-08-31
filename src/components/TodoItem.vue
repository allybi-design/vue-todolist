<template>
  <div class="todo-item" :class="{ 'is-complete': todoitem.completed }">
    <p>
      <label class="wrapper" @change="markComplete">
        {{ todoitem.title }} {{ todoitem.id }}
        <input type="checkbox" :checked="todoitem.completed" />
        <span class="checkmark"></span>

        <button class="del" @click="$emit('del-todo', todoitem.id)">
          <i class="fas fa-times-circle fa-3x"></i>
        </button>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItemComp",
  props: ["todoitem"],
  methods: {
    markComplete() {
      this.todoitem.completed = !this.todoitem.completed;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
}

/* Hide the browser's default checkbox */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background: #f4f4f4;
  border: 1px solid #000;
}

/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  border: 2px solid #000;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
  color: #000;
}

/* Style the checkmark/indicator */
.wrapper .checkmark:after {
  left: 9px;
  top: 4px;
  width: 4px;
  height: 10px;
  border: solid #000000;
  border-width: 0 3px 3px 0;
  transform: rotate(40deg);
}

.todo-item {
  background: #f4f4f4;
  padding: 0.5rem 1rem;
  border-bottom: 1px #ccc dotted;
  font-size: 2rem;

  .del {
    background: #f4f4f4;
    color: #f00;
    border: none;
    padding: 5px 9px;
    cursor: pointer;
    float: right;
  }
}
.is-complete {
  text-decoration: line-through;
}
</style>
