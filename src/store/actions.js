export default {
  setName({ commit }, newName) {
    commit('nameSetter', newName);
  },
  setSurname({ commit }, newSurname) {
    commit('surnameSetter', newSurname);
  },
};
