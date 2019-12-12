<template>
  <div class="cart">
    <div class="cart1" v-show="showcart1">
      <van-nav-bar title="购物车" left-text left-arrow @click-left="onClickLeft"></van-nav-bar>
      <section class="main">
        <div class="emptycart">
          <img class="img" src="https://img02.hua.com/m/images/m_emptycart.png" alt />
          <p class="text">这里什么都没有呀...</p>
        </div>
        <div class="guess">
          <div class="guess-title">猜你喜欢</div>
          <!-- 列表 -->
          <div class="guess-list">
            <div class="guess-item">
              <a href>
                <div class="guess-item-img">
                  <img src="https://img01.hua.com/uploadpic/newpic/9092112.jpg" alt />
                </div>
                <div class="guess-item-detail">
                  <div class="guess-item-info">
                    <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                    <span class="guess-item-desc">33枝戴安娜、66枝红玫瑰、1扎满天星</span>
                  </div>
                  <div class="guess-item-price">¥629</div>
                </div>
              </a>
            </div>

            <div class="guess-item">
              <a href>
                <div class="guess-item-img">
                  <img src="https://img01.hua.com/uploadpic/newpic/9012177.jpg" alt />
                </div>
                <div class="guess-item-detail">
                  <div class="guess-item-info">
                    <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                    <span class="guess-item-desc">33枝戴安娜、66枝红玫瑰、1扎满天星</span>
                  </div>
                  <div class="guess-item-price">¥629</div>
                </div>
              </a>
            </div>

            <div class="guess-item">
              <a href>
                <div class="guess-item-img">
                  <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg" alt />
                </div>
                <div class="guess-item-detail">
                  <div class="guess-item-info">
                    <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                    <span class="guess-item-desc">33枝戴安娜、66枝红玫瑰、1扎满天星</span>
                  </div>
                  <div class="guess-item-price">¥629</div>
                </div>
              </a>
            </div>

            <div class="guess-item">
              <a href>
                <div class="guess-item-img">
                  <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg" alt />
                </div>
                <div class="guess-item-detail">
                  <div class="guess-item-info">
                    <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                    <span class="guess-item-desc">33枝戴安娜、66枝红玫瑰、1扎满天星</span>
                  </div>
                  <div class="guess-item-price">¥629</div>
                </div>
              </a>
            </div>

            <div class="guess-item">
              <a href>
                <div class="guess-item-img">
                  <img src="https://img01.hua.com/uploadpic/newpic/9012009.jpg" alt />
                </div>
                <div class="guess-item-detail">
                  <div class="guess-item-info">
                    <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                    <span class="guess-item-desc">33枝戴安娜、66枝红玫瑰、1扎满天星</span>
                  </div>
                  <div class="guess-item-price">¥629</div>
                </div>
              </a>
            </div>

            <div class="guess-item">
              <a href>
                <div class="guess-item-img">
                  <img src="https://img01.hua.com/uploadpic/newpic/9010877.jpg" alt />
                </div>
                <div class="guess-item-detail">
                  <div class="guess-item-info">
                    <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                    <span class="guess-item-desc">33枝戴安娜、66枝红玫瑰、1扎满天星</span>
                  </div>
                  <div class="guess-item-price">¥629</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="cart2" v-show="showcart2">
      <van-nav-bar title="购物车" left-text left-arrow @click-left="onClickLeft"></van-nav-bar>
      <section>
        <div class="z_cart_list">
          <div class="z_promo_list">
            <div class="z_cart_item">
              <div class="z_cart_item_checkbox">
                <input type="checkbox" />
              </div>
              <div class="z_cart_item_right">
                <div class="z_cart-item-details">
                  <div class="z_cart-item-pic">
                    <img
                      src="//img01.hua.com/uploadpic/newpic/9012450.jpg_220x240.jpg"
                      alt="韩式系列/初心不负"
                    />
                  </div>
                  <div class="z_cart-item-info">
                    <p class="z_cart-item-title">[鲜花]韩式系列/初心不负</p>
                    <div class="z_cart-item-inputs">
                      <div class="z_cart-item-num">
                        <span>数量</span>
                        <div class="z_cart-item-setnum">
                          <span class="z_btn-cut">-</span>
                          <input class="z_num-count" name="cpsl" type="tel" value="1" maxlength="3" />
                          <span class="z_btn-add">+</span>
                        </div>
                      </div>
                    </div>
                    <p class="z_cart-item-price">
                      ¥
                      <span>198</span>
                    </p>
                    <button class="z_del" @click="del()">删除</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="z_fooert">
        <span class="z_footer-left">
          合计:
          <em class="z_total">198</em>
        </span>
        <button class="z_footer-right" type="button" id="jieSuan">
          去结算
          <em class="z_total-num">(1)</em>
        </button>
      </footer>
    </div>
  </div>
</template>

<style>
.z_del {
  width: 3.5rem;
  height: 1.5rem;
  position: absolute;
  right: 2rem;
  bottom: 0.1rem;
  color: #fff;
  background: red;
  border: 0;
}
.z_total-num {
  font-style: normal;
  color: #fff;
  font-size: 1.14285714rem;
  text-align: center;
}
.z_footer-right {
  border: none;
  height: 100%;
  border-radius: 0;
  color: #fff;
  font-size: 1.14285714rem;
  text-align: center;
  background-color: #ff734c;
  display: inline-block;
  width: 33.33%;
  vertical-align: top;
}
.z_total {
  font-style: normal;
  color: #ff734c;
  font-size: 1.14285714rem;
  font-weight: 500;
  margin-left: 0.57142857rem;
}
.z_footer-left {
  display: inline-block;
  box-sizing: border-box;
  width: 66.67%;
  vertical-align: top;
  padding-left: 1.14285714rem;
  font-size: 1rem;
  border-top: 1px solid rgba(180, 186, 191, 0.5);
}
.z_fooert {
  position: fixed;
  bottom: 3rem;
  left: 0;
  right: 0;
  height: 3.5rem;
  font-size: 0;
  background-color: #fff;
  line-height: 3.5rem;
}
.z_cart-item-price span {
  font-size: 1rem;
  color: #ff734c;
  font-weight: 500;
}
.z_cart-item-price {
  position: absolute;
  left: 0.85714286rem;
  bottom: 0;
  font-size: 1rem;
  color: #ff734c;
  font-weight: 500;
}
.z_btn-add {
  border-left: 1px solid #e9ecf0;
  display: inline-block;
  width: 1.71428571rem;
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
  text-align: center;
  vertical-align: top;
  color: #232628;
}
.z_num-count {
  width: 3.92857143rem;
  background-color: #f7f9fa;
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
  text-align: center;
  vertical-align: top;
}
.z_btn-cut {
  border-right: 1px solid #e9ecf0;
  display: inline-block;
  width: 1.71428571rem;
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
  text-align: center;
  vertical-align: top;
}
._cart-item-setnum {
  display: inline-block;
  height: 1.71428571rem;
  margin-left: 1rem;
  background-color: #f7f9fa;
  border: 1px solid #e9ecf0;
}
.z_cart-item-num span {
  font-size: 0.85714286rem;
  line-height: 1.71428571rem;
  vertical-align: top;
  color: #232628;
}
.z_cart-item-num {
  margin-top: 0.42857143rem;
}
.z_cart-item-inputs {
  margin-top: 0.42857143rem;
  overflow: hidden;
}
.z_cart-item-title {
  width: 100%;
}
.z_cart-item-info {
  position: relative;
  display: inline-block;
  width: 68.58006042%;
  height: 8.14285714rem;
  padding: 0 0.85714286rem;
  vertical-align: top;
}
.z_cart-item-pic img {
  width: 100%;
  vertical-align: middle;
}
.z_cart-item-pic {
  display: inline-block;
  width: 31.41993958%;
  vertical-align: top;
}
.z_cart-item-details {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.z_cart_item_right {
  display: inline-block;
  width: 88.27%;
  vertical-align: top;
  border-bottom: 0;
  padding-bottom: 1rem;
}
.z_cart_item_checkbox {
  margin-top: 3.28571429rem;
  position: relative;
  display: inline-block;
  width: 11.73%;
  height: 8.14285714rem;
  vertical-align: top;
  text-align: center;
}
.z_cart_item {
  padding: 0.5rem 0 0;
  border: none;
  overflow: hidden;
  color: #232628;
}
.z_promo_list {
  border-bottom: 1px solid #e9ecf0;
}
.z_cart_list {
  border-top: 1px solid #e9ecf0;
  background-color: #fff;
  font-size: 0;
}
.guess-item-price {
  margin-top: 0.42857143rem;
  font-size: 1rem;
  color: #ff734c;
}
.guess-item-name {
  white-space: nowrap;
  font-size: 0.85714286rem;
  color: #232628;
}
.guess-item-info {
  font-size: 0.85714286rem;
  color: #232628;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guess-item-detail {
  height: 3.71428571rem;
  padding: 0.42857143rem 0.57142857rem;
}
.guess-item-img img {
  width: 100%;
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: inherit;
}
.guess-item {
  float: left;
  width: 48.08743169%;
  margin: 0 0.93333333% 0.57142857rem;
  border-radius: 0.28571429rem;
  overflow: hidden;
  box-shadow: 0px 4px 6px 0px #dee2e5;
}
.guess-list {
  font-size: 0;
  padding: 0 1.2%;
}
.guess-title {
  height: 4rem;
  font-size: 1.14285714rem;
  color: #232628;
  padding: 0 1.14285714rem;
  line-height: 4rem;
}
.guess {
  margin-top: 0.57142857rem;
  padding-bottom: 3.5rem;
  background-color: #fff;
}
.emptycart p {
  margin-top: 1.14285714rem;
  color: #232628;
  font-size: 1rem;
}
.emptycart img {
  width: 7.14285714rem;
  height: 7.14285714rem;
}
.emptycart {
  border-top: 1px solid #e9ecf0;
  background-color: #fff;
  padding: 3.14285714rem 0 2.28571429rem;
  text-align: center;
}
.van-nav-bar .van-icon {
  color: black;
}
.van-nav-bar {
  display: flex;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  background: #fff;
}
</style>
<script>
import axios from "axios";
export default {
  created() {
    if (localStorage.getItem("_id")) {
      this.showcart2 = true;
      this.showcart1 = false;
    }
  },
  data() {
    return {
      showcart1: true,
      showcart2: false
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    del() {
      localStorage.removeItem("_id");
      this.$router.go(0);
    }
  }
};
</script>
