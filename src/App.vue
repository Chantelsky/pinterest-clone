<template>
  <div id="app">
    <nav-bar @inputData="updateQuery" />
    <div class="app-container">
      <div v-if="$route.path.includes('/home')">
        <image-card :query="childData" />
      </div>
      <div v-else>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import ImageCard from '@/components/ImageCard.vue';

export default {
  components: { NavBar, ImageCard },
  data() {
    return {
      childData: '',
    };
  },
  methods: {
    updateQuery(variable) {
      this.childData = variable;
    },
  },
};
</script>
