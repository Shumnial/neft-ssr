<template>
  <div class="search">
    <!-- Зачатки поиска. Сюда пока можно не смотреть -->
    <div class="search__field">
      <input
        type="text"
        class="search__input"
        placeholder="Например: зачем все носят маски"
      />
      <button class="search__clear"></button>
    </div>
    <div class="search__filters">
      <div class="search__row">
        <div class="search__filters filters">
          <button class="filters__type">Тип материала</button>
          .filters__title
        </div>
        <div>
          <button>Закрыть поиск</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped></style>
