<template>
  <div id="map">
    <client-only>
      <l-map :zoom="zoom" :center="center" :attribution-control="false">
        <l-tile-layer :url="url" />
        <l-marker
          v-for="(item, index) in oddLots"
          :key="index"
          class="mapMarker"
          :lat-lng="[item.latitude, item.longitude]"
        >
          <l-icon>
            <img :src="item.imageSrc">
            <!-- <div class="customMapMarker" /> -->
          </l-icon>
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import data from '@/static/data.json'

export default {
  name: 'Map',
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 14,
      center: [47.3882, 8.5093],
      oddLots: data
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100vh;
}
.customMapMarker {
  width: 6rem;
  height: 6rem;
  background-image: linear-gradient(#ff4642, #ae2b28);
  border-radius: 100%;
  opacity: 0.9;
  // filter: blur(1.0rem) !important;
  &:hover {
    background-image: linear-gradient(white, #a8a8a8);
  }
}
</style>
