<template>
  <div class="change">
    <!-- <h3>信息修改</h3> -->
     <van-nav-bar
      title="修改个人信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="change-top">
      <van-uploader :after-read="afterRead" v-if="!urlImg" />
      <img :src="urlImg" alt="" v-if="urlImg" />
      <!-- 表单 -->

      <van-form @submit="onSubmit">
        <van-field
          v-model="nickname"
          name="nickName"
          label="昵称"
          placeholder="nickname"
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
import { Toast } from "vant";
import { infoApi,changeInfoApi } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      urlImg: "",
      nickname: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
     onClickLeft() {
      this.$router.push("/user");
    },
     afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.urlImg = file.content;
    },
    async onSubmit() {
     const result = await changeInfoApi({nickName:this.nickname,avatar:this.urlImg})
    console.log(result);
    if(result.data.code=="success"){
        Toast.success("修改成功")
        this.$router.push("/user")
    }
    },
    //获取用户信息
    async getInfo() {
      const result = await infoApi();
      console.log(result);
      this.nickname = result.data.nickName;
      // this.urlImg = result.data.avatar;
     
    },
  },
  created() {
    this.getInfo();
  },
  mounted() {},
};
</script>

<style>
/* scoped */
.change h3 {
  margin-left: 100px;
  margin-top: 100px;
}

.change-top {
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
.change-top .avatar {
  width: 50px;
  height: 50px;
  border: 3px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 50%;
  margin: 0px 25px 0 25px;
}
.change-top  img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.change-top .van-uploader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.van-field__label{
  margin-right: -30px;
}
.change-top .van-cell {
  margin-top: 50px;
  margin-left: 90px;
  width: 60%;
  font-size: 18px;
}
.change-top .van-button--block {
  display: inline-block;
  width: 60%;
}
</style>