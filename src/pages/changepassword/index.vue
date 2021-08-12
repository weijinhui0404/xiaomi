<template>
  <div class="change">
    <!-- <h3>信息修改</h3> -->
     <van-nav-bar
      title="修改密码"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="change-top">
    
      <!-- 表单 -->

      <van-form @submit="onSubmit">
        <van-field
          v-model="oldPassword"
          name="oldPassword"
          label="旧密码"
          placeholder="旧密码"
          :rules="[{ required: true, message: '请填写旧密码' }]"
        />
        <van-field
        v-model="password"
        type="password"
        name="password"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写密码' }]"
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
import { infoApi,changePwdApi } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      oldPassword: "",
      password:"",
    };
  },
  computed: {},
  watch: {},

  methods: {
     onClickLeft() {
      this.$router.push("/user");
    },
    
    async onSubmit() {
     const result = await changePwdApi({oldPassword:this.oldPassword,password:this.password})
    console.log(result);
    if(result.data.code=="success"){
        Toast.success("修改密码成功")
        this.$router.push("/user")
    }else{
        Toast.fail(result.data.message);
    }
    },
    //获取用户信息
    async getInfo() {
      const result = await infoApi();
      console.log(result);
      // this.nickname = result.data.nickName;
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
  /* margin-top: 50px; */
  margin-left: 90px;
  width: 60%;
  font-size: 18px;
}
.change-top .van-button--block {
  display: inline-block;
  width: 60%;
}
</style>