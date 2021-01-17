<template>
    <div :class="menuFixed ? 'boxShadow header' : 'header'">
      <img src="../assets/img/title.png" alt="">
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
      this.activeMenu = dir;
      let path;
      if (categorie) {
        path = `/${dir}?${dir}=${categorie}`;
      } else {
        path = `/${dir}`;
      }
      this.$router.push(path);
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  line-height: 60px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #fff;
  font-weight: 700;
  z-index: 9;
}
.boxShadow{
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

img{
  height: 60px;
  float: left;
  margin-left: 100px;
}
.menu_bar{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .menu_tags{
    font-size: 1rem;
    margin: 0 20px;
    height: 60px;
    display: inline-block;
    height: 60px;
    cursor: pointer;
    &:hover{
      color: #007fff;
    }
  }
  .active_menu_tags {
    color: #007fff;
  }
}

</style>