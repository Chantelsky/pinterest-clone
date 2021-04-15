<template>
  <div class="w-screen flex flex-col items-center">
    <div class="about">
      <h3 class="text-xl font-bold text-center">{{ currentDateTime() }}</h3>
      <h1 class="text-4xl font-bold">Stay Inspired</h1>
    </div>
    <div
      class="grid grid-cols-3 gap-4 justify-items-center mt-5 bg-pink-200 w-2/4"
    >
      <!-- TODO: Get random photos -->
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
    </div>
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
