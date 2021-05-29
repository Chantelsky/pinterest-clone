<template>
  <div
    class="absolute right-0 -top-4.5 bg-white shadow-xl rounded-lg p-5 text-left w-1/5"
  >
    <div class="flex items-center">
      <div class="flex-grow"><p class="font-bold text-center">Inbox</p></div>
      <button class="mr-4">
        <icon-base icon-name="menu" :width="24" :height="24">
          <icon-menu />
        </icon-base>
      </button>
      <button>
        <icon-base icon-name="edit" :width="16" :height="16">
          <icon-edit />
        </icon-base>
      </button>
    </div>
    <div>
      <h1 class="font-bold text-4xl pt-2 mb-4">
        Share ideas with your friends
      </h1>
      <input
        class="border-2 border-pinterestgray rounded-full p-3 w-full cursor-pointer focus:outline-none focus:ring"
        type="search"
        placeholder="Search by name or email address"
      />
      <div class="mt-2">
        <p class="text-sm text-darkgray pb-2">Suggested</p>
        <ul>
          <li
            v-for="user in allUsers.results"
            :key="user"
            class="flex items-center pb-3 hover:bg-pinterestgray p-"
          >
            <img :src="`${user.picture.thumbnail}`" class="rounded-full flex" />
            <div class="pl-5 leading-none">
              <p class="font-bold text-base">
                {{ user.name.first }} {{ user.name.last }}
              </p>
              <span class="text-xs text-darkgray">Following</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import IconBase from './IconBase.vue';
import IconMenu from './icons/IconMenu.vue';
import IconEdit from './icons/IconEdit.vue';

export default {
  components: {
    IconBase,
    IconMenu,
    IconEdit,
  },
  methods: mapActions(['fetchUsers']),
  computed: mapGetters(['allUsers']),
  created() {
    this.fetchUsers();
  },
};
</script>
