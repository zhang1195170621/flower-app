<template>
  <div class="tixing">
    <van-nav-bar title="生日/纪念日提醒" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <van-image width="100%" height="100%" src="https://m.hua.com/Images/reminder.jpg" />
    <div class="fixed-bottom">
      <van-button
        round
        type="info"
        color="#FF734C"
        size="large"
        style="width:75%;
        margin-left:3rem"
      >+添加提醒</van-button>
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