<!-- 公共组件，用来替换头部下面的首页与购物车/热门商品-->
<template>
  <div>
    <div class="nav-breadcrumb-wrap">
        <div class="container">
            <nav class="nav-breadcrumb">
                <a href="/">首页</a>
                
                <span>    <!-- 替换  父传子 -->
                  <slot></slot>
                </span>
            </nav>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"NavMbx"
  }
</script>

<style></style>