<template>
  <div class="zhuce">
    <div class="head-bar">
      <div class="header-bar-left">
        <router-link :to="{name:'Denglu'}">
          <van-icon name="arrow-left" />
        </router-link>
        <router-view />
      </div>
    </div>
    <section class="container">
      <div class="hualogo">邮箱注册</div>

      <div class="youxiang_formgroup">
        <div class="formgroup-input">
          <input placeholder="请输入邮箱" autocomplete="off" type="tel" />
        </div>
      </div>

      <div class="youxiang_formgroup">
        <div class="formgroup-input">
          <input placeholder="请设置密码" maxlength="6" autocomplete="off" type="tel" />
        </div>
        <div class="huoqu">获取验证码</div>
      </div>

      <div class="youxiang_formgroup">
        <div class="formgroup-input">
          <input placeholder="请输入右侧图形验证码" autocomplete="off" type="password" />
        </div>
        <div class="yanzhengma">
          <img src="../../assets/4.png" alt="图形验证码" />
        </div>
      </div>

      <div class="form-contrl">
        <button type="button" class="formbtn">注册</button>
      </div>

      <div class="flex" style="margin-top: 34px;">
        <div class="flex-item flex-item-center">
          <router-link :to="{name:'Zhuce'}">
            手机注册
            <i class="iconfont iconfont-arrow-right">
              <van-icon name="arrow" />
            </i>
          </router-link>
          <router-view />
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.youxiang_formgroup {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #e9ecf0;
}
.yanzhengma {
  width: 72px;
  height: 44px;
  line-height: 44px;
  color: #71797f;
  font-size: 13px;
  text-align: center;
}
.yanzhengma img {
  width: 100%;
  vertical-align: middle;
  line-height: 44px;
  color: #71797f;
  font-size: 13px;
  text-align: center;
}
</style>