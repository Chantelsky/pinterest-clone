<template>
  <div>
    <input
      v-model="data.imageResults"
      @keyup.enter="getImages"
      type="text"
      placeholder="Search"
      class="bg-pinterestgray w-full p-3 rounded-full focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
</template>

<script>
import { reactive } from 'vue';

// TODO: display search results
export default {
  setup() {
    const data = reactive({
      imageResults: '',
    });
    const getImages = () => {
      console.log('getImages');
    };
    return {
      data,
      getImages,
    };
  },
};
</script>
