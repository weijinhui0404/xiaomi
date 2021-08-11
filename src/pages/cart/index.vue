<template>
  <div class="">
    <div class="goods-list">
      <div class="goods" v-for="(data, i) in list" :key="data._id + i">
        <!-- 自己添加checked -->
        <van-checkbox v-model="data.checked" class="van" />
        <img
          class="goods-img"
          :src="data.product.coverImg"
          alt=""
          width="80"
          height="80"
        />
        <div class="goods-info">
          <p>{{ data.product.name }}</p>
          <span>￥{{ data.product.price }}</span>
          <span @click="updatePro(data.product._id, 1)">+</span
          >{{ data.quantity }}
          <span @click="data.quantity > 1 && updatePro(data.product._id, -1)"
            >-</span
          >
          <span v-if="data.checked" @click="del(data._id)">删除</span>
        </div>
      </div>
    </div>
    <van-submit-bar
      :price="sumPrice * 100"
      button-text="立即结算"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <van-icon name="delete" v-show="checked" @click="dels" />
    </van-submit-bar>
  </div>
</template>

<script>
// 引用
import { loadCartlist, addToCart, delpro } from "../../api/cart";
import { addorder } from "../../api/order";
export default {
  components: {},
  data() {
    return {
      //接收购物车列表数据
      list: [],
    };
  },
  computed: {
    checked: {
      set(flag) {
        //如果购物车全选按钮是true，那么就全选，如果是false那么不选中
        // return this.list.forEach((item) => (item.checked = flag));
        console.log(flag);
        //动态添加属性
        this.list.map((item) => this.$set(item, "checked", flag));
      },
      get() {
        //如果购物车的总长度等于选中的总长度那么返回true
        return (
          this.list.length ==
          this.list.filter((item) => item.checked == true).length
        );
      },
    },
    //获取选中的购物车列表
    selectgoods() {
      var selectlist = [];
      this.list.forEach((item) => {
        if (item.checked) {
          selectlist.push({
            quantity: item.quantity,
            product: item._id,
            price: item.product.price,
          });
        }
      });
      return selectlist;
    },
    //计算总价
    sumPrice() {
      //先选中勾选中的，然后计算它们的总价钱
      return this.list
        .filter((item) => {
          return item.checked;
        })
        .reduce(function(per, cur) {
          return per + cur.product.price * cur.quantity; //价格乘以数量
        }, 0);
    },
  },
  watch: {},

  methods: {
    //调用方法 获取购物车列表
    async getcartlist() {
      const result = await loadCartlist();
      console.log(result);
      //写购物车页面的详情
      this.list = result.data;
    },
    //加减号更新购物车数量
    async updatePro(id, num) {
      //调用接口 添加购物车
      await addToCart(id, num);
      // 添加完 更新list数据
      this.list.forEach((data) => {
        if (data.product._id == id) {
          data.quantity = data.quantity + num;
        }
      });
    },
    //删除单个购物车
    async del(id) {
      const result = await delpro(id);
      console.log(result);
      //删除以后 重新调一下接口
      await this.getcartlist();
    },
    //删除购物车
    dels() {},
    //提交订单
    async onSubmit() {
      // 判断有没有收货人，如果没有收货人就跳转到新增收货人页面
      const result = await addorder({
        receiver: "xxx",
        regions: "随便",
        address: "随便",
        orderDetails: this.selectgoods,
      });
      console.log(result);
    },
  },
  created() {
    // 初始化调用
    this.getcartlist();
  },
  mounted() {},
};
</script>
<style scoped>
.goods {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
  margin-left: 5px;
}
.van {
  margin-right: 5px;
  width: 10%;
}
.goods-img {
  width: 30%;
  height: 80px;
  border: 1px solid #ccc;
  margin-left: 5px;
}
.goods-info {
  width: 100%;
  margin-left: 5px;
}
</style>
