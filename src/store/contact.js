export default {
  namespaced: true,
  state: {
    client: [
      { firstName: "Ivan", lastName: "Vasiliev" },
      { firstName: "Maxim", lastName: "Kyzmin" },
      { firstName: "Vova", lastName: "Space" },
    ],
  },
  mutations: {
    add(state, item) {
      state.client.push(item);
    },
  },
  getters: {
    CLIENT: (state) => state.client,
  },
};
