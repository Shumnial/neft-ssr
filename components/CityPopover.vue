<template>
  <div class="city-choose">
    <p class="city-choose__btn" @click="visible = !visible">
      Ханты-Мансийск
    </p>
    <popover v-if="visible" class="city-choose__popover" width="210px">
      <template v-slot:head>
        <p class="fw-500">Выберите ваш город:</p>
      </template>
      <template v-slot:content>
        <template v-for="city in cities">
          <div :key="`city-${city.id}`" class="city-choose__item fw-500">
            <input
              :id="`city-${city.id}`"
              type="radio"
              name="city-choose"
              class="city-choose__item-input"
              :checked="city.checked"
            />
            <label
              :for="`city-${city.id}`"
              class="city-choose__item-label color-secondary"
              >{{ city.name }}</label
            >
          </div>
        </template>
      </template>
    </popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Общее положение',
        },
        {
          id: 2,
          name: 'Ханты-Мансийск',
          checked: true,
        },
        {
          id: 3,
          name: 'Ямал',
        },
        {
          id: 4,
          name: 'Тюмень',
        },
        {
          id: 5,
          name: 'Югра',
        },
      ],
      visible: false,
    }
  },
}
</script>
<style lang="less" scoped>
.city-choose {
  position: relative;
  &__btn {
    position: relative;
    opacity: 0.5;
    border-bottom: 1px dashed currentColor;
    padding-right: 15px;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    margin-bottom: -1px;

    // arrow
    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      border: 1px solid currentColor;
      border-top: none;
      border-left: none;
      transform: rotate(45deg);
    }
  }

  &__item {
    &-input {
      display: none;
    }

    &-label {
      position: relative;
      display: block;
      width: 100%;
      text-transform: uppercase;
      padding: 10px 0;
      text-align: left;
      cursor: pointer;
      opacity: 0.5;
      transition: opacity 0.3s;
      padding-right: 15px;
      user-select: none;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 11px;
        height: 7px;
        background-image: url('../assets/svg/check.svg');
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover {
        opacity: 1;
      }
    }

    &-input:checked + &-label,
    &-input:checked + &-label::before {
      opacity: 1;
    }
  }
}
</style>
