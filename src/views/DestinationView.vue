<template>
  <main
    class="destination grid-container grid-container--destination flow min-h-screen bg-cover bg-center text-white"
    style="background-image: url('/assets/destination/background-destination-desktop.jpg')"
  >
    <h1 class="numbered-title"><span>01</span> Pick your destination</h1>

    <!-- Planet image -->
    <div class="planet-wrapper">
      <img :src="currentDestination.image" :alt="currentDestination.name" class="planet-img" />
    </div>

    <!-- Tabs -->
    <div class="tab-list underline-indicators flex">
      <button
        v-for="(planet, index) in destinations"
        :key="planet.name"
        @click="currentIndex = index"
        :aria-selected="currentIndex === index"
        class="uppercase ff-sans-cond text-accent letter-spacing-2"
        :class="{ 'active-tab': currentIndex === index }"
      >
        {{ planet.name }}
      </button>
    </div>

    <!-- Destination content -->
    <article class="destination-info">
      <h2 class="fs-800 uppercase ff-serif">{{ currentDestination.name }}</h2>
      <p class="text-accent">
        {{ currentDestination.description }}
      </p>

      <div class="flex destination-meta mt-8">
        <div>
          <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
          <p class="ff-serif uppercase fs-500">{{ currentDestination.distance }}</p>
        </div>
        <div>
          <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
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
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
        },
        {
          name: "Mars",
          image: "/assets/destination/image-mars.png",
          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months",
        },
        {
          name: "Europa",
          image: "/assets/destination/image-europa.png",
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
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
.planet-wrapper {
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.planet-img {
  max-width: 100%;
  height: auto;
}

.destination-info {
  grid-area: content;
  max-width: 500px;
}

.active-tab {
  border-bottom: 3px solid white;
  color: white;
}

@media (min-width: 45em) {
  .planet-img {
    max-width: 70%;
  }
}
</style>
