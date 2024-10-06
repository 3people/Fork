import type {Language} from '../../locale/types'
import type { RestaurantCommonInfo, RestaurantDetailInfo } from '../normalize/restaurant-info'
import { fetchRestaurantCommon } from './restaurant-common'
import { fetchRestaurantDetail } from './restaurant-detail'


interface FetchRestaurantPayload {
  locale: Language
  contentId: string
}

interface Restaurant extends RestaurantDetailInfo, RestaurantCommonInfo {}

/*
 * @description new fetchRestaurantInfo
 * common API와 detail API를 통합하여 호출
 */
export const fetchRestaurant = async (payload: FetchRestaurantPayload): Promise<Restaurant> => {
  const data = {}

  const commonData = await fetchRestaurantCommon(payload)
  const detailData = await fetchRestaurantDetail(payload)

  Object.assign(data, commonData)
  Object.assign(data, detailData)

  return data
}