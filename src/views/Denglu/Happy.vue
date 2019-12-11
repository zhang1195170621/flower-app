<template>
  <div class="happy">
    <van-nav-bar title="鲜花" left-arrow@click-left="onClickLeft">
      <van-icon name="service-o" slot="right" />
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <van-grid :border="false">
      <van-grid-item text="综合" />
      <van-grid-item text="销量" />
      <van-grid-item text="价格" />
      <van-grid-item text="新品" />
    </van-grid>
    <van-grid :border="false" :column-num="5">
      <van-grid-item>
        <van-tag size="medium">送女友</van-tag>
      </van-grid-item>
      <van-grid-item>
        <van-tag size="medium">送男性</van-tag>
      </van-grid-item>
      <van-grid-item>
        <van-tag size="medium">送朋友</van-tag>
      </van-grid-item>
      <van-grid-item>
        <van-tag size="medium">送长辈</van-tag>
      </van-grid-item>
      <van-grid-item>
        <van-tag size="medium">筛选</van-tag>
      </van-grid-item>
    </van-grid>

    <div class="guess">
      <!-- 列表 -->
      <div class="guess-list">
        <div class="guess-item">
          <a href>
            <div class="guess-item-img">
              <img
                src="https://img01.hua.com/uploadpic/newpic/9092112.jpg"
                alt
              />
            </div>
            <div class="guess-item-detail">
              <div class="guess-item-info">
                <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                <span class="guess-item-desc"
                  >33枝戴安娜、66枝红玫瑰、1扎满天星</span
                >
              </div>
              <div class="guess-item-price">¥629</div>
            </div>
          </a>
        </div>

        <div class="guess-item">
          <a href>
            <div class="guess-item-img">
              <img
                src="https://img01.hua.com/uploadpic/newpic/9012177.jpg"
                alt
              />
            </div>
            <div class="guess-item-detail">
              <div class="guess-item-info">
                <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                <span class="guess-item-desc"
                  >33枝戴安娜、66枝红玫瑰、1扎满天星</span
                >
              </div>
              <div class="guess-item-price">¥629</div>
            </div>
          </a>
        </div>

        <div class="guess-item">
          <a href>
            <div class="guess-item-img">
              <img
                src="https://img01.hua.com/uploadpic/newpic/9010011.jpg"
                alt
              />
            </div>
            <div class="guess-item-detail">
              <div class="guess-item-info">
                <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                <span class="guess-item-desc"
                  >33枝戴安娜、66枝红玫瑰、1扎满天星</span
                >
              </div>
              <div class="guess-item-price">¥629</div>
            </div>
          </a>
        </div>

        <div class="guess-item">
          <a href>
            <div class="guess-item-img">
              <img
                src="https://img01.hua.com/uploadpic/newpic/9010966.jpg"
                alt
              />
            </div>
            <div class="guess-item-detail">
              <div class="guess-item-info">
                <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                <span class="guess-item-desc"
                  >33枝戴安娜、66枝红玫瑰、1扎满天星</span
                >
              </div>
              <div class="guess-item-price">¥629</div>
            </div>
          </a>
        </div>

        <div class="guess-item">
          <a href>
            <div class="guess-item-img">
              <img
                src="https://img01.hua.com/uploadpic/newpic/9012009.jpg"
                alt
              />
            </div>
            <div class="guess-item-detail">
              <div class="guess-item-info">
                <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                <span class="guess-item-desc"
                  >33枝戴安娜、66枝红玫瑰、1扎满天星</span
                >
              </div>
              <div class="guess-item-price">¥629</div>
            </div>
          </a>
        </div>

        <div class="guess-item">
          <a href>
            <div class="guess-item-img">
              <img
                src="https://img01.hua.com/uploadpic/newpic/9010877.jpg"
                alt
              />
            </div>
            <div class="guess-item-detail">
              <div class="guess-item-info">
                <span class="guess-item-name">99枝玫瑰赠德芙心语巧克力</span>·
                <span class="guess-item-desc"
                  >33枝戴安娜、66枝红玫瑰、1扎满天星</span
                >
              </div>
              <div class="guess-item-price">¥629</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
.van-nav-bar__right {
  position: absolute;
  bottom: 0.1rem;
  font-size: 23px;
}
.van-nav-bar__left {
  position: absolute;
  bottom: 0.1rem;
  font-size: 23px;
  color: #000;
}
.van-icon-wap-nav {
  padding-left: 2.3rem;
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
  overflow: hidden;
}
</style>
