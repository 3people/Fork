import type {Language} from '../../locale/types'
import { normalizeRestaurantCommonInfo, type RestaurantDetailInfo } from '../normalize/restaurant-info'

const ServicePathMap: Record<Language, string> = {
  ko: 'KorService1',
  en: 'EngService1',
  ja: 'JpnService1',
  zh: 'ChsService1',
}

interface FetchRestaurantDetailParams {
    contentId: string
    locale: Language
}

/*
 * @description new fetchRestaurantDetailInfo
 */
export const fetchRestaurantCommon = async ({contentId, locale}: FetchRestaurantDetailParams): Promise<RestaurantDetailInfo> => {
  const params = {
    MobileOS: 'ETC',
    MobileApp: 'Fork',
    _type: 'json',
    contentId,
    contentTypeId: locale === 'ko' ? '39' : '82',
    defaultYN: 'Y',
    firstImageYN: 'Y',
    addrinfoYN: 'Y',
    overviewYN: 'Y',
    mapinfoYN: 'Y',
    catcodeYN: 'Y',
    serviceKey: import.meta.env.VITE_GG_KEY,
  }

  const requestURL = `https://apis.data.go.kr/B551011/${ServicePathMap[locale]}/detailCommon1`
  const searchParams = new URLSearchParams(params).toString()

  const response = await fetch(
    `${requestURL}?${searchParams}`,
    {
        method: 'GET',
    },
  )

  const data = await response.json()
  return normalizeRestaurantCommonInfo(data.response.body.items.item[0])
}