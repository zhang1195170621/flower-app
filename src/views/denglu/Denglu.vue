<template>
  <div class="fl">
    <div class="header-bar">
      <div class="header-bar-left">
        <a class="cross" @click="back">
          <van-icon name="cross" size="20px" click="back" />
        </a>
      </div>
    </div>
    <section class="container">
      <div class="hualogo">
        <img src="../../assets/1.png" />
      </div>
      <div class="formgroup">
        <div class="formgroup-input">
          <input placeholder="请输入邮箱或手机号" autocomplete="off" type="text" />
          <!-- <div class="formgroup-input-icon">
            <van-icon name="close" />
          </div>-->
        </div>
      </div>
      <div class="formgroup formgroup1">
        <div class="formgroup-input">
          <input placeholder="请输入登录密码" autocomplete="off" type="password" />
          <div class="formgroup-input-icon">
            <i class="iconfont iconfont-invisible">
              <van-icon name="closed-eye" />
            </i>
          </div>
        </div>
        <div class="formgroup-btn formgroup-btn-borderleft">忘记密码?</div>
      </div>
      <div class="form-contrl">
        <button type="button" class="formbtn">登录</button>
      </div>

      <div class="flex">
        <div class="flex-item">
          <a href="#/" class="router-link-active">
            手机短信登录
            <i>
              <van-icon name="arrow" />
            </i>
          </a>
        </div>
        <div class="flex-item flex-item-right">
          <a href="#/RegistTel" class>
            注册
            <i>
              <van-icon name="arrow" />
            </i>
          </a>
        </div>
      </div>
    </section>
    <div class="thirdparty-login">
      <div class="thirdparty-login-item">
        <a href="/Passport/QQ/Login">
          <i class="iconfont icon-icon"></i>
          <span>QQ</span>
        </a>
      </div>
      <div class="thirdparty-login-item">
        <a href="/Passport/Alipay/Login">
          <i class="iconfont icon-zhifubao"></i>
          <span>支付宝</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.thirdparty-login > .thirdparty-login-item .iconfont {
  font-size: 24px;
  vertical-align: middle;
}
.thirdparty-login > .thirdparty-login-item a {
  display: block;
  text-decoration: none;
  color: inherit;
}
.thirdparty-login > .thirdparty-login-item {
  flex: 1;
  min-width: 0;
  height: 44px;
  line-height: 44px;
  font-size: 12px;
  color: #71797f;
  position: relative;
  text-align: center;
}
.thirdparty-login {
  display: flex;

  align-items: flex-start;

  flex-wrap: wrap;
  margin-top: 80px;
}
.flex > .flex-item a {
  display: block;
  text-decoration: none;
  color: inherit;
}
.flex > .flex-item.flex-item-right {
  text-align: right;
}
.flex > .flex-item .iconfont {
  font-size: 1em;
}
.flex > .flex-item a {
  display: block;
  text-decoration: none;
  color: inherit;
}
.flex > .flex-item {
  color: #71797f;
  line-height: 36px;

  flex: 1;
  min-width: 0;
}
.flex {
  font-size: 13px;
  margin-top: 16px;
  display: flex;

  align-items: flex-start;

  flex-wrap: wrap;
}
.form-contrl {
  margin-top: 45px;
}
.formbtn {
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  color: #fff;
  background: #ff734c;
  border: 1px solid #ff734c;
  font-size: 16px;
  box-shadow: 0 4px 8px 0 #ffb6a2;
  border-radius: 100px;
  outline: none;
  transition: 0.3s;
}
.formgroup-btn-borderleft {
  position: absolute;
  right: 25px;
  top: -5px;
  width: 72px;
  height: 44px;
  line-height: 44px;
  color: #71797f;
  font-size: 13px;
  text-align: center;
}
.formgroup-input-icon {
  position: absolute;
  top: 0;
  right: 100px;
  width: 44px;
  height: 44px;
  line-height: 44px;
  color: #b4babf;
  text-align: center;
  cursor: pointer;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
}

.formgroup-input {
  flex: 1;
  min-width: 0;
  position: relative;
}
.formgroup1 {
  margin-top: 8px;
  position: relative;
}
.formgroup-input input {
  outline: none;
  border: none;
  font-size: 14px;
  width: 100%;
  height: 44px;
  color: #232628;
  padding: 0 46px 0 2px;
  box-shadow: inset 0 0 0 100px #fff;
}
* {
  margin: 0;
  padding: 0;
}
.formgroup {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  font-size: 14px;
  border-bottom: 1px solid #e9ecf0;
  display: block;
}
.hualogo {
  width: 190px;
  height: 25px;
  margin: 12px auto 44px;
  font-size: 22px;
  text-align: center;
}
.hualogo img {
  width: 100%;
  vertical-align: middle;
  font-size: 22px;
  text-align: center;
}
.container {
  padding: 0 16px;
}
.header-bar-left {
  width: 44px;
  height: 44px;
}
.fl {
  height: 100%;
  min-height: 100vh;
  position: relative;
  width: 100%;
  max-width: 640px;
  overflow: hidden;
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
.header-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #fff;
  text-align: center;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
