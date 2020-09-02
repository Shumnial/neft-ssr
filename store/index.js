export const state = () => ({
  isDarkTheme: false,
})

export const mutations = {
  SET_THEME(state, boolean) {
    state.isDarkTheme = boolean
  },
}

export const actions = {
  getTheme({ commit }) {
    if (process.client) {
      const theme = JSON.parse(localStorage.getItem('theme-dark'))
      commit('SET_THEME', theme)
    }
  },
  toggleTheme({ state, commit }) {
    if (process.client) {
      const theme = !state.isDarkTheme
      localStorage.setItem('theme-dark', theme)
      commit('SET_THEME', theme)
    }
  },
}
