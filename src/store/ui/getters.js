export default {
  pageScrollY: state => state.internals.pageScrollY,
  pageScrollRatio: state => (state.internals.pageScrollY) /
    (-state.internals.windowHeight + state.internals.pageHeight),
  pageHeight: state => state.internals.pageHeight,
  windowWidth: state => state.internals.windowWidth,
  windowHeight: state => state.internals.windowHeight,
  mouse: state => {
    return {
      x: state.internals.mouseX,
      y: state.internals.mouseY
    }
  }
}
