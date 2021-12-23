<template>
  <div class="flex flex-col h-screen">
    <NavBar />
    <div class="flex flex-grow">
      <SideMenu v-if="showSideBarDesktop" class="hidden md:block" />
      <Nuxt class="p-4 bg-base-200" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
  computed: {
    showSideBarDesktop () {
      return this.$store.state.showSideBarDesktop
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
