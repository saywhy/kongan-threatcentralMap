<template>
  <div class="home">
    <div style="width: 200px;position: absolute;left: 0;top: 0;">
      <img src="../common/image/kongan.png"
           alt=""
           height="50">
    </div>
    <span class="icon_full"
          @click="getFullCreeen"
          v-if="full_if">
      <img v-if="full_if"
           src="../assets/img/full.png"
           alt="">
      <span class="full_text">
        {{fun_text}}
      </span>
    </span>
    <div class="main">
      <p class="main_top">威胁情报</p>
      <div class="main_bom">
        <div class="main_bom_item">
          <p class="main_bom_item_text">情报总数
            <span>{{total_unit.total_intelligence_num_unit}}</span>
          </p>
          <p class="main_bom_item_num">
            <span v-for=" item in total_intelligence_num"
                  class="main_bom_item_num_span">{{item}}</span>
          </p>
        </div>
        <div class="main_bom_item">
          <p class="main_bom_item_text">互联网资产总数
            <span>{{total_unit.total_net_assets_unit}}</span>
          </p>
          <p class="main_bom_item_num">
            <span v-for=" item in total_net_assets"
                  class="main_bom_item_num_span">{{item}}</span>
          </p>
        </div>
        <div class="main_bom_item">
          <p class="main_bom_item_text">风险资产总数
            <span>{{total_unit.total_risk_attack_unit}}</span>
          </p>
          <p class="main_bom_item_num">
            <span v-for=" item in total_risk_attack"
                  class="main_bom_item_num_span">{{item}}</span>
          </p>
        </div>
        <div class="main_bom_item">
          <p class="main_bom_item_text">威胁预警总数
            <span>{{total_unit.total_threat_warning_unit}}</span>
          </p>
          <p class="main_bom_item_num">
            <span v-for=" item in total_threat_warning"
                  class="main_bom_item_num_span">{{item}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="title">
    </div>
    <!-- 主要内容 -->
    <div class="container">
      <!-- 左边 -->
      <div class="content_left">
        <!-- 左上 -->
        <div class="content_left_top item_common">
          <img class="border_line_left"
               src="../assets/img/border_line.png"
               alt="">
          <img class="border_line_mid"
               src="../assets/img/border_line.png"
               alt="">
          <img class="border_line_right"
               src="../assets/img/border_line.png"
               alt="">
          <div class="title_top">
            <img src="../assets/img/title_icon.png"
                 alt="">
            <span>威胁概览</span>
          </div>
          <div class="content_left_top_left">
            <div id="pie_left"></div>
          </div>
          <div class="content_left_top_right">
            <div id="pie_right"></div>
          </div>
        </div>
        <!-- 左中 -->
        <div class="content_left_mid item_common">
          <img class="border_line_left"
               src="../assets/img/border_line.png"
               alt="">
          <img class="border_line_right"
               src="../assets/img/border_line.png"
               alt="">
          <div class="title_top">
            <img src="../assets/img/title_icon.png"
                 alt="">
            <span>预警统计</span>
          </div>
          <div class="content_left_mid_mid">
            <div class="alarm_top">
              <div class="alarm_item alarm_item_name">
                <span>信誉预警</span>
              </div>
              <div class="alarm_item alarm_item_echarts"
                   id="alarm_type_f"></div>
              <div class="alarm_item alarm_item_num">
                <span>{{main_warning_data.total.alert}}</span>
              </div>
            </div>
            <div class="alarm_mid">
              <div class="alarm_item alarm_item_name">
                <span>漏洞预警</span>
              </div>
              <div class="alarm_item alarm_item_echarts"
                   id="alarm_type_s"></div>
              <div class="alarm_item alarm_item_num">
                <span>{{main_warning_data.total.loophole}}</span>
              </div>
            </div>
            <div class="alarm_bom">
              <div class="alarm_item alarm_item_name">
                <span>暗网预警</span>
              </div>
              <div class="alarm_item alarm_item_echarts"
                   id="alarm_type_t"></div>
              <div class="alarm_item alarm_item_num">
                <span>{{main_warning_data.total.darknet}}</span>
              </div>
            </div>
          </div>
          <div class="content_left_mid_bom">
            <div class="top_bg">
              <el-row :gutter="0"
                      style="border-bottom:1px solid #6A81B0;">
                <el-col :xs="8"
                        :sm="8"
                        :md="8"
                        :lg="8"
                        :xl="8"
                        :offset="8">
                  <span>威胁信誉预警</span>
                </el-col>
                <el-col :xs="8"
                        :sm="8"
                        :md="8"
                        :lg="8"
                        :xl="8">
                  <span>漏洞预警</span>
                </el-col>
              </el-row>
            </div>
            <div class="bom_bg">
              <el-row :gutter="0">
                <el-col :xs="8"
                        :sm="8"
                        :md="8"
                        :lg="8"
                        :xl="8">
                  <span>{{alarmTypeData.name}} </span>
                </el-col>
                <el-col :xs="8"
                        :sm="8"
                        :md="8"
                        :lg="8"
                        :xl="8">
                  <span>{{main_warning_data.effect_assets.alert}}</span>
                </el-col>
                <el-col :xs="8"
                        :sm="8"
                        :md="8"
                        :lg="8"
                        :xl="8">
                  <span>{{main_warning_data.effect_assets.high_loophole}}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <!-- 左下 -->
        <div class="content_left_bom item_common">
          <img class="border_line_left"
               src="../assets/img/border_line.png"
               alt="">
          <img class="border_line_right"
               src="../assets/img/border_line.png"
               alt="">
          <div class="title_top">
            <img src="../assets/img/title_icon.png"
                 alt="">
            <span>威胁态势</span>
            <div class="risk_trend"
                 id="risk_trend">
            </div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="content_mid">
        <div class="box_map_bg">
          <div class="map_img_bg">
          </div>
          <div class="content_mid_map"
               id="china_map">
          </div>
        </div>

        <div class="content_mid_bom">
          <div class="content_mid_bom_top">
            <el-row :gutter="0">
              <el-col :xs="16"
                      :sm="16"
                      :md="16"
                      :lg="16"
                      :xl="16">
                <p>情报更新和预警</p>
              </el-col>
              <el-col :xs="8"
                      :sm="8"
                      :md="8"
                      :lg="8"
                      :xl="8">
                <p>预警扩展和关联</p>
              </el-col>
            </el-row>
          </div>
          <div class="content_mid_bom_bom">
            <div class="left">
              <div class="block_left_content">
                <span class="left_item"
                      v-for="item in real_time_threat"
                      :class="item.threat?'mao_box_red':''">
                  {{item.name}}
                </span>
              </div>
            </div>
            <div class="mid">
            </div>
            <div class="right"
                 id="info_relation">
            </div>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="content_right">
        <!-- 右上 -->
        <div class="content_right_top item_common">
          <img class="border_line_left"
               src="../assets/img/border_line.png"
               alt="">
          <img class="border_line_right"
               src="../assets/img/border_line.png"
               alt="">
          <div class="title_top">
            <img src="../assets/img/title_icon.png"
                 alt="">
            <span>全球威胁动态</span>
          </div>
          <div class="bom"
               style="height: 218px;overflow: hidden;">
            <div class="swiper_box"
                 ref="goodSwiper">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide "
                       v-for="(item,index) in newsData"
                       v-bind:key="item.name">
                    <div class="bom_item list-item">
                      <img class="bar_left"
                           src="../assets/img/bar_left.png"
                           alt="">
                      <p class="item_top">
                        <img src="../assets/img/li_title.png"
                             alt="">
                        <span>{{item.name}}</span>
                      </p>
                      <p class="item_bom">
                        <span>{{item.time}}</span>
                        <!-- <span>{{index}}</span> -->
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右中 -->
        <div class=" content_right_mid item_common">
          <img class="border_line_left"
               src="../assets/img/border_line.png"
               alt="">
          <img class="border_line_right"
               src="../assets/img/border_line.png"
               alt="">
          <div class="title_top">
            <img src="../assets/img/title_icon.png"
                 alt="">
            <span>威胁分布</span>
          </div>
          <div class="threat_content"
               id="threat">
          </div>
        </div>
        <!-- 右下 -->
        <div class=" content_right_bom item_common">
          <img class="border_line_left"
               src="../assets/img/border_line.png"
               alt="">
          <img class="border_line_right"
               src="../assets/img/border_line.png"
               alt="">
          <div class="title_top">
            <img src="../assets/img/title_icon.png"
                 alt="">
            <span>威胁排行</span>
          </div>
          <div>
            <el-table :data="tableData"
                      style="width: 100%;"
                      :row-style="rowClass"
                      :show-overflow-tooltip="true">
              <el-table-column prop="ip"
                               label="资产名称"
                               :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="type"
                               label="类型"
                               :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="num"
                               label="威胁数量"
                               :show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="src"
                               label="归属"
                               :show-overflow-tooltip="true">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style  lang="less">
.home {
  height: 1030px;
  width: 1920px;
  position: relative;
  overflow: hidden;
  color: #fff;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  background: url(../assets/img/bg4.png) no-repeat 0px 0px;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  padding-top: 50px;
  .icon_full {
    width: 100px;
    height: 37px;
    position: absolute;
    right: 35px;
    top: 7px;
    line-height: 37px;
    background: url(../assets/img/full_bg.png) no-repeat 0px 0px;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    cursor: pointer;
    img {
      vertical-align: middle;
    }
  }
  * {
    box-sizing: border-box;
  }
  div {
    box-sizing: border-box;
  }
  .main {
    width: 720px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 99999;
    background: url(../assets/img/title_text_bg.png) no-repeat 0px 0px;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    .main_top {
      height: 50px;
      margin-top: 28px;
      font-size: 35px;
      color: #fff;
      font-family: PingFang;
    }
    .main_bom {
      position: absolute;
      bottom: 0;
      height: 70px;
      width: 100%;
      .main_bom_item {
        float: left;
        width: 25%;
        height: 70px;
        text-align: center;
        padding-bottom: 30px;
        .main_bom_item_text {
          font-size: 14px;
          color: #fff;
          margin-bottom: 10px;
        }
        .main_bom_item_num {
          .main_bom_item_num_span {
            display: inline-block;
            min-width: 20px;
            margin-right: 5px;
            text-align: center;
            font-family: LcdD;
            font-size: 30px;
            color: #ffffff;
            line-height: 32px;
            background: url(../assets/img/number.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
          }
        }
      }
    }
  }
  .title {
    height: 46px;
    width: 100%;
    background: url(../assets/img/title_bg.png) no-repeat 0px 0px;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }
  //   公共部分
  .item_common {
    background: url(../assets/img/item_bg_s.png) no-repeat 0px 0px;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    padding: 0 24px;
    width: 500px;
    height: 300px;
    position: relative;
    .border_line_left {
      height: 260px;
      width: 20px;
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
    .border_line_mid {
      position: absolute;
      height: 260px;
      width: 20px;
      left: 50%;
      margin-left: -10px;
      top: 50%;
      transform: translateX(-50%);
      transform: translateY(-50%);
    }
    .border_line_right {
      width: 20px;
      height: 260px;
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
    }
    .title_top {
      height: 64px;
      text-align: left;
      font-size: 16px;
      color: #ffffff;
      line-height: 64px;
      img {
        width: 28px;
        height: 14px;
        margin-right: 5px;
      }
    }
  }
  .container {
    padding: 0 40px;
    //   左边
    .content_left {
      width: 500px;
      height: 944px;
      float: left;
      // 左上
      .content_left_top {
        .content_left_top_left {
          float: left;
          height: 236px;
          width: 50%;
          #pie_left {
            height: 236px;
            width: 100%;
          }
        }
        .content_left_top_right {
          height: 236px;
          width: 50%;
          float: left;
          #pie_right {
            height: 236px;
            width: 100%;
          }
        }
      }
      // 左中
      .content_left_mid {
        margin: 20px 0;
        position: relative;
        .content_left_mid_mid {
          height: 160px;
          padding: 5px 0;
          .alarm_item {
            float: left;
            height: 40px;
            line-height: 44px;
            span {
              font-size: 14px;
            }
          }
          .alarm_item_name {
            width: 100px;
          }
          .alarm_item_echarts {
            width: 290px;
            background: url(../assets/img/alarm_bg.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
          }
          .alarm_item_num {
            width: 55px;
          }
          .alarm_top {
            height: 50px;
            padding: 2px 0;
          }
          .alarm_mid {
            height: 50px;
            padding: 2px 0;
          }
          .alarm_bom {
            height: 50px;
            padding: 2px 0;
          }
        }
        .content_left_mid_bom {
          height: 74px;
          width: 500px;
          position: absolute;
          bottom: 0;
          left: 0;
          .top_bg {
            height: 37px;
            line-height: 37px;
            background: #275097;
          }
          .bom_bg {
            height: 37px;
            line-height: 37px;
            background: url(../assets/img/bom_bg.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
          }
        }
      }
      // 左下
      .content_left_bom {
        .risk_trend {
          height: 236px;
          width: 100%;
        }
      }
    }
    // 中间
    .content_mid {
      height: 944px;
      width: 800px;
      margin: 0 20px;
      position: relative;
      overflow: hidden;
      float: left;
      .box_map_bg {
        height: 642px;
        width: 100%;
        position: relative;
        overflow: hidden;
        .map_img_bg {
          position: absolute;
          top: 92px;
          left: -213px;
          height: 833px;
          width: 1268px;
          background: url(../assets/img/map_img_bg2.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
        }
        .content_mid_map {
          height: 460px;
          width: 100%;
          margin-top: 138px;
          margin-bottom: 45px;
        }
      }

      .content_mid_bom {
        background: url(../assets/img/mid_bom_bg.png) no-repeat 0px 0px;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        height: 300px;
        width: 100%;
        .content_mid_bom_top {
          background: url(../assets/img/mid_bom_top_bg.png) no-repeat 0px 0px;
          background-size: 100% 100%;
          -moz-background-size: 100% 100%;
          height: 42px;
          line-height: 42px;
          font-size: 16px;
        }
        .content_mid_bom_bom {
          height: 270px;
          padding: 10px;

          .left {
            float: left;
            width: 500px;
            height: 100%;
            overflow: hidden;
            text-align: left;
            position: relative;
            font-family: PingFang;
            font-size: 12px;
            color: #ffffff;
            .block_left_content {
              height: 100%;
              width: 500px;

              .left_item {
                display: inline-block;
                padding: 0 3px;
                background: rgba(255, 255, 255, 0.12);
                border-radius: 4px;
                margin-right: 2px;
                margin-bottom: 12px;
              }
              .mao_box_red {
                color: red;
                border: 1px solid red;
                background: transparent;
              }
            }
          }
          .mid {
            background: url(../assets/img/arrow.png) no-repeat 0px 0px;
            background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            float: left;
            width: 42px;
            height: 200px;
            margin-left: 10px;
            margin-top: 17px;
          }
          .right {
            float: right;
            width: 216px;
            height: 100%;
          }
        }
      }
    }
    // 右边
    .content_right {
      height: 944px;
      width: 500px;
      float: left;
      // 右上
      .content_right_top {
        overflow: hidden;
        .bom {
          .swiper_box {
            width: 100%;
            height: 100%;
            // border: 1px solid red;
            .swiper-container {
              width: 100%;
              height: 100%;
              .swiper-slide {
                .bom_item {
                  background-color: #00357f;
                  border-radius: 4px;
                  height: 52px;
                  margin: 2px 0;
                  padding: 10px 0;
                  position: relative;
                  p {
                    text-align: left;
                  }
                  .bar_left {
                    position: absolute;
                    left: 0;
                    top: 0;
                  }
                  .item_top {
                    font-size: 14px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    img {
                      margin: 0 10px;
                    }
                  }
                  .item_bom {
                    padding-left: 36px;
                    opacity: 0.64;
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
      // 右中
      .content_right_mid {
        margin: 20px 0;
        .threat_content {
          height: 235px;
        }
      }
      // 右下
      .content_right_bom {
        .el-table {
          color: #fff;
          background-color: rgba(6, 33, 65, 0) !important;
          border-radius: 3px;
        }
        .el-table th {
          color: #2684ff;
        }
        .el-table th,
        .el-table tr {
          background-color: rgba(6, 33, 65, 0);
          font-size: 14px;
        }
        .el-table--enable-row-hover .el-table__body tr:hover > td {
          background-color: rgba(34, 72, 137, 0.56) !important;
          cursor: pointer;
        }
        .el-table td,
        .el-table th.is-leaf {
          border-bottom: 1px solid rgba(151, 151, 151, 0.36);
          text-align: center;
          font-size: 10px;
        }
        .el-table--border::after,
        .el-table--group::after,
        .el-table::before {
          content: '';
          position: absolute;
          background-color: #ebeef5;
          z-index: -1;
        }
      }
    }
  }
}
</style>

<script>
var echarts = require("echarts");
import "echarts/map/js/china.js";
import "../../static/china.js";
import "../../static/echarts-auto-tooltip.js";
import animate from "animate.css";
import Swiper from "swiper";
// import { formatDate } from 'common/date.js';
export default {
  name: "home",
  data () {
    return {
      // 情报总数
      total_intelligence_num: [0],
      total_net_assets: [0],
      total_risk_attack: [0],
      total_threat_warning: [0],
      total_unit: {
        total_intelligence_num_unit: "",
        total_net_assets_unit: "",
        total_risk_attack_unit: "",
        total_threat_warning_unit: ""
      },
      alarmTypeData: {
        name: "影响资产数",
        fName: " 高危信誉",
        sName: "高危漏洞",
        tName: "暗网",
        fNum: 123,
        sNum: 2332,
        tNum: 12213
      },
      newsData: [],
      tableData: [],
      n: 0,
      fun_text: "全屏",
      full_if: true,
      real_time_threat: [],
      main_warning_data: {
        effect_assets: {},
        list: [],
        total: [
          {
            ransomwareurl_total: "",
            botnet_total: "",
            botnet_total: ""
          }
        ]
      },
      list_time: [],
      list_botnet_count: [],
      list_high_loophole_count: [],
      list_ransomwareurl_count: [],
      check_alert_data: -999,
      threat_rank_data: [],
      threat_distribution_data: [],
      map_data: {},
      count: 0,
      name_demo: 0,
      swiper_count: 0,
      conut_num: 0
    };
  },
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 9000
    }
  },
  created () { },
  mounted () {
    // 检测最新告警
    this.check_alert();
    // 左上
    this.pie_left_echarts();
    this.pie_right_echarts();
    // 左下
    this.risk_trend_echarts();
    // 中上
    this.china_eachrts();
    // 右下
    this.total_intelligence_num_get();
    this.total_risk_attack_get();
    // 威胁预警总数
    this.threat_warning_count();
    // 互联网总数
    this.internet_assets_count();
    // 安全动态
    this.threat_dynamics();
    // 首要预警
    this.main_warning();
    // 威胁排行
    this.threat_rank();
    // 威胁分布
    this.threat_distribution();
    this.threat_dynamics();
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!this.checkFull()) {
        this.outfull();
      }
    };
    setInterval(() => {
      this.check_alert();
    }, 5000);
  },
  watch: {
    newsData () {
      // console.log(this.newsData);
    }
  },
  methods: {
    unit_common (num) {
      var obj = {};
      if (num < 10000) {
        obj.num = num + "";
        obj.unit = "";
      }
      if (10000 <= num && num < 100000000) {
        obj.num = parseInt(num / 10000) + "";
        obj.unit = "(万)";
      }
      if (num >= 100000000) {
        obj.num = parseInt(num / 100000000) + "";
        obj.unit = "(亿)";
      }
      return obj;
    },
    // 情报总数
    total_intelligence_num_get () {
      // this.$axios.get('https://47.105.196.251/demonstration/intelligence-count ')
      this.$axios
        .get("/demonstration/intelligence-count ")
        .then(response => {
          var str = this.unit_common(response.data.data.total_intelligence).num;
          this.total_unit.total_intelligence_num_unit = this.unit_common(
            response.data.data.total_intelligence
          ).unit;
          this.total_intelligence_num = str.split("");
          setTimeout(() => {
            this.total_intelligence_num_get();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 风险资产总数
    total_risk_attack_get () {
      // this.$axios.get('https://47.105.196.251/demonstration/risk-assets-count')
      this.$axios
        .get("/demonstration/risk-assets-count")
        .then(response => {
          var str = this.unit_common(response.data.data.risk_assets_count).num;
          this.total_unit.total_risk_attack_unit = this.unit_common(
            response.data.data.risk_assets_count
          ).unit;
          this.total_risk_attack = str.split("");
          setTimeout(() => {
            this.total_risk_attack_get();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 威胁预警总数
    threat_warning_count () {
      this.$axios
        .get("/demonstration/threat-warning-count")
        // this.$axios.get('https://47.105.196.251/demonstration/threat-warning-count')
        .then(response => {
          var str = this.unit_common(response.data.data.count).num;
          this.total_unit.total_threat_warning_unit = this.unit_common(
            response.data.data.count
          ).unit;
          this.total_threat_warning = str.split("");
          setTimeout(() => {
            this.threat_warning_count();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 互联网总数
    internet_assets_count () {
      this.$axios
        .get("/demonstration/internet-assets-count")
        // this.$axios.get('https://47.105.196.251/demonstration/internet-assets-count')
        .then(response => {
          var str = this.unit_common(response.data.data).num;
          this.total_unit.total_net_assets_unit = this.unit_common(
            response.data.data
          ).unit;
          this.total_net_assets = str.split("");
          setTimeout(() => {
            this.internet_assets_count();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 安全动态
    threat_dynamics () {
      this.$axios
        .get("/demonstration/threat-dynamics")
        // this.$axios.get('https://47.105.196.251/demonstration/threat-dynamics')
        .then(response => {
          console.log(this.count++);
          this.newsData = [];
          response.data.data.forEach(item => {
            var obj_new = {};
            obj_new.name = item.title;
            obj_new.time = item.updated_at;
            this.newsData.push(obj_new);
          });
          var settime_news = setTimeout(() => {
            this.threat_dynamics();
          }, 100000);
          this.initSwiper();
        })
        .catch(error => {
          console.log(error);
        });
    },
    initSwiper () {
      this.$nextTick(() => {
        var _this = this;
        if (!_this.myswiper) {
          console.log("swiper" + this.swiper_count++);
          _this.myswiper = new Swiper(".swiper-container", {
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            },
            //可选选项，自动滑动
            direction: "vertical",
            loop: true,
            observer: true,
            observeParents: true,
            speed: 300,
            spaceBetween: 0,
            slidesPerView: 4,
            slidesPerGroup: 1,
            on: {
              slideChange: function () { }
            }
          });
          console.log(this);
          console.log(this.myswiper);
          console.log(this.myswiper.loopedSlides);
          // this.myswiper.virtual.update();
          // this.myswiper.updateSize();
          // this.myswiper.updateSlides();
          // this.myswiper.updateSlidesClasses();
          console.log(this.newsData);
          this.myswiper.update();
          // this.myswiper.removeSlide(0);
          // this.myswiper.destroy();
          // this.myswiper.mountInstance();
          // this.$refs.goodSwiper.swiper.destroy()   //先销毁
          // this.$refs.goodSwiper.mountInstance()   //后在加载
          // _this.myswiper.startAutoplay();
          // this.myswiper.startAutoplay();
          // this.myswiper.reLoop();
        } else {
          // this.swiper.startAutoplay();
          // this.swiper.reLoop();
        }
      });
    },
    // 实时情报动态
    real_time_data () {
      this.setinter = setInterval(() => {
        this.conut_num++;
        var item = this.real_time_threat.shift();
        this.real_time_threat.push(item);
      }, 5000);
    },
    // 左上-威胁分布-饼图
    pie_left_echarts () {
      this.$axios;
      // .get(
      //   "https://47.105.196.251:8443/demonstration/threat-level-distribution"
      // )
      this.$axios
        .get("/demonstration/threat-level-distribution")
        .then(response => {
          var pie_left_echarts_data = [
            { name: "高", value: 0 },
            { name: "中", value: 0 },
            { name: "低", value: 0 }
          ];
          response.data.data.forEach(item => {
            if (item.degree == "高") {
              pie_left_echarts_data[0].name = item.degree;
              pie_left_echarts_data[0].value = item.count;
            }
            if (item.degree == "中") {
              pie_left_echarts_data[1].name = item.degree;
              pie_left_echarts_data[1].value = item.count;
            }
            if (item.degree == "低") {
              pie_left_echarts_data[2].name = item.degree;
              pie_left_echarts_data[2].value = item.count;
            }
          });
          var mychart = echarts.init(document.getElementById("pie_left"));
          var option = {
            title: {
              text: "威胁等级分布",
              left: "center",
              top: 10,
              textStyle: {
                fontSize: 14,
                color: "#fff"
              }
            },
            tooltip: {
              show: false,
              position: function (pos, params, dom, rect, size) {
                // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                var obj = { top: 60 };
                obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                return obj;
              }
            },
            color: ["#FF5F5C", "#FEAA00", "#12DCFF"],
            series: [
              {
                name: "",
                type: "pie",
                radius: ["50%", "70%"],
                center: ["50%", "60%"],
                avoidLabelOverlap: false, //是否启用防止标签重叠策略，默认开启，
                hoverAnimation: true, //是否开启 hover 在扇区上的放大动画效果。
                legendHoverLink: true, //是否启用图例 hover 时的联动高亮。
                selectedOffset: 5,
                hoverOffset: 2, //高亮扇区的偏移距离。
                label: {
                  normal: {
                    show: false,
                    position: "center"
                  },
                  emphasis: {
                    show: true,
                    formatter: "{d}%\n\n{b}",
                    textStyle: {
                      fontSize: "14",
                      color: "#fff",
                      fontWeight: "bold"
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: pie_left_echarts_data
              }
            ]
          };
          mychart.setOption(option, true);
          tools.loopShowTooltip(mychart, option, { loopSeries: true }); // 使用本插件
          // setTimeout(() => {
          //     this.pie_left_echarts();
          // }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    pie_right_echarts () {
      this.$axios
        .get("/demonstration/threat-category")
        //   this.$axios
        //     .get("https:/47.105.196.251:8443/demonstration/threat-category")
        .then(response => {
          console.log(response);
          var legend_data = [];
          var series_data = [];
          response.data.data.forEach((item, index) => {
            if (index < 5) {
              var obj = {};
              legend_data.push(item.category);
              obj.name = item.category;
              obj.value = item.count;
              series_data.push(obj);
            }
          });
          //  2， 高危漏洞 14 暗网 3
          var mychart = echarts.init(document.getElementById("pie_right"));
          var option = {
            title: {
              text: "威胁类型分布",
              left: "center",
              top: 10,
              textStyle: {
                fontSize: 14,
                color: "#fff"
              }
            },
            tooltip: {
              show: false,
              position: function (pos, params, dom, rect, size) {
                // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
                var obj = { top: 60 };
                obj[["right", "left"][+(pos[0] < size.viewSize[0] / 2)]] = 5;
                return obj;
              }
            },
            color: ["#0E79FF ", "#9C00E5", "#8DF97F", "#FF35C1"],
            series: [
              {
                name: "",
                type: "pie",
                radius: ["50%", "70%"],
                center: ["50%", "60%"],
                avoidLabelOverlap: false, //是否启用防止标签重叠策略，默认开启，
                hoverAnimation: true, //是否开启 hover 在扇区上的放大动画效果。
                legendHoverLink: true, //是否启用图例 hover 时的联动高亮。
                selectedOffset: 5,
                hoverOffset: 2, //高亮扇区的偏移距离。
                label: {
                  normal: {
                    show: false,
                    position: "center"
                  },
                  emphasis: {
                    show: true,
                    formatter: "{d}%\n\n{b}",
                    textStyle: {
                      fontSize: "14",
                      color: "#fff",
                      fontWeight: "bold"
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: series_data
              }
            ]
          };
          mychart.setOption(option, true);
          tools.loopShowTooltip(mychart, option, { loopSeries: true }); // 使用本插件
          // setTimeout(() => {
          //     this.pie_right_echarts();
          // }, 10000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 左中
    alarm_type_f_echarts () {
      var mychart = echarts.init(document.getElementById("alarm_type_f"));
      var option = {
        grid: {
          left: 0,
          top: 2,
          bottom: 0,
          right: 0
        },
        xAxis: {
          type: "category",
          data: this.list_time,
          boundaryGap: false,
          splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
              color: ["#D4DFF5"]
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        series: [
          {
            name: "",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 2,
            data: this.list_botnet_count,

            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#4292FF"
                    },
                    {
                      offset: 1,
                      color: "rgba(66,146,255,0.48)"
                    }
                  ],
                  false
                )
              }
            },
            itemStyle: {
              normal: {
                color: "#4292FF"
              }
            },
            lineStyle: {
              normal: {
                width: 1
              }
            }
          }
        ]
      };
      mychart.setOption(option, true);
    },
    alarm_type_s_echarts () {
      var mychart = echarts.init(document.getElementById("alarm_type_s"));
      var option = {
        grid: {
          left: 0,
          top: 2,
          bottom: 0,
          right: 0
        },
        xAxis: {
          type: "category",
          data: this.list_time,
          boundaryGap: false,
          splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
              color: ["#D4DFF5"]
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        series: [
          {
            name: "",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 2,
            data: this.list_high_loophole_count,

            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255,107,74,1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255,107,74,0.48)"
                    }
                  ],
                  false
                )
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(255,107,74,1)"
              }
            },
            lineStyle: {
              normal: {
                width: 1
              }
            }
          }
        ]
      };
      mychart.setOption(option, true);
    },
    alarm_type_t_echarts () {
      var mychart = echarts.init(document.getElementById("alarm_type_t"));
      var option = {
        grid: {
          left: 0,
          top: 2,
          bottom: 0,
          right: 0
        },
        xAxis: {
          type: "category",
          data: this.list_time,
          boundaryGap: false,
          splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
              color: ["#D4DFF5"]
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          }
        },
        series: [
          {
            name: "",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbol: "circle",
            symbolSize: 2,
            data: this.list_ransomwareurl_count,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(255,167,43,1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255,167,43,0.48)"
                    }
                  ],
                  false
                )
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(255,167,43,1)"
              }
            },
            lineStyle: {
              normal: {
                width: 1
              }
            }
          }
        ]
      };
      mychart.setOption(option, true);
    },
    // 左下
    // 折线图
    risk_trend_echarts () {
      this.$axios
        .get("/demonstration/threat-situation")
        // this.$axios.get('https://47.105.196.251/demonstration/threat-situation')
        .then(response => {
          console.log(response);
          var xAxis_data = [];
          var series_data = [];
          response.data.data.forEach(item => {
            xAxis_data.push(item.statistics_time);
            series_data.push(item.count);
          });
          var mychart = echarts.init(document.getElementById("risk_trend"));
          var option = {
            tooltip: {
              trigger: "axis",
              axisPointer: {
                lineStyle: {
                  image: "", // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                  repeat: "repeat" // 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
                }
              },
              backgroundColor: "rgba(255,255,255,1)",
              padding: [5, 10],
              textStyle: {
                color: "#7588E4"
              },
              extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)"
            },
            grid: {
              left: "10",
              right: "35",
              bottom: "10",
              top: "10",
              containLabel: true
            },
            xAxis: {
              type: "category",
              data: xAxis_data,
              boundaryGap: false,
              splitLine: {
                show: true,
                interval: "auto",
                lineStyle: {
                  color: ["#D4DFF5"]
                }
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: "#224889"
                }
              },
              axisLabel: {
                color: "#fff",
                margin: 10,
                textStyle: {
                  fontSize: 14
                }
              }
            },
            yAxis: {
              type: "value",
              // interval: 5,
              minInterval: 1,
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#224889"
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: "#224889"
                }
              },
              axisLabel: {
                color: "#fff",
                margin: 10,
                textStyle: {
                  fontSize: 14
                }
              }
            },
            series: [
              {
                name: "",
                type: "line",
                // smooth: true,
                showSymbol: false,
                symbol: "circle",
                symbolSize: 2,
                data: series_data,
                areaStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: "rgba(195,17,43,0.3)"
                        },
                        {
                          offset: 1,
                          color: "rgba(195,17,43,0.1)"
                        }
                      ],
                      false
                    )
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#C3112B"
                  }
                },
                lineStyle: {
                  normal: {
                    width: 1
                  }
                }
              }
            ]
          };
          mychart.setOption(option, true);
          setTimeout(() => {
            this.risk_trend_echarts();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 中国地图
    china_eachrts (item) {
      if (item) {
        function formatDate (value) {
          let date = new Date(value);
          let y = date.getFullYear();
          let MM = date.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date.getDate();
          d = d < 10 ? "0" + d : d;
          let h = date.getHours();
          h = h < 10 ? "0" + h : h;
          let m = date.getMinutes();
          m = m < 10 ? "0" + m : m;
          let s = date.getSeconds();
          s = s < 10 ? "0" + s : s;
          return y + "/" + MM + "/" + d + " " + h + ":" + m + ":" + s;
        }
        console.log(item);
        var toolTipData = [
          {
            name: "上海",
            type: item.type,
            ip: item.client_ip,
            category: item.category,
            time: formatDate(item.first_seen * 1000),
            position: item.company
          }
        ];
        console.log(toolTipData);
      } else {
        var toolTipData = [];
      }
      var myChart = echarts.init(document.getElementById("china_map"));
      var mapName = "china";
      var data = [{ name: "上海", value: 177 }];
      var geoCoordMap = {};
      /*获取地图数据*/
      myChart.showLoading();
      var mapFeatures = echarts.getMap(mapName).geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      var option = {
        tooltip: {
          trigger: "item",
          position: function (pos, params, dom, rect, size) {
            // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
            // var obj = { top: 60 };
            // obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
            return [450, 170];
            // return obj;
          },
          formatter: function (params) {
            var toolTiphtml = "";
            for (var i = 0; i < toolTipData.length; i++) {
              if (params.name == toolTipData[i].name) {
                toolTiphtml =
                  '<p style="text-align: left;"> 失陷资产:' +
                  toolTipData[i].ip +
                  '</p> <p style="text-align:left;"> 威胁类型 :' +
                  toolTipData[i].category +
                  '</p> <p style="text-align: left;">首次发现时间:' +
                  toolTipData[i].time +
                  '</p><p style="text-align: left;">资产分组:' +
                  toolTipData[i].position;
              }
            }
            return toolTiphtml;
          },
          fontFamily: "PingFangSC-Regular",
          fontSize: 12,
          backgroundColor: "rgba(12,54,188,.62)", // 背景
          padding: [8, 10], //内边距
          // extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.87);', //添加阴影
          showContent: true, //是否显示提示框浮层，默认显示
          alwaysShowContent: true // 是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏，设置为 true 可以保证一直显示提示框内容。
        },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: false,
          aspectScale: 0.76, //长宽比
          zoom: 1.2,
          itemStyle: {
            normal: {
              // areaColor: "rgba(65,149,210,.6)", //区域颜色
              // borderColor: '#3B5077',
              borderWidth: 0.5, //区域边框宽度
              borderColor: "#0A68E9", //区域边框颜色
              areaColor: "#081F3D" //区域颜色
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          }
        },
        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: "2",
            label: {
              normal: {
                formatter: "{b}",
                position: "left",
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#05C3F9"
              }
            }
          },
          {
            type: "map",
            map: mapName,
            geoIndex: 0,
            layoutSize: 100,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: false,
            data: data
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: toolTipData[1],
            symbolSize: "5",
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow"
              }
            },
            zlevel: 1
          }
        ]
      };
      myChart.setOption(option);
      var dataindex = 0;
      setInterval(function () {
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0, // 显示第几个series
          dataIndex: 0 // 显示第几个数据
        });
      }, 1000);
    },
    // 中下
    info_relation_echarts (item) {
      var datalist = [
        {
          name: item.last_alerts.matched,
          symbolSize: 20,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: "#FF7327",
              borderWidth: 2,
              shadowBlur: 10,
              color: "#FF7327"
            }
          }
        }
      ];
      var linklist = [];
      if (item.extension.length != 0) {
        item.extension.forEach(element => {
          if (element != null) {
            var obj = {},
              linkobj = {};
            console.log(element);
            obj.name = element;
            obj.symbolSize = 10;
            datalist.push(obj);
            linkobj.source = item.last_alerts.matched;
            linkobj.target = element;
            linkobj.value = "";
            linklist.push(linkobj);
          }
        });
        console.log(linklist);
      }

      var mychart = echarts.init(document.getElementById("info_relation"));
      var option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        color: ["#83e0ff", "#45f5ce", "#b158ff"],
        series: [
          {
            type: "graph",
            layout: "force",
            // focusNodeAdjacency: true,
            force: {
              repulsion: 100,
              edgeLength: 50
            },
            symbolSize: 20,
            roam: true,
            label: {
              normal: {
                show: true, //显示
                color: "#fff",
                fontSize: 10,
                position: "right" //相对于节点标签的位置，默认在节点中间
              }
            },
            edgeSymbol: ["circle"], //边两端的标记类型
            // edgeSymbolSize: [4, 8],//边两端的标记大小
            edgeSymbolSize: [2, 3],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                  color: "#fff"
                },
                formatter: "{c}"
              }
            },
            data: datalist,
            itemStyle: {
              normal: {
                borderColor: "#DBA500",
                borderWidth: 2,
                shadowBlur: 10,
                color: "#DBA500"
              }
            },
            links: linklist,
            lineStyle: {
              normal: {
                opacity: 0.31,
                width: 1,
                color: "#fff",
                curveness: 0.7
              }
            },
            categories: [{ name: "1" }, { name: "2" }, { name: "3" }]
          }
        ]
      };
      mychart.setOption(option, true);
    },
    // 右上
    // 右中
    // 威胁分布
    threat_echarts () {
      var timelist = [],
        high_list = [],
        medium_list = [],
        low_list = [],
        ba_data = [];
      this.threat_distribution_data.forEach(item => {
        timelist.push(item.company + "  " + item.sort);
        low_list.push(item.low);
        medium_list.push(item.medium);
        high_list.push(item.high);
      });
      // var ba_data_item = high_list[0] + medium_list[0] + low_list[0]
      this.threat_distribution_data.forEach(item => {
        if (this.threat_distribution_data[0].sort < 20) {
          ba_data.push(20);
        } else {
          ba_data.push(this.threat_distribution_data[0].sort);
        }
      });
      var mychart = echarts.init(document.getElementById("threat"));
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function (item, index) {
            // if (item.seriesName ) {
            var html =
              item[0].seriesName +
              ":" +
              item[0].data +
              "<br/>" +
              item[1].seriesName +
              ":" +
              item[1].data +
              "<br/>" +
              item[2].seriesName +
              ":" +
              item[2].data;
            return html;
            // }
          }
        },
        grid: {
          left: "10",
          right: "20",
          bottom: "10",
          top: "10",
          containLabel: true
        },
        xAxis: {
          type: "value",
          show: false,
          axisLine: {
            show: false,
            lineStyle: {
              show: false,
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          data: timelist.reverse(),
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "低",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideRight'
            //     }
            // },
            itemStyle: {
              normal: {
                // barBorderRadius: 50, //柱形图圆角，初始化效果
                color: "#12DCFF"
              }
            },
            data: low_list.reverse()
            // data: [10, 20, 30, 10, 10, 10]
          },
          {
            name: "中",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideRight'
            //     }
            // },
            itemStyle: {
              normal: {
                // barBorderRadius: 50, //柱形图圆角，初始化效果
                color: "#FEAA00"
              }
            },
            data: medium_list.reverse()
            // data: [30, 10, 30, 20, 30, 40]
          },
          {
            name: "高",
            type: "bar",
            stack: "总量",
            barWidth: 10,
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideRight'
            //     }
            // },
            itemStyle: {
              normal: {
                // barBorderRadius: 50, //柱形图圆角，初始化效果
                color: "#FF5F5C"
              }
            },
            // data: [30, 10, 30, 20, 30, 40]
            data: high_list.reverse()
          },
          {
            type: "bar",
            stack: "ss",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 50, //柱形图圆角，初始化效果
                color: "rgba(255,255,255,.16)"
              }
            },
            data: ba_data
          }
        ]
      };
      mychart.setOption(option, true);
    },
    // 右下
    getFullCreeen () {
      this.full_if = false;
      this.inFullCreeen(document.documentElement);
    },
    outfull () {
      this.fun_text = "全屏";
      this.full_if = true;
    },
    checkFull () {
      var isFull = document.webkitIsFullScreen;
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    },
    inFullCreeen (element) {
      let el = element;
      let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;
      if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    outFullCreeen (element) {
      let el = element;
      let cfs =
        el.cancelFullScreen ||
        el.webkitCancelFullScreen ||
        el.mozCancelFullScreen ||
        el.exitFullScreen;
      if (typeof cfs != "undefined" && cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject != "undefined") {
        let wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    // 首要预警
    main_warning () {
      // this.$axios.get('https://47.105.196.251/demonstration/main-warning')
      this.$axios
        .get("/demonstration/main-warning")
        .then(response => {
          this.list_time = [];
          this.list_botnet_count = [];
          this.list_high_loophole_count = [];
          this.list_ransomwareurl_count = [];
          this.main_warning_data = response.data.data;
          for (var key in this.main_warning_data.list) {
            this.list_time.push(key);
            this.list_botnet_count.push(
              this.main_warning_data.list[key].asset_alert_count
            );
            this.list_high_loophole_count.push(
              this.main_warning_data.list[key].loophole_count
            );
            this.list_ransomwareurl_count.push(
              this.main_warning_data.list[key].darknet_count
            );
          }
          this.alarm_type_f_echarts();
          this.alarm_type_s_echarts();
          this.alarm_type_t_echarts();
          setTimeout(() => {
            this.main_warning();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 检测最新告警
    check_alert () {
      // this.$axios.get('https://47.105.196.251:8443/demonstration/check-alert')
      this.$axios
        .get("/demonstration/check-alert")
        .then(response => {
          if (response.data.data > this.check_alert_data) {
            this.check_alert_data = response.data.data;
            // this.$axios.get('https://47.105.196.251:8443/demonstration/realtime-intelligence')
            this.$axios
              .get("/demonstration/realtime-intelligence")
              .then(response => {
                this.real_time_threat = [];
                this.realtime_intelligence_data = response.data.data;
                this.realtime_intelligence_data.forEach((item, index) => {
                  var obj = {
                    name: "",
                    threat: false
                  };
                  if (typeof item == "string") {
                    obj.name = item;
                    obj.threat = false;
                  }
                  if (typeof item == "object") {
                    obj.name = item.last_alerts.client_ip;
                    this.name_demo = item.last_alerts.client_ip;
                    obj.threat = true;
                    item.index = index - 10;
                    this.map_data = item;
                    this.china_eachrts(this.map_data.last_alerts);
                    this.info_relation_echarts(this.map_data);
                  }
                  this.real_time_threat.push(obj);
                });
                clearInterval(this.setinter);
                this.real_time_data();
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 威胁排行
    threat_rank () {
      // this.$axios.get('https://47.105.196.251/demonstration/threat-rank')
      this.$axios
        .get("/demonstration/threat-rank")
        .then(response => {
          this.tableData = [];
          this.threat_rank_data = response.data.data;
          this.threat_rank_data.forEach((item, index) => {
            var obj = {};
            if (index < 4) {
              obj.ip = item.client_ip;
              obj.src = item.company;
              obj.num = item.count;
              obj.type = item.asset_type;
              this.tableData.push(obj);
            }
          });
          setTimeout(() => {
            this.threat_rank();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 威胁分布
    threat_distribution () {
      // this.$axios.get('https://47.105.196.251/demonstration/threat-distribution')
      this.$axios
        .get("/demonstration/threat-distribution")
        .then(response => {
          this.threat_distribution_data = response.data.data;
          this.threat_echarts();
          setTimeout(() => {
            this.threat_distribution();
          }, 100000);
        })
        .catch(error => {
          console.log(error);
        });
    },
    rowClass: function (row, index) {
      if (row.rowIndex % 2 == 0) {
      } else {
        return " background-color: rgba(34, 72, 137, 0.56)";
      }
    }
  }
};
</script>



