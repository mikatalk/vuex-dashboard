export default {
  internals: state => state.internals,
  currentOpenGroup: state => state.internals.currentOpenGroup,
  pageScrollY: state => state.internals.pageScrollY,
  windowWidth: state => state.internals.windowWidth,
  windowHeight: state => state.internals.windowHeight
}
