<template>
  <div id="nav">
    <!--TODO: if user is logged in view Navbar -->
    <nav-bar />
  </div>
  <router-view />
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
