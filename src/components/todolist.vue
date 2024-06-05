<template>
  <div>
    <div class="todo-list">
      <div class="todo-item" v-for="(todo, index) in todos" :key="index">
        <h3 @click="goToDetailPage(todo)">{{ todo.title }}</h3>
        <p @click="goToDetailPage(todo)">{{ todo.description }}</p>
        <span @click.stop="deleteTodo(index)">❌</span> <!-- Stop event propagation -->
      </div>
    </div>
    <!-- Style the button as a round button with a horizontal cross icon -->
    <button class="add-todo-button" @click="addTodo">
      <span class="horizontal-cross">&#10006;</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: []
    };
  },
  created() {
    this.loadTodos();
  },
  methods: {
    goToDetailPage(todo) {
      console.log("Clicked todo:", todo);
      this.$router.push({ name: 'todo-detail', params: { id: todo.id } });
    },
    addTodo() {
      const newTodoId = this.todos.length + 1;
      const newTodo = {
        id: newTodoId,
        title: `Todo ${newTodoId}`,
        description: `Description for Todo ${newTodoId}`
      };
      this.todos.push(newTodo);
      this.saveTodos();
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.saveTodos();
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodos() {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    }
  }
};
</script>

<style>
.todo-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.todo-item {
  position: relative; /* Relative position for the delete button */
  width: 200px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.todo-item span {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.add-todo-button {
  border: none;
  border-radius: 50%; /* Round button */
  width: 40px;
  height: 40px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.add-todo-button span.horizontal-cross {
  font-size: 20px;
  line-height: 40px;
  transform: rotate(90deg); /* Rotate the cross icon horizontally */
}

.add-todo-button:hover {
  background-color: #0056b3;
}
</style>