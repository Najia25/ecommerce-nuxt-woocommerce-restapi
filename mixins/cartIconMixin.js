import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      cartData: state => state.cart.cart
    }),
    productCount () {
      return this.cartData !== null && Object.keys(this.cartData).length ? this.cartData.totalProductsCount : ''
    },
    totalPrice () {
      return this.cartData !== null && Object.keys(this.cartData).length ? this.cartData.totalProductPrice : ''
    }
  }
}
