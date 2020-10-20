<template>
  <v-app>
    <PrimaryAppBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <NavigationDrawer ref="drawer" />
    <v-main>
      <v-container fluid class="mx-0 px-0 px-lg-3 mx-lg-5">
        <nuxt keep-alive/>
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
import PrimaryAppBar from '@/components/base-layout/PrimaryAppBar'
import NavigationDrawer from '@/components/base-layout/NavigationDrawer'

export default {
  components: {
    PrimaryAppBar,
    NavigationDrawer
  },
  data () {
    return {
      // drawer: null
    }
  }
}
</script>
<style lang="scss">

.v-main {
  padding-top: 56px !important;
}
.v-toolbar {
  height: 56px !important;
}
.v-toolbar__content {
  padding-left: 0px;
  padding-right: 0px;
  height: 56px !important;
}
.v-toolbar__extension {
  display: none;
}

@media (min-width: 1200px) {
  .v-main {
  padding-top: 96px !important;
}
  .v-toolbar {
  height: 96px !important;
}
  .v-toolbar__content {
    padding-left: 16px;
    padding-right: 16px;
  }
  .v-toolbar__extension {
    display: flex;
    justify-content: center;
    background: #00838F;
    height: 40px !important;
  }
}
</style>
