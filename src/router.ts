import HomePage from './pages/HomePage.svelte'
import MenuPage from './pages/MenuPage.svelte'
import TranslatePage from './pages/TranslatePage.svelte'
import FoodPage from './pages/FoodPage.svelte'
import SearchPage from './pages/SearchPage.svelte'
import LandingPage from './pages/landing/LandingPage.svelte'
import RestaurantPage from './pages/RestaurantPage.svelte'

export const routes = {
  '/': LandingPage,
  '/home': HomePage,
  '/menu': MenuPage,
  '/translate': TranslatePage,
  '/food': FoodPage,
  '/search': SearchPage,
  '/restaurant': RestaurantPage,
}
