import { onMounted } from 'vue';
<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import SearchBar from "./SearchBar.vue";

const store = useStore();
const searchTerm = ref("");

onMounted(() => {
  // Hacer la peticion a la acción del store para obtener la lista de países
  store.dispatch("getAllCountries");
});

// Función para buscar países según el término ingresado
const searchCountries = async (term) => {
  searchTerm.value = term;
  await store.dispatch("searchCountries", term);
};

//Acceder a la lista de paises desde el store
const countries = computed(() => store.getters.countries);

// Filtrar los países según el término de búsqueda
const filteredCountries = computed(() => {
  if (!searchTerm.value) {
    return countries.value; // Mostrar todos los países si no hay término de búsqueda
  } else {
    return countries.value.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }
});
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Fondo opaco y con distorsion -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-repeat bg-[url('https://p1.pxfuel.com/preview/705/239/698/globe-world-map-maps.jpg')] opacity-25 blur-sm -z-10"
    ></div>

    <div class="container mx-auto py-10 relative z-10">
      <h1 class="text-4xl font-bold mb-8 text-center">
        Países de todo el mundo
      </h1>

      <!-- Buscador -->
      <div class="flex justify-center mb-8 gap-2">
        <SearchBar @search="searchCountries" />
      </div>

      <!-- Verificar si hay países para mostrar -->
      <div
        v-if="filteredCountries && filteredCountries.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <!-- Recorrer la lista de países y mostrar cada uno en un estilo tarjeta -->
        <div
          v-for="(country, index) in filteredCountries"
          :key="index"
          class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            :src="`https://flagcdn.com/w320/${country.iso2.toLowerCase()}.png`"
            alt="bandera"
            class="w-full h-52 object-cover"
          />
          <div class="p-4">
            <h2 class="text-black text-xl font-semibold">{{ country.name }}</h2>
            <p class="text-gray-600">Capital: {{ country.capital }}</p>
            <p class="text-gray-600">Moneda: {{ country.currency }}</p>
          </div>

          <router-link
            :to="`/country/${country.iso2}`"
            class="block bg-[#2296f3] text-white text-center font-bold py-2 hover:bg-[#008eff]"
          >
            Ver más
          </router-link>
        </div>
      </div>

      <!-- Mostrar un mensaje si no se ha cargado la lista de países -->
      <div v-else class="text-center text-gray-500">Cargando países...</div>
    </div>
  </div>
</template>
