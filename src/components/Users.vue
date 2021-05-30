<template>
    <div>
      <ul>
        <li
          v-for="user in allUsers.results"
          :key="user"
        >
          <img :src="`${user.picture.thumbnail}`" class="rounded-full flex" />
          <!-- <div class="pl-5 leading-none"></div> -->
          <p class="font-bold text-base">
            {{user.name.first}} {{user.name.last}}
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: mapActions(['fetchUsers']),
  computed: mapGetters(['allUsers']),
  created() {
    this.fetchUsers();
  },
};
</script>
