<template>
  <v-responsive max-width="300">
    <v-text-field
      solo
      :flat="flat"
      label="Search for products..."
      dense
      hide-details
      prepend-inner-icon="mdi-magnify"
      @click="flat = !flat"
    />
  </v-responsive>
</template>

<script>
export default {
  data () {
    return {
      flat: true
    }
  },
  methods: {
  }
}
</script>
