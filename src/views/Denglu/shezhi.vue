<template>
  <div>
    <header class="headerbar">
      <div class="Sz-left">
        <van-icon name="arrow-left" class="Sz" />
      </div>
      <div class="Sz-content">
        <p>设置</p>
      </div>
      <div class="Sz-right">
        <van-icon name="wap-nav" class="Sz" />
      </div>
    </header>
    <section class="main">
      <div class="setup-item">
        <div class="item-left">个人资料</div>
        <div class="item-right">
          <van-icon name="arrow" class="shezhi" />
        </div>
      </div>
      <div class="setup-item">
        <div class="item-left">绑定账号</div>
        <div class="item-right">
          <van-icon name="arrow" class="shezhi" />
        </div>
      </div>
      <div class="setup-item">
        <div class="item-left">修改密码</div>
        <div class="item-right">
          <van-icon name="arrow" class="shezhi" />
        </div>
      </div>
      <div class="setup-item">
        <div class="item-left">反馈意见</div>
        <div class="item-right">
          <van-icon name="arrow" class="shezhi" />
        </div>
      </div>
      <div class="signout">
        <input class="btn-signout" type="button" value="退出" @click="logout" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({
        name: "Me"
      });
    }
  }
};
</script>
<style  scoped>
.headerbar {
  display: flex;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  justify-content: space-between;
  border-bottom: solid 6px #e9ecf0;
}
.Sz {
  font-size: 1.42857143rem;
  font-weight: 100;
  line-height: 3.14285714rem;
  margin: 0 1rem 0;
}
.Sz-content > p {
  font-size: 1.14285714rem;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 1.8rem;
}
.main {
  width: 100%;
  padding: 0.57142857rem;
}
.main .setup-item {
  width: 100%;
  margin-bottom: 2.57142857rem;
  background: #e9ecf0;
  width: 100%;
  height: 3.6rem;
  margin-bottom: 0.57142857rem;
  border-radius: 0.28571429rem;
  padding: 0 1.14285714rem;
  display: flex;
}
.item-left {
  font-size: 0.8rem;
  line-height: 3.6rem;
}
.shezhi {
  font-size: 0.8rem;
  line-height: 4rem;
  margin-left: 15rem;
}
.main .signout .btn-signout {
  width: 11.28571429rem;
  height: 2.2rem;
  font-size: 1rem;
  color: #ffffff;
  background: #394d3f;
  border-radius: 0.14285714rem;
  -webkit-appearance: none !important;
  margin-top: 1.6rem;
}
.signout {
  text-align: center;
}
</style>