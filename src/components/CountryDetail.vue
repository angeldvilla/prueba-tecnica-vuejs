<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

const country = computed(() => store.getters.selectedCountry);
const cities = computed(() => store.getters.cities);

onMounted(() => {
  const countryName = route.params.name;
  store.dispatch("getCountryDetails", countryName);
});
</script>

<template>
  <div class="relative min-h-screen">
    
    <!-- Fondo opaco y con distorsion -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-repeat bg-[url('https://originalmap.es/wp-content/uploads/2020/04/Cuadro-Mapa.jpg')] opacity-25 blur-sm -z-10"
    ></div>

    <div class="container mx-auto py-10">
      <!-- Mostrar detalles -->
      <div v-if="country">
        <h1 class="text-4xl font-bold mb-8 text-center">
          Detalles de {{ country.name }}
        </h1>
        <div class="flex justify-center">
          <img
            :src="`https://flagcdn.com/w320/${country.iso2?.toLowerCase()}.png`"
            alt="Bandera"
            class="w-64 h-40 object-cover"
          />
        </div>
        <div class="mt-8 flex flex-col justify-center text-center items-center">
          <h2 class="text-2xl font-semibold mb-6">Información General</h2>
          <p class="flex gap-2 mb-3 text-center items-center justify-center">
            <img
              src="https://www.reshot.com/preview-assets/icons/PCX9J6YSUF/city-location-PCX9J6YSUF.svg"
              alt="language"
              class="w-6 h-6"
            />
            <strong>Capital:</strong> {{ country.capital }}
          </p>

          <p class="flex gap-2 mb-3 text-center items-center justify-center">
            <img
              src="https://www.reshot.com/preview-assets/icons/VPXCRSJAFZ/language-VPXCRSJAFZ.svg"
              alt="language"
              class="w-6 h-6"
            />
            <strong>Continente:</strong> {{ country.region }}
          </p>

          <p class="flex gap-2 mb-3 text-center items-center justify-center">
            <img
              src="https://www.reshot.com/preview-assets/icons/VPXCRSJAFZ/language-VPXCRSJAFZ.svg"
              alt="language"
              class="w-6 h-6"
            />
            <strong>Region:</strong> {{ country.subregion }}
          </p>

          <p class="flex gap-2 mb-3 text-center items-center justify-center">
            <img
              src="https://www.reshot.com/preview-assets/icons/VPXCRSJAFZ/language-VPXCRSJAFZ.svg"
              alt="language"
              class="w-6 h-6"
            />
            <strong>Latitud:</strong> {{ country.latitude }}
          </p>

          <p class="flex gap-2 mb-3 text-center items-center justify-center">
            <img
              src="https://www.reshot.com/preview-assets/icons/VPXCRSJAFZ/language-VPXCRSJAFZ.svg"
              alt="language"
              class="w-6 h-6"
            />
            <strong>Longitud:</strong> {{ country.longitude }}
          </p>

          <p class="flex gap-2 mb-3 text-center items-center justify-center">
            <img
              src="https://www.reshot.com/preview-assets/icons/SM3PAU8WLR/cellphone-discount-SM3PAU8WLR.svg"
              alt="language"
              class="w-6 h-6"
            />
            <strong>Codigo:</strong> {{ country.phonecode }}
          </p>
          <p class="flex gap-2 mb-3 text-center items-center justify-center">
            <img
              src="https://www.reshot.com/preview-assets/icons/CQKGDN24MF/cash-flow-CQKGDN24MF.svg"
              alt="language"
              class="w-8 h-8"
            />
            <strong>Moneda:</strong> {{ country.currency }}
          </p>
        </div>

        <!-- Slider para mostrar ciudades -->
        <div v-if="cities && cities.length > 0" class="mt-8">
          <h2 class="flex gap-2 px-6 text-2xl font-semibold mb-4">
            <img
              src="https://www.reshot.com/preview-assets/icons/Q6N5LA7FYD/buildings-Q6N5LA7FYD.svg"
              alt="city"
              class="w-12 h-10"
            />
            Ciudades más conocidas
          </h2>
          <div class="p-4 overflow-x-auto w-full">
            <div
              class="flex gap-4 transition-transform duration-500 ease-in-out"
            >
              <div
                v-for="(city, index) in cities"
                :key="index"
                class="flex-none w-48 p-4 bg-gradient-to-bl from-[#d8f3e5] to-[#d8f3e5] rounded-lg shadow-md"
              >
                <p
                  class="flex justify-center items-center text-center font-semibold text-gray-600"
                >
                  <img
                    src="https://www.reshot.com/preview-assets/icons/JB76VD5R2F/location-tag-JB76VD5R2F.svg"
                    alt="location"
                    class="w-8 h-10"
                  />
                  {{ city.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center">Cargando detalles del país...</div>
    </div>
  </div>
</template>
