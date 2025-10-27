<template>
  <main
    class="technology grid-container grid-container--technology text-white bg-cover bg-center min-h-screen"
  >
    <!-- Page Title -->
    <h1 class="numbered-title text-center md:text-left">
      <span>03</span> SPACE LAUNCH 101
    </h1>

    <!-- Image -->
    <div class="tech-image flex justify-center items-center">
      <picture>
        <source 
          media="(min-width: 45em)" 
          :srcset="currentTech.images.portrait"
        >
        <img
          :src="currentTech.images.landscape || currentTech.images.portrait"
          :alt="currentTech.name"
          class="w-full h-auto object-cover md:object-contain"
        />
      </picture>
    </div>

    <!-- Content: Dots and Text -->
    <section class="tech-details flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start justify-center md:justify-start">
      <!-- Dot Indicators -->
      <div class="flex flex-row md:flex-col gap-4 md:gap-6 justify-center">
        <button
          v-for="(tech, index) in technologies"
          :key="tech.name"
          @click="currentIndex = index"
          :aria-selected="currentIndex === index"
          :aria-label="`View ${tech.name}`"
          class="dot-button"
          :class="currentIndex === index ? 'bg-white text-black' : 'bg-transparent text-white border-white border'"
        >
          {{ index + 1 }}
        </button>
      </div>

      <!-- Text Content -->
      <div class="tech-text text-center md:text-left space-y-3 md:space-y-4 max-w-full md:max-w-md lg:max-w-lg">
        <p class="text-accent text-xs md:text-sm tracking-widest uppercase font-barlow-cond">
          The terminology…
        </p>
        <h2 class="uppercase text-white text-2xl md:text-4xl lg:text-5xl font-bellefair">
          {{ currentTech.name }}
        </h2>
        <p class="text-accent text-sm md:text-base leading-relaxed">
          {{ currentTech.description }}
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
      technologies: [
        {
          name: "Launch vehicle",
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          images: {
            portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
            landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
          },
        },
        {
          name: "Spaceport",
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
          images: {
            portrait: "/assets/technology/image-spaceport-portrait.jpg",
            landscape: "/assets/technology/image-spaceport-landscape.jpg",
          },
        },
        {
          name: "Space capsule",
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          images: {
            portrait: "/assets/technology/image-space-capsule-portrait.jpg",
            landscape: "/assets/technology/image-space-capsule-landscape.jpg",
          },
        },
      ]
    };
  },
  computed: {
    currentTech() {
      return this.technologies[this.currentIndex];
    },
  },
};
</script>

<style scoped>
.technology {
  background-image: url('/assets/technology/background-technology-mobile.jpg');
}

@media (min-width: 35rem) {
  .technology {
    background-image: url('/assets/technology/background-technology-tablet.jpg');
  }
}

@media (min-width: 45rem) {
  .technology {
    background-image: url('/assets/technology/background-technology-desktop.jpg');
  }
}

.grid-container--technology {
  display: grid;
  grid-template-areas:
    "title"
    "image"
    "content";
  gap: clamp(2rem, 4vh, 4rem);
  padding: clamp(1rem, 3vh, 2rem) 0;
  text-align: center;
}

.numbered-title {
  grid-area: title;
  padding-inline: clamp(1rem, 5vw, 2rem);
}

.tech-image {
  grid-area: image;
  width: 100%;
}

.tech-image img {
  width: 100%;
  max-height: clamp(200px, 40vh, 400px);
}

.tech-details {
  grid-area: content;
  padding-inline: clamp(1rem, 5vw, 2rem);
}

.dot-button {
  width: clamp(40px, 10vw, 80px);
  height: clamp(40px, 10vw, 80px);
  border-radius: 50%;
  font-family: var(--ff-serif);
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: 400;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot-button:hover {
  border-color: hsl(var(--clr-white));
}

@media (min-width: 45em) {
  .grid-container--technology {
    grid-template-columns: minmax(1rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(1rem, 1fr);
    grid-template-areas:
      ". title title ."
      ". content image .";
    text-align: left;
    align-items: center;
    padding: clamp(2rem, 5vh, 6rem) 0;
  }

  .tech-image {
    justify-content: flex-end;
  }

  .tech-image img {
    max-height: none;
    height: auto;
    max-width: 100%;
  }

  .tech-details {
    justify-content: flex-start;
  }
}

@media (min-width: 60em) {
  .tech-details {
    gap: 3rem;
  }
  
  .dot-button {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
}
</style>