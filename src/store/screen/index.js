import axios from "axios";
export default {
  state: {
    //基础信息
    baseInfo:{
      ScreenName:'鉴源威胁情报系统'
    },
    //下拉框类型
    classition:'all',
    //高亮数据
    highlight: [],
    //两侧数据
    asideLists:[{name:'威胁分布',alias:'threatDistribution', flag: true, aside_id: 0},
      {name:'威胁来源排名',alias:'threatIndicators', flag: true, aside_id: 1},
      {name:'威胁分类排名',alias:'threatDynamics', flag: false, aside_id: 2},
      {name:'行业威胁排名',alias:'horizontalThreatSituation', flag: false, aside_id: 3},
      {name:'威胁态势',alias:'branchSafe', flag: false, aside_id: 4},
      {name:'高风险指标',alias:'systemStatus', flag: false, aside_id: 5}],
    //顶部数据
    topLists: [{name:'情报总数',alias:'allOccupe',flag: true,top_id: 0,num:[0,0,0,0,0,0,0]},
      {name: '石油石化',alias:'petrochemical', flag: false, top_id: 1,num:[0,0,0,0,0,0,0]},
      {name: '电力行业',alias:'electric', flag: false, top_id: 2,num:[0,0,0,0,0,0,0]},
      {name: '轨交行业',alias:'railTransit', flag: false, top_id: 3,num:[0,0,0,0,0,0,0]},
      {name: '水务行业',alias:'waterIndustry', flag: false, top_id: 4,num:[0,0,0,0,0,0,0]},
      {name: '制造业',alias:'manufacturing', flag: false, top_id: 5,num:[0,0,0,0,0,0,0]}]
  },
  getters: {
    baseInfo: state => state.baseInfo,
    asideLists: state => state.asideLists,
    topLists: state => state.topLists,
    classition: state => state.classition,
    highlight: state => state.highlight
  },
  mutations: {
    /**
     *大屏基础设置
     * */
    SET_BASE_INFO: (state, args) => {
      state.baseInfo = args;
    },
    /**
    *大屏两侧处理
    * */
    //更新大屏两侧数据
    SET_ASIDE_LISTS: (state, args) => {
      args.forEach(item => {
        if(item.alias == 'ExternalCountryTop5'){
          item.name = '外连国家和地区TOP5';
        }
      });
      state.asideLists = args;
    },
    //通过id修改大屏两侧数据
    SET_ASIDE_LISTS_ID:(state,args) => {
      let lists = state.asideLists;
      lists.forEach(function (value, key) {
        if (value.aside_id == args.id) {
          value.flag = args.flag;
        }
      });
      state.asideLists = lists;
    },
    /**
     *大屏顶部处理
     * */
    //更新大屏顶部数据
    SET_TOP_LISTS: (state, args) => {
      state.topLists = args;
    },
    //通过id修改大屏顶部数据
    SET_TOP_LISTS_ID: (state, args) => {
      let lists = state.topLists;
      lists.forEach(function (value, key) {
        if (value.top_id == args.id) {
          value.flag = args.flag;
        }
      });
      state.topLists = lists;
    },
    SET_TOP_LISTS_NUM: (state,args) => {
      state.topLists.map(item => {
        if(item.top_id == args.id){
          let num = Number(args.count);
          if(num > 9999999){num = 9999999;}
          if(num == undefined || num == null){num == 0;}
          let count = String(num).padStart(7,'0');
          item.num = count.toString().split('');
        }
      });
    },
    /**
     *下拉框参数修改
     * */
    SET_SELECT_BY_ID: (state,args) => {
      //console.log(args);
      let cla = state.classition;
      if(args == 0) cla = 'all';
      else if(args == 1) cla = 'oil';
      else if(args == 2) cla = 'power';
      else if(args == 3) cla = 'rail';
      else if(args == 4) cla = 'water';
      else if(args == 5) cla = 'industry';
      state.classition = cla;

      let topLists = state.topLists;
      let firstItem = topLists.shift();

      topLists.forEach((item,index) => {
        if(item.top_id == args){
          item.flag = true;
        }else {
          item.flag = false;
        }
      });
      topLists.unshift(firstItem);
      state.topLists = topLists;
    },
    /**
     *设置高亮数据
     * */
    SET_HIGHLIGHT_LIST: (state, args) => {
      //console.log(args);
      state.highlight = args;
    }
  },
  actions: {
    //获取大屏基础信息
    async getScreenBase({commit,dispatch},context){

      let resp = await axios('/yiiapi/demonstration/get-base-config',{params:context});
      let {status, data} = resp.data;
      if(status == 0){
        commit('SET_BASE_INFO',data);
        return true;
      }
    },
    /**
     * 大屏两侧数据
     * */
    async getScreenAside({commit,dispatch},context){
      let resp = await axios('/yiiapi/demonstration/get-both-side',{params:context});
      let {status, data} = resp.data;
      //console.log(data)
      if(status == 0){
        commit('SET_ASIDE_LISTS',data);
        return true;
      }
    },
    async setScreenAside({commit,dispatch},context){
      let asideLists = this.state.screen.asideLists;
      let resp = await axios.put('/yiiapi/demonstration/set-both-side',{param:asideLists});
      let {status, data} = resp.data;
      if(status == 0){
        return true;
      }
    },
    /**
     * 大屏顶部数据
     * */
    async getScreenTop({commit,dispatch},context){
      let resp = await axios('/yiiapi/demonstration/get-top-config',{params:context});
      let {status, data} = resp.data;
      data.forEach(item => {
        if(!item.num) item.num = [0,0,0,0,0,0,0];
      })
      if(status == 0){
        commit('SET_TOP_LISTS',data);
        return true;
      }
    },
    async setScreenTop({commit,dispatch},context){
      let topLists = this.state.screen.topLists;
      let resp = await axios.put('/yiiapi/demonstration/set-top-config',{param:topLists});
      let {status, data} = resp.data;
      if(status == 0){
        return true;
      }
    },
  }
}
