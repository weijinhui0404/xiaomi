<template>
  <div class="address">
    <van-nav-bar
      title="我的收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
     
    />
  </div>
</template>

<script>
// import { Toast } from 'vant';deletAddressApi
import {getAddressApi } from "../../api/address"
// import {post} from "../../utils/request"
export default {
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
     onAdd() {
      this.$router.push("/addressAdd");
    },
    async onEdit(index) {
      console.log(index.id);
      let id = index.id;
      this.$router.push({
        path:"/addressAdd",
        query:{
          id,
        }
      })
      //删除操作
      // console.log(id);
      // const result = await deletAddressApi(id)
      // console.log(result);
      // const res = await post("/api/v1/addresses/id:="+id)
      // console.log(res);
    },
    async getAddress(){
      const result = await getAddressApi();
      console.log(result);
     
      result.data.addresses.forEach((item)=>{
        this.list.push({
          id:item._id,
          name:item.receiver,
          tel:item.mobile,
          address:item.address,
          isDefault:item.isDefault,
        })
      })
    },
   
  },
  created() {
    this.getAddress()
  },
  mounted() {},
};
</script>
<style scoped>
</style>