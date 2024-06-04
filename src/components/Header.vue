<!--This is my header component where it will show on every page that I have routed it to :D -->
<script>
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <img src="./7590241.png" alt="Todoit Logo">
      </div>
      <nav class="navigation">
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li> <!-- Link to the home page -->
          <li><router-link to="/todolist">Get started</router-link></li> <!-- Link to the todo list page -->
          <li><router-link to="#">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.header {
  width: 100%;
  background-color: slategrey;
  padding: 10px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo img {
  max-width: 100px;
}

.navigation {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
}

.nav-list li {
  margin-left: 20px;
}

.nav-list a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px;
  transition: background 0.3s, color 0.3s;
}

.nav-list a:hover {
  background-color: #34495e;
  color: #ecf0f1;
}
</style>