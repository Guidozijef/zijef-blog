<template>
  <div class="page-contanier" :style="sizeList[size]">
    
  </div>
</template>

<script>
import { postData } from "../utils/data.js";
export default {
  name:'pageList',
  porps:{
    size:[Number,String],
    post:{
      type:Object,
      default:() => {}
    }
  },
  data() {
    return {
      sizeList:{
        '2':{
          width:'50%',
          height:'200px',
        },
        '3':{
          width:'33.33%',
          height:'200px',
        }
      }
    }
  },

  computed: {
    allPosts: function() {
      let result = JSON.parse(postData);
      // if (this.defaultCate) {
      //   result = getAllPostsByCategories(result, this.defaultCate);
      // } else if (this.defaultTag) {
      //   result = getAllPostsByTag(result, this.defaultTag);
      // } else {
      //   result.sort((a, b) => {
      //     return new Date(b.date) - new Date(a.date) !== 0
      //       ? new Date(b.date) - new Date(a.date)
      //       : b.name.split("-").pop() - a.name.split("-").pop();
      //   });
      //   return result;
      // }
      // result.sort((a, b) => {
      //   return new Date(b.date) - new Date(a.date) !== 0
      //     ? new Date(b.date) - new Date(a.date)
      //     : b.name.split("-").pop() - a.name.split("-").pop();
      // });
      return result;
    },
  },
  
}
</script>

<style lang="scss" scoped>
.page-contanier{
  background: #fff;
}


</style>