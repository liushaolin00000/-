<template>
  <el-container class="container">
   
    <!-- 侧边栏 -->
    <!-- default-active  当前高亮选中的菜单 -->
    <el-aside width="200px">
       <div class="logo">黑马头条</div>   
       <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      width="100%">   
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="post-list">
          <el-menu-item index="1-1">文章列表</el-menu-item>
          </router-link>
          <router-link to="issue"> 
          <el-menu-item index="1-2">发布文章</el-menu-item>
          </router-link>
        </el-menu-item-group>
        </el-submenu>
      </el-submenu>
    </el-menu></el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="header">
          <img :src="$axios.defaults.baseURL + user.user.head_img" alt="" v-if='user.user.head_img'>
          <img src="../../static/2.jpg" v-if='!user.user.head_img'>
          <span class="middle">{{user.user.nickname}}</span>
          <span>退出</span>
      </el-header>
      <!-- 子页面内容显示部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data(){
        return{
            user:JSON.parse(localStorage.getItem('user'||'{}'))
        }
    }
};
</script>

<style lang='less' scoped>
el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #333333;
  color: #333;
  text-align: center;
  line-height: 200px;
  .logo{
    font-size: 20px;
    color: #cccccc;
    height: 60px;
    line-height: 60px;
    width: 100%;
    margin:auto;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width:100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.header{
    display: flex;
    background: #b1becf;
    align-items: center;
    justify-content: flex-end;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .middle{
        margin-left: 10px;
        margin-right: 15px;
    }
}
</style>