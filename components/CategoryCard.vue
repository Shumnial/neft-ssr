<template>
  <article class="category-card elevation-0">
    <div class="category-card__head">
      <h4 class="text-h3 fw-500">{{ category }}</h4>
      <a :href="href" class="text-category fw-700 alpha50">Истории</a>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <a href="#"></a>
        <img class="category-card__img" :src="src" />
        <h4 class="text-h5 fw-500">
          {{ title }}
        </h4>
      </div>
      <div class="col-sm-6">
        <a class="category-card__link text-primary">
          Драчев сдал анализ на&nbsp;коронавирус
        </a>
        <a class="category-card__link text-primary">
          &laquo;В&nbsp;Италии сейчас просто не&nbsp;до&nbsp;нас&raquo;.
          Касперович сообщил о разбирательстве по&nbsp;делу с&nbsp;обысками
          у&nbsp;него и&nbsp;Логинова
        </a>
        <a class="category-card__link text-primary">
          &laquo;Было такое&nbsp;же ощущение, как если&nbsp;бы я&nbsp;бежала при
          минус 20 градусах&raquo;. Экс-биатлонистка работала медсестрой
          во&nbsp;Франции и заразилась коронавирусом
        </a>
      </div>
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
.category-card {
  padding: 20px;
  background-color: var(--bg-primary);

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  &__img {
    margin-bottom: 15px;
  }

  &__link {
    display: inline-block;
    padding: 15px 0;
    border-bottom: @border-gray;

    &:first-child {
      padding-top: 0;
    }
  }
}

.theme-dark .category-card {
  &__link {
    opacity: 0.9;
  }
}
</style>
