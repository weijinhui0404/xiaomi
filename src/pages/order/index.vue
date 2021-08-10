<template>
  <div class="order">
    <van-nav-bar
      title="全部订单"
      left-text="返回"
     
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
  components: {},
  data() {
    return {
        
    };
  },
  computed: {},
  watch: {},

  methods: {
      onClickLeft() {
      this.$router.push("/user")
    },
    onClickRight() {
      Toast('按钮');
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>