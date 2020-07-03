const defaultNav = [
  {
    titile: '首页',
  },
  {
    titile: '示例',
  }
];

export default function nav(nav = defaultNav, action) {
  switch (action.type) {
    case "setNav":
      return action.data;
    default:
      return nav;
  }
}