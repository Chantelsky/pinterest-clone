<template>
  <div class="about flex flex-col items-center w-screen">
    <h3 class="text-xl font-bold">{{ currentDateTime() }}</h3>
    <h1 class="text-4xl font-bold">Stay Inspired</h1>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  methods: {
    currentDateTime() {
      return moment().format('MMMM Do YYYY');
    },
  },
};
</script>
