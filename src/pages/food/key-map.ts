import type {Language} from '../../locale/types'
import {type FoodItem} from '../../requests/mock/food-data'

export const nameKey: Record<Language, keyof FoodItem> = {
  ko: 'name',
  en: 'name_en',
  ja: 'name_ja',
  zh: 'name_zh2',
}

export const descriptionKey: Record<Language, keyof FoodItem> = {
  ko: 'description',
  en: 'description_en',
  ja: 'description_ja',
  zh: 'description_zh2',
}