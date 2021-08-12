<template>
  <div class="fabu">
    <!-- 顶部发布返回 -->
    <van-nav-bar
      title="米圈"
      left-text="返回"
      right-text="发布"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 留言板 -->
    <van-field
      v-model="message"
      rows="4"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="分享你的想法..."
      show-word-limit
    />
    <van-uploader v-model="fileList" multiple :max-count="1" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "",
      fileList: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    //   返回
    onClickLeft() {
      this.$router.go(-1);
    },
    //   发布
    onClickRight() {
      this.$router.push({
        name: "mi",
        query: {
          imgs: JSON.stringify(this.fileList),
          str: this.message,
        },
      });
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
