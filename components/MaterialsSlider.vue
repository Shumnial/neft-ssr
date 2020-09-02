<template>
  <div class="materials-slider">
    <div class="materials-slider__head">
      <h3 class="materials-slider__title text-h3 fw-500">
        Материалы схожей темы
      </h3>
      <div class="materials-slider__arrows">
        <button
          class="materials-slider__arrow"
          :disabled="!currentSlide"
          @click="currentSlide -= 1"
        >
          Назад
        </button>
        <button
          class="materials-slider__arrow"
          :disabled="currentSlide + 1 >= materials.length / slidesPerView"
          @click="currentSlide += 1"
        >
          Вперед
        </button>
      </div>
    </div>
    <div
      class="materials-slider__list"
      :style="{ transform: `translateX(${offset})` }"
    >
      <materials-card
        v-for="material in materials"
        :key="`materials-slide-${material.id}`"
        class="materials-slider__item"
        :href="material.href"
        :src="material.src"
        :category="material.category"
        :title="material.title"
        :subtitle="material.subtitle"
        :date="material.date"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    materials: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlide: 0,
      slidesPerView: 2,
    }
  },
  computed: {
    offset() {
      return `${-310 * this.slidesPerView * this.currentSlide}px`
    },
  },
}
</script>
<style lang="less" scoped>
.materials-slider {
  background: #f8f8f8;
  border: 1px solid #e7e7e7;
  overflow: hidden;
  padding: 30px 40px;

  &__head {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 0;
  }

  &__list {
    display: flex;
    transition: transform 0.3s;
    transition-timing-function: ease-out;
  }

  &__item {
    max-width: 290px;
    flex-shrink: 0;
    margin-right: 20px;
  }

  .materials-card {
    height: auto;
  }
}
</style>
