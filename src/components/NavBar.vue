<template>
  <div>
    <nav class="flex items-center justify-between h-17 w-full font-sans">
      <div class="flex inital m-7">
        <img class="h-6 w-6" src="../assets/pinterest-logo.png" />
      </div>

      <div class="flex-inital text-md font-bold font-sans">
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
          @keyup.enter.stop="submit"
          type="text"
          placeholder="Search"
          class="bg-pinterestgray w-full p-3 rounded-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <!-- TODO: look into webpack configuration for :src -->
      <div class="flex items-center justify-between w-44 mr-7 h-10">
        <!--TODO: might need to find better icons-->
        <div>
          <button
            type="button"
            class="hover:bg-pinterestgray hover:text-black text-darkgray hover:rounded-full focus:text-black p-2 focus:outline-none focus:ring focus:border-blue-300 rounded-full"
            v-on:click.prevent="showUpdate = !showUpdate"
          >
            <icon-base icon-name="notification" :width="32" :height="32">
              <icon-notification />
            </icon-base>
          </button>
          <div v-if="showUpdate">
            <!-- TODO: add transition -->
            <updates />
          </div>
        </div>

        <div>
          <button
            type="button"
            class="text-darkgray p-2 hover:bg-pinterestgray hover:rounded-full focus:text-black focus:outline-none focus:ring focus:border-blue-300 rounded-full"
            v-on:click.prevent="showInbox = !showInbox"
          >
            <icon-base icon-name="chat" :width="28" :height="28">
              <icon-chat />
            </icon-base>
          </button>
          <div v-if="showInbox">
            <inbox />
          </div>
        </div>

        <div>
          <!--TODO : avatar upload, for now this is placeholder-->
          <router-link to="/userpage"
            ><img
              class="p-2 h-10 w-auto hover:bg-pinterestgray hover:rounded-full focus:outline-none focus:ring focus:border-blue-300 rounded-full"
              src="../assets/person.png"
          /></router-link>
        </div>

        <button
          type="button"
          class="text-darkgray hover:bg-pinterestgray hover:rounded-full focus:text-black focus:outline-none focus:ring focus:border-blue-300 rounded-full"
          v-on:click.prevent="showDropDown = !showDropDown"
        >
          <icon-base icon-name="arrowdown" :width="32" :height="32">
            <icon-arrow-down />
          </icon-base>
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
import Updates from './Updates.vue';
import Inbox from './Inbox.vue';
import IconBase from './IconBase.vue';
import IconNotification from './icons/IconNotification.vue';
import IconChat from './icons/IconChat.vue';
import IconArrowDown from './icons/IconArrowDown.vue';

export default {
  components: {
    UserDropDown,
    Updates,
    Inbox,
    IconBase,
    IconNotification,
    IconChat,
    IconArrowDown,
  },
  data() {
    return {
      showDropDown: false,
      showUpdate: false,
      showInbox: false,
      query: '',
    };
  },
  methods: {
    submit() {
      this.$emit('inputData', this.query);
      this.query = '';
      this.$router.push('/home');
    },
  },
};
</script>
