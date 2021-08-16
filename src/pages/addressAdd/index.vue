<template>
  <div class="addressAdd">
    <van-nav-bar
      title="添加地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
   <div>
      <van-address-edit
      :area-list="areaList"
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
import {addAddressApi} from "../../api/address"
// import {editAddressApi} from "../../api/address"
export default {
  components: {},
  data() {
    return {
      areaList:area,
      searchResult: [],
      id:'',
      addressinfo:[],
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/address");
    },
    async onSave(content) {
      Toast(this.searchResult);
       console.log(content);
       console.log(content.name);
       console.log(content.province+content.city+content.county+content.addressDetail);
 
       const result = await addAddressApi({
          receiver:content.name,
          mobile:content.tel,
          regions:content.areaCode,
          address:content.province+content.city+content.county+content.addressDetail,
          idDefault:content.isDefault,
       })
       console.log(result);
       Toast.success("地址添加成功")
       this.$router.push("/address");
    },
    //删除操作
    onDelete() {
      console.log(1);
      // const result = await deletAddressApi(this.id)
      // console.log(result);
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

    //通过id修改地址
    async addressEdit(){
      // const result = await editAddressApi(this.id);
      // console.log(result);
      // console.log(result.data.receiver);
      // this.addressinfo=result.data;
      // console.log(this.addressinfo);
      // console.log(11);
    },
     

  },
  created() {
    // this.id=this.$route.query.id;
    // this.addressEdit()
    // console.log(11);
  },
  mounted() {},
};
</script>
<style scoped>
</style>