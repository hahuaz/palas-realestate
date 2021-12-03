/* eslint-disable */

import Vue from 'vue'
import GMap from '~/thirdparty-library/GMap.vue'
import GMapMarker from '~/thirdparty-library/GMapMarker.vue'
import GMapCircle from '~/thirdparty-library/GMapCircle.vue'
import GMapInfoWindow from '~/thirdparty-library/GMapInfoWindow.vue'

export default (context, inject) => {
  const runtimeConfig = (context.$config && context.$config.gmaps) || {}

  // key
  const key = runtimeConfig.key || process.env._GMAPS_KEY_

  // libraries
  const libraries =
    runtimeConfig.libraries ||
    process.env._GMAPS_LIBRARIES_ ||
    Vue.component('GMap', GMap)
  Vue.component('GMapMarker', GMapMarker)
  Vue.component('GMapCircle', GMapCircle)
  Vue.component('GMapInfoWindow', GMapInfoWindow)
  inject('GMaps', { apiKey: key, loaded: false, libraries: libraries })
}
/* eslint-disable */
