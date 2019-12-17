<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div v-if="error.statusCode === 404" :key="404" class="clearfix">
            <h1 class="float-left display-3 mr-4">{{ error.statusCode }}</h1>
            <h4 class="pt-3">{{ error.message }}</h4>
            <p class="text-muted">
              お探しのページが存在しないか、他のエラーが発生しました。
            </p>
          </div>
          <div v-else-if="error.statusCode === 500" :key="500" class="clearfix">
            <h1 class="float-left display-3 mr-4">{{ error.statusCode }}</h1>
            <h4 class="pt-3">問題があります！</h4>
            <p class="text-muted">
              お探しのページは一時的にアクセスできません。
            </p>
          </div>
          <div v-else :key="other" class="clearfix">
            <h1 class="float-left display-3 mr-4">{{ error.statusCode }}</h1>
            <h4 class="pt-3">エラーが発生しました</h4>
          </div>
          <b-input-group class="justify-content-center">
            <b-input-group-append>
              <b-button to="/" variant="info" class="mt-2">
                ホームページへ
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: false,
      default: () => []
    }
  }
}
</script>
