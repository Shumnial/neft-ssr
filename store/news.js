export const state = () => ({
  list: [],
})

export const mutations = {
  SET_NEWS(state, news) {
    // eslint-disable-next-line no-console
    state.list = news
  },
}

export const actions = {
  async getNews({ commit }, payload) {
    const data = await this.$api.news.getNews(payload)
    // eslint-disable-next-line no-console
    commit('SET_NEWS', data)
  },
}
