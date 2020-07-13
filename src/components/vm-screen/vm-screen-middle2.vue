<template>
    <div class="vm-screen-middle2">
      <div class="block-all">
        <div class="flow">
          <button class="item">IP:123.45.67.89</button>
          <button class="item">MAL:A07DA897FDE02</button>
          <button class="item">URL:www.baddoddmm.com</button>
          <button class="item">URL:www.baddomm.com</button>
          <button class="item">IP:123.45.67.89</button>
          <button class="item">MAL:A07DA897FDE02</button>
          <button class="item">IP:123.45.67.89</button>
          <button class="item">MAL:A07DA897FDE02</button>
          <button class="item">URL:www.baddoddmm.com</button>
          <button class="item">URL:www.baddomm.com</button>
          <button class="item">IP:123.45.67.89</button>
          <button class="item">MAL:A07DA897FDE02</button>
          <button class="item">IP:123.45.67.89</button>
          <button class="item">MAL:A07DA897FDE02</button>
          <button class="item">URL:www.baddoddmm.com</button>
        </div>
        <div class="arrow"></div>
        <div class="real">
          <div id="info_relation"></div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: "vm-screen-middle2",
      data(){
          return{
            flow: {
              legendData:[],
              xAxisData:[],
              yAxisData:[],
              series:[],
              legendColor:[]
            },
            realData:[],
            timers:null
          }
      },
      created() {
        this.getData();
        this.getReal();
      },
      mounted() {
        /*this.timers = setInterval(()=>{
          this.getData();
          this.getReal();
        },10000 * 30);*/
      },
      destroyed(){
        clearInterval(this.timers);
      },
      methods:{
        //获取数据
        getData() {
          this.$axios
            .get('/yiiapi/demonstration/flow-statistics')
            .then((resp) => {

              let {status, data} = resp.data;

              if(status == 0){



              }
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getReal() {
          this.$axios
            .get('/yiiapi/demonstration/realtime-alert')
            .then((resp) => {

              let {status, data} = resp.data;
              //console.log(data)
              if(status == 0){
                //console.log(data)
                this.realData = data;
                this.$nextTick(() => {
                  this.drawGraph();
                });
              }
            })
            .catch((error) => {
              console.log(error);
            });
        },
        drawGraph() {
          let datalist = [];
          let linklist = [];

          let relelist = [];

          let realData = this.realData;

          //console.log(realData)

          if(realData.length > 0){
            realData.forEach(item => {
              var obj = {}, linkobj = {};
              obj.name = item.src_ip;

              obj.symbolSize = 10;
              datalist.push(item.src_ip,item.dest_ip);
              linkobj.source = item.src_ip;
              linkobj.target = item.dest_ip;
              linkobj.value = item.category;
              linkobj.lineStyle = {color:'#00D7E9',width: 2, curveness: 0.4};

              linklist.push(linkobj);

              relelist.push(item.category);
            });
          }
          //去重
          datalist = datalist.filter((x, index,self)=>self.indexOf(x)===index);
          relelist = relelist.filter((x, index,self)=>self.indexOf(x)===index);

          let newAttr = [];
          datalist.forEach((item,index) => {
            let col = '';
            if(index == 0){
              col = '#D44361';
            }else if(index == 1){
              col = '#D0A13F';
            }else if(index == 2){
              col = '#60C160';
            }else if(index == 3){
              col = '#FF00C9';
            }
            newAttr.push({name:item,label:{color:'#fff'},itemStyle:{color:col}});
          });

          //实时威胁检测
          let releAttr = [];

          //console.log(relelist)
          relelist.forEach((item,index) => {
            let col = '';
            if(index == 0){
              col = '#D44361';
            }else if(index == 1){
              col = '#D0A13F';
            }else if(index == 2){
              col = '#60C160';
            }else if(index == 3){
              col = '#FF00C9';
            }
            releAttr.push({
              name:item,
              itemStyle:{color:col}
            });
          });

          datalist = newAttr;

          var mychart = this.$echarts.init(document.getElementById("info_relation"));

          var option = {
            tooltip:{
              show: true,
              formatter:function (params) {
                return params.data.name;
              }
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                type: "graph",
                layout: "force",
                //focusNodeAdjacency: true,
                force: {
                  repulsion: 300,
                  gravity: 0.15,
                  edgeLength: 100
                },
                symbolSize: 10,
                roam: true,
                label: {
                  normal: {
                    show: true, //显示
                    fontSize: 8,
                    position: "right" //相对于节点标签的位置，默认在节点中间
                  }
                },
                edgeSymbol: ["circle","arrow"], //边两端的标记类型
                //edgeSymbolSize: [4, 8],//边两端的标记大小
                edgeSymbolSize: [2, 6],
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
                links: linklist,
                itemStyle: {
                  normal: {
                    borderColor: "#DBA500",
                    borderWidth: 0,
                    shadowBlur: 10,
                    /*color: "#DBA500"*/
                  }
                },
                lineStyle: {
                  normal: {
                    opacity: 0.31,
                    width: 1,
                    color: "#fff",
                    curveness: 0.7
                  }
                }
              }
            ]
          };
          mychart.setOption(option, true);

        }
      }
    }
</script>

<style scoped lang="less">
.vm-screen-middle2{
  padding: 0 16px 16px;
  .block-all{
    display: flex;
    .flow{
      height: 245px;
      width: 480px;
      text-align: left;
      padding: 14px 0;
      .item{
        padding: 8px 5px;
        border-radius: 4px;
        color: #fff;
        background: #26314d;
        outline: none;
        border: 1px solid #26314d;
        margin: 6px 8px 6px 0;
        cursor: pointer;
        &:hover{
          color: #C3112B;
          background: rgba(195,17,43,0.24);
          border: 1px solid #C3112B;
        }
      }
    };
    .arrow{
      width: 40px;
      height: 200px;
      background-image: url("../../assets/images/screen/content-arrow.png");
      background-repeat: no-repeat;
      background-size: 40px 200px;
      margin: 25px 0;
    }
    .real{
      flex: 1;
      height: 245px;
      #info_relation{
        width: 100%;
        height: 220px;
      }
    }
  }
}

@keyframes moveHover {
  0% {
    height: 4px;
   /* background: rgba(0,215,233,0.06);*/
  }
  50% {
    height: 100%;
   /* background: rgba(0,122,255,0.48);*/
  }
  100% {
    height: 4px;
   /* background: rgba(0,215,233,0.06);*/
  }
}
</style>
