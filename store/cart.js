export const state = () => ({
  cart: null
})

export const mutations = {
  add (state, payload) {
    state.cart = payload
  }
}
