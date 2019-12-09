<template>
  <div class="balance">
    <van-nav-bar title="账户余额" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <div class="top">
      <a href="#" class="rule">使用说明</a>
      <div class="score">
        <span style="font-size:18px;">
          账户余额(元)
          <p class="yue">0</p>
        </span>
      </div>
    </div>
    <div class="mingxi">
      <a href="#">
        交易明细
        <span class="good-lnk fr">
          <van-icon name="arrow" />
        </span>
      </a>
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
.top {
  height: 160px;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#ff9f00),
    to(#fe6600)
  );
  color: #fff;
  position: relative;
}
.rule {
  color: #fff;
  display: block;
  padding: 12px 10px 0;
  text-align: right;
  font-size: 12px;
  background: url(//img02.hua.com/app/member/help.png) no-repeat 0 13px;
  background-size: 14px 14px;
  float: right;
  padding-left: 20px;
}
.score {
  font-size: 18px;
  margin-left: 20px;
  clear: both;
}
.yue {
  font-size: 30px;
}
.score span {
  text-shadow: 0px 1px 2px #ca5e00;
}
.mingxi a {
  height: 36px;
  display: block;
  line-height: 36px;
  border-bottom: 1px solid #e4e4e4;
  padding: 5px 16px;
  color: rgb(73, 73, 73);
}
.good-lnk {
  color: #ad923b;
  width: 16px;
  height: 16px;
}
.fr {
  float: right;
}
</style>