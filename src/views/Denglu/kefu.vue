<template>
  <div class="kefu">
    <van-nav-bar title="客服" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <section class="wx_main">
      <div class="wx_panel">
        <div class="wx_wxguanjia">
          <div class="wx_wxguanjia_head">
            <img src="../../assets/5.png" />
            <span>专属秘书|喜棠</span>
          </div>
          <div class="wx_wxguanjia_cont">Hi，我是您的专属秘书喜棠，添加我微信，我将帮您催单，有需求时，1对1帮您走绿色通道。</div>
          <div class="wx_wxguanjia_bottom">
            <div class="wx_wxguanjia_bottom_left">
              微信号：
              <span class="wx_wxguanjia_id">huali_duebass</span>
            </div>
            <div class="wx_wxguanjia_bottom_right">
              <div class="wx_wxguanjia_bottom_btn">加我微信</div>
            </div>
          </div>
        </div>
        <van-grid :border="true" :column-num="2">
          <van-grid-item icon="service" text="在线客服"></van-grid-item>
          <van-grid-item icon="phone" text="400电话"></van-grid-item>
        </van-grid>
        <van-cell title="在线留言" icon="comment">
          <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
        </van-cell>
      </div>
      <div class="wx_worktime">
        <p>客服服务时间为：08:30-21:00</p>
      </div>
    </section>
  </div>
</template>

<style>
.wx_main {
  background-color: #e9ecf0;
}
.wx_panel {
  background-color: #fff;
}
.wx_wxguanjia {
  padding: 0.78571429rem 0 0.64285714rem;
  background: #fff;
  font-size: 0;
  border-top: 1px solid #e9ecf0;
}
.wx_wxguanjia_head {
  width: 21.64285714rem;
  margin: 0 auto;
}
.wx_wxguanjia_head img {
  width: 2.28571429rem;
  height: 2.28571429rem;
}
.wx_wxguanjia_head span {
  font-size: 1rem;
  line-height: 2.28571429rem;
  margin-left: 0.64285714rem;
  color: #232628;
  vertical-align: top;
}
.wx_wxguanjia_cont {
  width: 23.35714286rem;
  height: 4.78571429rem;
  margin: 0 auto;
  padding: 1.28571429rem 1rem 1.07142857rem;
  font-size: 0.85714286rem;
  line-height: 1.21428571rem;
  color: #232628;
  background-image: url(//img02.hua.com/m/images/wxguanjia_wode_bg.png);
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
}
.wx_wxguanjia_bottom {
  width: 21.64285714rem;
  margin: 0.21428571rem auto 0;
}
.wx_wxguanjia_bottom_left {
  display: inline-block;
  width: 60%;
  vertical-align: top;
  font-size: 1rem;
  line-height: 2rem;
  color: #232628;
}
.wx_wxguanjia_bottom_right {
  display: inline-block;
  width: 40%;
  vertical-align: top;
  text-align: right;
}
.wx_wxguanjia_bottom_btn {
  display: inline-block;
  padding: 0 1.71428571rem;
  font-size: 1rem;
  line-height: 2.14285714rem;
  background-color: #ff734c;
  color: #fff;
  border-radius: 0.14285714rem;
}
.wx_worktime {
  padding-top: 2.28571429rem;
  font-size: 1rem;
  line-height: 1.42857143rem;
  color: #232628;
  text-align: center;
  background-color: #fff;
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