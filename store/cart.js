export const state = () => ({
  cart: []
})

export const mutations = {
  add (state, payload) {
    state.cart.push(payload)
  }
}
