<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__head">
          <div>
            <logo class="footer__logo" />
            <theme-switch class="footer__theme" />
          </div>
          <p class="footer__age">18+</p>
        </div>
        <div class="row flex-between-sm">
          <div class="col-sm-5 col-sm-12 mb25-sm">
            <p class="alpha80">
              Интернет-газета NEFT.<br />Новости Югры, Ямала и&nbsp;Тюменской
              области. Политическая, культурная и&nbsp;общественная жизнь
              регионов-локомотивов российской экономики.
            </p>
          </div>
          <div class="col-sm-6 col-sm-12">
            <p class="alpha80">
              <strong class="fw-600">
                При&nbsp;использовании материалов ссылка обязательна.
              </strong>
              Свидетельство о&nbsp;регистрации СМИ ЭЛ &#8470; ФС77-77066
              от&nbsp;20&nbsp;ноября 2019 года выдано Федеральной службой
              по&nbsp;надзору в&nbsp;сфере связи, информационных технологий
              и&nbsp;массовых коммуникаций (Роскомнадзор).
            </p>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__copyright alpha80">
            &copy;&nbsp;2014&ndash;2020 neft.media.
          </p>
          <nuxt-link to="#" class="footer__about fw-600">О проекте</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Logo from '@/components/Logo.vue'
export default {
  components: {
    Logo,
  },
}
</script>
<style lang="less" scoped>
.footer {
  font-size: 16px;
  line-height: 22px;
  padding: 22px 0;
  color: @color-gray-100;
  background-color: @color-gray-700;

  strong {
    display: block;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__logo {
    display: inline-block;
    vertical-align: middle;
    width: 73px;
    height: 24px;
    fill: @color-gray-100;
    margin-right: 10px;
  }

  &__theme {
    stroke: @color-gray-100;
  }

  &__age {
    position: relative;
    font-size: 0;
    width: 50px;
    height: 50px;
    border: 1px solid currentColor;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: '18+';
      font-size: 16px;
      text-align: center;
      top: 0;
      left: 0;
      right: 0;
      line-height: 50px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
  }

  &__about {
    color: @color-gray-100;
    text-decoration: none;
  }
}

.theme-dark .footer {
  background-color: var(--bg-primary);
}
</style>
