<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar
      route
      v-if="this.$route.meta.showTab"
      active-color="#ff6600"
      inactive-color="#000"
    >
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" to="/fenlei">商品分类</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/mi">米圈</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
 
  data() {
    return {
     
      active: 0,
    //   icon: {
    //     active: "https://img01.yzcdn.cn/vant/user-active.png",
    //     inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
    //   },
    };
  },
  methods:{
   
  },
};
</script>

<style>
</style>
