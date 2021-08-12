<template>
  <!-- 展示数据 -->
  <!-- 使用vant cart组件 -->
  <div class="" v-if="obj">
    <van-nav-bar
      title="商品详情"
      left-text="返回首页"
      right-text="个人中心"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <img :src="obj.coverImg" alt="" width="100%" height="300px" class="im" />
    <van-card
      num="1"
      :title="obj.name"
      :thumb="obj.coverImg"
      :price="obj.price"
      class="det"
    />
    <!--加入购物车 -->
    <!-- 添加click事件 -->
    <van-button type="info" block @click="addcart(obj._id)" class="add"
      >加入购物车</van-button
    >
    <van-button type="primary" block class="ret" @click="gohoem()"
      >返回首页</van-button
    >
  </div>
</template>

<script>
//引入接口
import { reqProductDetail } from "../../api/product";
// 引入
import { addToCart } from "../../api/cart";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      //展示数据
      id: "",
      obj: null,
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 初始化详情
    async init(id) {
      const result = await reqProductDetail(id);
      console.log(result);
      this.obj = result.data;
    },
    // 添加购物车
    async addcart(id) {
      // id表示商品的id
      const result = await addToCart(id);
      console.log(result);
      if (result.data.code === "success") {
        Toast.success("添加购物车成功");
        this.$router.push("/cart");
      }
    },
    onClickLeft() {
      this.$router.push("/home");
    },
    onClickRight() {
      this.$router.push("/user");
    },
    gohoem() {
      this.$router.push("/home");
    },
  },
  created() {
    //获取id
    this.id = this.$route.params.id;
    //执行
    this.init(this.id);
  },
  mounted() {},
};
</script>
<style scoped>
.det {
  margin-top: 10px;
}
.add {
  margin-top: 30px;
}
.ret {
  margin-top: 20px;
}
</style>
