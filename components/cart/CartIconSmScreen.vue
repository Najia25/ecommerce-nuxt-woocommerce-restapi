<template>
  <div class="cart-icon-sm-screen">
    <!-- <span v-if="totalPrice">
      ${{ totalPrice.toFixed(2) }}
    </span> -->
    <v-badge
      :content="productCount"
      :value="productCount"
      offset-y="23"
      offset-x="18"
    >
      <v-btn icon color="primary">
        <v-icon>mdi-shopping</v-icon>
      </v-btn>
    </v-badge>
  </div>
</template>

<script>
import cartIconMixin from '@/mixins/cartIconMixin'
export default {
  mixins: [cartIconMixin]
}
</script>

<style lang="scss" scoped>

</style>
