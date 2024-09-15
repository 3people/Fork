import Sample1 from '../../assets/images/card-sample-image-1.png'
import Sample2 from '../../assets/images/card-sample-image-2.png'
import Sample3 from '../../assets/images/card-sample-image-3.png'
import Sample4 from '../../assets/images/card-sample-image-4.png'

export interface Food {
  id?: string
  title?: string
  name?: string
  description?: string
  image?: string
}

export const foods: Food[] = [
  {
    id: '0',
    title: '한국만의 <br /> 삼겹살 어때요?',
    name: '삼겹살',
    description:
      '삼겹살은 돼지고기의 한 부위로, 살코기와 비계층이 3번 겹쳐져 있다고 해서 삼겹살이라는 이름이 붙여졌다... 더보기',
    image: Sample1,
  },
  {
    id: '1',
    title: '든든한 한끼로 <br /> 제격인 갈비탕',
    name: '갈비탕',
    description:
      '대한민국의 국물 요리이자 소갈비로 만든 육탕 음식. 갈비에 고기 국물을 내어서 만든 음식으로 돼지갈비보다는... 더보기',
    image: Sample2,
  },
  {
    id: '2',
    title: '매콤 달콤 <br /> 중독적인 닭갈비',
    name: '닭갈비',
    description:
      '닭고기를 고추장 양념장에 재웠다가 뜨겁게 달군 팬에 기름을 두르고 양배추, 고구마, 당근, 떡과 함께 볶아 먹는 강원도... 더보기',
    image: Sample3,
  },
  {
    id: '3',
    title: '섞어먹는 즐거움 <br /> 한국의 비빔밥',
    name: '비빔밥',
    description:
      '쌀밥에 고기볶음, 갖은 나물과 고명을 올리고 고추장에 비벼 먹는 음식이다. 참기름을 첨가하면 더욱 맛있다.... 더보기',
    image: Sample4,
  },
]
