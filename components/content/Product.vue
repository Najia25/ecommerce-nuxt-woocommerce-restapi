<template>
  <v-card
    class="mb-5"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      :src="product.images[0].src"
      :alt="product.name"
    />
    <v-card-title>
      {{ product.name }}
    </v-card-title>
    <v-card-subtitle class="pb-0">
      ${{ product.price }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="primary"
        text
      >
        Quick View
      </v-btn>

      <v-btn
        color="primary"
        text
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style lang="scss" scoped>

</style>
