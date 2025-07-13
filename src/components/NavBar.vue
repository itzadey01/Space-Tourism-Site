<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isNavOpen = ref(false);
const toggleMobileNav = () => (isNavOpen.value = !isNavOpen.value);

// Track screen size
const isMobile = ref(false);
onMounted(() => {
  const updateScreen = () => {
    isMobile.value = window.innerWidth < 1024;
  };
  updateScreen();
  window.addEventListener('resize', updateScreen);
});
</script>

<template>
  <header
    class="primary-header flex items-center justify-between px-6 pt-6 lg:px-12 lg:pt-8 relative z-50"
  >
    <!-- Logo -->
    <div>
      <img
        src="/assets/shared/logo.svg"
        alt="space tourism logo"
        class="logo w-10 h-10"
      />
    </div>

    <!-- Mobile nav toggle (hidden on lg and up) -->
    <button
      class="mobile-nav-toggle lg:hidden"
      @click="toggleMobileNav"
      aria-controls="primary-navigation"
    >
      <span class="sr-only" :aria-expanded="isNavOpen.toString()">Menu</span>
      <img
        src="/assets/shared/icon-hamburger.svg"
        alt=""
        v-if="!isNavOpen"
      />
      <img src="/assets/shared/icon-close.svg" alt="" v-else />
    </button>

    <!-- Navigation Links -->
    <nav>
      <ul
        id="primary-navigation"
        :class="[
          'primary-navigation uppercase ff-sans-cond tracking-widest text-white text-sm transition-all duration-300',
          isMobile && isNavOpen
            ? 'flex flex-col absolute top-full left-0 w-full bg-white/10 backdrop-blur-md p-8'
            : 'hidden',
          !isMobile
            ? 'flex gap-8 lg:bg-white/5 lg:backdrop-blur-lg lg:px-12 lg:py-4 rounded-md'
            : ''
        ]"
      >
        <li :class="{ active: route.path === '/' }">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li :class="{ active: route.path === '/destination' }">
          <RouterLink to="/destination">Destination</RouterLink>
        </li>
        <li :class="{ active: route.path === '/crew' }">
          <RouterLink to="/crew">Crew</RouterLink>
        </li>
        <li :class="{ active: route.path === '/technology' }">
          <RouterLink to="/technology">Technology</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.primary-navigation {
  list-style: none;
}

.primary-navigation li.active a {
  border-bottom: 2px solid white;
}

.mobile-nav-toggle {
  background: none;
  border: none;
  cursor: pointer;
}

.logo {
  width: 40px;
  height: 40px;
}
</style>
