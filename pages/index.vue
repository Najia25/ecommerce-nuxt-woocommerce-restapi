<template>
  <div>
    <v-row v-if="$apollo.queries.products.loading">
      <div 
        v-for="p in 10"
        :key="p"
        class="col-sm-6 col-lg-4 col-xl-3 col-12"
      >
        <v-card>
          <content-placeholders
            rounded
          >
            <content-placeholders-img />
            <content-placeholders-heading class="pa-2"/>
            <content-placeholders-text :lines="1" class="pa-2"/>
          </content-placeholders>
        </v-card>
      </div>
    </v-row>
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
