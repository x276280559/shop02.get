<!--购物车页面-->
<template>

  <div>
      <div class="container">
        <div class="cart">
           <!-- 用NavBeark组件模板替换 -->
            <!-- <div class="nav-breadcrumb-wrap">
                <div class="container">
                    <nav class="nav-breadcrumb">
                        <a href="/">首页</a>
                        <span>购物车</span>
                    </nav>
                </div>
            </div> -->

    <!-- 面包屑 模板组件替换 --> 
            <nav-mbx>  
               购物车
            </nav-mbx>
            
            <div class="item-list-wrap">
                <div class="cart-item">
                    <div class="cart-item-head">
                        <ul>
                            <li>商品</li>
                            <li>价格</li>
                            <li>数量</li>
                            <li>小计</li>
                            <li>编辑</li>
                        </ul>
                    </div>
                    <ul class="cart-item-list">
                        <li v-for="(item,index) in ArrData" v-bind:key="index">
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascipt:;" class="checkbox-btn item-check-btn"
                                        v-bind:class="item.checked?'check':''"
                                        v-on:click="clickchecked(index)"
                                    >
                                        <svg class="icon icon-ok">
                                            <use xlink:href="#icon-ok"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <img :src="'/static/img/'+item.productImage">
                                </div>
                                <div class="cart-item-title">
                                    <div class="item-name">{{item.productName}}</div>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <div class="item-price">{{item.salePrice}}</div>
                            </div>
                            <div class="cart-tab-3">
                                <div class="item-quantity">
                                    <div class="select-self select-self-open">
                                        <div class="select-self-area">
                                            <a class="input-sub" @click="subtraction(index)">-</a>
                                            <span class="select-ipt">{{item.productNum}}</span>
                                            <a class="input-add" @click="add(index)">+</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cart-tab-4">
                                <div class="item-price-total">{{(item.productNum)*(item.salePrice)}}</div>
                            </div>
                            <div class="cart-tab-5">
                                <div class="cart-item-opration">
                                    <a href="javascript:;" class="item-edit-btn" v-on:click="del(index)">
                                        <svg class="icon icon-del">
                                            <use xlink:href="#icon-del"></use>
                                        </svg>
                                        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <defs>
                                                <symbol id="icon-add" viewBox="0 0 32 32">
                                                <title>add2</title>
                                                <path class="path1"
                                                        d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
                                                </symbol>
                                                <symbol id="icon-ok" viewBox="0 0 32 32">
                                                <title>ok</title>
                                                <path class="path1"
                                                        d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
                                                </symbol>
                                                <symbol id="icon-edit" viewBox="0 0 32 32">
                                                <title>edit</title>
                                                <path class="path1"
                                                        d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
                                                </symbol>
                                                <symbol id="icon-del" viewBox="0 0 32 32">
                                                <title>delete</title>
                                                <path class="path1"
                                                        d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
                                                <path class="path2"
                                                        d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
                                                <path class="path3"
                                                        d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
                                                <path class="path4"
                                                        d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
                                                </symbol>
                                                <symbol id="icon-clock" viewBox="0 0 32 32">
                                                <title>clock</title>
                                                <path class="path1" fill="#605f5f"
                                                        d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
                                                <path class="path2" fill="#605f5f"
                                                        d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
                                                </symbol>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cart-foot-wrap">
                <div class="cart-foot-inner">
                    <div class="cart-foot-l">
                        <div class="item-all-check">
                            <a href="javascipt:;" v-on:click="quanxuan">
                                <span class="checkbox-btn item-check-btn" v-bind:class="allclickchecked?'check':''">
                                    <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                                </span>
                                <span>全选</span>
                            </a>
                        </div>
                    </div>
                    <div class="cart-foot-r">
                        <div class="item-total">
                            总计: <span class="total-price">{{sum}}</span>
                        </div>
                        <div class="btn-wrap">
                            <a class="btn btn--red">结算</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
//引入组件
import NavMbx from '@/components/NavMbx'
export default {  //曝光组件
  name: 'Cart',
  components:{   //使用组件名
    NavMbx
  },
  data:function(){
      return {
          ArrData :[],
          
      }
  },
  //挂载后，执行
  mounted:function(){
      this.loadData()
  },
  //计算后的方法，用来计算购物车总价数
  computed:{
       //判断是否全部选择
      allclickchecked(){
          var flag = true    //自定义
          for(var i= 0;i<this.ArrData.length;i++){
             //判断是否全部选择 
              var item = this.ArrData[i]
              if(item.checked==false){
                  flag =false ;   //说明至少有一个未勾选上
                  break;
              }
           }
           return flag;
      },
      sum:function(){
        var s = 0     //遍历循环购物车样品数量，然后加上所以数。
        for(var i= 0;i<this.ArrData.length;i++){
            var item = this.ArrData[i] //等于当前点击的对象
            if(item.checked){           //如果勾选上了，然后执行下面的。
                s += (this.ArrData[i].productNum)*(this.ArrData[i].salePrice)
            }
        }
       //console.log(s)
       return s
       
      }

      
  },
  //方法
  methods:{
    quanxuan:function(){
       //alert()
      //默认初始值为全选
       var sta = this.allclickchecked
       //状态反转
       sta = !sta
       for(var i=0;i<this.ArrData.length;i++){
         var item = this.ArrData[i]
         item.checked = sta
       }
    },
    //当没有勾选上，总价的价格就不加
    clickchecked(index){
        var item = this.ArrData[index]
        item.checked=!item.checked
    },
    //购物车删除功能
    del(i){
        //alert(i) //测试
        var productId = this.ArrData[i].productId   //获取下标ID
        this.axios.post("/api/users/cartDel",{
            productId:productId     //发送ID给后台去请求
        }).then( (res)=>{
            console.log(res) 
            var data = res.data
            console.log(data)
            if(data.status==0){  //当请求数据成功删除
                //再删除界面的列表商品
                //this.ArrData[i].remove()    擦。remove是jQuery方法，不能用在这里，下次注意！！
                this.ArrData.splice(i,1)   //用数组方法清除
            }
            //更新购物车数量
            this.$store.commit("update",this.ArrData.length) 
        })
    },
    //挂载后，请求数据回来
    loadData(){
        this.axios.get("/api/users/cartList")
        .then( (res) =>{
            console.log(res)
            this.ArrData = res.data.result
            // console.log(this.ArrData)
            //更新购物车数量
            this.$store.commit("update",this.ArrData.length)
        })
    },
    add(i) {    //点击了增加购物车数据事件
        // console.log("点击了增加数据事件")
    // console.log(this.ArrData[i].productNum++)
    //event.preventDefault()
        var item = this.ArrData[i]
       this.axios.post("/api/users/cartEdit",{
           productId:item.productId,
           checked:item.checked,
           productNum:parseInt(item.productNum) +1
       }).then( (res)=>{
           item.productNum++
       }) 
        
    },
    subtraction(i) { //点击了减少购物车数据事件
    if((this.ArrData[i].productNum)<=1){
        return
    }
       var item = this.ArrData[i]
       this.axios.post("/api/users/cartEdit",{
           productId:item.productId,
           checked:item.checked,
           //字符串，必须转为数字 parseInt
           productNum:parseInt(item.productNum) -1
       }).then( (res)=>{
           item.productNum-- //不能放if里去。
       }) 
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .input-sub,
        .input-add {
            min-width: 40px;
            height: 100%;
            border: 0;
            color: #605F5F;
            text-align: center;
            font-size: 16px;
            overflow: hidden;
            display: inline-block;
            background: #f0f0f0;
        }
        
        .item-quantity .select-self-area {
            background: none;
            border: 1px solid #f0f0f0;
        }
        
        .item-quantity .select-self-area .select-ipt {
            display: inline-block;
            padding: 0 3px;
            width: 30px;
            min-width: 30px;
            text-align: center;
        }
</style>
