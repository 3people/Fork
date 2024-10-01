import {normalizeRestaurants} from '../normalize/restaurant-list'
import {fetchRestaurantCommonInfo, fetchRestaurantDetailInfo} from './restaurant-info'
import type {Language} from '../../locale/types'

export interface SearchPayload {
  locale?: Language
  row?: string
  os?: string
  serviceName?: string
  responseType?: string
  arrange?: string
  keyword: string
  contentTypeId?: string
  serviceKey?: string
}

/**
 * TODO: 식당 정보 가져오는거랑 공통부분 합치자
 */

const urlListByLocale: any = {
  ko: 'https://apis.data.go.kr/B551011/KorService1/searchKeyword1?',
  en: 'https://apis.data.go.kr/B551011/EngService1/searchKeyword1?',
  ja: 'https://apis.data.go.kr/B551011/JpnService1/searchKeyword1?',
  zh: 'https://apis.data.go.kr/B551011/ChtService1/searchKeyword1?',
}

export const fetchKeywordSearch = async (payload: SearchPayload) => {
  const {
    locale = 'ko',
    row = '5',
    os = 'ETC',
    serviceName = 'Fork',
    responseType = 'json',
    arrange = 'Q',
    keyword = '',
    contentTypeId = locale === 'ko' ? '39' : '82',
    serviceKey = import.meta.env.VITE_GG_KEY,
  } = payload

  if (!keyword) {
    return
  }

  const params = {
    numOfRows: row,
    MobileOS: os,
    MobileApp: serviceName,
    _type: responseType,
    arrange: arrange,
    keyword: keyword,
    contentTypeId,
    serviceKey,
  }

  const response = await fetch(urlListByLocale[locale] + new URLSearchParams(params), {
    method: 'GET',
  })

  /**
   * TODO: 뭔가 restaurant list 가져오는 함수랑 너무 비슷하다 고쳐보도록 하자
   */

  const data = await response.json()
  const restaurants = normalizeRestaurants(data.response.body.items.item)

  const restaurantInfoPromises = restaurants.map(async (restaurant) => {
    const commonInfo = await fetchRestaurantCommonInfo({contentId: restaurant, locale})
    const detailInfo = await fetchRestaurantDetailInfo({contentId: restaurant, locale})
    return {...commonInfo, ...detailInfo}
  })

  const results = await Promise.allSettled(restaurantInfoPromises)

  const restaurantInfos = results
    ?.filter((result): result is PromiseFulfilledResult<any> => result.status === 'fulfilled')
    ?.map((result) => result.value)

  return restaurantInfos
}
