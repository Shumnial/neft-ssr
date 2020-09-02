export const state = () => ({
  list: [],
})

export const mutations = {
  SET_MATERIALS(state, materials) {
    // eslint-disable-next-line no-console
    state.list = materials
  },
}

export const actions = {
  async getMaterials({ commit }, payload) {
    const data = await this.$api.materials.getMaterials(payload)
    // eslint-disable-next-line no-console
    commit('SET_MATERIALS', data)
  },
}
