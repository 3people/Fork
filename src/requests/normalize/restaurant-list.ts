/**
 * TODO: 이게 맞을까 생각해보기
 */
export const normalizeRestaurants = (restaurants: any[]) => {
  return restaurants?.map((restaurant: any) => restaurant.contentid) ?? []
}
