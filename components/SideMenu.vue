<template>
  <transition name="slide-fade">
    <ul v-if="drawer" class="text-white menu w-80 py-4 pl-4 h-full bg-blue-600 rounded-r-3xl">
      <li class="menu-title  mb-2">
        <span style="color:white;">
          Menu Title
        </span>
      </li>
      <li
        v-for="(item, i) in items"
        :key="i"
        exact
      >
        <NuxtLink class="text-base my-1 hover:bg-white hover:text-blue-600 rounded-l-2xl" :to="item.to">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </transition>
</template>

<script>
/* ✓ GOOD */
export default {
  name: 'TodoItem',
  data () {
    return {
      drawer: true,
      items: [
        {
          icon: 'icon',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'icon',
          title: 'About',
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .1s;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-5px);
  opacity: 0;
}
</style>
