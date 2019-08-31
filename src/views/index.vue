<template>
  <div>
    <AddTodo @add-todo="addNewTodo" />
    <Todos :todos="todos" @del-todo="deleteTodo" />
  </div>
</template>

<script>
import Axios from "axios";
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo";

export default {
  name: "indexView",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      newTodos: []
    };
  },
  created() {
    return Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => (this.todos = res.data))
      .catch(error => console.log(error));
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addNewTodo(newTodo) {
      console.log(newTodo);
      this.todos.push(newTodo);
    }
  }
};
</script>
