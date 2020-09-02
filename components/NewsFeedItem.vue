<template>
  <article class="feed-card">
    <a class="feed-card__link" :href="href"></a>
    <h3 class="feed-card__title text-primary" :class="bold ? 'fw-600' : ''">
      {{ title }}
    </h3>
    <date />
  </article>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    bold: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="less" scoped>
.feed-card {
  position: relative;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: @border-gray;
  cursor: pointer;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-decoration: none;
  }

  &:hover &__title {
    text-decoration: underline;
  }

  &__title {
    margin-bottom: 8px;
  }
}

.theme-dark .feed-card {
  &__title {
    opacity: 0.9;
  }
}
</style>
