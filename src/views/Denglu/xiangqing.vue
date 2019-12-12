<template>
  <div class="xiangqing">
    <header class="headerbar">
      <router-link :to="{name:'DDL'}">
        <div class="header-left">
          <i class="hhh-left van-icon van-icon-arrow-left"></i>
        </div>
      </router-link>
      <div class="headerbar-center">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </div>
      <div class="header-right">
        <i class="hhh-right van-icon van-icon-bars"></i>
      </div>
    </header>
    <section class="probanner">
      <div class="swiper-wrapper">
        <img
          :src="list.coverImg = list.coverImg.indexOf('http') == 0 ? list.coverImg : 'http://api.cat-shop.penkuoer.com' + list.coverImg"
          alt
        />
      </div>
    </section>
    <section class="proinfo">
      <div class="proinfo-head">
        <div class="proinfo-head-title">
          {{ list.name }}
          <span class="text-orange">{{list.descriptions}}</span>
        </div>
        <div class="proinfo-head-collect">
          <a>
            <i class="hhh-right van-icon van-icon-star-o"></i>
          </a>
        </div>
      </div>
      <div class="proinfo-body">
        <div class="proinfo-body-price">
          <span class="proinfo-body-price-sjg">￥{{list.price}}</span>
          <s class="proinfo-body-price-jg">￥259</s>
        </div>
        <div></div>
      </div>
    </section>
    <section class="detailsinfo">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">花语</div>
        <div
          class="detailsinfo-item-desc"
        >以热烈主题的红玫瑰及红色包装，搭配象征白色雪花的桔梗为设计主题，打造全新双节（圣诞/新年）韩式系列。将这一簇美景包裹在一片雪白中，一条满载圣诞和元旦的丝带扎紧了年末的惊喜，只为将全世界的风景奉献于你怀里</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">材料</div>
        <div
          class="detailsinfo-item-desc"
        >韩式花束系列：卡罗拉玫瑰11枝、白底粉边洋桔梗5枝（如白底粉边桔梗缺货，可用白色或浅粉色桔梗代替）、大叶尤加利10枝、4枝红豆</div>
      </div>
    </section>

    <van-goods-action>
      <van-goods-action-icon icon="service-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button color="#3D4D42;" type="warning" text="加入购物车" />
      <van-goods-action-button color="#FF734C" type="danger" text="立即购买" />
    </van-goods-action>
    <section class="brand">
      <h3 class="brand-title">为什么选择我们</h3>
      <div class="brand-list">
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_01.png" alt />
          <p>获评鲜花龙头企业</p>
        </div>
      </div>
      <div class="brand-list">
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_02.png" alt />
          <p>1~3小时送花上门</p>
        </div>
      </div>
      <div class="brand-list">
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_03.png" alt />
          <p>赛事冠军花艺师团队</p>
        </div>
      </div>
      <div class="brand-list">
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_04.png" alt />
          <p>严选花材</p>
        </div>
      </div>
      <div class="brand-list">
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_05.png" alt />
          <p>12道严苛品控标准</p>
        </div>
      </div>
      <div class="brand-list">
        <div class="brand-item">
          <img src="https://img02.hua.com/m/pro_detail/m_details_brand_06.png" alt />
          <p>500万用户信赖好评</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    const productid = this.$route.query._id;
    axios
      .get("http://api.cat-shop.penkuoer.com/api/v1/products/" + productid)
      .then(res => {
        console.log(res);
        this.list = res.data;
      });
  }
};
</script>
<style scoped>
.brand {
  overflow: hidden;
}
.brand-title {
  font-size: 1.14285714rem;
  text-align: center;
  font-weight: normal;
  margin: 1.5rem;
}
.brand-item {
  float: left;
  width: 33.33333333%;
  text-align: center;
  padding-bottom: 0.8rem;
}
.brand-item > img {
  width: 4rem;
  height: 4rem;
}
.brand-item > p {
  font-size: 0.45rem;
  margin-top: 0.28571429rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detailsinfo-item-desc {
  flex: 1;
  padding: 0.85714286rem 0;
  justify-content: center;
  font-size: 0.3rem;
  border-bottom: solid 1px #e9ecf0;
}
.detailsinfo-item-title {
  width: 3rem;
  min-width: 3rem;
  font-weight: 500;
  color: #232323;
  padding: 0.85714286rem 0;
}
.detailsinfo-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.85714286rem;
  position: relative;
}
.detailsinfo {
  margin-top: 0.57142857rem;
  background: #fff;
  padding: 0.57142857rem 1.14285714rem;
}
.xiangqing {
  margin-bottom: 3rem;
}
.proinfo-body-price {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0;
}
.proinfo-body-price-jg {
  color: #b4babf;
  margin-left: 0.42857143rem;
  font-size: 1rem;
  margin-right: 1.14285714rem;
}
.proinfo-body-price-sjg {
  font-size: 1.2rem;
  color: #ff734c;
  font-weight: 600;
}
.proinfo-body {
  margin-top: 0.85714286rem;
  display: flex;
  align-items: center;
}
.proinfo-head-collect {
  width: 2.85714286rem;
  min-height: 1.42857143rem;
  height: 100%;
  text-align: right;
}
.text-orange {
  color: #ff734c;
}
.proinfo-head-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.proinfo-head {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.headerbar {
  display: flex;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  background: #fff;
}
.headerbar-left {
  text-align: left;
}
.headerbar-center {
  flex: 1;
  max-width: 14.14285714rem;
  max-width: -webkit-calc(100% - 12.57142857rem);
  max-width: -moz-calc(100% - 12.57142857rem);
  max-width: calc(100% - 12.57142857rem);
  text-align: center;
  margin: 0 6rem;
}
.headerbar-right {
  text-align: right;
}
.headerbar-left,
.headerbar-right {
  width: 6.28571429rem;
  height: 3.14285714rem;
  font-size: 0;
}
.hhh-left {
  font-size: 1.5rem;
  line-height: 3.14285714rem;
}
.hhh-right {
  font-size: 1.5rem;
  line-height: 3.14285714rem;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  box-sizing: content-box;
}
.proinfo {
  padding: 0.85714286rem 1.14285714rem;
  background: #fff;
  margin-bottom: 1px;
}
</style>