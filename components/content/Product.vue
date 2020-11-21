<template>
  <v-card
    class="mb-5"
    max-width="400"
  >
  <nuxt-link :to="{name: 'product-slug', params: {slug: `${product.slug}-${product.id}`}}">
    <v-img
      class="white--text align-end"
      :src="product.image.sourceUrl"
      :alt="product.name"
    />
  </nuxt-link>
    <v-card-title>
      {{ product.name }}
    </v-card-title>
    <v-card-subtitle class="pb-0">
      {{ product.price }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="primary"
        text
      >
        Quick View
      </v-btn>
      <AddToCartButton :product="product"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import AddToCartButton from '../cart/AddToCartButton'
export default {
  props: ['product'],
  components: {
    AddToCartButton
  }
}
</script>

<style lang="scss" scoped>

</style>
