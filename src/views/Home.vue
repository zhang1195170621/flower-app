<template>
  <div class="home">
    <van-nav-bar title="Hua.com花礼网" left-text="返回" left-arrow>
      <van-icon name="service-o" slot="right" />
    </van-nav-bar>

    <van-swipe :autoplay="3000" indicator-color="white">
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {};
</script>
<style>
.Lbt {
  width: 100%;
  height: 200px;
}
</style>
