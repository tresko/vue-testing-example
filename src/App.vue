<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" data-testid="home-link">Home</router-link> |
      <router-link to="/about" data-testid="about-link">About</router-link>
    </div>
    <router-view />
    <div data-testid="location-display">{{ $route.fullPath }}</div>
  </div>
</template>

<style>
@tailwind base;

@tailwind components;

@tailwind utilities;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
