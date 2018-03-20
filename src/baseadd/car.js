// 公共js组件，用来显示购物车和头部数量
//在一个模块化的打包系统中，您必须显式地通过 Vue.use() 来安装 Vuex：(详见官网https://vuex.vuejs.org/zh-cn/installation.html)
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//创建一个 store
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {  //改变状态用的。
        return state.count++
      },
      //更新函数
      update(state,n){
        state.count =n
      }
    }
  })
  export default store    //曝光出给 所有系统使用