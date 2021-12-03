<template>
  <div class="maps__container">
    <GMap
      ref="gMap"
      language="en"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: parsedLocation.lat, lng: parsedLocation.lng }"
      :options="{
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        styles: mapStyle,
      }"
      :zoom="16"
    >
      <GMapMarker
        :position="{ lat: parsedLocation.lat, lng: parsedLocation.lng }"
        @click="openOnMaps"
      >
        <!-- <GMapInfoWindow :options="{ maxWidth: 200 }">
          <code>
            lat: {{ parsedLocation.lat }}, lng: {{ parsedLocation.lng }}
          </code>
        </GMapInfoWindow> -->
      </GMapMarker>
      <GMapCircle :options="circleOptions" />
    </GMap>
  </div>
</template>

<script>
export default {
  props: {
    mapLocation: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      currentLocation: {},
      circleOptions: {},
      locations: [
        // {
        //   lat: 41.017696,
        //   lng: 29.2555,
        // },
      ],
      pins: {
        selected: 'data:image/png;base64,iVBORw0KGgo...',
        notSelected: 'data:image/png;base64,iVBORw0KGgo...',
      },
      mapStyle: [],
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
    }
  },
  computed: {
    parsedLocation() {
      const arr = this.mapLocation.replace(' ', '').split(',')
      /* convert to number */
      const [lat, lng] = arr.map((e) => +e)
      return { lat, lng }
    },
  },
  methods: {
    openOnMaps() {
      window.open(
        `https://www.google.com/maps/place/${this.mapLocation}`,
        '_blank'
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.maps__container {
  filter: grayscale(50%);
  ::v-deep .GMap__Wrapper {
    height: 300px !important;
  }
}
</style>
