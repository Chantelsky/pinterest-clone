<template>
  <div class="flex justify-center">
    <img :src="`${user.picture.thumbnail}`" class="rounded-full flex border-black" />
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
