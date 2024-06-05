<template>
    <div class="todo-detail">
      <div class="column" @dragover.prevent @drop="onDrop('todo')">
        <h2>To Do</h2>
        <div class="task-list">
          <input type="text" v-model="newTask" placeholder="Enter task">
          <button @click="addTask">Add Task</button>
          <div v-for="(task, index) in todoTasks" :key="index" draggable="true" @dragstart="onDragStart('todo', index)">
            <p>{{ task }}</p>
          </div>
        </div>
      </div>
      <div class="column" @dragover.prevent @drop="onDrop('inProgress')">
        <h2>In Progress</h2>
        <div class="task-list">
          <div v-for="(task, index) in inProgressTasks" :key="index" draggable="true" @dragstart="onDragStart('inProgress', index)">
            <p>{{ task }}</p>
          </div>
        </div>
      </div>
      <div class="column" @dragover.prevent @drop="onDrop('done')">
        <h2>Done</h2>
        <div class="task-list">
          <div v-for="(task, index) in doneTasks" :key="index" draggable="true" @dragstart="onDragStart('done', index)">
            <p>{{ task }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        todoTasks: [],
        inProgressTasks: [],
        doneTasks: [],
        newTask: ''
      };
    },
    mounted() {
      // Load tasks from localStorage when the component is mounted
      this.loadTasks();
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.todoTasks.push(this.newTask);
          this.newTask = '';
          this.saveTasks(); // Save tasks to localStorage
        }
      },
      onDragStart(status, index) {
        this.draggedStatus = status;
        this.draggedIndex = index;
      },
      onDrop(status) {
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
        this.saveTasks(); // Save tasks to localStorage
      },
      saveTasks() {
        localStorage.setItem('todoTasks', JSON.stringify(this.todoTasks));
        localStorage.setItem('inProgressTasks', JSON.stringify(this.inProgressTasks));
        localStorage.setItem('doneTasks', JSON.stringify(this.doneTasks));
      },
      loadTasks() {
        const storedTodoTasks = localStorage.getItem('todoTasks');
        const storedInProgressTasks = localStorage.getItem('inProgressTasks');
        const storedDoneTasks = localStorage.getItem('doneTasks');
        
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
  };
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
  </style>