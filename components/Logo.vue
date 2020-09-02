<template>
  <a href="/" class="logo">
    <logo-icon class="logo__img" />
  </a>
</template>
<script>
import LogoIcon from '~/assets/svg/logo.svg?inline'
export default {
  components: {
    LogoIcon,
  },
}
</script>
<style lang="less" scoped>
.logo {
  fill: @color-gray-700;
  transition: 0.3s;
}

.theme-dark .logo {
  fill: @color-white;
}

.logo__img {
  width: 100%;
  height: 100%;
  fill: inherit;
}
</style>
