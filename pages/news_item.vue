<template>
  <div class="pt30">
    <div class="container">
      <div class="article">
        <div class="article__head">
          <date class="article__head-date" />
          <iconed-note text="Источник: Служба новостей NEFT">
            <crosshair-icon />
          </iconed-note>
        </div>
        <h1 class="text-h1 fw-500">
          В&nbsp;ХМАО начали открываться школы. Но&nbsp;учебный год
          в&nbsp;регионе хотят завершить досрочно
        </h1>
        <div class="article__content">
          <figure>
            <img src="https://picsum.photos/680/412" />
            <figcaption>
              Александр Авилов / Агентство «Москва»
            </figcaption>
          </figure>
          <p>
            В&nbsp;отдаленных сельских поселениях Кондинского, Белоярского,
            Березовского, Октябрьского, Нефтеюганского, Ханты-Мансийского,
            Сургутского районов, где наблюдается благоприятная
            санитарно-эпидемиологическая ситуация, дети переведены на&nbsp;очную
            форму обучения.
          </p>

          <p>
            По&nbsp;его словам, систему образования выводят с&nbsp;дистанционной
            формы по&nbsp;мере того, как нормализуется
            санитарно-эпидемиологическая обстановка. Остальные школы пока
            продолжают обучение по&nbsp;дистанционной технологии.
          </p>

          <p>
            Также Алексей Дренин рассказал и&nbsp;о&nbsp;том, что школы могут
            уйти на&nbsp;летние каникулы уже с&nbsp;15&nbsp;мая.
            &laquo;Мы&nbsp;ждем приказа министерства образования и&nbsp;науки.
            Но&nbsp;это коснется только учеников 1&ndash;8&nbsp;классов.
            Опять-таки рассматриваются несколько вариантов организации досуга
            для них, потому что просто так дети дома сидеть не&nbsp;должны.
            Возможно это будет какая-то внеурочная деятельность в&nbsp;виде
            мастер-классов, либо онлайн-уроки без домашнего задания.
            Старшеклассники продолжат обучение по&nbsp;очной форме после снятия
            ограничительных мер&raquo;,&nbsp;&mdash; прокомментировал&nbsp;он.
          </p>

          <p>
            В&nbsp;соседней Тюменской области дожидаться решения минобразования
            и&nbsp;науки не&nbsp;стали: с&nbsp;15&nbsp;мая все школьники уйдут
            на&nbsp;летние каникулы. На&nbsp;дистанционное обучение детей
            перевели в&nbsp;марте в&nbsp;связи со&nbsp;вспышкой коронавирусной
            инфекции.
          </p>
        </div>
        <div class="article__source">
          <iconed-note text="Пресс-служба МВД, pixabay.com">
            <camera-icon />
          </iconed-note>
        </div>
        <author-block
          photo="https://picsum.photos/55/55"
          name="Имя Фамилия"
          post="Корреспондент"
        />
        <share-block class="mb30" />
        <materials-slider :materials="materials" class="mb30" />
      </div>
    </div>
  </div>
</template>

<script>
import CrosshairIcon from '~/assets/svg/crosshair.svg?inline'
import CameraIcon from '~/assets/svg/camera.svg?inline'
export default {
  name: 'NewsItem',
  components: {
    CrosshairIcon,
    CameraIcon,
  },
  async fetch({ store }) {
    await store.dispatch('materials/getMaterials')
  },
  computed: {
    materials() {
      return this.$store.state.materials.list
    },
  },
}
</script>
<style lang="less" scoped>
.container {
  // FIX ME: сделать отдельный контейнер для новости
  max-width: 890px;
  padding-right: 200px;
}

.article {
  &__content {
    p {
      font-family: @font-secondary;
      margin-bottom: 1.2em;
    }
  }

  &__head {
    display: flex;
    margin-bottom: 20px;

    &-date {
      margin-right: 30px;
    }
  }

  figure {
    text-align: center;
    margin-bottom: 20px;

    img {
      margin-bottom: 5px;
    }
  }

  figcaption {
    font-size: 13px;
    line-height: 17px;
    color: #808080;
  }

  &__source {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    margin-bottom: 25px;
  }
}
</style>
