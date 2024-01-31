const theme = {
    color: {
      primaryColor: "#ff385c",
      secondaryColor: "#00848A"
    },
    text: {
      primaryColor: "#484848",
      secondaryColor: "#222"
    },
    mixin: {
      // 很多组件都有一个悬浮显示阴影的动画效果，实现复用
      boxShadow: `
        transition: box-shadow 200ms ease;
        &:hover {
          box-shadow: 0 2px 4px rgba(0,0,0,.18);
        }
      `  
    }
  }
  
  export default theme
  