<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img class="image" src="~assets/img/tabbar/home.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img class="image" src="~assets/img/tabbar/home_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div> -->
      <template v-slot:item-icon>
        <img class="image" src="~assets/img/tabbar/category.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img class="image" src="~assets/img/tabbar/category_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div> -->
      <template v-slot:item-icon>
        <img class="image" src="~assets/img/tabbar/shopcart.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img class="image" src="~assets/img/tabbar/shopcart_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div> -->
      <template v-slot:item-icon>
        <img class="image" src="~assets/img/tabbar/profile.svg" alt=""/>
      </template>
      <template v-slot:item-icon-active>
        <img class="image" src="~assets/img/tabbar/profile_active.svg" alt=""/>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'


export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};


</script>

<style scoped>

  .image{
    width: 30px;
    height: 30px;
  }
</style>
