<template>
  <div class="register">
    <div class="top">
      <!-- 文件上传 -->
    <van-uploader :after-read="afterRead" v-if="!urlImg"/>
    <img :src="urlImg" alt="" v-if="urlImg"/>
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="nickname"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="username"
        name="userName"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
      <p @click="gologin">已有账号？立即登录</p>
    </van-form>
    </div>
    
  </div>
</template>

<script>
import { regApi } from "../../api/user";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      urlImg: "",
      username: "",
      password: "",
      nickname: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.urlImg = file.content;
    },
    async onSubmit(values) {
      if (this.urlImg) {
        const result = await regApi({ ...values, avatar: this.urlImg });
        console.log(result);
        if(result.data.code==="success"){
            Toast.success('注册成功')
            this.$router.push('/login')
        }else{
            Toast.fail(result.data.message);
        }
      }else{
          Toast.fail('请上传头像');
      }
    },
    gologin(){
      this.$router.push("/login")
    }
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.top{
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
.top .van-uploader{
  width: 100px;
  height: 100px;
  border-radius: 50%;
 margin-bottom: 20px;
}

.top img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.top p{
  font-size: 14px;
  color:#333;
}
.top .van-cell{
  margin-left: 90px;
  width: 60%;
}
.top .van-button--block{
  display: inline-block;
  width: 60%;
}
</style>