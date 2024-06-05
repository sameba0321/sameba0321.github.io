import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue';
import TodoList from '../components/todolist.vue';
import TodoDetail from '../components/TodoDetail.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/todolist', component: TodoList },
  { path: '/todos/:id', name: 'todo-detail', component: TodoDetail, props: true }, // Update route definition
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;