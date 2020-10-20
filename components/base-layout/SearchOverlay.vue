<template>
  <div class="overlay white--text">
    <div class="search-input">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/base-layout/SearchBar'
export default {
  components: {
    SearchBar
  },
  props: ['overlay'],
  data: () => ({
    // hideOverlay: false
  })
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
}
.search-input {
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  padding: 0px 12px;
  background: #F2F2F2;
  transform: translateY(-2px);
}
</style>
