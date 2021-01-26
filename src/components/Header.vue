<template>
  <div :class="menuFixed ? 'boxShadow header-container' : ($route.path == '/home' ? 'header-container fixed-header' : 'sticky-fixed')">
   <div class="header">
      <!-- <img src="../assets/img/title.png" alt=""> -->
      <div class="menu_bar">
        <div class="menu_bar_list">
          <span
            v-on:click="handleRouter('home')"
            class="menu_tags"
            :class="activeMenu === 'home' ? 'active_menu_tags ': ''"
          >Home</span>
          <span
            v-on:click="handleRouter('all')"
            class="menu_tags"
            :class="activeMenu === 'all' ? 'active_menu_tags ': ''"
          >Articles</span>
          <span
            v-on:click="handleRouter('tags')"
            class="menu_tags"
            :class="activeMenu === 'tags' ? 'active_menu_tags ': ''"
          >Tags</span>
          <span
            v-on:click="handleRouter('resume')"
            class="menu_tags"
            :class="activeMenu === 'resume' ? 'active_menu_tags ': ''"
          >Resume</span>
          <span
            v-on:click="handleRouter('gallery')"
            class="menu_tags"
            :class="activeMenu === 'gallery' ? 'active_menu_tags ': ''"
          >Photos</span>
          <span
            v-on:click="handleRouter('landing')"
            class="menu_tags landing_tag"
          >Landing</span>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
export default {
  data(){
    return {
      menuFixed: false,
      activeMenu: ""
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
    this.$nextTick(() => {
      this.activeMenu = "home"
    })
  },
  methods: {
    menu: function() {
      let scrollCount = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollCount > 0) {
        this.menuFixed = true;
      } else {
        this.menuFixed = false;
      }
    },
    handleRouter: function(dir, categorie = "") {
      if(this.$route.path.slice(1) != dir){
        this.activeMenu = dir;
        let path;
        if (categorie) {
          path = `/${dir}?${dir}=${categorie}`;
        } else {
          path = `/${dir}`;
        }
        this.$router.push(path);
      }
      
    },
  },
}
</script>

<style lang="scss" scoped>
.header-container{
  position: fixed;
  // position: -webkit-sticky;
  // position: sticky;
  transition: all 0.4s ease;
  width: 100%;
  z-index: 9;
  top: 0;
  .header {
    margin: 0 auto;
    width: 1290px;
    height: 60px;
    line-height: 60px;
    font-weight: 700;
  }
}

.fixed-header{
  color: #fff;
  background-color: rgba(0,0,0,0);
  font-size: 22px;
  .header{
    width: 90%;
    font-weight: 300;
  }
}

.sticky-fixed{
  background: #fff;
  position: sticky;
  top: 0;
  font-size: 18px;
  .header {
    margin: 0 auto;
    width: 1290px;
    height: 60px;
    line-height: 60px;
    font-weight: 700;
  }
}

.boxShadow{
  font-size: 18px;
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

img{
  height: 60px;
  float: left;
}
.menu_bar{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .menu_tags{
    // font-size: 1rem;
    margin: 0 20px;
    height: 60px;
    display: inline-block;
    height: 60px;
    cursor: pointer;
    &:hover{
      color: #2872FA;
    }
  }
  .active_menu_tags {
    color: #2872FA;
  }
}

</style>