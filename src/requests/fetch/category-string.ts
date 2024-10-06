interface CategoryStringPayload {
    os?: string
    serviceName?: string
    responseType?: string
    cat1?: string
    cat2?: string
    cat3?: string
    serviceKey?: string
}


export const fetchCategoryString = async (payload: CategoryStringPayload) => {
  if(!payload.cat1 && !payload.cat2 && !payload.cat3){
    return {}
  }
  const {
      os = 'ETC',
      serviceName = 'Fork',
      responseType = 'json',
      cat1 = '',
      cat2 = '',
      cat3 = '',
      serviceKey = import.meta.env.VITE_GG_KEY,
    } = payload
  
    const params = {
      MobileOS: os,
      MobileApp: serviceName,
      _type: responseType,
      cat1,
      cat2,
      cat3,
      serviceKey,
    }
    // MobileOS=WIN&MobileApp=Fork&contentTypeId=39&cat1=A05&cat2=A0502&cat3=A05020100&_type=json&serviceKey=si0if...
  const BaseURL = 'https://apis.data.go.kr/B551011/KorService1/categoryCode1?'
  const response = await fetch(
      BaseURL + new URLSearchParams(params).toString(),
      {
        method: 'GET',
      },
    )
  const data = await response.json()
  return data.response.body.items.item[0].name
}