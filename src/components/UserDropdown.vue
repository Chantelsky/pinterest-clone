<template>
  <div class="shadow-md rounded-sm p-5 text-left">
    <div>
      <p class="text-xs">Accounts</p>
      <ul>
        <li
          v-for="accountLink in accountLinks"
          :key="accountLink.name"
          class="font-bold leading-8"
        >
          {{ accountLink.name }}
        </li>
      </ul>
    </div>
    <div>
      <p class="text-xs">More options</p>
      <ul>
        <li
          v-for="optionLink in optionLinks"
          :key="optionLink.name"
          class="font-bold leading-8"
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
          name: 'settings',
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
          name: 'see terms and privacy',
        },
        {
          name: 'logout',
        },
      ],
    };
  },
};
</script>
