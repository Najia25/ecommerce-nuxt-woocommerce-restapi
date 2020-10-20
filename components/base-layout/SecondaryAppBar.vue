<template>
  <div class="transparent">
    <v-hover v-for="item in items" :key="item.title" v-slot:default="{ hover }">
      <nuxt-link class="nav-items white--text" :class="{ 'on-hover': hover }" :to="item.link">
        {{ item.title }}
      </nuxt-link>
    </v-hover>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home', link: '/' },
        { title: 'Categories', link: '/categories' },
        { title: 'My Account', link: '/my-account' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
div a.nav-items {
  text-decoration: none;
  padding-top: 0.75rem;
  padding-bottom: 0.65rem;
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 500;
  height: 100%;
  transition: all .4s ease-in-out;

  &.on-hover {
    background: #00ACC1 !important;
    border-radius: 0px !important;
  }
}
</style>
