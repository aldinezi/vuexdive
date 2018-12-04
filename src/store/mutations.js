/* eslint no-param-reassign: [
  "error",
  { "props": true, "ignorePropertyModificationsFor": ["state"] },
] */

import Vue from 'vue';

export default {
  nameSetter(state, newName) {
    Vue.set(state, 'name', newName);
  },
  surnameSetter(state, newSurname) {
    state.surname = newSurname;
  },
};
