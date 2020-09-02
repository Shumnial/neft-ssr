<template>
  <div class="social-popover">
    <button class="social-popover__btn" @click="visible = !visible">
      <span>Мы в сети</span>
      <social-icon class="social-popover__btn-icon" />
    </button>
    <popover v-if="visible" class="social-popover__popover" width="225px">
      <template v-slot:head>
        <p class="fw-500">Мы в&nbsp;социальных сетях:</p>
      </template>
      <template v-slot:content>
        <template v-for="(link, idx) in links">
          <a
            :key="`header-social-${idx}`"
            :href="link.href"
            class="social-popover__item fw-500"
            >{{ link.name }}</a
          >
        </template>
      </template>
    </popover>
  </div>
</template>
<script>
import SocialIcon from '~/assets/svg/social.svg?inline'
export default {
  components: {
    SocialIcon,
  },
  data() {
    return {
      links: [
        {
          icon: 'IconFB',
          href: '#',
          name: 'Facebook',
        },
        {
          icon: 'IconInst',
          href: '#',
          name: 'Instagram',
        },
        {
          icon: 'IconTW',
          href: '#',
          name: 'Twitter',
        },
        {
          icon: 'IconTG',
          href: '#',
          name: 'Telegram',
        },
        {
          icon: 'IconVK',
          href: '#',
          name: 'Vkontakte',
        },
        {
          icon: 'IconOK',
          href: '#',
          name: 'Odnoklassniki',
        },
      ],
      visible: false,
    }
  },
}
</script>
<style lang="less" scoped>
.social-popover {
  position: relative;
  &__btn {
    position: relative;
    color: inherit;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    outline: none;

    span {
      opacity: 0.5;
    }

    &-icon {
      margin-left: 6px;
      vertical-align: middle;
    }
  }

  &__item {
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
    text-decoration: none;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
