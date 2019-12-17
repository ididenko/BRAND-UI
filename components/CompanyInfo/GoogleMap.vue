<template>
  <div>
    <gmap-map
      v-if="!isLoading"
      :center="geoLocation"
      :zoom="15"
      :options="googleMapOptions"
      map-type-id="roadmap"
      style="width: 100%; height: 390px"
    >
      <gmap-marker :position="geoLocation" />
    </gmap-map>
  </div>
</template>

<script>
const googleMapOptions = {
  disableDefaultUI: true,
  scrollwheel: true
}

export default {
  name: 'GoogleMap',
  data() {
    return {
      googleMapOptions,
      geoLocation: null,
      isLoading: false
    }
  },
  created() {
    this.getLocation()
  },
  methods: {
    async getLocation() {
      try {
        this.isLoading = true
        this.geoLocation = await this.$store.dispatch('company/getLocation')
      } catch (e) {
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped></style>
