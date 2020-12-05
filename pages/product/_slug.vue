<template>
  <div>
    <div v-if="$apollo.queries.product.loading">...Loading</div>
    <div v-else>{{ product }}</div>

  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  data () {
    return {
      id: this.$route.params.slug.split('-').pop(),
      product: null
    }
  },
  apollo: {
    product: {
      query: gql` query Product($id: ID) {
                    product(id: $id) {
                        id
                        productId
                        averageRating
                        slug
                        description
                        shortDescription
                        ... on SimpleProduct {
                            price
                          }
                        name
                        image {
                            uri
                            title
                            srcSet
                            sourceUrl
                        }
                    }
                  }`,
      variables () {
        return {
          id: this.$route.params.slug.split('-').pop()
        }
      },
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
