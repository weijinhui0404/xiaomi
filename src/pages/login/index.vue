<template>
  <div class="login">
     <van-icon name="arrow-left" size="30" />
    <div class="logo">
      <img src="../../../public/img/logo.png" alt="" />
      <p>让每个人都能享受科技的乐趣</p>
    </div>
    <h3>小米商城账号登录</h3>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url(../../../public/img/register.jpg);
}
.logo {
 
  padding-top: 50px;
  text-align: center;
  color: #666;
}
.logo img {
  width: 50px;
  height: 50px;
  border-radius: 15px;
}
.login h3{
   padding: 20px;
}
</style>