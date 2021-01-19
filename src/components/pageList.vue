<template>
  <div class="page-container">
    <div class="page-list">
      <div class="page" :class="`row-${post.size}`" v-for="(post,index) in allPosts" :key="index">
        <ul class="tag-list" v-for="tag in post.tags" :key="tag">
          <li class="tag">{{tag}}</li>
        </ul>
        <h3 class="title">{{post.title}}</h3>

        <div class="img">
          <img
            class="img-responsive"
            @click="handlePostLink(index)"
            v-bind:src="post.coverimg"
            v-bind:alt="post.title"
          >
        </div>

        <div class="info">
          {{post.info}}

        </div>

      </div>
    </div>
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


    }
  },

  computed: {
    allPosts: function() {
      let result = JSON.parse(postData);
      result.forEach(item => item.size = '3');
      for(let i = 0; i < result.length;i++){
        if(i % 5 == 0){
          result[i].size = '2';
          result[i+1] ? result[i+1].size = '2' : null;
        }
      }
      console.log(result)
      return result;
    },
  },

  methods:{
    handlePostLink: function(index, dir = "post") {
      // window.localStorage.setItem(
      //   "currentPosts",
      //   JSON.stringify(this.currentPosts)
      // );
      // let postName = this.currentPosts[index].name;
      let postName = this.allPosts[index].name;
      this.$router.push(`/${dir}/${postName}`);
    },
  }

  
}
</script>

<style lang="scss" scoped>
.page-container{
  width: 69%;
  .page-list{
    // display: flex;
    // justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    .page{
      display: inline-block;
      background: #fff;
      box-shadow: 0 12px 18px -6px rgba(34,56,101,.04);
      padding: 35px 0;
      min-height: 650px;

      .tag-list{
        padding: 0 35px;
        text-align: left;
        margin-bottom: 15px;
        .tag{
          height: 25px;
          line-height: 25px;
          font-size: 14px;
          padding: 0 8px;
          color: #fff;
          border-radius: 3px;
          background: #1559ed;
          display: inline-block;
        }
      }
      .img img{
        width: 100%;
        margin-bottom: 20px;
      }
      .title{
        text-align: left;
        padding: 0 35px;
        color: #243b56;
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 700;
        line-height: 1.5;
        &:hover{
          cursor: pointer;
          color: #1559ed;
        }
      }
      .info{
        text-align: left;
        padding: 0 35px;
        margin: 10px 0 20px;
        font-size: 16px;
        color: #243b56e6;
      }
    }
    
    .row-2{
      grid-column: span 3;

    }
    .row-3{
      grid-column: span 2;
    }
  }
}




</style>