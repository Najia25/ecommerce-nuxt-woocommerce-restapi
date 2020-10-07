<template>
  <div>
    <!-- <p v-if="$fetchState.pending">
      Fetching posts...
    </p>
    <p v-else-if="$fetchState.error">
      Error while fetching posts: {{ $fetchState.error.message }}
    </p>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        {{ product }}
        {{ new Date() }}
      </div>
    </div> -->
  </div>
</template>

<script>

export default {
  components: {
  }
  // return added to make fetch asynchronous.Without return fetch is not asynchronous.on first load fetch called on server.at the same component loaded and data initialized.all this happening before promise getting resolved. so template shows empty products array.
  // how does javascript run on the server side? how does server deal with promise on the server side? --> node.js
  // fetch () {
  //   return this.$woocommerce.get('products')
  //     .then((response) => {
  //       console.log(new Date())
  //       this.products = response.data
  //       console.log(new Date())
  //       // debugger
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data)
  //     })
  // },
  // data () {
  //   return {
  //     products: []
  //   }
  // }
}
</script>
