<template>
    <div class="cart-icon-lg-screen primary white--text" :class="{'animate__animated animate__bounce': launchAnimation}" v-on:animationend="launchAnimation = false">
      <div v-if="totalPrice" class="total-price">
        ${{ totalPrice.toFixed(2) }}
      </div>
      <div class="total-product">
        {{ productCount }}
      </div>
    </div>
</template>

<script>
import cartIconMixin from '@/mixins/cartIconMixin'
export default {
  mixins: [cartIconMixin],
  data () {
    return {
      launchAnimation: false
    }
  },
  watch: {
    productCount () {
      this.launchAnimation = true
    }
  },

  mounted () {
    if (this.productCount && this.totalPrice) {
      this.launchAnimation = true
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-icon-lg-screen {
  display: inline-block;
  position: fixed;
  right: 0%;
  top: 50%;
  z-index: 4;
}
</style>
