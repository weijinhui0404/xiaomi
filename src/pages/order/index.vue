<template>
  <div class="order">
    <van-nav-bar
      title="全部订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="order-list" v-for="item in ordersList" :key="item._id">
      <div class="list-left"><van-checkbox v-model="item.checked" /></div>
      <div class="list-right">
        <h5>订单号：{{ item.no }}</h5>
        <p>
          价格：<span>￥{{ item.price }}</span>
        </p>
      </div>
      <div class="del">
        <van-icon
          name="delete"
          v-show="item.checked"
          @click="del(item._id)"
        ></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';  //getOrderDetailApi
import { getOrderApi, deletOrderDetailApi } from "../../api/order";
export default {
  components: {},
  data() {
    return {
      ordersList: [],
      idx: [],
      checked: false,
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
    //删除订单
    async del(id) {
      console.log(id);
      const result = await deletOrderDetailApi(id)
      console.log(result);
      Toast.success("删除成功")
      location.reload();
    },
    //获取订单列表
    async getOrder() {
      const result = await getOrderApi();
      console.log(result);
      console.log(result.data.orders);
      this.ordersList = result.data.orders;
      // result.data.orders.forEach((item)=>{
      //   this.idx.push(item._id);
      // })
      //根据id获取订单详情
      //     this.idx.forEach((id)=>{
      //       getOrderDetailApi(id).then((res)=>{
      //           console.log(res);
      //       })

      //     })
    },
  },
  created() {
    this.getOrder();
  },
  mounted() {},
};
</script>
<style scoped>
.order {
  width: 100%;
  height: 100%;
  background: rgba(228, 225, 225, 0.7);
  padding-bottom: 10px;
}

.order-list {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 10px;
  background: #fff;
  border-radius: 10px;
}
.list-left {
  margin-left: 15px;
}
.list-right {
  margin-left: 20px;
  flex: 1;
}
.list-right span {
  color: rgb(231, 67, 2);
}
.del {
  margin-right: 10px;
  color: red;
}
</style>