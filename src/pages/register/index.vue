<template>
  <div class="register">
    <div class="top">
      <van-icon name="arrow-left" size="30" /><span>注册小米账号</span>
     
    </div>
    <van-form @submit="onSubmit">

       <van-field
        v-model="nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />

      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <div class="bottom">
        <!-- <p>系统会根据您选择的国家</p> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        username: '',
        password: '',
        nickname: '',
    };
  },
  computed: {},
  watch: {},

  methods: {
      onSubmit(values) {
      console.log('submit', values);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style >

</style>
