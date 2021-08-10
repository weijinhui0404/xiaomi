<template>
  <div class="home">
    <!-- 头部搜索 -->
    <div id="top">
      <p class="logo">
        <img
          src="https://img1.baidu.com/it/u=2254580103,1701342391&fm=26&fmt=auto&gp=0.jpg"
          alt=""
        />
      </p>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        class="topipt"
        @search="onSearch"
      />
      <van-icon name="friends-o" color="#999" class="toprig" />
    </div>

    <!-- nav -->
    <van-tabs v-model="active" @click="classify" sticky class="nav">
      <van-tab v-for="item in topnav" :title="item.title" :key="item.id">
        <!-- 内容 {{ item }} -->
      </van-tab>
    </van-tabs>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in image" :key="item.id">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 导航 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="value in toplist"
        :key="value.id"
        :icon="value.icon"
        :text="value.title"
      />
    </van-grid>
    <!-- 商品列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="lanlist"
    >
      <li v-for="item in productlist" :key="item._id" class="productlist">
        <p class="productimg"><img :src="item.coverImg" alt="" /></p>
        <p class="productBtm">
          <span>商品名{{ item.name }}</span>
          <span class="liPrice">价格{{ item.price }}</span>
          <button class="btn">立即购买</button>
        </p>
      </li>
    </van-list>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  components: {},
  data() {
    return {
      value: "",
      active: 0,
      topnav: [
        { id: 1, title: "推荐", name: "五五" },
        { id: 2, title: "手机", name: "手机" },
        { id: 3, title: "手表", name: "智能手表" },
        { id: 4, title: "电视", name: "电视" },
        { id: 5, title: "口红", name: "口红" },
        { id: 6, title: "耳机", name: "耳机" },
      ],
      toplist: [
        { id: 1, title: "米金商城", icon: "gem-o" },
        { id: 2, title: "小米众筹", icon: "gift-o" },
        { id: 3, title: "Note9", icon: "paid" },
        { id: 4, title: "以旧换新", icon: "discount" },
        { id: 5, title: "小米上新", icon: "brush-o" },
        { id: 6, title: "智能", icon: "smile-o" },
        { id: 7, title: "笔记本", icon: "cashier-o" },
        { id: 8, title: "电视热卖", icon: "bullhorn-o" },
        { id: 9, title: "洗衣机", icon: "flower-o" },
        { id: 10, title: "米粉卡", icon: "idcard" },
      ],
      image: [
        {
          id: 1,
          img:
            "https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/293416286_1043890338_660_200.jpg",
        },
        {
          id: 2,
          img:
            "https://img1.baidu.com/it/u=1163197357,128305866&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 3,
          img:
            "https://img2.baidu.com/it/u=624006919,3231102418&fm=26&fmt=auto&gp=0.jpg",
        },
      ],
      productlist: [],
      loading: false,
      finished: false,
    };
  },
  computed: {},
  watch: {},

  methods: {
    //   获取推荐页面商品信息
    async getproductlist() {
      // 加载状态结束
      this.loading = true;
      const result = await get("/api/v1/products", {
        per: 120,
        page: 1,
      });
      console.log(result);
      this.loading = false;
      this.productlist = [...this.productlist, ...result.data.products];
      console.log(this.productlist);
      if (result.data.products.length < 10) {
        this.finished = true;
      } else if (result.data.products.length >= 120) {
        this.finished = true;
      } else {
        this.finished = false;
      }
    },

    // 懒加载
    onLoad() {
      this.getproductlist();
    },

    // 搜索框
    onSearch(val) {
      var seach = [];
      this.productlist.forEach((item) => {
        if (item.name.includes(val)) {
          seach.push(item);
        }
        this.productlist = seach;
      });
    },
    // 分类
    async classify() {
      const result = await get("/api/v1/products", {
        name: this.topnav[this.active].name,
      });
      console.log(result.data);
      //   console.log(result.data.products);
      this.productlist = result.data.products;
      if (this.active == 0) {
        this.getproductlist();
      }
    },
  },

  created() {
    this.getproductlist();
  },
  mounted() {},
};
</script>
<style scoped>
/* 头部 */
#top {
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-around;
}
.logo img {
  width: 80px;
  height: 50px;
  position: absolute;
  top: 0px;
  left: -10px;
}
.topipt {
  width: 260px;
  height: 50px;
  text-indent: 0.5em;
}
.toprig {
  padding-top: 10px;
  font-size: 30px;
}
/* 头部navbar */
.topnav {
  margin-top: 5px;
  display: flex;
  justify-content: space-around;
  color: #999;
}
/* 轮播图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.van-swipe-item img {
  width: 100%;
  height: 180px;
}
/* 商品列表 */

.productlist {
  display: inline-block;
  width: 45%;
  text-align: center;
  margin: 5px 9px;
  background: rgb(246, 246, 246);
}
.productBtm {
  display: flex;
  flex-direction: column;
}
.productimg img {
  width: 150px;
  height: 150px;
}
.btn {
  width: 100px;
  height: 30px;
  color: #fff;
  border: none;
  background-color: rgb(255, 128, 0);
  margin: 0 auto;
}
.lanlist {
  padding-bottom: 50px;
}
.liPrice {
  margin: 8px auto;
}
</style>
