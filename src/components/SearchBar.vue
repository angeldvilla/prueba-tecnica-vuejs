<script setup>
import { ref } from "vue";

const emit = defineEmits(["search"]);

const searchTerm = ref("");

// Función para cuando el usuario escribe en el campo de búsqueda
const search = () => {
  emit("search", searchTerm.value);
};
</script>

<template>
  <input
    type="search"
    placeholder="Busca un país..."
    class="rounded-full p-2 px-4 border-2 focus:outline-none focus:border-blue-500"
    v-model="searchTerm"
    @keyup.enter="search"
  />
  <button
      class="bg-blue-500 text-white rounded-full px-4 py-2"
      @click="search"
    >
      Buscar
    </button>
</template>
