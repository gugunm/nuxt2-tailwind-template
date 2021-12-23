export const state = () => ({
  showSideBarDesktop: true
})

export const mutations = {
  toggleSideBarDesktop (state) {
    state.showSideBarDesktop = !state.showSideBarDesktop
  }
}
