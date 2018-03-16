<!-- 登录界面  -组件-->
<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" v-bind:class ="mdShow?'md-show':''" >
        <div class="md-modal-inner">
          <div class="md-top">
            <div class="md-title">login in</div>
            <button class="md-close" v-on:click="Close">Close</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <div class="error-wrap" v-show="hasError">
                <span class="error error-show" >用户名或密码错误</span>
              </div>
              <ul>
                <li class="regi_form_input">
                  <input type="text" tabindex="1" name="loginname" v-model="userName" placeholder="User Name" data-type="loginname" class="regi_login_input regi_login_input_left">
                </li>
                <li class="regi_form_input noMargin">
                  <i class="icon IconPwd"></i>
                  <input type="password" tabindex="2" name="password" v-model="userPwd" placeholder="Password" class="regi_login_input regi_login_input_left login-input-no input_text" @keyup.enter="login">
                </li>
              </ul>

            </div>
            <div class="login-wrap">
              <a href="javascript:;" class="btn-login" @click="Login">登录</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 绑定个显示隐藏属性命令 -->
      <div class="md-overlay" v-show="mdShow">
      </div>
  </div>
</template>

<script>
export default {
    name:'LoginPage',
    props:["mdShow"], //来自父级传输的数据
    data(){           //自己本身的数据
      return{
        //  mdShow:true 
         hasError:false,
         userName : "",
         userPwd : ""
      }
    },
   // 方法
    methods: {
      //点击登录，发送ajax请求数据过去。
      Login:function() {
        // this.axios.post("http://hope1995.me:3000/users/login ",{
        this.axios.post("/api/users/login ",{
          
          userName:this.userName,
          userPwd:this.userPwd
        })
         .then((res) => {  //E6增加的写法规格，代表返回数据
           //console.log(res)  //数据到手，现在做下一步。
            var result  =  res.data

             // console.log(result)
            if(result.status==0){  //成功
            //传值给父级，第一个是事件名，第二个是数据，包括第二个后面都是数据
              this.$emit("chenggong",result.result.userName)
            }
            else{
              this.hasError = true
            }
         }) 
      },
      Close: function () {
          //子组件不能用这个传值给父级
          // this.mdShow = false
          this.$emit("guan")   //只能通过这个事件请求去发送
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
