<!--TODO: transition - slide down -->
<template>
  <div
    class="absolute right-0 -top-4.5 bg-white shadow-xl rounded-lg p-5 text-left w-1/5"
  >
    <p class="text-md font-bold text-center">Updates</p>
    <div class="flex flex-row">
      <ul>
        <li
          v-for="contentUpdate in contentUpdates"
          :key="contentUpdate.name"
          class=""
        >
          {{ contentUpdate.name }}
          <span class="text-gray-400">{{ contentUpdate.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentUpdates: [
        {
          name: 'We think you might like these 17 ideas',
          date: '14h',
        },
        {
          name: "🐶 Dogs, Dog Training Tips and more ideas you've been looking for",
          date: '2d',
        },
        {
          name: '17 trending Pins about Food and drink',
          date: '3d',
        },
        {
          name: 'Trending searches',
          date: '5d',
        },
      ],
    };
  },
};
</script>
