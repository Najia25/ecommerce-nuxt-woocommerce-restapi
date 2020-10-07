<template>
  <v-text-field
    solo
    :flat="flat"
    label="Search for products..."
    prepend-inner-icon="mdi-magnify"
    :background-color="bgColor"
    dense
    class="mt-5"
    @click="clickListener"
    @blur="blurListener"
  />
</template>

<script>
export default {
  data () {
    return {
      bgColor: '#EEEEEE',
      flat: true
    }
  },
  methods: {
    blurListener () {
      this.bgColor = '#EEEEEE'
      this.flat = true
    },
    clickListener () {
      this.bgColor = '#fff'
      this.flat = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
