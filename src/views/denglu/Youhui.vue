<template>
  <div class="coupon">
    <van-nav-bar title="优惠券" left-text left-arrow></van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="未使用">
        <div class="empty-item">
          <span class="span2">哦噢!~小主一张券都没有</span>
        </div>
      </van-tab>
      <van-tab title="已失效"></van-tab>
    </van-tabs>
  </div>
</template>

<style>
.empty-item {
  text-align: center;
}
.span2 {
  font-size: 0.71428571rem;
  line-height: 1rem;
  color: #b4babf;
  position: relative;
  display: inline-block;
  padding: 0 2.14285714rem;
}
.span2::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0.5rem;
  width: 1.28571429rem;
  height: 1px;
  background-color: #b4babf;
}
.span2::after {
  position: absolute;
  content: "";
  right: 0;
  top: 0.5rem;
  width: 1.28571429rem;
  height: 1px;
  background-color: #b4babf;
}
.van-nav-bar .van-icon {
  color: black;
}
</style>

<script>
export default {
  name: "Coupon",
  data() {
    return {
      active: 2
    };
  }
};
</script>