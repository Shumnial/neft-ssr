<template>
  <div class="iconed-note fw-400">
    <slot>
      <ClockIcon />
    </slot>
    <p>{{ text }}</p>
  </div>
</template>
<script>
import ClockIcon from '~/assets/svg/clock.svg?inline'
export default {
  components: {
    ClockIcon,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="less">
.iconed-note {
  display: flex;
  align-items: center;

  svg {
    stroke: currentColor;
    flex-shrink: 0;
    margin-right: 8px;
  }

  p {
    opacity: 0.5;
    line-height: 0.8;
    margin-bottom: 0;
  }
}
</style>
