<template>
  <main
    class="crew grid-container grid-container--crew min-h-screen bg-cover bg-center text-white"
  >
    <!-- Title -->
    <h1 class="numbered-title text-center md:text-left">
      <span>02</span> Meet your crew
    </h1>

    <!-- Crew Image -->
    <div class="crew-image flex justify-center items-end">
      <img
        :src="currentCrew.image"
        :alt="currentCrew.name"
        class="crew-img w-full h-auto object-contain"
        style="max-height: clamp(300px, 50vh, 600px)"
      />
    </div>

    <!-- Dot Indicators -->
    <div class="dot-indicators flex gap-4 justify-center md:justify-start">
      <button
        v-for="(member, index) in crew"
        :key="member.name"
        @click="currentIndex = index"
        :class="[
          'w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300',
          currentIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
        ]"
        :aria-label="`View ${member.name}`"
      ></button>
    </div>

    <!-- Crew Text Content -->
    <section class="crew-details space-y-4 md:space-y-6 text-center md:text-left">
      <div class="space-y-2 md:space-y-4">
        <h2 class="uppercase text-accent font-bellefair text-lg md:text-2xl opacity-50">
          {{ currentCrew.role }}
        </h2>
        <h3 class="uppercase font-bellefair text-2xl md:text-4xl lg:text-5xl">
          {{ currentCrew.name }}
        </h3>
        <p class="text-accent font-barlow max-w-full md:max-w-md lg:max-w-lg leading-relaxed text-sm md:text-base">
          {{ currentCrew.bio }}
        </p>
      </div>
    </section>
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
.crew {
  background-image: url('/assets/crew/background-crew-mobile.jpg');
}

@media (min-width: 35rem) {
  .crew {
    background-image: url('/assets/crew/background-crew-tablet.jpg');
  }
}

@media (min-width: 45rem) {
  .crew {
    background-image: url('/assets/crew/background-crew-desktop.jpg');
  }
}

.grid-container--crew {
  display: grid;
  grid-template-areas:
    "title"
    "image"
    "tabs"
    "content";
  row-gap: clamp(1.5rem, 3vh, 2rem);
  padding: clamp(1rem, 3vh, 2rem) clamp(1rem, 5vw, 2rem);
}

.numbered-title {
  grid-area: title;
}

.crew-image {
  grid-area: image;
}

.dot-indicators {
  grid-area: tabs;
}

.crew-details {
  grid-area: content;
}

.crew-img {
  border-bottom: 1px solid hsl(var(--clr-white) / 0.1);
  padding-bottom: 2rem;
}

@media (min-width: 35em) {
  .grid-container--crew {
    grid-template-areas:
      "title"
      "content"
      "tabs"
      "image";
  }

  .crew-img {
    border-bottom: none;
    padding-bottom: 0;
  }
}

@media (min-width: 45em) {
  .grid-container--crew {
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
    grid-template-areas:
      ". title title ."
      ". content image ."
      ". tabs image .";
    align-items: start;
    padding-bottom: 6rem;
  }

  .crew-image {
    align-self: end;
  }
}
</style>