<template>
  <div class="todo-detail">
    <div class="column" @dragover.prevent @drop="onDrop('todo')">
      <h2>To Do</h2>
      <div class="task-list">
        <input type="text" v-model="newTask" @keydown.enter="addTask" placeholder="Enter task">
        <button class="create-task-button" @click="addTask">Add Task</button>
        <div v-for="(task, index) in todoTasks" :key="index" class="task-container" draggable="true" @dragstart="onDragStart('todo', index)">
          <div class="task-wrapper">
            <p>{{ task }}</p>
            <button class="delete-button" @click="deleteTask('todo', index)">🗑️</button>
          </div>
        </div>
      </div>
    </div>
    <div class="column" @dragover.prevent @drop="onDrop('inProgress')">
      <h2>In Progress</h2>
      <div class="task-list">
        <div v-for="(task, index) in inProgressTasks" :key="index" class="task-container" draggable="true" @dragstart="onDragStart('inProgress', index)">
          <div class="task-wrapper">
            <p>{{ task }}</p>
            <button class="delete-button" @click="deleteTask('inProgress', index)">🗑️</button>
          </div>
        </div>
      </div>
    </div>
    <div class="column" @dragover.prevent @drop="onDrop('done')">
      <h2>Done</h2>
      <div class="task-list">
        <div v-for="(task, index) in doneTasks" :key="index" class="task-container" draggable="true" @dragstart="onDragStart('done', index)">
          <div class="task-wrapper">
            <p>{{ task }}</p>
            <button class="delete-button" @click="deleteTask('done', index)">🗑️</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      todoTasks: [],
      inProgressTasks: [],
      doneTasks: [],
      newTask: ''
    };
  },
  created() {
    this.loadTasks();
  },
  watch: {
    '$route'() {
      this.loadTasks();
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.todoTasks.push(this.newTask);
        this.newTask = '';
        this.saveTasks();
      }
    },
    onDragStart(status: string, index: number) {
      this.draggedStatus = status;
      this.draggedIndex = index;
    },
    onDrop(status: string) {
      const task = this[this.draggedStatus + 'Tasks'].splice(this.draggedIndex, 1)[0];
      switch (status) {
        case 'todo':
          this.todoTasks.push(task);
          break;
        case 'inProgress':
          this.inProgressTasks.push(task);
          break;
        case 'done':
          this.doneTasks.push(task);
          break;
        default:
          break;
      }
      this.saveTasks();
    },
    deleteTask(status: string, index: number) {
      switch (status) {
        case 'todo':
          this.todoTasks.splice(index, 1);
          break;
        case 'inProgress':
          this.inProgressTasks.splice(index, 1);
          break;
        case 'done':
          this.doneTasks.splice(index, 1);
          break;
        default:
          break;
      }
      this.saveTasks();
    },
    saveTasks() {
      const routeName = this.$route.name || '';
      localStorage.setItem(`${routeName}_todoTasks`, JSON.stringify(this.todoTasks));
      localStorage.setItem(`${routeName}_inProgressTasks`, JSON.stringify(this.inProgressTasks));
      localStorage.setItem(`${routeName}_doneTasks`, JSON.stringify(this.doneTasks));
    },
    loadTasks() {
      const routeName = this.$route.name || '';
      const storedTodoTasks = localStorage.getItem(`${routeName}_todoTasks`);
      const storedInProgressTasks = localStorage.getItem(`${routeName}_inProgressTasks`);
      const storedDoneTasks = localStorage.getItem(`${routeName}_doneTasks`);

      if (storedTodoTasks) {
        this.todoTasks = JSON.parse(storedTodoTasks);
      }
      if (storedInProgressTasks) {
        this.inProgressTasks = JSON.parse(storedInProgressTasks);
      }
      if (storedDoneTasks) {
        this.doneTasks = JSON.parse(storedDoneTasks);
      }
    }
  }
});
</script>

<style>
.todo-detail {
  display: flex;
  justify-content: space-around;
}

.column {
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
}

.task-list {
  margin-top: 10px;
  padding: 5px;
  background-color: #f0f0f0;
  border: 1px solid #999;
}

.task-list p {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: move;
}

.delete-button {
  cursor: pointer;
  margin-left: 5px;
}
.task-wrapper {
  display: flex;
  align-items: center;
}
.create-task-button {
  margin-top: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.create-task-button:hover {
  background-color: #0056b3;
}
</style>