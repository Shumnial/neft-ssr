/**
 * Плагин для яндекс метрики
 * требует наличие env переменной `NUXT_ENV_YMETRIKA_ID` - идентификатор метрики
 * дополнительные настройки вынесены в отдельный объект конфига
 * работает только в production окружении!!
 */

const config = {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  defer: true,
}

export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return /* eslint-disable */
  ;(function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        ;(m[i].a = m[i].a || []).push(arguments)
      }
    m[i].l = 1 * new Date()
    ;(k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a)
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

  ym(`${process.env.NUXT_ENV_YMETRIKA_ID}`, 'init', config)

  app.router.afterEach((to, from) => {
    ym(`${process.env.NUXT_ENV_YMETRIKA_ID}`, 'hit', to.fullPath)
  })
  /* eslint-enable */
}
