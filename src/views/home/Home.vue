<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><div >购物街</div></template></nav-bar>
    <Scroll class="content" ref="scroll" :probe-type="3" 
            @scroll="contentScroll" pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']"
                @tabClick="tabClick"/>
      <GoodsList :goods="showGoods"/>
    </Scroll>

    <BackTop @click="backClick" v-show="isShowBackTop"/>
  </div>
  
</template>

<script>
  
  import HomeSwiper from './childComps/HomeSwiper.vue';
  import RecommendView from './childComps/RecommendView.vue';
  import FeatureView from './childComps/FeatureView.vue'

  import NavBar from 'components/common/navbar/NavBar.vue';
  import TabControl from 'components/content/tabControl/TabControl.vue';
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll.vue';
  import BackTop from 'components/content/backTop/BackTop.vue';

  import {getHomeMulitdata, getHomeGoods} from 'network/home';
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list:[]},
          'new': {page: 0, list:[]},
          'sell': {page: 0, list:[]}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      //请求轮播图数据
      
      this.getHomeMulitdata()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {

      //事件监听相关方法
      tabClick(index){
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 1000);
      },
      contentScroll(position) {
        this.isShowBackTop = -position.y > 1000
      },

      loadMore() {
        this.getHomeGoods(this.currentType)
        
      },

      //网络请求相关方法
      getHomeMulitdata(){
        getHomeMulitdata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        // console.log(this.banners);
        this.recommends = res.data.recommend.list

      });
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1

        getHomeGoods(type, page).then(res => {
          let list =  res.data.list
          this.goods[type].list.push(...list)
          this.goods[type].page += 1
          // console.log(res);

          this.$refs.scroll.finishPullUp()
        })
      }
    }
    
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;

    position: relative;
  } 
  .home-nav{
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
  }
  
  .content{
    /* height: calc(100%);
    overflow: hidden; */
    
    /* height: 300px; */
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
