<template>
<div class="index-home">
  <div class="section-wrap" :style="!dayInfo.picture3 ? {'backgroundImage':`url(${dayInfo.picture3})`} : null">
    <div class="textInfo-contanier">
      <div class="zh-text">{{dayInfo.content}}</div>
      <span class="en-text">{{dayInfo.note}}</span>
    </div>
    <div class="down">
      <Icon type="ios-arrow-dropdown" @click="down" custom="i-con" size="100" />
    </div>

  </div>
  <div class="home_post_list">
    <section class="home-post-section home-section">
      <div class="home-container">
        <PageList/>
        <div style="width:27%;">
          <Introduction></Introduction>
        </div>
      </div>
      <!-- <div class="post-list-wrapper home-section-wrapper">
        <PostList
          class="row1"
          rowsNumber="1"
          maxNumber="5"
        />
        <PostList
          class="row2"
          rowsNumber="2"
          maxNumber="5"
        />
        <PostList
          class="row3"
          rowsNumber="3"
          maxNumber="5"
        />
      </div> -->
      <div class="more-posts">
        <span @click="handleRouter('all')">View All</span>
      </div>
    </section>
    <section class="home-opensource-section home-section">
      <div class="home-section-header">Open-Source</div>
      <div class="opensource-list-wrapper">
        <article class="opensource-item-wrapper home-section-wrapper">
          <a
            class="opensource-item"
            href="https://github.com/DendiSe7enGitHub/Align"
          >
            <div class="opensource-item-header">
              <img
                class="opensource-item-header-img"
                src="../assets/logo.svg"
              >
            </div>
            <h3 class="opensource-name">Align</h3>
            <p class="opensource-description">Real-time, Beautiful blog generator, Auto deploy</p>
          </a>
        </article>
      </div>
    </section>
    <section class="home-vision-section home-section">
      <div class="home-section-header">vision</div>
      <div class="vision-list-wrapper photo-list home-section-wrapper">
        <div
          class="single-photo-parent"
          v-for="(item,index) in photoLatest"
          :key="index"
          v-show="index <= 3"
        >
          <img
            :src="item.url"
            :alt="item.description"
            class="img-responsive"
          >
          <div class="photo-info">
            <span
              v-for="(tag,index)
              in
              item.tags"
              :key="`${tag}-${index}`"
            >{{tag}}</span>
          </div>
        </div>
      </div>
      <div class="more-posts">
        <span @click="handleRouter('gallery')">View All</span>
      </div>
    </section>
  </div>
</div>
  
</template>

<script>
import { postData } from "../utils/data.js";
import { getAllCategories } from "../utils/datafilter.js";
import { photoData } from "../utils/photoData";
import http from '../server/req.js'
export default {
  // 主页
  name: "Home",
  data() {
    return {
      allPosts: JSON.parse(postData),
      categories: getAllCategories(JSON.parse(postData)),
      photoLatest: photoData,
      dayInfo:{}
    };
  },
  created() {
    let self = this;
    this.$.ajax({
      type: 'get',
      url: `https://sentence.iciba.com/index.php?c=dailysentence&m=getdetail&title=${self.$moment().format('yyyy-MM-DD')}`,
      data: {},
      async: true,
      dataType: 'jsonp',
      jsonpCallback: 'info',
      success: function info(res) {
        self.dayInfo = res;
      }
    })
    // http.post(`/api/ciba/dsapi/?date=${this.$moment().format('yyyy-MM-DD')}`).then(res => {
    //   this.dayInfo = res;
    // })
  },
  components: {
    // PostList: () => import("../components/PostList"),
    PageList: () => import("../components/PageList"),
    Introduction: () => import("../components/Introduction")
  },
  methods: {
    handleRouter: function(dir, categorie = "") {
      let path;
      if (categorie) {
        path = `/${dir}?${dir}=${categorie}`;
      } else {
        path = `/${dir}`;
      }
      this.$router.push(path);
    },
    down(){
      // window.scrollTo({
      //   top: 100, // 滚动终点y的位置
      //   left: 100, // 滚动终点x的位置
      //   behavior: 'smooth' //平滑滚动
      // });
      let height = document.querySelector(".section-wrap").offsetHeight - 60 // 减去header高度
      let cb = () => {
        if(height == document.documentElement.scrollTop || height < document.documentElement.scrollTop){
          document.documentElement.scrollTop = height
          return false;
        }else{
          document.documentElement.scrollTop += 50
          requestAnimationFrame(cb)
        }
      }
      requestAnimationFrame(cb)
    }
  }
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("../assets/fonts/Playfair/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKfsunDXbtU.woff") format('woff')
}
.container {
  max-width: 800px;
  width: 800px;
  margin: 0 auto;
  position: relative;
}
.section-wrap{
  background-image: url("../assets/hero.jpg");
  background-position: top left;
  background-repeat: no-repeat;
  // opacity: 0.5;
  background-size: cover;
  height: 100vh;
  position: relative;
  .textInfo-contanier{
    position: absolute;
    bottom: 250px;
    left: 300px;
    color: #fff;
    text-align: left;
    .zh-text{
      font-family: Playfair Display,Sans-Serif;
      font-size: 70px;
      width: 50%;
    }
    .en-text{
      font-size: 1.2rem;
      margin-top: 15px;
      display: inline-block;
      line-height: 1.5rem;
      width: 50%;
    }
  }
  .down{
    justify-content: center;
    align-items: flex-end;
    display: flex;
    height: 100vh;
    .i-con{
      color: #f6f6f6;
      margin-bottom:50px;
      cursor: pointer;
      &:hover{
        color: #fff;
      }
    }
  }
}

.home-container{
  display: flex;
  justify-content: space-between;
}
.home_post_list {
  display: flex;
  width: 1290px;
  margin: 60px auto 0px;
  flex-direction: column;
  margin-bottom: 5rem;
}
.post-list-wrapper {
  display: flex;
}
.home-section {
  margin-bottom: 2rem;
}
.home-section .home-section-wrapper {
  margin-top: 2rem;
}
.home-section .home-section-header {
  display: block;
  text-transform: uppercase;
  font-size: 0.55rem;
  letter-spacing: 8.6px;
  opacity: 0.7;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  margin-top: 2rem;
  text-align: left;
  padding-left: 4rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
}
.opensource-list-wrapper,
.vision-list-wrapper {
  padding: 0rem 4rem !important;
}
.opensource-list-wrapper {
  display: flex;
  justify-content: space-between;
}
.opensource-list-wrapper .opensource-item-wrapper {
  width: 20%;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.opensource-item-wrapper .opensource-item-header {
  background: #f05a5a;
}
.opensource-item-wrapper .opensource-item {
  background-image: url(https://marketplace-images.githubusercontent.com/703/8af94adc-e40e-11e7-8871-55e85b471458?auto=webp&format=jpeg&width=600);
  background-size: cover;
  background-position: center top;
  color: #585858;
}

.opensource-item-wrapper:hover {
  -webkit-animation: wobble-hor-bottom 0.8s both;
  animation: wobble-hor-bottom 0.8s both;
}
.home-section .home-section-header::first-letter {
  color: #42b983;
  font-size: 1.5rem;
}
.home-section .more-posts {
  font-size: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.home-section .more-posts span {
  padding: 0.2rem 1rem;
  border: 2px solid #b3e6cf;
  border-radius: 4px;
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.home-section .more-posts span:hover {
  color: #42b983;
  border-color: #ffffff;
  opacity: 0.9;
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .home_post_list {
    display: flex;
    flex-direction: column;
  }
}

.photo-list {
  max-width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: space-around;
}
.photo-list .single-photo-parent {
  display: inline-block;
  transition: all 0.2s ease-in-out;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
  margin-right: 1rem;
  background: #fff;
}
.single-photo-parent img {
  /* height: auto; */
  max-height: 120px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-top-right-radius: calc(0.25rem - 1px);
  border-top-left-radius: calc(0.25rem - 1px);
}

.single-photo-parent:hover {
  -webkit-box-shadow: 0 18px 32px -18px #000;
  box-shadow: 0 18px 32px -18px #000;
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}
.single-photo-parent .photo-info {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
  padding: 1rem 2rem;
  display: flex;
  opacity: 0;
  justify-content: space-around;
  color: #cccccc;
}

.single-photo-parent:hover .photo-info {
  display: flex;
  opacity: 1;
  cursor: pointer;
}
.photo-info span {
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid #ffffff;
  font-size: 0.5rem;
}
.single-photo-parent:hover span {
  border-bottom-color: #cccccc;
  color: #8d8d8d;
}
/* ----------------------------------------------
 * Generated by Animista on 2018-12-18 6:46:16
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation wobble-hor-bottom
 * ----------------------------------------
 */
@-webkit-keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
@keyframes wobble-hor-bottom {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  15% {
    -webkit-transform: translateX(-30px) rotate(-6deg);
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    -webkit-transform: translateX(15px) rotate(6deg);
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    -webkit-transform: translateX(-15px) rotate(-3.6deg);
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    -webkit-transform: translateX(9px) rotate(2.4deg);
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    -webkit-transform: translateX(-6px) rotate(-1.2deg);
    transform: translateX(-6px) rotate(-1.2deg);
  }
}
</style>
