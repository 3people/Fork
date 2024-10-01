import HomePage from './pages/HomePage.svelte'
import MenuPage from './pages/MenuPage.svelte'
import TranslatePage from './pages/translate/TranslatePage.svelte'
import FoodPage from './pages/food/FoodPage.svelte'
import SearchPage from './pages/SearchPage.svelte'
import LandingPage from './pages/landing/LandingPage.svelte'
import RestaurantPage from './pages/RestaurantPage.svelte'
import TranslateProgressPage from './pages/translate/TranslateProgressPage.svelte'

export const routes = {
  '/': LandingPage,
  '/home': HomePage,
  '/menu': MenuPage,
  '/translate': TranslatePage,
  '/translate-progress': TranslateProgressPage,
  '/food': FoodPage,
  '/search': SearchPage,
  '/restaurant': RestaurantPage,
}
