<template>
  <div class="row">
    <div class="col">
      <h2>Лента новостей</h2>
      <NewsFeed class="hero__feed" :news="news" />
    </div>
    <div class="col">
      <h2>Карточка материала</h2>
      <materials-card
        v-for="material in materials.slice(0, 1)"
        :key="material.id"
        :href="material.href"
        :src="material.src"
        :category="material.category"
        :title="material.title"
        :subtitle="material.subtitle"
        :date="material.date"
      />
    </div>
    <div class="col">
      <h2>Карточка со списком материалов в категории</h2>
      <category-card />
    </div>
    <div class="col">
      <h2>Карточка материала с фоном</h2>
      <materials-card-with-bg
        v-for="material in materials.slice(0, 1)"
        :key="material.id"
        :href="material.href"
        :src="material.src"
        :category="material.category"
        :title="material.title"
        :subtitle="material.subtitle"
        :date="material.date"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components',
  async fetch({ store }) {
    await store.dispatch('news/getNews')
    await store.dispatch('materials/getMaterials')
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
      },
    }
  },
  computed: {
    news() {
      return this.$store.state.news.list
    },
    materials() {
      return this.$store.state.materials.list
    },
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await this.$api.news.createNews(this.form)
        console.log('response', response)
      } catch (err) {
        console.log('err', err)
      }
    },
  },
  head() {
    return {
      title: 'Тестовая страница',
    }
  },
}
</script>
<style lang="less" scoped></style>
