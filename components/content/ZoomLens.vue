<template>
  <div class='zoom-lens rounded elevation-10'>
    <img :src="imgUrl" :style="{ height: `${height * ratio}px`, width: `${width * ratio}px`, transform: `translate(${-lensPos.x * ratio}px, ${-lensPos.y * ratio}px)`}" />
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'ratio', 'height', 'width', 'lensPos']
}
</script>

<style lang="scss" scoped>
.zoom-lens{
  position: absolute;
  height: 600px;
  width: 519px;
  transform: translateX(600px);
  overflow: hidden;
}
</style>
