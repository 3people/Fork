import {
  normalizeRestaurantCommonInfo,
  normalizeRestaurantDetailInfo,
} from '../normalize/restaurant-info'
import type {Language} from '../../locale/types'

/**
 * TODO: 공통 타입 묶기
 */
export interface RestaurantCommonInfoPayload {
  locale?: Language
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
  locale?: Language
  os?: string
  serviceName?: string
  responseType?: string
  contentId: string
  contentTypeId?: string
  serviceKey?: string
}

const urlListByLocale: any = {
  ko: {
    common: 'https://apis.data.go.kr/B551011/KorService1/detailCommon1?',
    detail: 'https://apis.data.go.kr/B551011/KorService1/detailIntro1?',
  },
  en: {
    common: 'https://apis.data.go.kr/B551011/EngService1/detailCommon1?',
    detail: 'https://apis.data.go.kr/B551011/EngService1/detailIntro1?',
  },
  ja: {
    common: 'https://apis.data.go.kr/B551011/JpnService1/detailCommon1?',
    detail: 'https://apis.data.go.kr/B551011/JpnService1/detailIntro1?',
  },
  zh: {
    common: 'https://apis.data.go.kr/B551011/ChsService1/detailCommon1?',
    detail: 'https://apis.data.go.kr/B551011/ChsService1/detailIntro1?',
  },
}

export const fetchRestaurantCommonInfo = async (payload: RestaurantCommonInfoPayload) => {
  const {
    locale = 'ko',
    os = 'ETC',
    serviceName = 'Fork',
    responseType = 'json',
    contentId,
    contentTypeId = locale === 'ko' ? '39' : '82',
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
    urlListByLocale[locale].common + new URLSearchParams(params).toString(),
    {
      method: 'GET',
    },
  )

  const data = await response.json()

  return normalizeRestaurantCommonInfo(data.response.body.items.item[0])
}

export const fetchRestaurantDetailInfo = async (payload: RestaurantDetailInfoPayload) => {
  const {
    locale = 'ko',
    os = 'ETC',
    serviceName = 'Fork',
    responseType = 'json',
    contentId,
    contentTypeId = locale === 'ko' ? '39' : '82',
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
    urlListByLocale[locale].detail + new URLSearchParams(params).toString(),
    {
      method: 'GET',
    },
  )

  const data = await response.json()

  return normalizeRestaurantDetailInfo(data.response.body.items.item[0])
}
