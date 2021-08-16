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
    <van-submit-bar :price="3050" button-text="删除订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { Toast } from "vant"; //getOrderDetailApi
import { getOrderApi, deletOrderDetailApi ,delManyOrderApi} from "../../api/order";
export default {
  components: {},
  data() {
    return {
      ordersList: [],
      idx: [],
      // checked: false,
    };
  },
  computed: {
    checked: {
      //全选按钮为true时 勾选每一项
      set(flag) {
        this.ordersList.map((item) => this.$set(item, "checked", flag));
      },
      get() {
        //全选择时，全选按钮显示
        return (
          this.ordersList.length ==
          this.ordersList.filter((item) => item.checked == true).length
        );
      },
    },
  },
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
    //删除订单
    async del(id) {
      console.log(id);
      const result = await deletOrderDetailApi(id);
      console.log(result);
      Toast.success("删除成功");
      location.reload();
    },
    //获取订单列表
    async getOrder() {
      const result = await getOrderApi();
      console.log(result);
      console.log(result.data.orders);
      this.ordersList = result.data.orders;
    },
    //批量删除订单
    async onSubmit(){
      this.ordersList.forEach((item)=>{
        if(item.checked){
          this.idx.push(item._id)
        }
      })
      console.log(this.idx);
      const result = await delManyOrderApi({ids:this.idx})
      console.log(result);
      location.reload();
    }
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