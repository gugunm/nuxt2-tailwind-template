<template>
  <div class="flex flex-col h-screen bg-white">
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
      <div class="flex-none hidden lg:flex">
        <button class="btn btn-square btn-ghost" @click.stop="drawer = !drawer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div class="flex-1 hidden px-2 mx-2 lg:flex">
        <span class="text-lg font-bold">
          DaisyUI + Nuxt2
        </span>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
      <div class="flex-none">
        <div class="avatar">
          <div class="rounded-full w-10 h-10 m-1 mx-2">
            <img src="https://i.pravatar.cc/500?img=32">
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-grow">
      <transition name="slide-fade">
        <nav>
          <ul v-if="drawer" class="menu w-80 py-4 h-full bg-base-200 rounded-box ">
            <li class="menu-title mb-2">
              <span>
                Menu Title
              </span>
            </li>
            <li
              v-for="(item, i) in items"
              :key="i"
              exact
            >
              <NuxtLink :to="item.to">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </transition>
      <div class="h-full ">
        <Nuxt />
      </div>
    </div>
  </div>
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
          title: 'Inspire',
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

/* home route and active route will show in bold as it matches / and /about */
/* a.nuxt-link-active {
  font-weight: bold;
} */
/* exact link will show the primary color for only the exact matching link */
/* a.nuxt-link-exact-active {
  color: #00c58e;
} */

</style>
