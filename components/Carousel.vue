<template>
    <div id="gallery" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Carousel items -->
        <div v-for="(item, index) in images" :key="index" :class="{ 'hidden': index !== activeIndex, 'duration-700': true, 'ease-in-out': true }" data-carousel-item>
          <img :src="item.src" class="absolute block h-auto max-w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" :alt="item.alt">
        </div>
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none" @click="prevSlide">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none" @click="nextSlide">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: 1,
        images: [
          { src: "https://media.istockphoto.com/id/1316755794/fr/photo/garde-de-s%C3%A9curit%C3%A9-restant-%C3%A0-lint%C3%A9rieur-dun-b%C3%A2timent-commercial-%C3%A0-proximit%C3%A9-de-la-fen%C3%AAtre.jpg?s=612x612&w=0&k=20&c=mZ0j77kzY1dhMTfbMs3BsKkCMFtqVueyh37hhXXNg3Y=", alt: "" },
          { src: "https://media.istockphoto.com/id/614438318/fr/photo/agent-de-s%C3%A9curit%C3%A9-%C3%A0-l%C3%A9coute-de-l%C3%A9couteur-contre-le-b%C3%A2timent.jpg?s=612x612&w=0&k=20&c=LJYundkZPY6Lt2FL02jQ200rjk1zre3-Q7CtmESGPSg=", alt: "" },
          { src: "https://media.istockphoto.com/id/664771114/photo/seriously-businesswoman-wearing-sun-glasses-on-isolated-background.jpg?s=612x612&w=0&k=20&c=JGg3wCft5So-0MuHrRVEUvdu21yq0guyX701glW5Rmc=", alt: "" },
          { src: "https://media.istockphoto.com/id/1022538872/photo/business-colleagues-at-work.jpg?s=612x612&w=0&k=20&c=2K3ucK_lqM8A_6DZlqULVFz3whM3m2PJ-bsW1sla1dc=", alt: "" },
          { src: "https://media.istockphoto.com/id/510958886/photo/secret-agent-listening-to-earpiece.jpg?s=612x612&w=0&k=20&c=453uydsKp65DpB6fmJQrxBgxRqv7Pq0G0h4wmgsuxzc=", alt: "" }
        ]
      };
    },
    methods: {
      prevSlide() {
        this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
      },
      nextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.images.length;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant ici */
  </style>
  