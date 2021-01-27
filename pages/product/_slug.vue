<template>
  <div>
    <div v-if="$apollo.queries.product.loading">...Loading</div>

    <v-row v-else>
      <div class="col-12">
        <div class="d-flex flex-column flex-md-row align-sm-center align-md-start">
          <div class="d-flex flex-column-reverse flex-md-row mr-md-5">
            <v-tabs
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
                    @click="sourceUrl = item.sourceUrl"
                  >
                  </v-img>
                </v-card>
              </v-tab>
            </v-tabs>

                <div
                  class="product-img"
                >
                  <img
                    :src="sourceUrl"
                    class="rounded"
                    ref="productImg"
                    @mousemove="handleMouseMove($event)"
                    @mouseleave="hover = false"
                  />
                  <div
                    class="lens"
                    ref="lens"
                    :style="{transform: `translate(${lensPos.x}px, ${lensPos.y}px)`, height: `${lensHeight}px`, width: `${lensWidth}px`, visibility: hover ? 'visible' : 'hidden'}"
                    @mousemove="handleMouseMove($event)"
                    @mouseleave="hover = false"
                  ></div>
            </div>
          </div>
          <zoom-lens
            v-if="hover"
            :ratio="zoomRatio"
            :imgUrl="sourceUrl"
            :height="$refs.productImg.clientHeight"
            :width="$refs.productImg.clientWidth"
            :lensPos="lensPos"
          ></zoom-lens>
          <div class="product-detail">
            product description
          </div>
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
      length: 0,
      hover: false,
      sourceUrl: '',
      cursorPos: {
        x: 0,
        y: 0
      },
      lensPos: {
        x: 0,
        y: 0
      },
      lensHeight: 127,
      lensWidth: 100,
      zoomRatio: 3
    }
  },
  methods: {
    handleMouseMove (event) {
      this.hover = true
      this.cursorPos.x = event.pageX - this.$refs.productImg.getBoundingClientRect().left
      this.cursorPos.y = event.pageY - this.$refs.productImg.getBoundingClientRect().top
      this.lensPos.x = this.cursorPos.x - (this.lensWidth / 2)
      this.lensPos.y = this.cursorPos.y - (this.lensHeight / 2)
      if(this.lensPos.x < 0) {
        this.lensPos.x = 0
      }
      if(this.lensPos.y < 0) {
        this.lensPos.y = 0
      }
      if(this.lensPos.x >  this.$refs.productImg.clientWidth - this.lensWidth) {
        this.lensPos.x = this.$refs.productImg.clientWidth - this.lensWidth
      }
      if(this.lensPos.y > this.$refs.productImg.clientHeight - this.lensHeight) {
        this.lensPos.y = this.$refs.productImg.clientHeight - this.lensHeight
      }
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
        let images = data.product.galleryImages.nodes
        this.productGellaryImages = [{ sourceUrl: data.product.image.sourceUrl },...images]
        this.sourceUrl = data.product.image.sourceUrl
      },
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

  img {
    max-width: 500px;
  }
}


.lens {
  position: absolute;
  background: rgba(124, 181, 237, 0.52);
  top:0;
  left:0;
}

</style>
