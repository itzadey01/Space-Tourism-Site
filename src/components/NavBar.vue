<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isNavOpen = ref(false);
const isMobile = ref(false);

const toggleMobileNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const closeMobileNav = () => {
  isNavOpen.value = false;
};

const updateScreen = () => {
  isMobile.value = window.innerWidth < 1024;
  if (!isMobile.value && isNavOpen.value) {
    isNavOpen.value = false;
  }
};

onMounted(() => {
  updateScreen();
  window.addEventListener('resize', updateScreen);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreen);
});
</script>

<template>
  <header
    class="primary-header flex items-center justify-between px-4 md:px-6 lg:px-12 pt-4 md:pt-6 lg:pt-8 relative z-50"
  >
    <!-- Logo -->
    <div class="flex-shrink-0">
      <img
        src="/assets/shared/logo.svg"
        alt="space tourism logo"
        class="logo w-10 h-10 md:w-12 md:h-12"
      />
    </div>

    <!-- Mobile nav toggle -->
    <button
      v-if="isMobile"
      class="mobile-nav-toggle z-50 p-2"
      @click="toggleMobileNav"
      :aria-expanded="isNavOpen.toString()"
      aria-controls="primary-navigation"
      aria-label="Toggle navigation menu"
    >
      <img
        v-if="!isNavOpen"
        src="/assets/shared/icon-hamburger.svg"
        alt=""
        class="w-6 h-6"
      />
      <img
        v-else
        src="/assets/shared/icon-close.svg"
        alt=""
        class="w-6 h-6"
      />
    </button>

    <!-- Decorative line (desktop only) -->
    <div 
      v-if="!isMobile" 
      class="hidden lg:block flex-1 h-px bg-white/25 mx-8 relative z-10"
      style="max-width: 30%"
    ></div>

    <!-- Navigation Links -->
    <nav class="flex-shrink-0">
      <ul
        id="primary-navigation"
        :data-visible="isNavOpen"
        :class="[
          'primary-navigation uppercase ff-sans-cond tracking-widest text-white transition-all duration-300',
          {
            'fixed inset-0 left-[30%] flex flex-col bg-white/5 backdrop-blur-2xl p-8 pt-28': isMobile,
            'translate-x-0': isMobile && isNavOpen,
            'translate-x-full': isMobile && !isNavOpen,
            'flex flex-row gap-6 lg:gap-12 bg-white/5 backdrop-blur-lg px-8 lg:px-16 py-6 lg:py-8': !isMobile,
          }
        ]"
      >
        <li 
          v-for="link in [
            { path: '/', label: 'Home', number: '00' },
            { path: '/destination', label: 'Destination', number: '01' },
            { path: '/crew', label: 'Crew', number: '02' },
            { path: '/technology', label: 'Technology', number: '03' }
          ]"
          :key="link.path"
          :class="[
            'nav-item relative',
            { 'active': route.path === link.path }
          ]"
        >
          <RouterLink 
            :to="link.path" 
            @click="closeMobileNav"
            class="flex items-center gap-3 py-3 lg:py-0 text-sm lg:text-base transition-colors hover:text-white"
          >
            <span class="font-bold lg:inline" :class="isMobile ? 'inline' : 'hidden xl:inline'">
              {{ link.number }}
            </span>
            <span>{{ link.label }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.primary-header {
  width: 100%;
}

.logo {
  transition: all 0.3s ease;
}

.primary-navigation {
  list-style: none;
  margin: 0;
}

@media (max-width: 1023px) {
  .primary-navigation[data-visible="true"]::before {
    content: '';
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}

.nav-item.active a {
  color: white;
}

@media (min-width: 1024px) {
  .nav-item {
    position: relative;
  }
  
  .nav-item::after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    right: 0;
    height: 3px;
    background: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .nav-item:hover::after {
    transform: scaleX(1);
    background: rgba(255, 255, 255, 0.5);
  }
  
  .nav-item.active::after {
    transform: scaleX(1);
    background: white;
  }
}

@media (max-width: 1023px) {
  .nav-item a {
    border-right: 3px solid transparent;
    padding-right: 1rem;
  }
  
  .nav-item.active a {
    border-right-color: white;
  }
  
  .nav-item:hover a {
    border-right-color: rgba(255, 255, 255, 0.5);
  }
}

.mobile-nav-toggle {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.mobile-nav-toggle:hover {
  transform: scale(1.1);
}

.mobile-nav-toggle:focus-visible {
  outline: 2px solid white;
  outline-offset: 4px;
  border-radius: 4px;
}

.primary-navigation {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>