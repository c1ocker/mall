<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><div >购物街</div></template></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"/>
  </div>
  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import HomeSwiper from './childComps/HomeSwiper.vue';
  import RecommendView from './childComps/RecommendView.vue';

  import {getHomeMulitdata} from 'network/home';
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: [],
        keywords: [],
        dKeyword: [],
      }
    },
    created() {
      getHomeMulitdata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list
        // console.log(this.banners);
        this.recommends = res.data.recommend.list
        // console.log(this.recommends);
        this.keywords = res.data.keywords.list
        this.dKeyword = res.data.dKeyword.list
      })
    }
    
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
  
</style>
