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
          class="py-2 px-2 hover:bg-pinterestgray hover:rounded-lg cursor-pointer"
        >
          {{ contentUpdate.name }}
          <span class="text-gray-400">{{ contentUpdate.date }}</span>
          <div class="flex">
            <img :src="contentUpdate.image[0]" class="w-4/12 rounded-lg mr-2" />
            <img :src="contentUpdate.image[1]" class="w-4/12 rounded-lg mr-2" />
            <img :src="contentUpdate.image[2]" class="w-4/12 rounded-lg mr-2" />
          </div>
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
          image: [
            'https://images.unsplash.com/photo-1576956555607-18c2df9a47f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1618411640018-972400a01458?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          ],
        },
        {
          name:
            "🐶 Dogs, Dog Training Tips and more ideas you've been looking for",
          date: '2d',
          image: [
            'https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1617721927179-1d482e61a7bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
            'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
          ],
        },
        {
          name: '17 trending Pins about Food and drink',
          date: '3d',
          image: [
            'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1545576300-c7744d48aead?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
          ],
        },
        {
          name:
            "🏠 Home decor, 🛋️ Furniture and more ideas you've been looking for",
          date: '5d',
          image: [
            'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          ],
        },
      ],
    };
  },
};
</script>
