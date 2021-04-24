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
      <h1 class="font-bold text-3xl pt-2">Share ideas with your friends</h1>
    </div>
  </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconMenu from './icons/IconMenu.vue';
import IconEdit from './icons/IconEdit.vue';

export default {
  components: {
    IconBase,
    IconMenu,
    IconEdit,
  },
};
</script>
