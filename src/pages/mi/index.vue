<template>
  <div class="mi">
    <div class="fff">
      <img class="img1" :src="user.avatar" alt="" @click="goUser" />
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
          src="https://img1.baidu.com/it/u=2722680213,1355660551&fm=26&fmt=auto&gp=0.jpg"
          alt=""
          width="100%"
        />
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="flx">
              <p class="h">
                <img :src="user.avatar" alt="" width="30" height="30" />
                <span>{{ user.nickName }}</span>
              </p>
              <van-icon name="more-o" class="delicon" @click="jubao" />
            </div>
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

                <van-icon name="thumb-circle-o" @click="tan" />
              </p>
            </div>
          </li>
          <van-popup
            v-model="show"
            round
            position="bottom"
            :style="{ height: '35%' }"
            overlay
          >
            <p class="p1">
              <span class="span">天上的鱼：</span
              ><span class="span2">上辈子作恶多端 这辈子早起上班</span>
            </p>
            <p class="p1">
              <span class="span">海里的鸟：</span
              ><span class="span2">天气炎热 想玩水的朋友可以来我家洗碗</span>
            </p>
            <p class="p1">
              <span class="span">树上的虾：</span
              ><span class="span2">绝绝子<van-icon name="good-job"/></span>
            </p>
            <p class="p1">
              <span class="span">窗外的雪：</span
              ><span class="span2">666<van-icon name="good-job"/></span>
            </p>
            <p class="p1">
              <span class="span">门外的他：</span
              ><span class="span2">999<van-icon name="like"/></span>
            </p>
          </van-popup>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "../../utils/request";
import { Toast } from "vant";
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
          id: 1,
          str:
            "情人节表白，人家不听；愚人节表白，人家不信；清明节表白，人家不应；",
          imgUrl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.w.yun.hjfile.cn%2Fdoc%2F201412%2F73c85ef4aca048a3a1b71a88a62a8f2a.jpg&refer=http%3A%2F%2Fi2.w.yun.hjfile.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631271222&t=c6a455b1d1273777b86483ac4424845b",
        },
        {
          id: 1,
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
    // 评论
    showPopup() {
      this.show = true;
    },
    // 点赞提示
    tan() {
      Toast({
        message: "谢谢你这么好看还赞我",
        icon: "flower-o",
      });
    },
    // 点击头像到个人页面
    goUser() {
      this.$router.push("/user");
    },
    // 举报
    jubao() {},
  },
  created() {
    this.getmine();
    // console.log(JSON.parse(this.$route.query.imgs));
    // 真假数据保存到本地;
    var str = localStorage.getItem("list");
    if (str == null) {
      if (JSON.parse(str).length == this.list.length) {
        localStorage.setItem("list", JSON.stringify(this.list));
      }
    } else {
      this.list = JSON.parse(localStorage.getItem("list"));
      if (this.$route.query.imgs) {
        this.list.unshift({
          id: 1,
          imgUrl: JSON.parse(this.$route.query.imgs)[0].content,
          str: this.$route.query.str,
        });
      }
      localStorage.setItem("list", JSON.stringify(this.list));
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
  justify-content: space-between;
  padding: 0 10px;
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
  z-index: 0;
}
.big {
  font-size: 30px;
}
.p1 {
  width: 80%;
  margin: 20px auto;
  padding: 20px 0;
}
.span {
  float: left;
}
.span2 {
  width: 60%;
  float: left;
}
.h {
  display: flex;
  align-items: center;
}
</style>
