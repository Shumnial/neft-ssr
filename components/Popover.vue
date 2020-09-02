<template>
  <div
    class="popover"
    :style="{ width: width, transform: `translateX(calc(-50% + ${xOffset}))` }"
  >
    <div class="popover__head">
      <slot name="head" />
    </div>
    <div class="popover__content">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '',
    },
    xOffset: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="less" scoped>
.popover {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  background-color: var(--bg-primary);
  z-index: 1;
  margin-top: 15px;

  &__head {
    border-bottom: @border-gray;
  }

  &::before {
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    left: 0;
    right: 0;
    bottom: 100%;
    margin: auto;
    transform: translateY(50%) rotate(45deg);
    background-color: var(--bg-primary);
  }

  &__head {
    padding: 15px 20px;
  }

  &__content {
    padding: 15px 20px;
  }
}

.theme-dark .popover {
  background-color: var(--bg-secondary);

  &::before {
    background-color: var(--bg-secondary);
  }
}
</style>
