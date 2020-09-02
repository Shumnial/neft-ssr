import { newsService } from '@/services/news'
import { materialsService } from '@/services/materials'

/**
 * Добавляем апи вызовы в контекст нукста.
 */
export default (ctx, inject) => {
  const news = newsService(ctx.$axios)
  const materials = materialsService(ctx.$axios)
  const api = {
    news,
    materials,
  }
  inject('api', api)
}
