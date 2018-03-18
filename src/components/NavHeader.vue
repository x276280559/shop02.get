<!-- index 头部界面-->

<template>
  <div class="hello">
    <div class="site-header" style="clear:both;">
        <div class="container">
            <div class="header-logo">
                <a href="index.php" title="小米官网"><img src="/static/img/logo.png" /></a>
            </div>
            <div class="header-nav">
                <ul class="nav-list">
                    <li class="nav-category">
                        <a class="btn-category-list" href="catalog.php" style="display:none;">全部商品分类</a>
                    </li>
                    <li class="nav-item">
                         <!-- <a class="link" href="category.php?id=76"><span>电子产品</span></a> -->
                        <div class='item-children'>
                            <div class="container">
                                <ul class="children-list clearfix">
                                    <li class="first">
                                        <div class="figure figure-thumb">
                                            <a href="goods.php?id=27"><img src="" alt="小米电视2 40英寸"></a>
                                        </div>
                                        <div class="title"><a href="goods.php?id=27">小米电视2 40英寸</a></div>
                                        <p class="price">2200<em>元</em>元</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- <div class="container-user"> -->
            <div class="topbar-cart" id="ECS_CARTINFO">
                <a class="cart-mini " href="/#/Cart">
                    <i class="iconfont">&#xe60c;</i> 购物车
                    <span class="mini-cart-num J_cartNum" id="hd_cartnum">({{carnub}})</span>
                </a>
            </div>
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE" v-show="userName==''">
                <a class="link" href="#" rel="nofollow" @click="ShowModal">登录</a>
                <span class="sep">|</span>
                <a class="link" href="user.php?act=register" rel="nofollow">注册</a>
            </div>
            <div class="topbar-info J_userInfo" id="ECS_MEMBERZONE" v-show="userName!=''">
                {{userName}}
                <a class="link" href="#" rel="nofollow" @click="exit">退出</a>
            </div>
        </div>
        <div id="J_navMenu" class="header-nav-menu" style="display: none;">
            <div class="container"></div>
        </div>
    </div>
    <!-- 使用登录组件模块 -->
    <login-page 
    v-bind:md-show="ShowLogin"
    v-on:guan="closeModal"
    v-on:chenggong="qhuan"
    ></login-page>
  </div>
</template>

<script>
//引入组件
import LoginPage from '@/components/LoginPage'

export default {
    name: 'NavHeader',
    data(){
        return {
            ShowLogin:false,
            userName:""
        }
    },
    computed:{
        carnub(){
           return this.$store.state.count
        }
    },
    mounted:function(){
        //能获取到自定义的全局store组件 
        //alert(this.$store.state.count)
    
    //检查是否登录接口 ajax 获取数据
    //用处：当登录进去后，刷新页面不会造成页面登录接口退出来。
        this.axios.get("/api/users/checkLogin")
            .then( (res) => {
                //console.log(res.data)
                var data = res.data
                if(data.status == 0){
                    this.userName = data.result
                }else{
                    this.userName = ""
                }
            })
    },
    //方法项
    methods: {
        //退出 ajax 获取数据
        exit(){
           // alert("")
           this.axios.post("/api/users/logout")
                .then( (res) => {
                    var data = res.data
                    if(data.status == 0){
                        this.userName = ""
                    }else{
                        return 
                    }
                }) 
        },
        qhuan(userName){
            this.userName = userName;
            //console.log(this.userName)  输出 admin 名
            this.closeModal()
        },

        ShowModal: function () {  //打开
            this.ShowLogin = true
        },
            closeModal: function () {  //关闭登录对话框
            this.ShowLogin = false
        },
    // qhuan: function(e){  //传用户名数据过来
    //     this.ShowLogin = false
    //     this.userName = e
    //      console.log(e)
    //     if(e!==null){  //判断用户名是否存在。
    //        // alert(Cookie)
    //         //console.log("haha")
    //        this.axios.get("/api//users/checkLogin")
    //          .then( (res) => {
    //            this.userName = data
    //          })
    //     }
    // }
    },
    components:{  
        LoginPage
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
