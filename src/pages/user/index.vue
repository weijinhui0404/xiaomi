<template>
  <div class="user">
    <div class="top">
      <div class="avatar">
        <img :src="urlImg" alt="" />
      </div>
      <p>登录/注册</p>
    </div>

    <div class="order">
      <div class="order-left">我的订单</div>
      <div class="order-right">全部订单<van-icon name="arrow" size="30" /></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      urlImg: "https://m.mi.com/static/img/avatar.76a75b8f17.png",
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 70px;
  background: url(../../../public/img/user-bj.png) center 0 #f37d0f;
  background-size: auto 100%;
  padding: 10px 0px;
  position: relative;
}
.top .avatar {
  width: 65px;
  height: 65px;
  border: 3px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 50%;
  margin: 0px 25px 0 25px;
}
.top .avatar img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
.top p {
  position: absolute;
  top: 15px;
  left: 110px;
  color: beige;
  font-size: 18px;
}
.order {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
.order .order-left {
  float: left;
  margin-left: 25px;
}
.order .order-right {
  float: right;
  font-weight: 500;
  margin-right: 50px;
  position: relative;
  color: rgba(0, 0, 0, 0.87);
  font-size: 18px;
}
.van-icon-arrow::before {
  position: absolute;
  right: -33px;
  top: -22px;
  color: rgba(0, 0, 0, 0.15);
}
</style>