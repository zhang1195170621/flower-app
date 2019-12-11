<template>
  <div class="jilu">
    <van-nav-bar title="浏览记录" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <div class="jilu_main">
      <p>暂无浏览记录</p>
    </div>
  </div>
</template>

<style>
.jilu_main {
  color: #666666;
  text-align: center;
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
