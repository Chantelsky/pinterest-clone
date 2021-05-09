import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    SET_users(state, users) {
      state.users = users;
    },
  },
  actions: {
    loadUsers({ commit }) {
      axios.get('https://randomuser.me/api/?results').then((response) => response.data)
        .then((users) => {
          console.log(users);
          commit('SET_users', users);
        });
    },
  },
  getters: {
    users: (state) => state.users,
  },
});
