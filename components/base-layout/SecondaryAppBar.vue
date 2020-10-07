<template>
  <v-card flat>
    <v-hover v-for="item in items" :key="item.title" v-slot:default="{ hover }">
      <nuxt-link class="nav-items black--text" :class="{ 'on-hover': hover }" :to="item.link">
        {{ item.title }}
      </nuxt-link>
    </v-hover>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'Home', link: '/' },
        { title: 'Features', link: '/features' },
        { title: 'Pricing', link: '/pricing' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card a.nav-items {
  text-decoration: none;
  padding: 0.9rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 500;
  transition: color .4s ease-in-out;

  &.on-hover {
    color: #AD1457 !important;
    border-radius: 0px !important;
    border-bottom: 2px solid #AD1457;
  }
}
</style>
