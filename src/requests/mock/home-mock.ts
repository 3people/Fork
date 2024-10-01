import Sample1 from '../../assets/images/card-sample-image-1.png'
import Sample2 from '../../assets/images/card-sample-image-2.png'
import Sample3 from '../../assets/images/card-sample-image-3.png'
import Sample4 from '../../assets/images/card-sample-image-4.png'
import type { Language } from '../../locale/types'

export interface Food {
  id?: string
  title?: string
  image?: string
}

const foodTitle: Record<string, Record<Language, string>> = {
  539: {
    ko: '한국만의 <br /> 삼겹살 어때요?',
    en: 'How about Korea’s <br /> signature pork belly?',
    ja: '韓国だけ  サムギョプサルは <br /> どうですか？',
    zh: '僅在韓國 <br /> 五花肉怎麼樣？',
  },
  204: {
    ko: '든든한 한끼로 <br /> 제격인 갈비탕',
    en: 'Galbitang, <br /> perfect hearty meal',
    ja: '心強い一人で <br /> 定格のカルビタン',
    zh: '排骨湯， <br /> 非常適合豐盛的一餐',
  },
  351: {
    ko: '매콤 달콤 <br /> 중독적인 닭갈비',
    en: 'Spicy Sweet <br /> Addictive Dakgalbi',
    ja: '甘酸っぱい <br /> 中毒的なチキンリブ',
    zh: '辣甜 <br /> 令人上癮的雞排',
  },
  31: {
    ko: '섞어먹는 즐거움 <br /> 한국의 비빔밥',
    en: 'The joy of mixing <br /> Korean Bibimbap',
    ja: '混ぜて食べる楽しさ <br /> 韓国のビビンバ',
    zh: '混合的快樂 <br /> 韓式拌飯',
  }
}

export const getHomeFoodMock = (language: Language): Food[] => {
  return [
    {
      id: '539',
      title: foodTitle[539][language],
      image: Sample1,
    },
    {
      id: '204',
      title: foodTitle[204][language],
      image: Sample2,
    },
    {
      id: '351',
      title: foodTitle[351][language],
      image: Sample3,
    },
    {
      id: '31',
      title: foodTitle[31][language],
      image: Sample4,
    },
  ]
  
} 