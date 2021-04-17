<template>
  <div>
    <nav class="flex items-center justify-between h-17 w-full font-sans">
      <div class="flex inital m-7">
        <img class="h-6 w-6" src="../assets/pinterest-logo.png" />
      </div>

      <div class="flex-inital text-md font-bold font-sans">
        <!--TODO: set active class to when user is on page -->
        <router-link
          class="hover:bg-pinterestgray hover:text-black p-3 rounded-full"
          active-class="bg-black text-white"
          to="/home"
          >Home</router-link
        >
        <router-link
          class="hover:bg-pinterestgray hover:text-black p-3 rounded-full text-black"
          active-class="bg-black text-white"
          to="/today"
          >Today</router-link
        >
      </div>

      <div class="flex-grow mx-8">
        <!--TODO: add icon in front of search, add functionality -->
        <input
          v-model="query"
          @keyup.enter="submit"
          type="text"
          placeholder="Search"
          class="bg-pinterestgray w-full p-3 rounded-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div class="flex items-center justify-between w-1/12 mr-3 h-10">
        <!--TODO: might need to find better icons-->
        <!-- TODO: look into webpack configuration for :src -->
        <div>
          <button
            type="button"
            class="hover:bg-pinterestgray hover:rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300 rounded-full"
          >
            <img class="h-6" src="../assets/notification_icon.svg" />
          </button>
        </div>

        <div>
          <button
            type="button"
            class="hover:bg-pinterestgray hover:rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300 rounded-full"
          >
            <img class="h-6" src="../assets/chat_icon.svg" />
          </button>
        </div>

        <div>
          <!--TODO : avatar upload, for now this is placeholder-->
          <router-link to="/userpage"
            ><img
              class="h-10 w-10 hover:bg-pinterestgray hover:rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300 rounded-full"
              src="../assets/person.png"
          /></router-link>
        </div>

        <button
          type="button"
          class="hover:bg-pinterestgray hover:rounded-full focus:outline-none focus:ring focus:border-blue-300 rounded-full"
          v-on:click.prevent="showDropDown = !showDropDown"
        >
          <img class="h-6" src="../assets/arrow_down.svg" />
          <div v-if="showDropDown">
            <user-drop-down />
          </div>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import UserDropDown from './UserDropdown.vue';

export default {
  components: {
    UserDropDown,
  },
  data() {
    return {
      showDropDown: false,
      query: '',
    };
  },
  methods: {
    submit() {
      this.$emit('inputData', this.query);
      this.query = '';
    },
  },
};
</script>
