import {normalizeRestaurants} from '../normalize/restaurant-list'
import {fetchRestaurantCommonInfo, fetchRestaurantDetailInfo} from './restaurant-info'

export interface RestaurantListPayload {
  row?: string
  os?: string
  serviceName?: string
  responseType?: string
  arrange?: string
  contentTypeId?: string
  areaCode?: string
  serviceKey?: string
}

export const fetchRestaurants = async (payload: RestaurantListPayload) => {
  const {
    row = '5',
    os = 'ETC',
    serviceName = 'Fork',
    responseType = 'json',
    arrange = 'Q',
    contentTypeId = '39',
    areaCode = '1',
    serviceKey = import.meta.env.VITE_GG_KEY,
  } = payload

  const params = {
    numOfRows: row,
    MobileOS: os,
    MobileApp: serviceName,
    _type: responseType,
    arrange: arrange,
    contentTypeId,
    areaCode,
    serviceKey,
  }
  const response = await fetch(
    'https://apis.data.go.kr/B551011/KorService1/areaBasedList1?' +
      new URLSearchParams(params).toString(),
    {
      method: 'GET',
    },
  )

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
