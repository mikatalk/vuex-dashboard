export default {
  pageScrollY: state => state.internals.pageScrollY,
  windowWidth: state => state.internals.windowWidth,
  windowHeight: state => state.internals.windowHeight,
  mouse: state => {
    return {
      x: state.internals.mouseX,
      y: state.internals.mouseY
    }
  }
}
