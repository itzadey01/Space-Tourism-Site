<template>
  <main class="home">
    <div class="container flex even-columns" style="max-width: 60rem;">
      <div>
        <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span class="d-block fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div class="explore-container">
        <router-link
          to="/destination"
          class="large-button small-button uppercase ff-serif text-dark bg-white"
        >
          Explore
        </router-link>
      </div>
    </div>
  </main>
</template>


<style scoped>
.explore-container {
  margin-top: 8rem; /* adjust for vertical placement */
}

.small-button {
  display: flex;               /* make it a flex container */
  align-items: center;         /* vertically center text */
  justify-content: center;     /* horizontally center text */
  width: 180px;                /* smaller width */
  height: 180px;               /* smaller height */
  font-size: 1.5rem;           /* smaller text size */
  border-radius: 50%;          /* keep it circular */
  text-decoration: none;       /* remove link underline */
}
</style>
