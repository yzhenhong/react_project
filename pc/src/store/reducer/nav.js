const defaultNav = '首页';

export default function nav(nav = defaultNav, action) {
  switch (action.type) {
    case "setNav":
      return action.data;
    default:
      return nav;
  }
}