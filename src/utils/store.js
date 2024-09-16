import { createStore } from 'vuex';
import axios from 'axios';
import { API_URL, API_KEY } from './constants';

const store = createStore({
    state() {
        return {
            countries: [], // Para almacenar la lista de países
            selectedCountry: null, // Para almacenar el país seleccionado
            cities: [], // Para almacenar las ciudades del país seleccionado
        };
    },
    mutations: {
        setCountries(state, countries) {
            state.countries = countries;
        },
        setSelectedCountry(state, country) {
            state.selectedCountry = country;
        },
        setCities(state, cities) {
            state.cities = cities;
        },
    },
    actions: {
        async getAllCountries({ commit }) {
            try {
                const response = await axios.get(`${API_URL}/countries`, {
                    headers: { 'X-CSCAPI-KEY': API_KEY },
                });
                commit('setCountries', response.data);
                
            } catch (error) {
                console.error('Error al obtener los paises:', error);
            }
        },
        async getCountryDetails({ commit }, countryName) {
            try {
                const response = await axios.get(`${API_URL}/countries/${countryName}`, {
                    headers: { 'X-CSCAPI-KEY': API_KEY },
                });
                const selectedCountry = response.data
                commit('setSelectedCountry', selectedCountry);
                
                if (selectedCountry) {
                    const cityResponse = await axios.get(`${API_URL}/countries/${selectedCountry.iso2}/states`, {
                        headers: { 'X-CSCAPI-KEY': API_KEY },
                    });
                    commit('setCities', cityResponse.data);
                }
            } catch (error) {
                console.error('Error al obtener los detalles del país o ciudades:', error);
            }
        },

        async searchCountries({ commit }, searchTerm) {
            try {
                const response = await axios.get(`${API_URL}/countries`, {
                    headers: { 'X-CSCAPI-KEY': API_KEY },
                });

                if (!searchTerm) {
                    // Si no hay término de búsqueda, muestra todos los países
                    commit('setCountries', response.data);
                    return;
                  }
                
                const selectedCountry = response.data.find((c) => c.iso2 === searchTerm);
                
                if(!selectedCountry) {
                    commit('setSelectedCountry', []);
                    //alert('Pais no encontrado')
                } else {
                    commit('setSelectedCountry', selectedCountry);
                }
                
                                
            } catch (error) {
                console.error('Error al buscar este pais, o no se encontró', error);
            }
        },
    },
    getters: {
        countries: (state) => state.countries,
        selectedCountry: (state) => state.selectedCountry,
        cities: (state) => state.cities,
    },
});

export default store;