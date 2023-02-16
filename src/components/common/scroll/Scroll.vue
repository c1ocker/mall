<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
import bscroll from 'better-scroll';

export default {
  data() {
    return {
      scroll: null,
      message: '哈哈哈'
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    scrollTo(x, y, time=300){
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  },
  mounted() {
    this.scroll = new  bscroll(this.$refs.wrapper, {
      click: true,
      probeType : this.probeType,
      pullUpLoad: this.pullUpLoad,
    })

    //监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    //监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>

</style>
