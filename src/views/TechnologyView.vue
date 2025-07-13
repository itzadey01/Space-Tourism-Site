<template>
  <main
    class="technology grid-container grid-container--technology text-white bg-cover bg-center min-h-screen"
    style="background-image: url('/assets/technology/background-technology-desktop.jpg')"
  >
    <!-- Page Title -->
    <h1 class="numbered-title">
      <span>03</span> SPACE LAUNCH 101
    </h1>

    <!-- Left Side: Dots and Text arranged side by side -->
    <section class="tech-details flex gap-10 items-center">
      <!-- Dot Indicators on the left -->
      <div class="flex flex-col gap-6">
        <button
          v-for="(tech, index) in technologies"
          :key="tech.name"
          @click="currentIndex = index"
          :aria-selected="currentIndex === index"
          class="dot-button"
          :class="currentIndex === index ? 'bg-white text-black' : 'bg-transparent text-white border-white border'"
        >
          {{ index + 1 }}
        </button>
      </div>

      <!-- Text Content on the right of dots -->
      <div class="tech-text">
        <p class="text-accent text-sm tracking-[2.35px] uppercase font-barlow-cond mb-2">The terminology…</p>
        <h2 class="uppercase text-white text-[3.5rem] font-bellefair mb-4">{{ currentTech.name }}</h2>
        <p class="text-accent text-base max-w-md leading-relaxed">{{ currentTech.description }}</p>
      </div>
    </section>

    <!-- Image on the right -->
    <div class="tech-image">
      <img
        :src="currentTech.images.portrait"
        :alt="currentTech.name"
        class="w-full max-w-md h-auto object-contain"
      />
    </div>
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
    },
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    images: {
      portrait: "/assets/technology/image-spaceport-portrait.jpg",
    },
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      portrait: "/assets/technology/image-space-capsule-portrait.jpg",
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
.grid-container--technology {
  display: grid;
  grid-template-areas:
    "title title"
    "content image";
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  padding: 3rem 5vw;
}

.numbered-title {
  grid-area: title;
  font-family: var(--font-family-barlow-condensed);
  font-size: var(--font-size-fs-500);
  letter-spacing: var(--letter-spacing-spacing-1);
  text-transform: uppercase;
  color: white;
  align-self: start;
  margin-bottom: 2rem;
}

.tech-details {
  grid-area: content;
  align-self: center;
}

.tech-image {
  grid-area: image;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.dot-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-family: var(--font-family-bellefair);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}
</style>
