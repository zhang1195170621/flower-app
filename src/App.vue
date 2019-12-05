<template>
  <div id="app">
    <van-tabbar v-model="active" active-color="red" inactive-color="#000">
      <van-tabbar-item icon="wap-home-o" :to="{name:'Home'}">首页</van-tabbar-item>
      <van-tabbar-item icon="bars" :to="{name:'Fl'}">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :to="{name:'Cart'}">购物车</van-tabbar-item>
      <van-tabbar-item icon="smile-o" :to="{name:'Me'}">我的</van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>