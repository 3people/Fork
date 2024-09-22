import {foodMock} from '../requests/mock/food-mock'

export const food539 = foodMock.filter((food) => 539 === food.id)[0]
export const food204 = foodMock.filter((food) => 204 === food.id)[0]
export const food351 = foodMock.filter((food) => 351 === food.id)[0]
export const food31 = foodMock.filter((food) => 31 === food.id)[0]

export default {
  landing: {
    start: '시작하기',
    title: '환영합니다!',
    description: '어떤 언어로 한식 여행 정보를 번역해드릴까요?',
  },
  header: {
    language: '한국어',
  },
  home: {
    popular: '지금 인기있는 맛집',
  },
  food: {
    card: {
      539: {
        top: '한국만의 <br /> 삼겹살 어때요?',
        name: food539.name,
        description: food539.description,
      },
      204: {
        top: '든든한 한끼로 <br /> 제격인 갈비탕',
        name: food204.name,
        description: food204.description,
      },
      351: {
        top: '매콤 달콤 <br /> 중독적인 닭갈비',
        name: food351.name,
        description: food351.description,
      },
      31: {
        top: '섞어먹는 즐거움 <br /> 한국의 비빔밥',
        name: food31.name,
        description: food31.description,
      },
    },
    popular: '맛집',
  },
  search: {
    placeholder: '한국 음식, 식당을 검색해 보세요.',
  },
}
