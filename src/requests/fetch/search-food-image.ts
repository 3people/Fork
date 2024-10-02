export interface SearchFoodImagePayload {
  pageSize?: string
  responseType?: 'xml' | 'json'
  keyword: string
  serviceKey?: string
  pageNo?: string
}

export const fetchFoodImageSearch = async (payload: SearchFoodImagePayload) => {
  const {
    pageSize='10',
    keyword,
    serviceKey=import.meta.env.VITE_GG_KEY,
    pageNo='1',
    responseType = 'json',
  } = payload

  if (!keyword) {
    return
  }

  const params = {
    Page_Size: pageSize,
    food_Name: keyword,
    serviceKey,
    Page_No: pageNo,
    service_Type: responseType,
  }

  const response = await fetch('https://apis.data.go.kr/1390802/AgriFood/FdFoodCkryImage/getKoreanFoodFdFoodCkryImageList?' + new URLSearchParams(params), {
    method: 'GET',
  })

  const data = await response.json()
  console.log(data)
  return data
}
