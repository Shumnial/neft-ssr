<template>
  <!-- FIXME: remove hash from img -->
  <article
    class="materials-card elevation-0"
    :style="{
      backgroundImage: `url(https://picsum.photos/1200/440?${
        Math.random() * 1000
      })`,
    }"
  >
    <a :href="href"></a>
    <div class="materials-card__inner">
      <div class="materials-card__head">
        <h4
          class="materials-card__category color-yellow-700 text-category fw-700"
        >
          {{ category }}
        </h4>
        <date class="materials-card__date" />
      </div>
      <h3 class="materials-card__title text-h5 color-white">{{ title }}</h3>
      <p class="text-secondary color-white alpha80">{{ subtitle }}</p>
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
  display: flex;
  min-height: 440px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 22.83%,
        rgba(0, 0, 0, 0.45) 89.95%
      ),
      rgba(0, 0, 0, 0.2);
  }

  &__inner {
    position: relative;
    margin-top: auto;
    padding: 30px 20px;
  }

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  &__date {
    color: @color-white;
    opacity: 0.9;
  }

  &__category {
    margin-right: 13px;
    margin-bottom: 0;
  }
}
</style>
