import {food204, food31, food351, food539} from './ko'

export default {
  landing: {
    start: '开始',
    title: '歡迎！',
    description: '您想將韓國美食旅遊資訊翻譯成什麼語言？',
  },
  header: {
    title: 'fork',
    language: '繁體中文',
  },
  home: {
    popular: '現在受歡迎的餐廳',
    info: {
      2642538: {
        title: '恩&正明洞辣炒雞排(은앤정명동닭갈비)',
        openTime: '11:00~22:00',
        firstMenu: '辣炒雞排',
      },
      2653655: {
        title: '竹屋（紅酒五花肉）(대나무와인삼겹살)',
        openTime: '11:00-22:00 (最後點餐時間 20:30)',
        firstMenu: '葡萄酒醃五花肉',
      },
      2653639: {
        title: '咸草醬蟹(함초간장게장)',
        openTime: '11:30~22:00',
        firstMenu: '醬蟹',
      },
      2653722: {
        title: 'Brown Chicken (브라운치킨)',
        openTime: '13:00-05:00 (最後點餐時間 04:00)',
        firstMenu: '炸雞',
      },
      2654056: {
        title: '短爪章魚和辣燉排骨(쭈꾸미와매운갈비찜)',
        openTime:
          '平日 10:00-22:00 (休息時間 15:00-17:00 / 最後點餐時間 21:30) / 週末 10:00-21:00 (休息時間 15:00-17:00)',
        firstMenu: '燉牛排骨套餐',
      },
    },
    translate: {
      first: '選單',
      second: '翻譯',
    },
  },
  food: {
    card: {
      539: {
        top: '僅在韓國 <br /> 五花肉怎麼樣？',
        name: food539.name_zh,
        description: food539.description_zh,
      },
      204: {
        top: '排骨湯， <br /> 非常適合豐盛的一餐',
        name: food204.name_zh,
        description: food204.description_zh,
      },
      351: {
        top: '辣甜 <br /> 令人上癮的雞排',
        name: food351.name_zh,
        description: food351.description_zh,
      },
      31: {
        top: '混合的快樂 <br /> 韓式拌飯',
        name: food31.name_zh,
        description: food31.description_zh,
      },
    },
    popular: '飯館',
  },
  search: {
    placeholder: '請搜索一下韓國飲食，餐廳。',
  },
}
