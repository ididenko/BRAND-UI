<template>
  <section class="s-banner">
    <div class="s-banner__top"></div>
    <div class="container">
      <div class="s-banner__content">
        <div class="s-banner__content-header">
          <h3>
            Text
          </h3>
          <p>Text</p>
        </div>
        <ul class="s-banner__triggers">
          <li class="s-banner__triggers-item">
            <i class="icon-find-company"></i>
            <span>Text</span>
          </li>
          <li class="s-banner__triggers-item">
            <i class="icon-star-full"></i>
            <span>Text</span>
          </li>
          <li class="s-banner__triggers-item">
            <i class="icon-orion_conversations"></i>
            <span>Text</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style scoped lang="scss">
@import '~assets/style/settings/mixins';
@import '~assets/style/settings/var';

.s-banner {
  height: 800px;
  background: #333647 url(/images/bg-photo.jpg) center top no-repeat;
  background-size: cover;
  position: relative;

  @media #{$phone} {
    height: 550px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    @include size(100%, 100%);
    background-color: rgba(0, 0, 0, 0.35);
  }

  &__triggers {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 565px;
    margin: 0 auto;
    @media #{$phone} {
      flex-direction: column;
      justify-content: center;
      max-width: 145px;
    }
    &-item {
      font-size: 16px;
      line-height: 120%;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      @media #{$phone} {
        font-size: 14px;
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      i {
        margin-right: 12px;
        font-size: 22px;
        line-height: 22px;
        @media #{$phone} {
          font-size: 18px;
          line-height: 18px;
        }
      }
    }
  }

  &__top {
    position: relative;
    z-index: 3;
  }

  .container {
    height: 100%;
  }

  &__content {
    position: relative;
    z-index: 1;
    height: 100%;
    @extend %center;
    flex-direction: column;
    max-width: 620px;
    margin: 0 auto;
    @media #{$phone} {
      padding-top: 60px;
    }
  }

  &__content-header {
    width: 100%;
    align-items: center;
    color: #fff;
    margin-bottom: 54px;
    @media #{$phone} {
      margin-bottom: 37px;
    }
    h3 {
      font-size: 40px;
      line-height: 120%;
      font-weight: 700;
      margin-bottom: 24px;
      text-align: center;
      @media #{$phone} {
        font-size: 26px;
      }
    }
    p {
      text-align: center;
      font-size: 18px;
      line-height: 120%;
      font-weight: 500;
    }
  }

  .m-logo {
    margin-bottom: 30px;

    img {
      display: block;
      line-height: 1;

      @media #{$phone} {
        width: 100%;
        max-width: 240px;
        margin: 0 auto;
      }
    }
  }
}
</style>
