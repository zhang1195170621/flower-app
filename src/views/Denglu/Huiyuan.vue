<template>
  <div class="Integral">
    <van-nav-bar title="积分" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <section class="huiyuan_container">
      <div class="main">
        <div class="top">
          <a href="#" class="rule">积分规则</a>
          <p class="score">
            <span>0</span>
            积分
          </p>
          <div class="nav">
            <a href="#" style="width:100%;">积分兑换</a>
          </div>
        </div>
        <div class="group2">
          <a href="#">
            积分明细
            <span class="good-lnk fr">></span>
          </a>
          <div style="text-align:center">暂无记录</div>
        </div>
      </div>
    </section>
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
.main {
  width: 100%;
  min-width: 320px;
  margin: 0 auto;
  padding: 0;
  max-width: 640px;
  font-size: 14px;
}
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
.score span {
  font-size: 48px;
  text-shadow: 0px 1px 2px #ca5e00;
}
.nav {
  height: 36px;
  position: absolute;
  bottom: 0;
  background: #fe6600;
  width: 100%;
}
.nav a {
  color: #fff;
  width: 49%;
  display: inline-block;
  line-height: 36px;
  text-align: center;
}
.group2 {
  background: #fff;
  border-left: none;
  border-right: none;
}
.group2 a {
  height: 36px;
  display: block;
  line-height: 36px;
  border-bottom: 1px solid #e4e4e4;
  padding: 8px 16px;
  text-decoration: none;
  color: #666;
}
.good-lnk {
  margin-top: 10px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 360px 360px;
  vertical-align: top;
}
.fr {
  float: right;
}
</style>