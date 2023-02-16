<template>
  <div id="detail">
    <DetailNavBar class="detail-nav"/>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <DetailParamInfo :paramInfo="paramInfo"/>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'

import Scroll from '../../components/common/scroll/Scroll.vue'

import { getDetail, Goods, Shop, GoodsParam} from '../../network/detail'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
      
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    
  },
  created() {
    //保存iid
    this.iid = this.$route.params.iid

    //请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      //获取顶部轮播图数据
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages
      // console.log(this.topImages);
      
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // console.log(this.goods);

      //创建店铺信息
      this.shop = new Shop(data.shopInfo)
      console.log(this.shop);

      //获取商品详细信息
      this.detailInfo = data.detailInfo

      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    }).catch(err => {
      console.error(err);
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>

  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 43px);
  }
</style>
