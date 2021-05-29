import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [],
  },
  getters: {
    allUsers: (state) => state.users,
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get(
        'https://randomuser.me/api/?results=10',
      );
      commit('setUsers', response.data);
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
});
