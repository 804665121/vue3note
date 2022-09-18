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
                    }
                ]
            }

        ]
    }
  }