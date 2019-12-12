<template>
  <div class="home">
    <header class="headerbar">
      <router-link :to="{name:'Fl'}">
        <div class="header-left">
          <i class="hhh-left van-icon van-icon-bars"></i>
        </div>
      </router-link>
      <div class="header-logo">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </div>
      <div class="header-right">
        <i class="hhh-right van-icon van-icon-service-o"></i>
      </div>
    </header>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img class="Lbt" src="https://img02.hua.com/slider/19_christmas_banner_m.png" alt="圣诞节专题" />
      </van-swipe-item>
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
    <ul class="conpany-info">
      <li class="conpany-info-item">
        <i class="van-icon van-icon-checked"></i>认证龙头企业
      </li>
      <li class="conpany-info-item">
        <i class="van-icon van-icon-checked"></i>14年品
      </li>
      <li class="conpany-info-item">
        <i class="van-icon van-icon-checked"></i>3小时送
      </li>
      <li class="conpany-info-item">
        <i class="van-icon van-icon-checked"></i>34315条好评
      </li>
    </ul>
    <van-grid :border="false" :column-num="5">
      <van-grid-item class="flower">
        <router-link :to="{path:'/e'}">
          <van-image
            class="ggg-flower"
            src="https://img02.hua.com/m/home/img/m_home_category_flower.png"
          />
          <p>鲜花</p>
        </router-link>
      </van-grid-item>

      <van-grid-item class="flower">
        <router-link :to="{path:'/e'}">
          <van-image
            class="ggg-flower"
            src="https://img02.hua.com/m/home/img/m_home_category_ppf.png"
          />
          <p>永生花</p>
        </router-link>
      </van-grid-item>
      <van-grid-item class="flower">
        <router-link :to="{path:'/e'}">
          <van-image
            class="ggg-flower"
            src="https://img02.hua.com/m/home/img/m_home_category_cake.png"
          />
          <p>蛋糕</p>
        </router-link>
      </van-grid-item>
      <van-grid-item class="flower">
        <router-link :to="{path:'/e'}">
          <van-image
            class="ggg-flower"
            src="https://img02.hua.com/m/home/img/m_home_category_gift.png"
          />
          <p>礼品</p>
        </router-link>
      </van-grid-item>
      <van-grid-item class="flower">
        <router-link :to="{path:'/e'}">
          <van-image
            class="ggg-flower"
            src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png"
          />
          <p>巧克力</p>
        </router-link>
      </van-grid-item>
    </van-grid>
    <section class="scene">
      <div class="scene-one">|一秒选花</div>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_use_lover.png" />
          <span class="scene-item-use-title">送恋人</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_use_elder.png" />
          <span class="scene-item-use-title">送长辈</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_use_friends.png" />
          <span class="scene-item-use-title">送朋友</span>
        </van-grid-item>
      </van-grid>
      <div class="blessing">
        <img src="https://img02.hua.com/m/home/img/m_home_use_birthday2.png" alt />
        <span class="blessing-s">生日祝福</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_profess2.png" alt />
        <span class="blessing-b">表白求婚</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_business2.png" alt />
        <span class="blessing-k">开业商务</span>
        <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary2.png" alt />
        <span class="blessing-z">周年纪念</span>
      </div>
      <div class="guo_sell">
        <div class="guo_sell_left">
          <img src="https://img02.hua.com/m/home/img/m_home_ranklist2.png" alt />
          <p class="r">热销榜</p>
          <p class="j">集万千宠爱</p>
          <div class="scene-item-bottom">
            <span class="scene-item-bottom-label">大家都在买</span>
            <span class="scene-item-bottom-text">热销11.1万</span>
          </div>
        </div>
        <div class="guo_sell_right">
          <img src="https://img02.hua.com/m/home/img/m_home_special2.png" alt />
          <p class="guo_t">特价专区</p>
          <p class="guo_c">超值好货</p>
          <div class="guo_sell_xianshi">
            <span class="guo_sell_xianshi_left">年度直降</span>
            <span class="guo__right">￥159</span>
          </div>
        </div>
      </div>
      <van-grid :border="false" :column-num="3" class="guo_www">
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_category_new2.png" />
          <span class="scene-item-pange">新品来袭</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_category_quality2.png" />
          <span class="scene-item-pange">品味之选</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img02.hua.com/m/home/img/m_home_category_you2.png" />
          <span class="scene-item-pange">设计师甄选</span>
        </van-grid-item>
      </van-grid>
    </section>
    <!-- 送恋人 -->
    <section class="product guo_www">
      <h3 class="product-title">送恋人/爱情鲜花</h3>
      <div class="product-list" v-for="(item,index) in lianren" :key="index">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img :src="item.image" alt="一往情深" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">{{item.title}}</span>
            <p class="text-overflow-line2">{{item.xq}}</p>
            <div class="product-item-info-promo">经典爆款，年销售冠军！</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥{{item.price}}</strong>
                  <s>¥{{item.oldPrice}}</s>
                </p>
                <p class="product-item-info-sales">已销售{{item.ys}}万件</p>
                <p @click.stop="aaa(item,$event)">
                  <i
                    style="position: absolute;top: 20px;"
                    class="gouwuche van-icon van-icon-shopping-cart-o"
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-more">
        <p class="product-more-btn">查看更多</p>
      </div>
    </section>
    <!-- 送长辈 -->
    <section class="product guo_www">
      <h3 class="product-title">送长辈鲜花</h3>
      <div class="product-list" v-for="(item,index) in lianren" :key="index">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img :src="item.image" alt="星河璀璨" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">{{item.titile}}</span>
            <p class="text-overflow-line2">{{item.xq}}</p>
            <van-tag round type="warning">节日定制款</van-tag>
            <div class="product-item-info-promo">倾情设计，唯爱相守</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥{{item.price}}</strong>
                  <s>¥{{item.oldPrice}}</s>
                </p>
                <p class="product-item-info-sales">已销售{{item.ys}}万件</p>
                <p @click.stop="aaa(item,$event)">
                  <i
                    style="position: absolute;top: 20px;"
                    class="gouwuche van-icon van-icon-shopping-cart-o"
                  ></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-more">
        <p class="product-more-btn">查看更多</p>
      </div>
    </section>
    <!-- 永生花 -->
    <section>
      <div class="sy_guess">
        <h3 class="product-title">永生花推荐</h3>
        <div class="sy_guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073257.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">节日定制款</van-tag>
                  <p class="sy_guess-item-name">守护初心口红款礼盒/炽热红</p>
                </div>
                <div class="guess-item-price">￥999</div>
                <p>已销售104件</p>
                <p @click.stop="aaa(item,$event)">
                  <i
                    style="position: absolute;top: 20px;"
                    class="gouwuche van-icon van-icon-shopping-cart-o"
                  ></i>
                </p>
              </div>
            </a>
          </div>

          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073185.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">畅销</van-tag>
                  <p class="sy_guess-item-name">我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒</p>
                </div>
                <div class="guess-item-price">￥588</div>
                <p>已销售6361件</p>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073264.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">创意新品</van-tag>
                  <p class="sy_guess-item-name">一鹿(路)有你永生花小夜灯·永生花礼盒</p>
                </div>
                <div class="guess-item-price">￥298</div>
                <p>已销售72件</p>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073263.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">创意新品</van-tag>
                  <p class="sy_guess-item-name">永生花满月艺术台灯/朦胧粉·永生花台灯</p>
                </div>
                <div class="guess-item-price">￥398</div>
                <p>已销售75件</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="product-more guo_www">
        <p class="product-more-btn">查看更多</p>
      </div>
    </section>
    <section>
      <div class="sy_guess">
        <h3 class="product-title">永生花推荐</h3>
        <!-- 列表 -->
        <div class="sy_guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/9092114.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">节日定制款</van-tag>
                  <p class="sy_guess-item-name">守护初心口红款礼盒/炽热红</p>
                </div>
                <div class="guess-item-price">￥999</div>
                <p>已销售104件</p>
                <i
                  style="position: absolute;top: 20px;"
                  class="gouwuche van-icon van-icon-shopping-cart-o"
                ></i>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/5602016.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">畅销</van-tag>
                  <p class="sy_guess-item-name">真爱+生日蛋糕B款红玫瑰9枝</p>
                </div>
                <div class="guess-item-price">￥288</div>
                <p>已销售6361件</p>
              </div>
            </a>
          </div>
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/5602045.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">创意新品</van-tag>
                  <p class="sy_guess-item-name">烂漫果粉蛋糕精品花.水果蛋糕</p>
                </div>
                <div class="guess-item-price">￥298</div>
                <p>已销售1176件</p>
              </div>
            </a>
          </div>

          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/5010023.jpg_220x240.jpg" alt />
              </div>
              <div class="sy_guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">创意新品</van-tag>
                  <p class="sy_guess-item-name">蛋糕花满月艺术品</p>
                </div>
                <div class="guess-item-price">￥138</div>
                <p>已销售2.1万件</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="product-more">
        <p class="product-more-btn">查看更多</p>
      </div>
    </section>

    <section class="qiyetuangou">
      <img src="https://img02.hua.com/m/home/img/m_home_qiyetuangou.png" alt />
    </section>
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
    <footer class="footer">
      <div class="footer-links">
        <p class="footer-links-item">企业团队</p>
        <p class="footer-links-item">设计师款</p>
        <p class="footer-links-item">同城鲜花</p>
        <p class="footer-links-item">花语大全</p>
      </div>
      <div class="footer-links">
        <p class="footer-links-item">花礼优势</p>
        <p class="footer-links-item">勇敢爱</p>
        <p class="footer-links-item">常见问题</p>
        <p class="footer-links-item">关于我们</p>
      </div>
      <div class="footer-entry">
        <div class="footer-left">
          <van-icon name="records" style="left:0.6rem;" size="12px;" />
          <p style="font-size:0.6rem">客户端</p>
        </div>
        <div class="footer-right">
          <van-icon name="service-o" style="left:0.2rem" />
          <p style="font-size:0.6rem">客服</p>
        </div>
      </div>
      <p class="footer-copyright">
        Copyright © 2005~2019 花礼网（中国鲜花礼品网）版权所有
        <br />中国鲜花网领先品牌，鲜花速递专家！
        <br />深圳市百易信息技术有限公司 粤ICP备09171662号
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      lianren: [
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg",
          title: "一往情深",
          xq: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
          price: 239,
          oldPrice: 315,
          ys: 7.5
        },
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg",
          title: "一心一意",
          xq: "玫瑰11枝，粉色勿忘我",
          price: 139,
          oldPrice: 189,
          ys: 11.1
        },
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9010855.jpg_220x240.jpg",
          title: "用心爱你",
          xq: "99枝：33枝戴安娜+66枝红玫瑰",
          price: 520,
          oldPrice: 869,
          ys: 3.3
        },
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg",
          title: "忘情巴黎",
          xq: "33枝红玫瑰",
          price: 298,
          oldPrice: 382,
          ys: 6.5
        },
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9012437.jpg_220x240.jpg",
          title: "粉雪佳人",
          xq: "戴安娜粉玫瑰11枝,白色百合2枝",
          price: 219,
          oldPrice: 282,
          ys: 1.5
        },
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9012089.jpg_220x240.jpg",
          title: "爱在心头",
          xq: "玫瑰50枝:戴安娜粉玫瑰19枝",
          price: 389,
          oldPrice: 479,
          ys: 1.9
        },
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg",
          title: "不变的承诺",
          xq: "99枝红玫瑰",
          price: 539,
          oldPrice: 766,
          ys: 6.2
        },
        {
          image:
            "https://img01.hua.com/uploadpic/newpic/9012450.jpg_220x240.jpg",
          title: "韩式系列/初心不负",
          xq: "韩式花束系列花艺师全新打造",
          price: 198,
          oldPrice: 298,
          ys: 115
        }
      ],
      show: false
    };
  },
  methods: {
    /* aaa() {
      this.show = !this.show;
    }, */
    aaa: function(item, $event) {
      var start = $event.currentTarget;
      var gwc = document.querySelectorAll(
        ".van-tabbar-item__icon .van-icon "
      )[2];
      var img = item.image;
      this.parabola(start, gwc, img);
    },
    parabola(startEle, endEle, image) {
      let _this = this;
      let start = startEle,
        end = endEle;
      //获取坐标
      let startPoint = start.getBoundingClientRect(),
        startX = startPoint.left,
        startY = startPoint.top;
      let endPoint = end.getBoundingClientRect(),
        endX = endPoint.left - startX,
        endY = startY - endPoint.top;
      //
      let x1 = endX > 0 ? 10 : -10,
        y1 = endY > 0 ? 0.05 : -0.005;
      //根据坐标计算出抛物线方程式的a,b,c值，由于我们把坐标系平移到起点坐标，所以c值为0
      let a = (x1 * endY - y1 * endX) / (endX * endX * x1 - x1 * x1 * endX),
        b = (y1 - a * x1 * x1) / x1;
      startEle = endEle = startPoint = endPoint = null;
      //创建小球
      function createBall() {
        var ball = new Image();
        ball.src = image;
        //小球样式
        ball.style =
          "position: fixed;width: 20px;height: 20px;box-sizing: border-box;border: 1px solid #FFF;border-radius: 50%;background: #909090;z-index: 999;";
        start.appendChild(ball);
        return ball;
      }
      let ball = createBall(); //创建动画小球函数
      let x = 0,
        y = 0,
        delay = 800, //动画持续时间
        timeSpace = 10, //圆球移动间隔
        step = endX / (delay / timeSpace);
      let timer = setInterval(function() {
        if (Math.abs(x) >= Math.abs(endX)) {
          //水平方向移动超过最大距离则取消移动，到达购物车
          clearInterval(timer);
          ball.parentNode && ball.parentNode.removeChild(ball); //移除圆球
          ball = null;
        } else {
          x += step; //水平移动
          y = a * x * x + b * x; //垂直移动
          ball.style.top = startY - y + "px";
          ball.style.left = x + startX + "px";
        }
      }, timeSpace);
    }
  }
};
</script>
<style scoped>
.guo_www {
  border-bottom: solid 0.4rem #e9ecf0;
}
.ggg-flower {
  max-width: 2.4rem;
}
.gouwuche {
  margin-left: 7rem;
  font-size: 1.2rem;
}
.conpany-info-item i {
  font-size: 0.12rem;
  color: #435448;
}
.hhh-left {
  margin-left: 1rem;
  font-size: 1.46rem;
  color: #fff;
}
.hhh-right {
  margin-right: 1rem;
  font-size: 1.4rem;
}
bt {
  width: 100%;
  height: 180px;
}
.home {
  overflow-y: auto;
  z-index: 1;
  flex: 1;
  margin-bottom: 3rem;
}
.headerbar {
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  background: #435448;
  overflow: hidden;
  color: #fff;
}
.headerbar > .header-logo {
  flex: 1;
  text-align: center;
}
.headerbar > .header-logo img {
  width: 9.71428571rem;
  vertical-align: middle;
}
.conpany-info {
  display: flex;
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
  height: 1.8rem;
  overflow: hidden;
  background: #fff;
  font-size: 0.6rem;
  line-height: 2.57142857rem;
}
.conpany-info-item {
  margin-left: 1.3rem;
}

.van-grid-item__content--center {
  padding: 10px 4px;
}
.flower img {
  width: 2.24rem;
}
.flower p {
  font-size: 0.666rem;
  text-align: center;
}
.scene .scene-one {
  margin-left: 1rem;
}
.scene-item-use-title {
  position: absolute;
  bottom: 1.2rem;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.blessing {
  display: flex;
  justify-content: center;
  position: relative;
}
.blessing img {
  width: 5.4rem;
  height: 6rem;
  padding: 0 0.2rem;
}
.blessing .blessing-s {
  font-size: 14px;
  position: absolute;
  left: 1.2rem;
  top: 0.6rem;
}
.blessing .blessing-b {
  font-size: 14px;
  position: absolute;
  left: 7.2rem;
  top: 0.6rem;
}
.blessing .blessing-k {
  font-size: 14px;
  position: absolute;
  left: 13rem;
  top: 0.6rem;
}
.blessing .blessing-z {
  font-size: 14px;
  position: absolute;
  left: 18.8rem;
  top: 0.6rem;
}
.guo_sell {
  display: flex;
  padding: 0.4rem;
  position: relative;
}
.guo_sell_left img {
  border: solid 1px #e9ecf0;
  width: 11.2rem;
  height: 9rem;
}
.guo_sell_right img {
  border: solid 1px #e9ecf0;
  width: 11.2rem;
  height: 9rem;
  border-left: 0;
}
.guo_sell_left .r {
  position: absolute;
  left: 1.2rem;
  top: 0.6rem;
  font-size: 0.92rem;
}
.guo_sell_left .j {
  position: absolute;
  left: 1.2rem;
  top: 1.6rem;
  font-size: 0.7rem;
  color: #71797f;
}
.scene-item-bottom .scene-item-bottom-label {
  position: absolute;
  top: 8rem;
  left: 1.2rem;
  font-size: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background: #ff734c;
  padding: 0.07142857rem 0.42857143rem;
  color: #fff;
  margin-right: 2.14285714rem;
}
.scene-item-bottom .scene-item-bottom-text {
  position: absolute;
  bottom: 0.8rem;
  left: 7.6rem;
  z-index: 1;
  font-size: 0.71428571rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guo_sell_right .guo_t {
  position: absolute;
  left: 12.6rem;
  top: 0.6rem;
  font-size: 0.92rem;
}
.guo_sell_right .guo_c {
  position: absolute;
  left: 12.6rem;
  top: 1.6rem;
  font-size: 0.7rem;
  color: #71797f;
}
.guo_sell_xianshi .guo_sell_xianshi_left {
  position: absolute;
  top: 8rem;
  left: 12.6rem;
  font-size: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background: #ff734c;
  padding: 0.07142857rem 0.42857143rem;
  color: #fff;
  margin-right: 2.14285714rem;
}
.guo__right {
  position: absolute;
  bottom: 0.8rem;
  left: 20rem;
  z-index: 1;
  font-size: 0.71428571rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scene-item-pange {
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  right: 0;
  background: rgba(35, 38, 40, 0.8);
  color: #fff;
  text-align: center;
  font-size: 0.85714286rem;
  padding: 0.1rem;
  margin: 0.5rem;
}
.product {
  margin-top: 0.5rem;
  background: #fff;
  padding-bottom: 1.42857143rem;
}
.product-title {
  font-size: 1rem;
  text-align: center;
  font-weight: normal;
  margin: 1.5rem;
}
.product-list {
  padding: 0 0.5rem 0.2rem;
}
.product-item-horizontal {
  display: flex;
  box-shadow: 0px 4px 6px 0px #dee2e5;
  margin: 0.2rem 0;
}
.product-item-horizontal img {
  width: 11rem;
  min-width: 11.5rem;
  max-width: 11.5rem;
}
.product-item-info {
  flex: 1;
  margin: 0 1rem;
  position: relative;
}
.text-overflow {
  font-weight: 300;
  font-size: 0.6rem;
  padding-top: 1.28571429rem;
}
.text-overflow-line2 {
  font-weight: 300;
  font-size: 0.6rem;
  margin: 0;
  padding: 0;
}
.product-item-info-promo {
  margin-top: 0.7rem;
  padding: 0.7rem 0;
  border-top: 1px solid #e9ecf0;
  border-bottom: 1px solid #e9ecf0;
  font-size: 0.7rem;
  font-weight: 500;
}
.product-item-info-bottom {
  position: relative;
  margin-top: 1.8rem;
}
.product-item-info-prices {
  margin: 0;
  padding: 0;
}
.product-item-info-prices > strong {
  font-size: 1.2rem;
  color: #ff734c;
  font-weight: 500;
}
.product-item-info-prices > s {
  font-size: 0.8rem;
  margin-left: 0.2rem;
  font-weight: 100;
}

.product-item-info-sales {
  font-size: 0.71428571rem;
  color: #71797f;
  margin: 0;
  padding: 0;
}
.van-tag {
  margin-top: 0.4rem;
}
.product-more-btn {
  display: block;
  margin: 1.8rem auto 0.8rem;
  font-size: 0.7rem;
  border: 1px solid #232628;
  width: 6rem;
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  border-radius: 0.14285714rem;
}
.sy_guess-item-detail {
  height: 6.5rem;
  padding: 0.42857143rem 0.57142857rem;
}
.sy_guess-item-name {
  white-space: nowrap;
  font-size: 0.85714286rem;
  color: #232628;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* .guo_guess-title {
  text-align: center;
  height: 3.6rem;
  font-size: 1rem;
  color: #232628;
  padding: -0 1.14285714rem;
  line-height: 3.6rem;
}
.guo_product {
  margin-top: 0.57142857rem;
  background: #fff;
}

.guo_guess-item-price {
  margin-top: 0.42857143rem;
  font-size: 1rem;
  color: #ff734c;
}

.guo_uess-item-info {
  font-size: 0.85714286rem;
  color: #232628;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.guo_guess-item-img img {
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
.guo_guess-list {
  font-size: 0;
  padding: 0 1.2%;
}
.guo_guess-title {
  height: 4rem;
  font-size: 1.14285714rem;
  color: #232628;
  padding: 0 1.14285714rem;
  line-height: 4rem;
}*/
.sy_guess {
  margin-top: 0.57142857rem;
  background-color: #fff;
  overflow: hidden;
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
.guo_guess-item-name[data-v-fae5bece] {
  white-space: nowrap;
  font-size: 0.85714286rem;
  color: #232628;
  margin: 0.3rem 0 0 0;
  display: block;
}
.brand {
  overflow: hidden;
}
.bottom_guo .bottom_guo-btn {
  display: block;
  margin: 1rem auto;
  font-size: 0.85714286rem;
  border: 1px solid #232628;
  width: 6.71428571rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 0.14285714rem;
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
.footer {
  background: #fff;
  margin-top: 0.57142857rem;
}
.footer-links {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0.5rem 0rem;
}
.footer-links-item {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.3rem 0.4rem;
  margin: 0 1rem;
  background: #e9ecf0;
  font-size: 0.6rem;
  text-align: center;
}
.footer-copyright {
  padding: 1rem 0;
  font-size: 0.71428571rem;
  color: #b4babf;
  text-align: center;
}
.footer-entry {
  margin-top: 1rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: space-around;
}
</style>
