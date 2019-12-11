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
      <div class="hualogo">手机号注册</div>

      <div class="zhuce_formgroup">
        <div class="formgroup-input">
          <input v-model="name" placeholder="请输入手机号" autocomplete="off" type="tel" />
        </div>
      </div>

      <div class="zhuce_formgroup">
        <div class="formgroup-input">
          <input placeholder="请输入短信验证码" maxlength="6" autocomplete="off" type="tel" />
        </div>
        <div class="huoqu">获取验证码</div>
      </div>

      <div class="zhuce_formgroup">
        <div class="formgroup-input">
          <input v-model="password" placeholder="请设置密码" autocomplete="off" type="password" />
        </div>
      </div>

      <div class="form-contrl">
        <button type="button" class="formbtn" @click="zhuce()">注册</button>
      </div>

      <div class="flex" style="margin-top: 34px;">
        <div class="flex-item flex-item-center">
          <router-link :to="{name:'Youxiang'}">
            邮箱注册
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


<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      password: "",
      pd: ""
    };
  },
  methods: {
    zhuce() {
      if (this.userName == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        axios({
          url: "http://api.cat-shop.penkuoer.com/api/v1/auth/reg",
          method: "post",
          data: {
            userName: this.name,
            password: this.password
          }
        })
          .then(res => {
            this.pd = res.data.code;
          })
          .catch(err => console.log(err));
      }
      if (this.pd == "error") {
        alert("用户名已存在");
      }
      if (this.pd == "success") {
        this.$router.push({ name: "Denglu" });
      }
    }
  }
};
</script>


<style>
.zhuce_formgroup + .zhuce_formgroup {
  margin-top: 8px;
}
.flex > .flex-item {
  color: #71797f;
  line-height: 36px;
  text-align: center;
  flex: 1;
  min-width: 0;
}
.flex {
  font-size: 13px;
  display: flex;
  align-items: flex-start;
  margin-top: 34px;
  flex-wrap: wrap;
}
.zhuce_yanjing {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
}
.huoqu {
  color: #ff734c;
  width: 72px;
  height: 44px;
  line-height: 44px;
  font-size: 13px;
  text-align: center;
}
.formgroup-input > input {
  outline: none;
  border: none;
  width: 100%;
  height: 44px;
  color: #232628;
  padding: 0 46px 0 2px;
  box-shadow: inset 0 0 0 100px #fff;
}

.zhuce_formgroup {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e9ecf0;
}
.formgroup-input {
  flex: 1;
  min-width: 0;
  position: relative;
}
.hualogo {
  width: 190px;
  height: 25px;
  margin: 12px auto 44px;
  font-size: 22px;
  text-align: center;
}
.header-bar-left {
  width: 44px;
  line-height: 44px;
  text-align: center;
  height: 44px;
}
.header-bar-left i {
  font-size: 20px;
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
article,
aside,
div,
dl,
input,
li,
nav,
ol,
p,
pre,
section,
textarea,
ul {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 14px;
}
.zhuce {
  position: relative;
  width: 100%;
  max-width: 640px;
  overflow: hidden;
}
</style>