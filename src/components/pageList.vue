<template>
  <div class="page-container">
    <div class="page-list">
      <div class="page" :class="`row-${post.size}`" v-for="(post,index) in allPosts" :key="index">
        <ul class="tag-list">
          <li class="tag" v-for="tag in post.tags" :key="tag">{{tag}}</li>
        </ul>
        <h3 class="title" @click="handlePostLink(index)">{{post.title}}</h3>

        <div class="img" v-if="imgData.length">
          <img
            class="img-responsive"
            :src="imgData[index].url"
            :alt="imgData[index].copyright"
          >
        </div>
        <div class="info">
          {{post.info}}
        </div>
        <div class="ct-ghost"></div>
        <p class="authorInfo"><span>JOHN DOE</span> / <span>JANUARY 28, 2020</span></p>
      </div>
    </div>
  </div>
</template>


<script>
import { postData } from "../utils/data.js";
import http from '../server/req.js'
import {requestGet} from '../server/reqJsonP.js'
export default {
  name:'pageList',
  porps:{
    size:[Number,String],
    post:{
      type:Object,
      default:() => {}
    }
  },
  created() {
    this.getImgUrl(this.allPosts.length)
  },
  data() {
    return {
      imgData:[]
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
      // console.log('所有文章集合',result)
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
    getImgUrl(index){
      let self = this;
      let baseUrl = 'https://cn.bing.com/'
      this.$.ajax({
        type: "GET",
        url: "https://bing.getlove.cn/latelyBingImageStory",
        async: true,
        dataType : "json",
        success: function(jsonData){
          jsonData.forEach(item => {
            item.url = baseUrl + item.url
          })
          self.imgData = jsonData
        }
      })
      // this.$.ajax({
      //   type: "GET",
      //   url: `https://json2jsonp.com/?url=http://xiayicangliang.top/bz/api.php?cid=360new&start=0&count=30&callback=cbfunc`,
      //   async: true,
      //   dataType : "jsonp",
      //   success: function cbfunc(jsonData){
      //     console.log(jsonData)
      //   }
      // })

      // function addScriptTag(src) {
      //   var script = document.createElement('script');
      //   script.setAttribute("type","text/javascript");
      //   script.src = src;
      //   document.body.appendChild(script);
      // }

      // window.onload = function () {
      //   addScriptTag('http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=7&from=360chrome');
      // }

      // function foo(data) {
      //   console.log('response data: ' + JSON.stringify(data));
      // }; 
      // requestGet(`http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=${index}&from=360chrome`,{}).then(res => {
      //   if(res.errno == '0'){
      //     this.imgData = res.data
      //   }
      // })
      // http.get(`/api/wallpaper/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=${index}&from=360chrome`).then(res => {
      //   console.log(res)
      //   if(res.errno == '0'){
      //     this.imgData = res.data
      //   }
        /***
            "id":"2008033",
            "class_id":"15",
            "resolution":"1920x1080",
            "url_mobile":"",
            "url":"http://browser9.qhimg.com/bdr/__85/t01bbd94b90e850d1d3.jpg",
            "url_thumb":"http://browser9.qhimg.com/bdr/__85/t01bbd94b90e850d1d3.jpg",
            "url_mid":"http://browser9.qhimg.com/bdr/__85/t01bbd94b90e850d1d3.jpg",
            "download_times":"0",
            "imgcut":"0",
            "tag":"_全部_ _category_动感水果_  _category_车厘子_  _category_小清新_",
            "create_time":"2020-03-20 14:49:39",
            "update_time":"2020-03-23 19:30:04",
            "ad_id":"",
            "ad_img":"",
            "ad_pos":"",
            "ad_url":"",
            "ext_1":"",
            "ext_2":"",
            "utag":"动感水果 车厘子",
            "tempdata":"",
             */
      // })
    }
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
    // grid-template-rows: repeat(2,1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    .page{
      position: relative;
      display: flex;
      flex-direction: column;
      background: #fff;
      box-shadow: 0 12px 18px -6px rgba(34,56,101,.04);
      padding: 35px 0;
      // min-height: 650px;
      .tag-list{
        padding: 0 35px;
        text-align: left;
        margin-bottom: 15px;
        .tag{
          height: 25px;
          line-height: 25px;
          font-size: 14px;
          margin-right: 4px;
          margin-bottom: 4px;
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
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
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
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
      }
      .ct-ghost{
        flex: 1 0 auto;
      }
      .authorInfo{
        position: relative;
        padding: 0 35px;
        font-size: 12px;
        text-align: left;
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