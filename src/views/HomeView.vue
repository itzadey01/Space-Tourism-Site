<template>
  <main
    class="home min-h-screen bg-cover bg-center flex items-center justify-center"
  >
    <div class="container flex even-columns w-full">
      <!-- Text Content -->
      <div class="text-content space-y-4 md:space-y-6">
        <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span class="d-block fs-900 ff-serif text-white mt-2 md:mt-4">Space</span>
        </h1>
        <p class="text-accent max-w-md leading-relaxed text-sm md:text-base">
          Let's face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we'll give you a truly out of this world experience!
        </p>
      </div>

      <!-- Explore Button -->
      <div class="explore-container flex items-center justify-center mt-8 md:mt-16 lg:mt-0">
        <router-link
          to="/destination"
          class="large-button uppercase ff-serif text-dark bg-white flex items-center justify-center"
        >
          Explore
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.home {
  background-image: url('/assets/home/background-home-mobile.jpg');
}

@media (min-width: 35rem) {
  .home {
    background-image: url('/assets/home/background-home-tablet.jpg');
  }
}

@media (min-width: 45rem) {
  .home {
    background-image: url('/assets/home/background-home-desktop.jpg');
  }
}

.container {
  max-width: 90rem;
  padding: 2rem 1.5rem;
}

@media (min-width: 45rem) {
  .container {
    max-width: 75rem;
    padding: 2rem 3rem;
  }
}

.large-button {
  width: clamp(150px, 20vw, 274px);
  height: clamp(150px, 20vw, 274px);
  font-size: clamp(1.25rem, 2vw, 2rem);
}

.text-content {
  max-width: 100%;
}

@media (min-width: 45rem) {
  .text-content {
    max-width: 450px;
  }
}

.explore-container {
  width: 100%;
}

@media (min-width: 45rem) {
  .explore-container {
    margin-top: 0;
    align-items: flex-end;
  }
}
</style>