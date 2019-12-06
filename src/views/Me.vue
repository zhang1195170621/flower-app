<template>
  <div class="me">
    <van-nav-bar title="个人中心" left-text left-arrow></van-nav-bar>
    <div class="main">
      <!-- 登录/注册 -->
      <div class="banner">
        <div class="login">
          <p class="login-hi">Hi,欢迎来到花礼网</p>
          <p class="denglu">
            <router-link :to="{name:'Denglu'}">登录/注册</router-link>
            <router-view />
          </p>
        </div>
      </div>
      <!-- 我的订单 -->
      <div class="panel">
        <div class="panel-head">
          <div class="panel-head-title">我的订单</div>
          <div class="panel-head-right">
            <a @click="DL">全部订单</a>
          </div>
        </div>
        <div class="panel-body">
          <div class="order">
            <div class="order-item">
              <a href="/Member/Order?oper=dfk" class="navigation">
                <img
                  class="order-item-icon"
                  src="https://img02.hua.com/m/member/center/myinfo_pendingpay.png"
                />
                <p class="order-item-reddot" id="dfk"></p>
                <p class="order-item-txt">待付款</p>
              </a>
            </div>
            <div class="order-item">
              <a href="/Member/Order?oper=jrps" class="navigation">
                <img
                  class="order-item-icon"
                  src="https://img02.hua.com/m/member/center/myinfo_distribution.png"
                />
                <p class="order-item-reddot" id="jrps"></p>
                <p>今日配送</p>
              </a>
            </div>
            <div class="order-item">
              <a href="/Member/Order?oper=dpj" class="navigation">
                <img
                  class="order-item-icon"
                  src="https://img02.hua.com/m/member/center/myinfo_evaluation.png"
                />
                <p class="order-item-reddot" id="dpj"></p>
                <p>待评价</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 优惠券列表 -->
      <div class="panel">
        <van-grid>
          <van-grid-item icon="coupon-o" text="优惠券" />
          <van-grid-item icon="ecard-pay" text="权益卡" />
          <van-grid-item icon="after-sale" text="余额" />
          <van-grid-item icon="gem-o" text="会员积分" />
          <van-grid-item icon="logistics" text="收货地址" />
          <van-grid-item icon="volume-o" text="生日纪念提醒" />
          <van-grid-item icon="star-o" text="收藏" />
          <van-grid-item icon="clock-o" text="浏览记录" />
        </van-grid>
      </div>
      <!-- 专属秘书 -->
      <div class="panel panel-guanjia">
        <div class="panel-body">
          <div class="guanjia">
            <div class="guanjia-head">
              <div class="wxguanjia-head-left">
                <img src="//img02.hua.com/m/images/wxguanjia-kf.png" />
                <span>专属秘书|喜棠</span>
              </div>

              <div class="wxguanjia-head-right">
                <div class="wxguanjia-head-btn" id="copyGuanjia">加我微信</div>
              </div>
            </div>
            <div class="wxguanjia-cont">
              Hi，我是您的专属秘书喜棠，添加我微信
              <span class="wxguanjia-id">huacom01</span>，我将帮您催单，有需求时，1对1帮您走绿色通道。
            </div>
          </div>
        </div>
      </div>
      <!-- 客服、设置、关于 -->
      <div class="panel">
        <div class="panel-body">
          <van-grid>
            <van-grid-item icon="service-o" text="联系客服" />
            <van-grid-item icon="question-o" text="帮助中心" />
            <van-grid-item icon="info-o" text="关于花礼" />
            <van-grid-item icon="setting-o" text="设置" />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  methods: {
    DL() {
      if (localStorage.getItem("token")) {
      } else {
        this.$router.push({
          name: "Denglu"
        });
      }
    }
  }
};
</script> **/


<style scoped>
.wxguanjia-cont {
  height: 4.78571429rem;
  margin: 2.5rem auto;
  padding: 1.14285714rem 1rem 1.07142857rem;
  font-size: 0.85714286rem;
  line-height: 1.21428571rem;
  color: #232628;
  background-image: url(//img02.hua.com/m/images/wxguanjia_wode_bg.png);
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
}
.panel-guanjia {
  height: 8rem;
}
.wxguanjia-head-right {
  float: right;
  width: 40%;
  vertical-align: top;
}
.wxguanjia-head-left {
  float: left;
  width: 60%;
  vertical-align: top;
}
.wxguanjia-head-btn {
  display: inline-block;
  padding: 0 1.71428571rem;
  font-size: 1rem;
  line-height: 2.14285714rem;
  background-color: #ff734c;
  color: #fff;
  border-radius: 0.14285714rem;
}

.wxguanjia-head-left img {
  width: 2.28571429rem;
  height: 2.28571429rem;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: top;
}
.wxguanjia-head-left span {
  font-size: 1rem;
  line-height: 2.28571429rem;
  margin-left: 0.64285714rem;
  color: #232628;
  vertical-align: top;
}
.guanjia-head {
  width: 24.64285714rem;
  margin: 0 auto;
}
.guanjia {
  padding: 0.64285714rem 0 0.21428571rem;
  font-size: 0;
}
.panel + .panel {
  margin-top: 0.57142857rem;
}
.order-item {
  flex: 1;
  max-width: 33.33333333%;
  text-align: center;
  padding: 0.85714286rem 0.42857143rem;
  position: relative;
  font-size: 0.92857143rem;
}
.order-item-icon {
  width: 2.28571429rem;
  height: 2.28571429rem;
  vertical-align: middle;
}
.order-item-reddot {
  position: absolute;
  z-index: 1;
  top: 0.92857143rem;
  right: 32%;
  width: 0.42857143rem;
  height: 0.42857143rem;
  border-radius: 50%;
  background: #ff734c;
  font-size: 0;
}
.order-item-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order {
  display: flex;
  align-items: center;
}
.panel-body {
  padding: 0;
  margin: 0;
}
.panel-head-right {
  flex: 1;
  text-align: right;
  font-weight: 400;
}
.panel-head {
  display: flex;
  width: 100%;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  padding: 0 1.14285714rem;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #cecece;
}
.panel-head-title {
  flex: 1;
  font-size: 1.14285714rem;
  font-weight: 400;
}
a {
  text-decoration: none;
  color: inherit;
}
* {
  font-size: 15px;
}
body {
  font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica,
    sans-serif;
  background: #e9ecf0;
}
div,
ul,
ol,
dl,
p,
pre,
section,
article,
aside,
li,
nav,
input,
textarea {
  border: 0;

  box-sizing: border-box;
}
.panel {
  background: #fff;
  margin: 0 0.57142857rem;
  border-radius: 0.28571429rem;
  box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
}
.main {
  background: url(https://img02.hua.com/m/member/center/backgroundv3.png)
    no-repeat;
  width: 100%;
  min-height: 9.28571429rem;
  background-repeat: no-repeat;
  background-size: 100% 9.42857143rem;
  background-position: top center;
  padding-bottom: 4.14285714rem;
}
.me .van-nav-bar__arrow {
  color: black;
}
.banner {
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.login {
  text-align: center;
}
.login-hi {
  color: #fff;
}
.denglu {
  margin-top: 0.57142857rem;
}
.denglu a {
  display: block;
  width: 9rem;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  background-color: #fff;
  border-radius: 4rem;
  font-weight: 500;
  text-align: center;
}
</style>