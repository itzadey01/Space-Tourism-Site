<template>
  <main
    class="crew grid-container grid-container--crew min-h-screen bg-cover bg-center text-white"
    style="background-image: url('/assets/crew/background-crew-desktop.jpg')"
  >
    <!-- Title -->
    <h1 class="numbered-title">
      <span>02</span> Meet your crew
    </h1>

    <!-- Crew Text Content and Dots -->
    <section class="crew-content flex flex-col justify-center gap-12">
      <div class="text-left space-y-4">
        <h2 class="uppercase text-accent font-bellefair text-[1.5rem] opacity-50">
          {{ currentCrew.role }}
        </h2>
        <h3 class="uppercase font-bellefair text-[2.5rem] md:text-[3.5rem]">
          {{ currentCrew.name }}
        </h3>
        <p class="text-accent font-barlow max-w-md leading-relaxed text-base">
          {{ currentCrew.bio }}
        </p>
      </div>

      <!-- Dot Indicators -->
      <div class="dot-indicators flex gap-4 mt-6">
        <button
          v-for="(member, index) in crew"
          :key="member.name"
          @click="currentIndex = index"
          :class="[
            'w-4 h-4 rounded-full transition-colors duration-300',
            currentIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
          ]"
        ></button>
      </div>
    </section>

    <!-- Crew Image -->
    <div class="crew-image">
      <img
        :src="currentCrew.image"
        :alt="currentCrew.name"
        class="crew-img max-h-[500px] w-auto object-contain"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      crew: [
        {
          role: 'Commander',
          name: 'Douglas Hurley',
          bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
            and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.`,
          image: '/assets/crew/image-douglas-hurley.png'
        },
        {
          role: 'Mission Specialist',
          name: 'Mark Shuttleworth',
          bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company
            behind the Linux-based Ubuntu operating system. Shuttleworth became the first
            South African to travel to space as a space tourist.`,
          image: '/assets/crew/image-mark-shuttleworth.png'
        },
        {
          role: 'Pilot',
          name: 'Victor Glover',
          bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to the
            International Space Station. Glover is a commander in the U.S. Navy where
            he pilots an F/A-18. He was a crew member of Expedition 64, and served as
            a station systems flight engineer.`,
          image: '/assets/crew/image-victor-glover.png'
        },
        {
          role: 'Flight Engineer',
          name: 'Anousheh Ansari',
          bio: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
            Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to
            the ISS, and the first Iranian in space.`,
          image: '/assets/crew/image-anousheh-ansari.png'
        }
      ]
    };
  },
  computed: {
    currentCrew() {
      return this.crew[this.currentIndex];
    }
  }
};
</script>

<style scoped>
.grid-container--crew {
  display: grid;
  grid-template-areas:
    "title"
    "image"
    "content";
  row-gap: 2rem;
  padding: 2rem 1.5rem;
}

@media (min-width: 768px) {
  .grid-container--crew {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "content image";
    align-items: center;
  }
}

.numbered-title {
  grid-area: title;
  font-family: var(--font-family-barlow-condensed);
  font-size: var(--font-size-fs-500);
  letter-spacing: var(--letter-spacing-spacing-1);
  text-transform: uppercase;
  color: white;
  margin-bottom: 1rem;
}

.crew-content {
  grid-area: content;
}

.crew-image {
  grid-area: image;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.dot-indicators {
  margin-top: 4rem;
}
</style>
