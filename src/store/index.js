import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    getUsers({ commit }) {
      axios.get('https://randomuser.me/api/?results=10')
        .then((response) => {
          commit('SET_USERS', response.data);
        });
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
});
