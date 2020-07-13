<template>
  <div class="home-screen" v-cloak>
    <div class="home-top">
      <div class="home_l">
        <!--<label class="e_label"></label>-->
      </div>
      <div class="home_c">{{threatEyeName}}</div>
      <div class="home_r">
        <!--<el-button type="primary" class="e_btn e_btn_quit"
                   icon="el-icon-switch-button" @click="quitScreen();">退出</el-button>-->
        <el-button type="primary" class="e_btn" @click="fullScreen();">
          <span v-if="!isFullscreen"><i class="full"></i><span class="name">全屏</span></span>
          <span v-if="isFullscreen"><i class="refull"></i><span class="name">退出全屏</span></span>
          </el-button>
      </div>
    </div>
    <div class="home-content">
      <div class="screen-1">
        <div class="list-item">
          <vm-screen-all :data="lists[0]"></vm-screen-all>
        </div>
        <div class="list-item">
          <vm-screen-all :data="lists[2]"></vm-screen-all>
        </div>
        <div class="list-item">
          <vm-screen-all :data="lists[4]"></vm-screen-all>
        </div>
      </div>
      <div class="screen-2">
        <div class="list-item list-item-top">
          <vm-screen-middle0 :topData="topLists" v-if="topLists.length>0">
          </vm-screen-middle0>
        </div>
        <div class="list-item list-item-middle">
          <vm-screen-middle1></vm-screen-middle1>
        </div>
         <div class="list-item list-item-bottom">
           <header class="title-flow">
             <span class="t1">实时情报更新</span>
             <span class="t2">信息扩展和关联</span>
           </header>
           <vm-screen-middle2></vm-screen-middle2>
         </div>
      </div>
      <div class="screen-3">
        <div class="list-item">
          <vm-screen-all :data="lists[1]"></vm-screen-all>
        </div>
        <div class="list-item">
          <vm-screen-all :data="lists[3]"></vm-screen-all>
        </div>
        <div class="list-item">
          <vm-screen-all :data="lists[5]"></vm-screen-all>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import screenfull from 'screenfull';

  import VmScreenAll from './vm-screen/vm-screen-all';
  import VmScreenMiddle0 from './vm-screen/vm-screen-middle0';
  import VmScreenMiddle1 from './vm-screen/vm-screen-middle1';
  import VmScreenMiddle2 from './vm-screen/vm-screen-middle2';
  import { mapGetters } from 'vuex'

  export default {
    name: "home-screen",
    components: {
      VmScreenAll,
      VmScreenMiddle0,
      VmScreenMiddle1,
      VmScreenMiddle2
    },
    data() {
      return {
        isFullscreen: false,
        threatEyeName: '鉴源威胁情报系统'
      }
    },
    computed:{
      ...mapGetters({
        baseInfo:'baseInfo',
        lists:'asideLists',
        topLists:'topLists',
      }),
    },
    created() {
      //大屏基础信息
      //this.$store.dispatch('getScreenBase');

      //大屏顶部
     // this.$store.dispatch('getScreenTop');

    },
    mounted() {
      window.onresize = () => {
        // 全屏下监控是否按键了ESC
        if (!this.checkFull()) {
          // 全屏下按键esc后要执行的动作
          this.isFullscreen = false;
          //this.isFullscreen = !this.isFullscreen;
        }
      }
    },
    methods: {
      //退出
      quitScreen() {
        this.$router.push({path: '/home/overview'});
      },
      //设置
      setScreen() {
        this.$router.push({path: '/screen/set/base', query: {num: '0'}});
      },
      //全屏
      fullScreen() {
        screenfull.toggle();
        this.isFullscreen = !this.isFullscreen;
      },
      //ESC键
      checkFull() {
        var isFull = document.fullscreenEnabled ||
          window.fullScreen || document.webkitIsFullScreen ||
          document.msFullscreenEnabled
        // to fix : false || undefined == undefined
        if (isFull === undefined) {
          isFull = false
        }
        return isFull
      },
      /**********************************************/
    }
  }
</script>

<style scoped lang="less">
  .home-screen {
    padding: 0 36px;
    /* background-color: #001034;*/
    background-color: rgba(0,16,52,.9);
    background-image: url("../assets/images/screen/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: auto;
    height: 100vh;
    &.active{
      padding: 0 24px;
    }
    &::-webkit-scrollbar {
      width: 0;
    }
    .home-top {
      height: 100px;
      display: flex;
      .home_l {
        flex: 1;
        .e_label {
          width: 128px;
          height: 128px;
          margin-top: -30px;
          margin-left: 50px;
          display: block;
          background-image: url("../assets/images/screen/head-logo1.png");
          background-repeat: no-repeat;
          background-size: 128px 128px;
        }
      }
      .home_c {
        font-family: PingFangSC-Medium;
        font-size: 30px;
        color: #fff;
        line-height: 110px;
        width: 1520px;
        background-image: url("../assets/images/screen/head-center.png");
        background-repeat: no-repeat;
        background-position: 0 40px;
      }
      .home_r {
        flex: 1;
        text-align: end;
        font-size: 0;
        /deep/
        .e_btn {
          width: 120px;
          height: 42px;
          border-width: 0;
          line-height: inherit;
          padding: 0;
          outline: none;
          background-color: transparent;
          background-repeat: no-repeat;
          font-family: PingFangSC-Regular;
          cursor: pointer;
          border-radius: 5px;
          margin-top: 24px;
          background-image: radial-gradient(49% 87%, rgba(10,113,255,0.42) 5%, rgba(10,113,255,0.12) 88%, rgba(10,113,255,0.12) 88%);
          & + .el-button {
            margin-left: 0;
          }
          &.e_btn_full {

          }
          .name{
            color: #fff;
            font-size: 16px;
            margin-left: 5px;
          }
          .full{
            height: 20px;
            width: 20px;
            display: inline-block;
            background-image: url("../assets/images/screen/head-full.png");
            background-repeat: no-repeat;
            background-size: 20px 20px;
            vertical-align: bottom;
          }
          .refull{
            height: 20px;
            width: 20px;
            display: inline-block;
            background-image: url("../assets/images/screen/head-re-full.png");
            background-repeat: no-repeat;
            background-size: 20px 20px;
            vertical-align: bottom;
          }

        }
      }
    }
    .home-content {
      display: flex;
      .list-item {
        width: 500px;
        height: 300px;
        margin-bottom: 20px;
        background-image: url("../assets/images/screen/content-lc.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 5px;
      }
      .screen-1 {
        flex: 1;
        .list-item {
          float: left;
        }
      }
      .screen-2 {
        .list-item-top {
          width: 800px;
          height: 85px;
          margin-bottom: 0;
          background:none!important;
        }
        .list-item-middle {
          width: 800px;
          height: 534px;
          margin-bottom: 20px;
          background:none!important;
          /*width: 800px;
          height: 534px;
          margin-bottom: 15px;
          background-image: url("../assets/images/screen/content-mid.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;*/
        }
        .list-item-bottom {
          width: 800px;
          height: 300px;
          .title-flow{
            position: relative;
            font-size: 16px;
            color: #FFFFFF;
            height: 42px;
            line-height: 42px;
            font-family: PingFangSC-Regular;
            /*opacity: 0.72;*/
            background-image: radial-gradient(49% 86%, rgba(10,113,255,0.72) 0%, rgba(10,113,255,0.12) 86%);
            border-radius: 5px 5px 0 0;
            .t1{
              position: absolute;
              left: 220px;
            }
            .t2{
              position: absolute;
              right: 110px;
            }
          }
        }

      }
      .screen-3 {
        flex: 1;
        .list-item {
          float: right;
        }
      }
    }
  }
</style>
