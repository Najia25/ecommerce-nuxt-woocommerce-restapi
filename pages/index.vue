<template>
  <v-row class="d-flex justify-center">
    <v-col class="flex-wrap justify-center d-flex">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-col>
  </v-row>
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
