import HomePage from './pages/HomePage.svelte'
import MenuPage from './pages/MenuPage.svelte'
import TranslatePage from './pages/TranslatePage.svelte'
import DetailPage from './pages/DetailPage.svelte'

export const routes = {
  '/': HomePage,
  '/menu': MenuPage,
  '/translate': TranslatePage,
  '/detail': DetailPage,
  // '/movie/:id': Movie, // 파라미터가 있는 페이지
}
