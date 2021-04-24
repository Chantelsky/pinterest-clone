<template>
  <div
    class="absolute right-0 -top-4.5 bg-white shadow-xl rounded-lg p-5 text-left w-1/5"
  >
    <div class="flex items-center">
      <div class="flex-grow"><p class="font-bold text-center">Inbox</p></div>
      <button class="mr-4">
        <!-- <img class="h-10" src="../assets/menu_icon.svg" /> -->
        <icon-base icon-name="menu" :width="24" :height="24">
          <icon-menu />
        </icon-base>
      </button>
      <button>
        <!-- <img class="h-6" src="../assets/edit_icon.svg" /> -->
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
            v-for="firstName in firstNames"
            :key="firstName"
            class="flex items-center pb-3 hover:bg-pinterestgray p-1"
          >
            <img
              :src="pictures"
              :alt="`${firstNames}`"
              class="rounded-full flex"
            />
            <div class="pl-5 leading-none">
              <p class="font-bold text-base">{{ firstNames }}</p>
              <span class="text-xs text-darkgray">Following</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import IconBase from './IconBase.vue';
import IconMenu from './icons/IconMenu.vue';
import IconEdit from './icons/IconEdit.vue';

export default {
  components: {
    IconBase,
    IconMenu,
    IconEdit,
  },
  data() {
    return {
      firstNames: '',
      pictures: '',
    };
  },
  mounted() {
    axios.get('https://randomuser.me/api/?results=10').then((response) => {
      this.$data.firstNames = response.data.results[0].name.first;
      this.$data.pictures = response.data.results[0].picture.thumbnail;
      console.log(response.data);
    });
  },
};
</script>
