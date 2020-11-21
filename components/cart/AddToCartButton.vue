<template>
  <v-btn
    color="primary"
    text
    @click="handleAddToCart"
  >
    Add to cart
  </v-btn>
</template>

<script>
import { addFirstProduct } from '@/functions'
export default {
  props: ['product'],
  methods: {
    handleAddToCart () {
      if (process.client) {
        const existingCart = localStorage.getItem('cart')
        if (existingCart) {
          // update exisiting cart
        } else {
          // if no item in cart, create cart object and put products in products array
          const newCart = addFirstProduct(this.product)
          this.$store.commit('cart/add', newCart)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
