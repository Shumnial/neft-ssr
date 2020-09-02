<template>
  <div class="author-block">
    <div class="author-block__content">
      <img :src="photo" class="author-block__photo" />
      <div class="author-block__info">
        <p class="author-block__name text-h5 fw-500">{{ name }}</p>
        <p class="author-block__post text-details">{{ post }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photo: {
      type: String,
      default: 'https://picsum.photos/55/55',
    },
    name: {
      type: String,
      default: 'Имя Фамилия',
    },
    post: {
      type: String,
      default: 'Корреспондент',
    },
  },
}
</script>
<style lang="less" scoped>
.author-block {
  padding: 30px 0;
  border-top: @border-gray;

  &__content {
    display: flex;
    align-items: center;
  }

  &__photo {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 15px;
  }

  &__name {
    margin-bottom: 5px;
  }

  &__post {
    opacity: 0.7;
    text-transform: none;
  }
}
</style>
