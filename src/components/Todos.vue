<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <Todoitem :todoitem="todo" @del-todo="$emit('del-todo', todo.id)" />
        <!-- <Todoitem :todo="todo" @delete-todo1="print(todo.id)"/> -->
      </li>
    </ul>
  </div>
</template>

<script>
import Todoitem from "@/components/TodoItem";

export default {
  name: "TodoComp",
  components: {
    Todoitem
  },
  props: ["todos"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 1.5rem 0;
}
</style>
