/* check if browser
access local storage, get cart data
mutate setcart
*/

export default ({ store }) => {
  const cart = localStorage.getItem('cart')
  store.commit('cart/add', JSON.parse(cart))
}
