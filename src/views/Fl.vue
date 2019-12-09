<template>
  <div class="fl">
    <van-search placeholder="搜索鲜花、蛋糕、礼品" />

    <van-tree-select height="150vw" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <van-grid v-if="activeIndex === 0">
          <van-image
            src="https://img02.hua.com/slider/19_banner_sheshou_m.jpg"
            alt="星座"
            :to="{name:'DGemini'}"
          />
          <van-grid :border="false" :column-num="3" style="height:8rem">
            <van-grid-item :to="{name:'DDL'}">
              <van-image
                round
                max-width="3.5rem"
                max-height="3.5rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png"
              />
              <van-grid-item text="送恋人鲜花" />
            </van-grid-item>
            <van-grid-item :to="{name:'DE'}">
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Elder.png"
              />
              <van-grid-item text="送长辈鲜花" />
            </van-grid-item>
            <van-grid-item :to="{name:'DH'}">
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Birthday.png"
              />
              <van-grid-item text="生日鲜花" />
            </van-grid-item>
          </van-grid>

          <van-grid :border="false" :column-num="3" style="height:8rem">
            <van-grid-item :to="{name:'DGemini'}">
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Boxedflowers.png"
                alt="星座鲜花"
              />
              <van-grid-item text="星座鲜花" />
            </van-grid-item>
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_PPF.png"
                alt="永生花"
              />
              <van-grid-item text="永生花" />
            </van-grid-item>
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Cake.png"
                alt="蛋糕"
              />
              <van-grid-item text="蛋糕" />
            </van-grid-item>
          </van-grid>

          <van-grid :border="false" :column-num="3" style="height:8rem">
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Cake_ganso.png"
                alt="元祖蛋糕"
              />
              <van-grid-item text="元祖蛋糕" />
            </van-grid-item>
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Goldfoilflower.png"
                alt="金箔花"
              />
              <van-grid-item text="金箔花" />
            </van-grid-item>
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Jewelry.png"
                alt="首饰"
              />
              <van-grid-item text="首饰" />
            </van-grid-item>
          </van-grid>

          <van-grid :border="false" :column-num="3" style="height:8rem">
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png"
                alt="巧罗巧克力"
              />
              <van-grid-item text="巧罗巧克力" />
            </van-grid-item>
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png"
                alt="创意礼品"
              />
              <van-grid-item text="创意礼品" />
            </van-grid-item>
            <van-grid-item>
              <van-image
                round
                max-width="4rem"
                max-height="4rem"
                src="https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png"
                alt="企业团购"
              />
              <van-grid-item text="企业团购" />
            </van-grid-item>
          </van-grid>
        </van-grid>

        <van-grid v-if="activeIndex === 1">
          <van-image src="https://img02.hua.com/m/category/Classification/flower.png?v" />
          <div id="d_xh_obj">
            <div class="d_xh_obj_a">
              <h4>对象</h4>
              <h5>鲜花排行榜</h5>
            </div>
            <van-grid :border="false" :column-num="3" style="height:8rem">
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png"
                  alt="全部"
                />
                <van-grid-item text="全部" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png"
                  alt="送女友鲜花"
                />
                <van-grid-item text="送女友鲜花" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Boyfriend.png"
                  alt="送男性鲜花"
                />
                <van-grid-item text="送男友鲜花" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Elder.png"
                  alt="送长辈鲜花"
                />
                <van-grid-item text="送长辈鲜花" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="4rem"
                  max-height="4rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Friend.png"
                  alt="送朋友鲜花"
                />
                <van-grid-item text="送朋友鲜花" />
              </van-grid-item>
            </van-grid>
          </div>
          <div id="d_xh_ch">
            <div class="d_xh_ch_a">
              <h5>场合</h5>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Love.png"
                    alt="爱情鲜花"
                  />
                  <van-grid-item text="爱情鲜花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Birthday.png"
                    alt="生日鲜花"
                  />
                  <van-grid-item text="生日鲜花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Visit.png"
                    alt="探望慰问"
                  />
                  <van-grid-item text="探望慰问" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Business.png"
                    alt="商务鲜花"
                  />
                  <van-grid-item text="商务鲜花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Congratulate.png"
                    alt="祝福庆贺"
                  />
                  <van-grid-item text="祝福庆贺" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Wedding.png"
                    alt="婚庆鲜花"
                  />
                  <van-grid-item text="婚庆鲜花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Apologize.png"
                    alt="道歉鲜花"
                  />
                  <van-grid-item text="道歉鲜花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Grief.png"
                    alt="哀思鲜花"
                  />
                  <van-grid-item text="哀思鲜花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_gat.png"
                    alt="港澳台鲜花"
                  />
                  <van-grid-item text="港澳台鲜花" />
                </van-grid-item>
              </van-grid>
            </div>
          </div>
          <div id="d_xh_hc">
            <div class="d_xh_ch_a">
              <h5>花材</h5>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Rose.png"
                    alt="玫瑰"
                  />
                  <van-grid-item text="玫瑰" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Carnation.png"
                    alt="康乃馨"
                  />
                  <van-grid-item text="康乃馨" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Sunflower.png"
                    alt="向日葵"
                  />
                  <van-grid-item text="向日葵" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Lily.png"
                    alt="百合"
                  />
                  <van-grid-item text="百合" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Hydrangea.png"
                    alt="绣球"
                  />
                  <van-grid-item text="绣球" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Tulips.png"
                    alt="郁金香"
                  />
                  <van-grid-item text="郁金香" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Gerbera.png"
                    alt="扶郎/太阳花"
                  />
                  <van-grid-item text="扶郎/太阳花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Calla.png"
                    alt="马蹄莲"
                  />
                  <van-grid-item text="马蹄莲" />
                </van-grid-item>
              </van-grid>
            </div>
          </div>

          <div id="d_xh_mgyss">
            <div class="d_xh_ch_a">
              <h5>玫瑰颜色</h5>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Red.png?v"
                    alt="红玫瑰"
                  />
                  <van-grid-item text="红玫瑰" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Pink.png?v"
                    alt="粉玫瑰"
                  />
                  <van-grid-item text="粉玫瑰" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_White.png?v"
                    alt="白玫瑰"
                  />
                  <van-grid-item text="白玫瑰" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Purple.png?v"
                    alt="紫玫瑰"
                  />
                  <van-grid-item text="紫玫瑰" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Yellow.png?v"
                    alt="黄玫瑰"
                  />
                  <van-grid-item text="黄玫瑰" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Champagne.png?v"
                    alt="香槟色"
                  />
                  <van-grid-item text="香槟色" />
                </van-grid-item>
              </van-grid>
            </div>
          </div>

          <div id="d_xh_lb">
            <div class="d_xh_ch_a">
              <h5>类别</h5>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bouquet.png"
                    alt="花束"
                  />
                  <van-grid-item text="花束" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Flowerbox.png"
                    alt="花盒"
                  />
                  <van-grid-item text="花盒" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_flowerbasket.png"
                    alt="桌面花篮"
                  />
                  <van-grid-item text="桌面花篮" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bottle.png"
                    alt="瓶插花"
                  />
                  <van-grid-item text="瓶插花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Fruitbasket.png"
                    alt="果篮"
                  />
                  <van-grid-item text="果篮" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_business.png"
                    alt="开业花篮"
                  />
                  <van-grid-item text="开业花篮" />
                </van-grid-item>
              </van-grid>
            </div>
          </div>

          <div id="d_xh_jg">
            <div class="d_xh_ch_a">
              <h5>价格</h5>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-tag size="medium" text-color="light">特价鲜花</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">150元以下</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">150-200元</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">250-350元</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">350-550元</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">550-800元</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">800元以上</van-tag>
                </van-grid-item>
              </van-grid>
            </div>
          </div>

          <div id="d_xh_jg">
            <div class="d_xh_ch_a">
              <h5>枝数</h5>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-tag size="medium">9枝</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">11枝</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">19枝</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">22枝</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">29枝</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">33枝</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">50枝</van-tag>
                </van-grid-item>
                <van-grid-item>
                  <van-tag size="medium">99枝以上</van-tag>
                </van-grid-item>
              </van-grid>
            </div>
          </div>
        </van-grid>

        <van-grid v-if="activeIndex === 2">
          <van-image src="https://img02.hua.com/m/category/Classification/ppf.png?v" />

          <div id="d_xh_obj">
            <div class="d_xh_obj_a">
              <h4>对象</h4>
              <h5>鲜花排行榜</h5>
            </div>
            <van-grid :border="false" :column-num="3" style="height:8rem">
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png"
                  alt="全部"
                />
                <van-grid-item text="全部" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Girlfriend.png"
                  alt="送女友"
                />
                <van-grid-item text="送女友" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Boyfriend.png"
                  alt="送男性"
                />
                <van-grid-item text="送男友" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="3.5rem"
                  max-height="3.5rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Elder.png"
                  alt="送长辈"
                />
                <van-grid-item text="送长辈" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  round
                  max-width="4rem"
                  max-height="4rem"
                  src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Friend.png"
                  alt="送朋友"
                />
                <van-grid-item text="送朋友" />
              </van-grid-item>
            </van-grid>
          </div>

          <div id="d_xh_lb_e">
            <div class="d_xh_ch_a">
              <h5>类别</h5>
              <van-grid :border="false" :column-num="3">
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bouquet.png"
                    alt="花束"
                  />
                  <van-grid-item text="花束" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_Vase.png"
                    alt="永生瓶花"
                  />
                  <van-grid-item text="永生花瓶" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_Box.png"
                    alt="经典花盒"
                  />
                  <van-grid-item text="经典花盒" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_Special.png"
                    alt="特色永生花"
                  />
                  <van-grid-item text="特色永生花" />
                </van-grid-item>
                <van-grid-item>
                  <van-image
                    src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_GiantRose.png"
                    alt="巨星玫瑰"
                  />
                  <van-grid-item text="巨型玫瑰" />
                </van-grid-item>
              </van-grid>
            </div>
          </div>
        </van-grid>
        <van-grid v-if="activeIndex === 3">
          <van-image src="https://img02.hua.com/m/category/Classification/cake.png" />
          <div id="d_xh_dg">
            <div class="d_xh_obj_a">
              <h4>品牌</h4>
            </div>
            <van-grid :column-num="3">
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_xfxb.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_ganso.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_mcake.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_lecake.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_vcaketop.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_boncake.png"
                />
              </van-grid-item>

              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_waffleboy.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_micamika.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_21cake.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_incake.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image src="https://img02.hua.com/m/category/Classification/bestcake.png" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_cheesecake.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_cakeboss.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_cake_all.png"
                />
              </van-grid-item>
            </van-grid>
          </div>
        </van-grid>
        <van-grid v-if="activeIndex === 4">
          <van-image src="https://img02.hua.com/m/category/Classification/gift.png?v" />
          <div id="d_xh_ts">
            <div class="d_xh_obj_a">
              <h4>品牌</h4>
            </div>
            <van-grid :column-num="3">
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_All.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_SWAROVSKI.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_GlamEver.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_Dior.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_MW.png"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_HelloKitty.png"
                />
              </van-grid-item>
            </van-grid>
            <div id="d_xh_tsa">
              <div class="d_xh_ch_a">
                <h5>对象</h5>
                <van-grid :border="false" :column-num="3">
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Girlfriend.png"
                      alt="送女友"
                    />
                    <van-grid-item text="送女友" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Boyfriend.png"
                      alt="送男性"
                    />
                    <van-grid-item text="送男友" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Elder.png"
                      alt="送长辈"
                    />
                    <van-grid-item text="送长辈" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Friend.png"
                      alt="送朋友"
                    />
                    <van-grid-item text="送朋友" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Customer.png"
                      alt="送客户"
                    />
                    <van-grid-item text="送客户" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Teacher.png"
                      alt="送老师"
                    />
                    <van-grid-item text="送老师" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Child.png"
                      alt="送小孩"
                    />
                    <van-grid-item text="送小孩" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Leader.png"
                      alt="送领导"
                    />
                    <van-grid-item text="送领导" />
                  </van-grid-item>
                </van-grid>
              </div>
            </div>

            <div id="d_xh_tscp">
              <div class="d_xh_ch_a">
                <h5>分类</h5>
                <van-grid :border="false" :column-num="3">
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_Musicbox.png"
                      alt="音乐盒"
                    />
                    <van-grid-item text="音乐盒" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_Goldfoilflower.png"
                      alt="金箔花"
                    />
                    <van-grid-item text="金箔花" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_3DCrystal.png"
                      alt="3D水晶内雕"
                    />
                    <van-grid-item text="3D水晶内雕" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_JewelryBeauty.png"
                      alt="首饰/美妆"
                    />
                    <van-grid-item text="首饰/美妆" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_Chocolates.png"
                      alt="巧克力"
                    />
                    <van-grid-item text="巧克力" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_dolls.png"
                      alt="公仔/睡枕"
                    />
                    <van-grid-item text="公仔/睡枕" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_HomeLife.png"
                      alt="家居生活"
                    />
                    <van-grid-item text="家居生活" />
                  </van-grid-item>
                  <van-grid-item>
                    <van-image
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_OrnamentsOthers.png"
                      alt="摆件/其他"
                    />
                    <van-grid-item text="摆件/其他" />
                  </van-grid-item>
                </van-grid>
              </div>
            </div>
          </div>
        </van-grid>
        <van-grid v-if="activeIndex === 5">
          <div id="d_xh_hl">
            <van-image src="https://img02.hua.com/m/category/Classification/hamper.png" />
            <div class="d_xh_hl_a">
              <h5>花篮</h5>
            </div>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_Hamper.png"
                  alt="礼篮"
                />
                <van-grid-item text="花篮" />
              </van-grid-item>
            </van-grid>
          </div>
        </van-grid>
        <van-grid v-if="activeIndex === 6">
          <van-image src="https://img02.hua.com/m/category/Classification/plants.png?v" />
          <div id="d_xh_lzhh">
            <div class="d_xh_lzhh_a">
              <h5>绿植花卉</h5>
            </div>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png"
                  alt="全部"
                />
                <van-grid-item text="全部" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_Plants_Green.png"
                  alt="绿色植物"
                />
                <van-grid-item text="绿色植物" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_Plants_Potted.png"
                  alt="盆栽花卉"
                />
                <van-grid-item text="盆栽花卉" />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://img02.hua.com/m/category/Classification/m_category_Plants_Succulent.png"
                  alt="多肉盆栽"
                />
                <van-grid-item text="多肉盆栽" />
              </van-grid-item>
            </van-grid>
          </div>
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "热门推荐" },
        { text: "鲜花" },
        { text: "永生花" },
        { text: "蛋糕" },
        { text: "特色礼品" },
        { text: "礼蓝" },
        { text: "绿植花卉" }
      ]
    };
  }
};
</script>
<style>
.van-tree-select__nav {
  width: 4rem;
}
#d_xh_obj {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 24rem;
}
.d_xh_obj_a {
  display: flex;
  margin-bottom: 0.85714286rem;
  padding: 0 0.85714286rem;
  box-sizing: border-box;
}
.d_xh_obj_a > h4 {
  height: 1.42857143rem;
  line-height: 1.42857143rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.d_xh_obj_a > h5 {
  position: relative;
  top: 0rem;
  left: 6.5rem;
  color: #71797f;
  display: inline-block;
  padding: 0 0.28571429rem;
  font-size: 0.85714286rem;
}
#d_xh_ch {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 34rem;
}
#d_xh_hc {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 32rem;
}
#d_xh_mgys {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 22rem;
}
#d_xh_lb {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 24rem;
}
#d_xh_jg {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 18rem;
}
#d_xh_lb_e {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 23rem;
}
#d_xh_mgyss {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
}
#d_xh_hl {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 18rem;
}
#d_xh_tscp {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 32rem;
}
#d_xh_tsa {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
  height: 30rem;
}
#d_xh_lzhh {
  padding: 0.57142857rem 1.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-sizing: border-box;
}
.van-grid-item__text {
  font-size: 10px;
}
</style>