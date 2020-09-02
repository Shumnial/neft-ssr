<template>
  <header class="header elevation-0">
    <div class="container">
      <div class="header__inner">
        <logo class="header__logo" />
        <nav class="header__nav main-nav">
          <nuxt-link
            v-for="(link, idx) in links"
            :key="`nav-link-${idx}`"
            :to="link.to"
            class="main-nav__link color-secondary text-details fw-500"
          >
            {{ link.text }}
          </nuxt-link>
        </nav>
        <div class="header__help">
          <city-popover class="header__city" />
          <social-popover class="header__social" />
          <!-- FIX ME: убрать иконки, сделать компоненты -->
          <loupe-icon style="margin-right: 18px;" />
          <bell-icon style="margin-right: 18px;" />
          <theme-switch />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Logo from '@/components/Logo.vue'
import LoupeIcon from '~/assets/svg/loupe.svg?inline'
import BellIcon from '~/assets/svg/bell.svg?inline'
export default {
  components: {
    Logo,
    LoupeIcon,
    BellIcon,
  },
  props: {
    href: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      links: [
        {
          to: '/',
          text: 'Новости',
        },
        {
          to: '#',
          text: 'Истории',
        },
        {
          to: '#',
          text: 'Игры',
        },
        {
          to: '#',
          text: 'Подкасты',
        },
      ],
    }
  },
  computed: {
    isDarkTheme() {
      return this.$store.state.isDarkTheme
    },
  },
}
</script>
<style lang="less" scoped>
.header {
  padding: 22px 0;
  background-color: var(--bg-primary);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    width: 92px;
    height: 30px;
  }

  &__help {
    display: flex;
    align-items: center;
  }

  &__city {
    margin-right: 25px;
  }

  &__social {
    margin-right: 25px;
  }
}

.main-nav {
  display: flex;
  &__link {
    margin-right: 22px;
    transition: 0.3s;

    &:hover {
      color: @color-yellow-600;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .nuxt-link-active {
    opacity: 0.5;
    cursor: default;
    user-select: none;
    pointer-events: none;
  }
}
</style>
