<template>
  <article class="breaking-news">
    <lightning-icon />
    <p class="text-secondary fw-500">{{ title }}</p>
  </article>
</template>
<script>
import LightningIcon from '~/assets/svg/lightning.svg?inline'
export default {
  components: {
    LightningIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="less" scoped>
.breaking-news {
  display: flex;
  align-items: center;
  padding: 13px 23px;
  height: 45px;
  background-color: @color-yellow-600;

  svg {
    flex-shrink: 0;
    margin-right: 15px;
  }

  p {
    position: relative;
    color: @color-gray-700;
    padding-left: 15px;

    &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 15px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background-color: currentColor;
      opacity: 0.2;
    }
  }
}
</style>
