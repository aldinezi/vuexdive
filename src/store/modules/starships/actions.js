import types from './mutation-types';

export default {
  getStarships({ commit }) {
    fetch('https://swapi.co/api/starships')
      .then(response => response.json())
      .then((resJson) => {
        const { results } = resJson;
        commit(types.SET_SHIPS, results);
      });
  },
  setMyShip({ commit }, shipUrl) {
    fetch(`${shipUrl}`)
      .then(response => response.json())
      .then((resJson) => {
        commit(types.SET_MY_SHIP, resJson);
      });
  },
};
