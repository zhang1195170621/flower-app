<template>
  <div class="shoucang">
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <div class="sc_main">
      <van-image
        width="100%"
        height="100%"
        style="margin:2rem 0 1.5rem;"
        src="https://img02.hua.com/m/empty_follow2.png"
      />
      <p class="sc_taxt">哦噢!～你还没有收藏的商品</p>
    </div>
  </div>
</template>

<style>
.sc_taxt {
  font-size: 14px;
  text-align: center;
  color: rgb(75, 75, 75);
  padding-bottom: 30px;
}
</style>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>