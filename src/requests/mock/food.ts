import Sample1 from '../../assets/images/card-sample-image-1.png'
import Sample2 from '../../assets/images/card-sample-image-2.png'
import Sample3 from '../../assets/images/card-sample-image-3.png'
import Sample4 from '../../assets/images/card-sample-image-4.png'
import {food204, food31, food351, food539} from '../../locale/ko'

export interface Food {
  id?: string
  category?: string
  pronounce?: string
  image?: string
}

export const foods: Food[] = [
  {
    id: '539',
    category: food539.category,
    pronounce: food539.pronounce,
    image: Sample1,
  },
  {
    id: '204',
    category: food204.category,
    pronounce: food204.pronounce,
    image: Sample2,
  },
  {
    id: '351',
    category: food351.category,
    pronounce: food351.pronounce,
    image: Sample3,
  },
  {
    id: '31',
    category: food31.category,
    pronounce: food31.pronounce,
    image: Sample4,
  },
]
