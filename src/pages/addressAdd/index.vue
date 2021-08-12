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
    <div>删除</div>
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
       console.log(content.province+content.city+content.addressDetail);
 
       const result = await addAddressApi({
          receiver:content.name,
          mobile:content.tel,
          regions:content.city,
          address:content.province+content.city+content.addressDetail,
          idDefault:content.isDefault,
       })
       console.log(result);
       Toast.success("地址添加成功")
       this.$router.push("/address");
    },
    onDelete(content) {
      // Toast(content);
      console.log(content);
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

    // 通过id修改地址
    // async addressEdit(id){
    //   const result = await editAddressApi(id);
    //   console.log(result);
    // },
      //删除操作
      // console.log(id);
      // const result = await deletAddressApi(id)
      // console.log(result);

  },
  created() {
    // this.id=this.$route.query.id;
    // this.addressEdit(this.id)
    console.log(11);
  },
  mounted() {},
};
</script>
<style scoped>
</style>