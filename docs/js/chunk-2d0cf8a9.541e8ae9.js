(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf8a9"],{"63c9":function(E,t,a){"use strict";a.r(t);var B=function(){var E=this,t=E.$createElement;E._self._c;return E._m(0)},e=[function(){var E=this,t=E.$createElement,a=E._self._c||t;return a("div",{staticClass:"content"},[a("hr"),a("h2",{attrs:{id:"name%3A-2021-01-21-imglayout%3A-posttitle%3A-%E2%80%9C%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8api%E5%90%88%E8%AE%A1%E2%80%9Dinfo%3A-%E2%80%9C%E8%BF%99%E9%87%8C%E6%98%AF%E7%94%A8%E6%9D%A5%E8%AF%B4%E4%B8%80%E4%BA%9B%E5%BA%9F%E8%AF%9D%E7%9A%84%E3%80%82%E3%80%82%E2%80%9Ddate%3A-2021-01-21categories%3A-lifetags%3A-%5Bimg%2Capi%5D"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-2021-01-21-imglayout%3A-posttitle%3A-%E2%80%9C%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8api%E5%90%88%E8%AE%A1%E2%80%9Dinfo%3A-%E2%80%9C%E8%BF%99%E9%87%8C%E6%98%AF%E7%94%A8%E6%9D%A5%E8%AF%B4%E4%B8%80%E4%BA%9B%E5%BA%9F%E8%AF%9D%E7%9A%84%E3%80%82%E3%80%82%E2%80%9Ddate%3A-2021-01-21categories%3A-lifetags%3A-%5Bimg%2Capi%5D"}},[E._v("#")]),E._v(" name: 2021-01-21-IMG"),a("br"),E._v(" layout: post"),a("br"),E._v(" title: “高清壁纸API合计”"),a("br"),E._v(" info: “这里是用来说一些废话的。。”"),a("br"),E._v(" date: 2021-01-21"),a("br"),E._v(" categories: LIFE"),a("br"),E._v(" tags: [Img,api]")]),a("p",[E._v("某次在使用360极速浏览器时，发现它自带的换肤功能里头的壁纸都很漂亮，而且种类非常丰富。经过一个小小的抓包，得到了它的api接口。我们可以利用这个接口来做壁纸软件或给网站加入换背景的功能。总之怎么玩就看大家的想象力了~")]),a("p",[E._v("分享一枚获取高清壁纸的api360极速浏览器中的换肤功能")]),a("h4",{attrs:{id:"%E6%8E%A5%E5%8F%A3%E4%B8%80%EF%BC%9A%E8%8E%B7%E5%8F%96%E5%A3%81%E7%BA%B8%E5%88%86%E7%B1%BB"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8E%A5%E5%8F%A3%E4%B8%80%EF%BC%9A%E8%8E%B7%E5%8F%96%E5%A3%81%E7%BA%B8%E5%88%86%E7%B1%BB"}},[E._v("#")]),E._v(" 接口一：获取壁纸分类")]),a("p",[E._v("撒旦发射点和覅撒旦发射点"),a("code",[E._v("sfgsgwrt")]),a("br"),a("strong",[E._v("这是加粗的样式")])]),a("blockquote",[a("p",[E._v("这是用来引用一些东西的")])]),a("pre",{staticClass:"hljs"},[a("code",[E._v("http://cdn.apc.360.cn/index.php?c=WallPaper&a=getAllCategoriesV2&from=360chrome\n")])]),a("p",[E._v("这个接口很简单，直接请求上述网址，就可以得到 json 数据。返回的数据中有个 data 数组，其中的“name”就是获取到的壁纸分类名，“id”就是这个分类对应的ID值。")]),a("h4",{attrs:{id:"%E6%8E%A5%E5%8F%A3%E4%BA%8C%EF%BC%9A%E6%A0%B9%E6%8D%AE%E5%A3%81%E7%BA%B8%E5%88%86%E7%B1%BBid%E8%8E%B7%E5%8F%96%E5%88%86%E7%B1%BB%E4%B8%8B%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8E%A5%E5%8F%A3%E4%BA%8C%EF%BC%9A%E6%A0%B9%E6%8D%AE%E5%A3%81%E7%BA%B8%E5%88%86%E7%B1%BBid%E8%8E%B7%E5%8F%96%E5%88%86%E7%B1%BB%E4%B8%8B%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87"}},[E._v("#")]),E._v(" 接口二：根据壁纸分类ID获取分类下壁纸图片")]),a("pre",{staticClass:"hljs"},[a("code",[E._v("http:"),a("span",{staticClass:"hljs-comment"},[E._v("//wallpaper.apc.360.cn/index.php?  ")]),E._v("\nc=WallPaper&a=getAppsByCategory  \n&cid=【刚才获取到的分类ID】  \n&start=【从第几幅图开始(用于分页)】  \n&count=【每次加载的数量】&"),a("span",{staticClass:"hljs-keyword"},[E._v("from")]),E._v("=360chrome  \n")])]),a("p",[E._v("通过这个接口获取到的数据有点多，但主要要用到的只有几个。一是 data 数组中的 url 值，就是我们要获取的图片链接。它的格式类似于：")]),a("pre",{staticClass:"hljs"},[a("code",[E._v("http://p15.qhimg.com/bdr/__85/t0151ad4ac41239cb58.jpg  \n")])]),a("p",[E._v("我们可以根据它来获取这张图片的指定分辨率以及指定画质的图片，以上图为例，如果我们要获取分辨率为 1024*768 ，画质为 80 (最高为100)的图片，只需将上述链接的 “bdr/__85” 替换为 “bdm/1024_768_80” 即可。替换后的图片链接如下：")]),a("pre",{staticClass:"hljs"},[a("code",[E._v("http://p19.qhimg.com/bdm/1024_768_80/t0151ad4ac41239cb58.jpg  \n")])]),a("p",[E._v("（注：有些图片如果原图本身就小，不会被拉伸）")]),a("p",[E._v("除去 url 值，data 数组中的 tag 是图片对应的标签，如果需要也可以进行获取。")]),a("h4",{attrs:{id:"%E6%8E%A5%E5%8F%A3%E4%B8%89%EF%BC%9A%E8%8E%B7%E5%8F%96%E6%9C%80%E8%BF%91%E6%9B%B4%E6%96%B0%E7%9A%84%E5%A3%81%E7%BA%B8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8E%A5%E5%8F%A3%E4%B8%89%EF%BC%9A%E8%8E%B7%E5%8F%96%E6%9C%80%E8%BF%91%E6%9B%B4%E6%96%B0%E7%9A%84%E5%A3%81%E7%BA%B8"}},[E._v("#")]),E._v(" 接口三：获取最近更新的壁纸")]),a("pre",{staticClass:"hljs"},[a("code",[E._v("http:"),a("span",{staticClass:"hljs-comment"},[E._v("//wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=【偏移量，从0开始】&count=【加载张数】&from=360chrome  ")]),E._v("\n")])]),a("p",[E._v("这个接口的参数是固定的，并且获取到的数据格式与接口二的一样。这里就不在赘述了。")]),a("p",[E._v("我把这些接口以及前段时间的必应每日图片接口整合在了一起，花了几天时间做了个壁纸下载站：")])])}],s=a("2877"),A={},r=Object(s["a"])(A,B,e,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0cf8a9.541e8ae9.js.map