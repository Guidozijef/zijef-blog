<template>
  <div id="app">
    <Header />
    <div class="home-contanier">
      <keep-alive>
        <router-view class="router-view" />
      </keep-alive>
    </div>
    <div :class="showCommonFooter ? 'common-footer slide-top':'common-footer hidden'">
      <div class="footer-content">
        <!-- <a href="www.dendoink.com">Dendoink</a>
         -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="50"
        >
          <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
          <g>
            <title>background</title>
            <rect
              fill="#000000e0"
              id="canvas_background"
              height="52"
              width="182"
              y="-1"
              x="-1"
            ></rect>
            <g
              display="none"
              overflow="visible"
              y="0"
              x="0"
              height="100%"
              width="100%"
              id="canvasGrid"
            >
              <rect
                fill="url(#gridpattern)"
                stroke-width="0"
                y="0"
                x="0"
                height="100%"
                width="100%"
              ></rect>
            </g>
          </g>
          <g>
            <title>Layer 1</title>
            <text
              stroke="#000000e0"
              transform="matrix(42.95035493119024,0,0,14.26839551373704,-7577.625167709305,-1713.4671859652221) "
              xml:space="preserve"
              text-anchor="start"
              font-family="Helvetica, Arial, sans-serif"
              font-size="24"
              id="svg_1"
              y="142.4375"
              x="177"
              stroke-width="0"
              fill="#000000e0"
            ></text>
            <text
              stroke="#000000e0"
              transform="matrix(1.2861377027320486,0,0,1.2191282994473909,-1.9476415157505471,-0.10169488191604614) "
              font-weight="bold"
              xml:space="preserve"
              text-anchor="start"
              font-family="'Simonetta', serif"
              font-size="30"
              id="svg_2"
              y="32.493545"
              x="9"
              stroke-opacity="null"
              fill="#ffffff"
            >BlogName</text>
          </g>
        </svg>
        <div class="group-content">
          <a
            class="child"
            href="www.dendionk.com"
          >Link 1</a>
          <a
            class="child"
            href="www.dendionk.com"
          >Link 2</a>
          <a
            class="child"
            href="www.dendionk.com"
          >Link 3</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import Header from './components/Header'
export default {
  name: "App",
  components:{ Header },
  data() {
    return {
      // 默认不显示
      showCommonFooter: true,
      activeMenu: "home"
    };
  },
  watch: {
    // $route(to, from) {
    $route(to) {
      this.showCommonFooter = to.name === "Allpost" || to.name === "Home";
    }
  },
};
</script>

<style scoped lang="scss">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
    font: normal 1em Roboto, "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
  /* background: url('./assets/cover.jpg') top no-repeat;
  background-size: contain; */
  background: #f6f6f6;
}

.avatar {
  height: 3rem;
  width: 3rem;
  background-image: url("./assets/avatar.png");
  background-size: cover;
  display: block;
  border-radius: 50%;
  margin: auto;
}
.el-submenu__title {
  font-family: Arial, Helvetica, sans-serif;
}
.info_title {
  font-size: 12px;
}
/* .menu_bar {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}
.menu_bar_list {
  padding: 0px 10px;
  font-size: 1rem;
}
.menu_bar_list .menu_tags {
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  color: #35505b;
  margin: 1rem;
  font-weight: 100;
} */
.menu_tags:hover {
  color: #5a8492;
  border-bottom: 1px solid #5a8492;
  padding-right: 2rem;
  transition: all 0.2s ease;
}
.active_menu_tags {
  color: #5a8492;
  border-bottom: 1px solid #5a8492;
  padding-right: 2rem;
  transition: all 0.2s ease;
}
.dropbtn {
  color: #35505b;
  padding: 16px;
  font-size: 16px;
  border: none;
  background: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  opacity: 0;
  position: absolute;
  min-width: 100%;
  top: 52px;
}

.dropdown-content span {
  color: #5a8492;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  font-weight: 100;
  cursor: pointer;
  font-size: 1.2rem;
  text-align: right;
}
.dropdown-content span:hover {
  color: #35505b;
  border-bottom: 1px solid #5a8492;
  padding-right: 2rem;
  letter-spacing: 1px;
  font-size: 1.3rem;
  transition: all 0.3s ease-out;
}
.post_list {
  text-align: left;
  letter-spacing: 0.5px;
  padding: 10px 4%;
  font-size: 0.9rem;
}

.copy-right {
  margin-top: 4rem;
  padding-right: 2rem;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  cursor: pointer;
  color: rgb(211, 96, 96);
  font-size: 0.9rem;
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  transition: all 0.4s ease-in-out;
}

.dropdown:hover .dropbtn {
  color: #5a8492;
}
@media screen and (max-width: 1000px) and (min-width: 300px) {
  .copy-right {
    display: none;
  }
  .menu_tags:hover {
    color: #5a8492;
    border-bottom: 1px solid #5a8492;
    transition: all 0.2s ease;
    padding-right: 0rem;
  }
  .landing_tag {
    display: none;
  }
}

@media (min-width: 576px) {
  .home_post-list {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .home_post-list {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .home_post-list {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .home_post-list {
    max-width: 1220px;
  }
}
.common-footer {
  margin-top: 100px;
  background: #000000;
  line-height: 20px;
  font-size: 16px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}
.common-footer .footer-content {
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.footer-content svg {
  color: #fff;
  font-weight: 300;
  font-size: 1.4rem;
  cursor: pointer;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  transition: all 0.2s ease-in-out;
}
.footer-content svg:hover {
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
.footer-content .group-content {
  min-width: 50%;
  justify-content: space-around;
  display: flex;
  align-items: center;
}
.group-content .child {
  cursor: pointer;
  border-bottom: 1px solid #000000;
  transition: ease-out;
  color: #a5a7a6;
}
.group-content .child:hover {
  border-bottom: 1px solid #42b983;
  color: #42b983;
}
.hidden {
  display: none;
}
/* transform: scale(1.1); */
</style>
