<template>
  <div class="home">
    <header class="headerbar">
      <div class="header-left">
        <a href="#"></a>
      </div>
      <div class="header-logo">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt />
      </div>
      <div class="header-right">
        <a href="#">
          <i class="iconfont"></i>
        </a>
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
      <li>认证龙头企</li>
      <li class="conpany-info-item">14年品</li>
      <li class="conpany-info-item">3小时送</li>
      <li class="conpany-info-item">最近 条好评</li>
    </ul>
    <van-grid :border="false" :column-num="5">
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_flower.png" />
        <P>鲜花</P>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_ppf.png" />
        <p>永生花</p>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_cake.png" />
        <p>蛋糕</p>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_gift.png" />
        <p>礼品</p>
      </van-grid-item>
      <van-grid-item class="flower">
        <van-image src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png" />
        <p>巧克力</p>
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
            <span class="guo_sell_xianshi_left">显示直降</span>
            <span class="guo__right">￥159</span>
          </div>
        </div>
      </div>
      <van-grid :border="false" :column-num="3">
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
    <section class="product">
      <h3 class="product-title">送恋人/爱情鲜花</h3>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg" alt="一往情深" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">一往情深</span>
            <p class="text-overflow-line2">精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</p>
            <div class="product-item-info-promo">经典爆款，年销售冠军！</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥239</strong>
                  <s>¥315</s>
                </p>
                <p class="product-item-info-sales">已销售7.5万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9010011.jpg_220x240.jpg" alt="一心一意" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">一心一意</span>
            <p class="text-overflow-line2">玫瑰11枝，粉色勿忘我</p>
            <van-tag round type="warning">畅销爆款</van-tag>
            <div class="product-item-info-promo">经典款式 精选爆款</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥139</strong>
                  <s>¥189</s>
                </p>
                <p class="product-item-info-sales">已销售11.1万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9010855.jpg_220x240.jpg" alt="用心爱你" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">用心爱你</span>
            <p class="text-overflow-line2">99枝:33枝戴安娜+66枝红玫瑰</p>
            <div class="product-item-info-promo">与你相守知道天荒地啦</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥520</strong>
                  <s>¥869</s>
                </p>
                <p class="product-item-info-sales">已销售3.3万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012009.jpg_220x240.jpg" alt="勿忘巴黎" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">勿忘巴黎</span>
            <p class="text-overflow-line2">33枝红玫瑰</p>
            <van-tag round type="warning">畅销爆款</van-tag>
            <div class="product-item-info-promo">浪漫唯美，女神挚爱</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥298</strong>
                  <s>¥382</s>
                </p>
                <p class="product-item-info-sales">已销售6.5万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012437.jpg_220x240.jpg" alt="粉雪佳人" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">粉雪佳人</span>
            <p class="text-overflow-line2">戴安娜玫瑰11枝，百合花2枝</p>
            <div class="product-item-info-promo">清新典雅，至臻设计</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥219</strong>
                  <s>¥282</s>
                </p>
                <p class="product-item-info-sales">已销售1433件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg" alt="不变的承诺" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">不変的承诺</span>
            <p class="text-overflow-line2">99枝红玫瑰</p>
            <div class="product-item-info-promo">经典99枝，鼎力推荐！</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥539</strong>
                  <s>¥766</s>
                </p>
                <p class="product-item-info-sales">已销售6.2万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012089.jpg_220x240.jpg" alt="爱在心头" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">爱在心头</span>
            <p class="text-overflow-line2">玫瑰50枝：戴安娜粉玫瑰19枝</p>
            <div class="product-item-info-promo">上色搭配 赏心悦目</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥389</strong>
                  <s>¥479</s>
                </p>
                <p class="product-item-info-sales">已销售1.9万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012154.jpg_220x240.jpg" alt="甜美公主" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">甜美公主</span>
            <p class="text-overflow-line2">白玫瑰22枝，粉佳人粉玫瑰14枝</p>
            <div class="product-item-info-promo">甜美设计 清新典雅</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥368</strong>
                  <s>¥485</s>
                </p>
                <p class="product-item-info-sales">已销售2.2万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
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
    <section class="product">
      <h3 class="product-title">送长辈鲜花</h3>
      <h3 class="product-title">不送长辈鲜花</h3>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012440.jpg_220x240.jpg" alt="星河璀璨" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">星河璀璨</span>
            <p class="text-overflow-line2">香槟玫瑰9枝</p>
            <van-tag round type="warning">节日定制款</van-tag>
            <div class="product-item-info-promo">倾情设计，唯爱相守</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥289</strong>
                  <s>¥376</s>
                </p>
                <p class="product-item-info-sales">已销售808件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012441.jpg_220x240.jpg" alt="语笑嫣然" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">语笑嫣然</span>
            <p class="text-overflow-line2">粉佳人玫瑰9枝</p>
            <van-tag round type="warning">节日定制款</van-tag>
            <div class="product-item-info-promo">温柔相伴，笑容常在</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥198</strong>
                  <s>¥256</s>
                </p>
                <p class="product-item-info-sales">已销售1477件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012332.jpg_220x240.jpg" alt="留住好时光" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">留住好时光</span>
            <p class="text-overflow-line2">粉绣球1枝，粉雪山玫瑰</p>
            <van-tag round type="warning">热卖推荐</van-tag>
            <div class="product-item-info-promo">精选昆明A级花材</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥239</strong>
                  <s>¥306</s>
                </p>
                <p class="product-item-info-sales">已销售8616件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012092.jpg_220x240.jpg" alt="母爱" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">母爱</span>
            <p class="text-overflow-line2">紫红色康乃馨9枝</p>
            <van-tag round type="warning">母亲最爱</van-tag>
            <div class="product-item-info-promo">红粉搭配 花色明艳</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥172</strong>
                  <s>¥228</s>
                </p>
                <p class="product-item-info-sales">已销售1.5万件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012201.jpg_220x240.jpg" alt="戴情无限" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">戴情无限</span>
            <p class="text-overflow-line2">戴安娜玫瑰11枝</p>
            <van-tag round type="warning">畅销单品</van-tag>
            <div class="product-item-info-promo">高端花盒设计</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥238</strong>
                  <s>¥312</s>
                </p>
                <p class="product-item-info-sales">已销售6055件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-list">
        <div class="product-item-horizontal">
          <div class="product-item-pic">
            <img src="https://img01.hua.com/uploadpic/newpic/9012204.jpg_220x240.jpg" alt="幸福万年长" />
          </div>
          <div class="product-item-info">
            <span class="text-overflow">幸福万年长</span>
            <p class="text-overflow-line2">红色康乃馨66枝</p>
            <div class="product-item-info-promo">温暖花束 幸福万年长</div>
            <div class="product-item-info-bottom">
              <div class="product-item-info-bottom-left">
                <p class="product-item-info-prices">
                  <strong>¥338</strong>
                  <s>¥486</s>
                </p>
                <p class="product-item-info-sales">已销售3458件</p>
              </div>
              <div class="product-item-info-bottom-right">
                <i class="iconfont iconfont-buy"></i>
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
    <section class="guo_product">
      <div class="guess">
        <div class="guess-title">永生花推荐</div>
        <!-- 列表 -->
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073257.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">独创设计</van-tag>
                </div>
                <span class="guess-item-name">守护初心口红款礼盒·迪奥</span>
                <p class="product-item-info-prices">
                  <strong>¥999</strong>
                  <s>¥1099</s>
                </p>
                <p class="product-item-info-sales">已销售101件</p>
              </div>
            </a>
          </div>
        </div>
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073264.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">创意新品</van-tag>
                </div>
                <span class="guess-item-name">一鹿(路)有你永生小花</span>
                <p class="product-item-info-prices">
                  <strong>¥298</strong>
                  <s>¥309</s>
                </p>
                <p class="product-item-info-sales">已销售71件</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="guess">
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073185.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">畅销</van-tag>
                </div>
                <span class="guess-item-name">一鹿(路)有你永生小花</span>
                <p class="product-item-info-prices">
                  <strong>¥588</strong>
                  <s>¥788</s>
                </p>
                <p class="product-item-info-sales">已销售6352件</p>
              </div>
            </a>
          </div>
        </div>
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/1073263.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">创意新品</van-tag>
                </div>
                <span class="guess-item-name">永生花满月艺术台灯</span>
                <p class="product-item-info-prices">
                  <strong>¥398</strong>
                  <s>¥498</s>
                </p>
                <p class="product-item-info-sales">已销售73件</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom_guo">
        <p class="bottom_guo-btn">查看更多</p>
      </div>
    </section>
    <!-- 蛋糕推荐 -->
    <section class="guo_product">
      <div class="guess">
        <div class="guess-title">蛋糕推荐</div>
        <!-- 列表 -->
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/5602016.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">生日推荐</van-tag>
                </div>
                <span class="guess-item-name">四重奏蛋糕(约2磅)</span>
                <p class="product-item-info-prices">
                  <strong>¥228</strong>
                  <s>¥296</s>
                </p>
                <p class="product-item-info-sales">已销售2703件</p>
              </div>
            </a>
          </div>
        </div>
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/9092114.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">真爱蛋糕</van-tag>
                </div>
                <span class="guess-item-name">真爱+生日蛋糕B款(8寸)红玫瑰9枝</span>
                <p class="product-item-info-prices">
                  <strong>¥268</strong>
                  <s>¥298</s>
                </p>
                <p class="product-item-info-sales">已销售1045件</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="guess">
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/5010023.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">销量冠军</van-tag>
                </div>
                <span class="guess-item-name">生日蛋糕A8寸(2磅)心形水果鲜奶蛋糕</span>
                <p class="product-item-info-prices">
                  <strong>¥178</strong>
                  <s>¥188</s>
                </p>
                <p class="product-item-info-sales">已销售2.1万件</p>
              </div>
            </a>
          </div>
        </div>
        <div class="guess-list">
          <div class="guess-item">
            <a href>
              <div class="guess-item-img">
                <img src="https://img01.hua.com/uploadpic/newpic/5602045.jpg_220x240.jpg" alt />
              </div>
              <div class="guess-item-detail">
                <div class="guess-item-info">
                  <van-tag round type="warning">推荐</van-tag>
                </div>
                <span class="guess-item-name">浪漫果粉蛋糕(约2磅)水果蛋糕</span>
                <p class="product-item-info-prices">
                  <strong>¥218</strong>
                  <s>¥336</s>
                </p>
                <p class="product-item-info-sales">已销售1175件</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom_guo">
        <p class="bottom_guo-btn">查看更多</p>
      </div>
    </section>
    <section class="qiyetuangou">
      <img src="https://img02.hua.com/m/home/img/m_home_qiyetuangou.png" alt />
    </section>
    <section class="brand">
      <h3>为什么选择我们</h3>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {};
</script>
<style scoped>
.Lbt {
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
  justify-content: center;
  align-items: center;
  height: 1.8rem;
  overflow: hidden;
  background: #fff;
  font-size: 0.6rem;
  line-height: 2.57142857rem;
}
.conpany-info-item {
  margin-left: 2.85714286rem;
}
.van-grid-item__content--center {
  padding: 10px 4px;
}
.flower img {
  width: 2.24rem;
}
.flower p {
  font-size: 0.666rem;
  margin-top: 0.1rem;
}
.scene .scene-one {
  margin-left: 1rem;
}
.scene-item-use-title {
  position: absolute;
  bottom: 1rem;
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
  top: 0.2rem;
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
  bottom: 1.2rem;
  left: 8rem;
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
  top: 0.2rem;
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
  bottom: 1.2rem;
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
  margin: 0.22rem;
}
.product {
  margin-top: 0.5rem;
  background: #fff;
  padding-bottom: 1.42857143rem;
}
.product-title {
  font-size: 1.1rem;
  padding: -5rem 0;
  text-align: center;
  font-weight: normal;
}
.product-list {
  padding: 0 0.5rem 0.2rem;
}
.product-item-horizontal {
  display: flex;
}
.product-item-horizontal img {
  width: 11rem;
  min-width: 11.5rem;
  max-width: 11.5rem;
}
.product-item-info {
  flex: 1;
  max-width: 13rem;
  padding: 0 1.2rem;
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
  margin: 0 auto;
  font-size: 0.7rem;
  border: 1px solid #232628;
  width: 6rem;
  height: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  border-radius: 0.14285714rem;
  margin-top: 0.8rem;
}
.guess-title {
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
  height: 6rem;
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
.guess-item-name[data-v-fae5bece] {
  white-space: nowrap;
  font-size: 0.85714286rem;
  color: #232628;
  margin: 0.3rem 0 0 0;
  display: block;
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
</style>
