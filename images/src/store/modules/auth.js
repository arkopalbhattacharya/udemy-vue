//  Store's the app data that changes over time
const state = {
  //  Initial state
  token: null
};

//  Functions to return the store's data as and when needed
//  based on the state of the data at the time the functions are called
const getters = {
  //  '!!' changes a value to its equivalent boolean
  //  so, '!!null', '!!undefined' or '!!0' becomes false, and
  //  '!!'asdasd3asd142342' becomes true
  isLoggedIn: (state) => !!state.token  //  If token is null, return false, else true
};

//  These are actions that call the mutations to update the state
//  based on the data provided by the actions to the mutations
const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

//  These are functions that will update the store's data, the store
//  having the state at the time of the function call
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};