<template>
  <div class="absolute right-0 bg-white shadow-xl rounded-lg p-5 text-left">
    <div>
      <p class="text-xs pb-1 text-gray-500">Accounts</p>
      <ul class="pb-3">
        <li
          v-for="accountLink in accountLinks"
          :key="accountLink.name"
          class="font-bold leading-8 hover:bg-pinterestgray"
        >
          {{ accountLink.name }}
        </li>
      </ul>
    </div>
    <div>
      <p class="text-xs pb-2 text-gray-500">More options</p>
      <ul>
        <li
          v-for="optionLink in optionLinks"
          :key="optionLink.name"
          class="font-bold leading-8 hover:bg-pinterestgray"
        >
          {{ optionLink.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountLinks: [
        {
          name: 'Add Account',
        },
        {
          name: 'Unlock business tools',
        },
      ],
      optionLinks: [
        {
          name: 'Settings',
        },
        {
          name: 'Tune your home feed',
        },
        {
          name: 'Install the windows app',
        },
        {
          name: 'Get help',
        },
        {
          name: 'See terms and privacy',
        },
        {
          name: 'Logout',
        },
      ],
    };
  },
};
</script>
