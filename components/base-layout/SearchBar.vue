<template>
  <div class="w-50">
    <v-text-field
      solo
      :flat="flat"
      label="Search for products..."
      dense
      hide-details
      prepend-inner-icon="mdi-magnify"
      @click="flat = !flat"
    />
  </div>
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

<style lang="scss" scoped>
.w-50 {
  width: 35%;
}
</style>
