const defaultMenu = [
  {
    icon: 'icon-shouye',
    name: 'index',
    path:'/home/index',
    meta: {
      title: '首页',
      show: true,
    },
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
        name: 'iframe',
        path:'/example/iframe',
        meta: {
          title: 'iframe',
          show: true
        }
      },
    ]
  },
];

export default function menu(menu = defaultMenu, action) {
  switch (action.type) {
    case "setMenu":
      return action.data;
    default:
      return menu;
  }
}