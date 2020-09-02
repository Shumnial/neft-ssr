const API_PREFIX = process.env.NUXT_ENV_API_PREFIX
export const newsService = ($axios) => ({
  /**
   * Получение списка новостей по заданным параметрам
   * @param {Object} params - параметры запроса
   */
  async getNews(params) {
    const { data } = await $axios({
      method: 'GET',
      url: `${API_PREFIX}news`,
      params,
    })
    return data
  },
  /**
   * Создание новости
   * @param {Object} params - параметры запроса
   */
  async createNews(newsObject) {
    const { data } = await $axios({
      method: 'POST',
      url: `${API_PREFIX}news`,
      data: newsObject,
    })
    return data
  },
})
