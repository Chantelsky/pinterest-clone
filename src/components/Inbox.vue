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
        <users/>
        <p class="text-sm text-darkgray pb-2">Suggested</p>
            <span class="text-xs text-darkgray">Following</span>
      </div>
    </div>
  </div>
</template>

<script>
import Users from './Users.vue';
import IconBase from './IconBase.vue';
import IconMenu from './icons/IconMenu.vue';
import IconEdit from './icons/IconEdit.vue';

export default {
  components: {
    IconBase,
    IconMenu,
    IconEdit,
    Users,
  },
};
</script>
