<template>
<div>
  <v-btn
    color="primary"
    text
    @click="handleAddToCart"
  >
    Add to cart
  </v-btn>
</div>

</template>

<script>
import { addFirstProduct, updateCart } from '@/functions'
import { mapState } from 'vuex'
export default {
  props: ['product'],
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    })
  },
  methods: {
    handleAddToCart () {
      if (process.client) {
        let existingCart = localStorage.getItem('cart')

        if (this.cart !== null) {
          // update exisiting cart
          existingCart = JSON.parse(existingCart)
          const qtyToBeAdded = 1

          const updatedCart = updateCart(existingCart, this.product, qtyToBeAdded)
          this.$store.commit('cart/add', updatedCart)
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
