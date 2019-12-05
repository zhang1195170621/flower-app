<template>
  <div class="home">
    <header class="headerbar">
      <div class="header-left">
        <a href="#">
          <i class="iconfont"></i>
        </a>
      </div>
      <div class="header-logo">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </div>
      <div class="header-right">
        <a href="#">
          <i class="iconfont"></i>
        </a>
      </div>
    </header>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img class="Lbt" src="https://img02.hua.com/slider/19_christmas_banner_m.png" alt="圣诞节专题" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="Lbt" src="https://img02.hua.com/slider/18_youflower_m.jpg?830" alt="设计师鲜花" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="Lbt" src="https://img02.hua.com/slider/18_birthday_m.jpg?830" alt="生日专题" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="Lbt" src="https://img02.hua.com/slider/19_banner_sheshou_m.jpg" alt="星座" />
      </van-swipe-item>
    </van-swipe>
    <ul class="conpany-info">
      <li>认证龙头企</li>
      <li class="conpany-info-item">14年品</li>
      <li class="conpany-info-item">3小时送</li>
      <li class="conpany-info-item">最近 条好评</li>
    </ul>
    <van-grid :border="false" :column-num="5">
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_flower.png" />
        <P>鲜花</P>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_ppf.png" />
        <p>永生花</p>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_cake.png" />
        <p>蛋糕</p>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_gift.png" />
        <p>礼品</p>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png" />
        <p>巧克力</p>
      </van-grid-item>
    </van-grid>
    <section class="scene">
      <div class="scene-one">|一秒选花</div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_use_lover.png" />
          <span class="scene-item-use-title">送恋人</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_use_elder.png" />
          <span class="scene-item-use-title">送长辈</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_use_friends.png" />
          <span class="scene-item-use-title">送朋友</span>
        </van-grid-item>
      </van-grid>
      <div class="blessing">
        <img src="https://img02.hua.com/m/home/img/m_home_use_birthday2.png" alt />
        <span class="blessing-s">生日祝福</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_profess2.png" alt />
        <span class="blessing-b">表白求婚</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_business2.png" alt />
        <span class="blessing-k">开业商务</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary2.png" alt />
        <span class="blessing-z">周年纪念</span>
      </div>
      <div class="guo_sell">
        <div class="guo_sell_left">
          <img src="https://img02.hua.com/m/home/img/m_home_ranklist2.png" alt />
          <p class="r">热销榜</p>
          <p class="j">集万千宠爱</p>
          <div class="scene-item-bottom">
            <span class="scene-item-bottom-label">大家都在买</span>
            <span class="scene-item-bottom-text">热销11.1万</span>
          </div>
        </div>
        <div class="guo_sell_right">
          <img src="https://img02.hua.com/m/home/img/m_home_special2.png" alt />
          <p class="guo_t">特价专区</p>
          <p class="guo_c">超值好货</p>
          <div class="guo_sell_xianshi">
            <span class="guo_sell_xianshi_left">显示直降</span>
            <span class="guo__right">￥159</span>
          </div>
        </div>
      </div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_category_new2.png" />
          <span class>新品来袭</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_category_quality2.png" />
          <span class>品味之选</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_category_you2.png" />
          <span class>设计师甄选</span>
        </van-grid-item>
      </van-grid>
      <div class="blessing">
        <img src="https://img02.hua.com/m/home/img/m_home_use_birthday2.png" alt />
        <span class="blessing-s">生日祝福</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_profess2.png" alt />
        <span class="blessing-b">表白求婚</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_business2.png" alt />
        <span class="blessing-k">开业商务</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary2.png" alt />
        <span class="blessing-z">周年纪念</span>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>
<style>
.Lbt {
  width: 100%;
  height: 180px;
}
.home {
  overflow-y: auto;
  z-index: 1;
  flex: 1;
}
.headerbar {
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  background: #435448;
  overflow: hidden;
  color: #fff;
}
.headerbar > .header-logo {
  flex: 1;
  text-align: center;
}
.headerbar > .header-logo img {
  width: 9.71428571rem;
  vertical-align: middle;
}
.conpany-info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.8rem;
  overflow: hidden;
  background: #fff;
  font-size: 0.6rem;
  line-height: 2.57142857rem;
}
.conpany-info-item {
  margin-left: 2.85714286rem;
}
.van-grid-item__content--center {
  padding: 10px 4px;
}
.flower img {
  width: 2.24rem;
}
.flower p {
  font-size: 0.666rem;
  margin-top: 0.1rem;
}
.scene .scene-one {
  margin-left: 1rem;
}
.scene-item-use-title {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.blessing {
  display: flex;
  justify-content: center;
  position: relative;
}
.blessing img {
  width: 5.4rem;
  height: 6rem;
  padding: 0 0.2rem;
}
.blessing .blessing-s {
  font-size: 14px;
  position: absolute;
  left: 1.2rem;
  top: 0.6rem;
}
.blessing .blessing-b {
  font-size: 14px;
  position: absolute;
  left: 7.2rem;
  top: 0.6rem;
}
.blessing .blessing-k {
  font-size: 14px;
  position: absolute;
  left: 13rem;
  top: 0.6rem;
}
.blessing .blessing-z {
  font-size: 14px;
  position: absolute;
  left: 18.8rem;
  top: 0.6rem;
}
.guo_sell {
  display: flex;
  padding: 0.4rem;
  position: relative;
}
.guo_sell_left img {
  border: solid 1px #e9ecf0;
  width: 11.2rem;
  height: 9rem;
}
.guo_sell_right img {
  border: solid 1px #e9ecf0;
  width: 11.2rem;
  height: 9rem;
  border-left: 0;
}
.guo_sell_left .r {
  position: absolute;
  left: 1.2rem;
  top: 0.2rem;
  font-size: 0.92rem;
}
.guo_sell_left .j {
  position: absolute;
  left: 1.2rem;
  top: 1.6rem;
  font-size: 0.7rem;
  color: #71797f;
}
.scene-item-bottom .scene-item-bottom-label {
  position: absolute;
  top: 8rem;
  left: 1.2rem;
  font-size: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background: #ff734c;
  padding: 0.07142857rem 0.42857143rem;
  color: #fff;
  margin-right: 2.14285714rem;
}
.scene-item-bottom .scene-item-bottom-text {
  position: absolute;
  bottom: 1.2rem;
  left: 8rem;
  z-index: 1;
  font-size: 0.71428571rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guo_sell_right .guo_t {
  position: absolute;
  left: 12.6rem;
  top: 0.2rem;
  font-size: 0.92rem;
}
.guo_sell_right .guo_c {
  position: absolute;
  left: 12.6rem;
  top: 1.6rem;
  font-size: 0.7rem;
  color: #71797f;
}
.guo_sell_xianshi .guo_sell_xianshi_left {
  position: absolute;
  top: 8rem;
  left: 12.6rem;
  font-size: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background: #ff734c;
  padding: 0.07142857rem 0.42857143rem;
  color: #fff;
  margin-right: 2.14285714rem;
}
.guo__right {
  position: absolute;
  bottom: 1.2rem;
  left: 20rem;
  z-index: 1;
  font-size: 0.71428571rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
