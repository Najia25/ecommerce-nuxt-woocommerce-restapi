<template>
  <div>
    <div v-if="$apollo.queries.product.loading">...Loading</div>

    <v-row v-else>
      <div class="col-12">
        <div class="d-flex flex-column flex-md-row align-sm-center align-md-start">
          <div class="d-flex flex-column-reverse flex-md-row mr-md-5">
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
                <v-card
                  flat
                  max-width="500"
                >
                  <v-img
                  :src="item.sourceUrl"
                  @mouseover="hover = true"
                  @mouseleave="hover = false"
                  class="product-img"
                  >
                    <div class="lens" v-if="hover" :style="{ transform: `translate(${xPos}px, ${yPos}px)`}"></div>
                  </v-img>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
          <zoom-lens v-if="hover"></zoom-lens>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ZoomLens from '@/components/content/ZoomLens'
export default {
  components: {
    ZoomLens
  },
  data () {
    return {
      id: this.$route.params.slug.split('-').pop(),
      product: null,
      productGellaryImages: [],
      tab: null,
      length: 0,
      hover: false,
      xPos: 0,
      yPos: 0
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

.product-img {
  position: relative;
  cursor: move;
}

.lens {
  position: absolute;
  height: 127px;
  width: 100px;
  background: rgba(124, 181, 237, 0.52);
  top:0;
  left:0;
}

</style>
