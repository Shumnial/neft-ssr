<template>
  <div class="share-block">
    <p class="share-block__text">
      Поделиться с друзьями в сети:
    </p>
    <div class="share-block__icons">
      <button class="share-block__icon share-block__icon--tw">
        <TwitterIcon />
      </button>
      <button class="share-block__icon share-block__icon--vk">
        <VKIcon />
      </button>
      <button class="share-block__icon share-block__icon--fb">
        <FacebookIcon />
      </button>
      <button class="share-block__icon share-block__icon--inst">
        <InstagramIcon />
      </button>
      <button class="share-block__icon share-block__icon--tg">
        <TelegramIcon />
      </button>
      <button class="share-block__icon share-block__icon--ok">
        <OKIcon />
      </button>
    </div>
  </div>
</template>
<script>
import TwitterIcon from '~/assets/svg/i-twitter.svg?inline'
import VKIcon from '~/assets/svg/i-vk.svg?inline'
import FacebookIcon from '~/assets/svg/i-facebook.svg?inline'
import InstagramIcon from '~/assets/svg/i-instagram.svg?inline'
import TelegramIcon from '~/assets/svg/i-telegram.svg?inline'
import OKIcon from '~/assets/svg/i-odnoklassniki.svg?inline'
export default {
  components: {
    TwitterIcon,
    VKIcon,
    FacebookIcon,
    InstagramIcon,
    TelegramIcon,
    OKIcon,
  },
}
</script>
<style lang="less" scoped>
.share-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
  border-top: 4px solid @color-yellow-600;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);

  &__icons {
    display: flex;
  }

  &__icon {
    position: relative;
    width: 42px;
    height: 42px;
    background: none;
    border: none;
    padding: none;
    margin: none;
    border-radius: 50%;
    margin-right: 13px;

    &:last-child {
      margin-right: 0;
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    &--tw {
      background-color: #28c4ff;
    }

    &--vk {
      background-color: #6996c7;
    }

    &--fb {
      background-color: #486292;
    }

    &--inst {
      background-color: #343642;
    }

    &--tg {
      background-color: #39c9ff;
    }

    &--ok {
      background-color: #ff9c43;
    }
  }
}
</style>
