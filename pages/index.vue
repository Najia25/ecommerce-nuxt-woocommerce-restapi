<template>
  <v-row class="d-flex justify-center mx-0 mx-lg-3">
    <v-col cols="12" xl="10" class="flex-wrap justify-space-around d-flex px-0 px-lg-4">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-col>
  </v-row>
</template>

<script>

import Product from '@/components/content/Product'
export default {
  components: {
    Product
  },
  data () {
    return {
      products: []
    }
  },
  async fetch () {
    const res = await fetch(`${this.$config.baseUrl}/getProducts`)
    const products = await res.json()
    this.products = products
  }
}
</script>
