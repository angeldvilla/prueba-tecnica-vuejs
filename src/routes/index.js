import { createRouter, createWebHistory } from 'vue-router';
 import LandingPage from '../components/LandingPage.vue';
import CountriesView from '../components/CountriesView.vue';
import CountryDetail from '../components/CountryDetail.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/countries', component: CountriesView },
  { path: '/country/:name', component: CountryDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
