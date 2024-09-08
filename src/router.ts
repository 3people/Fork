import HomePage from './pages/HomePage.svelte'
import MenuPage from './pages/MenuPage.svelte'
import TranslatePage from './pages/TranslatePage.svelte'

export const routes = {
  '/': HomePage,
  '/menu': MenuPage,
  '/translate': TranslatePage,
  // '/movie/:id': Movie, // 파라미터가 있는 페이지
}
