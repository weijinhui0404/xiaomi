<template>
  <div class="user">
    <div class="top">
      <div class="avatar">
        <img :src="urlImg" alt="" />
      </div>
      <p @click="gologin">{{nickName}}</p>
    </div>

    <div class="order">
      <div class="order-left">我的订单</div>
      <div class="order-right" @click="goOrder">
        全部订单<van-icon name="arrow" size="30" />
      </div>
    </div>
    <div class="icon">
      <ul class="icon-list">
        <li>
          <van-icon name="flower-o" />
          <p>待评价</p>
        </li>
        <li>
          <van-icon name="logistics" />
          <p>待收货</p>
        </li>
        <li>
          <!-- <van-icon name="gold-coin-o" /> -->
          <van-icon name="balance-o" />
          <p>钱包</p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <span><van-icon name="map-marked" color="#66cccc"/></span>
      </div>
      <div class="bottom-right" @click="goaddress">
        <p>收货地址</p>
        <div class="icon-right"><van-icon name="arrow" size="30" /></div>
      </div>
      <div class="bottom-left">
        <span><van-icon name="gem" color="#ffcc33"/></span>
      </div>
      <div class="bottom-right tow" @click="changeInfo">
        <p>修改信息</p>
        <div class="icon-right"><van-icon name="arrow" size="30" /></div>
      </div>
    </div>

    <div class="bottom">
      <div class="bottom-left">
        <span><van-icon name="point-gift" color="#ff9933"/></span>
      </div>
      <div class="bottom-right">
        <p>礼物兑换</p>
        <div class="icon-right"><van-icon name="arrow" size="30" /></div>
      </div>
      <div class="bottom-left">
        <span><van-icon name="like" color="#ff6666"/></span>
      </div>
      <div class="bottom-right tow">
        <p>服务中心</p>
        <div class="icon-right"><van-icon name="arrow" size="30" /></div>
      </div>
    </div>

     <div class="bottom">
      <div class="bottom-left">
        <span><van-icon name="setting" color="#999"/></span>
      </div>
      <div class="bottom-right tow">
        <p>退出登录</p>
        <div class="icon-right"><van-icon name="arrow" size="30" /></div>
      </div>
    </div>

  </div>
</template>

<script>
import {infoApi} from "../../api/user"
export default {
  components: {},
  data() {
    return {
      urlImg: "https://m.mi.com/static/img/avatar.76a75b8f17.png",
      nickName:"登录/注册",
      userName:null,
    };
  },
  computed: {},
  watch: {},

  methods: {
    goOrder() {
      this.$router.push("/order");
    },
    gologin(){
      this.$router.push("/login");
    },
    //获取用户信息
    async getInfo(){
      const result = await infoApi()
      console.log(result);
      this.nickName = result.data.nickName;
      this.urlImg = result.data.avatar
    },
    goaddress(){
      this.$router.push("/address")
    },
    changeInfo(){
      this.$router.push("/changeinfo")
    }
  },
  created() {
    this.getInfo()
  },
  mounted() {},
};
</script>
<style scoped>
.user{
  margin-bottom: 10px;
  /* overflow-x:hidden; */
}
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

.icon .icon-list {
  width: 100%;
  height: 120px;
}

.icon .icon-list li {
  float: left;
  width: 33%;
  text-align: center;
}
.icon .icon-list .van-icon::before {
  font-size: 36px;
  margin-top: 25px;
  color: rgba(0, 0, 0, 0.5);
}
.icon .icon-list li p {
  line-height: 0;
}
.bottom {
  width: 100%;
  height: 120px;
  padding-top: 15px;
  /* padding-bottom: 15px; */
  background: #f5f5f5;
  font-size: 20px;
  color: rgba(0,0,0,.87);
}
.bottom .bottom-left {
  height: 50px;
  background: #fff;
  padding-top: 10px;
  padding-right: 15%;
  float: left;
  width: 5%;
}
.bottom span .van-icon::before {
  font-size: 36px;
  /* color: rgb(35, 160, 160); */
  margin-left: 25px;
}
.bottom .bottom-left,
.bottom .bottom-right,
.bottom .bottom-right p {
  float: left;
  background: #fff;
}
.bottom .bottom-right {
  width: 75%;
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  position: relative;
}
.bottom-right .icon-right {
  float: right;
  position: absolute;
  right: 0px;
  top: 20px;
  width: 10%;
  height: 30px;
}

.bottom-right .icon-right .van-icon-arrow::before {
  color: rgba(0, 0, 0, 0.15);
}
.bottom .tow {
  border: none;
}
</style>