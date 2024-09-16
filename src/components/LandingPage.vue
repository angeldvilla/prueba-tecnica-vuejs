<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToCountries = () => {
  router.push("/countries");
};
</script>

<template>
  <div class="relative w-full h-screen flex items-center justify-center">
    <div
      class="absolute inset-0 bg-cover bg-center bg-[url('https://p4.wallpaperbetter.com/wallpaper/649/274/476/countries-flag-map-world-map-wallpaper-preview.jpg')] opacity-50 blur-sm"
    ></div>

    <div class="z-10 flex flex-col justify-center items-center text-center">
      <h1 class="text-5xl font-bold text-center py-12">
        Bienvenido a prueba técnica de VueJs
      </h1>

      <span class="flex text-xl font-bold text-center mb-12 gap-2"
        >Usando la API
        <a
          href="https://countrystatecity.in"
          class="flex text-[#cddc39] font-bold gap-2"
        >
          Country State City
          <img
            src="https://countrystatecity.in/img/world.svg"
            alt="countrystatecity"
            width="30"
            height="55"
          /> </a
      ></span>

      <button
        @click="navigateToCountries"
        class="flex items-center justify-center text-center px-6 py-3 text-xl font-bold text-white bg-[#2296f3] bg-opacity-100 rounded-xl shadow-lg hover:bg-opacity-75"
      >
        Explorar Países
      </button>

      <div class="mt-32">
        <p class="text-lg font-bold text-center">Hecho por</p>
        <a
          href="https://github.com/angeldvilla"
          class="flex text-[#cddc39] font-bold gap-2"
        >
          Angel David Villa Luján 🚀
        </a>
      </div>
    </div>
  </div>
</template>
