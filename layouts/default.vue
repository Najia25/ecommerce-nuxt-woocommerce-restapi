<template>
  <v-app>
    <PrimaryAppBar />
    <v-main>
      <v-container style="height: 1500px;">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
import PrimaryAppBar from '@/components/base-layout/PrimaryAppBar'

export default {
  components: {
    PrimaryAppBar
  },
  data () {
    return {
    }
  }
}
</script>
<style>
.v-toolbar__content {
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
.v-toolbar__extension {
  justify-content: center;
}
</style>
