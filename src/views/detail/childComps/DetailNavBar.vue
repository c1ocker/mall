<template>
  <div class="detailNavBar">
    <NavBar>
      <template #left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg"  alt="">
        </div>
      </template>
      <template #center>
        <div class="titles">
          <div v-for="(item, index) in titles" class="title-item"
                :class="{active: index === currentIndex}"
                @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </template>
  </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
 .titles{
  display: flex;
  font-size: 15px;
 }

 .title-item{
  flex:1
 }

 .active{
  color: var(--color-high-text);
 }

 .back img{
  margin-top: 12px;
 }
</style>
