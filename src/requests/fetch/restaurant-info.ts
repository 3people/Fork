import {
  normalizeRestaurantCommonInfo,
  normalizeRestaurantDetailInfo,
} from '../normalize/restaurant-info'

/**
 * TODO: 공통 타입 묶기
 */
export interface RestaurantCommonInfoPayload {
  os?: string
  serviceName?: string
  responseType?: string
  contentId: string
  contentTypeId?: string
  defaultInfo?: string
  imageInfo?: string
  addressInfo?: string
  overviewInfo?: string
  serviceKey?: string
}

export interface RestaurantDetailInfoPayload {
  os?: string
  serviceName?: string
  responseType?: string
  contentId: string
  contentTypeId?: string
  serviceKey?: string
}

export const fetchRestaurantCommonInfo = async (payload: RestaurantCommonInfoPayload) => {
  const {
    os = 'ETC',
    serviceName = 'Fork',
    responseType = 'json',
    contentId,
    contentTypeId = '39',
    defaultInfo = 'Y',
    imageInfo = 'Y',
    addressInfo = 'Y',
    overviewInfo = 'Y',
    serviceKey = import.meta.env.VITE_GG_KEY,
  } = payload

  const params = {
    MobileOS: os,
    MobileApp: serviceName,
    _type: responseType,
    contentId,
    contentTypeId,
    defaultYN: defaultInfo,
    firstImageYN: imageInfo,
    addrinfoYN: addressInfo,
    overviewYN: overviewInfo,
    serviceKey,
  }
  const response = await fetch(
    'https://apis.data.go.kr/B551011/KorService1/detailCommon1?' +
      new URLSearchParams(params).toString(),
    {
      method: 'GET',
    },
  )

  const data = await response.json()

  return normalizeRestaurantCommonInfo(data.response.body.items.item[0])
}

export const fetchRestaurantDetailInfo = async (payload: RestaurantDetailInfoPayload) => {
  const {
    os = 'ETC',
    serviceName = 'Fork',
    responseType = 'json',
    contentId,
    contentTypeId = '39',
    serviceKey = import.meta.env.VITE_GG_KEY,
  } = payload

  const params = {
    MobileOS: os,
    MobileApp: serviceName,
    _type: responseType,
    contentId,
    contentTypeId,
    serviceKey,
  }
  const response = await fetch(
    'https://apis.data.go.kr/B551011/KorService1/detailIntro1?' +
      new URLSearchParams(params).toString(),
    {
      method: 'GET',
    },
  )

  const data = await response.json()

  return normalizeRestaurantDetailInfo(data.response.body.items.item[0])
}
