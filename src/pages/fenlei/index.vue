<template>
  <div class="fenlei">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="口红" @click="getkouhong" />
      <van-sidebar-item title="手机" />
      <van-sidebar-item title="智能手表" />
      <van-sidebar-item title="耳机" />
      <van-sidebar-item title="电视" />
      <van-sidebar-item title="灯具" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeKey: 0,
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
