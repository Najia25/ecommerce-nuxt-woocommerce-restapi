<template>
<div>
  <div v-if="$apollo.queries.products.loading">...Loading</div>
    <v-row v-else>
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-row>
  </div>
</template>
<script>

import Product from '@/components/content/Product'
import gql from 'graphql-tag'

export default {
  components: {
    Product
  },
  data () {
    return {
      products: [],
      productCategories: []
    }
  },
  apollo: {
    products: {
      query: gql`query {
            productCategories(first: 3) {
              nodes {
                id
                name
                slug
                image {
                  sourceUrl
                  srcSet
                }
              }
            }
              products(first: 50) {
                nodes {
                  id
                  productId
                  averageRating
                  slug
                  description
                  image {
                    uri
                    title
                    srcSet
                    sourceUrl
                  }
                  name
                  ... on SimpleProduct {
                    price
                    id
                  }
                  ... on VariableProduct {
                    price
                    id
                  }
                  ... on ExternalProduct {
                    price
                    id
                  }
                  ... on GroupProduct {
                    products {
                      nodes {
                        ... on SimpleProduct {
                          price
                        }
                      }
                    }
                    id
                  }
                }
              }
            }`,
      result ({ data }) {
        this.products = data.products.nodes
        this.productCategories = data.productCategories.nodes
      }
    }
  },
  mounted () {
    console.log(this.products)
  }
}
</script>
