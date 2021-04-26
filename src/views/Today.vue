<template>
  <div class="w-screen flex flex-col items-center">
    <div class="today pt-6">
      <h3 class="text-xl font-bold text-center">{{ currentDateTime() }}</h3>
      <!--TODO: randomise text -->
      <h1 class="text-4xl font-bold">Stay Inspired</h1>
    </div>
    <div
      class="grid grid-cols-3 gap-4 justify-items-center mt-5 bg-pink-200 w-2/4"
    >
      <!-- TODO: Get random photos -->
    <stack :column-min-width="320" :gutter-width="8" :gutter-height="8">
      <!--TODO: add photos -->
      <stack-item v-for="(item, i) in items" :key="i">
        {{ item.someContent }}
      </stack-item>
    </stack>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { Stack, StackItem } from 'vue-stack-grid';

export default {
  components: {
    Stack,
    StackItem,
  },
  methods: {
    currentDateTime() {
      return moment().format('MMMM Do YYYY');
    },
  },
};
</script>
