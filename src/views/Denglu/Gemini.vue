<template>
  <div class="gemini">
    <van-nav-bar title="星座鲜花礼物专题" left-arrow @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="right" />
    </van-nav-bar>
    <van-tabs @click="onClick">
      <van-tab title="双子座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/18_shuangzi_theme_m.jpg"
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/18_shuangzi_manhua_m.jpg"
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">百变双子座 （5月21日-6月21日）</p>
            <p class="d_bbsz_des">
              幸运花：羊齿蕨、仙人掌、紫玫瑰
              <br />幸运色：黄色、橙色
              <br />幸运日：星期二
              <br />幸运数字：5、14、23、32
              <br />星座象征：多变、沟通
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="双子座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="双子座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/18_shuangzi_m_flower.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">双子座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">双子收花反应</p>
            <img
              src="https://img02.hua.com/zhuanti/xingzuo/images/18_shuangzi_manhua_m.jpg"
              style="width:42%;vertical-align: top;"
            />
            <div class="text_box" style="top: 17px;">
              <p class="title">双子座的小秘密：</p>
              <p
                class="det"
              >双子座的人喜爱变化。盎然的春意表现在双子座的人性格上的主要特征是思维善变，无拘无束，对外界包罗万象的事物的永无休止的好奇心，可以说是机敏、好动又不安的星座</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">双子座相关文章</p>
          <a href>
            <div class="detail2">
              <p>双子座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和双子，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>双子座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>双子座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>双子座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>双子座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="巨蟹座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17juxie_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/tips_juxie.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">巨蟹座 （6月22日-7月22日）</p>
            <p class="d_bbsz_des">
              配对星座：双鱼、天蝎、摩羯
              <br />幸运花：桔梗、百合
              <br />幸运颜色：白色、银色、海水蓝
              <br />幸运数字：2
              <br />
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="巨蟹座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="巨蟹座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/18_shuangzi_m_flower.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">巨蟹座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="狮子座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17shizi_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_shizi_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">狮子座 （7月23日-8月22日）</p>
            <p class="d_bbsz_des">
              配对星座：白羊、射手
              <br />幸运花：向日葵
              <br />幸运颜色：艳黄、浅黄、褐色
              <br />幸运数字：1、7、10、19、28
              <br />
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="狮子座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="狮子座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/xingyunhua_shizi_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">狮子座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="处女座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17chunv_m.jpg?830"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_chunv_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">处女座 （8月23日-9月22日）</p>
            <p class="d_bbsz_des">
              配对星座：金牛、天蝎
              <br />幸运花：风信子、大波斯菊
              <br />幸运颜色：灰色、粉色
              <br />幸运数字：7
              <br />
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="处女座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="处女座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/xingyunhua_chunv_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">处女座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="天秤座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17tiancheng_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_tiancheng_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">和平天秤座 （9月23日-10月23日）</p>
            <p class="d_bbsz_des">
              星座象征：公平、随和、会逗人开心
              <br />幸运花：非洲菊、猫尾花、火鹤花
              <br />幸运颜色：紫蓝色
              <br />幸运数字：10、6、9、3、4
              <br />
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="天秤座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="天秤座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/tiancheng_flower_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">天秤座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012219.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012209.jpg_220x240.jpg" alt />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="天蝎座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17tianxie_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/17xiaohua_tianxie_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">神秘天蝎座 （10月24日-11月22日）</p>
            <p class="d_bbsz_des">
              星座象征：富有神秘感
              <br />幸运花：非洲菊、猫尾花、火鹤花
              <br />幸运颜色：紫色、黑色
              <br />幸运数字：2、1、6
              <br />
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="天蝎座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="天蝎座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/tianxie_flower_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">天蝎座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012226.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012447.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="射手座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/19_sheshou_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_shizi_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">自由射手座 （11月23日-12月21日）</p>
            <p class="d_bbsz_des">
              星座个性：乐观、真实、喜欢挑战
              <br />幸运花：小雏菊、忽忘我、康乃馨、薰衣草
              <br />幸运颜色：紫罗兰色、紫色、咖啡色、红色、绿色、蓝色
              <br />幸运数字：3、9、8
              <br />幸运石：紫水晶、绿松石
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="射手座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="射手座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/17_sheshou_flower_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">射手座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="摩羯座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17_mjz_theme_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_mojie_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">睿智摩羯座 （12月22日-1月19日）</p>
            <p class="d_bbsz_des">
              星座象征：坚强、理智、承受、隐忍
              <br />幸运花：紫色郁金香、天竺葵
              <br />幸运颜色：咖啡色
              <br />幸运数字：8、16、26、35
              <br />幸运日：星期六
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="摩羯座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="摩羯座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/17_mojie_flower_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">摩羯座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="水瓶座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17_spz_theme_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_shizi_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">独特水瓶座 （1月20日-2月18日）</p>
            <p class="d_bbsz_des">
              配对星座：白羊、射手
              <br />幸运花：向日葵
              <br />幸运颜色：艳黄、浅黄、褐色
              <br />幸运数字：1、7、10、19、28
              <br />星座象征：圣洁、精神、污秽
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="水瓶座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="水瓶座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/xingyunhua_shizi_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">水瓶座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="双鱼座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/17shizi_m.jpg"
          alt
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_shizi_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">浪漫双鱼座 （2月19日-3月20日）</p>
            <p class="d_bbsz_des">
              配对星座：白羊、射手
              <br />幸运花：向日葵
              <br />幸运颜色：艳黄、浅黄、褐色
              <br />幸运数字：1、7、10、19、28
              <br />星座象征：浪漫、善良、多情
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="双鱼座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="双鱼座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/xingyunhua_shizi_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">双鱼座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="白羊座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/18_baiyang_m.jpg"
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_shizi_m.jpg"
            alt
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">率真白羊座 （3月21日-4月20日）</p>
            <p class="d_bbsz_des">
              配对星座：白羊、射手
              <br />幸运花：向日葵
              <br />幸运颜色：艳黄、浅黄、褐色
              <br />幸运数字：1、7、10、19、28
              <br />星座象征：热情活力
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="白羊座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="白羊座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/xingyunhua_shizi_bg.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">白羊座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
      <van-tab title="金牛座">
        <img
          border="0"
          width="100%"
          src="https://img02.hua.com/zhuanti/xingzuo/images/18_jinniu_theme_m.jpg"
          style="pointer-events:none;"
          onclick="return false"
        />
        <div class="d_bbsz">
          <img
            src="https://img02.hua.com/zhuanti/xingzuo/images/18_jinniu_themem_manhua.jpg"
            style="width:82px;float:right"
          />
          <div class="d_bbsz_text">
            <p class="d_bbsz_title">务实金牛座座 （4月21日-5月20日）</p>
            <p class="d_bbsz_des">
              配对星座：白羊、射手
              <br />幸运花：向日葵
              <br />幸运颜色：艳黄、浅黄、褐色
              <br />幸运数字：1、7、10、19、28
              <br />幸运日：星期五
            </p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-grid-item text="金牛座鲜花" />
          </van-grid-item>
          <van-grid-item>
            <van-grid-item text="金牛座礼品" />
          </van-grid-item>
        </van-grid>
        <div class="d_bbsz_bg" id="hua">
          <img
            class="d_bbsz_img"
            src="https://img02.hua.com/zhuanti/xingzuo/images/18_jinniu_theme_flower.jpg"
            alt
          />
          <div class="d_bbsz_layer">
            <p class="d_bbsz_layer_text">金牛座幸运花</p>
          </div>
        </div>
        <van-grid :border="false" :column-num="2">
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012216.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">双子座鲜花定制款</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">双子座守护花</p>
              <p class="d_bbsz_detail">苏醒玫瑰20枝、雪山玫瑰13枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">恋恋深情</p>
              <p class="d_bbsz_detail">11枝香槟玫瑰，白百合2枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">198</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012118.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运花：紫玫瑰</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">花仙子</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">328</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012223.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9012072.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.hua.com/uploadpic/newpic/9010890.jpg_220x240.jpg" />
            <p class="d_bbsz_tip">幸运色：黄色、橙色</p>
            <div class="d_bbsz_text">
              <p class="d_bbsz_name">我只中意你</p>
              <p class="d_bbsz_detail">蓝绣球2枝，粉绣球1枝，紫玫瑰9枝</p>
              <p class="d_bbsz_price">
                ￥
                <span class="d_bbsz_num" product-id="9012216" style="opacity: 1;">268</span>
              </p>
            </div>
          </van-grid-item>
        </van-grid>
        <div class="mimi_box">
          <img src="https://img02.hua.com/zhuanti/xingzuo/images/mimi_m.png" alt />
          <div class="mimi_text">
            <p class="fanying" style="margin-bottom: 20px;">巨蟹收花反应</p>
            <img src="https://img02.hua.com/zhuanti/xingzuo/images/xiaohua_juxie.jpg" alt />
            <div class="text_box" style="top: 17px;">
              <p class="title">巨蟹座的小秘密：</p>
              <p class="det">不要以为巨蟹座的人花心，只是他们的不专心影响你的看法，他只是贪新鲜和喜欢吸收资讯，这样他们才会觉得快乐。</p>
            </div>
          </div>
        </div>
        <div class="wenzhang">
          <p class="wz_title">巨蟹座相关文章</p>
          <a href>
            <div class="detail2">
              <p>巨蟹座喜欢一个人会有什么表现？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>射手和巨蟹，两个超爱浪的星座在一起会怎样？</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座的爱情观</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座女生性格，双子座女生送什么花好?</p>
            </div>
          </a>
          <a href="/">
            <div class="detail2">
              <p>巨蟹座性格分析及星座配对！</p>
            </div>
          </a>
        </div>
        <footer class="footer">
          <ul class="user-login">
            <li>
              <a href="/" id="logined">帮助</a>
            </li>
            <li>
              <a href="/" id="reged">查单</a>
            </li>
            <li>
              <a href="/">花语大全</a>
            </li>
          </ul>
          <div class="platform">
            <dl>
              <dt>
                <a href="/" class="btn-gotoapp">
                  <img src="http://img02.hua.com/m/icon/iconPhone.png" />
                </a>
              </dt>
              <dd>APP</dd>
            </dl>
            <dl>
              <dt>
                <a href="/">
                  <img src="https://img02.hua.com/m/icon/iconPc.png" />
                </a>
              </dt>
              <dd>电脑版</dd>
            </dl>
          </div>
          <div class="copyright">
            <p>巨蟹座鲜花礼物专题专区</p>Copyright © 2005~2019 花礼网(中国鲜花礼品网) 版权所有
          </div>
        </footer>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    onClick(name, title) {
      this.$toast(title);
    }
  }
};
</script>
<style>
.d_bbsz {
  padding: 8px 24px 8px 16px;
  border-bottom: 8px solid #f5f5f5;
  border: none;
  display: block;
}
.d_bbsz_text {
  border-bottom: solid 0.25rem #333;
}
.d_bbsz_title {
  font-size: 12px;
}
.d_bbsz_des {
  font-size: 10px;
  color: #777777;
  line-height: 14px;
  margin: 3px 0;
}
.d_bbsz_bg {
  position: relative;
  padding: 8px;
}
.d_bbsz_img {
  width: 100%;
  display: block;
}
* {
  padding: 0;
  margin: 0;
}
.d_bbsz_layer {
  position: absolute;
  width: -webkit-calc(84%);
  width: calc(100% - 16px);
  height: -webkit-calc(84%);
  height: calc(100% - 16px);
  top: 0;
  left: 0;
  margin: 8px;
  background: rgba(0, 0, 0, 0.2);
}
.d_bbsz_layer_text {
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  margin-top: 6.5%;
  width: 150px;
  position: relative;
  height: auto;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color: transparent;
}
.d_bbsz_tip {
  color: #fe6600;
  font-size: 10px;
  border-bottom: 1px solid #e8e8e8;
  padding: 3px 0px;
  margin: 0px 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.d_bbsz {
  padding: 6px;
}
.d_bbsz_name {
  font-size: 12px;
  color: #232323;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.d_bbsz_detail {
  color: #777;
  font-size: 10px;
  line-height: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.d_bbsz_price {
  color: #222;
  font-size: 12px;
}
.d_bbsz_num {
  opacity: 1;
}
.mimi_box {
  background: #f5f5f5;
  padding: 8px 0px;
  position: relative;
}
.mimi_box > img {
  width: 100%;
}
.mimi_text {
  width: 100%;
  padding: 0 23px;
  position: absolute;
  top: 32px;
}
.fanying {
  text-align: center;
  font-size: 16px;
  color: #232323;
  margin-bottom: 20px;
}
.mimi_text img {
  width: 42%;
  display: inline-block;
  vertical-align: top;
}
.text_box {
  display: inline-block;
  width: 40%;
  position: relative;
  top: 17px;
  left: 12px;
}
.mimi_text .title {
  font-size: 13px;
  color: #232323;
  margin-bottom: 9px;
}
.mimi_text .det {
  font-size: 11px;
  color: #9b9b9b;
}
.wenzhang {
  font-size: 12px;
}
.wenzhang .wz_title {
  font-size: 14px;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #e4e4e4;
  padding: 0 16px;
}

a {
  color: #494949;
}
.detail2 {
  padding: 9px 16px;
  padding-left: 45px;
  position: relative;
}
.detail2 {
  border-bottom: 1px solid #e4e4e4;
  color: #666;
  padding: 14px 43px;
}
.detail2:before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #666;
  position: absolute;
  top: 20px;
  left: 16px;
  z-index: 999;
}
.footer {
  padding-top: 20px;
  width: 100%;
}
.footer .user-login {
  margin-bottom: 10px;
}

.footer ul {
  padding-bottom: 10px;
}
ul {
  overflow: hidden;
}
ul,
li,
i {
  list-style: none outside none;
  padding: 0;
  margin: 0;
  font-style: normal;
}
.footer ul li {
  float: left;
  text-align: center;
  font-size: 12px;
  width: 33.3%;
}
.footer .platform {
  overflow: hidden;
  padding: 16px 10% 14px;
  color: #777777;
  font-size: 12px;
  border-bottom: 1px solid #eee;
  text-align: center;
}
.footer .platform dl {
  width: 50%;
  float: left;
}
.footer .platform:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.footer .copyright {
  font-size: 10px;
  text-align: center;
  color: #ccc;
  padding: 16px 0;
}
.d_bbsz_layer_text:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fff;
  position: absolute;
  left: -2px;
  top: 8px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.d_bbsz_layer_text:after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fff;
  position: absolute;
  right: -2px;
  top: 8px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.van-nav-bar .van-icon {
  color: black;
  font-size: 1.4rem;
}
</style>