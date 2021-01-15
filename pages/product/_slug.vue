<template>
  <div>
    <div v-if="$apollo.queries.product.loading">...Loading</div>

    <v-row v-else>
      <div class="col-md-8 col-xl-6 col-12 offset-xl-1">
        <div class="d-flex flex-column-reverse flex-md-row">
          <v-tabs
            v-model="tab"
            hide-slider
            :vertical="$vuetify.breakpoint.mdAndUp"
            class="mr-md-5 mt-5 mt-md-0"
            :height="$vuetify.breakpoint.mdAndUp ? undefined : 60"
          >
            <v-tab
              v-for="item in productGellaryImages"
              :key="item.sourceUrl"
              class="px-0 mb-5 mr-2 mr-md-0"
            >
              <v-card
                flat
                rounded
                link
              >
                <v-img
                  :src="item.sourceUrl"
                  max-height="60"
                  max-width="60"
                >
                </v-img>
              </v-card>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="item in productGellaryImages"
              :key="item.sourceUrl"
              transition="none"
              reverse-transition="none"
            >
              <v-card flat>
              <v-img
              :src="item.sourceUrl"></v-img>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  data () {
    return {
      id: this.$route.params.slug.split('-').pop(),
      product: null,
      productGellaryImages: [],
      tab: null,
      length: 0
    }
  },
  watch: {
    length (val) {
      this.tab = val - 1
    }
  },
  apollo: {
    product: {
      query: gql` query Product($id: ID!) {
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
                        galleryImages {
                          nodes {
                            sourceUrl
                          }
                        }
                      }
                    }`,
      result ({ data }) {
        this.productGellaryImages = data.product.galleryImages.nodes
        this.length = data.product.galleryImages.nodes.length
      },
      variables () {
        return {
          id: this.$route.params.slug.split('-').pop()
        }
      },
    }
  },
  mounted () {
    console.log(`Product: ${this.product}`)
  }
}
</script>

<style lang="scss" scoped>

.v-tab {
  min-width: 60px !important;
  max-width: 60px !important;
  height: 60px;
}
.v-tabs--vertical > .v-tabs-bar .v-tab {
  height: 60px;
}

</style>
