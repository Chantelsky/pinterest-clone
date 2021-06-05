<template>
  <div>
    <ul>
      <li
        v-for="user in allRandomUsers.results"
        :key="user"
        class="flex items-center pb-3 hover:bg-pinterestgray"
      >
        <img :src="`${user.picture.thumbnail}`" class="rounded-full mr-5" />
        <div class="flex flex-col">
          <p class="font-bold text-base">{{ user.name.first }} {{ user.name.last }}</p>
          <span class="text-xs text-darkgray">{{message[Math.floor(Math.random() * message.length)]}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      message: ['In your network', 'Following'],
    };
  },
  methods: {
    ...mapActions(['fetchRandomUsers']),
  },
  computed: {
    ...mapGetters(['allRandomUsers']),
  },
  created() {
    this.fetchRandomUsers();
  },
};
</script>
