// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "Dale's Docs",
    // 站点描述
    description: "书卷多情似故人, 晨昏忧乐每相亲",
    // 站点logo
    logo: "/images/logo/ld.gif",
    // 站点地址
    site: "https://docs.dalechu.cn/",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "Dale Chu",
      cover: "/images/logo/avatar.webp", // siteMeta.author.cover
      email: "2448926122@qq.com",
      link: "https://dalechu.cn",
    },
  },
  // 备案信息
  // icp: "萌ICP备114514号",
  // 建站日期
  since: "2023-07-29",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://www.dalechu.cn/rss/feed.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont 阿里巴巴矢量图标库
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "http://at.alicdn.com/t/c/font_4721183_o9x8xywoks.css",
        },
      ],



      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "首页",
      items: [
        { text: "网站首页", link: "/", icon: "article" },
      ],
    },
    {
      text: "归档",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
      ],
    },
    // {
    //    text: "零碎",
    //    items: [
    //       { text: "技术分享", link: "/pages/lifedots", icon: "technical" },
    //    ],
    // },
    {
      text: "友链",
      items: [
        // { text: "友链鱼塘", link: "/pages/friends", icon: "fish" },
        { text: "友情链接", link: "/pages/link", icon: "people" },
      ],
    },
    {
      text: "关于",
      items: [
        // { text: "畅所欲言", link: "/pages/message", icon: "chat" },
        // { text: "致谢名单", link: "/pages/thanks", icon: "reward" },
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
      ],
    },
    
  ],


  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "/images/logo/emoji.png",
          name: "源站",
          url: "https://www.dalechu.cn",
        },
        {
          icon: "/images/logo/vercel.webp",
          name: "Vercel 站",
          url: "https://www.epicurus.fun/",
        },
      ],
    },

    {
      name: "小游戏",
      list: [
        {
          icon: "/images/logo/chidour.png",
          name: "吃豆人",
          url: "https://pacman.dalechu.cn/",
        },
        {
          icon: "/images/logo/cube.png",
          name: "3D-Tetris",
          url: "https://tetris.dalechu.cn",
        }
      ],
    },
    // {
    //   name: "工具",
    //   list: [
    //     {
    //       icon: "/images/logo/logo.webp",
    //       name: "Alist",
    //       url: "https://alist.dalechu.cn",
    //     }
    //   ],
    // },



  ],
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "mailto:2448926122@qq.com",
      },
      {
        icon: "github",
        link: "https://www.github.com/Daleveral/",
      },
      // {
      //   icon: "telegram",
      //   link: "https://t.me/bottom_user",
      // },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/496029253",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=2448926122",
      },
      // {
      //   icon: "twitter-x",
      //   link: "https://twitter.com/iimmsyy",
      // },
    ],
    // sitemap
    sitemap: [
      {
        text: "帖子",
        items: [
          // { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
          { text: "全部标签", link: "/pages/tags" },
          // { text: "文章归档", link: "/pages/archives", newTab: true },
        ],
      },
      // {
      //   text: "项目",
      //   items: [
      //     { text: "Home", link: "https://github.com/imsyy/home/", newTab: true },
      //     { text: "SPlayer", link: "https://github.com/imsyy/SPlayer/", newTab: true },
      //     { text: "DailyHotApi", link: "https://github.com/imsyy/DailyHotApi/", newTab: true },
      //     { text: "Snavigation", link: "https://github.com/imsyy/Snavigation/", newTab: true },
      //   ],
      // },
      // {
      //   text: "专栏",
      //   items: [
      //     { text: "技术分享", link: "/pages/categories/技术分享" },
      //     { text: "我的项目", link: "/pages/project" },
      //     { text: "效率工具", link: "/pages/tools" },
      //   ],
      // },
      {
        text: "部署",
        items: [
          { text: "项目仓库", link: "https://github.com/Daleveral/docs", newTab: true },
          { text: "创作手册", link: "https://blog.imsyy.top/posts/2024/0307", newTab: true },
          // { text: "隐私政策", link: "/pages/privacy" },
          // { text: "版权协议", link: "/pages/cc" },
        ],
      },
      {
        text: "订阅",
        items: [
          // { text: "站点状态", link: "https://status.imsyy.top/", newTab: true },
          { text: "本站", link: "https://docs.dalechu.cn/rss.xml", newTab: true },
          { text: "博客", link: "https://www.dalechu.cn/rss/feed.xml", newTab: true },
          // {
          //   text: "反馈投诉",
          //   link: "https://eqnxweimkr5.feishu.cn/share/base/form/shrcnCXCPmxCKKJYI3RKUfefJre",
          //   newTab: true,
          // },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    type: "artalk",
    // 评论系统配置
    artalk: {
      site: "Dale's Docs",
      server: "https://artalk.dalechu.cn",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "春节",
        date: "2025-01-29",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  music: {
    enable: false,
    // id
    id: 9379831714,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
  },
  // 打赏
  rewardData: {
    enable: true,
    // 微信二维码
    wechat: "https://picscdn.dalechu.cn/wx_ds.png",
    // 支付宝二维码
    alipay: "https://picscdn.dalechu.cn/zfbzf_dale.png",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: false,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "",
  },
};
