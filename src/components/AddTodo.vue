<template>
  <div class="input">
    <input
      type="text"
      name="title"
      id="addtodo"
      v-model="title"
      placeholder="Add Todo..."
    />
    <button class="btn" @click="addTodo">Add</button>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style scoped>
.input {
  display: flex;
  box-shadow: 1px 1px 10px 0px #000000;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
  font-size: 2rem;
}

.btn {
  flex: 2;
  background: #20d41a;
  background-image: linear-gradient(to bottom, #20d41a, #069106);
  color: #ffffff;
  font-size: 2rem;
  padding: 0.75rem 1.5rem;
  text-shadow: 1px 1px 20px #000000;
  border: ridge #000000 1px;
  cursor: pointer;
}
</style>
