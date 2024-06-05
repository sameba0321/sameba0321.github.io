<template>
  <div class="todo-container">
    <div class="todo-list">
      <div class="todo-item" v-for="(todo, index) in todos" :key="index">
        <h3 @click="goToDetailPage(todo)">{{ todo.title }}</h3>
        <p @click="goToDetailPage(todo)">{{ todo.description }}</p>
        <span @click.stop="deleteTodo(index)">❌</span> 
      </div>
    </div>
  
    <button class="add-todo-button" @click="addTodo">
      <span class="horizontal-cross">+</span>
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
.todo-container {
  display: flex;
  gap: 10px;
}

.todo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.todo-item {
  width: 200px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
}

.todo-item h3,
.todo-item p {
  margin: 0;
}

.todo-item span {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.add-todo-button {
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: slategrey; /* Change to slate grey */
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
}

.add-todo-button span.horizontal-cross {
  font-size: 20px;
  line-height: 40px;
}

.add-todo-button:hover {
  background-color: #7c7c7c; /* Darken the color on hover */
}
</style>