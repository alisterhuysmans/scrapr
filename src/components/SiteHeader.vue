<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/leaderboard">Leaderboard</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>
header {
  background: #333;
  color: white;
  padding: 1rem;
}
nav a {
  margin-right: 1rem;
  color: white;
  text-decoration: none;
}
</style>
