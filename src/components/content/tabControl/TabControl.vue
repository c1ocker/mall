<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" 
      class="tab-control-item" :class="{active: index == currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 9
  }

  .tab-control-item{
    flex: 1;
    
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
    /* border-bottom: 3px solid var(--color-tint); */
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
