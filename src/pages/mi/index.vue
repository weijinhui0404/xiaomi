<template>
  <div class="mi">
    <div class="fff">
      <img class="img1" :src="user.avatar" alt="" />
      <van-tabs v-model="active" class="aaa" @click="onClick">
        <van-tab title="关注"> </van-tab>
        <van-tab title="广场"> </van-tab>
      </van-tabs>
      <van-icon name="bell" />
    </div>
    <div class="box">
      <van-empty description="暂时没有关注" v-show="aaa" />
      <div v-show="bbb">
        <div class="yuan" @click="gofabu">
          <span class="big">
            +
          </span>
          <span>发布</span>
        </div>
        <img
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.tuicool.com%2FQJ3IvqI.png%21web&refer=http%3A%2F%2Fimg1.tuicool.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631270314&t=455cfdff48719ae8da17d7b6bcb8be8d"
          alt=""
          width="100%"
        />
        <ul>
          <li v-for="(item, index) in list" :key="item.id + index">
            <p class="flx">
              <img :src="user.avatar" alt="" width="30" height="30" />
              <span>{{ user.nickName }}</span>
            </p>
            <div class="text">
              <span>
                {{ item.str }}
              </span>
              <br />
              <img class="iii" :src="item.imgUrl" alt="" width="50%" />
              <p class="boot">
                <van-icon name="share-o" @click="showShare = true" />
                <van-share-sheet
                  v-model="showShare"
                  title="立即分享给好友"
                  :options="options"
                  @select="onSelect"
                  :overlay="overlay"
                />
                <van-icon name="chat-o" @click="showPopup" />

                <van-icon name="thumb-circle-o" />
              </p>
            </div>
          </li>
          <van-popup
            v-model="show"
            round
            position="bottom"
            :style="{ height: '60%' }"
            overlay
            >内容</van-popup
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { get } from "../../utils/request";
export default {
  components: {},
  data() {
    return {
      show: false,
      user: "",
      active: 1,
      showShare: false,
      aaa: false,
      bbb: true,
      overlay: false,
      list: [
        {
          id: 1,
          str: "所有美好都应该和你一起经历",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.w.yun.hjfile.cn%2Fdoc%2F201412%2F73c85ef4aca048a3a1b71a88a62a8f2a.jpg&refer=http%3A%2F%2Fi2.w.yun.hjfile.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631271222&t=c6a455b1d1273777b86483ac4424845b",
        },
        {
          id: 2,
          str:
            "情人节表白，人家不听；愚人节表白，人家不信；清明节表白，人家不应；",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.w.yun.hjfile.cn%2Fdoc%2F201412%2F73c85ef4aca048a3a1b71a88a62a8f2a.jpg&refer=http%3A%2F%2Fi2.w.yun.hjfile.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631271222&t=c6a455b1d1273777b86483ac4424845b",
        },
        {
          id: 3,
          str: "七夕你要送我什么？“我送你离开千里之外”",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.w.yun.hjfile.cn%2Fdoc%2F201412%2F73c85ef4aca048a3a1b71a88a62a8f2a.jpg&refer=http%3A%2F%2Fi2.w.yun.hjfile.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631271222&t=c6a455b1d1273777b86483ac4424845b",
        },
      ],
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    gofabu() {
      this.$router.push("/fabu");
    },
    onClick(name, title) {
      Toast(title, name);
      if (name == 0) {
        this.aaa = true;
        this.bbb = false;
      } else {
        this.aaa = false;
        this.bbb = true;
      }
    },
    async getmine() {
      const res = await get("/api/v1/users/info");
      console.log(res);
      this.user = res.data;
    },
    showPopup() {
      this.show = true;
    },
  },
  created() {
    this.getmine();
    // console.log());
    console.log(this.$route.query);
    if (!this.$route.query) {
      var sss = JSON.parse(this.$route.query);
      this.list.push({
        id: 1,
        imgUrl: sss.imgs[0].content,
        str: sss.str,
      });
    } else {
      console.log(11);
    }
  },
  mounted() {},
};
</script>
<style scoped>
.fff {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}
.aaa {
  flex-shrink: 0;
  width: 200px;
}
.img1 {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.flx {
  display: flex;
  align-items: center;
}
.text {
  width: 80%;
  margin: 0 auto;
}
.iii {
  display: block;
  margin: 15px 50px;
}
.box {
  padding-bottom: 60px;
}
.boot {
  display: flex;
  font-size: 20px;
  justify-content: space-around;
}
.yuan {
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  background-color: orange;
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  color: #fff;
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 99999;
}
.big {
  font-size: 30px;
}
</style>
