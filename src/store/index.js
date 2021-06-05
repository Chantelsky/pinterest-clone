import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    randomUsers: [],
    users: [],
  },
  getters: {
    allRandomUsers: (state) => state.randomUsers,
    allUsers: (state) => state.users,
  },
  actions: {
    async fetchRandomUsers({ commit }) {
      const response = await axios.get(
        'https://randomuser.me/api/?results=15',
      );
      commit('setRandomUsers', response.data);
    },
    async fetchUsers({ commit }) {
      const response = await axios.get(
        'https://randomuser.me/api',
      );
      commit('setUsers', response.data);
    },

  },
  mutations: {
    setRandomUsers(state, randomUsers) {
      state.randomUsers = randomUsers;
    },
    setUsers(state, users) {
      state.users = users;
    },
  },
});
