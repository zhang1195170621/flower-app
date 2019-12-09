<template>
  <div class="shouhuo">
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="fixed-bottom">
      <van-button
        round
        type="info"
        color="#FF734C"
        size="large"
        :to="{ name: 'Dizhi' }"
        style="width:75%;
        margin-left:3rem"
      >+新建地址</van-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.fixed-bottom {
  position: fixed;
  bottom: 16px;
  width: 100%;
  max-width: 640px;
}
</style>