<template>
  <div id="ddos" v-cloak>
    <div id="screenMap"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    name: "ddos",
    data() {
      return {
        timers: null,
        myEcharts:null,
        loading:true,
        mapData:[{first_seen: "2013-07-03 11:17",
          name: "updatelivez.redirectme.net",
          type: "alert",
          des:{IP:"194.62.182.53"},
          category:{0: "僵尸网络C&C"},
          Coordinates:{
            Latitude: 52.3824,
            Longitude: 4.8995
          }
        }]
      }
    },
    computed:{
      ...mapGetters(['highlight']),
    },
    /*created(){
      console.log(this.highlight);
    },*/
    mounted() {
      // this.drawGraph();
    },
    watch:{
      highlight:function (newVal,oldVal) {
        this.$nextTick(() => {
          this.drawGraph();
        })
      }
    },

    methods: {
      drawGraph() {
       // console.log('5555555555555');
        //console.log(this.highlight)
        let series = [];

       // let attr = this.mapData;

        let attr = this.highlight;

        let mapAttr = [];

        console.log(attr)

        attr.map((item) => {
         let obj = {
           type: "effectScatter",
           mapType: "china",
           name: item.name,
           coordinateSystem: "geo",
           zlevel: 2,
           symbolSize: 8,
           // symbol: "rect",
           rippleEffect: {
             period: 4, //动画时间，值越小速度越快
             brushType: "stroke", //波纹绘制方式 stroke, fill
             scale: 4, //波纹圆环最大限制，值越大波纹越大
             color:'red'
           },
           itemStyle:{
             color:'red'
           },
           data: [
             {
               name: item.name,
               value: [item.Coordinates.Longitude,item.Coordinates.Latitude],
               catergory: item.category[0],
               first_seen: item.first_seen,
               tooltip: {
                 trigger: "item",
                 backgroundColor: "#1540a1",
                 borderColor: "#FFFFCC",
                 showDelay: 0,
                 hideDelay: 5000,//浮层隐藏的延迟
                 // enterable: true,
                 // showContent: true,
                 // triggerOn: 'click',//提示框触发的条件,禁止鼠标手动
                 transitionDuration: 0,//提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
                 // alwaysShowContent: true,//设置为 true 可以保证一直显示提示框内容。
                 extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
                 formatter: function (params, ticket, callback) {
                   // console.log(params);
                   //根据业务自己拓展要显示的内容
                   var toolTiphtml = '<div style="z-index: 9999">' +
                     '<p style="text-align: left;"> 指标:' +
                     params.data.name +
                     '</p > <p style="text-align:left;"> 威胁类型 :' +
                     params.data.catergory +
                     '</p > <p style="text-align: left;">首次发现时间:' +
                     params.data.first_seen +
                     '</div>';
                   return toolTiphtml;
                 }
               },
             },
           ],

         }
         series.push(obj);
        });

        /////////////////////////////////////
       /* var arr = [
          {
            type: "effectScatter",
            mapType: "china",
            name: "192.168.1.1",
            coordinateSystem: "geo",
            zlevel: 2,
            // symbol: "rect",
            rippleEffect: {
              period: 4, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            data: [
              {
                name: "2020年",
                value: [-121.910642, 41.38028],
                catergory: '1213123',
                ip: '网络告警',
                type: "类型",
                tooltip: {
                  trigger: "item",
                  backgroundColor: "#1540a1",
                  borderColor: "#FFFFCC",
                  showDelay: 0,
                  hideDelay: 5000,//浮层隐藏的延迟
                  enterable: true,
                  showContent: true,
                  triggerOn: 'click',//提示框触发的条件,禁止鼠标手动
                  transitionDuration: 0,//提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
                  alwaysShowContent: true,//设置为 true 可以保证一直显示提示框内容。
                  extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
                  formatter: function (params, ticket, callback) {
                    // console.log(params);
                    //根据业务自己拓展要显示的内容
                    var toolTiphtml =
                      '<p style="text-align: left;"> 失陷资产:' +
                      params.data.catergory +
                      '</p > <p style="text-align:left;"> 威胁类型 :' +
                      params.data.ip +
                      '</p > <p style="text-align: left;">首次发现时间:' +
                      params.data.type +
                      '</p ><p style="text-align: left;">资产分组:' +
                      params.data.name
                    return toolTiphtml;
                  }
                },
              },
            ],
            symbolSize: 8,
          },
          {
            type: "effectScatter",
            mapType: "china",
            name: "192.168.1.1",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            data: [
              {
                name: "55555",
                value: [144.999416, -37.781726],
                catergory: '1213123',
                ip: '网络告警',
                type: "类型",
                tooltip: {
                  trigger: "item",
                  backgroundColor: "#1540a1",
                  borderColor: "#FFFFCC",
                  showDelay: 0,
                  hideDelay: 5000,//浮层隐藏的延迟
                  enterable: true,
                  triggerOn: 'mousemove|click',//提示框触发的条件,禁止鼠标手动
                  transitionDuration: 0,//提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
                  alwaysShowContent: true,//设置为 true 可以保证一直显示提示框内容。
                  extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
                  formatter: function (params, ticket, callback) {

                    // console.log(params);
                    //根据业务自己拓展要显示的内容
                    var res = "";
                    var name = params.name;

                    var toolTiphtml =
                      '<p style="text-align: left;"> 失陷资产:' +
                      params.data.catergory +
                      '</p > <p style="text-align:left;"> 威胁类型 :' +
                      params.data.ip +
                      '</p > <p style="text-align: left;">首次发现时间:' +
                      params.data.type +
                      '</p ><p style="text-align: left;">资产分组:' +
                      params.data.name
                    return toolTiphtml;
                  }
                },
              },
            ],
            symbolSize: 8,
          },

        ]*/
        ///////////////////////////////////////

        /*attr.map((item) => {
          mapAttr.push({
            name: item.name,
            value: [item.Coordinates.Longitude,item.Coordinates.Latitude],
            tooltip:{
              trigger: "item",
              backgroundColor: "#1540a1",
              borderColor: "#FFFFCC",
              showDelay: 0,
              hideDelay: 5000,//浮层隐藏的延迟
              enterable: true,
              // triggerOn: 'mousemove|click',//提示框触发的条件,禁止鼠标手动
              transitionDuration: 0,//提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
              alwaysShowContent: true,//设置为 true 可以保证一直显示提示框内容。
              extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
              formatter: function (params, ticket, callback) {
                console.log(params);
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res = name
                return res;
              }
            }
          })
        });
        series.push({
          name: '',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin',
          // symbolSize: [100,100],
      /!*    label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: 9,
              },
              formatter (value){
                return value.name
              }
            }
          },*!/
          itemStyle: {
            normal: {
              color: '#D8BC37', //标志颜色
            }
          },
          data: mapAttr,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          zlevel: 1
        });
*/

        this.$echarts.dispose(document.getElementById("screenMap"));

        this.myEcharts = this.$echarts.init(document.getElementById("screenMap"));

        this.myEcharts.showLoading({ text: '正在加载数据...' });

        this.myEcharts.clear();

        let options = {
          //设置标题文本
          title: {
            text: "",
            subtext: "", //副标题
            left: "center", //组件离左侧的距离
            top: "4%", //标题距离顶部的距离
            textStyle: {
              //文本样式
              color: "#fff"
            }
          },
          tooltip: {
            show: true,
            showDelay: 0,
            hideDelay: 5000,//浮层隐藏的延迟
            enterable: true,
            showContent: true,
            // triggerOn: 'click',//提示框触发的条件,禁止鼠标手动
            transitionDuration: 0,//提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。
            alwaysShowContent: true,//设置为 true 可以保证一直显示提示框内容。
           },
          geo: {
            map: 'world',
            roam: false,
            zoom: 1.2,
            itemStyle:{
              areaColor: 'rgba(9,102,232,0.12)',
              borderColor: '#0966e8'
            },
            emphasis:{
              label:{
                show: false,
              },
              itemStyle:{
                areaColor:'rgba(0,215,233,.12)'
              }
            },
            silent: false
          },
          regions:[{
            selected:false
          }],
          series: series
        };

        this.myEcharts.setOption(options);

        this.myEcharts.hideLoading();
        //
        //
        // this.myEcharts.dispatchAction({
        //   type: "showTip", // 根据 tooltip 的配置项显示提示框。
        //   seriesIndex: 1,
        //   dataIndex: 0,
        // });

        if(series.length > 0){
          tools.loopShowTooltip(this.myEcharts, options, {loopSeries: true});
        }

      }
    }
  };
</script>

<style lang="less" scoped>
  #ddos{
    width: 800px;
    height: 534px;
    #screenMap {
      width: 800px;
      height: 534px;
    }
  }
</style>
