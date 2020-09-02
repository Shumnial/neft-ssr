<template>
  <aside class="news-feed elevation-0">
    <h2 class="news-feed__title text-h5 fw-500">Новости</h2>
    <div class="news-feed__list">
      <news-feed-item
        v-for="newsItem in news"
        :key="newsItem.id"
        class="news-feed__item"
        :title="newsItem.title"
        :date="newsItem.date"
        :bold="newsItem.bold"
      />
    </div>
  </aside>
</template>
<script>
export default {
  props: {
    news: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="less" scoped>
.news-feed {
  display: flex;
  flex-direction: column;
  border-top: 4px solid @color-yellow-600;
  background-color: var(--bg-primary);
  max-height: 890px;
  height: 100%;

  &__title {
    border-bottom: @border-gray;
    padding: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 0;
  }

  &__list {
    padding: 20px;
    overflow: auto;
    height: 100%;
  }
}
</style>
