type FoodImageListRaw = FoodImageRaw[]

interface FoodImageRaw {
  image_Address: string
}

type FoodImageList = FoodImage[]

interface FoodImage {
  image: string
}


export const normalizeFoodImageList = (
  list: FoodImageListRaw,
): FoodImageList => {
  return list.map(normalizeFoodImage)
}

const normalizeFoodImage = (item: FoodImageRaw): FoodImage => {
  return {image: item.image_Address}
}
