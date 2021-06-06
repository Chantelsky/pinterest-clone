<template>
  <div>
    <ul class="flex justify-center">
      <li
        v-for="user in allUsers.results"
        :key="user"
        class="flex flex-col items-center"
        >
        <img :src="`${user.picture.large}`" class="rounded-full mb-4 mt-4"/>
          <p class="text-4xl font-bold">{{user.name.first}} {{user.name.last}}</p>
          <p>@{{user.login.username}}</p>
          <div class="flex font-bold">
          <p class="mr-2">{{followers[Math.floor(Math.random() * followers.length)]}} Followers </p>
          <p>{{followers[Math.floor(Math.random() * followers.length)]}} Following </p>
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
      followers: [2, 4, 6, 8, 10, 12, 14, 16, 18],
    };
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
  computed: {
    ...mapGetters(['allUsers']),
  },
  created() {
    this.fetchUsers();
  },
};
</script>
