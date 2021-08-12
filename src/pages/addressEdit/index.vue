<template>
  <div class="addressAdd">
    <van-nav-bar
      title="修改地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
   <div>
      <van-address-edit
      :area-list="areaList"
      :address-info="{
            name: info.receiver,
            tel: info.mobile,
            addressDetail: info.address,
            county:info.regions,
            province:info.regions,
          }"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    
   </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import area from '../../assets/js/area.js';
import {deletAddressApi} from "../../api/address"
import {getOnlyAddressApi} from "../../api/address"
import {editAddressApi} from "../../api/address"
export default {
  components: {},
  data() {
    return {
      areaList:area,
      searchResult: [],
      id:'',
      info:[],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/address");
    },
     //通过id获取收货地址
    async addressEdit(){
      const result = await getOnlyAddressApi(this.id);
      console.log(result);
      console.log(result.data.receiver);
      this.info=result.data;
      
    },
    async onSave(content) {
      // Toast(this.searchResult);
      //  console.log(content);
      //  console.log(content.name);
      //  console.log(content.province+content.city+content.addressDetail);
       //修改收货地址
       const result = await editAddressApi(this.id,{
          receiver:content.name,
          mobile:content.tel,
          regions:content.city,
          address:content.province+content.city+content.addressDetail,
          idDefault:content.isDefault,
       })
       console.log(result);
       Toast.success("地址修改成功")
      //  this.$router.push("/address");
    },
    //删除操作
    async onDelete() {
      const result = await deletAddressApi(this.id)
      console.log(result);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  created() {
    this.id=this.$route.query.id;
    this.addressEdit()
    // this.onSave()
  },
  mounted() {},
};
</script>
<style scoped>
</style>