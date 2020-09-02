/**
 * normalizeListByKey
 * Формирует из массива объектов `list` объект,
 * состоящий из элементов `list` с ключами `key`,
 * Пропуская элементы с в которых `key` - неопределен или noTruthy value
 * @param {any[]} list - массив объектов
 * @param {string} key - ключ по которому их разложить
 */
export const normalizeListByKey = (list = [], key = 'id') => {
  if (!Array.isArray(list)) {
    throw new TypeError('list should be an Array')
  }
  if (!key || typeof key !== 'string') {
    throw new Error('key should be specifed and be an string')
  }
  if (list.length === 0) return {}
  return list.reduce((acc, value) => {
    if (value[key]) acc[value[key]] = value
    return acc
  }, {})
}
