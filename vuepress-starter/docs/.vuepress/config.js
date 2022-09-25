module.exports = {
    title: 'Hello Vue3笔记',
    description: 'Just playing around',
    base:'/',
    themeConfig:{
        displayAllHeaders: true, // 默认值：false
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: '菜单', link: '/learn/' },
          ],
        sidebar: [
            {
                title:'目录',
                children:[
                    {
                        title:"ref函数",
                        path:"/learn/ref.md"
                    },
                    {
                        title:"reactive函数",
                        path:"/learn/reactive.md"
                    },
                    {
                        title:"生命周期",
                        path:"/learn/life.md"
                    },
                    {
                        title:"hook",
                        path:"/learn/hook.md"
                    },
                    {
                        title:"watch的使用",
                        path:"/learn/watch.md"
                    },
                    {
                        title:"setup",
                        path:"/learn/setup.md"
                    },
                    {
                        title:"toref的使用",
                        path:"/learn/toref.md"
                    },
                    {
                        title:"其它",
                        path:"/learn/other.md"
                    },
                    {
                        title:"与vue2对比",
                        path:"/learn/flag.md"
                    }
                ]
            }

        ],
        repo:'https://github.com/804665121/vue3note',
        docsDir: 'vuepress-starter/docs',
    }
  }