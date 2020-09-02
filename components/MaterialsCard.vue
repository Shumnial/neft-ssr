<template>
  <article class="materials-card elevation-0">
    <a class="materials-card__link" :href="href"></a>
    <img class="materials-card__img" width="280" height="197" :src="src" />
    <div class="materials-card__content">
      <div class="materials-card__head">
        <h4
          class="materials-card__category color-yellow-700 text-category fw-700"
        >
          {{ category }}
        </h4>
        <date />
      </div>
      <h3 class="materials-card__title text-h5 fw-500">{{ title }}</h3>
      <p class="text-secondary alpha70">{{ subtitle }}</p>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    src: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.materials-card {
  position: relative;
  background-color: var(--bg-primary);
  height: 100%;

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  &__img {
    display: block;
    width: 100%;
  }

  &__content {
    padding: 20px;
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  &__category {
    margin-right: 13px;
    margin-bottom: 0;
  }
}
</style>
