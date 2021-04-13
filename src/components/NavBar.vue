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
        <search-bar />
      </div>
      <div class="flex items-center justify-between w-1/12 mr-3 h-10">
        <!--TODO: might need to find better icons-->
        <div>
          <img class="h-6" src="../assets/notification_icon.svg" />
        </div>
        <div>
          <img class="h-6" src="../assets/chat_icon.svg" />
        </div>
        <div>
          <!--TODO : avatar upload, for now this is placeholder-->
          <img class="rounded-full h-6 w-6" src="../assets/person.png" />
        </div>
        <div>
          <img class="h-6" src="../assets/arrow_down.svg" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
};
</script>
