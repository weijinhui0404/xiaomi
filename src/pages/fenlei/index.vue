<template>
  <div class="fenlei">
    <van-sidebar v-model="activeKey" class="sti">
      <van-sidebar-item class="jb" title="推荐" @click="getalllist" />
      <van-sidebar-item
        v-for="(item, index) in titlist"
        :title="item.name"
        :key="item._id"
        @click="getlist(index)"
      />
    </van-sidebar>
    <div class="div">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :offset="50"
      >
        <van-card
          v-for="(item, index) in list"
          :key="item._id + index"
          :price="item.price"
          :title="item.name"
          :thumb="item.coverImg"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
export default {
  components: {},
  data() {
    return {
      activeKey: 0,
      list: [],
      titlist: [],
      loading: false,
      finished: false,
    };
  },
  computed: {},
  watch: {},

  methods: {
    onLoad() {},
    //   推荐列表   我这里是显示了全部
    async getalllist() {
      this.loading = true;
      const res = await get("/api/v1/products", {
        per: 120,
        page: 1,
      });
      console.log(res);
      this.loading = false;
      this.list = [...this.list, ...res.data.products];
      if (this.list.length < 10) {
        this.finished = true;
      } else if (this.list.length >= 120) {
        this.finished = true;
      } else {
        this.finished = false;
      }
    },
    // 分类传入不同的 参数
    async getlist(i) {
      const res = await get("/api/v1/products", {
        name: this.titlist[i].name,
      });
      console.log(res);
      if (this.titlist[i].name == "灯具") {
        var newlist = [];
        this.list.filter((item) => {
          if (item.name.includes("灯")) {
            newlist.push(item);
          }
          return newlist;
        });
        this.list = newlist;
        console.log(this.list);
      } else {
        this.list = res.data.products;
      }
    },
    // 获取分类 api
    async getmmm() {
      const res = await get("/api/v1/product_categories");
      //   console.log(res);
      this.titlist = res.data.categories;
    },
  },
  created() {
    //   开始就显示 推荐页面
    this.getalllist();
    this.getmmm();
  },
  mounted() {},
};
</script>
<style scoped>
.sti{
    position: fixed;
    left: 0;
    top: 0;
    float: left;
}
.div{
    width: 75%;
    height: 100%;
    float: right;
    padding-bottom: 60px;
}
.jb{
    font-weight: 900;
}
.van-card__price-integer{
    font-size: 14px;
}
</style>
