<template>
  <div class="cart">
    
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
</template>
<style>
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
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>