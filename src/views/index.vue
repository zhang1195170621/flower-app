<template>
  <div>
    <router-view />

    <van-tabbar route v-model="active" active-color="red" inactive-color="#000">
      <van-tabbar-item replace :to="{name:'Home'}" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace :to="{name:'Fl'}" icon="bars">分类</van-tabbar-item>
      <van-tabbar-item replace :to="{name:'Cart'}" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace :to="{name:'Me'}" icon="smile-o">我的</van-tabbar-item>
    </van-tabbar>
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
<style>
#app {
  overflow: hidden;
}
</style>