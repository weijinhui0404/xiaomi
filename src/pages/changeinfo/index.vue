<template>
  <div class="change">
    <!-- <h3>信息修改</h3> -->
    <div class="top">
      <van-uploader :after-read="afterRead" v-if="!urlImg" />
      <img :src="urlImg" alt="" v-if="urlImg" />
      <!-- 表单 -->

      <van-form @submit="onSubmit">
        <van-field
          v-model="nickname"
          name="nickName"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
        />

        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >保存</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { infoApi } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      urlImg: "https://m.mi.com/static/img/avatar.76a75b8f17.png",
      nickname: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    onSubmit() {
      console.log(11);
    },
    //获取用户信息
    async getInfo() {
      const result = await infoApi();
      console.log(result);
      this.nickName = result.data.nickName;
      this.urlImg = result.data.avatar;
    },
  },
  created() {
    this.getInfo();
  },
  mounted() {},
};
</script>
<style scoped>
.change h3 {
  margin-left: 100px;
  margin-top: 100px;
}

.top {
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
.top .avatar {
  width: 50px;
  height: 50px;
  border: 3px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 50%;
  margin: 0px 25px 0 25px;
}
.top  img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.top .van-uploader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.top .van-cell {
  margin-left: 90px;
  width: 60%;
}
.top .van-button--block {
  display: inline-block;
  width: 60%;
}
</style>