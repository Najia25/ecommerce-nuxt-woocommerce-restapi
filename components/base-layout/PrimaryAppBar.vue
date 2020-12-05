<template>
  <v-app-bar
    app
    extension-height="40"
  >
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col class="d-flex align-center px-0 px-lg-5 mx-0 mx-lg-5">
          <v-app-bar-nav-icon class="show-in-mobile-only" @click.stop="$emit('toggle-drawer')" />
          <SearchOverlay v-if="showSearchOverlay" />
          <v-btn
            :icon="!showSearchOverlay"
            :color="showSearchOverlay ? '#d6d6d8' : 'primary'"
            class="show-in-mobile-only"
            elevation="0"
            :tile="showSearchOverlay"
            :class="{ 'overlay-style primary--text' : showSearchOverlay }"
            @click="showSearchOverlay = !showSearchOverlay"
          >
            <v-icon>{{ showSearchOverlay ? 'mdi-close' : 'mdi-magnify' }}</v-icon>
          </v-btn>
          <v-spacer class="show-in-mobile-only" />
          <v-toolbar-title class="text-center">
            E-commerce site
          </v-toolbar-title>
          <v-spacer class="d-none hide-in-mobile" />
          <SearchBar class="d-none hide-in-mobile" />
          <v-spacer />
          <v-btn icon>
            <v-icon color="primary">mdi-account</v-icon>
          </v-btn>
          <CartIconSmScreen />
        </v-col>
      </v-row>
    </v-container>
    <template v-slot:extension>
      <SecondaryAppBar />
    </template>
  </v-app-bar>
</template>

<script>
import SecondaryAppBar from '@/components/base-layout/SecondaryAppBar'
import SearchBar from '@/components/base-layout/SearchBar'
import SearchOverlay from '@/components/base-layout/SearchOverlay'
import CartIconSmScreen from '@/components/cart/CartIconSmScreen'

export default {
  components: {
    SecondaryAppBar,
    SearchBar,
    SearchOverlay,
    CartIconSmScreen
  },
  data () {
    return {
      showSearchOverlay: false
    }
  }
}
</script>

<style lang="scss" scoped>

.overlay-style {
  // padding: 0 !important;
  min-width: 48px !important;
  width: 48px !important;
  height: 48px !important;
}
@media (min-width: 1200px) {

  .show-in-mobile-only {
    display: none;
  }
  .v-application .hide-in-mobile {
    display: block !important;
  }
}
</style>
