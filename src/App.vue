<template>
  <div id="app">
    <nav-bar />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
