<template>
  <div class="login">
     <!-- <van-icon name="arrow-left" size="30" /> -->
    
    <h3>小米商城账号登录</h3>
    <div class="top">
     
    <!-- 表单 -->
    <van-form @submit="onSubmit">
     
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
          >登录</van-button
        >
      </div>
      <p @click="goregister">没有账号？立即注册</p>
    </van-form>
    </div>
  </div>
</template>

<script>
import {loginApi} from "../../api/user"
import { Toast } from 'vant';
import {setToken} from "../../utils/auth"
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSubmit(){
      const result = await loginApi({
        userName:this.username,
        password:this.password,
      })
      console.log(result);
      if(result.data.code == "success"){
        console.log(result.data.token);
        setToken(result.data.token)
        Toast.success('登录成功');
        this.$router.push("/home")
      }else{
        Toast.fail('密码或用户错误');
      }
    },
    goregister(){
      this.$router.push("/register")
    }
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>

.login h3{
  margin-left: 100px;
  margin-top: 100px;
}

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