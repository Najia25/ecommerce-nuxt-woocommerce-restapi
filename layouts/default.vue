<template>
  <v-app>
    <PrimaryAppBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <NavigationDrawer ref="drawer" />
    <v-main>
      <CartIconLgScreen @click.native="isOpen = true" v-if="!isOpen"/>
      <transition
      enter-active-class="animate__animated animate__slideInRight"
      leave-active-class="animate__animated animate__slideOutRight"
      >
      <Cart v-if="isOpen" @cart-closed="isOpen = false"/>
      </transition>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
import CartIconLgScreen from '@/components/cart/CartIconLgScreen'
import Cart from '@/components/cart/Cart'
import PrimaryAppBar from '@/components/base-layout/PrimaryAppBar'
import NavigationDrawer from '@/components/base-layout/NavigationDrawer'

export default {
  components: {
    PrimaryAppBar,
    NavigationDrawer,
    CartIconLgScreen,
    Cart
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    // toggleModal () {
    //   this.isOpen = !this.isOpen
    // }
  }
}
</script>
<style lang="scss">
.v-main {
  padding-top: 56px !important;
}

.container.container--fluid.cart-padding {
  padding-right: 312px;
}
.v-toolbar {
  height: 56px !important;
}
.v-toolbar__content {
  height: 56px !important;
}
.v-toolbar__extension {
  display: none;
}

.animate__animated.animate__slideInRight, .animate__animated.animate__slideOutRight {
  --animate-duration: 250ms;
  --animate-delay: 100ms;
}

@media (min-width: 1200px) {
  .v-main {
  padding-top: 96px !important;
}
  .v-toolbar {
  height: 96px !important;
}
  .v-toolbar__extension {
    display: flex;
    justify-content: center;
    background: #00838F;
    height: 40px !important;
  }
}
</style>
