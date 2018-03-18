<template>
  <div class="hello">

       <nav-mbx>  
            热门商品
        </nav-mbx>
    
    <!-- <div class="nav-breadcrumb-wrap">
        <div class="container">
            <nav class="nav-breadcrumb">
                <a href="#/">首页</a>
                <span>热门商品</span>
            </nav>
        </div>
    </div> -->
    <div class="accessory-result-page accessory-page">
        <div class="container">
            <div class="filter-nav">
                <span class="sortby">排序:</span>
                <a href="javascript:void(0)" class="default cur">默认</a>
                <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
                <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
            </div>
            <div class="accessory-result">
                <!-- filter -->
                <div class="filter stopPop" id="filter">
                    <dl class="filter-price">
                        <dt>价格:</dt>
                        <dd><a href="javascript:void(0)">All</a></dd>
                        <dd>
                            <a href="javascript:void(0)">0 - 100</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">100 - 500</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">500 - 1000</a>
                        </dd>
                        <dd>
                            <a href="javascript:void(0)">1000 - 2000</a>
                        </dd>
                    </dl>
                </div>

                <!-- search result accessories list -->
                <div class="accessory-list-wrap">
                    <div class="accessory-list col-4">
                        <ul>
                            <!--红色line，是系统自带的报警系统，不用管 -->
                            <li v-for ="goods in goodsLists">
                                <div class="pic">
                                    <a href="#">
                                      
                                      <!-- <img src="/static/img/1.jpg" alt=""> -->
                                      <img v-bind:src="'/static/img/'+goods.productImage" alt="">
                                      </a>
                                </div>
                                <div class="main">
                                    <div class="name">{{goods.productName}}</div>
                                    <div class="price">{{goods.salePrice | money}}</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m" v-on:click="addcart(goods.productId)">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <!-- <li>
                                <div class="pic">
                                    <a href="#"><img src="/static/img/2.jpg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">XX</div>
                                    <div class="price">1000</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="#"><img src="/static/img/3.jpg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">XX</div>
                                    <div class="price">500</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="pic">
                                    <a href="#"><img src="/static/img/4.jpg" alt=""></a>
                                </div>
                                <div class="main">
                                    <div class="name">XX</div>
                                    <div class="price">2499</div>
                                    <div class="btn-area">
                                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                                    </div>
                                </div>
                            </li> -->
                        </ul>
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
//曝光组件
export default {
  name: 'ProjectList',
  data(){  //自己本身带的
      return {
          goodsLists:[]  //商品数量
      }
  },
  mounted(){ 
      //挂载后，再获取后台元素
      var self = this
      this.axios.get('/static/mock/mock-goods.json')
      
        .then(function(res){
            //console.log(res)
            //console.log(res.data.data)
           self.goodsLists = res.data.data 
        })
  },
  methods:{
      addcart:function(productId){
        // alert(productId) //检验是否会获取商品的ID
       // alert(this.$store.state.count)
      
        //发送axios给后台，去添加数据到购物车
        this.axios.post("/api/goods/addcart",{
            productId:productId
        })
        .then( (res) =>{
           // console.log(res)
          var data = res.data
          if(data.status==0){
            //目的：让函数中的increment运行，+1
            this.$store.commit("increment");
          }
        })
      }
  },
  components:{
      NavMbx
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
