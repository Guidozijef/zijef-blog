<template>
  <div class="introduction-section">
    <div class="aside-card-container search-widget is-relative">
      <div class="searchInput">
        <div class="is-flex px-4 searchButton">
          <i class="iconfont icon--search1 mr-1"></i>
          <input class="search-input is-flex-grow-1" placeholder="Search everything.." />
        </div>
      </div>
      <section class="search-content content" id="searchContent"></section>
    </div>
    <div class="aside-card-container profile-widget">
      <section class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <img class="js-img-fadeIn" src="https://haojen.github.io/Claudia-theme-blog/images/avatar.jpg" alt="user avatar"  />
        <h3 class="user-name">Gavin zijef</h3>
        <div class="has-text-centered is-relative self-info"><span style="margin-bottom: 5px;">May the Force be with you</span></div>
        <address class="has-text-centered has-text-grey"><i class="iconfont icon-location" style="margin-right: 5px;"></i><span class="has-text-grey">In the dust</span></address>
      </section>
      <section class="sns-container is-flex is-justify-content-center is-align-items-center">
        <a title="twitter" target="_blank" rel="noopener nofollow" href="//twitter.com//"><i class="iconfont icon-twitter"></i></a>
        <!-- Github--><a title="github" target="_blank" rel="noopener nofollow" href="//github.com/haojen"><i class="iconfont icon-github"></i></a
        ><!-- Ins--><a title="instagram" target="_blank" rel="noopener nofollow" href="//www.instagram.com//"><i class="iconfont icon-ins"></i></a
        ><!-- RSS--><a title="rss" target="_blank" rel="noopener nofollow" href="/Claudia-theme-blog/atom.xml"><i class="iconfont icon-rss"></i></a
        ><!-- 知乎-->
        <!-- 领英-->
        <!-- 脸书--><a title="facebook" target="_blank" rel="noopener nofollow" href="//www.facebook.com//"><i class="iconfont icon-tian7_facebook"></i></a>
      </section>
    </div>
    <div class="aside-card-container recent-widget">
      <h3>Recent</h3>
      <ul>
        <li class="is-flex">
          <!-- change to element replace image placeholder--><img class="js-img-fadeIn" src="/Claudia-theme-blog/images/tree.png" alt="cover" style="opacity: 1;" />
          <!--else-->
          <!--    div.post-img-placeholder-->
          <section class="is-flex-grow-2">
            <p class="has-text-weight-semibold" style="line-height: 20px; font-size: 14px"><a href="/Claudia-theme-blog/2018/02/12/hexo-theme-cutie-v2-tutorial/">hexo theme cutie v2.x tutorial</a></p>
            <time class="has-text-weight-semibold has-text-grey" datetime="2018-02-12T00:00:00.000Z">2018-02-12</time>
          </section>
        </li>
        <li class="is-flex">
          <!-- change to element replace image placeholder--><img class="js-img-fadeIn" src="/Claudia-theme-blog/images/lake.png" alt="cover" style="opacity: 1;" />
          <!--else-->
          <!--    div.post-img-placeholder-->
          <section class="is-flex-grow-2">
            <p class="has-text-weight-semibold" style="line-height: 20px; font-size: 14px"><a href="/Claudia-theme-blog/2017/12/20/Typography%20and%20tags/">Typography and tags</a></p>
            <time class="has-text-weight-semibold has-text-grey" datetime="2017-12-20T13:51:07.000Z">2017-12-20</time>
          </section>
        </li>
        <li class="is-flex">
          <!-- change to element replace image placeholder--><img class="js-img-fadeIn" src="/Claudia-theme-blog/images/river.png" alt="cover" style="opacity: 1;" />
          <!--else-->
          <!--    div.post-img-placeholder-->
          <section class="is-flex-grow-2">
            <p class="has-text-weight-semibold" style="line-height: 20px; font-size: 14px"><a href="/Claudia-theme-blog/2013/12/26/images/">Images</a></p>
            <time class="has-text-weight-semibold has-text-grey" datetime="2013-12-26T22:46:49.000Z">2013-12-26</time>
          </section>
        </li>
      </ul>
    </div>
    <div class="aside-card-container categories-widget category-page">
      <h3>Categories</h3>
      <section>
        <ul class="category-list">
          <li class="category-list-item"><a class="category-list-link" href="/Claudia-theme-blog/categories/Foo/">Foo</a><span class="category-list-count">1</span></li>
          <li class="category-list-item"><a class="category-list-link" href="/Claudia-theme-blog/categories/notes/">notes</a><span class="category-list-count">2</span></li>
        </ul>
      </section>
    </div>
    <div class="aside-card-container archives-widget">
      <h3>Archives</h3>
      <section>
        <ul class="archive-list">
          <li class="archive-list-item"><a class="archive-list-link" href="/Claudia-theme-blog/archives/2018/02/">February 2018</a><span class="archive-list-count">1</span></li>
          <li class="archive-list-item"><a class="archive-list-link" href="/Claudia-theme-blog/archives/2017/12/">December 2017</a><span class="archive-list-count">1</span></li>
          <li class="archive-list-item"><a class="archive-list-link" href="/Claudia-theme-blog/archives/2013/12/">December 2013</a><span class="archive-list-count">15</span></li>
        </ul>
      </section>
    </div>
    <div class="aside-card-container tag-widget">
      <h3>Tags</h3>
      <section>
        <a href="/Claudia-theme-blog/tags/typography"><span class="tag post-item-tag" style="margin-bottom: 5px;">typography</span></a
        ><a href="/Claudia-theme-blog/tags/hexo"><span class="tag post-item-tag" style="margin-bottom: 5px;">hexo</span></a
        ><a href="/Claudia-theme-blog/tags/Foo"><span class="tag post-item-tag" style="margin-bottom: 5px;">Foo</span></a
        ><a href="/Claudia-theme-blog/tags/Bar"><span class="tag post-item-tag" style="margin-bottom: 5px;">Bar</span></a
        ><a href="/Claudia-theme-blog/tags/Baz"><span class="tag post-item-tag" style="margin-bottom: 5px;">Baz</span></a
        ><a href="/Claudia-theme-blog/tags/cutie"><span class="tag post-item-tag" style="margin-bottom: 5px;">cutie</span></a
        ><a href="/Claudia-theme-blog/tags/tutorial"><span class="tag post-item-tag" style="margin-bottom: 5px;">tutorial</span></a>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*, *::before, *::after {
  box-sizing: border-box;
}
  $--primary-bg-color: #fff;
  $--second-bg-color: #fff;
  $--third-bg-color: #f5f5f5;
  $--primary-text-color: #4a4a4a;
  $--second-text-color: #4a4a4a;
  $--top-bar-bg-color: rgba(255, 255, 255, 0.8);
  $--border-line-color-2: rgba(0, 0, 0, 0.03);
  $--border-line-color: rgba(0, 0, 0, 0.05);
  $--blockquote-border-color: #dbdbdb;
  $--table-border-color: #dbdbdb;
  $--pre-code-bg-color: #f5f5f573;
  $--skeleton-bg-color: #f5f5f5;
  $--skeleton-flash-color: 0.5;
  $--avatar-border-color: #fff;

.introduction-section{
  .aside-card-container{
    padding: 10px;
    margin-bottom: 15px;
    box-shadow: 0 6px 30px -10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background: $--primary-bg-color;
    border: 1px solid $--border-line-color-2;
    .searchButton{
      .search-input {
        border: none;
        outline: none;
        background: transparent;
        height: 24px;
        color: $--second-text-color;
      }
    } 
  }
  .profile-widget{
     .js-img-fadeIn{
        position: relative;
        width: 180px;
        height: 180px;
        margin-top: 10px;
        z-index: 1;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
        border: 7px solid $--avatar-border-color;
      }
    .user-name{
      margin: 16px 0;
      font-size: 22px;
    }
    .self-info{
      text-align: center;
      &::before,&::after {
        line-height: 0;
        font-size: 32px;
        color: #585858;
        font-family: sans-serif;
        margin-right: 5px;
        vertical-align: middle;
      }
      &::before{
        content: '“';
      }
      &::after{
        content: '”';
      }
      span{
        color: #4a4a4a;
        font-size: 18px;
      }
    }
    .has-text-grey{
      margin-top: 16px;
      color: #7a7a7a;
      font-size: 16px;
    }
    .sns-container {
      overflow: auto;
      padding: 5px 0;
      margin-top: 15px;
      border-top: 1px solid $--border-line-color;
    }
  }
}
 
.is-flex {
  display: flex !important;
}
.px-4 {
    padding-left: 16px !important;
    padding-right: 16px !important;
}

.is-flex-grow-1 {
    flex-grow: 1 !important;
}
.mr-1 {
    margin-right: 4px !important;
}
.is-align-items-center {
    align-items: center !important;
}
.is-justify-content-center {
    justify-content: center !important;
}
.is-flex-direction-column {
    flex-direction: column !important;
}
.has-text-centered {
    text-align: center !important;
}
.is-relative {
    position: relative !important;
}


</style>
