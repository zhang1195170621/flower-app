<template>
  <div class="equity">
    <van-nav-bar title="我的权益卡" left-text left-arrow></van-nav-bar>
    <section class="main">
      <div class="empty">
        <img class="empty-img" src="https://img02.hua.com/m/images/card/img/empty.png" />
        <p class="empty-tip">您还没有可用的权益卡哦…</p>
        <a href="#" class="empty-btn">购买权益卡</a>
      </div>
    </section>
  </div>
</template>

<style>
.main {
  background: #fff;
  padding: 0 4.26666667%;
  border-top: 1px solid #e9ecf0;
}
.empty {
  text-align: center;
  padding: 3.85714286rem 0;
}
.empty-img {
  width: 13.07142857rem;
  height: 6.78571429rem;
}
img {
  width: 100%;
  vertical-align: middle;
}
.empty-tip {
  margin-top: 2.85714286rem;
  font-size: 1rem;
  color: #232628;
}
.empty-btn {
  display: block;
  width: 6.85714286rem;
  height: 2.57142857rem;
  margin: 1.71428571rem auto 0;
  background: #ff734c;
  color: #fff;
  font-size: 1rem;
  line-height: 2.57142857rem;
  border-radius: 1.28571429rem;
}
</style>