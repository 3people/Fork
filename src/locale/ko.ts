import {foodData} from '../requests/mock/food-data'

export const food539 = foodData.filter((food) => 539 === food.id)[0]
export const food204 = foodData.filter((food) => 204 === food.id)[0]
export const food351 = foodData.filter((food) => 351 === food.id)[0]
export const food31 = foodData.filter((food) => 31 === food.id)[0]

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
    popular: '맛집',
  },
  search: {
    placeholder: '한국 음식, 식당을 검색해 보세요.',
    restaurant: '식당',
    foodInfo: '음식 정보',
  },
  translate: {
    title: {
      text: '메뉴판 번역',
      description: '번역할 메뉴판 이미지를 준비해주세요.',
    },
    guide: {
      text: '이미지/촬영 가이드',
      correct: '메뉴판이 화면에 꽉 차도록 촬영해주세요.',
      wrong: '빛이 반사되지 않도록 주의하세요.',
    },
    button: '메뉴판 이미지 선택하기',
    progress: {
      header: '이미지 선택',
      button: '확인',
    },
  },
  translateProgress: {
    button: '확인',
  },
  menu: {
    text: '메뉴',
    option: '옵션',
    allergy: '알레르기 유발 성분',
  },
}
