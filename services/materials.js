const API_PREFIX = process.env.NUXT_ENV_API_PREFIX
export const materialsService = ($axios) => ({
  /**
   * Получение списка материалов по заданным параметрам
   * @param {Object} params - параметры запроса
   */
  async getMaterials(params) {
    const { data } = await $axios({
      method: 'GET',
      url: `${API_PREFIX}materials`,
      params,
    })
    return data
  },
})
