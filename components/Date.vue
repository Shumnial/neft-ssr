<template>
  <div class="date fw-400">
    <component :is="Icon"></component>
    <time :datetime="date">
      {{ `${date.getHours()}:${date.getMinutes()}` }}
    </time>
  </div>
</template>
<script>
import ClockIcon from '~/assets/svg/clock.svg?inline'
import CalendarIcon from '~/assets/svg/calendar.svg?inline'
export default {
  components: {
    ClockIcon,
    CalendarIcon,
  },
  props: {
    date: {
      type: Date,
      default: () => new Date(),
    },
    type: {
      type: String,
      default: 'time',
    },
  },
  computed: {
    Icon() {
      return this.type === 'time' ? 'ClockIcon' : 'CalendarIcon'
    },
  },
}
</script>
<style lang="less">
.date {
  display: flex;
  align-items: center;
  opacity: 0.5;

  svg {
    stroke: currentColor;
    flex-shrink: 0;
    margin-right: 8px;
  }

  time {
    line-height: 0.8;
  }
}
</style>
