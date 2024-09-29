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
    title: '포크',
    language: '한국어',
  },
  home: {
    popular: '지금 인기있는 맛집',
    info: {
      2642538: {
        title: '은앤정명동닭갈비',
        openTime: '11:00-22:30',
        firstMenu: '치즈닭갈비',
      },
      2653655: {
        title: '대나무와인삼겹살',
        openTime: '11:00-22:00(라스트오더 20:30)',
        firstMenu: '와인삼겹살',
      },
      2653639: {
        title: '함초간장게장',
        openTime: '11:30-23:00(라스트오더 22:15)',
        firstMenu: '전복장',
      },
      2653722: {
        title: '브라운치킨',
        openTime: '13:00-05:00(라스트오더 04:00)',
        firstMenu: '후라이드치킨',
      },
      2654056: {
        title: '쭈꾸미와매운갈비찜',
        openTime:
          '평일 10:00-22:00(브레이크타임 15:00-17:00 / 라스트오더 21:30)/ 주말 10:00-21:00(브레이크타임 15:00-17:00)',
        firstMenu: '갈비찜정식',
      },
    },
    translate: {
      first: '메뉴판',
      second: '번역',
    },
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
