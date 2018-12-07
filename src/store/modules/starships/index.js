import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default ({
  state,
  getters,
  actions,
  mutations,
  plugins: [],
  strict: process.env.NODE_ENV !== 'production',
});
