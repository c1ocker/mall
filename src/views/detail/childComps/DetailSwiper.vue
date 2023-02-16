<template>
    <Swiper class="swiperi">
      <SwiperItem  v-for="item in topImages">
        <img class="image" :src="item" alt="">
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  data() {
    return {}
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

.swiperi{
  height: 300px;
  overflow: hidden;
}
.image{
  width: 100%;
}
</style>
