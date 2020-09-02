<template>
  <button class="theme-switch" @click="toggleTheme">
    <component :is="Icon"></component>
    Переключить тему
  </button>
</template>
<script>
import MoonIcon from '~/assets/svg/moon.svg?inline'
import SunIcon from '~/assets/svg/sun.svg?inline'
export default {
  components: {
    MoonIcon,
    SunIcon,
  },
  computed: {
    isDarkTheme() {
      return this.$store.state.isDarkTheme
    },
    Icon() {
      return this.isDarkTheme ? 'SunIcon' : 'MoonIcon'
    },
  },
  methods: {
    toggleTheme() {
      return this.$store.dispatch('toggleTheme')
    },
  },
}
</script>
<style lang="less">
.theme-switch {
  width: 20px;
  height: 20px;
  font-size: 0;
  border: none;
  padding: 0;
  background: none;
  stroke: @color-gray-200;
  vertical-align: middle;
  cursor: pointer;
  outline: none;

  svg {
    stroke: inherit;
  }
}
</style>
