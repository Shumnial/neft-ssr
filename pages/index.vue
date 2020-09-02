<template>
  <div class="pt20">
    <div class="container">
      <breaking-news
        class="mb20"
        title="По поправкам в Конституцию проголосовали уже более половины жителей Югры"
      />
      <section class="row mb20">
        <div class="col-sm-3">
          <NewsFeed :news="news" />
        </div>
        <div class="col-sm-9">
          <div class="row">
            <div class="col-sm-12 mb20">
              <materials-card-with-bg
                :href="materials[0].href"
                :src="materials[0].src"
                :category="materials[0].category"
                :title="materials[0].title"
                :subtitle="materials[0].subtitle"
                :date="materials[0].date"
              />
            </div>
            <div
              v-for="material in materials"
              :key="`materials-card-${material.id}`"
              class="col-sm-4"
            >
              <materials-card
                :href="material.href"
                :src="material.src"
                :category="material.category"
                :title="material.title"
                :subtitle="material.subtitle"
                :date="material.date"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="section row pt0">
        <div class="col-sm-12 mb20">
          <materials-card-with-bg
            :href="materials[0].href"
            :src="materials[0].src"
            :category="materials[0].category"
            :title="materials[0].title"
            :subtitle="materials[0].subtitle"
            :date="materials[0].date"
          />
        </div>

        <div
          v-for="material in materials.slice(0, 2)"
          :key="`materials-card-${material.id}`"
          class="col-sm-6"
        >
          <materials-card-with-bg
            :href="material.href"
            :src="material.src"
            :category="material.category"
            :title="material.title"
            :subtitle="material.subtitle"
            :date="material.date"
          />
        </div>
      </section>
    </div>
    <section class="section section--titled bg-primary">
      <div class="container">
        <h2 class="text-h3">Психоневрологические интернаты</h2>
        <div class="row">
          <div
            v-for="material in materials.slice(0, 2)"
            :key="`materials-card-${material.id}`"
            class="col-sm-6"
          >
            <materials-card-with-bg
              :href="material.href"
              :src="material.src"
              :category="material.category"
              :title="material.title"
              :subtitle="material.subtitle"
              :date="material.date"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="section row mb-20">
        <div
          v-for="material in materials"
          :key="`materials-card-${material.id}`"
          class="col-sm-6 mb20"
        >
          <category-card
            :href="material.href"
            :src="material.src"
            :category="material.category"
            :title="material.title"
            :subtitle="material.subtitle"
            :date="material.date"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
