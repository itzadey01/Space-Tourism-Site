<template>
  <main
    class="destination grid-container grid-container--destination flow min-h-screen bg-cover bg-center text-white"
  >
    <h1 class="numbered-title text-center md:text-left">
      <span>01</span> Pick your destination
    </h1>

    <!-- Planet image -->
    <div class="planet-wrapper">
      <img 
        :src="currentDestination.image" 
        :alt="currentDestination.name" 
        class="planet-img w-full h-auto"
      />
    </div>

    <!-- Tabs -->
    <div class="tab-list underline-indicators flex justify-center md:justify-start flex-wrap gap-4 md:gap-8">
      <button
        v-for="(planet, index) in destinations"
        :key="planet.name"
        @click="currentIndex = index"
        :aria-selected="currentIndex === index"
        class="uppercase ff-sans-cond text-accent letter-spacing-2 text-sm md:text-base"
        :class="{ 'active-tab': currentIndex === index }"
      >
        {{ planet.name }}
      </button>
    </div>

    <!-- Destination content -->
    <article class="destination-info space-y-4 md:space-y-6">
      <h2 class="fs-800 uppercase ff-serif">{{ currentDestination.name }}</h2>
      <p class="text-accent leading-relaxed text-sm md:text-base max-w-full md:max-w-md">
        {{ currentDestination.description }}
      </p>

      <div class="flex destination-meta mt-8 gap-8 md:gap-16 flex-col md:flex-row items-center md:items-start">
        <div class="text-center md:text-left">
          <h3 class="text-accent fs-200 uppercase tracking-wider mb-2">Avg. distance</h3>
          <p class="ff-serif uppercase fs-500">{{ currentDestination.distance }}</p>
        </div>
        <div class="text-center md:text-left">
          <h3 class="text-accent fs-200 uppercase tracking-wider mb-2">Est. travel time</h3>
          <p class="ff-serif uppercase fs-500">{{ currentDestination.travel }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      destinations: [
        {
          name: "Moon",
          image: "/assets/destination/image-moon.png",
          description:
            "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
        },
        {
          name: "Mars",
          image: "/assets/destination/image-mars.png",
          description:
            "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months",
        },
        {
          name: "Europa",
          image: "/assets/destination/image-europa.png",
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travel: "3 years",
        },
        {
          name: "Titan",
          image: "/assets/destination/image-titan.png",
          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travel: "7 years",
        },
      ],
    };
  },
  computed: {
    currentDestination() {
      return this.destinations[this.currentIndex];
    },
  },
};
</script>

<style scoped>
.destination {
  background-image: url('/assets/destination/background-destination-mobile.jpg');
}

@media (min-width: 35rem) {
  .destination {
    background-image: url('/assets/destination/background-destination-tablet.jpg');
  }
}

@media (min-width: 45rem) {
  .destination {
    background-image: url('/assets/destination/background-destination-desktop.jpg');
  }
}

.planet-wrapper {
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(1rem, 3vw, 2rem) 0;
}

.planet-img {
  max-width: 100%;
  width: clamp(170px, 40vw, 445px);
  height: auto;
}

@media (min-width: 45em) {
  .planet-img {
    max-width: 70%;
  }
}

.destination-info {
  grid-area: content;
  max-width: 100%;
}

@media (min-width: 45em) {
  .destination-info {
    max-width: 500px;
  }
}

.active-tab {
  border-bottom: 3px solid white;
  color: white;
}
</style>