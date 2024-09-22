import {normalizeRestaurants} from '../normalize/restaurant-list'
import {fetchRestaurantCommonInfo, fetchRestaurantDetailInfo} from './restaurant-info'

export interface SearchPayload {
  row?: string
  os?: string
  serviceName?: string
  responseType?: string
  arrange?: string
  keyword: string
  contentTypeId?: string
  serviceKey?: string
}

export const fetchKeywordSearch = async (payload: SearchPayload) => {
  const {
    row = '5',
    os = 'ETC',
    serviceName = 'Fork',
    responseType = 'json',
    arrange = 'Q',
    keyword = '',
    contentTypeId = '39',
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

  const response = await fetch(
    `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?${new URLSearchParams(params)}`,
    {
      method: 'GET',
    },
  )

  /**
   * TODO: 뭔가 restaurant list 가져오는 함수랑 너무 비슷하다 고쳐보도록 하자
   */

  const data = await response.json()
  const restaurants = normalizeRestaurants(data.response.body.items.item)
  const restaurantInfos = []

  for (const restaurant of restaurants) {
    const commonInfo = await fetchRestaurantCommonInfo({contentId: restaurant})
    const detailInfo = await fetchRestaurantDetailInfo({contentId: restaurant})
    restaurantInfos.push({...commonInfo, ...detailInfo})
  }

  return restaurantInfos
}
