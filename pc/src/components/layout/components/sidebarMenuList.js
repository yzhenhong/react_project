const sidebarMenuList = [
  {
    icon: 'icon-shouye',
    name: 'home',
    path:'/home',
    meta: {
      title: '首页',
      show: true,
    },
    children: [
      {
        path: '/home/index',
        name: 'index',
        meta: {
          title: '首页',
          show: true,
        },
      }
    ]
  },
  {
    icon: 'icon-changyongshili',
    name: 'example',
    path:'/example',
    meta: {
      title: '示例',
      show: true,
    },
    children: [
      {
        name: 'status',
        path:'/example/status',
        meta: {
          title: 'status',
          show: true
        }
      },
      {
        name: 'form',
        path:'/example/form',
        meta: {
          title: 'form',
          show: true
        }
      },
      {
        name: 'list',
        path:'/example/list',
        meta: {
          title: 'list',
          show: true
        }
      },
      {
        name: 'uploading',
        path:'/example/uploading',
        meta: {
          title: 'uploading',
          show: true
        }
      },
      {
        name: 'map',
        path:'/example/map',
        meta: {
          title: 'map',
          show: true
        }
      },
      {
        name: 'charts',
        path:'/example/charts',
        meta: {
          title: 'charts',
          show: true
        }
      },
      {
        name: 'richText',
        path:'/example/richText',
        meta: {
          title: 'richText',
          show: true
        }
      },
      {
        name: 'iframe',
        path:'/example/iframe',
        meta: {
          title: 'iframe',
          show: true
        }
      },
    ]
  },
]
export default  sidebarMenuList