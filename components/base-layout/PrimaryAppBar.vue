<template>
  <v-app-bar
    app
    color="white"
    elevate-on-scroll
  >
    <v-container class="d-flex align-center">
    <v-toolbar-title>Page title</v-toolbar-title>
    <v-spacer class="spacer-size"/>
    <SearchBar />
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    </v-container>
    <template v-slot:extension>
      <SecondaryAppBar />
    </template>
  </v-app-bar>
</template>

<script>
import SecondaryAppBar from '@/components/base-layout/SecondaryAppBar'
import SearchBar from '@/components/base-layout/SearchBar'

export default {
  components: {
    SecondaryAppBar,
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
.spacer-size {
  flex-grow: 5 !important;
}
</style>
