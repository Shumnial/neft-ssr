<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
export default {
  computed: {
    isDarkTheme() {
      return this.$store.state.isDarkTheme
    },
  },
  mounted() {
    this.getTheme()
  },
  methods: {
    getTheme() {
      return this.$store.dispatch('getTheme')
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.isDarkTheme ? 'theme-dark' : 'theme-light',
      },
    }
  },
}
</script>
