export interface FoodItem {
  id: number
  category: string
  name: string
  pronounce: string
  description: string
  name_en: string
  description_en: string
  name_ja: string
  description_ja: string
  name_zh: string
  description_zh: string
  name_zh2: string
  description_zh2: string
}

export const foodData: FoodItem[] = [
  {
    id: 1,
    category: '상차림 [Sangcharim]',
    name: '간장게장정식',
    pronounce: 'Ganjanggejangjeongsik',
    description:
      '간장게장과 밥, 각종 반찬이 함께 차려지는 상차림이다. 간장게장은 파, 마늘 등의 재료를 넣고 끓인 양념간장에 싱싱한 게를 담가 숙성시켜 만든다.',
    name_en: 'Soy Sauce Marinated Crab Served with Rice and Side Dishes',
    description_en:
      'This course meal consists of crab marinated in soy sauce, rice, and different side dishes. The crab marinated in soy sauce is made by fermenting fresh crabs in a boiled brine of soy sauce, green onion, and garlic.',
    name_ja: 'カンジャンケジャン定食',
    description_ja:
      'カンジャンケジャンとご飯、各種おかずが並ぶ膳。カンジャンケジャンは、ねぎ、にんにくなどを入れて煮込んだ醤油だれに、新鮮なカニを漬けて熟成させたもの。',
    name_zh: '酱生蟹套餐',
    description_zh:
      '由酱生蟹、米饭和各种小菜组成的套餐。在用葱、蒜等食材煮沸的调味酱油中放入新鲜的螃蟹腌制成酱生蟹。',
    name_zh2: '醬蟹套餐',
    description_zh2:
      '由醬蟹、米飯和各種小菜組成的套餐。醬蟹是在加入蔥、大蒜等材料煮沸的調味醬油中放入新鮮螃蟹，醃製而成。',
  },
  {
    id: 2,
    category: '상차림 [Sangcharim]',
    name: '백반',
    pronounce: 'Baekban',
    description:
      '밥, 국, 무침, 구이, 김치 등 집에서 먹을 법한 요리로 채운 한 상으로 가정식 백반이라고 부르기도 한다.',
    name_en: 'Combination Meals',
    description_en:
      'This is a meal of rice and soup served with various side dishes that are commonly eaten at home, such as vegetable salads, grilled fish, and kimchi. It is considered to be a typical Korean home-style meal.',
    name_ja: '定食',
    description_ja: 'ご飯、スープ、和え物、焼き物、キムチなどの家庭料理が並ぶ膳。',
    name_zh: '家常套餐',
    description_zh: '由米饭、汤、凉拌菜、烧烤类、辛奇等一般家常菜组成的套餐，又叫做家常菜套餐。',
    name_zh2: '家常套餐',
    description_zh2: '由白米飯、湯、涼拌菜、燒烤、辛奇等一般家常菜組成，又被稱為家常白飯套餐。',
  },
  {
    id: 3,
    category: '상차림 [Sangcharim]',
    name: '보리밥정식',
    pronounce: 'Boribapjeongsik',
    description:
      '쌀과 보리를 섞거나 보리로만 지은 밥에 다양한 반찬을 곁들인 한식 상차림이다. 보리밥에 각종 나물, 고추장, 참기름을 넣고 비벼 먹기도 한다.',
    name_en: 'Barley Rice Served with Side Dishes',
    description_en:
      'This course meal consists of a bowl of barley and rice or barley alone and different side dishes. The barley rice can be mixed with vegetables, gochujang (red chili paste), and sesame oil.',
    name_ja: '麦ご飯定食',
    description_ja:
      '米と麦を混ぜたご飯や麦だけで炊いたご飯に、色々なおかずを添えた膳。麦ご飯にナムル、コチュジャン、ごま油を混ぜて食べる場合もある。',
    name_zh: '大麦饭套餐',
    description_zh:
      '大米里掺大麦或仅用大麦焖制的饭，再搭配各种小菜组成的套餐。也可根据个人喜好，在大麦饭中加入各种野菜、辣椒酱、香油拌着吃。',
    name_zh2: '大麥飯套餐',
    description_zh2:
      '在米裡摻入大麥或光用大麥做的飯和各種小菜組成的套餐。也會根據個人喜好，在大麥飯中放入各種涼拌蔬菜、辣椒醬、香油拌食。',
  },
  {
    id: 4,
    category: '상차림 [Sangcharim]',
    name: '산채 정식',
    pronounce: 'Sanchaejeongsik',
    description:
      '산에서 나는 고사리, 취나물, 버섯, 더덕, 두릅 등 갖은 채로로 차린 백반 한 상을 말한다. 자극적이지 않고 간이 세지 않아 산나물 고유의 향과 맛을 느낄 수 있는 별미음식이다.',
    name_en: 'Wild Vegetable Dish Combo',
    description_en:
      'This course meal consists of rice and soup with vegetable side dishes, such as seasoned bracken, aster, mushroom, bonnet bellflower root, and fatsia shoot. These mild-tasting wild vegetables have distinctive flavors and fragrances.',
    name_ja: '山菜定食',
    description_ja:
      '山で採れるワラビ、シラヤマギク、きのこ、蔓人参、タラの芽などの野菜が使われた定食。刺激が少なく、薄味で山菜ならではの固有の香りと味を楽しむことができる。',
    name_zh: '山菜套餐',
    description_zh:
      '用蕨菜、马蹄菜、蘑菇、沙参、刺老芽等各种山野菜烹制的一桌家常套餐，味道清淡不刺激，咸淡适中，可品尝到山野菜特有的自然清香和味道。',
    name_zh2: '山菜套餐',
    description_zh2:
      '是用山裡生長的蕨菜、馬蹄葉、蘑菇、沙參、刺老芽等各種野菜準備的白飯擺席。山菜套餐沒有刺激性食材，口味清淡，且保留了山野菜固有的香氣與滋味，是非常美味的特色套餐。',
  },
  {
    id: 5,
    category: '상차림 [Sangcharim]',
    name: '쌈밥 정식',
    pronounce: 'Ssambapjeongsik',
    description:
      '밥, 생선, 제육볶음, 김치, 나물, 장아찌, 젓갈 등의 밥상에 쌈장과 상추, 배추 등의 각종 쌈 채소가 같이 차려지는 우리나라 전통 밥상 차림이다.',
    name_en: 'Leaf Wraps and Rice Combo',
    description_en:
      'Traditional Korean course meal consisting of rice, fish, stir-fried pork, kimchi, green salad, pickled vegetables, and salted seafood with various leafy vegetables such as Korean cabbage leaves and lettuce with ssamjang (spicy dipping sauce), which is made by mixing gochujang (red chili paste), doenjang (soybean paste), and other seasonings.',
    name_ja: '野菜包みご飯定食',
    description_ja:
      'ご飯、魚、コチュジャンで味付けした豚肉炒め、キムチ、ナムル、漬物、塩辛などに、包み野菜としてサムジャンとサンチュ、白菜などを添えた韓国伝統の膳。',
    name_zh: '蔬菜包饭套餐',
    description_zh:
      '由米饭和辣炒猪肉、辛奇、凉拌菜、酱菜、鱼酱等菜品，搭配包饭酱和生菜、白菜等各种包饭用蔬菜的韩国传统套餐。',
    name_zh2: '蔬菜包飯套餐',
    description_zh2:
      '將米飯、魚肉、炒豬肉、辛奇、熟菜、醬菜、海鮮醬，以及包飯醬和生菜、白菜等各種蔬菜一起端上桌的韓國傳統擺席。',
  },
  {
    id: 6,
    category: '상차림 [Sangcharim]',
    name: '한정식',
    pronounce: 'Hanjeongsik',
    description:
      '한정식 한국의 전통 반상차림을 서양의 정찬처럼 순서대로 격식을 갖춰 차려내는 현대적인 상차림이다. 전통적인 한식 식단을 바탕으로 전식, 곡물 위주의 주식과 다양한 부식 및 후식으로 구성되어 있다.',
    name_en: "Korean Table d'hote",
    description_en:
      'The traditional Hanjeongsik is a set meal with an array of side dishes served with rice and soup. For a more modern dining experience, the meal is served in courses, including appetizers, rice as the main dish, various side dishes, and dessert.',
    name_ja: '韓定食',
    description_ja:
      '韓国の伝統的な膳は、格式を重んじて順に出される。韓国固有の献立を基本として、前菜、穀物を中心とした主食と副食、デザートで構成されている。',
    name_zh: '韩定食 (韩式套餐)',
    description_zh:
      '韩定食是将韩国的传统饮食像西式大餐一样按顺序依次上席的现代式套餐，以韩国传统菜肴为基础，由前菜，谷物为主的主食和副食以及餐后甜点组成。',
    name_zh2: '韓定食',
    description_zh2:
      '韓定食跟西方的正餐是一個概念，就是按照先後順序與既定規格擺的席。韓定食以傳統韓餐為基礎，由前餐，以穀物為主的主食，以及豐富多洋的副食與甜點所構成。',
  },
  {
    id: 7,
    category: '밥 [Bap]',
    name: '곤드레나물밥',
    pronounce: 'Gondeurenamulbap',
    description:
      '곤드레는 높은 산 속에 자생하는 채소로 말린 것을 불려서 사용하며 맛이 부드럽고 향이 독특하다. 쌀 위에 곤드레나물을 얹고 들기름을 넣어 밥을 한 뒤 양념장을 곁들여 먹는다.',
    name_en: 'Thistle Rice',
    description_en:
      'Made with dried gondeure (thistle), a fragrant, wild mountain plant, which is soaked in water and squeezed, this dish is served with rice cooked with a little perilla oil and topped with seasoned thistle, along with some sauce.',
    name_ja: 'コンドゥレナムルご飯',
    description_ja:
      '「コンドゥレ」は、高い山の中に自生する野菜で、乾燥させてふやかしたものを使う。風味がまろやかで、香りが独特だ。米の上にコンドゥレナムルをのせ、エゴマ油を入れて炊き、ヤンニョムジャン(たれ)をかけて食べる。',
    name_zh: '山蓟菜饭',
    description_zh:
      '山蓟是生长在高山上的一种野菜,不仅口感细嫩，而且有着独特的香气。焖饭时将晾干的山蓟菜用水泡发后放在大米上面，再放一些白苏油，米饭焖好出锅后，配着调味酱吃即可。',
    name_zh2: '山薊菜飯',
    description_zh2:
      '把山薊菜放在大米上面煮成飯後，配調味醬吃的山菜飯。山薊菜生長在山或田野，將晾乾的山薊菜用水泡發後使用, 它的特點在於柔和的口感和獨特的香氣。',
  },
  {
    id: 8,
    category: '밥 [Bap]',
    name: '굴국밥',
    pronounce: 'Gulgukbap',
    description:
      '제철에 나는 싱싱한 굴을 주재료로 무, 두부, 양파, 멸치, 버섯 등을 넣어 끓인 국에 밥을 말아 먹는 국밥 요리다. 미역과 부추를 넣으면 굴 특유의 비린내를 없앨 수 있다.',
    name_en: 'Oyster and Rice Soup',
    description_en:
      'This is rice in an oyster soup made by boiling fresh oysters with radish, bean curd, onion, anchovy, and mushroom. Add brown seaweed and chive to the soup to remove the fishy smell oysters are known for.',
    name_ja: 'カキクッパ',
    description_ja:
      '旬の新鮮なカキを主な食材とし、大根、豆腐、たまねぎ、煮干し、きのこなどを入れたスープにご飯を入れて食べる。わかめとにらを入れると、カキ特有の臭みを消すことができる。',
    name_zh: '牡蛎汤饭',
    description_zh:
      '以当季的新鲜牡蛎为主要材料，加入萝卜、豆腐、洋葱、鳀鱼、蘑菇等材料熬制成汤，再将米饭泡入汤中，是一种汤泡饭。加入海带和韭菜一起熬煮，可去掉牡蛎特有的腥味。',
    name_zh2: '牡蠣湯飯',
    description_zh2:
      '牡蠣湯飯以牡蠣為主要食材，再放入蘿蔔、豆腐、洋蔥、鯷魚、蘑菇等煮成湯，煮好後用湯泡飯吃即可。放入海帶與韭菜，就能清除牡蠣特有的腥味。',
  },
  {
    id: 9,
    category: '밥 [Bap]',
    name: '굴밥',
    pronounce: 'Gulbap',
    description:
      '불린 쌀로 밥을 짓다가 뜸 들일 때 굴을 넣어 지은 밥으로, 양념간장과 함께 비벼 먹는다. 굴이 많이 생산되는 겨울철 별미로 무기질과 비타민 A가 풍부하여 영양적으로 우수하다.',
    name_en: 'Oyster Rice',
    description_en:
      'Short grain rice presoaked and cooked. Oysters are added after the heat is turned off, allowing them to cook with the rice in the residual heat. This dish is a winter delicacy, as oysters are in their prime in winter and rich in minerals and vitamin A.',
    name_ja: 'カキご飯',
    description_ja:
      '米を炊き、蒸す際にカキを入れて炊き上げたご飯。醤油ベースのたれを合わせて混ぜて食べる。カキが旬の冬ならではの食べ物。ミネラルとビタミンAが豊富で、栄養面でも優れている。',
    name_zh: '牡蛎饭',
    description_zh:
      '用浸泡过的大米煮饭，在最后焖的阶段放入牡蛎即可。吃的时候用调味酱油拌着吃。冬天正是牡蛎最肥美的季节，牡蛎饭可以说是冬季的一道风味美食，富含矿物质和维生素A，营养非常丰富。',
    name_zh2: '牡蠣飯',
    description_zh2:
      '做牡蠣飯時大米要提前泡好，燜飯的時候放牡蠣，吃的時候用調味醬油拌著吃。牡蠣飯是牡蠣盛產季節冬季的美味，富含礦物質與維生素A，是營養豐富的滋補美食。',
  },
  {
    id: 10,
    category: '밥 [Bap]',
    name: '김밥',
    pronounce: 'Gimbap',
    description:
      '흰밥을 소금과 참기름으로 밑간한 뒤 살짝 구운 김 위에 얇게 펼쳐 놓고 시금치, 당근, 단무지, 고기볶음 등을 넣어 둘둘 말아 알맞은 크기로 썰어 먹는 음식이다.',
    name_en: 'Gimbap',
    description_en:
      'Rice seasoned with salt and sesame oil and rolled up in a sheet of roasted gim (dried laver) with spinach, carrots, and pickled white radish. The long roll is sliced and served in bite-sized pieces .',
    name_ja: 'キンパプ',
    description_ja:
      '塩とごま油で下味をつけたご飯を、さっとあぶった海苔の上に薄くのばし、ほうれん草、にんじん、たくあんなどをのせて巻いたものを一口大に切って食べる。',
    name_zh: '紫菜卷饭',
    description_zh:
      '米饭用食盐和麻油调味后薄薄铺 在烤熟的海苔上，将菠菜、胡萝卜条、黄萝 卜条、炒肉丝等放中间后卷成圆筒状，切成 适当大小即可。',
    name_zh2: '紫菜捲飯',
    description_zh2:
      '白米飯用食鹽和麻油調味後薄薄地鋪在烤熟的海苔上，放上多種蔬菜和肉類等後卷成圓筒狀，並切成適當大小後食用。做法簡單，適合當郊遊、旅行時的餐盒。',
  },
  {
    id: 11,
    category: '밥 [Bap]',
    name: '김치김밥',
    pronounce: 'Kimchigimbap',
    description:
      '흰밥을 소금과 참기름으로 간을 한 후, 김 위에 얇게 펴고, 단무지, 시금치나물, 달걀지단, 볶은 당근, 햄 등의 기본재료와 잘게 썬 김치를 넣어 같이 말아 한입 크기로 썰어 먹는 음식이다.',
    name_en: 'Kimchi Gimbap',
    description_en:
      'Cooked short grain rice seasoned with salt and sesame oil, spread thinly over a sheet of seaweed, and rolled with a filling of various basic ingredients, such as danmuji (yellow pickled radish), parboiled and seasoned spinach, pan-fried and beaten julienned egg and carrot, and ham strips, with or without chopped kimchi. The gimbap roll is cut into bite-sized pieces before served.',
    name_ja: 'キムチキンパプ',
    description_ja:
      'のりの上に塩とごま油で下味をつけたご飯を薄く広げ、たくあん、ほうれん草のナムル、細く切った卵焼き、炒めたにんじん、ハムなどの基本的な食材と細切りにしたキムチをのせて巻いたものを一口大に切って食べる。',
    name_zh: '辛奇紫菜卷饭',
    description_zh:
      '白米饭用食盐和香油调味后，薄薄地铺在紫菜上，然后加入腌萝卜、焯熟的菠菜、切成条的鸡蛋丝、炒胡萝卜丝、火腿等基本食材，再放入切碎的辛奇，卷成紫菜卷饭，切成一口大小吃即可。',
    name_zh2: '辛奇紫菜捲飯',
    description_zh2:
      '白米飯用食鹽和香油調味，並薄薄地鋪在紫菜上，然後加入醃蘿蔔、菠菜、蛋絲、炒胡蘿蔔、火腿等基本食材，再放入切碎的辛奇，卷成紫菜卷飯，切成一口大小吃即可。',
  },
  {
    id: 12,
    category: '밥 [Bap]',
    name: '김치볶음밥',
    pronounce: 'Kimchibokkeumbap',
    description:
      '김치를 잘게 썰어 밥과 함께 프라이팬에 올린 뒤 볶은 음식이다. 식성에 따라 소고기나 돼지고기, 채소 등을 함께 넣고 볶아 먹는다.',
    name_en: 'Kimchi Fried Rice',
    description_en:
      'Rice fried with finelychopped kimchi. Beef, pork, onions, green onions, and other vegetables may be added according to taste.',
    name_ja: 'キムチチャーハン',
    description_ja:
      'ご飯と細かく刻んだキムチをフライパンに入れて弱火で炒める。好みに合わせて牛肉や豚肉、野菜などを加える。',
    name_zh: '辛奇炒饭',
    description_zh:
      '将辛奇切碎并和米饭一起放在炒锅中用小火炒制而成，也可根据个人喜好加入牛肉或猪肉、蔬菜等其它材料。',
    name_zh2: '辛奇炒飯',
    description_zh2:
      '將辛奇切碎並和軟硬適中的米飯一起放入平底鍋裡炒製而成，可謂是簡單的特色飲食。還可按個人喜好加入牛肉或豬肉、各式各樣的蔬菜與雞蛋等。',
  },
  {
    id: 13,
    category: '밥 [Bap]',
    name: '깍두기볶음밥',
    pronounce: 'Kkakdugibokkeumbap',
    description:
      '잘게 썬 깍두기를 밥과 함께 섞어 기름에 볶아 만든다. 깍두기 국물과 설탕, 간장, 고추장 등으로 간을 맞춘다. 잘게 썬 고기, 햄, 소시지 등을 볶아 섞기도 한다.',
    name_en: 'Diced Radish Kimchi Fried Rice',
    description_en:
      'fried rice with kkakdugi (cubed radish kimchi). It is seasoned with kkakdugi liquid, sugar, soy sauce, and gochujang (red chili paste). Chopped meat, ham, or sausage may also be added.',
    name_ja: 'カクトゥギチャーハン',
    description_ja:
      '細かく刻んだカクトゥギとご飯を油で炒めたもの。カクトゥギの汁や砂糖、醤油、コチュジャンなどで味を付ける。小さく切った肉やハム、ソーセージなどを混ぜて炒めることもある。',
    name_zh: '萝卜块辛奇炒饭',
    description_zh:
      '将萝卜块辛奇切碎和米饭一起用油翻炒而成。用萝卜块辛奇的汤汁、白糖、酱油、辣椒酱等调味。也可以放入切碎的肉、火腿、香肠等食材一起翻炒。',
    name_zh2: '蘿蔔塊辛奇炒飯',
    description_zh2:
      '將蘿蔔塊辛奇切碎，和米飯一起用油翻炒。用蘿蔔塊辛奇的湯汁、糖、醬油、辣椒醬等調味。也可以放入切碎的肉、火腿、香腸等材料一起炒。',
  },
  {
    id: 14,
    category: '밥 [Bap]',
    name: '꼬마김밥',
    pronounce: 'Kkomagimbap',
    description:
      '작은 크기로 자른 김 위에 밥을 펴 놓고 단무지, 햄, 시금치, 당근 등을 넣어 둘둘 말아 먹는 음식이다. 일반 김밥보다 작아 한입에 먹기 좋다.',
    name_en: 'Mini Gimbap',
    description_en:
      'This dish is made by cutting a sheet of seaweed into smaller pieces, spreading cooked rice thinly on the pieces, and then rolling it with a filling of various ingredients, such as danmuji (yellow pickled radish), ham strips, spinach, and carrot. It is smaller than usual-sized gimbap, being bite-sized, and easier to eat.',
    name_ja: 'ミニキンパプ',
    description_ja:
      '一口大に切った海苔の上にご飯を薄くのばし、たくあん、ハム、ほうれん草、にんじんなどをのせて巻いたもの。一般的なキンパプより小さくて一口で食べられる。',
    name_zh: '迷你紫菜包饭',
    description_zh:
      '把米饭薄薄铺在切成小块的紫菜上，再放入黄萝卜条、火腿、菠菜、胡萝卜条等食材一起卷成圆筒状。比一般的紫菜包饭要小，适合一口吃下很方便。',
    name_zh2: '迷你海苔飯捲',
    description_zh2:
      '把米飯鋪在切成小塊的海苔上，和醃蘿蔔、火腿、菠菜、胡蘿蔔等材料一起卷成圓筒狀。比一般的海苔飯捲小，適合一口食用。',
  },
  {
    id: 15,
    category: '밥 [Bap]',
    name: '꼬막비빔밥',
    pronounce: 'Kkomakbibimbap',
    description:
      '손질한 꼬막과 고소하게 만든 간장 양념을 밥에 섞어 깻잎 등의 향신채소와 섞어 비벼 먹는 밥이다. 청양고추를 넣고 매콤하게 먹으면 더욱 맛있다.',
    name_en: 'Cockle Bibimbap',
    description_en:
      'This dish consists of cooked rice mixed with cleaned and cooked cockles, a savory sauce made with soy sauce, and condiment vegetables, such as perilla leaves. Cheongyang chili peppers may be added to make the dish spicy and give it a flavor boost.',
    name_ja: 'ハイガイビビンバ',
    description_ja:
      '下処理したハイガイと風味豊かな醤油ベースのたれをご飯に加え、エゴマの葉などの野菜と混ぜ合わせて食べる料理。激辛唐辛子を加えて辛くして食べるのも美味しい｡',
    name_zh: '泥蚶拌饭',
    description_zh:
      '将收拾洗净的泥蚶和苏子叶等香辛蔬菜放入米饭，与醇香调味酱油搅拌即可。放入青阳辣椒辣增添辣味会更美味。',
    name_zh2: '泥蚶拌飯',
    description_zh2:
      '將收拾洗淨的泥蚶和與鮮香的調味醬油混合在米飯中，再加入紫蘇葉等香辛蔬菜拌勻即可。放入青陽辣椒提升辣味會更好吃。',
  },
  {
    id: 16,
    category: '밥 [Bap]',
    name: '낙지덮밥',
    pronounce: 'Nakjideopbap',
    description:
      '팬에 기름을 두른 후 양파, 당근 등을 넣고 센 불에서 양념장과 함께 볶는다. 채소가 반쯤 익을 무렵 적당한 크기로 썬 낙지를 넣어 볶아 낸 다음 밥 위에 얹는다.',
    name_en: 'Stir-fried Octopus with Rice',
    description_en:
      'This dish is made by stir-frying sliced onion and carrots along with sauce over high heat in an oiled pan. Bite-sized pieces of octopus are then added to the half-cooked vegetables. It is served with cooked rice.',
    name_ja: 'テナガダコ丼',
    description_ja:
      'フライパンに油をひき、たまねぎや人参などを入れ、強火でヤンニョムジャン(たれ)と一緒に炒める。野菜に半分くらい火が通ったら、適当な大きさに切ったテナガダコを入れて炒め、それをご飯の上にのせて食べる。',
    name_zh: '章鱼盖饭',
    description_zh:
      '平底锅中倒入适量的油烧热，将洋葱、胡萝卜等蔬菜及调味酱放入锅内，大火翻炒至半熟后，倒入切成适当大小的章鱼继续翻炒，炒熟后放在米饭上面。',
    name_zh2: '章魚蓋飯',
    description_zh2: '在熱鍋裡放入章魚和各種蔬菜後，用辣味調味醬拌炒後，鋪在米飯上吃。',
  },
  {
    id: 17,
    category: '밥 [Bap]',
    name: '누룽지',
    pronounce: 'Nurungji',
    description:
      '밥을 다 짓고 난 후 뜸을 조금 오래 들이면 솥 밑바닥에 밥이 눌어붙게 되는데 이것을 누룽지라 한다. 맛이 고소해 간식으로 먹기도 하고, 물을 붓고 끓여 숭늉으로 먹기도 한다.',
    name_en: 'Scorched Rice',
    description_en:
      'The thin crust of overcooked rice left at the bottom of a heated rice pot. Its savory taste makes it ideal for a crispy snack or making rice tea(sungnyung).',
    name_ja: 'おこげ湯',
    description_ja:
      'ご飯を炊いたあと、蒸らし時間を長くすると、釜の底におこげができる。香ばしい風味のおやつとして食べたり、水を入れて煮てスンニュンにして食べたりする。',
    name_zh: '锅巴粥',
    description_zh:
      '米饭蒸熟后多焖一会儿，锅底就会有一层紧贴着锅底的焦黄锅巴。锅巴的味道焦脆香酥，不仅可以当零食，而且还可以倒入清水加热做成锅巴汤。',
    name_zh2: '鍋巴粥',
    description_zh2:
      '用鍋煮飯時多燜一會兒，鍋底就會有一層緊貼在鍋底的焦黃「鍋巴」。不僅可以當零食，而且還可以倒入清水加熱做成鍋巴湯。',
  },
  {
    id: 18,
    category: '밥 [Bap]',
    name: '달걀볶음밥',
    pronounce: 'Dalgyalbokkeumbap',
    description:
      '쌀밥에 달걀을 풀어 넣고 기름에 볶아 만든 밥이다. 간장이나 소금으로 간을 맞추거나 후추와 참기름을 살짝 뿌려 먹기도 한다. 고소한 맛에 어린아이가 좋아한다.',
    name_en: 'Egg Fried Rice',
    description_en:
      'Fried rice with a beaten egg. It can be seasoned with soy sauce or salt, or sprinkled lightly with pepper and sesame oil. Children love the savory flavor.',
    name_ja: '卵チャーハン',
    description_ja:
      'ご飯に溶き卵を混ぜて油で炒めたもの。醤油や塩で味を調えたり、こしょうとごま油をさっとかけて食べたりもする。香ばしい味で子どもが大好きな食べ物。',
    name_zh: '蛋炒饭',
    description_zh:
      '将鸡蛋打入米饭中，用油翻炒而成。再加酱油或盐调味，也可根据个人喜好撒上少许的胡椒和香油。味道香醇，小朋友们很喜欢。',
    name_zh2: '蛋炒飯',
    description_zh2:
      '將雞蛋打入米飯中，用油邊攪邊炒而成。用醬油或鹽調味，也可根據個人喜好撒少許胡椒和香油。味道鮮香，很受兒童喜愛。',
  },
  {
    id: 19,
    category: '밥 [Bap]',
    name: '대나무통밥',
    pronounce: 'Daenamutongbap',
    description:
      '찹쌀, 멥쌀, 콩, 밤, 대추, 은행, 잣 등을 대나무 통에 넣고 한지로 그 입구를 덮은 뒤 쪄낸 영양밥이다.',
    name_en: 'Steamed Rice in Bamboo Tube',
    description_en:
      'This is a nutritious dish of glutinous rice, plain short grain rice, beans, chestnuts, gingko nuts, and pine nuts, all steamed in a bamboo tube and covered with hanji (traditional Korean paper).',
    name_ja: '竹筒ご飯',
    description_ja:
      'もち米、白米、豆、栗、なつめ、銀杏、松の実などを竹筒に入れ、韓紙でふたをして蒸した栄養満点のご飯。',
    name_zh: '竹筒饭',
    description_zh:
      '把糯米、大米、黄豆、栗子、大枣、银杏、松仁等放入竹筒里，用韩纸盖住竹筒后蒸熟的营养饭。',
    name_zh2: '竹筒飯',
    description_zh2:
      '把糯米、大米、黃豆、栗子、大棗、銀杏、松仁等放入竹筒裡，用韓紙蓋住竹筒後蒸熟即可做成營養飯。',
  },
  {
    id: 20,
    category: '밥 [Bap]',
    name: '돌솥비빔밥',
    pronounce: 'Dolsotbibimbap',
    description:
      '뜨거운 돌솥에 밥을 담고 갖은 나물과 고기볶음을 얹은 뒤 고추장에 비벼 먹는 음식이다. 돌솥의 열기로 밥을 다 먹을 때까지 온도가 따뜻하게 유지된다.',
    name_en: 'Hot Stone Pot Bibimbap',
    description_en:
      'Bibimbap served in a sizzling hot stone pot. The crispy rice at the bottom, mixed with various toppings and gochujang, remains piping hot until the end of the meal.',
    name_ja: '石焼きビビンバ',
    description_ja:
      '熱い石釜にご飯、ナムル、炒めた肉をのせ、コチュジャンをからめて食べる。石釜の熱で最後までアツアツのご飯が食べられるのが特徴。',
    name_zh: '石锅拌饭',
    description_zh:
      '在加热的石锅中分别放入米饭、各种素菜和炒肉丝，用辣椒酱或酱油搅拌即可。石锅有良好的保温效果，可让人细嚼慢咽安心享用，不用担心饭菜变凉。',
    name_zh2: '石鍋拌飯',
    description_zh2:
      '石鍋拌飯是利用燒熱的石鍋做成的拌飯。在石鍋裡塗油後放入米飯再放上素菜，熱度可以保持到吃完為止是這道料理的特點。',
  },
  {
    id: 21,
    category: '밥 [Bap]',
    name: '돼지국밥',
    pronounce: 'Dwaejigukbap',
    description:
      '돼지 뼈로 진하게 우려낸 육수에 돼지 수육을 넣고 밥을 말아 먹는 음식이다. 고춧가루를 다진 양념과 새우젓을 넣어 간을 한 다음 부추김치와 깍두기를 얹어 먹는다.',
    name_en: 'Pork and Rice Soup',
    description_en:
      'This dish consists of a broth made by slowly boiling pig bones, bringing out a deep flavor, with rice and suyuk (boiled pork slices). It is served with a seasoning made with red chili powder and Saeujeot (salted shrimp), along with buchu kimchi (chive kimchi) and kkakdugi (diced radish kimchi).',
    name_ja: '豚肉クッパ',
    description_ja:
      '豚骨をじっくり煮込んだスープに豚のスユク(ゆで肉)とご飯を入れた料理。唐辛子の粉を加えたヤンニョムと小エビの塩辛を入れて味付けし、ニラキムチとカクテギをのせて食べる。',
    name_zh: '猪肉汤饭',
    description_zh:
      '用猪骨头熬出浓汤后放入白切肉泡米饭吃。加入辣椒粉调味酱和虾酱调节咸淡后，配着辣拌韭菜和萝卜块儿等小菜吃。',
    name_zh2: '豬肉湯飯',
    description_zh2: '在用豬骨熬成的濃湯中放入熟豬肉和蔬菜，加上辣味調料、蝦醬後吃的湯飯。',
  },
  {
    id: 22,
    category: '밥 [Bap]',
    name: '따로국밥',
    pronounce: 'Ttarogukbap',
    description:
      '국에 밥을 말지 않고 국과 밥을 따로내놓는다 해서 ‘따로국밥’이라 불려졌다. 12시간 이상 고아 낸 소뼈 국물에 얇게 썬 쇠고기와 건지를 넣고 각종 양념을 하여 끓여낸 국밥이다.',
    name_en: 'Rice and Soup',
    description_en:
      'Ttarogukbap is a bowl of soup (guk) served with a separate (ttaro) bowl of rice (bap), rather than with the rice placed in the soup. The soup is made by boiling beef slices with clotted cow’s blood and seasonings for about 12 hours.',
    name_ja: 'タロクッパ',
    description_ja:
      'スープにご飯を入れずに別々に出すことから「タロ（別々）クッパ」と呼ばれるようになった。12時間以上煮込んだ牛骨スープに薄切りの牛肉と具材を入れ、薬味で味を調えて煮立たせたクッパ。',
    name_zh: '汤加饭',
    description_zh:
      '不同于汤泡饭，将汤和米饭分开上，因此叫汤加饭。精心熬煮十二个小时以上的牛骨汤里，加入切成薄片的牛肉和其它菜料，再放入各种调料调味即可。',
    name_zh2: '湯加飯',
    description_zh2:
      '因為湯和飯分開上桌，所以叫做「湯加飯」。熬煮12個小時以上的牛骨湯裡，放入牛肉與各種食材，以及調味料熬煮，這樣做出來的湯非常美味。',
  },
  {
    id: 23,
    category: '밥 [Bap]',
    name: '매운고추김밥',
    pronounce: 'Maeungochugimbap',
    description:
      '잘게 다진 청양고추와 당근, 어묵 등을 팬에 볶아 속 재료를 만든다. 김 위에 밥을 펴 놓고 속 재료를 넣어 둘둘 말아 싸서 먹는 음식이다. 매콤하고 칼칼한 맛이 일품인 중독성 있는 음식이다.',
    name_en: 'Spicy Green Chili Pepper Gimbap',
    description_en:
      'This dish is made by pan-frying the ingredients of the filling, such as chopped Cheongyang chili pepper, carrot, and fishcake; spreading cooked rice on a sheet of seaweed; then rolling it with the filling. It is an addictive dish with a refreshingly spicy flavor.',
    name_ja: '辛味唐辛子キンパプ',
    description_ja:
      '激辛唐辛子のみじん切り、にんじん、練り物などをフライパンで炒めて具材を作る。海苔の上にご飯を薄くのばし、その具材をのせて巻いて食べる。ピリッとした辛味が魅力的でクセになる。',
    name_zh: '辣椒紫菜包饭',
    description_zh:
      '将切碎的青阳辣椒、胡萝卜、鱼糕等在平底锅中翻炒做成馅料。把米饭薄薄铺在紫菜上，再将备好的馅料放入其中卷成圆筒状。香辣鲜美的味道令人欲罢不能。',
    name_zh2: '辣椒海苔飯捲',
    description_zh2:
      '將切碎的青陽辣椒、胡蘿蔔、魚板等放在平底鍋中翻炒，做成餡料。把米飯鋪在海苔上，再放上備好的餡料卷成圓筒狀。味道香辣鮮美、令人欲罷不能。',
  },
  {
    id: 24,
    category: '밥 [Bap]',
    name: '멍게비빔밥',
    pronounce: 'Meonggebibimbap',
    description:
      '그릇에 밥과 각종 나물, 고기, 달걀, 고추장 등을 넣고 비벼 먹는 비빔밥에 멍게를 넣은 밥이다. 멍게는 독특한 향과 달콤하면서 상큼한 맛을 지니고 있어 먹고 난 후에도 그 맛이 입 안에 감돈다.',
    name_en: 'Sea Pineapple Bibimbap',
    description_en:
      'This dish consists of cooked rice mixed with a variety of vegetables, beef, eggs, and gochujang in a bowl and topped with sea squirt. Sea squirt has a unique scent and sweet, refreshing flavor with a long aftertaste.',
    name_ja: 'ホヤビビンバ',
    description_ja:
      '器にご飯とナムル各種、肉、卵、コチュジャンなどを入れて混ぜて食べるビビンバにホヤをのせたもの。ホヤには独特な香りと甘み、さわやかな味わいがあり、食べた後もその香りが口の中に残る。',
    name_zh: '海鞘拌饭',
    description_zh:
      '将米饭和各种素菜、肉、鸡蛋、辣椒酱放到一个大碗中，再加入海鞘拌着吃。海鞘有一种独特的香气，味道甘甜爽口，吃完后口齿留香，令人回味无穷。',
    name_zh2: '海鞘拌飯',
    description_zh2:
      '把米飯與各種涼拌菜、肉、雞蛋、辣醬拌勻，再放入海鞘拌著吃。海鞘具有非常獨特的香氣，口感香甜而清爽，吃完後仍有淡淡海鞘香縈繞在口腔裡。',
  },
  {
    id: 25,
    category: '밥 [Bap]',
    name: '메밀감자비빔밥',
    pronounce: 'Memilgamjabibimbap',
    description:
      '메밀가루를 반죽해 프라이팬에 동그란 전병을 부친다. 밥에 양념장과 김치, 콩나물, 감자 등을 넣고 비빈 후 전병 위에 놓고 둘둘 말아 적당한 크기로 썬다.',
    name_en: 'Buckwheat and Potato Bibimbap',
    description_en:
      'To prepare this dish, cooked rice is mixed with kimchi, bean sprouts, and potatoes and seasoned with a sauce. It is then rolled up in a buckwheat pancake and served in slices.',
    name_ja: 'そばとじゃがいものビビンバ',
    description_ja:
      'そば粉をこねて丸い形の皮を作ってフライパンで焼く。ご飯にヤンニョムジャンとキムチ、豆もやし、じゃがいもなどを入れて混ぜ、皮の上にのせて巻き、適当な大きさに切って食べる。',
    name_zh: '土豆拌饭荞麦卷饼',
    description_zh:
      '荞麦面和面，在平底锅中煎成圆形的煎饼。米饭中加入调味酱和辛奇、豆芽、土豆等进行搅拌，再将其放在煎饼上卷起来，切成适当的大小。',
    name_zh2: '土豆拌飯蕎麥卷餅',
    description_zh2:
      '把蕎麥面和好，用平底鍋煎成圓餅，米飯裡放入調味汁、辛奇、豆芽、土豆等拌勻後放在煎餅上面卷起來，再切成適當大小。',
  },
  {
    id: 26,
    category: '밥 [Bap]',
    name: '멸치김밥',
    pronounce: 'Myeolchigimbap',
    description:
      '간장과 물엿을 넣고 조린 잔멸치와 다진 청양고추, 마요네즈 등을 넣은 김밥이다. 고추장, 고춧가루, 물엿을 넣고 칼칼하게 조린 잔멸치를 넣기도 한다.',
    name_en: 'Anchovy Gimbap',
    description_en:
      'Gimbap with a filling of baby anchovies braised in soy sauce and starch syrup, chopped Cheongyang chili pepper, and mayonnaise. The baby anchovies can be braised in a spicy sauce made with gochujang (red chili paste), red chili powder, and starch syrup.',
    name_ja: 'ちりめんじゃこキンパプ',
    description_ja:
      '醤油と水あめを入れて煮付けたちりめんじゃこや、激辛唐辛子のみじん切り、マヨネーズなどを加えたキンパプ。ちりめんじゃこにコチュジャン、粉唐辛子、水あめを加え、辛めに煮付けたものを使うこともある。',
    name_zh: '鳀鱼紫菜包饭',
    description_zh:
      '放入酱油和糖稀炖制的小鳀鱼和剁碎的青阳辣椒、蛋黄酱等食材一起卷成的紫菜包饭。有时也会放入用辣椒酱、辣椒粉和糖稀炖制的香辣小鳀鱼。',
    name_zh2: '鯷魚海苔飯捲',
    description_zh2:
      '將用醬油、糖稀燉煮的小鯷魚和剁碎的青陽辣椒、 美乃滋一起卷成飯捲。也可放入用辣椒醬、辣椒粉和糖稀燉煮而成的辣味小鯷魚。',
  },
  {
    id: 27,
    category: '밥 [Bap]',
    name: '묵밥',
    pronounce: 'Mukbap',
    description:
      '도토리묵은 소화가 잘되며 다이어트에 좋은 식품이다. 소량의 밥을 담고 묵을 올려 김치, 오이, 김을 고명으로 하여 육수를 부어 먹는데 여름에는 차게, 겨울에는 뜨겁게 하여 먹는다.',
    name_en: 'Chilled Acorn Jelly and Rice Soup',
    description_en:
      'Acorn jelly is known to be an easily digestible food that is ideal for those trying to lose weight. This dish features a small amount of rice topped with acorn jelly, cucumber kimchi, and crushedseaweed served with soup that can be added at the table.',
    name_ja: 'どんぐりこんにゃく入りクッパ',
    description_ja:
      'どんぐりこんにゃくは消化に良く、ダイエット向きの食品である。どんぐりこんにゃく入りクッパは器に少量のご飯を盛り、どんぐりこんにゃくをのせ、キムチ、きゅうり、のりを飾り、出汁をかけて食べるもので、夏は冷たく、冬は温かくして食べる。',
    name_zh: '凉粉汤饭',
    description_zh:
      '橡子凉粉容易消化，有助于减肥。将少量米饭放入碗中，上面放橡子凉粉以及辛奇、黄瓜丝、海苔等菜码，最后倒入高汤即可食用。夏天可用凉汤，冬天可用热汤。',
    name_zh2: '涼粉湯飯',
    description_zh2:
      '橡子涼粉易於消化，是有助於減肥的食材。少量米飯上放涼粉、辛奇、黃瓜和紫菜，然後輕輕倒入湯泡飯吃。夏季吃涼的，冬季可以吃熱的湯飯。',
  },
  {
    id: 28,
    category: '밥 [Bap]',
    name: '밥',
    pronounce: 'Bap',
    description:
      '멥쌀을 씻어 솥에 안치고 물을 알맞게 붓고 끓여 익힌 것으로 한국인의 주식이다. 부드럽고 소화가 잘되며 여러 반찬과 두루 어울린다.',
    name_en: 'Steamed Rice',
    description_en:
      'Regular short grain rice cooked until soft, moist, and glossy. It is easy to digest and goes well with any banchan (side dish), which is likely why it is the central and staple dish of every Korean meal.',
    name_ja: 'ご飯',
    description_ja:
      '米をといで水と一緒に釜で炊いたもので、韓国人の主食となる。柔らかい口当たりで消化によく、あらゆるおかずに合う。',
    name_zh: '米饭',
    description_zh:
      '将大米洗净放入锅中加入适量水煮制而成，是韩国人的主食。米饭软嫩易消化，适宜与各种配菜佐餐。',
    name_zh2: '米飯',
    description_zh2: '米飯是不混合雜糧, 只把粳米放入鍋裡，加水煮成的飯。',
  },
  {
    id: 29,
    category: '밥 [Bap]',
    name: '보리밥',
    pronounce: 'Boribap',
    description:
      '쌀에 보리를 섞거나 보리만으로 지은 밥으로 소화가 잘된다. 열무김치나 고추장을 넣고 비벼 먹거나 풋고추를 된장에 찍어 함께 먹으면 별미다.',
    name_en: 'Steamed Barley Rice',
    description_en:
      'This dish, cooked with rice or barley alone, is easy to digest and effective in preventing various health conditions. It becomes a delicacy when mixed with yeolmu kimchi (young summer radish kimchi) or gochujang (red chili paste) or served with green peppers and doenjang, a traditional Korean soybean paste.',
    name_ja: '麦ご飯',
    description_ja:
      '米に大麦を混ぜて、または麦だけで炊いたご飯で、消化によく、生活習慣病の予防に効果がある。ヨルムキムチやコチュジャンを混ぜて食べたり、青唐辛子を味噌につけて一緒に食べるととても美味しい。',
    name_zh: '大麦饭',
    description_zh:
      '大米里掺大麦或者光用大麦焖的饭，不仅助消化，而且能够预防生活习惯病。可以放一些萝卜缨辛奇和辣椒酱拌饭吃，或者配着尖椒蘸大酱吃别有一番滋味。',
    name_zh2: '大麥飯',
    description_zh2: '粳米裡摻入大麥或者單用大麥煮成的飯，大麥飯具有助消化的功能。',
  },
  {
    id: 30,
    category: '밥 [Bap]',
    name: '불고기덮밥',
    pronounce: 'Bulgogideopbap',
    description:
      '간장 양념장에 재운 불고기를 익힌 후 밥 위에 얹어 먹는 음식이다. 채소와 어우러진 불고기 양념의 국물로 밥을 비벼 먹기에 좋다.',
    name_en: 'Bulgogi with Rice',
    description_en:
      'Pan-fried bulgogi served over steamed rice. The sauce and vegetables make bulgogi ideal for mixing with rice.',
    name_ja: 'プルゴギ丼 醤',
    description_ja:
      '醤油ベースのたれに漬けた牛肉に火を通し、ご飯の上にのせて食べる。野菜と調和したプルゴギのヤンニョムスープにご飯を入れ、かき混ぜて食べるとおいしい。',
    name_zh: '烤牛肉盖饭',
    description_zh:
      '将牛肉用酱油调味酱腌制一定时间，炒熟后浇在米饭上食用。烤牛肉加入适量的蔬菜翻炒至出汤,再拌米饭吃。',
    name_zh2: '烤牛肉蓋飯',
    description_zh2:
      '將切成薄片的牛肉和蔬菜用醬油調料醃製後做成烤牛肉，放在米飯上。並放入粉絲、菇類、洋蔥等做成滑嫩的蓋飯。',
  },
  {
    id: 31,
    category: '밥 [Bap]',
    name: '비빔밥',
    pronounce: 'Bibimbap',
    description:
      '쌀밥에 고기볶음, 갖은 나물과 고명을 올리고 고추장에 비벼 먹는 음식이다. 참기름을 첨가하면 더욱 맛있다.',
    name_en: 'Bibimbap',
    description_en:
      'Rice topped with sautéed beef and a variety of colorful vegetables that is mixed at the table with spicy gochujang. A hint of sesame oil helps bring out the flavor.',
    name_ja: 'ビビンバ',
    description_ja:
      'ご飯に炒めた肉や数種類のナムルをのせ、コミョンを飾りつけたものにコチュジャンを混ぜて食べる。ごま油を加えるといっそう風味が増す。',
    name_zh: '拌饭',
    description_zh:
      '米饭中加入炒肉丝、各种小菜和，用辣椒酱或酱油搅拌即可。搅拌时适当加入麻油会更加美味。',
    name_zh2: '拌飯',
    description_zh2:
      '在米飯中加入各種素菜和炒肉，放入辣椒醬再將所有食材均勻攪拌後食用。用醬油調料拌著食用也十分美味。',
  },
  {
    id: 32,
    category: '밥 [Bap]',
    name: '산채비빔밥',
    pronounce: 'Sanchaebibimbap',
    description:
      '산에서 나는 각종 나물을 밥 위에 올리고 고추장에 비벼 먹는 음식이다. 각각 특유의 맛과 향을 지닌 산나물들이 어우러져 입맛을 돋운다.',
    name_en: 'Wild Vegetable Bibimbap',
    description_en:
      'A version of bibimbap topped with wild vegetables that grow in the mountains. Mixed at the table with spicy gochujang, it is a fragrant dish filled with the flavor of wild mountainvegetables.',
    name_ja: '山菜ビビンバ',
    description_ja:
      '山でとれるナムルに火を通してご飯の上にのせ、コチュジャンを混ぜて食べる。山菜の豊かな味と香りが食欲をそそる一品。',
    name_zh: '山菜拌饭',
    description_zh:
      '将各种山野菜弄熟后放在米饭上,用辣椒酱搅拌即可。各种山野菜特有的味道和香气可使人食欲大增。',
    name_zh2: '山菜拌飯',
    description_zh2: '把生長在山地的各種素菜放在米飯上面，放入辣椒醬拌著吃。',
  },
  {
    id: 33,
    category: '밥 [Bap]',
    name: '삼선비빔밥',
    pronounce: 'Samseonbibimbap',
    description:
      '삼선이란 대표적인 산해진미를 나타내며 빛깔과 향기와 맛이 신선하다는 뜻이다. 밥 위에 해삼, 전복, 구운 차돌박이를 얹고 신선한 채소와 홍시를 더한 비빔밥이다.',
    name_en: 'Three-delicacy Bibimbap',
    description_en:
      'Samseon refers to delicacies characterized by attractive colors, aromas, and flavors. This dish consists of bibimbap topped with sea cucumber, abalone, and grilled beef brisket, along with fresh vegetables and ripe persimmon.',
    name_ja: '三鮮ビビンバ',
    description_ja:
      '「三鮮」とは、代表的な山海珍味を意味し、色と香りと味が新鮮であるという意味である。ご飯の上にナマコ、アワビ、焼いた牛のともばら肉をのせ、新鮮な野菜と熟した柿を添えたビビンバ。',
    name_zh: '三鲜拌饭',
    description_zh:
      '三鲜指的是代表性的山珍海味，意思是颜色和香气、味道十分新鲜。将海参、鲍鱼、烤肥牛放在米饭上面，加上新鲜的蔬菜和柿子做成拌饭。',
    name_zh2: '三鮮拌飯',
    description_zh2:
      '三鮮代表山珍海味，意指色香味俱全。在米飯上放海參、鮑魚、烤牛胸肉，再加上新鮮蔬菜與軟柿子拌著吃即可。',
  },
  {
    id: 34,
    category: '밥 [Bap]',
    name: '새싹비빔밥',
    pronounce: 'Saessakbibimbap',
    description:
      '무순 등의 새싹은 씨앗에서 싹을 틔운 것으로 비타민을 비롯한 영양소가 풍부하고 소화에 좋다. 그릇에 밥을 담고 소고기와 새싹을 올린 후 양념장에 비벼 먹는다.',
    name_en: 'Sprout Bibimbap',
    description_en:
      'This dish is a bowl of rice topped with beef and sprouts served with marinade. Rich in various nutrients and vitamins, this dish features a variety of sprouts, which are known to be good for digestion.',
    name_ja: 'スプラウトビビンバ',
    description_ja:
      '貝割れ大根などの新芽は、種から芽ばえたもので、ビタミンをはじめとする栄養素が豊富に含まれており、消化に良い。器にご飯を入れ、牛肉とスプラウトをのせてヤンニョムジャン(たれ)をからめて食べる。',
    name_zh: '嫩芽拌饭',
    description_zh:
      '苜蓿芽等嫩芽是用菜籽发的新芽，有维生素等丰富的营养成分，有助于消化。在大碗里盛适量的米饭，上面放一些牛肉和嫩芽，然后加入调味酱拌着吃即可。',
    name_zh2: '嫩芽拌飯',
    description_zh2:
      '將米飯煮至軟硬適中，放上豐富的嫩葉蔬菜後，拌入調味醬食用。嫩葉蔬菜散發出清香的味道，且富維生素。',
  },
  {
    id: 35,
    category: '밥 [Bap]',
    name: '새우볶음밥',
    pronounce: 'Saeubokkeumbap',
    description:
      '껍질을 벗긴 새우와 잘게 썬 채소를 밥과 함께 기름에 볶은 음식이다. 소금, 간장, 후추 등으로 간을 맞춘다. 새우의 부드러운 식감과 풍미를 맛볼 수 있다.',
    name_en: 'Shrimp Fried Rice',
    description_en:
      'Fried rice with peeled shrimp and finely chopped vegetables and seasoned with salt, soy sauce, and pepper. The dish is loved for the tender texture and flavor of the shrimp.',
    name_ja: 'エビチャーハン',
    description_ja:
      '殻をむいたエビと小さく切った野菜をご飯と一緒に油で炒め、塩、醤油、こしょうなどで味付けして食べる。エビのやわらかな食感や香りが楽しめる。',
    name_zh: '虾仁炒饭',
    description_zh:
      '去皮的鲜虾、切碎的蔬菜和米饭一起用油翻炒而成。再加盐、酱油、胡椒等调味。可以品尝到虾仁的柔嫩口感和风味。',
    name_zh2: '蝦仁炒飯',
    description_zh2:
      '去皮的鮮蝦、切碎的蔬菜和米飯一起用油翻炒而成。用鹽、醬油、胡椒等調味。可以品嘗到蝦仁的柔嫩口感和風味。',
  },
  {
    id: 36,
    category: '밥 [Bap]',
    name: '샐러드김밥',
    pronounce: 'Salad Gimbap',
    description:
      '김밥 속에 양상추, 파프리카와 새싹채소 등을 넣어 싼 김밥이다. 아삭하고, 건강한 맛으로 여성들에게 인기가 좋다.',
    name_en: 'Salad Gimbap',
    description_en:
      'A type of gimbap with a filling of sliced lettuce, paprika, and sprouts, salad gimbap is especially popular among women due to its use of fresh vegetables and their crispy texture.',
    name_ja: 'サラダキンパプ',
    description_ja:
      'レタス、パプリカ、ベビーリーフなどが巻かれたキンパプ。シャキっとした食感とヘルシーな味が女性に人気。',
    name_zh: '沙拉紫菜卷饭',
    description_zh:
      '加入圆生菜、彩椒和芽菜后把它卷成紫菜卷饭，口感清脆、营养健康，尤其受女性的欢迎。',
    name_zh2: '沙拉紫菜捲飯',
    description_zh2:
      '加入圓生菜、彩椒與芽菜，然後一起卷成紫菜卷飯。沙拉紫菜卷飯口感酥脆、營養健康，深得女人心。',
  },
  {
    id: 37,
    category: '밥 [Bap]',
    name: '소고기국밥',
    pronounce: 'Sogogigukbap',
    description:
      '양지머리와 사골을 같이 끓여 뼈는 건져 내 맑은 장국을 만들고 고기는 얇게 썬다. 그릇에 국을 담고 밥을 넣은 다음 삶은 고기와 고명을 얹어 깍두기를 곁들여 먹는다.',
    name_en: 'Beef and Rice Soup',
    description_en:
      'This dish is made by boiling cow leg bones to make a clear broth. The bones are then removed, and the beef brisket is thinly sliced from the bone. Rice is added to the broth, topped with slices of beef brisket, and served with kkakdugi (diced radish kimchi).',
    name_ja: '牛肉クッパ',
    description_ja:
      'ヤンジモリ(牛の胸肉)とサゴル(牛の骨)を一緒に煮て、骨は取り出し、肉は薄く切る。器にスープを盛ってご飯を入れ、煮込んだ肉とコミョン(料理をより美しく、見栄えを良くするために、仕上げに上に散らしたりのせたりするもの)をのせ、カクテギを添えて食べる。',
    name_zh: '牛肉汤饭',
    description_zh:
      '用牛的胸骨和腿骨熬汤，将骨头捞出仅留清汤，肉切成薄片。用大碗盛汤后，把米饭泡在汤里，上面放一些肉片和装饰配菜，配着萝卜块辛奇吃即可。',
    name_zh2: '牛肉湯飯',
    description_zh2:
      '湯飯是湯泡飯吃的飲食。牛肉湯飯是用煮熟的牛肉和蘿蔔，加調料攪拌後燉煮的湯水料理。泡飯配著辛奇吃更美味。',
  },
  {
    id: 38,
    category: '밥 [Bap]',
    name: '소고기김밥',
    pronounce: 'Sogogigimbap',
    description:
      '김밥의 기본 재료에 다진 소고기를 간장 양념으로 볶아 함께 싼 김밥으로 맛과 영양이 좋다.',
    name_en: 'Beef Gimbap',
    description_en:
      'Gimbap that features ground beef stir-fried with soybean sauce, in addition to the basic ingredients, making it both delicious and nutritious.',
    name_ja: '牛肉キンパプ',
    description_ja:
      'キンパプの基本食材に、小さく切った牛肉を醤油ベースのたれで炒めて一緒に巻いたもの。味も栄養も抜群。',
    name_zh: '牛肉紫菜卷饭',
    description_zh:
      '剁碎的牛肉加入酱油调料炒熟后，和紫菜卷饭的基本食材一起卷起来，不仅美味，而且又有营养。',
    name_zh2: '牛肉紫菜捲飯',
    description_zh2:
      '把剁碎的牛肉用醬油炒熟後跟紫菜卷飯的基本食材一起卷起來，這樣做出來的卷飯美味又有營養。',
  },
  {
    id: 39,
    category: '밥 [Bap]',
    name: '소머리국밥',
    pronounce: 'Someorigukbap',
    description:
      '가마솥에 소머리뼈와 사골을 넣고 10시간 이상 국물을 우려낸 다음 다시 소머리고기와 무, 우거지, 토란대 등을 넣고 푹 고아 양념장을 넣어 깍두기나 배추김치를 곁들여 먹는다.',
    name_en: 'Beef Head Meat and Rice Soup',
    description_en:
      'For this dish, a cow’s head and leg bones are simmered for over 10 hours in an iron pot to make a soup. Next, the meat from the cow’s head and vegetables, including radish, outer cabbage leaves, and taro shoots, are simmered and seasoned with sauce. This dish is served with kkakdugi (cubed radish kimchi) or cabbage kimchi.',
    name_ja: '牛の頭部肉クッパ',
    description_ja:
      '大鍋に牛の頭の骨と牛骨を入れて10時間以上煮出し、牛の頭の肉と大根、白菜の外葉、ずいきなどを入れて煮込み、ヤンニョムジャンを加えてカクトゥギや白菜キムチを添えて食べる。',
    name_zh: '牛头肉汤饭',
    description_zh:
      '将牛的头骨和腿骨放进大铁锅里熬煮十个小时以上，待熬出醇浓的高汤后，加入牛头肉和萝卜、菜叶、芋头茎等材料继续慢慢熬煮。吃的时候放一些调味酱，配着萝卜块辛奇或辛奇一起吃。',
    name_zh2: '牛頭肉湯飯',
    description_zh2:
      '把牛頭骨與牛棒骨放入鍋裡熬煮十個小時以上，然後再放入牛頭肉與蘿蔔、幹蘿蔔葉、芋頭莖等繼續煮熟。吃的時候放點調味醬，搭配蘿蔔塊辛奇或辛奇一起吃。',
  },
  {
    id: 40,
    category: '밥 [Bap]',
    name: '송어덮밥',
    pronounce: 'Songeodeopbap',
    description:
      '동해에서 잡히는 싱싱한 송어를 팬에 구워 부드럽게 익힌 후 볶음밥 위에 얹고 매콤한 고추장에 파와 마늘 채를 곁들여 먹는다.',
    name_en: 'Stir-fried Trout with Rice',
    description_en:
      'Consisting of fried rice topped with grilled trout and served with spicy gochugang and julienned green onion and garlic, this dish features trout caught in the East Sea.',
    name_ja: 'マス丼',
    description_ja:
      '東海で獲れる新鮮なマスをフライパンで柔らかくなるまで焼く。それをチャーハンの上にのせて辛いコチュジャン、ねぎとにんにくの千切りを添えて食べる。',
    name_zh: '鳟鱼盖饭',
    description_zh:
      '将来自东海的新鲜鳟鱼放在平底锅中煎烤至熟，然后放在炒饭上面，配上辣椒酱和切成丝的葱蒜一起吃即可。',
    name_zh2: '鱒魚蓋飯',
    description_zh2: '把新鮮東海鱒魚煎熟後放在炒飯上面，加上辣椒醬和蔥蒜絲一起吃。',
  },
  {
    id: 41,
    category: '밥 [Bap]',
    name: '순대국밥',
    pronounce: 'Sundaegukbap',
    description:
      '돼지 곱창에 각종 채소와 양념을 넣고 쪄서 만든 순대를 넣어 끓인 국밥이다. 국물을 우려낼 때 누린내를 없애기 위해 들깨와 생강, 한약재 등을 넣기도 한다.',
    name_en: 'Blood Sausage and Rice Soup',
    description_en:
      'This dish consists of sundae, which is steamed pig intestines stuffed with seasoned, minced vegetables, and rice with soup. Perilla seeds, ginger, and a variety of medicinal herbs are boiled with the sundae to remove any unpleasant meat smell.',
    name_ja: 'スンデクッパ',
    description_ja:
      '豚の腸詰めクッパは、豚モツに色々な野菜と調味料を入れて蒸した豚の腸詰めを入れて煮込んだ料理。だしを取るとき、臭みをなくすためにエゴマや生姜、漢方薬材などを入れることもある。',
    name_zh: '血肠汤饭',
    description_zh:
      '用血肠熬制的汤饭。血肠是猪大肠里灌入各种蔬菜和调料后放进蒸笼里蒸煮而成，熬汤时放入适量的白苏子、生姜和中药材等以去除腥味。',
    name_zh2: '血腸湯飯',
    description_zh2:
      '用血腸熬製的湯飯。血腸是豬大腸裡灌入各種蔬菜和調料後放進蒸籠裡蒸煮而成的，把血腸放進牛骨湯水後煮出湯飯。飯可先泡湯吃，也可以另外配湯吃。',
  },
  {
    id: 42,
    category: '밥 [Bap]',
    name: '쌈밥',
    pronounce: 'Ssambap',
    description:
      '푸성귀와 해조류를 깨끗이 씻어 넓게 편 다음 밥과 양념장을 올려 싸 먹는 음식이다. 상추, 깻잎, 배춧잎, 호박잎, 양배추, 김, 미역, 다시마 등이 주요 쌈 재료다.',
    name_en: 'Leaf Wraps and Rice',
    description_en:
      'Steamed rice wrapped in leafy vegetables or seaweed with seasoned sauce. Lettuce, perilla leaves, Korean cabbage, squash leaves, cabbage, dried laver, brown seaweed, or kelp may beused as the wraps.',
    name_ja: '野菜包みご飯',
    description_ja:
      'きれいに洗った青菜や海藻類の上に、ご飯と薬味をのせて包んで食べる。包む野菜には、ちしゃやごまの葉、白菜、かぼちゃの葉、キャベツ、海苔、わかめ、昆布などが使われる。',
    name_zh: '蔬菜包饭',
    description_zh:
      '将青菜和海藻类洗净后摊平，放上米饭和调味酱后包起来吃即可。用来包饭的蔬菜主要有生菜、苏子叶、白菜叶、南瓜叶、圆白菜、海苔、海带、昆布等。',
    name_zh2: '蔬菜包飯',
    description_zh2:
      '在多種生蔬菜和清燙蔬菜放上米飯和調味大醬吃的飲食。添加辣椒醬、酸辣醬、蝦醬液來代替調味醬亦佳。',
  },
  {
    id: 43,
    category: '밥 [Bap]',
    name: '알밥',
    pronounce: 'Albap',
    description:
      '뜨거운 밥에 날치 알을 넣어 비벼 먹는 밥이다. 뜨겁게 달군 뚝배기에 참기름을 바르고, 밥을 담은 후, 잘게 썬 단무지, 당근, 오이, 김치, 날치 알 등을 올려 비벼 먹는데, 입안에서 날치 알이 톡톡 터지는 재미가 있다.',
    name_en: 'Fish Roe Rice',
    description_en:
      'Warm rice topped with raw fish roe, thin slices of danmuji (yellow pickled radish), julienned cucumber and carrot, and chopped kimchi and served in a heated ttukbaegi (earthen pot) greased with sesame oil. The way the fish eggs pop when chewed makes this dish unique and fun to eat.',
    name_ja: '魚の卵ご飯',
    description_ja:
      'あつあつのご飯にトビコをのせて混ぜて食べる。熱した土鍋にごま油をひいて、ご飯を盛った後、小さく切ったたくあん、にんじん、きゅうり、キムチ、トビコなどをのせて混ぜて食べる。口の中でトビコがはじける食感も楽しい。',
    name_zh: '鱼子饭',
    description_zh:
      '把飞鱼子放在热米饭上拌着吃。在烧热的砂锅内壁涂上香油，放入适量的米饭，再加入切碎的腌萝卜、胡萝卜、黄瓜、辛奇、飞鱼子等拌著吃，飞鱼子一粒一粒在嘴里爆开,很是奇妙。',
    name_zh2: '魚子飯',
    description_zh2:
      '把飛魚籽放在熱米飯裡拌著吃。在燒熱的砂鍋內壁塗上香油，盛好飯，放入切碎的醃蘿蔔、胡蘿蔔、黃瓜、辛奇、飛魚籽等拌著吃。飛魚籽吃起來口感獨特，妙趣橫生。',
  },
  {
    id: 44,
    category: '밥 [Bap]',
    name: '양푼비빔밥',
    pronounce: 'Yangpunbibimbap',
    description:
      '바닥이 평평한 넓은 그릇인 양푼에 밥을 담고, 갖은 나물과 고기볶음을 얹어 고추장에 비벼먹는데, 여럿이 푸짐하게 먹을 수 있는 음식이다.',
    name_en: 'Large Brass Bowl Bibimbap',
    description_en:
      'Cooked rice topped with a variety of vegetables and sautéed beef and mixed with gochujang (red chili paste).This dish is served in a brass bowl large enough for several people to eat together.',
    name_ja: 'ヤンプンビビンバ',
    description_ja:
      '底の広い器にご飯を盛り、ナムル、炒めた肉をのせ、コチュジャンで和えて食べる。数人でたっぷり食べられる料理。',
    name_zh: '铜盆拌饭',
    description_zh:
      '把各种野菜和炒肉放入平底的铜盆里，再加入辣椒酱拌着吃，不仅味美，而且量足，可供多人一起食用。',
    name_zh2: '銅盆拌飯',
    description_zh2: '把各種野菜與炒肉放入平底銅盆，然後放點辣椒醬拌著吃，是可供多人一起吃的美食。',
  },
  {
    id: 45,
    category: '밥 [Bap]',
    name: '연잎밥',
    pronounce: 'Yeonnipbap',
    description:
      '연잎에 찹쌀과 대추, 밤 등의 곡식을 넣고 싼 것을 찜통에서 쪄낸 음식이다. 예전에는 사찰에서 스님들이 먹던 음식이었으나 요즘엔 웰빙 음식으로 각광받고 있다.',
    name_en: 'Lotus Leaf Rice',
    description_en:
      'Glutinous rice, dates, and chestnuts wrapped in a lotus leaf and steamed in a steamer. In the past, this dish was made and consumed by Buddhist monks, but it is now popular among health-conscious people.',
    name_ja: '蓮の葉ご飯',
    description_ja:
      '蓮の葉にもち米となつめ、栗などの穀物を入れて巻き、蒸し器で蒸した料理。以前はお寺などで食べられていた僧侶の料理とされていたが、最近は健康料理として脚光を浴びている。',
    name_zh: '荷叶饭',
    description_zh:
      '将糯米、大枣、栗子等谷物用荷叶包住，放入蒸笼蒸熟即可。荷叶饭过去是寺庙里的僧人常吃的斋饭，如今成为备受青睐的健康美食。',
    name_zh2: '荷葉飯',
    description_zh2:
      '用蓮葉包住糯米、大棗和栗子等食材，用蒸籠蒸熟。蓮葉飯過去是寺廟裡的僧人吃的齋飯，如今作為健康美食備受青睞。',
  },
  {
    id: 46,
    category: '밥 [Bap]',
    name: '열무비빔밥',
    pronounce: 'Yeolmubibimbap',
    description:
      '밥과 함께 열무김치, 고추장을 조금 넣어 비벼 먹는 비빔밥이다. 열무김치는 주로 여름철에 담가 먹으며, 시원한 맛으로 입맛을 살린다.',
    name_en: 'Young Summer Radish Bibimbap',
    description_en:
      'A type of bibimbap mixed with yeolmu (young summer radish) and gochujang (red chili paste). Yeolmukimchi is a summer delicacy loved for its refreshing, appetite-stimulating taste.',
    name_ja: '大根若菜ビビンバ',
    description_ja:
      'ご飯と一緒に大根若菜キムチ、コチュジャンを少し入れて食べるビビンバ。大根若菜キムチは主に夏に漬けて食べるもので、すっきりとした味が食欲をそそる。',
    name_zh: '萝卜缨辛奇拌饭',
    description_zh:
      '将萝卜缨辛奇以及辣椒酱和米饭一起拌着吃。萝卜缨辛奇主要在夏季吃，口感爽脆，有助于恢复食欲。',
    name_zh2: '蘿蔔纓辛奇拌飯',
    description_zh2:
      '把小蘿蔔纓辛奇和辣椒醬放入米飯裡拌著吃。蘿蔔纓辛奇主要在夏季吃，口感爽脆，有助於恢復食欲。',
  },
  {
    id: 47,
    category: '밥 [Bap]',
    name: '영양돌솥밥',
    pronounce: 'Yeongyangdolsotbap',
    description:
      '돌솥에 멥쌀과 잡곡을 섞어 담고 밤, 대추, 은행, 콩 등을 넣어 즉석에서 지은 밥이다. 다 먹고 나면 바닥에 눌어붙은 밥에 물을 부어 숭늉을 만들어 먹는다.',
    name_en: 'Nutritious Hot Stone Pot Rice',
    description_en:
      'Rice, various grains, chestnuts, ginko nuts, and pine nuts are cooked and served in a stone bowl. After the bowl is empty, hot water is poured over the crispy layer of rice at the bottom to make a rice infusion (sungnyung).',
    name_ja: '栄養釜飯',
    description_ja:
      '石釜に白米、雑穀、栗、銀杏、松の実などを入れ、一人前ずつ即席で炊く。ご飯を食べ終えたら水を加え、スンニュン(おこげ)をふやかして食べる。',
    name_zh: '营养石锅饭',
    description_zh:
      '石锅中放入可供一人食用的大米、杂粮、板栗、银杏、松籽等新鲜食材现煮现吃。吃完饭还可在石锅底加入水，做成锅巴汤食用。',
    name_zh2: '營養石鍋飯',
    description_zh2:
      '在石鍋中放入粳米和雜糧、水蔘、香菇、大棗等食材現煮現吃。吃完飯還可在石鍋底加水，把鍋巴做成鍋巴湯食用。',
  },
  {
    id: 48,
    category: '밥 [Bap]',
    name: '오곡밥',
    pronounce: 'Ogokbap',
    description:
      '찹쌀, 찰수수, 기장, 붉은팥, 검은콩 등 다섯 가지 곡식을 섞어서 지은 밥이다. 음력 정월 대보름에 한 해의 무사태평과 풍년을 기원하며 여러 사람이 함께 나누어 먹던 음식이다.',
    name_en: 'Steamed Five-grain Rice',
    description_en:
      'This dish is made up of five different varieties of rice and grains, including glutinous rice, sorghum, millet, adzuki beans, and black soybeans. Koreans used to cook Ogokbap (five-grain rice) on the first full moon (15th day) of the year, according to the lunar calendar, to share with neighbors and wish for peace and a good harvest.',
    name_ja: '五穀ご飯',
    description_ja:
      'もち米、モチキビ、キビ、赤小豆、黒豆の5種類の穀物を混ぜて炊いたご飯。小正月に1年の安泰と豊作を祈願し、多くの人が分け合って食べた料理。',
    name_zh: '五谷饭',
    description_zh:
      '用糯米、粘高粱米、黄米、红豆、黑豆等五种粗粮煮的饭。农历正月十五时，家人聚在一起吃五谷饭，以祈祷一年平平安安、五谷丰登。',
    name_zh2: '五穀飯',
    description_zh2:
      '五穀飯是放入糯米、高粱、黃米、紅豆、黑豆等五穀做成的飯。這是正月十五（陰曆1月15日）全家人團聚在一起，懷著祈福之心共同享用的飲食。',
  },
  {
    id: 49,
    category: '밥 [Bap]',
    name: '오분자기돌솥밥',
    pronounce: 'Obunjagidolsotbap',
    description:
      '돌솥에 쌀, 육수, 오분자기를 넣어 지은 밥이다. 오분자기는 전복과의 해산물로 전복보다 크기가 작지만 특유의 씹히는 맛으로 인기가 좋다. 해물뚝배기에도 많이 넣는다.',
    name_en: 'Small Abalone Hot Stone Pot Rice',
    description_en:
      'Rice cooked with small abalone (haliotis supertexta) and broth in a stone pot. Haliotis supertexta looks similar to abalone but is smaller and has a distinctively chewy texture. It is a popular ingredient of seafood soup served in a hot earthen pot.',
    name_ja: 'トコブシの釜飯',
    description_ja:
      '釜に米、出し汁、トコブシを入れて炊いたご飯。トコブシはアワビ科の海産物で、アワビよりは小さいが、特有の歯ごたえが人気。海鮮土鍋にもよく入る。',
    name_zh: '小鲍鱼石锅饭',
    description_zh:
      '石锅中放入大米、高汤和小鲍鱼焖煮即可。小鲍鱼是鲍科海鲜，大小比鲍鱼小一些，但是口感柔韧，味道鲜美，深受男女老少喜爱，也是做海鲜砂锅时常用的材料。',
    name_zh2: '小鮑魚石鍋飯',
    description_zh2:
      '石鍋裡放入大米、高湯和小鮑魚做成米飯。小鮑魚是鮑魚科的海鮮，要比鮑魚小，但嚼起來口感非常特別，是非常有人氣的海鮮。做海鮮鍋時也經常放小鮑魚。',
  },
  {
    id: 50,
    category: '밥 [Bap]',
    name: '오징어덮밥',
    pronounce: 'Ojingeodeopbap',
    description:
      '손질한 오징어를 먹기 좋게 썰어 양파, 당근 등의 채소와 함께 매콤하게 양념하여 볶은 뒤 밥 위에 얹어 먹는 음식이다.',
    name_en: 'Spicy Stir-fried Squid with Rice',
    description_en:
      'Squid marinated in a spicy sauce with onions and carrots, stir-fried, and served over steamed rice.',
    name_ja: 'イカ炒め丼',
    description_ja:
      '甘辛く味付けしたイカを食べやすい大きさに切り、玉ねぎやにんじんなどの野菜と一緒に辛い薬味で炒め、ごはんの上にのせて食べる。',
    name_zh: '鱿鱼盖饭',
    description_zh:
      '用辣味的调味酱腌制切好的鱿鱼，然后与洋葱、胡萝卜等蔬菜一起炒熟后，浇在米饭上食用。',
    name_zh2: '魷魚蓋飯',
    description_zh2:
      '這是將鱿魚和多種蔬菜一起與辣味調料拌炒後鋪在米飯上食用的特色飲食。多放章魚、小章魚和蔬菜，還可做成炒菜。',
  },
  {
    id: 51,
    category: '밥 [Bap]',
    name: '우거지사골국밥',
    pronounce: 'Ugeojisagolgukbap',
    description:
      '우거지는 배추의 겉대를 뜯어낸 것으로 비타민과 칼슘, 섬유질이 풍부하다. 삶아서 건진 우거지에 된장을 비롯한 갖은 양념을 하여 사골국물에 넣고 푹 끓여서 밥을 말아 먹는다.',
    name_en: 'Korean Cabbage and Rice Soup',
    description_en:
      'Ugeoji is the dried outer leaves of Korean cabbage, and is rich in vitamins, calcium, and fiber. To make this dish, dried ugeoji is boiled, drained, and seasoned with doenjang (soybean paste) and put in a bowl of beef bone broth with rice.',
    name_ja: '白菜入り牛骨クッパ',
    description_ja:
      'ウゴジは白菜の外葉で、ビタミンやカルシウム、食物繊維が豊富に含まれている。茹でたウゴジに味噌など色々な薬味で味付けし、牛骨スープに入れて煮込み、ご飯を混ぜて食べる。',
    name_zh: '干白菜牛骨汤饭',
    description_zh:
      '干白菜是将白菜帮子摘下来晒干的，富含各种维生素、钙和纤维素。把干白菜用水煮开后捞出来，加入大酱等各种调料后，倒入牛骨汤熬煮至熟烂，然后泡米饭吃即可。',
    name_zh2: '乾白菜牛骨湯飯',
    description_zh2:
      '在用牛骨湯和牛胸骨肉肉熬成的湯水中放入用大醬調料攪拌的乾白菜，慢慢燉煮成濃湯，可以泡飯吃。',
  },
  {
    id: 52,
    category: '밥 [Bap]',
    name: '우렁된장비빔밥',
    pronounce: 'UreongdoenjangBibimbap',
    description:
      '양파, 풋고추, 버섯, 우렁이살 등을 굵직하게 다져서 된장에 버무려 쌀뜨물을 바특하게 넣고 끓여 우렁된장을 만든다. 그릇에 밥을 담고 우렁된장과 각종 채소 등을 넣어 비벼 먹는다.',
    name_en: 'Freshwater Snail Soybean PasteBibimbap',
    description_en:
      'The essential ingredient of this dish is ureongdoenjang, which is soybean paste boiled with chopped onion, green pepper, mushrooms, and freshwater snails in rice water. This is then served with a bowl of rice topped with a variety of vegetables.',
    name_ja: 'タニシ入りテンジャンビビンバ',
    description_ja:
      'たまねぎや青唐辛子、きのこ、タニシの身などを大きめのみじん切りにし、味噌で和えたあと、米の研水をひたひたに入れて煮てウロンデンジャン(タニシ味噌)を作る。器にご飯を盛り、タニシ味噌と色々な野菜を入れて混ぜて食べる。',
    name_zh: '田螺大酱拌饭',
    description_zh:
      '将洋葱、尖椒、蘑菇、田螺肉等剁碎成较大的块儿状后用大酱搅拌，再倒入少量的淘米水熬成浓稠的田螺酱汤。用大碗盛适量的米饭，将适当的田螺大酱汤和各种蔬菜放在米饭上拌着吃即可。',
    name_zh2: '田螺大醬拌飯',
    description_zh2:
      '將洋蔥、田螺肉等剁成塊狀後用大醬攪拌，再倒入水熬成濃稠醬狀，田螺調味大醬就完成了。將田螺調味大醬倒入米飯中，放上蔬菜一起拌著吃。',
  },
  {
    id: 53,
    category: '밥 [Bap]',
    name: '우렁쌈밥',
    pronounce: 'Ureongssambap',
    description:
      '쌈 채소에 우렁이를 넣어 만든 강된장과 밥을 올려 먹는 음식이다. 우렁이의 쫄깃쫄깃한 맛이 된장과 잘 어울린다.',
    name_en: 'Freshwater Snail Leaf Wraps and Rice',
    description_en:
      'This dish is made by wrapping cooked rice in leafy vegetables with gangdoenjang (seasoned soybean paste) made with freshwater snails. The chewy texture and flavor of freshwater snails go particularly well with doenjang (soybean paste).',
    name_ja: 'タニシ入り野菜包みご飯',
    description_ja:
      'タニシ入りのカンテンジャンとご飯を野菜で巻いて食べる料理。タニシの歯ごたえとテンジャンがよく合う。',
    name_zh: '田螺包饭',
    description_zh:
      '用蔬菜把米饭和以田螺为主要材料的调味大酱一起包着吃即可。有嚼劲的田螺和调味酱的味道可谓是相得益彰。',
    name_zh2: '田螺包飯',
    description_zh2:
      '用蔬菜把米飯和以田螺為主要材料的調味大醬一起包著吃即可。勁道的田螺與調味醬一起吃非常美味。',
  },
  {
    id: 54,
    category: '밥 [Bap]',
    name: '육회돌솥비빔밥',
    pronounce: 'Yukhoedolsotbibimbap',
    description:
      '뜨거운 돌솥에 밥을 담고, 각종 나물과 소고기육회를 얹은 뒤 고추장에 비벼 먹는 음식이다. 돌솥의 열기가 유지되어 다 먹을 때까지 따뜻한 상태로 즐길 수 있다.',
    name_en: 'Beef Tartare Hot Stone Pot Bibimbap',
    description_en:
      'This is a type of bibimbap served in a sizzling-hot stone pot. The rice, mixed with a variety of colorful vegetables and beef tartare, remains piping hot until the end of the meal.',
    name_ja: 'ユッケ石焼きビビンバ',
    description_ja:
      '熱した石の器にご飯を盛り、ナムルと牛肉ユッケをのせた後、コチュジャンを和えて混ぜて食べる。石の器で温度が維持され、食べ終わるまで温かい料理が楽しめる。',
    name_zh: '生牛肉石锅拌饭',
    description_zh:
      '在烧热的石锅中放入米饭，再放入各种凉拌菜和生拌牛肉，用辣椒酱拌着吃即可。石锅的独特属性可以一直维持温热直到吃完。',
    name_zh2: '生牛肉石鍋拌飯',
    description_zh2:
      '用熱石鍋盛飯，再放入各種涼拌菜與生拌牛肉，放點辣椒醬一起拌著吃。石鍋能夠很好地維持熱量，可以全程享用熱騰騰的飯菜。',
  },
  {
    id: 55,
    category: '밥 [Bap]',
    name: '육회비빔밥',
    pronounce: 'Yukhoebibimbap',
    description:
      '고슬고슬하게 잘 지은 밥 위에 제철 나물과 싱싱한 육회를 무쳐서 올리고 양념간장에 비벼 먹는다. 육회는 신선하고 기름기가 적은 우둔살이나 홍두깨살을 이용하는 것이 좋다.',
    name_en: 'Beef Tartare Bibimbap',
    description_en:
      'This is a bowl of rice topped with seasonal namul (seasonedvegetables) and fresh yukhoe (chopped raw beef) and served with seasoning. Lean freshrump or eye of round is the preferred cut for this dish.',
    name_ja: 'ユッケビビンバ',
    description_ja:
      'ほどよく炊いたご飯の上に、旬の山菜と新鮮なユッケ(肉の刺身)を和えてのせ、ヤンニョムカンジャン(薬味醤油)を入れて混ぜて食べる。ユッケは新鮮なもので脂が少ない臀部や外もも肉を使うのが良い。',
    name_zh: '生牛肉拌饭',
    description_zh:
      '焖得软硬适度的米饭上面放一些时令野菜和新鲜的生拌牛肉，再加入调味酱油拌着吃。生拌牛肉选材要新鲜，最好是精瘦的牛臀肉或臀尖肉。',
    name_zh2: '生牛肉拌飯',
    description_zh2: '燜得軟硬適中的米飯上面放新鮮的生拌牛肉和時令野菜，再加入調味醬拌著吃。',
  },
  {
    id: 56,
    category: '밥 [Bap]',
    name: '잡곡밥',
    pronounce: 'Japgokbap',
    description:
      '멥쌀에 콩, 수수, 팥 등 잡곡을 섞거나 잡곡만으로 지은 밥이다. 찹쌀에 기장, 찰수수, 검정콩, 붉은팥의 다섯 가지 곡식을 섞어 지은 오곡밥도 잡곡밥의 일종이다.',
    name_en: 'Steamed Multi-grain Rice',
    description_en:
      'Bap made with various grains such as rice, beans, red beans, and millet. One version of Japgokbap is Ogokbap (five-grain rice), a combination of sweet rice, glutinous millet, glutinous sorghum, black beans, and sweet red beans.',
    name_ja: '雑穀ご飯',
    description_ja:
      'うるち米に豆、きび、小豆などの雑穀を混ぜたり、雑穀だけで炊いたご飯。もち米、きび、高きび、黒豆、小豆を混ぜた五穀ご飯も、この雑穀ご飯のひとつ。',
    name_zh: '杂粮饭',
    description_zh:
      '在粳米中掺入大豆、高粱、红豆等杂粮或光用杂粮焖的饭。五谷饭也是杂粮饭的一种，是在糯米中掺入黍子、粘高粱、黑豆、红豆等五种谷物焖煮的饭。',
    name_zh2: '雜糧飯',
    description_zh2:
      '在粳米中摻入大豆、高粱、紅豆等多種雜糧煮成的飯。 不僅味道香甜，而且營養價值甚高。',
  },
  {
    id: 57,
    category: '밥 [Bap]',
    name: '잡채덮밥',
    pronounce: 'Japchaedeopbap',
    description:
      '화합의 의미가 담겨있는 잡채는 한국인의 잔칫상에 반드시 올라오는 음식이다. 다양한 채소와 당면이 잘 어우러져 맛을 내며 밥 위에 올려서 양념장을 곁들여 비벼먹는다.',
    name_en: 'Stir-fried Glass Noodles and Vegetables with Rice',
    description_en:
      'Symbolizing harmony, japchae, a variety of cooked vegetables stir-fried with cooked glass noodles, is one of the most common festive dishes served at parties or on special occasions. This dish consists of rice topped with japchae, and is served on a plate with seasoning.',
    name_ja: 'チャプチェ丼',
    description_ja:
      '和合という意味が込められたチャプチェは、韓国で祝宴の膳に必ずのぼる料理だ。多様な種類の野菜と春雨がよく調和している。ご飯の上にのせてヤンニョムジャン（たれ）を添えて混ぜて食べる。',
    name_zh: '什锦炒粉丝盖饭',
    description_zh:
      '什锦炒菜具有和睦融洽的吉祥寓意，是韩国人喜庆家宴上必不可少的食物。各种蔬菜和粉条的搭配使口感和味道恰到好处，将菜放在米饭上面，配上调味酱拌着吃即可。',
    name_zh2: '什錦拌粉絲蓋飯',
    description_zh2: '採用各種蔬菜和肉、粉絲，加入醬油調料炒好什錦拌粉絲後放在米飯上面拌著吃。',
  },
  {
    id: 58,
    category: '밥 [Bap]',
    name: '장국밥',
    pronounce: 'Janggukbap',
    description:
      '먼저 소고기를 푹 삶은 후, 무와 고사리 등을 넣고 오래 끓여 간을 하여 장국을 끓인다. 장국에 밥을 말아 내면 장국밥이다. 뚝배기에 식은 밥을 담고 뜨거운 장국으로 토렴하여 내면 별다른 반찬 없이도 한 끼가 거뜬하다.',
    name_en: 'Beef and Rice Soup',
    description_en:
      'Jangguk is a beef soup made by thoroughly boiling beef with radish and bracken at low heat for a long time. Janggukbap is made by adding cooked rice to jangguk. Hot jangguk poured over cold cooked rice in a ttukbaegi makes a filling meal, with or without side dishes.',
    name_ja: 'チャンクッパ',
    description_ja:
      '牛肉をじっくり茹でた後、大根とワラビなどを入れてさらに煮込み、味を調えてスープを作る。そこにご飯を入れて食べる。おかずがなくても、土鍋に冷たいご飯を入れ、熱いスープをかけるだけで十分な食事になる。',
    name_zh: '牛肉汤饭',
    description_zh:
      '先将牛肉煮烂，放入萝卜和蕨菜等材料长时间熬煮，并调味做成大酱清汤，最后将米饭泡在清汤里就能做成大酱清汤饭。先用砂锅盛适量的凉饭，然后用滚烫的大酱清汤将凉饭烫热，热乎乎的汤饭量足味美，无需加任何小菜，就能让人吃得很满足。',
    name_zh2: '牛肉湯飯',
    description_zh2:
      '先把牛肉煮熟後放入蘿蔔與蕨菜等，然後長時間熬煮並調味做成牛肉湯。把米飯用大醬清湯泡起來就是牛肉湯飯。用砂鍋盛好飯，倒入滾燙的牛肉湯浸潤一下，即使沒有別的菜也能吃得非常滿足。',
  },
  {
    id: 59,
    category: '밥 [Bap]',
    name: '장어덮밥',
    pronounce: 'Jangeodeopbap',
    description:
      '손질한 장어를 초벌구이하거나 찜통에 살짝 찐 후 간장, 파, 마늘 등으로 만든 양념장을 발라 가며 노릇하게 굽는다. 그릇에 밥을 담고 장어구이를 올린 뒤 생강 채와 무순을 얹는다.',
    name_en: 'Stir-fried Eel with Rice',
    description_en:
      'This is a bowl of rice topped with grilled eel and garnished with julienned ginger and radish sprouts. The eel is first half-grilled and half-steamed before being brushed with a sauce made from soy sauce.',
    name_ja: 'ウナギ丼',
    description_ja:
      'ウナギを下焼きするか、蒸し器で軽く蒸してから醤油、ねぎ、にんにくなどで合わせたたれを塗りながらこんがりと焼く。器にご飯を盛り、焼いたウナギをのせ、細切りにした生姜とカイワレ大根を添える。',
    name_zh: '鳗鱼盖饭',
    description_zh:
      '将鳗鱼收拾洗净后，先烤一下或用蒸锅蒸一下，然后把用酱油、葱蒜等制成的调味酱抹在躯体上，边抹边烤，直到外皮焦脆。大碗中盛些米饭，上面放烤熟的鳗鱼，最后放上姜丝和萝卜芽。',
    name_zh2: '鰻魚蓋飯',
    description_zh2:
      '把清理好的鰻魚大概烤熟或稍微蒸一下，然後抹上用醬油和蔥蒜做的調味醬烤成焦黃色。盛一碗米飯，放上烤鰻魚和生薑絲，以及蘿蔔芽。',
  },
  {
    id: 60,
    category: '밥 [Bap]',
    name: '전복돌솥밥',
    pronounce: 'Jeonbokdolsotbap',
    description:
      '돌솥에 쌀, 육수, 전복 내장을 간 물을 넣고 밥을 지은 후 전복을 썰어 올린 음식이다. 전복 내장 특유의 향과 고소한 밥맛이 매력이다.',
    name_en: 'Abalone Hot Stone Pot Rice',
    description_en:
      'Rice cooked with abalone intestines and broth in a stone pot and topped with sliced abalone. The distinctive flavor of abalone intestines goes particularly well with rice.',
    name_ja: 'アワビの釜飯',
    description_ja:
      '釜に米、出し汁、アワビの内臓が入った水を加えて炊いた後、アワビを切ってのせたもの。アワビの内臓特有の香りと風味がしみ込んだご飯は絶品。',
    name_zh: '鲍鱼石锅饭',
    description_zh:
      '石锅中放入大米、高汤和鲍鱼内脏磨成的水焖煮，最后放上切成片的鲍鱼即可。鲍鱼特有的鲜香和大米饭甘甜的味道令人垂涎三尺。',
    name_zh2: '鮑魚石鍋飯',
    description_zh2:
      '石鍋裡放入大米、高湯和攪碎的鮑魚內臟做成米飯，吃的時候放上切成片的鮑魚即可。鮑魚石鍋飯帶有鮑魚內臟特有的清香，吃起來非常美味。',
  },
  {
    id: 61,
    category: '밥 [Bap]',
    name: '전주비빔밥',
    pronounce: 'Jeonjubibimbap',
    description:
      '밥에 여러 가지 나물류와 소고기 육회를 얹어 먹는 전라북도 전주 지역의 비빔밥이다. 전주비빔밥에서 맛을 내는 가장 중요한 포인트가 콩나물과 육회이기 때문에 ‘전주 콩나물 육회비빔밥’이라고도 불렸다.',
    name_en: 'Jeonju Bibimbap',
    description_en:
      'This is a type of bibimbap topped with a variety of colorful vegetables and beef tartare that is widely popular across the Jeonju area of North Jeolla Province. The dish has also been referred to as “jeonju bean sprout beef tartare bibimbap,” as the bean sprout and beef tartare are the ingredients that make jeonjubibimbap so unique.',
    name_ja: 'チョンジュビビンバ',
    description_ja:
      'ご飯に様々なナムルと牛肉ユッケをのせて食べるチョンジュ地域のビビンバ。チョンジュビビンバで味の決め手となるのは豆もやしとユッケ。そのため、「チョンジュ豆もやしユッケビビンバ」と呼ばれることもある。',
    name_zh: '全州拌饭',
    description_zh:
      '将多种凉拌菜及生拌牛肉跟米饭一起拌着吃，是全罗北道全州地区的特色拌饭。全州拌饭的食材中左右味道好坏的关键食材是豆芽和生拌牛肉，因此也叫做“全州豆芽生拌牛肉拌饭”。',
    name_zh2: '全州拌飯',
    description_zh2:
      '全州拌飯是把多種涼拌菜與生拌牛肉跟米飯一起拌著吃的美食。在全州拌飯裡最關鍵的食材是豆芽與生拌牛肉，所以又叫做「全州豆芽生拌牛肉拌飯」。',
  },
  {
    id: 62,
    category: '밥 [Bap]',
    name: '제육덮밥',
    pronounce: 'Jeyukdeopbap',
    description:
      '얇게 썬 돈육을 고추장 양념하여 채소와 함께 볶아 국물이 자작하게 있도록 하여 밥 위에 올린다. 특별한 반찬 없이도 한 끼 식사로 충분하여 바쁜 직장인들에게 인기가 좋다.',
    name_en: 'Spicy Stir-fried Pork with Rice',
    description_en:
      'This dish consists of thinly sliced pork stir-fried with vegetables and gochujang (red chili paste) and served on rice. It is popular among busy office workers as the dish is large enough that is doesn’t require side dishes.',
    name_ja: '豚肉炒め丼',
    description_ja:
      '薄切りの豚肉をコチュジャンで味付けして野菜と一緒に炒め、汁と一緒にご飯にかける。特別なおかずがなくても立派な食事になり、忙しい会社員に人気。',
    name_zh: '辣炒猪肉盖饭',
    description_zh:
      '将切成薄片的猪肉用辣椒酱腌制后，放入炒锅和蔬菜一起翻炒，待渗出一些汤汁后盛出来放在米饭上面。因为不需要搭配其他小菜，美味又饱腹，因此很受忙碌的上班族喜爱。',
    name_zh2: '辣炒豬肉蓋飯',
    description_zh2: '將薄豬肉和各種蔬菜用辣椒醬調料攪拌後辣炒的就是辣炒豬肉，蓋在米飯上吃。',
  },
  {
    id: 63,
    category: '밥 [Bap]',
    name: '제육비빔밥',
    pronounce: 'Jeyukbibimbap',
    description:
      '제육을 얇게 썰고 고추장 양념을 하여 제육볶음을 만들고 여러 가지 나물을 곁들여 밥에 비벼 먹는 음식이다. 저렴한 가격으로 반찬 없이 식사대용으로 인기가 좋다.',
    name_en: 'Spicy Pork Bibimbap',
    description_en:
      'This dish is made up of thinly sliced pork that is stir-fried with gochujang and then served on rice with a variety of vegetables. It is a popular, reasonably priced meal that can be served without side dishes.',
    name_ja: '豚肉炒めビビンバ',
    description_ja:
      '豚肉を薄く切り、コチュジャンで味付けした豚肉炒めを、いろいろな野菜と一緒にご飯にのせてかき混ぜて食べる料理。手頃な価格で、他のおかずがなくてもお腹いっぱいになる。',
    name_zh: '辣炒猪肉拌饭',
    description_zh:
      '将切成薄片的猪肉和各种蔬菜用辣椒酱腌制后放入炒锅中翻炒至熟，然后配上各种蔬菜拌米饭吃。不仅价格低廉，而且不需要配其它小菜，完全可作为一顿便宜又美味的正餐。',
    name_zh2: '辣炒豬肉拌飯',
    description_zh2: '用辣椒醬調料炒出的豬肉(辣炒豬肉)配上各種素菜拌著吃的飲食。',
  },
  {
    id: 64,
    category: '밥 [Bap]',
    name: '제육쌈밥',
    pronounce: 'Jeyukssambap',
    description:
      '제육볶음을 밥과 함께 쌈 채소에 싸 먹는 음식이다. 제육볶음은 돼지고기를 양파, 당근 등을 넣고 매콤하게 볶아낸 음식으로 밥반찬으로 좋다.',
    name_en: 'Spicy Stir-fried Pork, Leaf Wraps and Rice',
    description_en:
      'This food is prepared by wrapping jeyukbokkeum and cooked rice in leafy vegetables. Jeyubokkeum is a spicy dish made with sliced pork stir-fried with onion and carrot. It is popular both as a side dish and as a main dish.',
    name_ja: '豚肉炒め野菜包みご飯',
    description_ja:
      '豚肉炒めをご飯と一緒に野菜で巻いて食べる料理。豚肉炒めは豚肉をたまねぎ、にんじんなどと辛目に炒めるため、ご飯との相性がいい。',
    name_zh: '辣炒猪肉包饭',
    description_zh:
      '用蔬菜把辣炒猪肉和米饭一起包起来吃即可。辣炒猪肉把猪肉跟洋葱、胡萝卜等一起翻炒，味道香辣可口，是很好的一道下饭菜。',
    name_zh2: '辣炒豬肉包飯',
    description_zh2:
      '用蔬菜把辣炒豬肉與米飯一起包起來吃。辣炒豬肉是把豬肉跟洋蔥、胡蘿蔔等一起炒製的香辣炒菜，是非常美味的下飯菜。',
  },
  {
    id: 65,
    category: '밥 [Bap]',
    name: '주먹밥',
    pronounce: 'Jumeokbap',
    description:
      '양념한 밥을 한 김 식힌 후 꾹꾹 뭉쳐서 손으로 주물러 먹기 좋게 주먹 모양으로 만든 밥이다. 재료와 모양에 따라 불고기주먹밥, 김치주먹밥, 견과류주먹밥, 야채쌈주먹밥 등이 있다.',
    name_en: 'Riceballs',
    description_en:
      'This is made by shaping a handful of cooked rice, seasoned with various ingredients, into a ball. Jumeokbap (riceballs) can be made with a variety of ingredients, such as bulgogi, kimchi, nuts, and leafy vegetables.',
    name_ja: 'おにぎり',
    description_ja:
      '味付けしたご飯を少し冷まし、食べやすくこぶしの形に握ったご飯。材料や形によってプルゴギおにぎりやキムチおにぎり、ナッツおにぎり、野菜サムおにぎりなどがある。',
    name_zh: '饭团',
    description_zh:
      '将调味后的米饭放置一会儿冷却，待散热后将米饭放在手心上用力握压，做成适当大小的圆球状。可按照不同的食材和形状，做烤肉饭团、辛奇饭团、坚果饭团、蔬菜包菜饭团等。',
    name_zh2: '飯糰',
    description_zh2: '將調味後的米飯做成多種形狀，可以便利地用手拿著吃。',
  },
  {
    id: 66,
    category: '밥 [Bap]',
    name: '진주비빔밥',
    pronounce: 'Jinjubibimbap',
    description:
      '고슬하게 지은 밥 위에 데친 나물을 잘게 썰어서 국간장, 깨소금, 참기름으로 무치고, 육회를 가운데 올려 엿고추장에 비벼 먹는다. 원래는 바지락살을 넣고 끓인 보탕국을 내지만, 선지국과 함께 내기도 한다.',
    name_en: 'Jinju Bibimbap',
    description_en:
      "Fluffy white rice topped with beef tartare and surrounded with vegetables that have been chopped and seasoned with soy sauce, sesame seeds, and sesame oil. Mixed with gochujang (red chili paste) at the table, this dish was originally served with a clam soup, but now the soup is often replaced with seonjiguk (a soup with coagulated pig's blood).",
    name_ja: 'チンジュビビンバ',
    description_ja:
      'ほどよく炊けたご飯の上に、クッカンジャン、ごま塩、ごま油で和えた細切りの茹でナムルを盛り付け、中央にユッケをのせる。そこにヨッコチュジャンを加えて混ぜて食べる。本来、あさりの身を入れて煮たポタングク（テンジャングク）を添えて食べるが、牛の血入りスープと食べることもある。',
    name_zh: '晋州拌饭',
    description_zh:
      '晋州拌饭用米饭要煮得不硬不软，将适量熟菜碎、韩式汤酱油、芝麻盐、香油撒在米饭上，中间放生拌牛肉，再加点糖稀辣椒酱拌着吃。一般配一碗用蛤蜊做的汤，也可以用牛血汤代替。',
    name_zh2: '晉州拌飯',
    description_zh2:
      '米飯燜得軟硬適中，素菜焯水後剁碎，加入淡醬油、芝麻鹽、香油攪拌後放在米飯上，中間放一些生拌牛肉，用加糖稀的辣椒醬拌著吃即可。正宗的晉州拌飯要配用蛤蜊肉熬的湯，有時也會配牛血湯。',
  },
  {
    id: 67,
    category: '밥 [Bap]',
    name: '참치김밥',
    pronounce: 'Chamchigimbap',
    description:
      '김밥의 기본 재료에 마요네즈에 버무린 참치를 함께 넣어 싼다. 젊은 층이 좋아하는 김밥이다.',
    name_en: 'Tuna Gimbap',
    description_en:
      'Gimbap with a filling of tuna mixed with mayonnaise, in addition to the basic ingredients. It is especially popular among young people.',
    name_ja: 'ツナキンパプ',
    description_ja:
      'キンパプの基本食材に加え、マヨネーズで和えたツナを入れて巻く若者に人気のキンパプ。',
    name_zh: '金枪鱼紫菜卷饭',
    description_zh:
      '用紫菜包饭的基本食材和以蛋黄酱搅拌的金枪鱼一起卷成的紫菜包饭，是最受年轻人喜爱的紫菜卷饭。',
    name_zh2: '金槍魚紫菜捲飯',
    description_zh2:
      '紫菜卷飯的基本食材加上蛋黃醬拌好的金槍魚一起卷成的紫菜卷飯，是最受年輕人喜愛的紫菜卷飯。',
  },
  {
    id: 68,
    category: '밥 [Bap]',
    name: '참치주먹밥',
    pronounce: 'Chamchijumeokbap',
    description:
      '참치 통조림의 기름을 빼고 마요네즈를 섞어 밥과 함께 한입 크기로 뭉쳐 만든 음식이다. 밥은 김 가루, 참기름, 깨, 소금 등으로 양념한다.',
    name_en: 'Tuna Rice Balls',
    description_en:
      'This dish is made by squeezing cooked rice into bite-sized balls with a filling of drained canned tuna and mayonnaise. The rice is then sprinkled with seaweed flakes and seasoned with sesame oil, sesame seeds, and salt.',
    name_ja: 'ツナおにぎり',
    description_ja:
      '油を切ったツナとマヨネーズをご飯に混ぜておにぎりにしたもの。きざみ海苔、ごま油、ごま、塩などで味付けしたご飯を使う。',
    name_zh: '金枪鱼饭团',
    description_zh:
      '将罐头装金枪鱼去油后放入蛋黄酱搅拌，再和米饭一起用力握成适合一口吃下的饭团。米饭用海苔粉、香油、芝麻、盐等调味。',
    name_zh2: '鮪魚飯糰',
    description_zh2:
      '將罐裝鮪魚去油後放入美乃滋攪拌，再和米飯一起用力捏成一口大小的圓飯團。米飯使用海苔粉、香油、芝麻、鹽等調味。',
  },
  {
    id: 69,
    category: '밥 [Bap]',
    name: '채소볶음밥',
    pronounce: 'Chaesobokkeumbap',
    description:
      '당근, 양파, 파프리카, 연근, 우엉, 브로콜리 등 각종 채소와 함께 밥을 넣고 기름에 볶아 만든 음식이다. 채소를 통해 식이섬유, 비타민, 무기질을 섭취할 수 있다.',
    name_en: 'Vegetable Fried Rice',
    description_en:
      'Fried rice with a variety of vegetables, such as carrot, onion, paprika, lotus root, burdock root, and broccoli. These vegetables provide fiber, vitamins, and minerals.',
    name_ja: '野菜チャーハン',
    description_ja:
      'にんじん、玉ねぎ、パプリカ、レンコン、ゴボウ、ブロッコリーなどの野菜とご飯を油で炒めて作ったもの。野菜から食物繊維やビタミン、ミネラルを摂ることができる。',
    name_zh: '蔬菜炒饭',
    description_zh:
      '将胡萝卜、洋葱、彩椒、莲藕、牛蒡、西兰花等各种蔬菜放入米饭，用油一起翻炒而成。可以摄取蔬菜中富含的膳食纤维、维生素和矿物质。',
    name_zh2: '蔬菜炒飯',
    description_zh2:
      '將胡蘿蔔、洋蔥、甜椒、蓮藕、牛蒡、青花菜等各種蔬菜加入米飯，一起用油翻炒。可以攝取蔬菜中豐富的膳食纖維、維生素、礦物質。',
  },
  {
    id: 70,
    category: '밥 [Bap]',
    name: '충무김밥',
    pronounce: 'Chungmugimbap',
    description:
      '통영의 대표적인 향토음식으로, 김에 싼 밥과 반찬을 따로 내는 것이 특징이다. 김에 흰밥만 넣어 손가락 만하게 싸고, 오징어무침과 무김치를 곁들여 낸다.',
    name_en: 'Chungmu Gimbap',
    description_en:
      'A local specialty of Tonyeong, chungmugimbap is finger-sized rolls of cooked rice wrapped in dried seaweed sheets and served with marinated squid and radish kimchi.',
    name_ja: 'チュンムキンパプ',
    description_ja:
      'トンヨンの代表的な郷土料理。のりを巻いたご飯と具が別々に出てくるのが特徴。のりにご飯だけをのせ、指くらいの太さに巻く。イカの和え物と大根キムチを添える。',
    name_zh: '忠武紫菜卷饭',
    description_zh:
      '统营地区的地方特色美食,最特别的一点是将用紫菜卷好的饭和菜分别端上桌。将米饭用紫菜卷成手指粗的饭卷，然后配着凉拌鱿鱼和萝卜辛奇一起吃即可。',
    name_zh2: '忠武紫菜捲飯',
    description_zh2:
      '忠武紫菜卷飯是統營的代表性特色美食，把用紫菜卷好的飯和菜分別端上桌。把米飯用紫菜卷成手指粗的飯卷，然後跟涼拌魷魚和蘿蔔辛奇一起吃即可。',
  },
  {
    id: 71,
    category: '밥 [Bap]',
    name: '치즈김밥',
    pronounce: 'Cheese Gimbap',
    description:
      '김밥의 기본 재료에 체다 치즈나 크림치즈 등을 넣어 싸는 김밥이다. 특히 아이들과 여성들이 좋아한다.',
    name_en: 'Cheese Gimbap',
    description_en:
      'Gimbap with a filling of cheddar cheese or cream cheese, in addition to the basic ingredients. It is especially popular among children and women.',
    name_ja: 'チーズキンパプ',
    description_ja:
      'キンパプの基本食材にチェダーチーズやクリームチーズなどを入れて巻くキンパプ。特に子どもや女性に人気がある。',
    name_zh: '奶酪紫菜卷饭',
    description_zh:
      '用紫菜包饭的基本食材和切达奶酪或奶油奶酪等一起卷成的紫菜卷饭，尤其受儿童和女性的喜爱。',
    name_zh2: '奶酪紫菜捲飯',
    description_zh2:
      '紫菜卷飯的基本食材加上切達乳酪和奶油乳酪等一起卷成的紫菜卷飯，尤其受婦孺的喜愛。',
  },
  {
    id: 72,
    category: '밥 [Bap]',
    name: '콩나물국밥',
    pronounce: 'Kongnamulgukbap',
    description:
      '삶은 콩나물과 밥에 육수를 붓고 끓인 음식으로, 새우젓으로 간을 맞춰 먹는다. 해산물을 우린 국물을 사용하면 맛이 더욱 개운하다.',
    name_en: 'Bean Sprout and Rice Soup',
    description_en:
      'Bean sprouts and rice simmered together in a broth and seasoned with salted shrimp at the table. Using a seafood stock will yield aneven richer, more flavorful dish.',
    name_ja: '豆もやしクッパ',
    description_ja:
      'ゆがいた豆もやしとご飯にだし汁を加えて煮たもので、アミの塩辛で味を加減して食べる。魚介類でだしを取るとといっそうさっぱりした口当たりになる。',
    name_zh: '豆芽汤饭',
    description_zh:
      '将煮熟的黄豆芽和米饭加入高汤煮熟，再加入虾酱食用。使用海鲜高汤味道更加爽口美味。',
    name_zh2: '豆芽湯飯',
    description_zh2:
      '在豆芽湯泡飯吃的飲食，用蝦醬調味，其爽口味道絕佳。豆芽湯飯是易做好吃的「醒酒湯」。',
  },
  {
    id: 73,
    category: '밥 [Bap]',
    name: '콩나물밥',
    pronounce: 'Kongnamulbap',
    description:
      '솥에 쌀을 안친 뒤 그 위에 콩나물을 고루 얹어 지어낸 밥이다. 밥이 완성되면 넓은 그릇에 담아 고소한 맛의 양념간장을 곁들여 비벼 먹는다.',
    name_en: 'Bean Sprout Rice',
    description_en:
      'This dish is made by cooking rice and bean sprouts in a pot. When cooked, the rice mixture is placed in a bowl and served with soy sauce.',
    name_ja: '豆もやしご飯',
    description_ja:
      '釜に米を入れ、その上にもやしを入れて炊いたご飯。ご飯が炊き上がったら、大きめの器に盛り、香ばしいヤンニョムガンジャン(薬味醤油)を入れて混ぜて食べる。',
    name_zh: '豆芽饭',
    description_zh:
      '在大米上铺一层豆芽焖出来的饭，将煮熟的饭盛出来放入宽口的大碗里，再加入鲜香的调味酱拌着吃即可。',
    name_zh2: '豆芽飯',
    description_zh2: '在鍋裡放入大米後，鋪上一層豆芽後燜出來的飯。製作調味醬后拌著吃。',
  },
  {
    id: 74,
    category: '밥 [Bap]',
    name: '한우국밥',
    pronounce: 'Hanugukbap',
    description:
      '국거리용 한우를 달달 볶다 물을 붓고 무, 콩나물, 대파 등을 넣어 푹 끓인 고깃국에 밥을 말아 먹는 요리다. 겨울철에 몸을 따뜻하게 하는 음식이다.',
    name_en: 'Korean Beef and Rice Soup',
    description_en:
      'This dish is made by sautéing Korean beef parts for soup; adding water, radish, bean sprouts, and green onion; and letting the soup simmer. It is served with rice that can be put into the thick beef broth. The dish helps keep the body warm in winter.',
    name_ja: '韓牛クッパ',
    description_ja:
      'スープ用の韓牛を炒めた後、水を加えて大根、豆もやし、長ねぎなどを入れてじっくりと煮込む。そのスープにご飯を入れて食べるもので、寒い冬に体を温める効果がある。',
    name_zh: '韩牛汤饭',
    description_zh:
      '将汤料韩牛炒熟后加水，再放入萝卜、豆芽、大葱等熬出浓汤泡饭吃。冬季吃还可以暖身。',
    name_zh2: '韓牛湯飯',
    description_zh2:
      '將湯料用韓牛炒熟後加水，放入蘿蔔、豆芽、大蔥等熬制成肉湯，再加入米飯來吃。冬季吃有暖身的功效。',
  },
  {
    id: 75,
    category: '밥 [Bap]',
    name: '헛제삿밥',
    pronounce: 'Heotjesatbap',
    description:
      '제사를 올리지 않고 먹는 가짜 제삿밥이다. 평소 제사상에 올렸던 탕국과 쇠고기, 각종 전, 고사리, 도라지, 무나물 등을 간장에 비벼 먹는다.',
    name_en: 'Bibimbap with Soy Sauce',
    description_en:
      'Literally meaning “fake ancestral rites meal,” heotjesabap is rice mixed with various namul (vegetable salads) and jeon (batter-fried dishes) that are typically prepared for Korean ancestral rites ceremonies. It is a type of bibimbap served with soup.',
    name_ja: 'カンジャンビビンバ',
    description_ja:
      '祭祀ではない時に食べる祭祀用ご飯。通常、祭祀の際に食べるスープ、牛肉、チヂミ、ワラビ、桔梗の根、大根のナムルなどをカンジャンで和えて食べる。',
    name_zh: '祭祀菜拌饭',
    description_zh:
      '顾名思义，饭菜是祭祀饭菜，但不进行祭祀的假祭祀饭，将平时摆上祭桌的汤、牛肉、各种煎饼、蕨菜、桔梗、凉拌萝卜丝等用酱油拌着吃即可。',
    name_zh2: '祭祀菜拌飯',
    description_zh2:
      '顧名思義，在非祭祀日吃的祭祀菜拌飯。把平時擺上祭祀桌上的牛肉、各種煎餅、蕨菜、桔梗、涼拌蘿蔔等，用醬油伴著吃即可。',
  },
  {
    id: 76,
    category: '밥 [Bap]',
    name: '황태구이덮밥',
    pronounce: 'Hwangtaeguideopbap',
    description:
      '황태를 갈아 만든 보푸라기를 넣고 지은 밥에 취나물을 섞어 담아 낸 다음 양념장을 발라 구운 황태를 잘게 찢어 얹은 후 갖은 양념으로 비벼 먹는다.',
    name_en: 'Grilled Dried Pollack with Rice',
    description_en:
      'This is rice cooked with dried pollack fluffs and mixed with aster leaf salad. The dried pollack is brushed with a sauce and then grilled and shredded. It is served with rice and seasonings that can be mixed at the table.',
    name_ja: '焼きスケトウダラ丼',
    description_ja:
      '干しスケトウダラの削り節を入れて炊いたご飯にシラヤマギクを混ぜて盛り付け、たれを付けて焼いた干しスケトウダラを食べやすい大きさにしてのせ、薬味を加えて混ぜて食べる。',
    name_zh: '烤干明太鱼盖饭',
    description_zh:
      '干明太鱼绞碎成毛绒状，和大米一起放入锅中煮成米饭，然后将米饭和马蹄菜一起装入盘中，干明太鱼抹上调味酱烤熟后撕成细条状放在米饭上面，用各种调味酱拌着吃。',
    name_zh2: '烤幹明太魚蓋飯',
    description_zh2:
      '放入幹明太魚鬆煮一鍋飯，盛上一碗飯，米飯上放馬蹄菜和刷料烤製的幹明太魚絲，再用各種調味汁拌勻食用。',
  },
  {
    id: 77,
    category: '밥 [Bap]',
    name: '회덮밥',
    pronounce: 'Hoedeopbap',
    description:
      '각종 생선회를 썰어 채소와 함께 밥 위에 얹고 양념한 초고추장으로 간을 맞춘다. 비빔밥처럼 모든 재료를 섞어 먹는 것으로 참치회덮밥, 굴회덮밥 등 종류가 다양하다.',
    name_en: 'Raw Fish Bibimbap',
    description_en:
      'This is a bowl of rice topped with a variety of sliced raw fish and vegetables. Seasoned chogochujang (red chili paste with vinegar) is served along with it. Similar to bibimbap, this dish can be made with tuna, oyster, or other raw seafood.',
    name_ja: '刺身丼',
    description_ja:
      '色々な刺身を切って野菜と一緒にご飯の上にのせ、味付けした酢コチュジャンで味をととのえる。ビビンバのように色々な材料を混ぜて食べる料理で、マグロ刺身丼やカキ刺身丼など色々な種類がある。',
    name_zh: '生鱼片盖饭',
    description_zh:
      '将各种生鱼片切成小块儿，连同 各种蔬菜一起放在米饭上，再加入调味的酸辣 酱调节咸淡。吃法跟拌饭相同，种类有金枪鱼 拌饭，生蚝拌饭等多种。',
    name_zh2: '生魚片蓋飯',
    description_zh2:
      '在米飯上放入新鮮生魚片和蔬菜，加入酸辣醬調料拌著吃的酸甜美味拌飯。生魚片可以使用鮪魚或左口魚、鮭魚等多種類型。',
  },
  {
    id: 78,
    category: '죽 [Juk]',
    name: '게살죽',
    pronounce: 'Gesaljuk',
    description:
      '냄비에 참기름을 두르고 불린 쌀을 넣어 달달 볶다가 육수를 넣고, 마지막에 게살을 넣어 한소끔 끓인다. 부드러운 맛이 일품이고, 아이들 성장에도 좋다.',
    name_en: 'Crab Porridge',
    description_en:
      'This crab meat porridge is made by pan-frying presoaked short grain rice in a pot greased with sesame oil and then boiling in broth. The crab meat is added at the end. It is both delicious and nutritious.',
    name_ja: 'カニ肉粥',
    description_ja:
      '鍋にごま油をひき、水につけた米を入れて炒る。そこに出し汁を加え、最後にカニ肉入れて一煮立ちさせる。やさしい味が絶妙で、成長期の子どもにもおすすめ 。',
    name_zh: '蟹肉粥',
    description_zh:
      '锅中倒入些许香油，放入提前泡好的大米煸炒一会儿，再倒入高汤煮沸，最后放入蟹肉继续熬煮片刻。蟹肉粥口感柔滑，还有助于孩子的生长发育。',
    name_zh2: '蟹肉粥',
    description_zh2:
      '鍋裡倒入香油，放入提前泡好的大米煸炒幾下，再放入高湯煮沸，最後放入蟹肉煮沸片刻。蟹肉粥口感柔和，有助於孩子們的發育成長。',
  },
  {
    id: 79,
    category: '죽 [Juk]',
    name: '녹두죽',
    pronounce: 'Nokdujuk',
    description:
      '녹두를 삶아서 체에 걸러 가라앉힌 다음 윗물만 따라내어 불린 쌀을 넣고 쌀알이 퍼질 때까지 끓인 후 가라앉힌 녹두앙금을 넣고 잘 어우러지도록 끓여 소금으로 간한 죽이다.',
    name_en: 'Mung Bean Porridge',
    description_en:
      'This porridge is made by simmering rice in liquid strained from boiled mung beans until the rice forms a slurry. The mung bean sediment is then added and thoroughly mixed with the rice and boiled again. Season with a dash of salt before serving.',
    name_ja: '緑豆粥',
    description_ja:
      '緑豆を茹で、濾した後、上澄みだけをすくったもので米をよく炊きぶえするまで炊く。そこに沈殿した緑豆を加え、よく混ぜ合わせて塩で味を調えた粥。',
    name_zh: '绿豆粥',
    description_zh:
      '绿豆煮熟，用筛子过滤，待沉淀后，将上面的水倒出来，加入浸泡过的大米，煮至米粒开花，再加入绿豆沙一起熬煮，最后用盐调味即可。',
    name_zh2: '綠豆粥',
    description_zh2:
      '將綠豆煮熟後用漏勺撈出，待煮豆水沉澱後輕輕倒出上面清湯，把提前泡好的大米放入清湯裡煮到大米開花，然後放入沉澱的綠豆澱粉倒進去邊攪邊煮，最後用鹽調味即可。',
  },
  {
    id: 80,
    category: '죽 [Juk]',
    name: '누룽지죽',
    pronounce: 'Nurungjijuk',
    description:
      '냄비에 잘게 부순 누룽지를 넣고 물을 넉넉하게 부어 끓인다. 센 불에서 끓이다 약한 불로 줄여 누룽지를 충분히 끓여 만든다. 김치나 무말랭이 등의 반찬을 곁들여 먹는다.',
    name_en: 'ScorchedRice Porridge',
    description_en:
      'This dish is made by boiling finely crushed scorched rice in plenty of water. When it boils, the heat is reduced to let it simmer for a long time. It is served with side dishes, such as kimchi and dried radish salad.',
    name_ja: 'おこげ粥',
    description_ja:
      '鍋に細かく砕いたおこげを入れ、たっぷりの水を注いて煮る。強火で加熱し、沸騰したら弱火でじっくり火にかけて作る。キムチや切り干し大根などのおかずを添えて食べると相生抜群。',
    name_zh: '锅巴粥',
    description_zh:
      '锅里放入切碎的锅巴，添上足够多的水后煮沸。先用大火煮，然后改小火继续熬煮而成。搭配辛奇、凉拌萝卜干等小菜一起吃。',
    name_zh2: '鍋粑粥',
    description_zh2:
      '在鍋裡放入切碎的鍋粑，再加入足夠的水煮沸。先用大火煮，然後轉小火充分熬煮而成。搭配辛奇、蘿蔔乾等小菜一起吃。',
  },
  {
    id: 81,
    category: '죽 [Juk]',
    name: '단팥죽',
    pronounce: 'Danpatjuk',
    description:
      '팥을 무르게 삶아 곱게 으깨고 체에 밭쳐 웃물에 쌀을 넣고 끓이다가 부드러워지면 앙금을 마저 넣고 끓인 후 설탕을 넣은 음식이다. 찹쌀가루로 만든 새알심을 넣어 먹는 겨울철 별미이다.',
    name_en: 'Sweet Red Bean Porridge',
    description_en:
      'This dish is made by boiling rice in a liquid strained from boiled and finely mashed red beans until the rice becomes soft. After that, red bean sediment s added and boiled and lastly sugar is added. It is a wintertime delicacy with small glutinous rice balls.',
    name_ja: '小豆粥',
    description_ja:
      'ゆでた小豆をザルでつぶしながらこし、その小豆汁に米を加えて煮る。米がやわらかくなったらつぶした小豆を加えて煮た後、砂糖を入れて食べる。もち粉で作った団子を入れて食べる冬の料理。',
    name_zh: '甜红豆粥',
    description_zh:
      '将红豆煮软后碾碎，用筛子过滤，在过滤出的汤汁中放入大米煮软，再加入红豆沙煮沸后，用白糖调味。搭配糯米年糕球一起吃，是冬季的美味佳肴。',
    name_zh2: '甜紅豆粥',
    description_zh2:
      '將煮軟的紅豆搗碎後過篩，在滲出的湯汁中放入米煮至柔軟，再放入紅豆泥煮沸，並用糖調味。是加入糯米湯圓一起吃的冬季美味。',
  },
  {
    id: 82,
    category: '죽 [Juk]',
    name: '바지락죽',
    pronounce: 'Bajirakjuk',
    description:
      '뜨거운 냄비에 참기름을 두르고, 다진 바지락 살을 넣어 볶다 불린 쌀을 넣고 조금 더 볶은 뒤 물을 부어 쑨 죽이다. 채소를 다져 넣기도 하고, 국 간장으로 간을 하면 감칠맛이 좋다.',
    name_en: 'Clam Porridge',
    description_en:
      'To prepare this dish, pan-fry baby clams in a hot pot greased with sesame oil and add presoaked short grain rice. Add water and bring to a boil. Chopped vegetables or soy sauce may be added to suit one’s preference.',
    name_ja: 'アサリ粥',
    description_ja:
      '熱い鍋にごま油をひき、細かく刻んだアサリの身を入れ炒める。水につけた米を入れてさらに炒めた後、水を加えて炊いた粥。刻み野菜を加えたり、クッカンジャン（スープ用の醤油）で味を調えればコクがでる。',
    name_zh: '蛤蜊粥',
    description_zh:
      '在烧热的锅里倒入些许香油，放入剁成碎末的蛤蜊肉煸炒片刻，再放入浸泡过的大米继续煸炒，最后倒入适量的水熬至软烂黏稠即可。也可根据喜好放一些蔬菜碎末，最后用韩式酱油调味味道更佳鲜美。',
    name_zh2: '蛤蜊粥',
    description_zh2:
      '熱鍋裡倒點香油，放入蛤蜊肉碎煸炒片刻，然後倒點水熬成粥，也可以放點蔬菜碎，最後用韓式醬油調味即可。',
  },
  {
    id: 83,
    category: '죽 [Juk]',
    name: '백합죽',
    pronounce: 'Baekhapjuk',
    description:
      '전라북도 부안의 향토음식으로, 백합 살과 불린 쌀을 끓이다가 소금으로 간을 한 죽이다. 백합을 넣고 오래 끓이면 질겨지므로 한소끔만 끓여낸다.',
    name_en: 'Hard Clam Porridge',
    description_en:
      'A local specialty of Buan, North Jeolla Province, baekhapjuk is a porridge made with ocean quahog and presoaked short grain rice boiled together and seasoned with salt. Care should be taken not to boil the ocean quahog too long, as doing so can make it quite tough.',
    name_ja: 'カガミガイ粥',
    description_ja:
      'プアンの郷土料理。カガミガイの身と水につけた米を炊いて塩で味を調えた粥。カガミガイを入れて長時間火にかけると固くなってしまうので、一煮立ちさせるだけ。',
    name_zh: '白蛤粥',
    description_zh:
      '全罗北道扶安地区的地方特色美食，用白蛤肉和泡好的大米熬成粥，最后用盐调味。白蛤不宜长时间熬煮，以免口感变韧，只要煮开一次即可。',
    name_zh2: '白蛤粥',
    description_zh2:
      '白蛤粥是全羅北道扶安的傳統美食，用白蛤肉與提前泡好的大米熬成粥，再用鹽調味。白蛤不宜長時間熬煮，以免口感變韌。',
  },
  {
    id: 84,
    category: '죽 [Juk]',
    name: '버섯옥수수죽',
    pronounce: 'Beoseotoksusujuk',
    description:
      '찹쌀가루에 물을 붓고 끓이다가 잘 여문 옥수수를 잘게 갈아 넣은 후 좀 더 끓으면 곱게 다진 송이버섯을 넣는다. 다 끓인 죽은 소금으로 간을 맞춘다.',
    name_en: 'Mushroom and Corn Porridge',
    description_en:
      'This is glutinous rice porridge boiled with finely ground, fully ripe corn. Add finely chopped matsutake mushroom to the boiling porridge and season with salt before serving.',
    name_ja: 'きのこととうもろこしのお粥',
    description_ja:
      'もち粉に水を加えて煮立たせ、よく熟したとうもろこしを細かくひいたものを加える。少し火を加えてからきれいに刻んだ松茸を入れる。できあがったら塩で味を調える。',
    name_zh: '蘑菇玉米粥',
    description_zh:
      '糯米粉加水熬煮，再将成熟的玉米磨成细末后放进去一起熬煮片刻，煮开后，放入剁成碎末的松茸。粥煮好后，用盐调味。',
    name_zh2: '蘑菇玉米粥',
    description_zh2:
      '用清水衝開糯米麵煮沸，再把成熟的玉米磨成細末後放進去一起熬煮片刻，煮開後放入剁成碎末的松茸。粥煮好後，點鹽調味。',
  },
  {
    id: 85,
    category: '죽 [Juk]',
    name: '버섯죽',
    pronounce: 'Beoseotjuk',
    description:
      '잘게 다진 표고버섯을 넣고 끓인 죽이다. 표고버섯 특유의 향기로운 향이 일품으로, 입맛이 없을 때나, 가벼운 식사를 원할 때도 좋다.',
    name_en: 'Mushroom Porridge',
    description_en:
      'Ideal as a light meal, this porridge is prepared by boiling chopped shiitake mushroom with rice. Its unique fragrance tends to stimulate one’s appetite.',
    name_ja: 'きのこ粥',
    description_ja:
      '細かく刻んだしいたけを入れて炊いた粥。しいたけ特有の香りが引き立ち、食欲のないときや軽く食事をとりたいときにおすすめ。',
    name_zh: '蘑菇粥',
    description_zh:
      '用剁成碎末的香菇和泡好的大米熬成的粥，香菇特有的香味，没有胃口或想吃简餐时非常适合喝蘑菇粥。',
    name_zh2: '蘑菇粥',
    description_zh2:
      '放入香菇碎熬粥。香菇粥有一種非常特別的香氣，沒有胃口或想吃簡餐時非常適合喝蘑菇粥。',
  },
  {
    id: 86,
    category: '죽 [Juk]',
    name: '보말죽',
    pronounce: 'Bomaljuk',
    description:
      '불린 쌀과 보말에 참기름을 넣고 볶다가 물을 붓고 약한 불에서 쌀이 푹 퍼지도록 끓인 음식이다. 보말은 보말고둥의 제주도 방언이다. 보말의 내장을 넣고 끓이면 진한 풍미를 느낄 수 있다.',
    name_en: 'Top Shell Rice Porridge',
    description_en:
      'This dish is made with rice soaked in water and top shells sautéed in sesame oil and it is simmered until thick. Bomal is the Jeju Island dialect word for "top shell." Top shell intestines can be added and boiled together to make the dish more flavorful.',
    name_ja: 'クボガイ粥',
    description_ja:
      'ふやかした米とクボガイをごま油で炒めた後、水を加えて弱火で米がやわらかくなるまで煮たもの。済州島ではクボガイのことを「ポマル」と呼ぶ。クボガイの内臓を加えるとさらに風味が増す。',
    name_zh: '海螺粥',
    description_zh:
      '把泡好的大米和海螺用香油翻炒后倒入水，用小火煮至软糯。“Bomal”是海螺的济州方言。加入海螺内脏熬粥的话，可以品尝到浓郁的风味。',
    name_zh2: '海螺粥',
    description_zh2:
      '把浸泡過的米和海螺用香油翻炒後加水，小火煮至柔軟。「Bomal」是海螺的濟州島方言。若加入海螺內臟熬製，可品嘗到濃郁的風味。',
  },
  {
    id: 87,
    category: '죽 [Juk]',
    name: '삼계죽',
    pronounce: 'Samgyejuk',
    description:
      '닭 육수에 찹쌀과 멥쌀가루를 넣어 끓이다가 닭고기를 넣고 더 끓인 후 그릇에 담는다. 대추, 인삼, 깻가루, 김 가루 등을 고명으로 올린다.',
    name_en: 'Ginseng and Chicken Porridge',
    description_en:
      'This dish is made with glutinous rice and ground non-glutinous rice boiled in chicken broth. Chicken is added later and brought to a boil. After cooking, it is sprinkled with minced chive and served in a bowl with dates, ginseng, powdered sesame, and crushed seaweed as toppings.',
    name_ja: '鶏肉と高麗人蔘のお粥',
    description_ja:
      '鶏肉のスープにもち米とうるち米の粉を入れて煮込み、鶏肉を入れてみじん切りにしたネギをかけて器に盛る。ナツメや高麗人参、エゴマの粉、のりなどをのせて食べる。',
    name_zh: '参鸡粥',
    description_zh:
      '在鸡汤里放入糯米和大米粉末熬煮一段时间后，加入鸡肉继续熬煮至熟后起锅盛入碗里，上面再放一些大枣、人参、芝麻碎末、海苔碎末等做装饰。',
    name_zh2: '蔘雞粥',
    description_zh2: '在燉雞的湯中放入糯米和粳米燉煮，放入煮熟的雞肉後煮出香濃的營養粥。',
  },
  {
    id: 88,
    category: '죽 [Juk]',
    name: '소고기미역죽',
    pronounce: 'Sogogimiyeokjuk',
    description:
      '불린 쌀을 참기름에 볶다가 밑간한 미역, 소고기 등을 넣고 물을 넉넉하게 부어 끓인 죽이다. 식감이 부드럽고 영양이 풍부하다.',
    name_en: 'Beef and Brown Seaweed Rice Porridge',
    description_en:
      'This dish is made by sautéing water-soaked rice in sesame oil. Seasoned seaweed, beef, and plenty of water are added before letting it simmer. This dish is nutritious and has a smooth texture.',
    name_ja: '牛肉とワカメ粥',
    description_ja:
      'ふやかした米をごま油で炒める。そこに下味を付けたワカメや牛肉などを加え、たっぷりの水を注いで煮込んだお粥。食感がやわらかく栄養価も高い。',
    name_zh: '牛肉海带粥',
    description_zh:
      '把泡好的大米用香油翻炒后加入腌好的海带、牛肉等食材，倒入充足的水熬煮成粥。口感柔嫩，营养丰富。',
    name_zh2: '牛肉海帶粥',
    description_zh2:
      '浸泡過的米用香油翻炒後加入醃好的海帶、牛肉等材料，倒入適量的水熬煮成粥。口感柔嫩，營養豐富。',
  },
  {
    id: 89,
    category: '죽 [Juk]',
    name: '소고기버섯죽',
    pronounce: 'Sogogibeoseotjuk',
    description:
      '소고기와 버섯을 잘게 썰어 간장으로 밑간을 한 후 먼저 볶다가 불린 쌀과 육수 넣어 쑨 음식이다. 영양이 좋아 유아와 어린이 이유식으로도 많이 쓰인다.',
    name_en: 'Beef and Mushroom Porridge',
    description_en:
      'For this dish, stir-fry chopped beef and mushroom that have been marinated in soy sauce and simmer with presoaked rice and broth. This is a highly nutritious dish that is ideal for babies and children as well as adults.',
    name_ja: '牛肉ときのこ粥',
    description_ja:
      '牛肉ときのこを細かく刻み、カンジャンで下味をつけた後、あらかじめ炒って水につけておいた米と出し汁を入れて炊いた料理。栄養面でも優れており、乳幼児の離乳食としてもよく食べられる。',
    name_zh: '牛肉蘑菇粥',
    description_zh:
      '将牛肉和蘑菇切成碎末并用酱油调味，在锅中煸炒片刻后放入提前泡好的大米和高汤一起熬至软烂即可。牛肉蘑菇粥营养丰富，还可作为婴幼儿的辅食。',
    name_zh2: '牛肉蘑菇粥',
    description_zh2:
      '把牛肉與蘑菇切成碎末調味，煸炒片刻後放入提前泡好的大米與高湯一起熬成粥。牛肉蘑菇粥營養豐富，非常適合做兒童加餐。',
  },
  {
    id: 90,
    category: '죽 [Juk]',
    name: '어죽',
    pronounce: 'Eojuk',
    description:
      '푹 삶은 민물고기를 채에 거른 뒤 고춧가루와 고추장으로 간하고 불린 쌀을 넣어 끓이다가 국수나 수제비를 함께 넣어 끓여 먹는다. 비린내를 잡기위해 쑥갓이나 깻잎, 미나리 등 향이 강한 채소를 넣는다.',
    name_en: 'Fish Porridge',
    description_en:
      'Boiled and seived freshwater fish seasoned with red chili powder and gochujang (red chili paste) and boiled with presoaked short grain rice in water. While the soup is boiling, noodles or pieces of hand-torn flour dough are added. The soup is topped with chopped, strong-scented vegetables in order to remove the fishy smell.',
    name_ja: '魚粥',
    description_ja:
      'じっくりと茹でた淡水魚をこし、粉唐辛子とコチュジャンで味を調えて、浸水させておいた米を入れて煮込む。そこへ素麺やすいとんを加えてさらに煮込む。臭みをとるために、春菊やエゴマの葉、セリなど香りの強い野菜を加える。',
    name_zh: '鱼粥',
    description_zh:
      '将煮透的淡水鱼用漏勺捞出，用辣椒粉与辣椒酱调味，再加入提前泡好的大米煮开，中间放入面条或面片一起煮。加点茼蒿、苏子叶、水芹等带有特殊香味的蔬菜，可以有效清除鱼腥味。',
    name_zh2: '魚粥',
    description_zh2:
      '淡水魚煮爛，用篩子過濾後，加入辣椒粉和辣椒醬調味，再放入浸泡過的大米一起熬煮，過一會兒再加入麵條或麵片兒繼續熬煮至熟即可。為去除魚腥味，可加入茼蒿、蘇子葉、水芹等氣味強的蔬菜。',
  },
  {
    id: 91,
    category: '죽 [Juk]',
    name: '잣죽',
    pronounce: 'Jatjuk',
    description:
      '잣과 쌀을 곱게 간 다음 물을 부어 끓인 죽이다. 고소한 맛이 좋고, 영양이 풍부해 환자들의 회복식으로 애용된다.',
    name_en: 'Pine Nut Porridge',
    description_en:
      'Rice and pine nuts are puréed and simmered until thick. The nutty aroma and velvety texture make it a wonderful appetizer or recovery food.',
    name_ja: '松の実粥',
    description_ja:
      '松の実と米を細かく挽き、水を加えて煮たお粥。香り高く栄養豊富なため、病人の回復食にも最適。',
    name_zh: '松仁粥',
    description_zh:
      '将松仁和白米磨成细致的粉末，加水熬煮而成，它口感香醇，营养丰富，适于患者食用。',
    name_zh2: '松仁粥',
    description_zh2: '將粳米和松仁搗碎後倒入水煮成的粥。不僅可品嘗松仁特有的香酥味，營養也很豐富。',
  },
  {
    id: 92,
    category: '죽 [Juk]',
    name: '전복내장죽',
    pronounce: 'Jeonboknaejangjuk',
    description:
      '냄비에 참기름을 두르고 전복 내장과 불린 쌀을 넣어 볶다가 쌀이 투명해지면 물을 넣어 쑨 죽이다. 은은한 녹두 빛이 나며 특유의 감칠맛이 매력적이다.',
    name_en: 'Abalone Intestine Porridge',
    description_en:
      'Abalone intestines and presoaked rice pan-fried in a pot greased with sesame oil and boiled in water until the rice becomes transparent. Characterized by its subtle green color, this porridge has a unique savory taste.',
    name_ja: 'アワビの内臓粥',
    description_ja:
      'ごま油をひいた鍋に、アワビの内臓と水に浸けた米を加えて炒める。米が透明になったら水を入れて炊いた粥。ほんのり緑がかった輝きと特有のコクが絶品。',
    name_zh: '鲍鱼内脏粥',
    description_zh:
      '在烧热的锅中倒入香油，将鲍鱼内脏和浸泡过的大米一起倒入锅中翻炒一会儿，待大米变得透明后，倒入足量的大米慢慢熬煮至熟即可。鲍鱼内脏粥泛着淡淡的绿豆色，味道十分鲜美。',
    name_zh2: '鮑魚內臟粥',
    description_zh2:
      '鍋裡倒點香油，炒一下鮑魚內臟與提前泡好的大米，等大米變透明之後加水熬粥。鮑魚內臟粥有種淡淡的綠豆色，有一種特別的甘甜，是一道極具魅力的美食。',
  },
  {
    id: 93,
    category: '죽 [Juk]',
    name: '전복죽',
    pronounce: 'Jeonbokjuk',
    description:
      '잘게 썬 전복과 불린 멥쌀을 참기름으로 볶다가 물을 부어 끓인 보양죽이다. 전복의 쫄깃한 식감과 구수한 맛이 뛰어나며 궁중에서 즐겨 먹던 음식이다.',
    name_en: 'Abalone Porridge',
    description_en:
      'A nourishing porridge made with rice soaked in water and minced abalone sautéed in sesame oil and simmered until thick. Well-loved for the chewy texture of the abalone and the subtle flavor that envelopes the palate. It used to be a popular royal court dish.',
    name_ja: 'アワビ粥',
    description_ja:
      '小さく切ったアワビとふやかしたうるち米をごま油で炒め、水を加えて炊いた健康食。アワビの歯ごたえと濃厚な風味が絶品。',
    name_zh: '鲍鱼粥',
    description_zh:
      '将鲍鱼切碎，同用水泡过的白米一起用麻油翻炒一下，加入水熬制而成，它兼具鲍鱼的咀嚼口感和醇香口味，曾是古代宫廷御用的营养粥。',
    name_zh2: '鮑魚粥',
    description_zh2: '鮑魚粥是放入切成斜片的鮑魚和大米後用麻油拌炒，再加水煮出的養生飲食。',
  },
  {
    id: 94,
    category: '죽 [Juk]',
    name: '참치죽',
    pronounce: 'Chamchijuk',
    description:
      '참기름을 두른 팬에 잘게 다진 양파와 당근, 애호박을 볶다가 불린 쌀을 넣어 푹 끓인 후 마지막에 기름을 뺀 참치를 넣어 쑨 음식이다. 참치 통조림을 이용해 간단히 해먹을 수 있어 인기가 좋다.',
    name_en: 'Tuna Porriddge',
    description_en:
      'Stir-fry chopped onion, carrot, and squash in a pan greased with sesame oil and then add presoaked rice and water and bring to a boil. Add drained tuna and simmer on low heat. The use of canned tuna makes this dish particularly easy to prepare.',
    name_ja: 'ツナ粥',
    description_ja:
      'ごま油をひいたフライパンでみじん切りしたたまねぎとにんじん、ズッキーニを炒め、水につけておいた米を入れてじっくり炊き、最後に油を抜いたツナを入れる。ツナ缶を使って簡単に作れるため人気がある。',
    name_zh: '金枪鱼粥',
    description_zh:
      '在烧热的锅中倒入些许香油，放入切碎的洋葱、胡萝卜和西葫芦翻炒片刻，再放入提前泡好的大米熬煮至软烂，最后起锅前放入去油的金枪鱼。金枪鱼可以使用罐头装的，简单又方便，很受大众喜爱。',
    name_zh2: '金槍魚粥',
    description_zh2:
      '把香油倒入鍋裡，再放入切碎的洋蔥、胡蘿蔔、西葫蘆翻炒片刻，然後放入提前泡好的大米熬煮，端鍋之前放入去油的金槍魚。可以用金槍魚罐頭簡單烹飪，是非常簡單快捷的人氣美食。',
  },
  {
    id: 95,
    category: '죽 [Juk]',
    name: '채소죽',
    pronounce: 'Chaesojuk',
    description:
      '다양한 채소를 넣어 쌀과 함께 끓인 죽이다. 무, 당근, 시금치, 냉이, 미나리, 아욱 등을 넣은 죽이 대표적이다. 기호에 따라 참치, 닭, 전복, 브로콜리 등을 넣기도 한다.',
    name_en: 'Vegetable Porridge',
    description_en:
      'This dish consists of rice boiled with a variety of vegetables, such as radish, carrot, spinach,horseradish, water parsley, and curled mallow. Also, tuna, chicken, abalone, broccoli, and other ingredients can be added according to one’s preference.',
    name_ja: '野菜粥',
    description_ja:
      '色々な野菜を入れて米と一緒に煮込み、大根や人参、ほうれん草、わさび、セリ、アオイなどを入れたお粥が代表的。好みに応じてマグロや鶏肉、アワビ、ブロッコリーなどを入れることもある。',
    name_zh: '蔬菜粥',
    description_zh:
      '用各种蔬菜和大米一起熬制的粥，最典型的有放入萝卜、胡萝卜、菠菜、荠菜、水芹、锦葵等蔬菜的粥，也可按照个人的喜好加入金枪鱼、鸡肉、鲍鱼、西兰花等。',
    name_zh2: '蔬菜粥',
    description_zh2: '放入大米以及胡蘿蔔、菠菜、蘑菇等各種蔬菜後煮成的粥。',
  },
  {
    id: 96,
    category: '죽 [Juk]',
    name: '팥죽',
    pronounce: 'Patjuk',
    description:
      '동짓날에 팥죽을 쑤어 대문에 뿌리면 악귀를 물리친다는 속설이 있다. 붉은팥을 삶아 거른 팥물에 쌀을 넣고 쑨 죽으로 새알심은 나이 수대로 넣는다. 소금이나 설탕으로 간한다.',
    name_en: 'Red Bean Porridge',
    description_en:
      "Some traditional Korean beliefs say that patjuk (red bean porridge) thrown on the gate of one's home on the winter solstice drives out evil spirits. It is a rice porridge made with boiled red beans and rice. Rice is simmered in the liquid strained from the boiled red beans, and small glutinous rice balls are sometimes added. The porridge is seasoned with salt and/or sugar at the table.",
    name_ja: '小豆粥',
    description_ja:
      'ゆでた小豆をこし、米を加えて炊いたお粥。もち粉で作った団子を入れることもある。塩か砂糖で味付けして食べる。',
    name_zh: '红豆粥',
    description_zh:
      '民间传说冬至那天将红豆粥洒在大门上能驱鬼辟邪。煮红豆的水过滤后加入白米熬煮成粥，可按岁数放入年糕球，并用食盐和砂糖调味。',
    name_zh2: '紅豆粥',
    description_zh2:
      '煮好紅豆後用篩子篩過後，放入大米、年糕球煮出的粥。據傳如果在冬至那天將紅豆粥灑在大門或醬缸上就能驅鬼辟邪。',
  },
  {
    id: 97,
    category: '죽 [Juk]',
    name: '해물죽',
    pronounce: 'Haemuljuk',
    description:
      '참기름에 홍합, 바지락, 낙지, 굴, 새우 등 다양한 해산물을 볶다가 다진 채소와 불린 쌀을 넣고 육수를 부어 뭉근하게 끓여 먹는 영양죽이다.',
    name_en: 'Seafood Porridge',
    description_en:
      'This nutritious dish is made by stir-frying mussels, clams, chopped octopus, oysters, and other seafood with sesame oil in a pot and simmering with chopped vegetables and presoaked white grain rice in broth.',
    name_ja: '海鮮粥',
    description_ja:
      'ムール貝、あさり、テナガダコ、カキ、エビなど様々な魚介をごま油で炒める。そこへ刻んだ野菜と浸水させておいた米を入れて、スープを加えて弱火で煮込んだ栄養満点の粥。',
    name_zh: '海鲜粥',
    description_zh:
      '用香油炒一下贻贝、蛤蜊、章鱼、牡蛎、虾等各种海鲜，放入切碎的蔬菜和提前泡好的大米，再倒入高汤煮成稠粥即成美味营养粥。',
    name_zh2: '海鮮粥',
    description_zh2:
      '將貽貝、蛤蜊、章魚、牡蠣、蝦等各種海水用香油翻炒，再加入剁碎的蔬菜和浸泡過的大米，並倒入高湯一起熬煮即可，是一道營養豐富的粥品。',
  },
  {
    id: 98,
    category: '죽 [Juk]',
    name: '호박죽',
    pronounce: 'Hobakjuk',
    description:
      '늙은 호박(천둥호박)으로 쑨 죽이다. 껍질을 벗긴 천둥호박의 씨를 제거하여 삶아 으깨어 끓이다가 찹쌀가루와 새알심을 넣어 익힌 죽이다. 팥이나 콩, 옥수수 등을 넣기도 한다.',
    name_en: 'Pumpkin Porridge',
    description_en:
      'A smooth porridge made with mashed pumpkin flesh, with the seeds removed, and sweet rice powder or rice balls. Red beans, black beans, or corn may be added.',
    name_ja: 'カボチャ粥',
    description_ja:
      '皮をむいたかぼちゃを蒸し、それをつぶして煮たものに、もち粉やもち粉で作った団子を入れて炊く。小豆や豆、とうもろこしなどを加えることもある。',
    name_zh: '南瓜粥',
    description_zh:
      '用老南瓜熬的粥。将老南瓜剥皮去籽后煮熟并捣碎，加入水和糯米粉以及年糕球熬煮，可根据喜好加入红豆、大豆、玉米等。',
    name_zh2: '南瓜粥',
    description_zh2: '搗碎煮熟的老南瓜或甜南瓜後熬煮，再加入糯米粉煮成的粥。',
  },
  {
    id: 99,
    category: '죽 [Juk]',
    name: '흑임자죽',
    pronounce: 'Heugimjajuk',
    description:
      '검은깨와 쌀을 곱게 갈아 끓인 죽으로 쌉쌀하면서도 고소한 풍미가 있다. 소화가 잘되고 간장과 신장을 보호해 병후 회복식으로 좋다.',
    name_en: 'Black Sesame Porridge',
    description_en:
      'Porridge made from finely ground black sesame and rice, resulting in a bittersweet, nutty flavor. Black sesame contains a high concentration of digestive enzymes, which help maintain liver and kidney health, making it ideal for people recovering from illness.',
    name_ja: '黒ごま粥',
    description_ja:
      '黒ごまと米を細かく挽いて炊いたお粥で、香ばしくほろ苦い風味が特徴。消化酵素が豊富に含まれており、肝臓や心臓を保護する作用があるため、病後の回復食に最適。',
    name_zh: '黑芝麻粥',
    description_zh:
      '将黑芝麻和白米磨成细粉后加水熬煮而成，口感醇香，不仅能促进消化，还有保护肝肾功能，适于患者恢复体力。',
    name_zh2: '黑芝麻粥',
    description_zh2: '將黑芝麻和大米搗碎後煮成的粥，芝麻香酥味道絕佳。',
  },
  {
    id: 100,
    category: '면 [Myeon]',
    name: '감자수제비',
    pronounce: 'Gamjasujebi',
    description:
      '감자를 갈아 거른 건더기와 가라앉은 앙금에 밀가루를 섞어 만든 수제비 반죽을 끓는 멸치장국에 뜯어 넣고 애호박, 양파 등을 썰어 넣은 뒤 달걀을 풀어 끓인다.',
    name_en: 'Hand-pulled Potato Dough Soup',
    description_en:
      'To prepare this dish, grated raw potato is mixed with potato starch and flour and then formedinto a dough, hand-torn, and dropped into boiling anchovy stock. Sliced or julienned squash is then added, along with onion, and boiled with a beaten egg.',
    name_ja: 'じゃがいもすいとん',
    description_ja:
      'じゃがいもをすり下ろしてこしたものに小麦粉を混ぜたすいとん。それを、煮干しの出し汁にちぎって入れる。エホバク、たまねぎなども入れ、溶き卵を加えて煮る。',
    name_zh: '土豆面片汤',
    description_zh:
      '土豆擦成泥，滤掉水分后，加入面粉和成面团，揪成片儿状放入鳀鱼酱汤里，再放入一些西葫芦、洋葱等，最后倒入蛋汁继续熬煮即可。',
    name_zh2: '土豆麵片湯',
    description_zh2:
      '把土豆磨細後擠幹水分，再加入沉澱下來的土豆澱粉及麵粉做成麵片。在煮沸的鯷魚醬湯裡加入麵片、西葫蘆、洋蔥等，最後再輕輕倒入打好的雞蛋。',
  },
  {
    id: 101,
    category: '면 [Myeon]',
    name: '감자옹심이',
    pronounce: 'Gamjaongsimi',
    description:
      '감자옹심이 ‘옹심이’는 ‘새알심’의 강원도 사투리다. 손질한 감자를 강판에 갈아 면포에 짜 새알심을 빚어 멸치 국물에 감자옹심이와 잘게 썬 애호박, 양파 등을 넣고 끓인다.',
    name_en: 'Potato Ball Soup',
    description_en:
      'This is a local specialty of Gangwon Province, where the local dialect uses the term ongsimi instead of the standard Korean saealsim (dough balls). It is made by grating potatoes and wringing them in a cloth to remove any excess water. Saealsim balls are then formed and boiled with julienned squash and onion in anchovy broth.',
    name_ja: 'じゃがいも団子スープ',
    description_ja:
      'じゃがいもをすりおろし、綿布でこして団子状にする。煮干しの出し汁に、細切りにしたエホバク、たまねぎなどと一緒に入れて煮る。',
    name_zh: '土豆粉团汤',
    description_zh:
      '“Ongsimi”是江原道方言，指的是粉团。将土豆洗好削皮，用擦菜板擦成泥，用棉布包起来挤干水分后捏成丸子形状。在鳀鱼汤底中放入土豆粉团和切成细丝的西葫芦、洋葱等熬煮。',
    name_zh2: '土豆粉團湯',
    description_zh2:
      '「粉團(Ongsimi)」是「糯米團」的江原道方言。把土豆清洗乾淨，削完皮後用擦絲板擦好，再用棉布擠幹水，團成圓球。再跟切好的西葫蘆、洋蔥一起放入鯷魚湯中煮熟。',
  },
  {
    id: 102,
    category: '면 [Myeon]',
    name: '검정콩국수',
    pronounce: 'Geomjeongkongguksu',
    description:
      '서리태를 곱게 갈아 체로 걸러낸 후 그 국물에 국수를 말아 먹는 음식이다. 주로 여름철에 많이 먹으며, 열무김치와 함께 먹으면 맛있다.',
    name_en: 'Noodles in Cold Black Soybean Soup',
    description_en:
      'Made with boiled and puréed black beans, this soup is a summer staple that is served with ice and yeolmukimchi (young summer radish kimchi) on the side.',
    name_ja: '黒豆豆乳素麺',
    description_ja:
      '黒豆を細かく挽き、こした後、そのスープに素麺をからめて食べる料理。主に夏によく食べられ、大根若菜キムチと相性がいい。',
    name_zh: '黑豆汁面',
    description_zh:
      '黑豆磨成浆，漏掉豆渣后，将面条泡入豆浆中即可。黑豆汁面多在夏季食用，配萝卜缨辛奇一起吃味道更佳。',
    name_zh2: '黑豆汁面',
    description_zh2:
      '用黑豆做成豆漿，用漏網去掉豆渣後泡麵條吃。黑豆汁面是夏季美食，跟小蘿蔔辛奇一起吃會更加美味。',
  },
  {
    id: 103,
    category: '면 [Myeon]',
    name: '고기국수',
    pronounce: 'Gogiguksu',
    description:
      '돼지 뼈로 우린 뽀얀 육수에 국수를 말고, 수육을 올려 먹는 음식이다. 잔칫날이나 큰 행사가 있는 날 먹던 제주도의 향토음식이다.',
    name_en: 'Pork Noodles',
    description_en:
      'Noodles served in soup made by simmering pork bones until a cloudy broth forms. A local specialty of Jeju Island, this noodle dish is eaten on special occasions.',
    name_ja: '肉素麺',
    description_ja:
      '豚の骨でとった白濁スープに麺をからめて、ゆで肉をのせて食べる。祝い事や大きな行事の席で食べられた済州島の郷土料理。',
    name_zh: '猪肉汤面',
    description_zh:
      '猪骨熬出色白味醇的高汤后，将面条泡入高汤里，上面放几片白切猪肉即可，是在喜庆宴席上或重大活动时端上桌的济州岛地区的特色美食。',
    name_zh2: '豬肉湯麵',
    description_zh2:
      '用豬骨熬出乳白色的湯，再把煮好的麵條放入湯裡，最後再放上白灼肉即可。豬肉麵條是在喜慶宴席上或舉辦大型活動的時候常吃的濟州島地區地方美食。',
  },
  {
    id: 104,
    category: '면 [Myeon]',
    name: '골뱅이소면',
    pronounce: 'Golbaengisomyeon',
    description:
      '골뱅이와 채소를 새콤달콤한 고추장 양념에 무쳐 소면과 함께 담아낸 음식이다. 소면을 함께 비벼 먹으며 술안주로도 즐겨 먹는다.',
    name_en: 'Spicy Sea Snail Salad with Noodles',
    description_en:
      'Sea snails and vegetables mixed with a sweet and sour gochujang (red chili paste) sauce and served with noodles. The noodles are mixed with the other ingredients at the table and the dish is a popular accompaniment to alcoholic beverages.',
    name_ja: 'つぶ貝と素麺の和え物',
    description_ja:
      'つぶ貝と野菜を甘酸っぱいコチュジャンベースのたれで和え、素麺を混ぜて食べる。酒の肴としても絶品。',
    name_zh: '辣拌海螺龙须面',
    description_zh:
      '在海螺和各种蔬菜中加入酸甜的辣椒调味酱拌匀后放入龙须面，和龙须面一起拌着吃很适合做下酒菜。',
    name_zh2: '辣拌海螺細麵',
    description_zh2:
      '將海螺和蔬菜加入酸甜的辣椒醬調味料拌勻，與細麵一起端上桌，攪拌後食用。也很適合當成下酒菜。',
  },
  {
    id: 105,
    category: '면 [Myeon]',
    name: '곰국시',
    pronounce: 'Gomguksi',
    description:
      '소고기의 양지머리와 사골 등을 넣어 오래 우려낸 국물에 밥 대신 칼국수 면을 말아 먹는 음식이다. 소고기의 진한 국물이 피로해소와 노화방지에 좋다.',
    name_en: 'Beef Noodles',
    description_en:
      'Noodles served in warm soup made with beef brisket and bones simmered for a long period of time. This thick beef soup is an energy-boosting meal that is effective in relieving fatigue and slowing aging.',
    name_ja: '牛肉素麺',
    description_ja:
      '牛の胸肉と牛骨などを入れて長時間煮出したスープにご飯の代わりにカルグクスの麺を入れて食べるもの。牛肉の濃厚なスープが疲労回復と老化防止にいいと言われる。',
    name_zh: '牛肉汤面',
    description_zh:
      '用牛头肉和牛骨等材料精心熬制出高汤后，将刀切面泡入汤里即可。牛肉汤味道醇浓鲜香，有助于消除疲劳，延缓衰老。',
    name_zh2: '牛肉湯麵',
    description_zh2:
      '將牛胸骨肉與牛棒骨一起熬成湯，然後把煮好的麵條放入湯裡吃。精熬牛肉湯有助於消除疲勞、延緩衰老。',
  },
  {
    id: 106,
    category: '면 [Myeon]',
    name: '김치말이국수',
    pronounce: 'Kimchimariguksu',
    description:
      '동치밋국이나 열무 김칫국 또는 김칫국을 섞은 육수에 삶아 낸 국수를 넣어 시원하게 먹는 음식이다. 양념해 볶은 소고기나 닭고기살을 고명으로 얹기도 한다.',
    name_en: 'Kimchi Noodles',
    description_en:
      'This is a noodle dish made with chilled dongchimi soup, yeolmu kimchi soup, or kimchi soup mixed with beef stock and topped with seasoned and browned beef or chicken.',
    name_ja: 'キムチ混ぜ素麺',
    description_ja:
      '大根の水キムチの汁や大根若菜キムチの汁、またはキムチの汁を混ぜた出汁に茹でた麺を入れ、冷たくして食べる料理。味付けをして炒めた牛肉や鶏肉をのせることもある。',
    name_zh: '辛奇汤面',
    description_zh:
      '用水萝卜辛奇或萝卜缨辛奇、辛奇等的汤汁调和高汤备用，面条煮熟后放入冰镇的高汤中，吃起来十分爽口。上面还可以放些调味后炒熟的牛肉或鸡肉。',
    name_zh2: '辛奇湯麵',
    description_zh2:
      '在蘿蔔水辛奇湯、蘿蔔纓辛奇湯或辛奇湯的混合湯裡放入煮好的麵條即成爽口麵條。還可以放用調料炒熟的牛肉或雞肉。',
  },
  {
    id: 107,
    category: '면 [Myeon]',
    name: '냉메밀국수',
    pronounce: 'Naengmemilguksu',
    description:
      '메밀가루로 만든 국수이다. 양지머리 국물, 닭 국물 등을 차게 식혀 메밀국수를 말고, 편육, 알지단 등의 고명을 얹어 먹는 겨울 별미이다.',
    name_en: 'Cold Buckwheat Noodles',
    description_en:
      'A winter delicacy, this buckwheat noodle dish is served in a cold chicken- or beef-based broth and topped with cold slices of beef and egg as a garnish.',
    name_ja: '冷そば',
    description_ja:
      'そば粉で作られた麺。牛の胸肉、鶏のスープなどを冷たくしてそばをからめ、錦糸卵などをのせて食べる冬の料理。',
    name_zh: '荞麦凉面',
    description_zh:
      '是用荞麦做的凉面。牛胸骨肉汤或鸡汤熬好放凉，将面条放入汤里，加上水煮肉片、鸡蛋丝等菜码一起吃，是冬季常吃的特色美食。',
    name_zh2: '蕎麥涼麵',
    description_zh2:
      '是用蕎麥做的涼麵，把牛胸骨肉湯或雞湯放涼，把麵條放入湯裡，加上肉片、煮雞蛋等菜碼一起吃。蕎麥涼麵是冬季常吃的美食。',
  },
  {
    id: 108,
    category: '면 [Myeon]',
    name: '느른국',
    pronounce: 'Neureunguk',
    description:
      '메밀가루와 찬물을 섞어 반죽한 것을 칼로 썰어 끓는 육수에 삶아 메밀향이 나는 제물 칼국수다. 오로지 집 된장으로 간을 한 다음 갓김치를 얹어 먹는 음식이다.',
    name_en: 'Buckwheat Noodle Soup',
    description_en:
      'This is knifecut buckwheat noodles made by adding a mixture of buckwheat flour and cold water to boiling broth. Buckwheat Noodle Soup is seasoned with only doenjang and served with gat-kimchi (leaf mustard kimchi).',
    name_ja: 'そばカルグクス',
    description_ja:
      'そば粉と冷水を混ぜた生地を切り、煮立たせたスープで茹でたそばの香りのカルグクス。テンジャンのみで味付けをし、カラシナキムチを添えて食べる。',
    name_zh: '荞麦刀切面',
    description_zh:
      '荞麦粉加凉水和面，擀成薄饼状后用刀切成条状，放入煮开的高汤中熬煮，用家里酿制的大酱调味，然后配着雪里蕻辛奇一起吃。',
    name_zh2: '蕎麥刀切麵',
    description_zh2:
      '用涼水與蕎麥麵和在一起做成刀切麵，然後用高湯煮熟，是一道散發著蕎麥清香的原湯刀切麵。僅用自家釀製的大醬調味，跟雪裡蕻辛奇一起吃即可。',
  },
  {
    id: 109,
    category: '면 [Myeon]',
    name: '닭칼국수',
    pronounce: 'Dakkalguksu',
    description:
      '닭을 고아서 우려낸 육수에 칼국수를 넣어 끓인 후, 닭고기 살을 발라 양념한 것을 올려 먹는 음식이다. 진하고 담백한 닭 육수는 삼계탕 국물과 비슷해서 여름 보양식으로 좋다.',
    name_en: 'Noodle Soup with Chicken',
    description_en:
      'This dish is prepared by boiling noodles in chicken broth and is served with a topping of seasoned chicken. The thick and savory chicken broth makes this summer delicacy an ideal energy-boosting dish, comparable to samgyetang (ginseng chicken soup).',
    name_ja: '鶏肉カルグクス',
    description_ja:
      '鶏肉でとった出し汁に、カルグクスを入れて煮込んだ後、鶏肉の身をさいてたれとからめてのせて食べる料理。濃厚ながらもあっさりとした鶏肉の出汁は、サムゲタンのスープと似ていて夏の滋養食としてもおすすめ。',
    name_zh: '鸡肉刀切面',
    description_zh:
      '将刀切面放入用鸡肉熬制的高汤中一起熬煮至熟，再将鸡肉撕成丝，调味后放在上面即可。醇浓鲜香的鸡汤和参鸡汤非常类似，是夏季滋补美食。',
    name_zh2: '雞肉刀切面',
    description_zh2:
      '用雞湯煮熟刀切麵後，把調味雞絲放在上面吃。香濃的雞湯跟參雞湯非常類似，是夏季的滋補美食。',
  },
  {
    id: 110,
    category: '면 [Myeon]',
    name: '동치미물냉면',
    pronounce: 'Dongchimimullaengmyeon',
    description:
      '시원한 동치미 국물과 고기육수를 섞어 만든 냉면육수에 삶은 면을 말아 먹는 음식이다. 잘 익은 동치미 국물이 내는 시원하고 깔끔한 맛이 매력이다.',
    name_en: 'Cold Buckwheat Noodles with Radish Water Kimchi',
    description_en:
      'Buckwheat noodles served in broth made with cold radish water kimchi and meat stock. The well-fermented radish water kimchi has a refreshing and savory taste.',
    name_ja: '大根の水キムチ冷麺',
    description_ja:
      '冷たい大根の水キムチのスープに肉の出し汁を加えた冷麺スープを、茹でた麺とからめて食べる料理。よく漬かった大根の水キムチのスープが作り出す冷たくすっきりとした味が魅力。',
    name_zh: '盐水萝卜冷面',
    description_zh:
      '将清凉爽口的盐水萝卜辛奇汤和牛肉高汤混合在一起做成冷面汤，再将煮好的冷面放入冷面汤中一起食用即可。经过发酵的盐水萝卜辛奇汤味道清凉爽口，十分鲜美。',
    name_zh2: '鹽水蘿蔔冷面',
    description_zh2:
      '把爽口的水蘿蔔辛奇湯與高湯混合在一起做成冷麵湯，把煮好的麵條放入冷麵湯一起吃即可。發酵好的水蘿蔔辛奇湯非常爽口且鮮爽，吃一次就讓人念念不忘。',
  },
  {
    id: 111,
    category: '면 [Myeon]',
    name: '들깨수제비',
    pronounce: 'Deulkkaesujebi',
    description:
      '닭고기나 멸치 육수에 들깨 즙을 넣고 끓이다가 반죽한 수제비를 떼어 넣고 끓인 음식이다. 들깨의 구수한 맛과 수제비의 쫀득한 맛이 어우러진 별미이다.',
    name_en: 'Hand-pulled Dough in Perilla Seed Soup',
    description_en:
      'This delicacy is prepared by boiling hand-torn flour dough in chicken or anchovy broth with perilla seed paste. The savory taste of the perilla seeds is a perfect match for the chewy texture of the hand-torn dough.',
    name_ja: 'エゴマすいとん',
    description_ja:
      '鶏肉や煮干しの出し汁にエゴマの汁を入れて煮込み、そこにすいとんをくっつかないように入れて煮込んだ料理。エゴマの香ばしさとすいとんの食感が相性抜群の一品。',
    name_zh: '紫苏籽面片汤',
    description_zh:
      '用鸡汤或鳀鱼熬成高汤，加入紫苏籽榨的汁一起煮开，然后放入面片煮熟即可。紫苏籽香醇的味道和面条劲道的口感相得益彰，十分美味。',
    name_zh2: '紫蘇籽面片湯',
    description_zh2:
      '雞湯和鯷魚湯裡放入紫蘇籽汁一起煮開，然後放入麵片煮熟。紫蘇籽的香味與勁道的麵片融合在一起非常美味。',
  },
  {
    id: 112,
    category: '면 [Myeon]',
    name: '들깨칼국수',
    pronounce: 'Deulkkaekalguksu',
    description:
      '닭고기나 멸치 육수에 들깨 즙을 넣고 끓이다가 칼국수를 넣고 애호박과 표고버섯을 고명으로 얹은 국수이다. 들깨의 고소한 맛이 일품이다.',
    name_en: 'Noodle Soup with Perilla Seeds',
    description_en:
      'This knife-cut noodle dish is made by boiling noodles in chicken or anchovy broth with perilla seed paste and is served with toppings of zucchini and shiitake mushroom. The savory taste of the perilla seeds stimulates appetite.',
    name_ja: 'エゴマカルグクス',
    description_ja:
      '鶏肉と煮干しの出し汁にエゴマの汁を入れて煮込み、そこにカルグクスの麺を入れて煮込んで、最後にズッキーニとしいたけを盛りつけた料理。エゴマの香ばしさが絶妙。',
    name_zh: '紫苏籽刀切面',
    description_zh:
      '把紫苏籽榨的汁放入鸡汤或鳀鱼汤里煮开，然后放入刀切面煮熟，再放上西葫芦和香菇菜码即可食用，紫苏籽香醇的味道十分诱人。',
    name_zh2: '紫蘇籽刀切面',
    description_zh2:
      '把紫蘇籽汁放入雞湯或鯷魚湯裡煮開，然後放入刀切麵煮熟，再放上西葫蘆和香菇菜碼即可食用，紫蘇籽香氣宜人。',
  },
  {
    id: 113,
    category: '면 [Myeon]',
    name: '떡국',
    pronounce: 'Tteokguk',
    description:
      '쌀로 만든 가래떡을 얇게 썰어 육수에 넣고 끓인 음식으로 설날에 즐겨 먹는다. 소고기를 넣고 끓인 맑은 장국이 많이 쓰이고 닭고기나 해물을 넣기도 한다.',
    name_en: 'Sliced Rice Cake Soup',
    description_en:
      'Oval-shaped rice cake cooked in broth. A traditional Lunar New Year dish. Clear beef broth is most commonly used, but chicken or seafood may be added.',
    name_ja: 'トックク',
    description_ja:
      '米で作った棒状の餅を薄切りにし、だし汁に入れて煮た料理。特に正月に食べられる。だしは主に牛肉でとった澄まし汁が使われ、エホバクや鶏肉、魚介類を加えることもある。',
    name_zh: '年糕汤',
    description_zh:
      '将年糕切片放入高汤里煮熟即可，多在春节食用。高汤多使用牛肉熬煮，有时也用鸡汤或海鲜汤。',
    name_zh2: '年糕湯',
    description_zh2:
      '將用粳米製成的年糕放入牛肉高湯裡煮，在韓國每到春節或冬季人們就喜歡食用年糕湯。',
  },
  {
    id: 114,
    category: '면 [Myeon]',
    name: '막국수',
    pronounce: 'Makguksu',
    description:
      '메밀국수를 김칫국물에 말아 먹는 강원도 향토음식으로 메밀막국수라고도 한다. 강원도는 고원지대로 메밀의 생육조건에 적합해 다른 지방보다 막국수가 발달해 왔다.',
    name_en: 'Buckwheat Noodles',
    description_en:
      'A local specialty of Gangwon Province, Makguksu (buckwheat noodles) is made of buckwheat noodles in a kimchi soup. Gangwon Province is famous for its buckwheat noodle dishes, as it is a highland region with an environment ideal for growing buckwheat.',
    name_ja: '混ぜそば',
    description_ja:
      'そばをキムチの汁に入れて食べる江原道（カンウォンド）の郷土料理で、「メミル混ぜそば」ともいう。江原道は高原地帯で、そばの生育に適しており、他の地方よりも混ぜそばの名産地になった。',
    name_zh: '荞麦凉面',
    description_zh:
      '荞麦凉面是将荞麦制成的面条放入辛奇汤汁里吃的江原道特色乡土菜。江原道位于高原地带，自然环境十分适合荞麦的生长，因此荞麦凉面相比其它地方更加发达。',
    name_zh2: '蕎麥涼麵',
    description_zh2:
      '蕎麥涼麵是在煮熟的蕎麥麵條中放上充分的辛奇和蘿蔔、小黃瓜，加入拌麵調味醬後拌著吃的鄉土飲食。',
  },
  {
    id: 115,
    category: '면 [Myeon]',
    name: '매생이굴칼국수',
    pronounce: 'Maesaengigulkalguksu',
    description:
      '육수에 칼국수 면을 넣고 끓이다 면이 거의 익을 쯤 굴을 넣고, 마지막으로 매생이 넣는다. 매생이는 겨울이 제철로 바다향이 가득하며 식감이 부드럽다.',
    name_en: 'Noodle Soup with Seaweed Fulvescens and Oyster',
    description_en:
      'This knife-cut noodle dish is made by boiling noodles in broth and adding oyster and maesaengi when the noodles are almost cooked. Harvested mainly in winter, maesaengi has a fresh sea smell and soft texture.',
    name_ja: 'カプサアオノリとカキのカルグクス',
    description_ja:
      'スープにカルグクスの麺を入れ、麺がほとんど茹で上がる頃にカキを加えて最後にカプサアオノリを入れる。カプサアオノリは冬が旬で、磯の香りとやわらかい食感が特徴。',
    name_zh: '海藻牡蛎刀切面',
    description_zh:
      '高汤煮开后放入面条，待面条快煮熟时放入牡蛎，最后放入海藻即可。冬天的海藻最新鲜，带着浓浓的海的味道，口感十分柔滑。',
    name_zh2: '海藻牡蠣刀切面',
    description_zh2:
      '將刀切麵放入高湯中煮開，快熟的時候放入牡蠣，最後放入海藻即可。 海藻是冬季盛產的海產品，富有海味，口感柔和。',
  },
  {
    id: 116,
    category: '면 [Myeon]',
    name: '매생이떡국',
    pronounce: 'Maesaengitteokguk',
    description:
      '멸치나 소고기로 우려낸 육수에 떡국떡과 매생이를 넣고 끓인 음식이다. 매생이는 깨끗한 바다에서 자라는 한국의 특산물로 영양이 풍부하다. 겨울철의 별미이다.',
    name_en: 'Seaweed Fulvescens Rice Cake Soup',
    description_en:
      'Slices of long, cylinder-shaped rice cake (garaetteok) and seaweed fulvescens boiled together in anchovy or beef broth. Seaweed fulvescens are a specialty of Korea and can be grown only in clean water. It is a nutritious winter delicacy.',
    name_ja: 'カプサアオノリ入りトックク',
    description_ja:
      '煮干しや牛肉でとった出し汁に、お餅とカプサアオノリを加えて煮た料理。カプサアオノリはきれいな海で育つ韓国の特産品で、栄養たっぷりの冬の定番料理。',
    name_zh: '海藻年糕汤',
    description_zh:
      '在用鳀鱼或牛肉熬制的高汤中放入年糕片和海藻煮沸即可。海藻是生长于干净海域的韩国特产，营养十分丰富。也是冬季的美味佳肴。',
    name_zh2: '海藻年糕湯',
    description_zh2:
      '在用鯷魚和牛肉熬煮的高湯裡放入年糕片和海藻煮沸。海藻是生長在乾淨海域的韓國特產，營養十分豐富，是一道冬季的美味佳肴。',
  },
  {
    id: 117,
    category: '면 [Myeon]',
    name: '물냉면',
    pronounce: 'Mulnaengmyeon',
    description:
      '메밀 면을 삶아 동치미 국물과 소고기 육수 섞은 국물에 차갑게 말아 먹는 음식이다. 무, 배, 등을 얹고 겨자와 식초로 양념한다.',
    name_en: 'Cold Buckwheat Noodles',
    description_en:
      'Buckwheat noodles served in chilled soup made of dongchimi (radish kimchi) liquid and beef broth. This noodle dish is garnished with white radish and Asian pear slices and seasoned with mustard and vinegar.',
    name_ja: '水冷麺',
    description_ja:
      'ゆでたそばに、トンチミと牛肉だしを混ぜたスープをかけた冷麺。大根や梨などをのせ、好みで辛子や酢を加える。',
    name_zh: '冷面',
    description_zh:
      '用白萝卜辛奇汤汁和牛肉高汤调成冰镇汤汁，放入煮熟的荞麦面，再加入一些萝卜、梨等装饰配菜，最后用芥末和食醋调味即可。',
    name_zh2: '冷麵',
    description_zh2:
      '水煮用蕎麥製成的麵條後，混合白蘿蔔辛奇和湯水拌著吃的冰涼麵條。通常會放上蘿蔔、梨、水煮蛋等，還可根據喜好加入芥子醬和食醋調味。',
  },
  {
    id: 118,
    category: '면 [Myeon]',
    name: '밀면',
    pronounce: 'Milmyeon',
    description:
      '밀면은 밀가루와 전분을 넣고 반죽하여 만든 국수이다. 삶은 밀면에 육수를 붓고 오이, 달걀, 돼지고기 등의 고명을 올려 먹는다. 한국 전쟁 때 만들어진 음식으로 부산의 대표적 향토 음식이다.',
    name_en: 'Wheat Noodles',
    description_en:
      'Milmyeon refers to noodles made of flour and starch. Boiled noodles are added with broth and topped with garnishes, such as cucumber, egg, and pork. The dish originated in Busan during the Korean War and it is a popular local delicacy of the region.',
    name_ja: 'ミルミョン',
    description_ja:
      '小麦粉とデンプンをこねて作った麺。ゆでたミルミョンに出し汁を注ぎ、きゅうり、ゆで卵、豚肉などをのせて食べる。朝鮮戦争の時に誕生したもので、釜山の代表的な郷土料理でもある。',
    name_zh: '小麦面',
    description_zh:
      '小麦面是和面时加入面粉和淀粉一起揉制的面条。在煮熟的小麦面上倒入高汤后，再摆上黄瓜、鸡蛋、猪肉等配料一起吃。小麦面起源于韩国战争时期，是釜山的代表性地方美食。',
    name_zh2: '小麥麵條',
    description_zh2:
      '小麥麵條是用麵粉和澱粉和麵做成的麵條。在煮熟的小麥麵條上倒入高湯，再擺上小黃瓜、雞蛋絲、豬肉等配菜食用。起源於韓國戰爭時期，是釜山的代表性飲食。',
  },
  {
    id: 119,
    category: '면 [Myeon]',
    name: '바지락칼국수',
    pronounce: 'Bajirakkalguksu',
    description:
      '밀가루 반죽을 얇게 밀어 칼로 썬 다음 바지락을 넣어 끓인 국물에 국수를 넣어 삶은 음식이다.',
    name_en: 'Noodle Soup with Clams',
    description_en:
      'Fresh knifecut noodles (kalgulksu), made by rolling flour dough and slicing into thin noodles, cooked in a clear broth made with littleneck clams.',
    name_ja: 'アサリカルグクス',
    description_ja:
      '小麦粉をこねて薄くのばし細切りにした麺を、アサリでだしを取ったスープに入れて煮た料理。',
    name_zh: '蛤蜊刀切面',
    description_zh: '将面和好擀皮后切成细条，放入蛤蜊汤中煮熟即可。',
    name_zh2: '蛤蜊刀切麵',
    description_zh2: '將和麵擀成薄片，用刀切成麵條後放入蛤蜊高湯煮出熱呼呼的海鮮麵條。',
  },
  {
    id: 120,
    category: '면 [Myeon]',
    name: '버섯칼국수',
    pronounce: 'Beoseotkalguksu',
    description:
      '육수에 칼국수 면을 넣고 끓이다 표고버섯, 양송이버섯, 팽이버섯, 느타리버섯 등의 각종 버섯과 채소를 넣어 끓인 음식이다. 고추 양념을 넣어 얼큰하게 먹기도 한다.',
    name_en: 'Mushroom Noodle Soup',
    description_en:
      'This dish is prepared by boiling noodles in broth and adding a variety of mushrooms, such as shiitake, button, enoki, and oyster mushrooms. Red chili sauce can be added to make it spicy.',
    name_ja: 'きのこのカルグクス',
    description_ja:
      '出し汁にカルグクスの麺を加えて煮る。そこにシイタケ、マッシュルーム、エノキ、ヒラタケなどのきのこや野菜を加えて煮込んだ料理。唐辛子の薬味を加えて辛くして食べることもある。',
    name_zh: '蘑菇刀切面',
    description_zh:
      '将刀切面放入高汤里煮开，然后加入香菇、双孢菇、金针菇、平菇等各种蘑菇和蔬菜煮熟即可，也可以根据个人喜好加入辣椒调料。',
    name_zh2: '菌菇刀切麵',
    description_zh2:
      '將刀切麵放入高湯中煮開，然後加入香菇、洋菇、金針菇、秀珍菇等各種菌菇和蔬菜煮熟。可根據喜好加入辣椒調味料。',
  },
  {
    id: 121,
    category: '면 [Myeon]',
    name: '비빔국수',
    pronounce: 'Bibimguksu',
    description:
      '삶아서 물기를 뺀 국수에 오이, 미나리, 깻잎 등의 채소를 넣고, 고명으로 계란지단을 올려 새콤달콤한 초고추장이나 간장 양념장에 비벼 먹는 음식이다.',
    name_en: 'Spicy Noodles',
    description_en:
      'Chilled noodles topped with egg garnish and served with cucumber, Korean parsley, and perilla leaves. The noodles, egg garnish, and vegetables are mixed together with a vinegar-based gochujang or seasoned soy sauce.',
    name_ja: '混ぜ素麺',
    description_ja:
      '素麺をゆでて水気を切り、きゅうり、せり、ごまの葉などの野菜を加え、錦糸卵で飾り付け、甘酸っぱい唐辛子酢味噌や醤油ベースの薬味で和えて食べる。',
    name_zh: '拌面',
    description_zh:
      '将干面煮熟捞出滤掉水分，上面放黄瓜、水芹、苏子叶等蔬菜和鸡蛋丝，与酸辣酱搅拌而成。',
    name_zh2: '拌麵',
    description_zh2: '在煮熟的麵條放上辛奇、小黃瓜、生菜等後，加酸辣醬攪拌，呈現出酸甜美味。',
  },
  {
    id: 122,
    category: '면 [Myeon]',
    name: '비빔냉면',
    pronounce: 'Bibimnaengmyeon',
    description:
      '메밀로 만든 면을 삶아 찬물에 헹궈 물기를 뺀 다음 소고기 편육이나 홍어회무침, 무, 오이, 삶은 계란 등을 얹고 고추장 양념장에 비벼 차갑게 먹는 음식이다.',
    name_en: 'Spicy Buckwheat Noodles',
    description_en:
      'Chilled buckwheat noodles garnished with cold slices of beef, fresh skate, and radish or cucumber. Served with a spicy gochujang mixing sauce.',
    name_ja: '混ぜ冷麺',
    description_ja:
      'ゆでたそばを冷水ですすいで水気を切り、ゆでた牛肉やエイの刺身の和え物、大根、きゅうりなどをのせ、スープの代わりにコチュジャンベースの薬味を入れて混ぜて食べる冷麺。',
    name_zh: '拌冷面',
    description_zh:
      '拌冷面多使用荞麦面。荞麦面煮熟后用凉水冲洗并沥干水分，然后放入白切牛肉片、生拌斑鳐、萝卜、黄瓜等，用调味的辣椒酱拌匀即可。',
    name_zh2: '拌冷麵',
    description_zh2:
      '將蕎麥麵煮熟後用涼水沖洗並瀝乾水分。然後放入牛肉片或生拌斑鰩、蘿蔔、小黃瓜、煮雞蛋等，用調味的辣椒醬拌著吃。',
  },
  {
    id: 123,
    category: '면 [Myeon]',
    name: '수제비',
    pronounce: 'Sujebi',
    description:
      '밀가루를 반죽해 납작하게 떼어 맑은 장국에 넣고 끓인 음식이다. 멸치 국물을 주로 사용하며 기호에 따라 감자나 호박 등을 넣어 끓이기도 한다.',
    name_en: 'Hand-pulled Dough Soup',
    description_en:
      'Soft pieces of flour dough hand-torn and dropped into boiling stock. The stock is usually made with dried anchovies, but sliced potatoes or squash can be added according to preference.',
    name_ja: 'すいとん',
    description_ja:
      '小麦粉をこねて平たくちぎり、澄まし汁に入れて煮た料理。だしは主に煮干しで取るが、じゃがいもやかぼちゃなどを使うこともある。',
    name_zh: '面片汤',
    description_zh:
      '将和好的面用手揪成小块儿放入清汤中煮熟即可。面汤一般使用鳀鱼高汤，有时也会用土豆或南瓜等做高汤。',
    name_zh2: '麵片湯',
    description_zh2:
      '用手揪成一口大小後煮出香醇味道的麵食。除了鳀魚以外，還可用牛肉、蛤蜊等製作醬湯。',
  },
  {
    id: 124,
    category: '면 [Myeon]',
    name: '안동국시',
    pronounce: 'Andongguksi',
    description:
      '밀가루에 콩가루를 섞어 국수를 만들고, 이것을 건져 장국을 부어 만든 음식으로 경북 안동의 명물음식이다. 건진 국수라고도 불리는데, 칼국수를 익혀 찬물에서 건져냈다 하여 붙여졌다.',
    name_en: 'Andong Noodle',
    description_en:
      'Noodles made from flour mixed with bean powder and boiled in clear soup. Associated with Andong, North Gyeongsang Province, this noodle dish is also referred to as  "washed noodle," because the cooked noodles used to be washed in cold water.',
    name_ja: 'アンドン素麺',
    description_ja:
      '小麦粉に大豆の粉を混ぜた麺にスープを注いで作るアンドンの名物料理。茹でたカルグクスを一度冷水にさらし、それをすくい出すことから、コンジン（すくい出した）グクスとも呼ばれる。',
    name_zh: '安东面',
    description_zh:
      '面粉中混入豆粉和面做成面条，开水煮熟捞出后倒入酱汤即可。安东面是庆尚北道安东地区的特色美食，将煮熟的刀切面放入冷水中冲洗后捞出，因此又叫做捞面。',
    name_zh2: '安東面',
    description_zh2:
      '將麵粉與豆麵混合在一起做成麵條，把麵條煮熟後撈出來，再倒入大醬清湯。這是慶尚北道安東的地方美食。因為把煮熟的刀切麵從涼水裡撈出來，所以又叫做撈麵。',
  },
  {
    id: 125,
    category: '면 [Myeon]',
    name: '어탕국수',
    pronounce: 'Eotangguksu',
    description:
      '민물고기를 뼈째 갈아서 추어탕 식으로 끓여 국수를 말은 음식이다. 초피 가루를 같이 넣어 먹기도 하는데, 경남지역에서 보양음식으로 즐겨먹는다.',
    name_en: 'Noodle in Fish Stew',
    description_en:
      "Noodles in fish stew made by grinding and boiling freshwater fish. Japanese pepper powder can be added according to one's preference. This stew is eaten widely in the South Gyeongsang area as an energy-boosting dish.",
    name_ja: '魚スープの素麺',
    description_ja:
      '淡水魚を骨ごと粉にしてどじょうスープのように煮たものに素麺をからめた料理。カホクザンショウの粉を加えて食べる場合もある。キョンナム地域の滋養食としてよく食べられる。',
    name_zh: '鱼汤面',
    description_zh:
      '将淡水鱼连肉带骨一起搅碎，熬成像泥鳅汤一样的鱼汤，再将煮熟的面条倒入鱼汤中即可。根据喜好也可加入一些花椒粉，是庆尚南道地区常见的滋补美食。',
    name_zh2: '魚湯麵',
    description_zh2:
      '將淡水魚連肉帶骨搗碎，然後按照泥鰍湯的做法烹製，再把煮熟的麵條放進湯裡吃。有時候會放點花椒粉提味，是慶尚南道地區的滋補美食。',
  },
  {
    id: 126,
    category: '면 [Myeon]',
    name: '얼큰수제비',
    pronounce: 'Eolkeunsujebi',
    description:
      '멸치국물에 고추장과 고춧가루를 넣고 끓인 후 반죽한 수제비를 떼어 넣어 매콤하게 끓인 음식이다.',
    name_en: 'Spicy Hand-pulled Dough Soup',
    description_en:
      'This delicacy is prepared by dropping hand-pulled flour dough into boiling anchovy broth seasoned with gochujang (red chili paste) and red chili powder.',
    name_ja: 'ピリ辛 すいとん',
    description_ja:
      '煮干しの出し汁にコチュジャンと粉唐辛子を入れて煮込み、そこへすいとんをくっつかないように入れて辛めに仕立てた料理。',
    name_zh: '香辣面片汤',
    description_zh:
      '用鳀鱼熬制的清汤里加入辣椒酱和辣椒粉煮沸，然后放入面片煮熟即可，味道十分鲜辣可口。',
    name_zh2: '香辣面片湯',
    description_zh2: '香辣麵片湯是鯷魚湯裡加入辣椒醬與辣椒粉煮開，然後放入麵片煮熟的鮮辣美食。',
  },
  {
    id: 127,
    category: '면 [Myeon]',
    name: '얼큰칼국수',
    pronounce: 'Eolkeunkalguksu',
    description:
      '멸치국물에 고추장과 고춧가루를 넣고 끓인 후 반죽한 칼국수를 넣어 끓인 얼큰한 국물 음식이다.',
    name_en: 'Spicy Noodle Soup',
    description_en:
      'A spicy noodle dish made by boiling knife-cut noodles in hot anchovy broth seasoned with gochujang (red chili paste) and red chili powder.',
    name_ja: 'ピリ辛カルグクス',
    description_ja:
      '煮干しの出し汁にコチュジャンと粉唐辛子を入れて煮込み、そこへカルグクスを入れて辛めに仕立てた料理。',
    name_zh: '香辣刀切面',
    description_zh:
      '用鳀鱼熬制的清汤里加入辣椒酱与辣椒粉煮沸，然后放入刀切面煮熟即可，味道十分香辣可口。',
    name_zh2: '香辣刀切面',
    description_zh2: '鯷魚湯裡加入辣椒醬與辣椒粉煮開，然後放入刀切麵煮熟，是一道非常鮮辣的湯麵。',
  },
  {
    id: 128,
    category: '면 [Myeon]',
    name: '열무국수',
    pronounce: 'Yeolmuguksu',
    description:
      '‘어린 무’를 뜻하는 열무는 김치와 물냉면, 비빔밥(보리밥) 등의 재료로 널리 사용된다. 육수를 섞은 열무 김칫국에 삶은 국수를 넣고 열무김치를 얹어 시원하게 먹는다.',
    name_en: 'Young Summer Radish KimchiNoodles',
    description_en:
      'This dish is boiled noodles inyeolmukimchi mixed with beef stock. Yeolmu, or young radish, is widely used to make kimchi, mulnaengmyeon, and bibimbap (boiled barley).',
    name_ja: '大根若菜キムチ素麺',
    description_ja:
      '大根の若菜はキムチや冷麺、ビビンバ（麦ご飯）などの具材にも用いられる。出汁を混ぜた大根若菜キムチの汁に茹でた麺を入れ、大根若菜キムチをのせて冷たくして食べる。',
    name_zh: '萝卜缨辛奇面',
    description_zh:
      '萝卜缨常用作辛奇、冷面、拌饭(大麦饭)等的材料。用萝卜缨辛奇汤汁调和高汤，加入煮熟的面条，上面再放些萝卜缨辛奇，味道十分爽口。',
    name_zh2: '蘿蔔纓辛奇麵',
    description_zh2:
      '蘿蔔纓也指「小蘿蔔」，用途很廣，做辛奇、冷麵、拌飯（大麥飯）等時都會用到。加入高湯的蘿蔔纓辛奇湯裡放入麵條，再放蘿蔔纓辛奇吃則非常爽口。',
  },
  {
    id: 129,
    category: '면 [Myeon]',
    name: '열무냉면',
    pronounce: 'Yeolmunaengmyeon',
    description:
      '열무를 절여 양파, 쪽파, 고추, 마늘 등과 함께 버무려 밀가루풀을 넣고 국물을 부어 담근 김칫국에 냉면 육수를 붓고 삶아 낸 냉면과 달걀 반쪽을 얹어서 먹는 여름철 별미음식이다.',
    name_en: 'Buckwheat Noodles with YoungSummer Radish Kimchi',
    description_en:
      'This dish features cold noodles in kimchi soup that is made by mixing salted young radish with chopped onion, chives, pepper, garlic, and flour paste to create a broth. A popular summer dish, yeolmunaengmyeon is served with a boiled halved egg and other garnishes.',
    name_ja: '大根若菜キムチ冷麺',
    description_ja:
      '大根若菜を塩漬けにし、たまねぎ、万能ねぎ、唐辛子、にんにくなどと一緒に和える。小麦粉の糊を加え、漬け込んだ大根若菜キムチの汁に冷麺スープを入れ、茹でた冷麺と半分に切った茹で卵をのせて食べる夏の料理。',
    name_zh: '萝卜缨辛奇冷面',
    description_zh:
      '将腌制的萝卜缨跟洋葱、小葱、辣椒、大蒜等一起搅拌，加入面粉糨糊和汤水制成辛奇，然后在里面倒入冷面汤，上面放半个水珠鸡蛋，是适合夏天食用的美食特色菜。',
    name_zh2: '蘿蔔纓辛奇冷面',
    description_zh2:
      '在醃製好的蘿蔔纓辛奇裡加入洋蔥、香蔥、辣椒、大蒜等拌勻，再加入麵糊和高湯做成湯料，在湯料裡倒入冷麵湯，再把煮好的冷面和半個雞蛋放在湯裡，是一道適合夏季吃的美味佳餚。',
  },
  {
    id: 130,
    category: '면 [Myeon]',
    name: '열무비빔국수',
    pronounce: 'Yeolmubibimguksu',
    description:
      '국수에 잘 익은 열무김치와 오이, 채소 등을 잘게 썰어 고추장 양념장으로 비빈 음식이다. 입맛 없는 여름에 가볍게 먹기 좋다.',
    name_en: 'Spicy Noodles with Young Summer Radish Kimchi',
    description_en:
      'Noodles topped with well-fermented yeolmukimchi (young summer radish) and julienned cucumber and other vegetables. It is a summer delicacy that is mixed with a gochujang (red chili paste) sauce at the table.',
    name_ja: '大根若菜混ぜ素麺',
    description_ja:
      '素麺によく漬かった大根若菜キムチときゅうり、野菜などを細かく刻んでコチュジャンベースのたれでからめた料理。食欲のないときに軽く食べるのにおすすめ。',
    name_zh: '萝卜缨辛奇面',
    description_zh:
      '将面条和充分发酵的萝卜缨辛奇以及切碎的黄瓜、蔬菜等一起用辣椒调味酱拌着吃，简单又美味，尤其适合在没有食欲的夏季食用。',
    name_zh2: '蘿蔔纓辛奇面',
    description_zh2:
      '把熟透的蘿蔔纓辛奇、黃瓜、蔬菜等切碎，並用辣椒醬與調味醬拌勻，是沒有食欲的夏季尤其受歡迎的簡單美食。',
  },
  {
    id: 131,
    category: '면 [Myeon]',
    name: '온면',
    pronounce: 'Onmyeon',
    description:
      '쇠고기로 끓인 육수에 국수를 말아서 만든 음식으로 국수장국이라고도 한다. 국수 가닥처럼 길게 장수하라는 축원을 담아 혼인이나 생일 때 여러 사람에게 대접하기도 한다.',
    name_en: 'Warm Noodles',
    description_en:
      'Noodles in hot beef-based broth, Onmyeon is also referred to as “Guksujangguk.” It is often served at birthday parties and wedding ceremonies to wish for the longevity of others, as long noodles symbolize longevity in Korea.',
    name_ja: '温麺',
    description_ja:
      '牛肉でとった出し汁に素麺をからめた料理。素麺スープとも呼ばれる。素麺のように、細く長く生きるようにと願いを込めて婚姻や誕生日などの祝い事の際におもてなし料理としてよく出される。',
    name_zh: '温面',
    description_zh:
      '将面条煮熟后，泡入用牛肉熬制的高汤中吃即可。温面又称为面条酱汤，因长长的面条意喻健康长寿，经常在结婚或过生日时用来招待客人。',
    name_zh2: '溫面',
    description_zh2:
      '是用牛肉湯泡著吃的麵條，又被稱為麵條醬湯。結婚或過生日的時候會請大家吃麵條，寓意像長長的麵條一樣健康長壽。',
  },
  {
    id: 132,
    category: '면 [Myeon]',
    name: '올챙이국수',
    pronounce: 'Olchaengiguksu',
    description:
      '묵처럼 익힌 옥수수나 감을 좀 굵고 짤막짤막하게 만든 국수이다. 국수 가락이 올챙이 같다는 것에서 이름을 붙였다. 흔히 콩국에 넣어 먹으며 쫄깃한 식감과 구수한 맛이 뛰어나다.',
    name_en: 'Tadpole Noodles',
    description_en:
      'Made with cooked corn or persimmons that look like jelly, the noodles are short and stout like tadpoles, hence the name tadpole noodles. The noodles are often served in soybean soup and are loved for their chewy texture and savory flavor.',
    name_ja: 'とうもろこし麺',
    description_ja:
      'とうもろこしや柿のこんにゃくを太くて短い麺にして食べるもの。その麺がおたまじゃくしに似ていることから「オルチェンイ（おたまじゃくし）麺」という。豆乳に入れて食べると歯ごたえのある食感や濃厚な風味を楽しむことができる。',
    name_zh: '蝌蚪面',
    description_zh:
      '将凉粉形态的玉米或柿子做成粗短的面条。因面条的形状像蝌蚪而得名。一般是泡豆浆吃，口感劲道，味道香醇。',
    name_zh2: '蝌蚪狀玉米涼粉',
    description_zh2:
      '將以涼粉形態煮熟的玉米或柿子捏成粗短的麵條。因麵條形似蝌蚪而得名。一般會泡在豆漿中吃，口感有嚼勁、香味濃郁。',
  },
  {
    id: 133,
    category: '면 [Myeon]',
    name: '잔치국수',
    pronounce: 'Janchiguksu',
    description:
      '삶은 국수에 계란지단 등으로 고명을 얹고 멸치장국을 부어낸 국수로 예로부터 결혼식, 생일, 환갑 등 잔치 때 손님을 대접하는 대표 음식이다.',
    name_en: 'Banquet Noodles',
    description_en:
      'Noodles in hot anchovy broth with egg garnish. Typically served at weddings, birthdays, and other festive occasions.',
    name_ja: 'にゅうめん',
    description_ja:
      'ゆでた麺に錦糸卵などで飾り付けをし、煮干しでだしを取ったスープをかけたもの。昔から結婚式や誕生日、還暦祝いなどのお祝いの席でふるまわれた。',
    name_zh: '喜面',
    description_zh:
      '在煮熟的面条上放鸡蛋丝等菜码，再浇上鳀鱼汤汁而成。自古用来在婚宴、生日宴、花甲宴时招待宾客。',
    name_zh2: '喜麵',
    description_zh2:
      '細麵條煮熟後放配料，再澆上鳀魚湯汁而成。自古在婚宴、壽宴、花甲宴時用來招待賓客。',
  },
  {
    id: 134,
    category: '면 [Myeon]',
    name: '장칼국수',
    pronounce: 'Jangkalguksu',
    description:
      '국물에 고추장, 된장 등을 풀어 끓인 칼국수 요리이다. 면발이 쫄깃하고 얼큰한 국물이 특징이다. 강원도 지역의 향토 음식이다.',
    name_en: 'Gochujang and Doenjang Noodle Soup',
    description_en:
      'A knife-cut noodle dish made by boiling noodles in broth seasoned with gochujang (red chili paste) and doenjang (soybean paste). The noodles are chewy and the broth is spicy. It is a local delicacy of Gangwon Province.',
    name_ja: 'コチュジャンカルグクス',
    description_ja:
      '出し汁にコチュジャンやテンジャンなどを溶いて煮たカルグクス。コシのある麺と辛いスープが魅力の江原道地域の郷土料理。',
    name_zh: '辣椒酱刀切面',
    description_zh:
      '在高汤中放入辣椒酱和大酱等熬煮而成的刀切面。面条筋道，汤汁香辣，是江原道的地方美食。',
    name_zh2: '辣醬刀切麵',
    description_zh2:
      '在高湯中放入辣椒醬和大醬煮成的刀切麵。充滿嚼勁的麵條和麻辣的湯底為其特徵，是江原道地區的鄉土飲食。',
  },
  {
    id: 135,
    category: '면 [Myeon]',
    name: '쟁반국수',
    pronounce: 'Jaengbanguksu',
    description:
      '삶아서 물기를 뺀 메밀국수와 오이, 깻잎 등의 채소를 썰어 쟁반에 둘러 담고 초고추장에 버무려 먹는 여름철 별미 음식이다.',
    name_en: 'Jumbo-sized Buckwheat Noodles',
    description_en:
      'Chilled buckwheat noodles with shredded cucumber, perilla leaves, and other vegetables. Served cold on a large platter with a vinegar-based gochujang dipping sauce.',
    name_ja: '大皿そば',
    description_ja:
      'ゆでて水気を切ったそばと、きゅうりや、ごまの葉などの野菜を大皿にのせ、唐辛子酢味噌で和えて食べる。',
    name_zh: '大盘荞麦面',
    description_zh:
      '荞麦面加入蔬菜用酸辣酱搅拌的夏季特色美食。先将荞麦面煮熟捞出来控水后放到大盘中间，黄瓜、苏子叶等蔬菜切丝绕着面条放一圈，然后用辣椒酱搅拌均匀即可食用。',
    name_zh2: '大盤蕎麥麵',
    description_zh2: '準備煮熟的蕎麥麵和蔬菜、肉片等鋪在大盤上，用酸辣醬拌著吃的拌麵。',
  },
  {
    id: 136,
    category: '면 [Myeon]',
    name: '쟁반막국수',
    pronounce: 'Jaengbanmakguksu',
    description:
      '메밀로 만든 막국수를 각종 채소와 간장 또는 고추장 양념을 곁들여 쟁반처럼 크고 납작한 접시에 담아낸 음식이다. 양념장을 얹어 비벼 먹는 재미가 쏠쏠하다.',
    name_en: 'Jumbo-sized Buckwheat Noodles',
    description_en:
      'Chilled buckwheat noodles and a variety of vegetables with soy sauce or gochujang (red chili paste). The dish is served on a large platter and the ingredients are mixed at the table. This makes the dish fun to eat.',
    name_ja: '大皿混ぜそば',
    description_ja:
      'ゆでたそばと野菜に、醤油やコチュジャンベースのたれをかけて大皿に盛り付けた料理。たれを混ぜて食べると旨みがいっそう際立つ。',
    name_zh: '大盘荞麦凉面',
    description_zh:
      '由荞麦制成的荞麦凉面搭配各种蔬菜、酱油或辣椒酱调料，装在大的平盘里。再放入一些酱料拌着吃，别有一番风味。',
    name_zh2: '大盤蕎麥涼麵',
    description_zh2:
      '用蕎麥製作的蕎麥麵搭配各種蔬菜、醬油或辣椒醬調味料，盛在大而扁平的盤子裡。和調味料一起拌著吃別有一番風味。',
  },
  {
    id: 137,
    category: '면 [Myeon]',
    name: '진주냉면',
    pronounce: 'Jinjunaengmyeon',
    description:
      '삶은 메밀면에 건새우와 마른홍합, 마른명태, 표고버섯 등을 넣고 우려낸 해물육수를 숙성시켜 사용한다. 채 썬 배추김치, 쇠고기 육전, 달걀지단 등 고명을 수북하게 올려 매우 화려하다.',
    name_en: 'Jinju Cold Buckwheat Noodles',
    description_en:
      'Boiled buckwheat noodles served in a seafood broth made by boiling dried seafood, such as shrimp, mussel meat, and pollack, and shiitake mushroom. This noodle dish is served with colorful toppings, including julienned Korean cabbage kimchi, battered and pan-fried beef, and egg garnish.',
    name_ja: 'チンジュ冷麺',
    description_ja:
      '干し海老、干しムール貝、干しスケトウダラ、しいたけなどを入れて出汁をとった魚介スープを熟成させたものに茹でたそばを加える。細切りにした白菜キムチ、牛肉のチヂミ、錦糸卵などを盛り付けると、とても華やかになる料理。',
    name_zh: '晋州冷面',
    description_zh:
      '将干虾、干贻贝、干明太鱼、香菇等放在一起熬出汤并待其熟成，荞麦面煮好后倒入煮好的汤，再放上足量的辛奇丝、牛肉饼、煎鸡蛋等菜码，看起来十分丰盛美味。',
    name_zh2: '晉州冷面',
    description_zh2:
      '用蝦、貽貝、明太魚、香菇等乾貨熬製海鮮高湯，蕎麥麵煮熟後，倒入發酵待用的海鮮高湯，再加入切絲的辛奇、牛肉煎餅、蛋皮等菜碼，看起來十分豐盛華麗。',
  },
  {
    id: 138,
    category: '면 [Myeon]',
    name: '쫄면',
    pronounce: 'Jjolmyeon',
    description:
      '쫄면은 굵은 밀가루 면으로 쫄깃한 것이 특징이다. 삶은 쫄면에 오이, 양배추, 콩나물 등의 채소를 넣어 매콤한 양념에 비벼 먹는다.',
    name_en: 'Spicy Chewy Noodles',
    description_en:
      'Jjolmyeon refers to thick flour noodles characterized by their chewiness. It is usually topped with cucumber, cabbage, and bean sprout and mixed with a gochujang (red chili paste) sauce at the table.',
    name_ja: 'チョルミョン',
    description_ja:
      'チョルミョンは小麦粉を使用した太めの麺で、こしがあるのが特徴。茹でたチョルミョンにきゅうり、キャベツ、豆もやしなどの野菜を加え、辛めのたれをからめて食べる。',
    name_zh: '辣拌筋面',
    description_zh:
      '用面粉做成的粗面条，口感十分劲道。将煮好的筋面和黄瓜、圆白菜、豆芽等蔬菜一起用香辣调味料拌着吃即可。',
    name_zh2: '辣拌筋面',
    description_zh2:
      '筋面是又粗又勁道的麵條。煮好的麵裡放入黃瓜、圓白菜、豆芽等蔬菜，然後用香辣調味料拌勻即可享用。',
  },
  {
    id: 139,
    category: '면 [Myeon]',
    name: '초계국수',
    pronounce: 'Chogyeguksu',
    description:
      '잘 삶아 낸 메밀 면에 식힌 닭육수를 붓고 식초와 겨자로 간을 한 뒤 잘게 찢은 닭고기 살과 채소를 얹어 먹는 여름 보양식이다.',
    name_en: 'Cold Chicken Noodles',
    description_en:
      'This dish consists of buckwheat noodles served in chilled chicken soup flavored with vinegar and mustard and topped with shredded chicken. Chogyeguksu is a dish commonly eaten in summer as it is believed to raise energy levels.',
    name_ja: 'チョゲグクス',
    description_ja:
      '茹でたそばに、冷ました鶏の出し汁を注ぎ、酢と辛子で味付けし、細切りにした鶏肉と野菜をのせて食べる夏の滋養食。',
    name_zh: '醋鸡面',
    description_zh:
      '在煮好的荞麦面中倒入放凉的鸡汤，用醋和芥末酱调味后，上面摆放撕成细丝的鸡肉和蔬菜即可，是夏日滋补的食物。',
    name_zh2: '醋雞麵',
    description_zh2:
      '把放涼的雞湯倒入煮好的蕎麥麵裡，用食醋與芥末調味，再放入雞絲和蔬菜即成一碗美味可口的夏日滋補麵。',
  },
  {
    id: 140,
    category: '면 [Myeon]',
    name: '칡냉면',
    pronounce: 'Chingnaengmyeon',
    description:
      '칡 전분과 밀가루를 섞어 면을 뽑고 양념장과 육수를 부어 먹는 음식이다. 다른 냉면에 비해 면이 검은 빛을 띠며, 칡의 독특한 향을 느낄 수 있다.',
    name_en: 'Cold Arrow Root Noodles',
    description_en:
      'Noodles served with a spicy sauce and cold broth that are mixed at the table. As the noodles of this dish are made from arrow root starch mixed with flour, they look rather dark and give off the distinctive fragrance of arrow root.',
    name_ja: '葛冷麺',
    description_ja:
      '葛粉と小麦粉を混ぜ合せた麺。たれとスープを注いで食べる。他の冷麺に比べ、黒く、葛独特の香りが楽しめる。',
    name_zh: '葛粉冷面',
    description_zh:
      '用葛粉和面粉调和后加工成面条，再加入调味酱和高汤即可。葛粉冷面和其他冷面相比，颜色墨黑，而且有一股葛根特有的香味。',
    name_zh2: '葛粉冷面',
    description_zh2:
      '用葛根澱粉與麵粉混在一起做成麵條，加入調味醬與冷麵湯一起吃。葛根冷麵顏色較深，帶有葛根特有的清香。',
  },
  {
    id: 141,
    category: '면 [Myeon]',
    name: '칼국수',
    pronounce: 'Kalguksu',
    description:
      '반죽하여 얇게 민 뒤 칼로 가늘게 썰어 끓인 국수다. 멸치를 진하게 우려낸 국물에 애호박, 감자, 해물 등을 함께 넣고 끓여 먹는다.',
    name_en: 'Noodle Soup',
    description_en:
      'Fresh knife-cut noodles, made by rolling flour dough and slicing into thin noodles, cooked in anchovy sauce. Zucchini, potatoes, and seafood may beadded.',
    name_ja: 'カルグクス',
    description_ja:
      '小麦粉をこねて薄くのばし細切りにした麺を、煮干しでじっくりだしを取ったスープに入れ、エホバク、じゃがいもなどを加えて煮た料理。',
    name_zh: '刀切面',
    description_zh:
      '将面和好擀成面皮后用刀切成细条，放到清汤中煮熟即可。面汤一般使用鳀鱼高汤，煮面时可按喜好加入西葫芦、土豆、海鲜等。',
    name_zh2: '刀切麵',
    description_zh2:
      '擀上麵粉和麵切成長條後，放入雞肉、鳀魚等高湯煮出。料理時，也會放入櫛瓜、馬鈴薯以及各種海鮮。',
  },
  {
    id: 142,
    category: '면 [Myeon]',
    name: '코다리냉면',
    pronounce: 'Kodarinaengmyeon',
    description:
      '냉면을 삶아 찬물에 헹궈 물기를 뺀 다음 양념한 코다리를 올리고, 양념장에 비벼먹는 음식이다.',
    name_en: 'Cold Buckwheat Noodles with Half-dried Pollak',
    description_en:
      'Cold noodles boiled, rinsed in cold water, and drained. Topped with seasoned and shredded half-dried pollack, this cold noodle dish is mixed with a spicy sauce at the table.',
    name_ja: '半干しスケトウダラ入り冷麺',
    description_ja:
      '冷麺を茹で冷水で洗い、水気を切る。そこへ味つけした半干しスケトウダラをのせ、合わせ調味料を加えて混ぜて食べる。',
    name_zh: '半干明太鱼冷面',
    description_zh:
      '冷面煮熟后用凉水冲洗，捞出沥干水分后，将调味好的半干明太鱼放置冷面上，加入调味酱拌着吃即可。',
    name_zh2: '半乾明太魚冷面',
    description_zh2:
      '冷麵煮熟後用涼水沖洗並瀝幹水分，把調味半幹明太魚放在冷麵上，再用調味醬拌勻即可。',
  },
  {
    id: 143,
    category: '면 [Myeon]',
    name: '콧등치기국수',
    pronounce: 'Kotdeungchigiguksu',
    description:
      '‘콧등치기’는 국수 가락이 억세 먹을 때 콧등을 친다고 해서 붙여진 이름이다. 감자옹심이와 메밀국수를 소고기 육수에 넣고 끓여 먹는 강원도 향토 음식이다.',
    name_en: 'Buckwheat Noodles with Potato Balls',
    description_en:
      'A local specialty of Gangwon Province, Kotdeungchigiguksu is buckwheat noodles boiled with potato ongsimi that has been boiled in beef stock. The name of this dish comes from the fact that the noodles are chewy and springy enough to hit (chigi) the bridge of one’s nose (kotdeung).',
    name_ja: 'じゃがいも団子入りそば',
    description_ja:
      'じゃがいも団子とそばを牛肉のスープに入れて煮た江原道の郷土料理。韓国語名は、麺をすする時に麺の端が鼻を打つことから「콧등치기국수 コットゥンチギグクス（鼻打ち麺）」という。',
    name_zh: '土豆粉团荞麦面',
    description_zh:
      '面条筋道有韧性，吃的时候甚至会打到鼻梁，因此而得名。将土豆丸子和荞麦面条放入牛肉高汤中熬煮，是江原道的乡土饮食。',
    name_zh2: '土豆粉團蕎麥麵',
    description_zh2:
      '土豆粉團蕎麥麵又被稱為「打鼻子蕎麥麵」，這是因為不像其他麵條那麼柔軟，吃的時候經常會打到鼻子。這是一道土豆粉團和蕎麥麵放入牛肉湯裡煮出來的江原道地方美食。',
  },
  {
    id: 144,
    category: '면 [Myeon]',
    name: '콩국수',
    pronounce: 'Kongguksu',
    description:
      '콩국물에 국수를 말아 먹는 음식이다. 콩을 삶아 곱게 간 다음 체에 걸러낸 후 그 국물에 국수를 말고 소금으로 간한 뒤 얼음을 띄워 열무김치와 함께 먹는 여름철 음식이다.',
    name_en: 'Noodles in Cold Soybean Soup',
    description_en:
      'Noodles in chilled soybean soup. This soup is made of boiled and puréed soybeans and seasoned with salt. A summer staple served with ice and Yeolmukimchi (young summer radish kimchi) on the side.',
    name_ja: '豆乳素麺',
    description_ja:
      '蒸した豆を細かく挽いてこしたスープに麺を入れ、塩で味を加減して 氷を浮かべて食べる。ヨルムキムチを添えて食べる夏の定番メニュー。',
    name_zh: '豆汁面',
    description_zh:
      '煮熟的黄豆打浆过滤做成豆汁，其中加入煮熟的面条和少许食盐，并加入冰块和辛奇，多在夏季食用。',
    name_zh2: '豆汁麵',
    description_zh2:
      '煮熟的黃豆打漿過濾做成豆汁，其中加入煮熟的麵條製成，加入食鹽調味，並加入小蘿蔔辛奇是夏季吃的代表麵食。',
  },
  {
    id: 145,
    category: '면 [Myeon]',
    name: '팥칼국수',
    pronounce: 'Patkalguksu',
    description:
      '팥을 무르게 삶아 거른 국물에 칼국수를 넣고 끓인 국수이다. 기호에 따라 설탕이나 소금으로 간을 해서 먹는다.',
    name_en: 'Red Bean Paste Noodle Soup',
    description_en:
      'This soup is prepared by boiling knife-cut noodles in a broth made by boiling red beans until soft and tender and sieving them. A dash of sugar or salt may be added according to one’s preference.',
    name_ja: '小豆カルグクス',
    description_ja:
      '小豆をやわらかく茹でてこしたスープにカルグクスを入れて煮込んだ麺料理。好みで砂糖や塩で味を調えて食べる。',
    name_zh: '红豆刀切面',
    description_zh:
      '红豆煮烂后滤掉豆渣，再将刀切面放入豆汁中熬煮至熟即可。可根据喜好用白糖或盐调味。',
    name_zh2: '紅豆刀切面',
    description_zh2: '把紅豆煮熟，並用過濾好的煮豆水煮刀切麵，可根據喜好用白糖或鹽調味。',
  },
  {
    id: 146,
    category: '면 [Myeon]',
    name: '평양냉면',
    pronounce: 'Pyeongyangnaengmyeon',
    description:
      '메밀가루로 만든 국수를 찬 냉면 국물에 말아 먹는 것으로 평양 지방의 향토음식이다. 예전에는 육수로 꿩을 삶은 국물을 이용하였으나 지금은 쇠고기와 사골 뼈를 사용한다.',
    name_en: 'Pyeongyang Cold Buckwheat Noodles',
    description_en:
      'A local specialty of the Pyeongyang area, this dish is buckwheat noodles served in a chilled meat-based broth. In the past, the broth was made by boiling pheasant, but now it is made with beef and beef leg bone.',
    name_ja: 'ピョンヤン冷麺',
    description_ja:
      'そば粉で作った麺を冷たい冷麺スープにからめて食べるピョンヤン地方の郷土料理。以前はだしに雉を煮込んだスープを使用していたが、現在は牛肉と牛骨を使用する。',
    name_zh: '平壤冷面',
    description_zh:
      '平壤地区的地方特色美食，将荞麦面放入碗中，倒入冷面汤即可食用。以前用山鸡熬制的高汤制作冷面汤，现在多使用牛肉和牛腿骨。',
    name_zh2: '平壤冷面',
    description_zh2:
      '把蕎麥麵放入冷麵湯裡吃即可，是平壤的美食。過去用山雞湯做冷麵湯，現在則用牛肉和牛棒骨湯。',
  },
  {
    id: 147,
    category: '면 [Myeon]',
    name: '함흥냉면',
    pronounce: 'Hamheungnaengmyeon',
    description:
      '감자나 고구마 녹말로 국수를 만들어 양념장을 넣고 버무린 후 가자미나 홍어 등 생선회를 매콤하게 무쳐 올려 낸다. 회를 무쳐 넣었다 하여 회냉면이라고도 부른다.',
    name_en: 'Hamheung Cold Buckwheat Noodles',
    description_en:
      'Potato or sweet potato starch noodles mixed with a spicy sauce and topped with sliced raw flounder or skate. Owing to its topping of raw fish, this dish is often referred to as “hoenaengmyeon (cold noodles with sliced raw fish).”',
    name_ja: 'ハムフン冷麺',
    description_ja:
      'じゃがいもやさつまいものでんぷんで麺を作り、たれを加えて和えた後、辛く味付けしたカレイやガンギエイなどの刺身の和え物をのせる。刺身を和えてのせることから、刺身冷麺とも呼ばれる。',
    name_zh: '咸兴冷面',
    description_zh:
      '用土豆或地瓜淀粉制成面条，加入调味酱搅拌均匀，再将鲽鱼或斑鳐等做成辣拌生鱼片后放在冷面上即可。因放入辣拌生鱼片，所以又叫做辣拌生鱼片冷面。',
    name_zh2: '咸興冷面',
    description_zh2:
      '用土豆或紅薯澱粉做麵條，放點調味醬拌勻，然後放點辣味的鰈魚或斑鰩等新鮮生魚片一起吃。因為有生魚片，所以又叫做辣拌生魚片冷麵。',
  },
  {
    id: 148,
    category: '면 [Myeon]',
    name: '항아리수제비',
    pronounce: 'Hangarisujebi',
    description:
      '육수에 바지락과 갖은 채소, 수제비를 넣어 끓인 것을 항아리에 담아내는 음식이다. 항아리에 담아 먹기 때문에 음식을 다 먹을 때까지 따뜻하게 즐길 수 있다.',
    name_en: 'Hand-pulled Dough Soup in Pot',
    description_en:
      'This dish is sujebi (soft pieces of flour dough hand-pulled and dropped in boiling stock) boiled with baby clams and vegetables and served in an earthen jar, which helps keep the sujebi warm until the end of the meal.',
    name_ja: '壷すいとん',
    description_ja:
      '出し汁にアサリと野菜、すいとんを入れて煮たものを、壷に入れて食べる料理。保温効果があるため、最後まで温かい料理が楽しめる。',
    name_zh: '坛子面片汤',
    description_zh:
      '高汤里放入蛤蜊和各种蔬菜以及面片一起熬煮，煮熟后盛在小坛子里端上桌即可。坛子有保温的效果，可以令食物保持温热。',
    name_zh2: '壇子麵片湯',
    description_zh2:
      '湯裡放入蛤蜊和各種蔬菜，以及麵片煮熟。等要吃的時候用小罎子盛好端上桌，罎子的保溫效果非常好，可以全程享用溫度適宜的美味。',
  },
  {
    id: 149,
    category: '면 [Myeon]',
    name: '해물수제비',
    pronounce: 'Haemulsujebi',
    description:
      '조개와 새우 등 해산물로 우려낸 육수에 감자와 호박, 그리고 밀가루를 반죽해 납작하게 떼어 낸 수제비를 넣어 끓인 음식이다.',
    name_en: 'Hand-pulled Dough Soup with Seafood',
    description_en:
      'To make this dish, soft pieces of hand-torn flour dough are dropped into boiling stock, which is made by boiling seafood, such as clam and shrimp, along with potato and zucchini.',
    name_ja: '海鮮すいとん',
    description_ja:
      '貝やエビなどの魚介でとった出し汁に、じゃがいもとズッキーニ、そして小麦粉をこねて平たくのばしたすいとんを入れて煮た料理。',
    name_zh: '海鲜刀切面',
    description_zh:
      '用贝类和虾等海鲜熬制鲜汤，再放入土豆、西葫芦以及用面粉做成的面片一起熬煮至熟。',
    name_zh2: '海鮮刀切面',
    description_zh2: '用貝類和蝦等海鮮熬出鮮湯，然後放入土豆、西葫蘆，以及用麵粉做的麵片煮熟。',
  },
  {
    id: 150,
    category: '면 [Myeon]',
    name: '해물칼국수',
    pronounce: 'Haemulkalguksu',
    description:
      '칼국수는 밀가루를 반죽해 얇게 민 뒤 칼로 가늘게 썰어 끓인 국수다. 해물 칼국수는 바지락조개를 삶아 만든 육수에 새우, 낙지, 조개 등의 해산물을 넣고 시원하게 끓인 국수이다.',
    name_en: 'Noodle Soup with Seafood',
    description_en:
      'Kalguksu is a noodle soup made by slicing thinly rolled flour dough into thin noodles and boiling them in broth. Kalgukgu with seafood is made by boiling thin noodles with seafood, such as shrimp, octopus, and clam, in a baby clam broth.',
    name_ja: '海鮮カルグクス',
    description_ja:
      'カルグクスは小麦粉をこねて薄くのばしたものを細切りにして煮た麺料理。海鮮カルグクスはアサリでとった出し汁にエビ、テナガダコ、貝などの魚介を入れて煮たもの。',
    name_zh: '海鲜刀切面',
    description_zh:
      '将和好的面团擀成薄薄的面皮，用刀切成条状后，放入用蛤蜊熬制的清汤中，再加入虾、章鱼、贝类等海鲜一起熬煮即可。',
    name_zh2: '海鮮刀切面',
    description_zh2:
      '把麵團擀平，然後切成麵條。蛤蜊湯裡放入蝦、章魚、貝類等海鮮熬出鮮湯，然後把麵條煮熟即可。',
  },
  {
    id: 151,
    category: '면 [Myeon]',
    name: '황태비빔막국수',
    pronounce: 'HwangtaeBibimmakguksu',
    description:
      '잘 삶아 낸 메밀 면에 채로 썬 황태를 얹고 양념장과 고명을 곁들여 비벼 먹는 국수 요리로 연하고 고소한 황태 맛과 메밀 특유의 감칠맛을 함께 느낄 수 있다.',
    name_en: 'Spicy Buckwheat Noodles with DriedPollack',
    description_en:
      'This dish consists of spicy buckwheat noodles topped with sliced dried pollack, sauce, and garnishes. The tender and tasty dried pollack matches well with the characteristic savory flavor of buckwheat noodles.',
    name_ja: 'スケトウダラ入り混ぜそば',
    description_ja:
      '茹でたそばに、細切りにした干しスケトウダラをのせ、ヤンニョムジャンと薬味を添えて混ぜて食べる麺料理。柔らかく香りの良い干しスケトウダラの風味とそば特有の風味を一緒に楽しむことができる。',
    name_zh: '干明太鱼拌荞麦凉面',
    description_zh:
      '在煮好的荞麦面中放入切成丝的干明太鱼，再加入调味酱和菜码拌着吃即可。又软又香的干明太鱼和荞麦特有的鲜味令人赞不绝口。',
    name_zh2: '幹明太魚拌蕎麥涼麵',
    description_zh2:
      '在煮好的蕎麥麵上放入切成絲的幹明太魚，再加入調味汁和菜碼拌勻。幹明太魚口感柔軟、有滋有味，能跟蕎麥特有的香味完美地融合在一起。',
  },
  {
    id: 152,
    category: '면 [Myeon]',
    name: '황태칼국수',
    pronounce: 'Hwangtaekalguksu',
    description:
      '가늘게 찢어 물에 담갔다가 물기를 꼭 짜낸 후 달걀을 입혀 튀긴 황태를 감자와 밀가루로 반죽해 조개 국물에 넣고 끓인 칼국수 위에 얹어 먹는다.',
    name_en: 'Noodle Soup with Dried Pollack',
    description_en:
      'This dish consists of knife-cut noodles boiled with potatoes in a clam stock and topped with dried pollack. The dried pollack is shredded into pieces, soaked in water, and then squeezed to remove excess moisture, before being battered in beaten eggs and fried.',
    name_ja: 'スケトウダラのカルグクス',
    description_ja:
      '貝で出汁をとったスープに、じゃがいもと小麦粉で練った生地の麺を入れて煮る。最後に水で戻して細かく裂いた干しスケトウダラを、卵につけて揚げたものをのせて食べる。',
    name_zh: '干明太鱼刀切面',
    description_zh:
      '将撕细的干明太鱼浸泡在水中，挤干水分后裹上鸡蛋水油炸待用。用土豆和面粉和面做成刀切面，放入蛤蜊高汤中熬煮，最后将干明太鱼放在上面即可。',
    name_zh2: '幹明太魚刀切麵',
    description_zh2:
      '用水泡軟幹明太魚絲後擠幹水分，用雞蛋液包起來再油炸，把土豆和麵粉和在一起做成刀切麵，再用海貝湯煮熟，把油炸幹明太魚絲當菜碼跟刀切麵一起吃即可。',
  },
  {
    id: 153,
    category: '면 [Myeon]',
    name: '회냉면',
    pronounce: 'Hoenaengmyeon',
    description:
      '냉면에 고춧가루 등으로 맛을 낸 양념장을 넣고 버무려서 홍어회 무침과 채소 등을 올려 비벼 먹는다. 쫄깃한 면발과 맵고 진한 양념장, 홍어회의 알싸한 맛이 잘 어울리는 별미 음식이다.',
    name_en: 'Cold Buckwheat Noodles with Raw Fish',
    description_en:
      'This dish consists of naengmyeon (cold buckwheat noodles) mixed with a spicy red chili powder and topped with hongeohoemuchim (sliced and seasoned raw skate) and vegetables, among others. The chewy noodles mixed with the thick, spicy sauce go well with the pungent taste of raw skate.',
    name_ja: '刺身入り冷麺',
    description_ja:
      '冷麺に唐辛子などで味付けしたヤンニョムジャン(たれ)を入れて和え、ガンギエイの刺身の辛味和えや野菜などをのせて混ぜて食べる。コシのある麺と辛くて濃いヤンニョムジャン(たれ)、ガンギエイの刺身のピリッとした風味が調和したグルメ料理である。',
    name_zh: '辣拌斑鳐冷面',
    description_zh:
      '冷面里放入用辣椒粉等调制的拌面酱搅拌均匀，上面放一些凉拌斑鳐鱼片和蔬菜等拌着吃即可。劲道的面条和鲜辣的拌面酱，加上斑鳐鱼片刺鼻的独特味道，可说是上佳搭配的特色风味美食。',
    name_zh2: '辣拌斑鰩冷麵',
    description_zh2: '在富彈性的辣味拌冷麵上放生魚片和各種蔬菜拌著吃。',
  },
  {
    id: 154,
    category: '국 [Guk]',
    name: '곰칫국',
    pronounce: 'Gomchitguk',
    description:
      '생김새가 꼭 곰 같다 해서 이름 붙여진 ‘곰치’를 넣고 끓인 국이다. 남해와 서해에서는 맑게 끓이지만 삼척에서는 묵은지를 넣고 얼큰하게 끓이는 게 특징이다.',
    name_en: 'Moray Eel Soup',
    description_en:
      'Moray is referred to as “bear fish” in Korea, as many people think it resembles a bear. People in the south and west coast regions enjoy eating this Moray Eel Soup in clear broth, but those in the Samcheok area make it spicy by adding agedkimchi.',
    name_ja: 'ウツボスープ',
    description_ja:
      '見た目が熊（韓国語で「コム」）のようであることから名付けられた「コムチ（ウツボ）」を入れて煮込んだスープ。南海地域と西海地域ではすまし汁が主流だが、三陟地域では熟成キムチを入れて辛味のスープにするのが特徴である。',
    name_zh: '海鳝汤',
    description_zh:
      '此鱼学名为蠕纹裸胸鳝，头部与熊的长相有些类似，海鳝因此而得名。在南海和西海沿岸的城市多将它煮成清汤，而三陟地区则在熬汤时放一些陈年的酸辛奇，味道鲜辣爽口。',
    name_zh2: '海鱔湯',
    description_zh2:
      '海鱔的樣子酷像熊，所以在韓語裡海鱔湯被叫做「熊湯」。南海與西海的海鱔湯都是清湯，但三陟地區的海鱔湯一般加入酸辛奇，吃起來酸辣爽口。',
  },
  {
    id: 155,
    category: '국 [Guk]',
    name: '근댓국',
    pronounce: 'Geundaetguk',
    description:
      '육수에 된장을 풀고, 근대를 넣어 끓이는 된장국이다. 기호에 따라 마른새우나 북어를 넣어 끓여도 맛있다.',
    name_en: 'Leaf Beet Soup',
    description_en:
      'This is a doenjang (soybean paste)-based soup with leaf beet. Dried shrimp or pollack may also be added, according to one’s preference.',
    name_ja: 'ふだん草スープ',
    description_ja:
      '出し汁にテンジャンをとき、ふだん草を入れて煮たテンジャンクク。好みに合わせて干し海老や干しスケトウダラを入れて煮ても美味しい。',
    name_zh: '莙荙菜汤',
    description_zh: '高汤里加少许大酱，然后放入莙荙菜熬煮即可。也可根据喜好加入干虾或干明太鱼。',
    name_zh2: '莙荙菜湯',
    description_zh2: '高湯裡放點大醬，然後放入莙薘菜做成湯。可根據喜好加入幹蝦或幹明太魚。',
  },
  {
    id: 156,
    category: '국 [Guk]',
    name: '김치콩나물국',
    pronounce: 'Kimchikongnamulguk',
    description:
      '멸치 국물에 콩나물과 김치, 대파, 다진 마늘, 고춧가루를 넣어 끓인 국이다. 국물이 시원하기 때문에 술 마신 다음날 아침 해장음식으로 애용된다.',
    name_en: 'Kimchi and Bean Sprout Soup',
    description_en:
      'An anchovy soup boiled with bean sprouts, kimchi, green onion, minced garlic, and red chili powder, this dish has a hearty flavor that makes it an ideal hangover remedy.',
    name_ja: 'キムチと豆もやしスープ',
    description_ja:
      '煮干しの出し汁に豆もやしとキムチ、長ねぎ、みじん切りしたにんにく、粉唐辛子を入れて煮たスープ。すっきりとしたスープは二日酔いの酔い覚ましとしても好まれる。',
    name_zh: '辛奇豆芽汤',
    description_zh:
      '用鳀鱼熬制的高汤里放入豆芽、辛奇、葱、蒜末和辣椒粉一起熬煮即可。因汤味鲜爽，是一道很好的家常醒酒汤。',
    name_zh2: '辛奇豆芽湯',
    description_zh2:
      '鯷魚湯裡放入豆芽、辛奇、大蔥、蒜末和辣椒粉一起煮。辛奇豆芽湯非常鮮美，是家常醒酒湯。',
  },
  {
    id: 157,
    category: '국 [Guk]',
    name: '김칫국',
    pronounce: 'Kimchitguk',
    description:
      '멸치 국물에 신김치와 두부, 콩나물을 넣고 칼칼하게 끓여 먹는 국이다. 김장 김치가 있는 겨울에 많이 먹는다.',
    name_en: 'Kimchi Soup',
    description_en:
      'A spicy anchovy soup boiled with kimchi, bean curd, and bean sprout, this dish is especially popular in winter, when kimchi is readily available following gimjang, a Korean tradition of preparing and preserving kimchi for the winter.',
    name_ja: 'キムチスープ',
    description_ja:
      '煮干しの出し汁に熟成した酸味の強いキムチと豆腐、豆もやしを入れて辛めに煮詰めたスープ。キムチを漬ける冬によく食べられる。',
    name_zh: '辛奇清汤',
    description_zh:
      '用鳀鱼熬制的高汤里放入酸辛奇、豆腐和豆芽一起熬煮即可。辛奇清汤是冬天常吃的一道菜，用过冬辛奇来制作。',
    name_zh2: '辛奇清湯',
    description_zh2:
      '鯷魚湯裡放入酸辛奇、豆腐和豆芽煮開。辛奇清湯是冬天常吃的一道菜，用過冬辛奇來做。',
  },
  {
    id: 158,
    category: '국 [Guk]',
    name: '냉이된장국',
    pronounce: 'Naengidoenjangguk',
    description:
      '쌀뜨물이나 멸치 육수에 된장을 풀어 끓이다가 냉이, 두부, 파를 넣고 한소끔 더 끓인 된장국이다. 쌉쌀하면서 향긋한 냉이는 잃었던 봄철의 입맛을 되찾아 준다.',
    name_en: "Shepherd's Purse Soybean Paste Soup",
    description_en:
      'This dish is made by adding doenjang (soybean paste) to an anchovy-based stock or rice water and boiling with shepherd’s purse, bean curd, and green onion. The bitter yet fragrant shepherd’s purse is a great way to stimulate one’s appetite in spring.',
    name_ja: 'ナズナテンジャンクク',
    description_ja:
      '米のとぎ汁や煮干しの出し汁にテンジャンをといて煮る。そこへナズナ、豆腐、ねぎを入れて一煮立ちさせたテンジャンクク。苦味もあるが、香りのあるナズナは春の食欲を沸かせる食材である。',
    name_zh: '荠菜大酱清汤',
    description_zh:
      '在淘米水或用鳀鱼熬制的高汤里加少许大酱煮沸，然后放入荠菜、豆腐、葱再煮开一次即可。略带涩味和香气的荠菜在春天胃口不好时可以增加食欲。',
    name_zh2: '薺菜大醬清湯',
    description_zh2:
      '在淘米水或鯷魚湯裡放點大醬煮開，然後放入豆腐和大蔥繼續煮片刻。這樣做出來的湯帶有薺菜的苦味和香氣，非常適合沒胃口的時候吃。',
  },
  {
    id: 159,
    category: '국 [Guk]',
    name: '달걀국',
    pronounce: 'Dalgyalguk',
    description:
      '멸치 육수에 달걀을 풀어 간장과 소금으로 간을 맞춰 끓이고 마지막에 파를 넣은 맑은 국이다. 재료도 간단하고 금방 끓일 수 있는 초 간단 요리이다.',
    name_en: 'Egg Soup',
    description_en:
      'This is an anchovy-based soup that is boiled with beaten eggs and seasoned with soy sauce and salt. Chopped green onion is added at the last moment. Thanks to its simple ingredients, it is one of the easiest and quickest Korean dishes to make.',
    name_ja: '卵スープ',
    description_ja:
      '煮干しの出し汁に玉子をといてカンジャンと塩で味を調えて煮た後、最後にねぎを浮かべた澄まし汁。材料も調理法も簡単ですぐに作れる料理。',
    name_zh: '鸡蛋汤',
    description_zh:
      '鸡蛋打成蛋液，倒入用鳀鱼熬制的高汤里，再用酱油和盐调味，最后放入葱花即可，是一道简单易做的家常菜。',
    name_zh2: '雞蛋湯',
    description_zh2:
      '鯷魚湯裡打雞蛋，用醬油和鹽調味，最後放入蔥花。雞蛋湯所用的食材和操作方法都非常簡單。',
  },
  {
    id: 160,
    category: '국 [Guk]',
    name: '닭개장',
    pronounce: 'Dakgaejang',
    description:
      '닭고기를 통째로 삶아 육수는 체에 밭쳐 국물로 이용한다. 잘게 찢은 닭고기 살과 각종 채소, 다양한 나물을 넣고 고춧가루와 참기름으로 얼큰하게 끓인 국으로 여름철 보양식이다.',
    name_en: 'Spicy Chicken Soup',
    description_en:
      'This dish features shredded chicken meat boiled with vegetables and edible plants and seasoned with chili pepper and sesame oil. To make it,a whole chicken is boiled, and the water is sieved and used as the both for the soup.',
    name_ja: '鶏肉のユッケジャン',
    description_ja:
      '鶏肉を丸ごと煮て、その出汁をざるでこしてスープにする。小さく裂いた鶏肉と野菜、様々な青菜を加えて粉唐辛子とごま油で辛く仕上げたスープで、夏の滋養食とされる。',
    name_zh: '香辣鸡丝汤',
    description_zh:
      '将整只鸡放入清水中煮熟，高汤过滤后备用。鸡肉撕成细丝，加入各种新鲜蔬菜和素菜，再放入辣椒粉和香油熬煮而成，是夏季常吃的滋补菜。',
    name_zh2: '香辣雞絲湯',
    description_zh2:
      '用整只雞熬湯，煮好的湯用漏勺瀝好備用，雞肉撕成細絲，在備好的湯裡加入各種蔬菜和山野菜，辣椒粉和香油煮成辣湯。',
  },
  {
    id: 161,
    category: '국 [Guk]',
    name: '도다리쑥국',
    pronounce: 'Dodarissukguk',
    description:
      '봄이 제철인 도다리와 햇쑥을 넣어 만든 담백하고 깔끔한 봄철 대표적인 음식이다. 향긋한 쑥향이 생선의 비린 맛을 없애 주면서 국물이 시원해 경남 통영 지역에서는 숙취해소에 좋은 국으로 알려져 있다.',
    name_en: 'Flounder and Mugwort Soup',
    description_en:
      'Flounder boiled with fresh new growth mugwort. As flounder is at its prime in spring, this dish is usually eaten in that season. This dish is quite tasty and does not have any fishy smell, as the fragrant mugwort removes the fish odor. It is widely believed to be an effective hangover remedy in the Tongyeong area of South Gyeongsang Province.',
    name_ja: 'メイタガレイとよもぎスープ',
    description_ja:
      '春が旬のメイタガレイとよもぎを使ったあっさりとした春を代表する料理。よもぎのいい香りが魚の臭みを消し、スープはすっきりとしている。慶尚南道統営地方では二日酔いにいいスープとして有名。',
    name_zh: '木叶鲽鱼艾草汤',
    description_zh:
      '木叶鲽鱼和艾草都是春季食材，是口感清淡且爽口的春季代表美食。艾草的香气可以有效清除鱼腥味，汤非常鲜美，是庆尚南道统营地区著名的醒酒汤。',
    name_zh2: '木葉鰈魚艾草湯',
    description_zh2:
      '用春天最肥美的木葉鰈魚和嫩艾草熬煮的湯，味道清淡爽口，是一道典型的春季菜。清香的艾草不僅可去除魚腥味，而且使湯味更加鮮爽，是慶尚南道統營地區常吃的一道解酒湯。',
  },
  {
    id: 162,
    category: '국 [Guk]',
    name: '도토리묵사발',
    pronounce: 'Dotorimuksabal',
    description:
      '도토리묵은 도토리가루를 물에 풀어 끓인 다음 굳힌 음식이다. 육수에 도토리묵을 채 썰어 말아 먹는 음식으로 칼로리가 낮아 다이어트 음식으로도 좋다.',
    name_en: 'Chilled Acorn Jelly Soup',
    description_en:
      'Here, sliced dotorimuk is served in a bowl of cold broth. Dotorimuk is a smooth gelatin made by boiling and cooling a mixture of acorn starch and water. As a low-calorie dish, it is ideal for those trying to watch their weight.',
    name_ja: 'どんぐりこんにゃくスープ',
    description_ja:
      'どんぐりこんにゃくは、どんぐりの粉を水にとき、煮てかためた料理。出し汁に細切りしたどんぐりこんにゃくをからめて食べる料理で、カロリーが低く、ダイエットにもおすすめ。',
    name_zh: '橡子凉粉汤',
    description_zh:
      '橡子粉用水冲开后放至凝固即成橡子凉粉。将橡子凉粉切成条状后泡入高汤即可食用，不仅美味，而且热量低，是一道很好的减肥食品。',
    name_zh2: '橡子涼粉湯',
    description_zh2:
      '把橡子粉用水沖開後放置凝固，就會變成橡子涼粉。把橡子涼粉切成條狀，用高湯泡著吃非常美味。橡子涼粉湯熱量低，是非常好的減肥食品。',
  },
  {
    id: 163,
    category: '국 [Guk]',
    name: '된장국',
    pronounce: 'Doenjangguk',
    description:
      '멸치육수나 쌀뜨물에 된장을 풀어 끓인 국이다. 버섯, 양파, 두부 등과 조개, 생선, 고기 등을 넣고 끓인 음식으로 우리의 주식인 밥과 잘 어울린다.',
    name_en: 'Soybean Paste Soup',
    description_en:
      'Soybean paste (doenjang) soup with mushroom, onion, clams, fish, or meat. The basic stock is an anchovy-kelp broth or starchy water left over from rinsing rice. It goes well with the Korean staple food, bap (rice).',
    name_ja: 'テンジャンクク',
    description_ja:
      '煮干しと昆布のだし汁か米のとぎ汁にテンジャンを溶き、青菜野菜や干し菜、貝、魚、肉などを加えて煮た韓国風のみそ汁。',
    name_zh: '大酱清汤',
    description_zh:
      '在鳀鱼高汤或淘米水中放入大酱，再加入蘑菇、洋葱、豆腐以及蛤蜊、鱼、肉等熬煮而成，跟韩国人的主食米饭是上佳的搭配。',
    name_zh2: '大醬清湯',
    description_zh2:
      '大醬清湯是在乾蝦熬出的高湯裡加入大醬和莙薘菜煮出的香醇清湯。大醬清湯不管放入任何食材都適合與主食，即米飯搭配。',
  },
  {
    id: 164,
    category: '국 [Guk]',
    name: '두부새우젓국',
    pronounce: 'Dubusaeujeotguk',
    description:
      '육수에 두부를 넣고 새우젓으로 간을 해 맑게 끓인 국이다. 조리법과 재료가 간단해 쉽게 끓일 수 있고, 시원하고 담백한 맛이 난다.',
    name_en: 'Bean Curd and Salted Shrimp Soup',
    description_en:
      'A clear soup made with bean curd in broth and seasoned with saeujeot (salted shrimp), this dish has a deep flavor but is easy to make, owing to its simple ingredients.',
    name_ja: '豆腐とアミの塩辛スープ',
    description_ja:
      '出し汁に豆腐を入れて、アミの塩辛で味を調えた澄まし汁。簡単に作ることができる。味はすっきりとした味。',
    name_zh: '豆腐虾酱汤',
    description_zh:
      '豆腐切成小块放入高汤里熬煮，最后用虾酱调味即可。不仅所用食材和做法非常简单，味道也十分鲜美爽口。',
    name_zh2: '豆腐蝦醬湯',
    description_zh2:
      '高湯裡放入豆腐煮開，然後用蝦醬調味。豆腐蝦醬清湯所用的食材和操作方法非常簡單，口感鮮美爽口。',
  },
  {
    id: 165,
    category: '국 [Guk]',
    name: '매생이굴국',
    pronounce: 'Maesaengigulguk',
    description:
      '굴과 다진 마늘을 참기름에 볶아 굴의 향이 우러나면 매생이와 물을 부어 끓이는 국이다. 매생이는 우리나라 남해안에서 겨울철에 주로 생산되는데, 특유의 부드럽고 매끌매끌한 풍미가 있다.',
    name_en: 'Seaweed Fulvescens and Oyster Soup',
    description_en:
      'This dish is made by frying oysters and minced garlic together with sesame oil and then adding water and maesaengi (seaweed fulvescens) and bringing to a boil. Characterized by its silky texture and unique flavor, the tasty green seaweed is harvested mostly in the winter along the southern coast of the country.',
    name_ja: 'カプサアオノリとカキスープ',
    description_ja:
      'カキとにんにくのみじん切りをごま油で炒め、カキの香りが出てきたらカプサアオノリと水を加えて煮たスープ。カプサアオノリは韓国の南海岸で冬によくとれるもので、独特のやわらかさとぬるりとした風味がある。',
    name_zh: '海藻牡蛎汤',
    description_zh:
      '将牡蛎和蒜末用香油爆香，再倒入海藻和清水一起煮开即可。海藻主要产自韩国的南海岸，在冬季采集，口感柔软爽滑，别有味道。',
    name_zh2: '海藻牡蠣湯',
    description_zh2:
      '牡蠣和蒜末用香油爆香，等香味出來以後放入海藻與清水煮開。海藻是冬季產自韓國南海岸的植物，口感非常柔和爽滑。',
  },
  {
    id: 166,
    category: '국 [Guk]',
    name: '매생잇국',
    pronounce: 'Maesaengitguk',
    description:
      '매생이는 겨울철 청정 해안에 잠깐 나오는 녹조류로 감미롭고 부드러운 맛이다. 굴과 다진 마늘을 참기름에 볶아 매생이와 물을 넣고 살짝 끓여 간장으로 간한다.',
    name_en: 'Seaweed Fulvescens Soup',
    description_en:
      'Seaweed fulvescens is pollution-free seaweed grown only in clean water in the winter. For this dish, fry oysters and minced garlic together and then add the tasty green seaweed and some water and bring to a boil. Season with soy sauce to taste.',
    name_ja: 'カプサアオノリのスープ',
    description_ja:
      'カプサアオノリは冬場のきれいな海岸で短い時期にだけ獲れる緑藻類で、甘みがありやさしい味が特徴的。カキとみじん切りにしたにんにくをごま油で炒め、カプサアオノリと水を注いで煮立たせ、醤油で味を調える。',
    name_zh: '海藻清汤',
    description_zh:
      '用冬天在清静海域短暂出现的绿藻类熬煮的汤，味道十分鲜美。先在锅中倒入一些香油，将生蚝和蒜茸一起翻炒，再加入绿藻和清水熬煮，烧沸后用酱油调味。',
    name_zh2: '海藻清湯',
    description_zh2:
      '海藻是冬季生長在清淨海岸的綠藻類植物，味道清甜，口感柔軟。鍋裡倒入香油爆蒜末，然後放入海藻與清水煮沸，用醬油調味。',
  },
  {
    id: 167,
    category: '국 [Guk]',
    name: '무된장국',
    pronounce: 'Mudoenjangguk',
    description:
      '멸치나 쇠고기육수에 된장을 풀고, 무를 넣어 끓이는 국이다. 제주도에서는 풋마늘 대를 넣어 끓이기도 하는데. 심심하고 시원한 맛이 난다.',
    name_en: 'Radish Soybean Paste Soup',
    description_en:
      'This is a doenjang (soybean paste)-based soup boiled with radish. On Jeju Island, it is made by adding garlic scapes  to an anchovy- or beef-based stock. It is a refreshing soup with a deep flavor.',
    name_ja: '大根テンジャンクク',
    description_ja:
      '煮干しや牛肉でとった出し汁にテンジャンをとき、大根を入れて煮たスープ。済州島ではにんにくの芽を入れて煮ることもある。やさしくすっきりとした味。',
    name_zh: '萝卜大酱清汤',
    description_zh:
      '用鳀鱼或牛肉熬制的高汤里加入少许大酱和萝卜一起煮开即可。在济州岛，人们喜欢放鲜嫩蒜台一起熬煮，味道更加鲜爽。',
    name_zh2: '蘿蔔大醬清湯',
    description_zh2:
      '鯷魚湯或牛肉湯裡放點大醬和蘿蔔一起煮開。在濟州島，人們喜歡放青蒜薹，吃起來非常鮮美清爽。',
  },
  {
    id: 168,
    category: '국 [Guk]',
    name: '미역국',
    pronounce: 'Miyeokguk',
    description:
      '소고기나 홍합, 멸치 국물에 미역을 넣고 끓인 맑은 국이다. 미역은 요오드와 칼슘이 풍부해 산모들에게 좋은 식품이며 생일날에는 꼭 미역국을 끓여 먹는다.',
    name_en: 'Seaweed Soup',
    description_en:
      'Miyeok (brown seaweed) simmered in clear beef, mussel, or anchovy broth. Miyeok is rich in iodine and calcium and is known to be particularly beneficial for postpartum mothers, which is one reason Koreans eat Miyeokguk on birthdays as well as for other meals.',
    name_ja: 'ワカメスープ',
    description_ja:
      '牛肉やイガイ、煮干しでだしを取ったスープにわかめを加えて煮た澄まし汁。わかめはヨウ素やカルシウムを豊富に含んでおり、産後の健康食としても食べられる。',
    name_zh: '海带汤',
    description_zh:
      '在牛肉、海虹、鳀鱼汤中加入海带熬制而成。海带富含碘和钙，适于产妇食用，也是韩国人过生日必喝的汤。',
    name_zh2: '海帶湯',
    description_zh2:
      '海帶湯是在牛肉高湯或貽貝高湯、鳀魚高湯裡放入海帶後熬煮的清湯。尤其被視為是有益於産婦健康的飲食，而且在韓國有在生日早上吃海帶湯的風俗。',
  },
  {
    id: 169,
    category: '국 [Guk]',
    name: '미역냉국',
    pronounce: 'Miyeongnaengguk',
    description:
      '냉수에 불린 미역과 채 썬 오이를 넣고, 간장, 식초로 간을 한 냉국이다. 여름철에 더위를 식혀 주는 찬 음식으로 입맛이 없을 때 좋다.',
    name_en: 'Chilled Seaweed Soup',
    description_en:
      'Popular in summer, this dish is prepared with brown seaweed soaked in cold water and julienned cucumber in a cold broth seasoned with soy sauce and vinegar.',
    name_ja: 'ワカメの冷製スープ',
    description_ja:
      '水で戻したワカメと細切りにしたキュウリを入れて、カンジャン、酢で味を調えた冷製スープ。夏の暑さで疲れた体を冷やしてくれる冷たい料理で、食欲のない時におすすめ。',
    name_zh: '海带凉汤',
    description_zh:
      '将冷水浸泡的海带和黄瓜丝用酱油和食醋调味，然后倒入冷水即可。海带凉汤是夏季消暑祛热的解暑佳品，有助于提高食欲。',
    name_zh2: '海帶涼湯',
    description_zh2:
      '把用涼水泡好的海帶和黃瓜絲，加適量的醬油和食醋調味，海帶涼湯是炎熱夏季裡常吃的解暑佳餚，還有助於改善食欲不振。',
  },
  {
    id: 170,
    category: '국 [Guk]',
    name: '바지락술국',
    pronounce: 'Bajiraksulguk',
    description:
      '바지락과 굴, 배추, 애호박, 버섯 등을 넣어 끓인 음식이다. 시원한 바지락 육수와 굴 특유의 풍부한 향이 잘 어우러진다. 바지락에는 술독을 풀어주는 영양성분이 풍부하다.',
    name_en: 'Baby Clam Soup Accompaniment to Alcoholic Drinks',
    description_en:
      'Baby clams boiled with other ingredients, such as oysters, cabbage, zucchini, and mushrooms. The refreshing flavor of baby clam broth and the rich and unique flavor of oysters go well together. Baby clams are rich in hangover-fighting nutrients.',
    name_ja: 'アサリ入り酔い覚ましスープ',
    description_ja:
      'アサリや牡蠣、白菜、ズッキーニ、きのこなどを入れて煮込んだもの。すっきりとしたアサリの出し汁と牡蠣の磯の風味が絶妙なハーモニーを奏でる。アサリにはアルコールの分解を助ける成分が豊富に含まれており、二日酔いに効果的とされている。',
    name_zh: '蛤蜊醒酒汤',
    description_zh:
      '放入蛤蜊、牡蛎、白菜、西葫芦、蘑菇等食材一起煮制而成。爽口的蛤蜊高汤和牡蛎特有的浓郁香味形成绝妙的组合。蛤蜊中富含解酒的营养成分。',
    name_zh2: '蛤蜊醒酒湯',
    description_zh2:
      '放入蛤蜊、牡蠣、白菜、櫛瓜、蘑菇等材料一起煮沸。爽口的蛤蜊高湯和牡蠣特有的濃郁香味形成絕妙組合。蛤蜊富含可解酒毒的營養成分。',
  },
  {
    id: 171,
    category: '국 [Guk]',
    name: '바지락조갯국',
    pronounce: 'Bajirakjogaetguk',
    description:
      '된장을 푼 육수에 해감한 바지락과 무를 넣어 끓이는 국이다. 기호에 따라 두부와 고추 등을 넣어 끓이는데, 해산물 특유의 시원한 맛이 매력적인 국이다.',
    name_en: 'Clam Soup',
    description_en:
      'This is a soybean soup featuring cleaned baby clams and radish. Bean curd, chili pepper, and other ingredients may be added according to one’s preference. Using a seafood stock produces a richer, deeper flavor.',
    name_ja: 'アサリスープ',
    description_ja:
      'テンジャンをといた出し汁に砂抜きしたアサリと大根を入れて煮たスープ。好みに合わせて豆腐や唐辛子などを入れて煮る。魚介特有のすっきりとした味が魅力的なスープ。',
    name_zh: '蛤蜊汤',
    description_zh:
      '高汤里加入少许大酱，再放入处理好的蛤蜊和萝卜一起煮沸即可。可根据喜好放入豆腐和辣椒等材料，味道鲜爽，有一股海鲜特有的鲜美。',
    name_zh2: '蛤蜊湯',
    description_zh2:
      '高湯裡放點大醬、蛤蜊和蘿蔔一起煮開，可根據喜好放入豆腐和辣椒。這樣做出來的湯非常鮮美。',
  },
  {
    id: 172,
    category: '국 [Guk]',
    name: '배추된장국',
    pronounce: 'Baechudoenjangguk',
    description:
      '배추의 노랗고 연한 속대로 끓인 구수하고 단 맛이 나는 된장국이다. 배추속대에는 식이 섬유소가 풍부하게 들어 있어 변비 예방에 좋다.',
    name_en: 'Cabbage Soybean Paste Soup',
    description_en:
      'This dish is a doenjang (soybean paste) soup made with tender cabbage heart leaves. The fiber-rich heart leaves of cabbage taste sweet and help prevent constipation.',
    name_ja: '白菜テンジャンクク',
    description_ja:
      '白菜の黄色くやわらかい中心部分を使用した風味ある甘みの強いテンジャンクク。白菜の中心部分には食物繊維が豊富で便秘予防にもおすすめ。',
    name_zh: '白菜大酱清汤',
    description_zh:
      '用鲜嫩的白菜心熬煮的大酱清汤，味道非常香浓醇厚。白菜心富含膳食纤维，有助于预防便秘。',
    name_zh2: '白菜大醬清湯',
    description_zh2: '用白菜芯兒做的大獎清湯非常香濃醇厚，白菜芯兒富含膳食纖維，可以有效預防便秘。',
  },
  {
    id: 173,
    category: '국 [Guk]',
    name: '버섯육개장',
    pronounce: 'Beoseotyukgaejang',
    description:
      '육개장은 소 양지머리와 버섯, 무, 토란대, 대파, 고사리 같은 채소를 넣고 고춧가루로 매콤하게 양념해서 끓인 음식이다. 버섯육개장은 여기에 느타리, 표고, 팽이 등의 버섯을 넉넉히 넣어 끓이는 것이다.',
    name_en: 'Spicy Mushroom and Beef Soup',
    description_en:
      'Yukgaejang is a spicy beef soup boiled with mushroom, radish, taro shoot, green onion, and bracken and seasoned with spicy red chili powder. The mushroom version of this dish features various types of mushrooms, including shiitake, oyster, and enokitake.',
    name_ja: 'きのこのユッケジャン',
    description_ja:
      'ユッケジャンは牛の胸肉ときのこ、大根、長ねぎ、ずいきなどの野菜を入れて煮た後に粉唐辛子で辛く味付けして煮込んだ料理。きのこのユッケジャンはそこへ平茸、しいたけ、エノキなどのきのこ類をたっぷりと入れて煮込む。',
    name_zh: '香辣蘑菇牛肉汤',
    description_zh:
      '香辣牛肉汤是用牛胸骨肉和蘑菇、萝卜、芋头茎、葱、蕨菜等蔬菜和辣椒粉熬煮的辣味肉汤，而香辣蘑菇牛肉汤是在此基础上，再放入平菇、香菇、金针菇等菌类一起熬煮的肉汤。',
    name_zh2: '香辣蘑菇牛肉湯',
    description_zh2:
      '香辣牛肉湯是牛胸骨肉加上蘑菇、蘿蔔、芋頭莖、大蔥、蕨菜等食材，再放點辣椒粉熬煮的美味肉湯。香辣蘑菇牛肉湯是在這基礎上多放點平菇、香菇、金針菇等一起煮的美味佳餚。',
  },
  {
    id: 174,
    category: '국 [Guk]',
    name: '복국',
    pronounce: 'Bokguk',
    description:
      '복어 뼈와 채소로 끓인 국물에 복어, 미나리, 콩나물 등을 넣고 맑게 끓인 국이다. 소금으로 간하고 기호에 따라 식초를 조금 넣어 먹기도 한다. 숙취 해소에 탁월하다.',
    name_en: 'Puffer Soup',
    description_en:
      'A clear soup made by boiling puffer bones and vegetables and then adding puffer, water parsley, and bean sprouts and boiling again. Seasoned with salt and vinegar, depending on one’s taste, this dish is an effective hangover remedy.',
    name_ja: 'ふぐスープ',
    description_ja:
      'ふぐの骨と野菜で煮たスープにふぐ、セリ、豆もやしなどを加えた澄まし汁。塩で味を調える。好みにより酢を入れて食べる場合もある。二日酔いにぴったり。',
    name_zh: '河豚汤',
    description_zh:
      '用河豚骨和蔬菜熬制高汤，再加入河豚肉、水芹、黄豆芽等蔬菜一起熬煮即可。以盐调味，也可根据喜好加入些微醋，对解酒很有帮助。',
    name_zh2: '河豚湯',
    description_zh2:
      '將河豚、水芹、豆芽等放入用河豚骨頭與蔬菜熬製的湯裡繼續煮，是一種清湯。用鹽調味，可根據喜好放點醋。河豚湯是解酒效果非常好的醒酒湯。',
  },
  {
    id: 175,
    category: '국 [Guk]',
    name: '북엇국',
    pronounce: 'Bugeotguk',
    description:
      '잘게 뜯은 북어를 참기름에 볶은 뒤 물을 붓고 맑게 끓인 국으로 계란을 풀어 넣기도 한다. 알코올 해독을 돕기 때문에 해장국으로 즐겨 먹는다.',
    name_en: 'Dried Pollack Soup',
    description_en:
      'A clear fish soup made with dried pollack. The dried flesh is shredded and sautéed in sesame oil before water is added. A beaten egg is sometimes dropped into the boiling soup. It is reputed to be one of the best hangover remedies, as it helps remove alcohol from the body.',
    name_ja: '干しスケトウダラスープ',
    description_ja:
      '小さく裂いた干しスケトウダラをごま油で炒め、水を加えて煮たスープ。溶き卵を加えることもある。アルコールの分解を助けるため、二日酔いに効果的。',
    name_zh: '干明太鱼汤',
    description_zh:
      '将干明太鱼撕成小块，用麻油翻炒一下，加水熬制成汤，还可以打些蛋花入汤。干明太鱼汤有消解酒精功效，因此常用来做解酒汤。',
    name_zh2: '乾明太魚湯',
    description_zh2: '乾明太魚湯是用麻油炒乾明太魚後放入水煮出的清湯。爽口美味，適合當醒酒湯。',
  },
  {
    id: 176,
    category: '국 [Guk]',
    name: '사골우거지해장국',
    pronounce: 'Sagolugeojihaejangguk',
    description:
      '소뼈를 우린 국물에 우거지를 넣어 얼큰하게 끓인 해장국으로, 전국 어디에서나 먹을 수 있는 대중음식이다.',
    name_en: 'Korean Cabbage Hangover Soup',
    description_en:
      'This is ugeoji (dried Korean cabbage leaves) boiled in beef bone stock. It is a spicy soup widely popular across Korea as a hangover remedy.',
    name_ja: '牛骨と白菜の酔い覚ましスープ',
    description_ja:
      '牛骨で煮出した出し汁に白菜の外葉を入れてピリ辛く煮込んだ酔い覚ましスープ。韓国全土で食べられる大衆料理。',
    name_zh: '牛骨干白菜醒酒汤',
    description_zh:
      '用牛骨熬汤，再放入干白菜一起熬煮的醒酒汤，味道鲜辣醇厚，是韩国极为普遍的大众美食。',
    name_zh2: '牛骨幹白菜醒酒湯',
    description_zh2: '牛棒骨湯裡放入幹白菜熬成辣湯，是韓國各地都有的大眾美食。',
  },
  {
    id: 177,
    category: '국 [Guk]',
    name: '선짓국',
    pronounce: 'Seonjitguk',
    description:
      '소의 피인 선지를 넣고 끓인 국이다. 사골을 오래 곤 국물에 선지, 콩나물, 시래기, 무 등을 넣고 된장으로 간을 하여 끓여 먹는다. 술 먹을 다음 날 해장국으로도 많이 먹는다.',
    name_en: 'Beef Blood Soup',
    description_en:
      'This dish is made with seonji simmered with beef bone, bean sprout, radish, and other vegetables and seasoned with doenjang (soybean paste). It is a popular hangover remedy in Korea.',
    name_ja: 'ソンジスープ',
    description_ja:
      '凝血状態の牛の血を入れて煮込んだスープ。牛骨を長時間煮込み、牛の血、豆もやし、大根の葉、大根などを入れてテンジャンで味を調え煮込んで食べる。飲酒した翌日に酔い覚ましスープとしてもよく食べられる。',
    name_zh: '牛血汤',
    description_zh:
      '用牛血熬煮的鲜汤。用牛腿骨加足量水长时间熬煮后，放入牛血、豆芽、干白菜、萝卜等食材，并用大酱调味即可，也是一道很好的醒酒汤。',
    name_zh2: '牛血湯',
    description_zh2:
      '是用牛血煮的鮮湯，在牛棒骨湯裡放入牛血、豆芽、幹白菜、蘿蔔等食材，再用大醬調味，是非常大眾化的醒酒湯。',
  },
  {
    id: 178,
    category: '국 [Guk]',
    name: '섭국',
    pronounce: 'Seopguk',
    description:
      '홍합에 부추, 버섯, 달걀 등을 넣고 된장과 고추장으로 맛을 내 끓인 국이다. ‘섭’은 홍합을 뜻하는 강원도 방언으로 양양과 속초에서는 다양한 홍합 요리가 발달했다.',
    name_en: 'Mussel Soup',
    description_en:
      'This mussel soup is prepared by boiling mussels with chive, mushroom, and egg and seasoning with soybean and chili pepper paste. Seop is the word for “mussel” in the dialect of Gangwon Province. Yangyang and Sokcho, in particular, are noted for their diverse mussel dishes.',
    name_ja: 'ムール貝スープ',
    description_ja:
      'ムール貝、にら、きのこ、卵などを入れて、テンジャンとコチュジャンで味付けしたスープ。韓国語では「ソプクク」と言う。「ソプ」は「ムール貝」を意味する江原道の方言で、襄陽や束草ではムール貝を使った様々な料理がある。',
    name_zh: '贻贝汤',
    description_zh:
      '将贻贝和韭菜、蘑菇、鸡蛋等一起熬成汤，用大酱和辣椒酱调味。贻贝汤的韩文名字叫“Sub-guk”，“Sub”是贻贝的江原道方言，在襄阳和束草地区，以贻贝为主料的菜肴十分发达。',
    name_zh2: '貽貝湯',
    description_zh2:
      '貽貝湯的主要食材是貽貝，再加韭菜、蘑菇、雞蛋等食材，用黃醬與辣醬調味。在江原道方言裡貽貝稱作「Sub」，在襄陽和束草等地，有著非常豐富多樣的貽貝料理。',
  },
  {
    id: 179,
    category: '국 [Guk]',
    name: '소고기뭇국',
    pronounce: 'Sogogimutguk',
    description:
      '쇠고기와 무를 넣고 끓인 맑은 장국으로, 시원하면서도 단맛이 돈다. 특히, 겨울철에 잘 여문 무로 끓이면 더욱 맛이 좋다.',
    name_en: 'Beef and Radish Soup',
    description_en:
      'This clear soup has a savory and slightly sweet flavor. Made by boiling beef with radish, this soup is especially delicious in winter, when radishes are at their peak.',
    name_ja: '牛肉入り大根スープ',
    description_ja:
      '牛肉と大根を入れて煮込んだ澄まし汁で、すっきりとしながらも甘みがある。特に冬によく熟した大根を使うとより味がよくなる。',
    name_zh: '牛肉萝卜汤',
    description_zh: '用牛肉和萝卜熬煮的清汤，味道鲜美清甜，尤其用冬天的萝卜做汤，味道更加鲜美。',
    name_zh2: '牛肉蘿蔔湯',
    description_zh2: '是用牛肉和蘿蔔一起熬煮的清湯，口感鮮美清甜。冬季用成熟的蘿蔔做湯會更鮮美。',
  },
  {
    id: 180,
    category: '국 [Guk]',
    name: '소고기미역국',
    pronounce: 'Sogogimiyeokguk',
    description:
      '소고기와 미역을 넣고 끓인 맑은 국이다. 미역은 요오드와 칼슘이 풍부해 산모들에게 좋은 식품이며, 생일날에 꼭 먹는 음식이다.',
    name_en: 'Beef and Seaweed Soup',
    description_en:
      'This dish is prepared by simmering miyeok (brown seaweed) in beef broth. Rich in iodine and calcium, miyeok is known to be especially good for postnatal mothers. Koreans celebrate birthdays by eating miyeok soup in the morning.',
    name_ja: '牛肉入りワカメスープ',
    description_ja:
      '牛肉とワカメを入れて煮込んだ澄まし汁。ワカメにはヨードとカルシウムが豊富に含まれているため、出産後の体にいい食べ物ともいわれる。また、誕生日にも必ず食べる料理。',
    name_zh: '牛肉海带汤',
    description_zh:
      '用牛肉和海带熬煮的清汤。海带富含碘和钙，适合孕妇产后食用，而且是韩国人生日必喝的“生日汤”。',
    name_zh2: '牛肉海帶湯',
    description_zh2:
      '是用牛肉與海帶做出來的清湯。海帶富含碘與鈣，是非常適合產婦的滋補美食。韓國人過生日的時候都要吃海帶湯。',
  },
  {
    id: 181,
    category: '국 [Guk]',
    name: '소고기육개장',
    pronounce: 'Sogogiyukgaejang',
    description:
      '소 양지머리를 푹 삶아 가늘게 찢고, 무, 토란대, 대파 등의 채소를 넣어 매콤하게 끓인 국이다. 예전에는 더운 여름 먹는 복중 음식이었다면 지금은 사철 즐겨 먹는 음식이 되었다.',
    name_en: 'Spicy Beef Soup',
    description_en:
      'A spicy beef soup featuring shredded beef boiled with radish, taro shoot, and green onion, this dish used to be consumed mainly during the hottest days of summer, but it is no longer associated with a specific season.',
    name_ja: '牛肉のユッケジャン',
    description_ja:
      '茹でた牛の胸肉を細くさき、大根、ずいき、長ねぎなどの野菜を入れて辛めに煮込んだスープ。以前は暑い夏の滋養食だったが、現在はいつでも食べられる料理になった。',
    name_zh: '香辣牛肉汤',
    description_zh:
      '将牛胸骨肉煮熟后撕成细丝，再放入萝卜、芋头茎、葱等蔬菜一起熬煮的辣汤。以前只有三伏天才能吃到，如今一年四季均可食用。',
    name_zh2: '香辣牛肉湯',
    description_zh2:
      '把牛胸骨肉煮熟後撕成細絲，再放入蘿蔔、芋頭莖、大蔥等蔬菜一起煮成辣湯。過去一般都在夏季伏天吃，如今早已變成四季美食。',
  },
  {
    id: 182,
    category: '국 [Guk]',
    name: '순댓국',
    pronounce: 'Sundaetguk',
    description:
      '순대는 돼지 창자에 여러 재료를 소로 넣어 삶은 음식이다. 순댓국은 돼지 육수에 순대와 돼지 내장을 끓여 먹는다. 기호에 따라 매운 양념장과 부추를 넣어 먹으면 맛있다.',
    name_en: 'Blood Sausage Soup',
    description_en:
      'Sundae refers to pork intestines stuffed with various ingredients and steamed. Sundae soup is a pork-based broth boiled with sundae and pork organs. A spicy sauce or leek may be added according to one’s taste.',
    name_ja: 'スンデスープ',
    description_ja:
      'スンデは豚の腸に様々な材料を入れて茹でた料理。スンデスープは豚でとった出し汁にスンデと豚の内臓を入れて煮て食べる。好みに合わせて辛めのたれとニラを入れて食べるのも美味しい。',
    name_zh: '血肠汤',
    description_zh:
      '血肠是将各种材料剁碎灌入猪肠中扎紧后放入锅中煮熟的食物，而血肠清汤则是用猪肉熬制的高汤加入血肠和猪内脏熬煮而成的，可根据喜好放入辣料调味酱和韭菜。',
    name_zh2: '血腸湯',
    description_zh2:
      '血腸是用豬腸灌入餡兒後蒸熟的美食。而豬肉湯裡放入血腸和內臟即成美味的血腸湯。可根據喜好放入辣料與韭菜。',
  },
  {
    id: 183,
    category: '국 [Guk]',
    name: '시금치된장국',
    pronounce: 'Sigeumchidoenjangguk',
    description:
      '멸치육수나 쌀뜨물에 된장을 풀어 시금치를 넣어 끓인 국이다. 기호에 따라 버섯이나 조개, 두부 등을 넣기도 하는데, 우리의 주식인 밥과 잘 어울린다.',
    name_en: 'Spinach Soybean Paste Soup',
    description_en:
      'A doenjang (soybean paste) soup with spinach, this dish is made by boiling mushroom, clams, and bean curd in anchovy or rice water broth. It goes well with rice, the Korean staple.',
    name_ja: 'ほうれん草テンジャンクク',
    description_ja:
      '煮干し出汁や米のとぎ汁にテンジャンをとき、ほうれん草を入れて煮たスープ。好みに合わせてきのこや貝、豆腐などを入れる場合も。韓国の主食である米との相性がいい。',
    name_zh: '菠菜大酱清汤',
    description_zh:
      '在鳀鱼熬制的高汤或淘米水里加入大酱和菠菜一起熬煮即可。可根据喜好放入蘑菇、贝类、豆腐等，与韩国人的主食米饭很搭配。',
    name_zh2: '菠菜大醬清湯',
    description_zh2:
      '鯷魚湯或淘米水裡放入大醬和菠菜一起煮開，可根據喜好放入蘑菇、貝類和豆腐。這道菜跟韓國人的主食米飯非常相配。',
  },
  {
    id: 184,
    category: '국 [Guk]',
    name: '시래기된장국',
    pronounce: 'Siraegidoenjangguk',
    description:
      '시래기는 무청을 말린 것을 말한다. 시래기를 된장으로 무쳐 육수를 넣고 끓이는데, 비타민과 철분이 많아 맛뿐 아니라 건강에도 좋다.',
    name_en: 'Dried Radish Leaf Soybean Paste Soup',
    description_en:
      'Made by mixing siraegi (radish greens) with soybean paste and boiling in broth, this dish is rich in vitamins and iron, making it both delicious and healthy.',
    name_ja: '干し菜っ葉テンジャンクク',
    description_ja:
      '干し菜っ葉をテンジャンで和え、出し汁を入れて煮る。ビタミンと鉄分が豊富で、味だけでなく栄養面でも優れている。',
    name_zh: '干萝卜缨大酱清汤',
    description_zh:
      '干萝卜缨用大酱搅拌，然后倒入高汤一起熬煮即可。干萝卜缨大酱清汤富含维生素和铁，不仅味美，还有益身体健康。',
    name_zh2: '幹蘿蔔纓大醬清湯',
    description_zh2:
      '用大醬拌好幹蘿蔔纓，然後倒入高湯煮開。幹蘿蔔纓大醬清湯富含鐵，所以不僅味道鮮美，也有助於身體健康。',
  },
  {
    id: 185,
    category: '국 [Guk]',
    name: '쑥된장국',
    pronounce: 'Ssukdoenjangguk',
    description:
      '육수에 된장을 풀어 쑥과 함께 끓이는 토장국이다. 봄철의 어린 쑥으로 끓인 국은 특유의 향긋한 맛으로 잃어버린 입맛을 살리는데도 좋지만, 춘곤증 예방 효과도 있다.',
    name_en: 'Mugwort Soybean Paste Soup',
    description_en:
      'This dish is a doenjang (soybean paste) soup with mugwort. An appetite stimulant with a unique fragrance, young mugwort is known to be effective in preventing spring fever.',
    name_ja: 'よもぎテンジャンクク',
    description_ja:
      '出し汁にテンジャンをとき、よもぎと一緒に煮込んだテンジャンクク。春のやわらかいよもぎで煮込んだスープは、特有の香りが食欲をそそるだけでなく、季節の変わり目のだるさにも効果があるという。',
    name_zh: '艾草大酱清汤',
    description_zh:
      '高汤里加入大酱和艾草一起熬煮的大酱清汤，使用春天新生的嫩艾草，有一种独特的清香味道，不仅有助于增强食欲，还能预防春困症。',
    name_zh2: '艾草大醬清湯',
    description_zh2:
      '高湯裡放點大醬和艾蒿一起煮開即可。春季用新蒿煮的大醬清湯帶有特別的香氣，有助於食欲的增進，還能預防春困。',
  },
  {
    id: 186,
    category: '국 [Guk]',
    name: '아욱국',
    pronounce: 'Aukguk',
    description:
      '쌀뜨물에 된장과 고추장을 풀고 말린 새우와 아욱을 넣고 끓인 국이다. 가을 아욱은 맛이 좋아 사립문을 닫고 먹는다는 말이 있을 정도로 가을을 대표하는 채소다.',
    name_en: 'Curled Mallow Soup',
    description_en:
      'This soup is prepared by boiling dried shrimp and curled mallow in rice water mixed with soybean paste and red chili paste. There is an old saying that curled mallow harvested in fall is so delicious that no one wants to share it with others.',
    name_ja: '冬葵スープ',
    description_ja:
      '米のとぎ汁にテンジャンとコチュジャンをとき、干し海老と冬葵を入れて煮込んだスープ。秋の冬葵は味がいいため錠をして食べるといわれるほど秋を代表する野菜。',
    name_zh: '冬葵汤',
    description_zh:
      '淘米水里加入大酱和辣椒酱，再放入虾和锦葵一起熬煮即可。秋天的锦葵味道鲜美，古时甚至有关上门喝锦葵清汤的说法，是最具秋季代表性的蔬菜之一。',
    name_zh2: '冬葵湯',
    description_zh2:
      '淘米水裡放點大醬和辣椒醬，然後放入蝦與冬葵一起煮開。秋季的冬葵味道非常鮮美，甚至有關上門喝冬葵湯的說法，冬葵也是秋季裡最具代表性的蔬菜之一。',
  },
  {
    id: 187,
    category: '국 [Guk]',
    name: '어묵국',
    pronounce: 'Eomukguk',
    description:
      '어묵과 무를 넣고 간장으로 간을 해서 끓이는 달큰한 맛이 매력적인 국이다. 전 국민이 좋아하는 매운 떡볶이와 함께 먹는 대표적인 분식메뉴이다.',
    name_en: 'Fishcake Soup',
    description_en:
      'Made by boiling fishcake and radish seasoned with soy sauce in broth, this dish is characterized by a sweet taste that has made it one of the most popular snacks in Korea, along with spicy tteokbokki.',
    name_ja: '練り物スープ',
    description_ja:
      '練り物と大根を入れ、カンジャンで味を調えて煮込んだ甘みの強いスープ。軽食やおやつに韓国人が大好きな辛いトッポッキと一緒に食べることが多い。',
    name_zh: '鱼糕汤',
    description_zh:
      '汤里放入鱼糕和萝卜，再用酱油调味后煮开即可。鱼糕清汤味道香甜爽口，是脍炙人口的国民小吃辣炒年糕的最佳搭配。',
    name_zh2: '魚糕湯',
    description_zh2:
      '湯裡放入魚糕與蘿蔔，再用醬油調味後煮開，魚糕湯吃起來香甜美味，是跟韓國國民人氣點心辣年糕一起吃的代表性小吃店美食。',
  },
  {
    id: 188,
    category: '국 [Guk]',
    name: '오이냉국',
    pronounce: 'Oinaengguk',
    description:
      '채 썬 오이에 국간장, 마늘 등의 양념을 넣고 국물을 만들어 부운 냉국이다. 국물은 생수에 식초 등의 양념을 넣고 맛을 내어 양념한 오이에 부어 시원하게 먹는 여름철 음식이다.',
    name_en: 'Chilled Cucumber Soup',
    description_en:
      'This dish is prepared with julienned, seasoned cucumber in a cool broth made with soy sauce, garlic, and vinegar. It is a popular summer dish.',
    name_ja: 'キュウリの冷製スープ',
    description_ja:
      '千切りにしたキュウリにクッカンジャン（スープ用の醤油）やニンニクなどの薬味を入れた冷製スープ。これは、水に酢などの調味料を入れてスープの味を出し、味付けしたきゅうりに注いで食べる夏の料理である。',
    name_zh: '黄瓜凉汤',
    description_zh:
      '将黄瓜切成丝，加入酱油、蒜等调料，再倒入事先做好的凉汤即可。在矿泉水里加入醋等调料做成凉汤，然后倒入调味后的黄瓜丝里，味道冰凉爽口，非常适合夏季食用。',
    name_zh2: '黃瓜涼湯',
    description_zh2:
      '將小黃瓜切成絲後用湯醬油、食醋調味，倒入冷湯做成，味道冰涼爽口，適合夏季食用。',
  },
  {
    id: 189,
    category: '국 [Guk]',
    name: '오징엇국',
    pronounce: 'Ojingeotguk',
    description:
      '육수에 오징어와 나박썰기 한 무를 넣고 끓이다 고춧가루와 쪽파, 다진 마늘을 넣어 마무리 하는데, 칼칼하고 개운한 맛이 매력이다.',
    name_en: 'Squid Soup',
    description_en:
      'This spicy soup is made by boiling squid with diced radish and then adding red chili powder, chives, and minced garlic.',
    name_ja: 'イカスープ',
    description_ja:
      '出し汁にイカと大根を入れて煮た後、粉唐辛子、ねぎ、にんにくのみじん切りを入れる。辛くもすっきりとした味が魅力。',
    name_zh: '鱿鱼汤',
    description_zh:
      '高汤里放入鱿鱼和萝卜一起熬煮，再放入辣椒粉、香葱和蒜末煮沸，味道香辣爽口，十分美味。',
    name_zh2: '魷魚湯',
    description_zh2:
      '高湯裡放入魷魚和蘿蔔煮開，再放入辣椒粉、香蔥和蒜末調味，魷魚湯吃起來香辣、清爽。',
  },
  {
    id: 190,
    category: '국 [Guk]',
    name: '올갱잇국',
    pronounce: 'Olgaengitguk',
    description:
      '올갱이 삶은 물에 쌀뜨물을 섞어 된장을 풀어 끓이고, 삶은 올갱이는 살만 발라 아욱과 부추, 고춧가루, 다진 파, 마늘 등을 함께 넣어 끓인다. 숙취해소와 간의 피로를 푸는 해장국으로 많이 먹는다.',
    name_en: 'Melanian Snail Soup',
    description_en:
      'Doenjang (soybean paste) soup made by boiling melanian snails in water and adding doenjang and rice water to make a broth, to which deshelled melanian snails, garlic chives, red chili powder, and chopped garlic and green onion are then added and boiled. This is a popular hangover remedy and liver detox.',
    name_ja: 'カワニナスープ',
    description_ja:
      'カワニナを茹でた水に米のとぎ汁を混ぜ、テンジャンを溶いて煮たたせ、茹でたカワニナの身、冬葵、ニラ、粉唐辛子、みじん切りしたねぎ、にんにくなどを一緒に入れて煮る。二日酔いと疲れた肝臓の回復にいい二日酔いスープとしてよく食べられる。',
    name_zh: '川蜷汤',
    description_zh:
      '川蜷煮熟后捞出，煮川蜷的水中兑入淘米水，再加入一些大酱后煮沸，捞出来的川蜷去壳取肉，加入锦葵和韭菜以及辣椒粉、葱末、蒜末等调料一起熬煮即可。川蜷汤有助于解酒护肝，是一道很好的醒酒汤。',
    name_zh2: '川蜷湯',
    description_zh2:
      '將煮川蜷的水和淘米水混合在一起，放入一點大醬煮開。川蜷煮好取肉，跟錦葵、韭菜、辣椒粉、蔥花和蒜末一起放入湯裡煮。川蜷湯可以解酒，還能緩解肝臟的疲勞，是非常受歡迎的醒酒湯。',
  },
  {
    id: 191,
    category: '국 [Guk]',
    name: '우거지된장국',
    pronounce: 'Ugeojidoenjangguk',
    description:
      '우거지는 배추의 겉대를 말한다. 사골이나 멸치육수에 된장을 풀어 삶은 우거지를 넣고 끓인 토장국이다.',
    name_en: 'Korean Cabbage Soybean Paste Soup',
    description_en:
      'Soybean paste soup boiled with ugeoji (dried outer leaves of Korean cabbage) in a beef bone or anchovy-based broth.',
    name_ja: '白菜テンジャンクク',
    description_ja:
      '牛骨や煮干しだしにテンジャンをとき、茹でた白菜の外葉を入れて煮たテンジャンクク。',
    name_zh: '干白菜大酱清汤',
    description_zh:
      '干白菜通常指白菜帮，用牛腿骨或鳀鱼熬制的高汤里加入少许大酱，再放入煮好的干白菜继续熬煮至熟即可。',
    name_zh2: '幹白菜大醬清湯',
    description_zh2:
      '幹白菜一般是指菜幫，在牛棒骨湯或鯷魚湯裡放點大醬，再放入煮好的幹白菜繼續熬煮片刻。',
  },
  {
    id: 192,
    category: '국 [Guk]',
    name: '우거지해장국',
    pronounce: 'Ugeojihaejangguk',
    description:
      '소의 잡뼈를 우린 국물에 우거지를 넣어 얼큰하게 끓인 해장국으로, 술 먹은 다음 날 속풀이용으로 많이 먹는다.',
    name_en: 'Korean Cabbage Hangover Soup',
    description_en:
      'Made by boiling ugeoji (dried outer leaves of Korean cabbage) in a beef bone broth, this is a spicy hangover remedy commonly consumed the day after a night of heavy drinking.',
    name_ja: '白菜酔い覚ましスープ',
    description_ja:
      '牛骨でとった出し汁に白菜の外葉を入れてピリ辛く煮た酔い覚ましスープ。二日酔いの際などによく食べられる。',
    name_zh: '干白菜醒酒汤',
    description_zh:
      '用牛杂骨熬汤，再放入干白菜煮成香辣的醒酒汤，一般在喝酒后第二天食用，可醒酒开胃。',
    name_zh2: '幹白菜醒酒湯',
    description_zh2: '用牛雜骨熬湯後放入幹白菜煮成香辣湯，一般在喝酒第二天當做醒酒湯。',
  },
  {
    id: 193,
    category: '국 [Guk]',
    name: '우렁된장국',
    pronounce: 'Ureongdoenjangguk',
    description:
      '삶아서 발라낸 우렁이를 된장을 푼 육수에 넣고 끓이는데, 기호에 따라 시금치나 아욱을 함께 넣어 함께 끓인 국이다.',
    name_en: 'Freshwater Snail Soybean Paste Soup',
    description_en:
      'Soybean paste soup boiled with deshelled freshwater snails. Spinach or curled mallow may be added according to one’s taste.',
    name_ja: 'タニシテンジャンクク',
    description_ja:
      '茹でて貝から取り出したタニシをテンジャンをといた出し汁に入れて茹でる。好みに合わせてほうれん草や冬葵を入れて煮る場合もある。',
    name_zh: '田螺大酱清汤',
    description_zh: '高汤里加入大酱煮沸，再放入煮熟的田螺肉一起熬煮，可根据喜好放一些菠菜或锦葵。',
    name_zh2: '田螺大醬清湯',
    description_zh2: '把田螺煮好後放入用大醬調味的高湯裡煮開，可根據喜好放入菠菜或錦葵。',
  },
  {
    id: 194,
    category: '국 [Guk]',
    name: '육개장',
    pronounce: 'Yukgaejang',
    description:
      '소 양지머리와 무 등을 푹 삶은 뒤 대파, 토란 대, 고사리 같은 채소를 넣고 고춧가루로 매콤하게 양념한 음식이다.',
    name_en: 'Spicy Beef Soup',
    description_en:
      'A soup made of beef brisket, radishchive, taro stems, andfiddleheads, and seasoned with red chili powder to make it spicy.',
    name_ja: 'ユッケジャン',
    description_ja:
      '牛の胸肉や大根などをじっくりゆで、長ねぎや里いもの茎、ワラビなどの野菜を入れ、粉唐辛子を利かせた辛口のスープ。',
    name_zh: '香辣牛肉汤',
    description_zh: '用牛的排骨和萝卜等长时间熬煮，再加入大葱、青芋茎、蕨菜和辣椒粉等调味而成。',
    name_zh2: '香辣牛肉湯',
    description_zh2:
      '香辣牛肉湯是放入牛胸骨肉和蘿蔔、大蔥等蔬菜後用辣椒粉調成辣味後煮成的湯。在韓國自古作為夏季養生湯食用，以滋補疲憊的身心。',
  },
  {
    id: 195,
    category: '국 [Guk]',
    name: '재첩국',
    pronounce: 'Jaecheopguk',
    description:
      '재첩을 삶은 국물에 살만 발라 넣고, 실파나 부추를 넣어 먹는 음식이다. 재첩은 섬진강 부근에서 많이 생산되어 재첩국은 예로부터 하동지역의 별미로 알려져 있다.',
    name_en: 'Freshwater Marsh Clam Soup',
    description_en:
      'This soup is prepared by boiling deshelled jaecheop (freshwater marsh clams) with chopped thread scallions or chives in an Asian clam-based broth. Jaecheop are harvested mostly in the Seomjingang River area, which has led jaecheop soup to become a popular local specialty inthe nearby Hadong area.',
    name_ja: 'シジミスープ',
    description_ja:
      'シジミの身だけを出し汁に入れ、わけぎやニラを入れて食べる料理。シジミは蟾津江付近で多くとれる。シジミスープは昔から河東地域のご当地料理として有名。',
    name_zh: '河蚬汤',
    description_zh:
      '将河蚬放入清水中熬煮，煮熟后取肉去壳，再放入一些小葱或韭菜即可。河蚬多产于蝉津江附近，是河东地区的传统美食。',
    name_zh2: '河蜆湯',
    description_zh2:
      '把煮好的蜆肉放入煮蜆的湯裡，然後放點蔥絲或韭菜來吃。蜆多產於蟾津江附近，是河東地區的傳統美食。',
  },
  {
    id: 196,
    category: '국 [Guk]',
    name: '초당순두부',
    pronounce: 'Chodangsundubu',
    description:
      '콩물이 몽글몽글하게 응고되었을 때 물기를 빼지 않고 그대로 먹는 것이 순두부다. 무기질이 풍부한 바닷물로 응고시켜 만들기 때문에 특히 맛이 부드럽고 고소하다.',
    name_en: 'Chodang Soft Bean Curd',
    description_en:
      'Sundubu is fresh bean curd that has not been strained or pressed to remove excess water. Chodangsundubu is particularly silky and savory, as it is made by coagulating soy milk with mineral-rich seawater.',
    name_ja: 'チョダンスンドゥブ',
    description_ja:
      '豆乳がふわっと凝固しかけた時に水気を切らずにそのまま食べるのがスンドゥブ（おぼろ豆腐）である。ミネラルが豊富なにがりで凝固させて作られるため、口当たりが柔らかく香りがいい。',
    name_zh: '草堂嫩豆腐',
    description_zh:
      '嫩豆腐是豆浆凝固成软嫩的状态时，连带流汁一起吃的一种豆腐，采用富含矿物质的海水进行凝固，口感特别柔滑香浓。',
    name_zh2: '草堂嫩豆腐',
    description_zh2:
      '豆漿剛凝固的時候不去水直接食用的就是嫩豆腐。用富含礦物質的海水進行凝固，所以口感柔和，吃起來非常香。',
  },
  {
    id: 197,
    category: '국 [Guk]',
    name: '콩나물국',
    pronounce: 'Kongnamulguk',
    description:
      '씻은 콩나물에 소금을 넣고 찬물을 부어 맑게 끓인 국으로 감기와 숙취 해소에 효과가 있다. 고춧가루를 넣으면 얼큰한 맛을 내며, 콩나물이 익기 전 뚜껑을 열면 비린내가 난다.',
    name_en: 'Bean Sprout Soup',
    description_en:
      'This clear soup is made with bean sprouts boiled in water. Seasoned only with salt, Kongnamulguk (bean sprout soup) is known to be effective for easing a cold or a hangover. Add red chili powder if you prefer a spicy soup. Warning: To avoid a fishy smell, do not lift the lid of the pot until the bean sprouts are completely cooked.',
    name_ja: '豆もやしスープ',
    description_ja:
      '洗ったもやしに塩を入れて水を注ぎ、煮込んだスープ。風邪や二日酔いの解消に効果がある。粉唐辛子を入れると辛いスープになり、豆もやしに火が通る前に蓋を開けると臭みが残る。',
    name_zh: '豆芽汤',
    description_zh:
      '将黄豆芽洗净，加入些许盐和凉水熬煮，对缓解感冒和宿醉症状很有效果。喜欢辛辣味道的人可以放辣椒粉，切记不能在豆芽煮熟前打开锅盖，否则豆芽会有一股腥味。',
    name_zh2: '豆芽湯',
    description_zh2: '豆芽湯是在豆芽裡加入食鹽倒水煮出的清湯。放入辣椒粉，就可做成辣爽的豆芽湯。',
  },
  {
    id: 198,
    category: '국 [Guk]',
    name: '콩나물해장국',
    pronounce: 'Kongnamulhaejangguk',
    description:
      '콩나물을 넣고 시원하게 끓여 새우젓으로 간을 한 국이다. 특히 감기와 숙취해소에 효과가 있어 사랑받는 음식이다.',
    name_en: 'Bean Sprout Hangover Soup',
    description_en:
      'Made with bean sprout and seasoned with salted shrimp, this dish is known to be effective in providing relief for cold symptoms and hangovers.',
    name_ja: '豆もやし酔い覚ましスープ',
    description_ja:
      '豆もやしを入れすっきりと煮立て、アミの塩辛で味を調えるスープ。特に風邪や二日酔いに良いとされている。',
    name_zh: '豆芽醒酒汤',
    description_zh:
      '将豆芽放入清水中熬煮，最后用虾酱调味即可。豆芽醒酒汤可有效缓解感冒和宿醉症状，是一道很受大众欢迎的美食。',
    name_zh2: '豆芽醒酒湯',
    description_zh2:
      '用豆芽煮湯後放入蝦醬調味即可，可以有效緩解感冒和宿醉症狀，是一道非常受歡迎的醒酒湯。',
  },
  {
    id: 199,
    category: '국 [Guk]',
    name: '토란국',
    pronounce: 'Toranguk',
    description:
      '토란과 소고기, 무를 넣어서 끓인 맑은 장국으로 추석에 먹는 명절음식이다. 토란은 끈끈하고 아린 맛을 제거하기 위해 미리 소금을 넣은 쌀뜨물에 삶아서 사용해야 한다.',
    name_en: 'Taro Soup',
    description_en:
      'This clear soup is made by boiling taro root with beef and radish and is eaten during the Chuseok (Korean Thanksgiving) holidays. To remove its acrid flavor and slimy texture, taro root should be cooked in salted rice water.',
    name_ja: '里芋スープ',
    description_ja:
      '里芋、牛肉、大根を入れて煮た澄まし汁。秋夕という韓国のお盆に食べる料理。里芋はえぐ味をとるために、あらかじめ塩を入れたとぎ汁で下茹でしてから使用する。',
    name_zh: '芋头汤',
    description_zh:
      '用芋头、牛肉和萝卜熬煮的清汤，是中秋节的节日食物。芋头要用加盐的淘米水煮熟，才能去掉芋头特有的粘腻和怪味。',
    name_zh2: '芋頭湯',
    description_zh2:
      '用芋頭、牛肉和蘿蔔煮成清湯，是中秋節美食。芋頭要用放好鹽的淘米水煮熟，這樣才能清除芋頭特有的粘膩怪味。',
  },
  {
    id: 200,
    category: '국 [Guk]',
    name: '해장국',
    pronounce: 'Haejangguk',
    description:
      '술을 마신 뒤 쓰린 속을 풀기 위하여 먹는 국물 음식으로 술국, 해장국이라고도 한다. 재료에 따라 콩나물해장국, 황태해장국, 뼈다귀해장국, 우거지해장국 등 다양하다.',
    name_en: 'Hangover Soup',
    description_en:
      'This dish is often referred to as sulguk (literally “alcohol soup”). It can be made with various ingredients, such as bean sprouts, dried pollack, pork bones, and ugeoji (dried Korean cabbage).',
    name_ja: '酔い覚ましスープ',
    description_ja:
      '二日酔いで弱った胃や腸を癒すスープ料理で、スルグク(酒スープ)」「解腸スープ」とも呼ばれる。食材によってもやしの酔い覚ましスープやスケトウダラの酔い覚ましスープ、骨の酔い覚ましスープ、ウゴジ(白菜の外葉)の酔い覚ましスープなどいろいろな種類がある。',
    name_zh: '醒酒汤',
    description_zh:
      '能够缓解酒后烧心症状的汤叫做醒酒汤或解酒汤，按使用的材料，有豆芽醒酒汤、干明太鱼醒酒汤、猪骨头醒酒汤、干白菜醒酒汤等多种。',
    name_zh2: '醒酒湯',
    description_zh2:
      '能夠緩解酒後宿醉症狀的湯叫做「解酒湯」或「醒酒湯」。按使用的食材不同有豆芽醒酒湯、乾明太魚醒酒湯等，用蛤蜊河蜆煮出的就是河蜆湯。',
  },
  {
    id: 201,
    category: '국 [Guk]',
    name: '홍합미역국',
    pronounce: 'Honghammiyeokguk',
    description:
      '솥에 참기름을 두르고 미역과 홍합을 넣고 볶다가 간장으로 간을 하여 끓인 국이다. 경상도 향토음식으로 소고기 미역국보다 시원한 맛이 난다.',
    name_en: 'Mussel and Seaweed Soup',
    description_en:
      'This hearty soup is prepared by boiling brown seaweed and mussels sautéed with sesame oil in a pot and seasoned with soy sauce. A specialty of Gyeongsang Province, this soup tastes even more savory than its beef variation.',
    name_ja: 'ムール貝入りワカメスープ',
    description_ja:
      '釜にごま油をひいてワカメとムール貝を入れて炒め、カンジャンで味を調えて煮たスープ。慶尚道の郷土料理で、牛肉ワカメスープよりすっきりした味がする。',
    name_zh: '贻贝海带汤',
    description_zh:
      '在锅中倒入少许香油，放入海带和贻贝轻轻翻炒片刻，再倒入清水一起熬煮，最后用酱油调味即可。贻贝海带汤是庆尚道地区的特色美食，味道比牛肉海带汤还要鲜美。',
    name_zh2: '貽貝海帶湯',
    description_zh2:
      '倒點香油，翻炒海帶與貽貝，再用醬油調味後煮成湯。這是一道慶尚道的傳統美食，味道比牛肉海帶湯還要鮮美。',
  },
  {
    id: 202,
    category: '국 [Guk]',
    name: '황태해장국',
    pronounce: 'Hwangtaehaejangguk',
    description:
      '명태의 내장을 꺼내 염분을 제거한 뒤 추운 고산 지대에서 서너 달 이상 말려 낸 황태를 잘게 찢어 육수에 조개, 버섯, 콩나물, 두부, 무 등을 넣고 끓인 해장국이다.',
    name_en: 'Dried Pollack Hangover Soup',
    description_en:
      'The pollack used in this dish has had its innards and salt removed and been dried for three to four months through the winter in a cold alpine region. To prepare, tear the dried pollack into pieces and boil with clams, mushroom, bean sprouts, bean curd, and radish in broth.',
    name_ja: 'スケトウダラの酔い覚ましスープ',
    description_ja:
      'スケトウダラの内臓を取り出して塩抜きをし、寒い高山地帯で3、4ヵ月以上干したものを「ファンテ」と呼ぶ。それを細かく裂き、その出汁に貝、きのこ、豆もやし、豆腐、大根などを入れて煮た酔い覚ましスープ。',
    name_zh: '干明太鱼醒酒汤',
    description_zh:
      '明太鱼取出内脏、去掉盐分后，在寒冷的高山地带晒三到四个月制成干明太鱼。将干明太鱼撕成细条状，倒入高汤，再加入蛤蜊、蘑菇、豆芽、豆腐、萝卜等材料一起熬煮即可。',
    name_zh2: '幹明太魚醒酒湯',
    description_zh2:
      '明太魚掏淨內臟清除鹽分後，在低溫的高山地帶晾乾三四個月以上，把其加工成幹明太魚。加工時在高湯裡放入幹明太魚絲、貝類、蘑菇、豆芽、豆腐、蘿蔔等一起煮開，就成了味道鮮美的醒酒湯。',
  },
  {
    id: 203,
    category: '탕 [Tang]',
    name: '갈낙탕',
    pronounce: 'Gallaktang',
    description:
      '소갈비와 낙지를 넣어 끓인 탕이다. 갈낙탕은 갈비와 낙지의 쫄깃한 식감을 느낄 수 있는 보양 음식으로 시원하면서 맑은 국물이 특징이다.',
    name_en: 'Short Rib and Octopus Soup',
    description_en:
      'A clear short rib soup boiled with octopus, this dish is high in energy and characterized by the chewy texture of the octopus and short rib and the deep flavor of the broth.',
    name_ja: 'カルビとテナガダコスープ',
    description_ja:
      '牛カルビとテナガダコを入れて煮たスープ。カルビとテナガダコの歯ごたえを楽しめる滋養食で、すっきりとした澄まし汁なのが特徴。',
    name_zh: '排骨章鱼汤',
    description_zh: '用牛排骨和章鱼熬成的汤，排骨和章鱼口感鲜嫩、味道鲜美，是一道极佳的滋补清汤。',
    name_zh2: '排骨章魚湯',
    description_zh2: '是用牛排骨與章魚的湯。是一道口感勁道、味道鮮美的滋補清湯。',
  },
  {
    id: 204,
    category: '탕 [Tang]',
    name: '갈비탕',
    pronounce: 'Galbitang',
    description:
      '핏물을 뺀 소갈비를 무와 함께 푹 끓인 음식으로 맑은 국물이 구수하고 갈비를 뜯어 먹는 맛이 쏠쏠하다.',
    name_en: 'Short Rib Soup',
    description_en:
      'Beef ribs, soaked in cold water to remove the blood, and white radish chunks simmered together until tender. The clear stock is rich and savory, and the tender meat falls off the bone. (Glass noodles may be added.)',
    name_ja: 'カルビタン',
    description_ja:
      'ぶつ切りにした牛カルビを大根と一緒にじっくり煮込んだスープ。スープの豊かな風味と骨ごとかぶりつくカルビの味は絶品。',
    name_zh: '牛排骨汤',
    description_zh:
      '用牛排骨熬的汤，牛排骨浸泡去血后与萝卜一起熬煮至肉烂，不但汤汁香醇，手抓排骨啃肉的感觉也很畅快。',
    name_zh2: '牛排骨湯',
    description_zh2:
      '將牛排骨浸泡去血水後剁成塊，與蘿蔔一起熬煮而成。高湯和排骨融合的味道，香醇可口。',
  },
  {
    id: 205,
    category: '탕 [Tang]',
    name: '감자탕',
    pronounce: 'Gamjatang',
    description:
      '돼지등뼈와 감자, 우거지, 들깻가루, 깻잎, 파, 마늘 등을 넣고 얼큰하게 끓인 탕이다. 깊고 구수한 맛을 내며 뼈에 붙은 고기를 빼먹는 맛이 또 다른 재미다.',
    name_en: 'Pork Back-bone Stew',
    description_en:
      'A thick soup made of pig backbones, potato, green cabbage leaves (ugeoji), crushed perilla seeds, perilla leaves, spring onions, and garlic. A spicy dish with a deep and robust flavor.',
    name_ja: 'カムジャタン',
    description_ja:
      '豚の背骨やじゃがいも、ウゴジ(白菜の外葉)、えごま、ごまの葉、にんにくなどを入れて煮た辛口の鍋料理。濃厚で深い味わいのスープが特徴。',
    name_zh: '脊骨土豆汤',
    description_zh:
      '用猪腔骨、土豆、干白菜、芝麻粉、苏子叶、葱、蒜头等熬煮而成。它味道醇香，尤其骨头上的肉啃起来别有一番趣味。',
    name_zh2: '脊骨土豆湯',
    description_zh2:
      '脊骨土豆馬鈴薯湯是放入豬腔骨、馬鈴薯、白蘇粉等後煮出的鮮辣湯。脊骨上的排骨肉啃起來別有一番風味。',
  },
  {
    id: 206,
    category: '탕 [Tang]',
    name: '곰탕',
    pronounce: 'Gomtang',
    description:
      '소고기와 사골, 도가니 등을 솥에 넣고 오랜 시간 푹 고아 만든 음식이다. 대표적인 슬로푸드이며 단백질과 칼슘이 풍부해 산모와 노약자에게 좋은 음식이다.',
    name_en: 'Beef Bone Soup',
    description_en:
      'A thick soup made of beef, shank bones, and knucklebones gently simmered for hours. Rich in protein and calcium, gomtang (beef bone soup) is a great restorative food for postpartum mothers and elderly patients.',
    name_ja: 'コムタン',
    description_ja:
      '牛の肉や脚の骨、ひざ皿の骨と肉などを釜でじっくり煮たスープ。たんぱく質とカルシウムが豊富に含まれており、産後の女性やお年寄りのスタミナ食にうってつけの一品。',
    name_zh: '精熬牛骨汤',
    description_zh:
      '牛骨汤是将牛肉和牛骨、牛筋等放入锅中长时间熬煮而成的美食。作为典型的慢食，含有丰富的蛋白质和钙质，适于产妇和老弱者食用。',
    name_zh2: '精熬牛骨湯',
    description_zh2:
      '精熬牛骨湯是將牛腿骨、牛胸骨肉、肥腸、牛胃等各種部位放入鍋中長時間熬煮而成的滋補飲食。',
  },
  {
    id: 207,
    category: '탕 [Tang]',
    name: '광어매운탕',
    pronounce: 'Gwangeomaeuntang',
    description:
      '광어에 채소, 두부, 고춧가루 양념장을 풀어 얼큰하게 끓인 매운탕이다. 생선매운탕 재료로 광어는 가장 인기가 좋은 생선이다.',
    name_en: 'Spicy Flatfish Stew',
    description_en:
      'To make this dish, flatfish is boiled with vegetables and bean curd and seasoned with red chili powder sauce. Flatfish is the most popular ingredient in the spicy fish stews of Korea.',
    name_ja: 'ヒラメの辛味スープ',
    description_ja:
      'ヒラメと野菜、豆腐を粉唐辛子ベースのたれで辛めに煮たスープ。魚スープの材料としてヒラメは最も人気がある。',
    name_zh: '鲜辣左口鱼汤',
    description_zh:
      '将左口鱼和蔬菜、豆腐、辣椒粉调味酱等一起熬煮的香辣鱼汤。说道香辣鱼汤的材料，左口鱼可以说是最佳选择。',
    name_zh2: '鮮辣左口魚湯',
    description_zh2:
      '用左口魚、蔬菜、豆腐、辣椒粉、調味醬等一起煮的香辣湯。左口魚是非常有人氣的香辣魚湯食材。',
  },
  {
    id: 208,
    category: '탕 [Tang]',
    name: '굴탕',
    pronounce: 'Gultang',
    description:
      '육수에 무, 버섯 등을 넣어 끓이다, 마지막에 굴을 넣고 한소끔 끓인다. 시원하고 감칠맛이나 해장국으로도 좋다.',
    name_en: 'Oyster Soup',
    description_en:
      'For this dish, boil radish, mushroom, and other vegetables together, add fresh oysters, and bring to a boil. This soup has a deep and savory flavor and serves as an effective hangover remedy.',
    name_ja: 'カキスープ',
    description_ja:
      '出し汁に大根、きのこなどを入れて煮る。最後にカキを入れて一煮立ちさせる。すっきりとした風味があり、酔い覚ましスープとしてもいい。',
    name_zh: '牡蛎汤',
    description_zh:
      '高汤里放入萝卜和蘑菇等材料一起熬煮，最后放入牡蛎再煮开一次即可。牡蛎汤味道甘甜鲜美，也是一道很好的醒酒汤。',
    name_zh2: '牡蠣湯',
    description_zh2:
      '高湯裡放入蘿蔔和蘑菇燉煮，最後放點牡蠣再煮片刻。牡蠣湯非常甘甜鮮美，是非常好的醒酒湯。',
  },
  {
    id: 209,
    category: '탕 [Tang]',
    name: '꼬리곰탕',
    pronounce: 'Kkorigomtang',
    description:
      '소의 꼬리 부분을 푹 끓여 먹는 보양식이다. 꼬리뼈는 쫄깃쫄깃한 살코기가 많이 붙어 있고, 국물이 담백하고 고소해 최고의 영양식으로 꼽힌다.',
    name_en: 'Oxtail Soup',
    description_en:
      'One of the best energy-boosting dishes in Korea, this soup is made by simmering oxtail for a long period of time. The meat on the oxtail bone is chewy and flavorful.',
    name_ja: '牛テールのコムタン',
    description_ja:
      '牛テールをじっくり煮込んだ滋養食。尾の骨は歯ごたえのある身が多くついていて、だしは淡泊で香りがあり、優れた栄養食といわれる。',
    name_zh: '精熬牛尾汤',
    description_zh:
      '用牛尾细熬慢炖的营养滋补汤。牛尾肉口感鲜嫩有嚼劲，汤味香浓鲜美，是首屈一指的滋补美食。',
    name_zh2: '精熬牛尾湯',
    description_zh2: '牛尾需要長時間燉煮，牛尾肉非常勁道，湯香濃鮮美，是首屈一指的滋補美食。',
  },
  {
    id: 210,
    category: '탕 [Tang]',
    name: '꽃게탕',
    pronounce: 'Kkotgetang',
    description:
      '등딱지를 떼어낸 꽃게와 무, 애호박, 양파, 고춧가루 등을 넣어 끓인 탕이다. 알이 꽉 찬 게의 쫄깃한 살을 빼먹는 재미와 시원한 국물 맛이 일품인 요리다.',
    name_en: 'Spicy Blue Crab Stew',
    description_en:
      'This dish is a soup made with blue crab meat boiled with radish, young pumpkin, onion, and red chili powder.The fresh taste of the soup and sweet crab meat is simply irresistible.',
    name_ja: 'ワタリガニ鍋',
    description_ja:
      'ワタリガニの甲羅をはがし、大根やエホバク、たまねぎ、唐辛子などを入れて煮込んだスープ。 卵がいっぱい入ったカニの肉を取り出して食べる楽しさと、すっきりしたスープの風味は絶品。',
    name_zh: '花蟹汤',
    description_zh:
      '剥掉花蟹背上的壳，加入萝卜、丝瓜、 洋葱以及辣椒粉等调料熬的汤。花蟹肉肥膏 满，肉质鲜嫩，汤的味道也是鲜浓爽口。',
    name_zh2: '花蟹湯',
    description_zh2:
      '花蟹湯是放入花蟹和蘿蔔、辣椒粉以及若干大醬煮出的海鮮湯。花蟹的甜味與大醬香濃的味道相融而成的美味佳餚。',
  },
  {
    id: 211,
    category: '탕 [Tang]',
    name: '내장탕',
    pronounce: 'Naejangtang',
    description:
      '돼지나 소의 내장으로 끓여낸 탕 요리이다. 내장은 특유의 냄새가 있어 손질 과정에서 주의를 기울여야 하지만, 기력 회복에 좋은 보양식으로 즐겨왔다.',
    name_en: 'Offal Soup',
    description_en:
      'Made by boiling cow’s (or pig’s) intestines, this soup is considered an energy-boosting food. Due to their unique odor, the intestines should be carefully cleaned before cooking.',
    name_ja: 'ネジャンタン',
    description_ja:
      '豚や牛の内臓を煮込んだスープ料理。内臓は独特のにおいがあり、下処理に気を遣うが、気力回復にいい滋養食とされ好まれている。',
    name_zh: '内脏汤',
    description_zh:
      '用猪或牛的内脏炖煮的汤。内脏带有独特的腥味，所以处理时要格外用心，但是可益气补虚，是一直以来广受欢迎的滋补美食。',
    name_zh2: '內臟湯',
    description_zh2:
      '是用豬或牛的內臟燉煮的湯。內臟帶有異味，清理的時候要格外用心。內臟湯一直都是非常受歡迎的滋補美食。',
  },
  {
    id: 212,
    category: '탕 [Tang]',
    name: '닭곰탕',
    pronounce: 'Dakgomtang',
    description:
      '닭을 손질하여 찬물에 넣고 푸욱 무르도록 익힌 후, 고기는 살만 발라 양념을 해서 다시 닭 육수에 넣어 끓인 음식이다. 여성의 미용식이나 노인들의 여름철 보양식으로 좋다.',
    name_en: 'Chicken Soup',
    description_en:
      'For this dish, boil a whole chicken in water to make a chicken broth and take the chicken out and remove the meat from the bones. Season the chicken meat and simmer in the broth for a long time. This high-energy, low-calorie food is great for women and seniors in the summer.',
    name_ja: '鶏肉のコムタン',
    description_ja:
      '鶏肉を下処理した後、水に入れてじっくりと加熱し、肉の身だけ取り出してたれをからめ、再び鶏肉の出し汁に入れて煮込んだ料理。美容や高齢者の夏の滋養食におすすめ。',
    name_zh: '精熬鸡肉汤',
    description_zh:
      '将处理好的鸡放入冷水中炖至烂熟，再将鸡肉撕下来调味后，重新放入汤中继续熬煮即可。精熬鸡肉汤有助于女性的美容养颜，也是老年人的夏季滋补食品。',
    name_zh2: '精熬雞肉湯',
    description_zh2:
      '把雞清理好後放入涼水充分燉煮。取煮好的雞肉撕成雞絲，調好味，再放入湯裡繼續煮片刻。精熬雞肉湯有助於女性的美容，也是對老年人非常好的夏季滋補食品。',
  },
  {
    id: 213,
    category: '탕 [Tang]',
    name: '대구맑은탕',
    pronounce: 'Daegumalgeuntang',
    description:
      '두부, 표고버섯, 미나리 등의 재료를 냄비에 넣고 끓이다가 잘 손질한 대구를 넣어 팔팔 끓인 후 청주와 소금으로 간을 맞춘다. 마지막으로는 쑥갓을 넣어 향을 더한다.',
    name_en: 'Codfish Soup',
    description_en:
      'This soup is made by boilingbean curd, shiitake mushroom, and water parsley, and then adding cleaned codfish and bringing all ingredients to a boil. It is then seasoned with rice wine and salted to taste. To add fragrance, crown daisy is added just before serving.',
    name_ja: 'たらスープ',
    description_ja:
      '豆腐や椎茸、セリなどの食材を鍋に入れて煮込み、タラを入れて十分煮込んだ後、清酒と塩で味をととのえる。最後にシュンギクを入れて香りを加える。',
    name_zh: '鳕鱼清汤',
    description_zh:
      '先将豆腐、香菇、水芹等材料放入锅中，加上适量的水熬煮，接着将切成块儿的鳕鱼放进去煮沸，用清酒和盐调味，最后放一些茼蒿既可增添清香的味道。',
    name_zh2: '鱈魚清湯',
    description_zh2:
      '鱈魚清湯是放入鱈魚和豆腐、水芹等食材煮，用食鹽和清酒調味的魚清湯。味道清淡，可沾酸醬吃，又稱「鱈魚湯」。',
  },
  {
    id: 214,
    category: '탕 [Tang]',
    name: '대구매운탕',
    pronounce: 'Daegumaeuntang',
    description:
      '싱싱한 대구와 무, 고추 등의 채소에 고추장을 풀어 얼큰하게 끓인 요리다. 대구맑은탕은 싱그럽고 순한 맛이, 대구매운탕은 시원하고 매운 맛이 특징이다.',
    name_en: 'Spicy Codfish Stew',
    description_en:
      'This spicy codfish stew is made with fresh codfish, radish, red chili, and gochujang (red chili paste), and has a deep, hearty taste. The non-spicy version has a fresh, mild flavor.',
    name_ja: 'たらの辛味スープ',
    description_ja:
      '新鮮なタラと大根や唐辛子などの野菜にコチュジャンを入れてピリッと辛く煮込んだ料理。たらスープは爽やかでまろやかな味が、たらの辛味スープはすっきりしたスパイシーな味が特徴。',
    name_zh: '鲜辣鳕鱼汤',
    description_zh:
      '用新鲜的鳕鱼和萝卜、尖椒等蔬菜加入辣椒酱熬煮的鱼汤，相比味道鲜美清香的鳕鱼清汤，鲜辣鳕鱼汤的味道则比较鲜辣爽口。',
    name_zh2: '鮮辣鱈魚湯',
    description_zh2:
      '鮮辣鱈魚湯是放入清淡的鳕魚和蘿蔔、辣椒等蔬菜，加入辣椒醬和辣椒粉煮出的辣味海鮮湯。',
  },
  {
    id: 215,
    category: '탕 [Tang]',
    name: '대합탕',
    pronounce: 'Daehaptang',
    description:
      '해감한 대합을 소금으로만 간을 하여 시원하게 끓인 맑은 탕이다. 대합은 서해안에서 주로 생산되는데 맛이 깔끔하고 고급스러워 전복에 버금간다는 평가를 받을 정도의 고급 조개이다.',
    name_en: 'Hard Clam Soup',
    description_en:
      'This clear soup is made by boiling cleaned hard clams and adding a dash of salt. Collected mostly along the west coast of Korea, daehap is considered a premium shellfish, comparable to abalone, and is popular for its refreshing taste.',
    name_ja: 'ハマグリスープ',
    description_ja:
      '砂抜きしたハマグリを使った、塩のみで味を調えたすっきりとした澄まし汁。ハマグリは西海岸で主に生産される。味はさっぱりとして、アワビに続くと評価される高級貝。',
    name_zh: '文蛤汤',
    description_zh:
      '将吐沙干净的文蛤用食盐调味后，倒入清水熬煮而成的鲜美清汤。文蛤主要产自西海岸，味道鲜美、营养丰富，被誉为是仅次于鲍鱼的高级贝类。',
    name_zh2: '文蛤湯',
    description_zh2:
      '吐好沙的文蛤用食鹽調味後煮開即成鮮美清湯。文蛤主要產自西海岸，味道非常鮮美高檔，被譽為僅次於鮑魚的高級貝類。',
  },
  {
    id: 216,
    category: '탕 [Tang]',
    name: '도가니탕',
    pronounce: 'Doganitang',
    description:
      '소의 무릎뼈인 도가니뼈를 고아 만든 보양식으로 칼슘이 많아 어린이와 임산부, 노인에게 좋은 음식이다. 수육은 간장을 찍어 먹고 진한 국물에 밥을 말아 먹는다.',
    name_en: 'Ox Knee Soup',
    description_en:
      'Made with slow-cooked oxknee cartilage, doganitang (ox knee soup)is particularly healthy and rich in calcium and, therefore, especially good for children, expecting mothers, and elderly people. The boiled ox-knee cartilage is sliced and served with soy sauce, and the thick broth is served with rice.',
    name_ja: '牛の膝軟骨スープ',
    description_ja:
      '牛の膝の軟骨を煮込んだ保養食で、カルシウムが豊富で、子どもや妊婦、高齢者にもおすすめの料理。スユク（ゆで肉）は醤油をつけて食べ、スープはご飯を入れて食べる。',
    name_zh: '牛膝骨汤',
    description_zh:
      '用牛膝骨长时间熬制的健康食物，富含钙质，对儿童、孕妇和老人很有好处。牛膝骨上的肉切成片蘸酱油吃，老汤则泡饭吃。',
    name_zh2: '牛膝骨湯',
    description_zh2: '牛膝骨湯是將牛膝骨長時間熬煮而成的滋補湯。熟肉可以沾醬油吃，湯可以泡飯吃。',
  },
  {
    id: 217,
    category: '탕 [Tang]',
    name: '도미맑은탕',
    pronounce: 'Domimalgeuntang',
    description:
      '무와 멸치 등을 넣어 끓인 육수에 손질한 도미와 다진 마늘, 미나리, 쑥갓, 고추 등을 넣고 소금으로 간을 하여 끓인 맑은 탕이다.',
    name_en: 'Sea Bream Soup',
    description_en:
      'Cleaned sea bream boiled with radish in anchovy-based broth and seasoned with chopped garlic, water parsley, crown daisy, green pepper, and salt.',
    name_ja: '鯛スープ',
    description_ja:
      '大根と煮干しなどでとった出し汁に、鯛、みじん切りしたにんにく、セリ、春菊、唐辛子などを加えて塩で味を調えた澄まし汁。',
    name_zh: '鲷鱼清汤',
    description_zh:
      '用萝卜和鳀鱼等材料熬制高汤，再加入处理好的鲷鱼和蒜末、水芹、茼蒿、辣椒等调料，最后以盐调味即可。',
    name_zh2: '鯛魚清湯',
    description_zh2:
      '用蘿蔔與鯷魚等熬製高湯，再將清理好的鯛魚、蒜末、水芹、茼蒿、辣椒等放入湯裡煮開，用鹽調味即可。',
  },
  {
    id: 218,
    category: '탕 [Tang]',
    name: '도미매운탕',
    pronounce: 'Domimaeuntang',
    description:
      '손질한 도미를 적당한 크기로 토막 내어 미나리, 쑥갓, 양파, 무, 고추, 마늘, 호박, 두부 등을 넣고, 고춧가루, 고추장을 풀어 얼큰하게 끓인 탕이다.',
    name_en: 'Spicy Sea Bream Stew',
    description_en:
      'Cleaned sea bream cut into pieces and boiled with water parsley, crown daisy, onion, radish, green pepper, chopped garlic, zucchini, and bean curd in water with red chili powder and gochujang (red chili paste).',
    name_ja: '鯛の辛味スープ',
    description_ja:
      '鯛を食べやすい大きさに切り、セリ、春菊、玉ねぎ、大根、唐辛子、にんにく、カボチャ、豆腐などを加え、粉唐辛子、コチュジャンを溶いて辛く煮たスープ。',
    name_zh: '鲜辣鲷鱼汤',
    description_zh:
      '把处理好的鲷鱼切成适当大小的块状，加入水芹、茼蒿、洋葱、萝卜、辣椒、蒜、南瓜、豆腐等材料，再加入辣椒粉熬煮即可，味道十分香辣鲜美。',
    name_zh2: '鮮辣鯛魚湯',
    description_zh2:
      '將清理好的鯛魚切成適當大小，放入水芹、茼蒿、洋蔥、蘿蔔、辣椒、大蒜、西葫蘆、豆腐等食材，再加點辣椒粉和辣椒醬煮成辣湯。',
  },
  {
    id: 219,
    category: '탕 [Tang]',
    name: '동태탕',
    pronounce: 'Dongtaetang',
    description:
      '동태에 무, 쑥갓 등의 채소와 두부, 고춧가루 등을 넣어 얼큰하게 끓인 탕이다. 칼칼한 맛이 겨울철에 더 잘 어울리며, 고춧가루를 넣지 않고 맑게 끓이기도 하다.',
    name_en: 'Pollack Soup',
    description_en:
      'This is a spicy soup made by boiling frozen pollack with bean curd, radish, crown daisy, and other vegetables and seasoning with red chili powder. Its spiciness makes it an ideal food for winter. However, a non-spicy version can be made by omitting the red chili powder, depending on one’s preference.',
    name_ja: 'スケトウダラスープ',
    description_ja:
      'スケトウダラに大根、春菊などの野菜と豆腐、粉唐辛子などを入れて辛めに煮込んだスープ。辛く刺激的な味が冬によく合い、粉唐辛子を入れずに澄まし汁で煮込む場合もある。',
    name_zh: '冻明太鱼汤',
    description_zh:
      '将冻明太鱼和萝卜、茼蒿、豆腐、辣椒粉等一起炖煮而成的辣汤，鲜辣的味道很适合冬天食用，也可不放辣椒粉做成鲜美的清汤。',
    name_zh2: '凍明太魚湯',
    description_zh2:
      '把凍明太魚、蘿蔔、青蒿、豆腐、辣椒粉等一起燉煮。鮮辣的味道非常適合寒冷冬季享用，不放辣椒粉燉成清湯也非常美味。',
  },
  {
    id: 220,
    category: '탕 [Tang]',
    name: '뚜거리탕',
    pronounce: 'Ttugeoritang',
    description:
      '강바닥에 붙어사는 ‘꾹저구’라는 민물고기를 넣고 고추장을 풀어 풋고추와 양념을 넣은 다음 끓여 낸 매운탕이다. 보양식으로 유명한 추어탕보다 담백한 맛이 있다.',
    name_en: 'Spicy Floating Goby Stew',
    description_en:
      'This is Spicy Floating Goby Stew boiled with green pepper and gochujang. It is a high-energy food reputed to be even more savory than chueotang (loach stew).',
    name_ja: 'ウキゴリスープ',
    description_ja:
      '川底に生息する「ウキゴリ」という淡水魚を、コチュジャンや青唐辛子、薬味と一緒に煮た辛味スープ。滋養食として有名などじょうスープよりもあっさりとした味わいが特徴的。',
    name_zh: '虾虎鱼汤',
    description_zh:
      '虾虎鱼是一种在河底生活的淡水鱼，将虾虎鱼和清水一起放入锅中，加入辣椒酱和辣椒粉及各种调料熬煮而成，是一种比泥鳅汤更加清淡鲜美的滋补食品。',
    name_zh2: '蝦虎魚湯',
    description_zh2:
      '蝦虎魚是棲息在河底的一種淡水魚。放入辣椒醬、青椒和調料跟蝦虎魚一起煮即可，相比著名的滋補美食泥鰍湯口感要清淡。',
  },
  {
    id: 221,
    category: '탕 [Tang]',
    name: '뚝배기불고기',
    pronounce: 'Ttukbaegibulgogi',
    description:
      '간장 양념장에 잰 소고기를 뚝배기에 담고 육수를 넉넉하게 부어 탕처럼 끓인 음식이다. 당면을 함께 넣어 먹기도 한다.',
    name_en: 'Hot Pot Bulgogi',
    description_en:
      'Soy-marinated bulgogi cooked with broth in an earthenware pot.Glass noodles may be added.',
    name_ja: '土鍋プルゴギ',
    description_ja:
      '醤油ベースの薬味に漬けた牛肉を土鍋に入れ、だし汁を加えて煮た料理。春雨を加えることもある。',
    name_zh: '砂锅烤牛肉',
    description_zh:
      '将牛肉用酱油制成的调味酱腌制一下，然后放入砂锅中，再倒入适量的高汤煮熟即可。还可将粉丝用水煮一遍后放入汤里配着牛肉吃。',
    name_zh2: '砂鍋烤牛肉',
    description_zh2:
      '將牛肉切成片後用醬油調味料攪拌，與蔬菜、粉絲一起在砂鍋燉煮，與微甜熱燙的湯汁一起食用，則別有風味。',
  },
  {
    id: 222,
    category: '탕 [Tang]',
    name: '롤삼계탕',
    pronounce: 'Roll Samgyetang',
    description:
      '뼈를 바른 닭살을 넓게 펴 밑간한 다음 찹쌀, 대추, 밤, 은행, 수삼 등을 넣고 지은 밥을 김밥 싸듯 둘러 실로 묶은 뒤 육수에 끓여 알맞게 잘라 국물과 함께 곁들인다.',
    name_en: 'Rolled Ginseng Chicken Soup',
    description_en:
      'This is a roll featuring deboned, seasoned chicken with glutinous rice, jujubes, chestnuts, gingko, and fresh ginseng. The chicken roll is tied off with a string and boiled in a broth. The roll is then sliced into pieces and served with soup.',
    name_ja: 'ロールサムゲタン',
    description_ja:
      '骨を取り除いた鶏肉を平らにたたいて下味を付け、もち米、なつめ、栗、銀杏、高麗人参などを入れて炊いたご飯をのり巻きのように巻いて糸で縛り、スープで煮込んで適当な大きさに切り、スープを添えて食べる。',
    name_zh: '鸡肉卷参鸡汤',
    description_zh:
      '鸡肉去骨摊平并腌制一下，然后将糯米、红枣、栗子、银杏、水渗等材料依次放在上面，再放上米饭，像做紫菜包饭一样将其卷起来，用绳子绑住，放入高汤里熬煮至熟后，切成适当的大小，和汤混在一起吃即可。',
    name_zh2: '雞肉卷參雞湯',
    description_zh2:
      '把剔骨雞肉展開後撒上鹽，把糯米、紅棗、栗子、銀杏、水參等跟大米一起做成米飯，用展開的雞肉包住營養飯後像包壽司一樣卷起來，並用線頭綁好，再用湯煮熟。吃的時候切成適當大小後跟湯一起食用即可。',
  },
  {
    id: 223,
    category: '탕 [Tang]',
    name: '매운탕',
    pronounce: 'Maeuntang',
    description:
      '생선을 주재료로 하여 채소, 두부 등을 넣고 매운 고춧가루 양념장을 풀어 얼큰하게 끓인 탕이다. 대구, 우럭, 명태 등으로 끓인 매운탕을 즐겨 먹는다.',
    name_en: 'Spicy Fish Stew',
    description_en:
      'A traditional fish stew seasoned generously with red chili powder or gochujang. The fish most commonly used here are haddock, rock cod, and pollack.',
    name_ja: '魚の辛味スープ',
    description_ja:
      '魚や野菜、豆腐などに様々な薬味を加え、粉唐辛子やコチュジャンを溶いて煮た辛口の鍋。魚はタラやソイ、スケトウダラなどが一般的。',
    name_zh: '鲜辣鱼汤',
    description_zh:
      '以鱼为主料，加入蔬菜、豆腐以及各种调味料和辣椒粉或辣椒酱熬煮而成。主料多使用鳕鱼、石斑鱼、明太鱼等。',
    name_zh2: '鮮辣魚湯',
    description_zh2:
      '鮮辣魚湯是放入鮸魚和蔬菜、豆腐後，加入辣調味醬煮出的魚湯。可按季節選用鳕魚、石斑魚、明太魚等魚來煮也很美味。',
  },
  {
    id: 224,
    category: '탕 [Tang]',
    name: '메기매운탕',
    pronounce: 'Megimaeuntang',
    description:
      '무를 넣어 끓인 국물에 메기와 고추장, 미나리, 쑥갓, 깻잎 등을 넣어 끓인 탕이다. 기호에 따라 수제비나 라면을 넣어 먹기도 한다.',
    name_en: 'Spicy Catfish Stew',
    description_en:
      'To prepare this spicy soup, catfish is boiled with radish, crown daisy, sesame leaf, and water parsley and seasoned with gochujang (red chili paste). Pieces of hand-torn flour dough or ramen noodles can be added as well, depending upon one’s preference.',
    name_ja: 'ナマズの辛味スープ',
    description_ja:
      '大根を入れて煮た出し汁にナマズとコチュジャン、セリ、春菊、エゴマの葉などを入れて煮込んだスープ。好みによりすいとんやラーメンを入れて食べる場合もある。',
    name_zh: '鲜辣鲶鱼汤',
    description_zh:
      '萝卜加清水熬成汤，再放入鲶鱼和辣椒酱、水芹、茼蒿、苏子叶等一起炖煮即可，也可根据喜好放一些面片或泡面。',
    name_zh2: '鮮辣鯰魚湯',
    description_zh2:
      '蘿蔔湯裡放入鯰魚、辣椒醬、水芹、青蒿、蘇子葉等一起燉煮。可根據喜好放點麵片或速食麵。',
  },
  {
    id: 225,
    category: '탕 [Tang]',
    name: '민어탕',
    pronounce: 'Mineotang',
    description:
      '민어와 호박 등 채소를 넣고 끓인 탕이다. 민어는 여름에 살과 기름이 올라 맛이 가장 좋기 때문에 여름철에 보신식품으로 많이 먹는다.',
    name_en: 'Croaker Stew',
    description_en:
      'This dish is prepared by boiling croaker with zucchini and other vegetables. Croaker reaches its peak in summer, which is why it is often enjoyed in summer as an energy-boosting food.',
    name_ja: 'ニベスープ',
    description_ja:
      'ニベとカボチャなどの野菜を入れて煮込んだスープ。ニベは夏に油がのり味が最もいいとされるため、夏の滋養食としてよく食べられる。',
    name_zh: '黄姑鱼汤',
    description_zh:
      '用黄姑鱼和西葫芦等蔬菜一起炖煮而成的鱼汤。夏季的黄姑鱼最肥美，因此黄姑鱼汤也是夏季常吃的滋补美食。',
    name_zh2: '黃姑魚湯',
    description_zh2: '黃姑魚和西葫蘆等蔬菜一起燉煮。夏季是黃姑魚盛產季節，所以夏天多吃黃姑魚湯。',
  },
  {
    id: 226,
    category: '탕 [Tang]',
    name: '버섯들깨탕',
    pronounce: 'Beoseotdeulkkaetang',
    description:
      '육수에 버섯과 들깨를 넣고 걸쭉하게 끓여먹는 구수한 탕이다. 들깨는 한국의 대표적인 허브로 콜레스테롤을 낮추고, 당뇨, 피부미용에까지 좋다는 연구 결과가 나오면서 요즘은 일본에서도 인기이다.',
    name_en: 'Mushroom and Perilla Seed Stew',
    description_en:
      'This is a hick stew made by boiling mushrooms and perilla seeds in broth. After research showed that perilla seeds help lower cholesterol and blood sugar and improves in health, this dish became popular in both Japan and Korea.',
    name_ja: 'きのことエゴマスープ',
    description_ja:
      '出し汁にきのことエゴマを入れてとろとろに煮込んで食べるスープ。エゴマは韓国を代表するハーブで、コレストロールを下げ、糖尿、お肌にもいいという研究結果が出て以来日本でも人気。',
    name_zh: '蘑菇紫苏籽汤',
    description_zh:
      '高汤里加入蘑菇和紫苏籽熬煮而成的浓汤。紫苏是韩国代表性的草本植物，最近要研究结果称，紫苏籽不仅能降低胆固醇，还有助于降糖和皮肤美容，最近在日本也大受欢迎。',
    name_zh2: '蘑菇紫蘇籽湯',
    description_zh2:
      '高湯裡放入蘑菇和紫蘇籽熬成濃湯來喝。紫蘇籽是韓國代表性香草，可以降低膽固醇，還有助於皮膚美容，最近在日本也極有人氣。',
  },
  {
    id: 227,
    category: '탕 [Tang]',
    name: '복맑은탕',
    pronounce: 'Bokmalgeuntang',
    description:
      '복어뼈와 채소로 끓인 국물에 복어, 미나리, 콩나물 등을 넣고 팔팔 끓여 낸다. 복어는 10월부터 3월 초까지가 살이 통통하고 독기도 약하기 때문에 제일 맛있다.',
    name_en: 'Puffer Fish Soup',
    description_en:
      'This soup is prepared by bringing puffer fish bones, water parsley, and bean sprouts to a boil. Puffer fish is best from October to early March as it puts on fat and becomes less toxic at that time.',
    name_ja: 'ふぐスープ',
    description_ja:
      'ふぐの骨と野菜を煮込んだスープにふぐやセリ、モヤシなどを入れて煮込んだ料理。ふぐは10月から3月初めが旬で、身が多く、毒気も弱いので、一番おいしい。',
    name_zh: '河豚清汤',
    description_zh:
      '先用河豚的鱼骨和蔬菜熬出浓汤，再将河豚肉、水芹、豆芽等放入锅中熬煮至沸。十月到三月初的河豚肉质最为肥美鲜嫩，且毒性较弱，因此味道最鲜美。',
    name_zh2: '河豚清湯',
    description_zh2: '放入處理好的河豚和豆腐、豆芽等煮出的海鮮清湯，是味道爽口、清淡的滋補飲食。',
  },
  {
    id: 228,
    category: '탕 [Tang]',
    name: '복매운탕',
    pronounce: 'Bokmaeuntang',
    description:
      '냄비에 데친 배추와 무를 깔고 손질한 복어와 두부 등의 재료를 가지런히 담은 후 고추장, 고춧가루 등의 양념과 육수를 부어 끓여 낸 국물 요리다. 숙취 해소에 좋다.',
    name_en: 'Spicy Puffer Fish Stew',
    description_en:
      'Bokmaeuntang (spicy pufferfish stew) is made by placing parboiled Korean cabbage and radish in a pot and boiling with other ingredients, including broth, cleaned pufferfish, bean curd, gochujang, and red chili powder. It is an excellent dish for easing a hangover.',
    name_ja: 'ふぐの辛味スープ',
    description_ja:
      '鍋に茹でた白菜と大根を敷き、ふぐと豆腐などの食材を入れたあと、コチュジャンや粉唐辛子などの薬味と肉の出し汁を入れて煮たスープ料理。二日酔いの解消にも効果的。',
    name_zh: '鲜辣',
    description_zh:
      '河豚汤将萝卜和用水焯过的白菜铺在锅底，切成块儿的河豚和豆腐等材料整整齐齐地放在上面，然后加入辣椒酱和辣椒粉等调料，再倒入高汤煮至沸腾即可。鲜辣河豚汤还有助于缓解宿醉。',
    name_zh2: '鮮辣河豚湯',
    description_zh2:
      '鮮辣河豚湯是放入處理好的河豚和蘿蔔、豆腐等，加入辣椒醬、辣椒粉等辣調料煮出的鮮辣魚湯。',
  },
  {
    id: 229,
    category: '탕 [Tang]',
    name: '사골우거지갈비탕',
    pronounce: 'Sagolugeojigalbitang',
    description:
      '사골 국물에 된장 양념을 한 우거지와 갈비를 넣어 끓인 탕이다. 소의 뼈로 끓이기 때문에 깊은 맛이 나며, 우거지가 들어가 끓일수록 구수한 맛이 난다.',
    name_en: 'Korean Cabbage and Short Rib Soup',
    description_en:
      'This short rib soup is made with beef bone broth and ugeoji (dried outer leaves of Korean cabbage) seasoned with doenjang (soybean paste).Both the beef bone broth and ugeoji add a savory depth to the dish.',
    name_ja: '牛骨と白菜カルビタン',
    description_ja:
      '牛骨でとった出し汁にテンジャンベースのたれで下味をつけた白菜の外葉とカルビを入れ煮込んだ料理。牛骨を煮込むため、深い味わいになる。また、白菜の外葉が入ることで風味がでる。',
    name_zh: '牛骨干白菜排骨汤',
    description_zh:
      '用牛骨熬汤，加入以大酱调味的干白菜和排骨一起炖煮即可。牛骨熬成的汤味道十分香浓，加上干白菜，越煮味道越香醇。',
    name_zh2: '牛骨幹白菜排骨湯',
    description_zh2:
      '在牛棒骨湯裡放點大醬，然後放入幹白菜與排骨一起燉煮。牛棒骨湯非常香濃，幹白菜也越煮越香。',
  },
  {
    id: 230,
    category: '탕 [Tang]',
    name: '삼계탕',
    pronounce: 'Samgyetang',
    description:
      '어린 닭의 배 속에 인삼, 대추, 밤, 찹쌀, 마늘 등을 넣고 푹 고아 만든 음식이다. 닭고기와 인삼이 조화를 이룬 전통적인 여름철 보양식이다.',
    name_en: 'Ginseng Chicken Soup',
    description_en:
      'Tender, whole, young chicken stuffed with ginseng, jujubes, sweet rice, and whole garlic cloves and simmered until tender. The combination of chicken and ginseng creates a complex yet harmonious flavor. This is a classic summertime dish that revitalizes the body and soul.',
    name_ja: 'サムゲタン',
    description_ja:
      '若鶏に高麗人参や、なつめ、栗、もち米、にんにくなどを詰めてじっくり煮込んだスープ。鶏肉と高麗人参が抜群の調和を見せる、伝統的な夏のスタミナ料理。',
    name_zh: '参鸡汤',
    description_zh:
      '在小鸡的腹中填入人参、大枣、栗子、糯米、蒜头等，经长时间熬煮而成。鸡肉和人参融合在一起，是传统的夏季保健食品。',
    name_zh2: '蔘雞湯',
    description_zh2:
      '在小雞的腹中填入人蔘、大棗、板栗、糯米、大蒜等食材後經長時間熬煮而成，人蔘香氣和雞肉融合的香醇美味。是韓國傳統的夏季養生飲食。',
  },
  {
    id: 231,
    category: '탕 [Tang]',
    name: '생태탕',
    pronounce: 'Saengtaetang',
    description:
      '생태는 얼리거나, 말리지 않은 싱싱한 생물 상태의 명태를 부르는 명칭이다. 생태탕은 생태에 무, 쑥갓 등의 채소와 두부, 고춧가루 등을 넣어서 얼큰하게 끓인 탕이다.',
    name_en: 'Pollack Soup',
    description_en:
      'Spicy saengtae (fresh pollack) soup made with fresh pollack, bean curd, radish, crown daisy, and other vegetables and seasoned with red chili powder.',
    name_ja: 'スケトウダラスープ',
    description_ja:
      '凍らせたり干していない生のスケトウダラが入るスケトウダラスープ。スケトウダラに大根、春菊などの野菜と豆腐、粉唐辛子などを入れて辛めに煮込む。',
    name_zh: '鲜明太鱼汤',
    description_zh:
      '鲜明太鱼是指没有冷冻或风乾的新鲜明太鱼。将鲜明太鱼和萝卜、茼蒿等蔬菜以及豆腐、辣椒粉等材料一起熬煮即可，味道非常鲜美爽口。',
    name_zh2: '鮮明太魚湯',
    description_zh2:
      '鮮明太魚是指沒有冷凍和沒有風乾的新鮮明太魚，把鮮明太魚跟蘿蔔、青蒿、豆腐、辣椒粉等一起燉煮非常美味。',
  },
  {
    id: 232,
    category: '탕 [Tang]',
    name: '설렁탕',
    pronounce: 'Seolleongtang',
    description:
      '소의 뼈, 내장 등을 함께 넣고 오랜 시간 푹 고아 만든 탕이다. 국물이 뽀얗고 맛이 진하며 보양식으로 널리 알려져 있다.',
    name_en: 'Ox Bone Soup',
    description_en:
      'A savory soup made of ox bones and innards. Hours, and sometimes days, of slow simmering produces the milky white broth and concentrated flavor',
    name_ja: 'ソルロンタン',
    description_ja: '牛の骨や内臓などを長時間煮込んだスープ。濃厚な白いスープが特徴的。',
    name_zh: '雪浓汤',
    description_zh: '用牛骨、牛内脏等长时间熬制而成，汤汁雪白，香味浓厚，是有名的滋补汤。',
    name_zh2: '雪濃湯',
    description_zh2:
      '將牛骨和精肉一起放入後長時間熬煮而成，是傳統滋補湯。雪白溫熱的湯汁濃醇，味道絕佳，一般會泡飯吃。',
  },
  {
    id: 233,
    category: '탕 [Tang]',
    name: '쏘가리매운탕',
    pronounce: 'Ssogarimaeuntang',
    description:
      '손질한 쏘가리에 각종 채소를 넣고 고추장과 고춧가루를 풀어 얼큰하게 끓인 매운탕으로 맛이 깔끔하고 잡냄새가 없어 민물고기 매운탕 중 으뜸으로 꼽힌다.',
    name_en: 'Spicy Mandarin Fish Stew',
    description_en:
      'This isa spicy mandarin fish stew boiled withvegetables and seasoned with gochujangand red pepper powder. Mandarin fish is widely believed to be the best freshwaterfish for use in a spicy stew, because it has a clear taste without the fishy smell.',
    name_ja: 'コウライケツギョの辛味スープ',
    description_ja:
      'コウライケツギョと野菜を入れ、コチュジャンと粉唐辛子を溶いて辛めに仕上げたスープ。味はさっぱりしていて臭みがなく、淡水魚の辛味スープの中でも食べやすくおいしいと言われる。',
    name_zh: '鲜辣桂鱼汤',
    description_zh:
      '锅中放入适量的清水，将收拾好的桂鱼和各种蔬菜放进去一起熬煮，再放入辣椒酱和辣椒粉，味道鲜辣爽口，没有异味，味道在淡水鱼鲜辣汤中首屈一指。',
    name_zh2: '鮮辣桂魚湯',
    description_zh2:
      '清理好的桂魚裡放入各種蔬菜，再加入辣椒醬與辣椒粉煮沸。鮮辣桂魚湯非常爽口，沒有怪味，是在淡水魚中首屈一指的辣湯食材。',
  },
  {
    id: 234,
    category: '탕 [Tang]',
    name: '아귀탕',
    pronounce: 'Agwitang',
    description:
      '손질한 아귀에 미나리, 콩나물 등의 채소를 넣고 끓이는 탕이다. 예전에는 못생긴 생김새 때문에 버리던 생선이었는데, 요즘은 쫄깃한 맛으로 인기가 좋다.',
    name_en: 'Monkfish Soup',
    description_en:
      'Monkfish boiled with bean sprout and Korean parsley. In the past, monkfish was not consumed due to its ugly appearance, but it has now become popular thanks to its chewy texture.',
    name_ja: 'アンコウスープ',
    description_ja:
      '下処理したアンコウにセリ、豆もやしなどの野菜を入れて煮込んだスープ。以前は見た目が醜いと捨てられていた魚だったが、現在は食感などが人気。',
    name_zh: '安康鱼汤',
    description_zh:
      '将处理好的安康鱼和水芹、豆芽等蔬菜一起炖煮即可。以前，安康鱼因长得过于丑陋而被人们弃之不用，如今其细嫩鲜美的肉质备受人们的喜爱。',
    name_zh2: '安康魚湯',
    description_zh2:
      '清理好的鮟鱇跟水芹、豆芽等蔬菜一起燉煮。在過去，鮟鱇因為其貌不揚的外觀備受嫌棄，而如今卻以勁道的口感備受人們的喜愛。',
  },
  {
    id: 235,
    category: '탕 [Tang]',
    name: '알탕',
    pronounce: 'Altang',
    description:
      '명태의 알인 명란을 넣고 끓인 매운탕이다. 명란은 글루타민산과 라이신 등의 필수 아미노산, 비타민A 등을 많이 함유하고 있어 시력보호와 피부미용에 좋다.',
    name_en: 'Spicy Fish Roe Soup',
    description_en:
      'Fish roe is rich in essential amino acids, such as glutamic acid and lysine, and vitamin A, and helps maintain healthy eyes and skin.',
    name_ja: '魚の卵スープ',
    description_ja:
      'スケトウダラの卵である明太子を入れて煮たメウンタン(辛いスープ)。明太子はグルタミン酸やリジンなどの必須アミノ酸やビタミンAなどが豊富に含まれており、目によく、肌の美容にもいい。',
    name_zh: '鱼子汤',
    description_zh:
      '用明太鱼的鱼子熬煮的辣汤。明太鱼子富含谷氨酰胺和赖氨酸等人体所必需的氨基酸以及维生素A，既能美容又能保护视力。',
    name_zh2: '魚子湯',
    description_zh2: '魚子湯是放入明太子和蔬菜煮出的辣味魚子湯。明太魚子有非常獨特的香酥味。',
  },
  {
    id: 236,
    category: '탕 [Tang]',
    name: '양곰탕',
    pronounce: 'Yanggomtang',
    description:
      '소의 양을 뽀얀 국물이 우러나도록 푹 끓인 후 무를 넣어 다시 끓인 보양 탕이다. 양은 소의 위로, 뜨거운 물을 끼얹어 검은 막을 벗겨 탕과 구이로 많이 먹는다.',
    name_en: 'Beef Tripe Soup',
    description_en:
      'A nourishing soup made with yang (cow’s first stomach) simmered until the broth becomes cloudy and boiled with radish. The yang is cleaned by pouring hot water over it to remove the black membrane and boiled or grilled.',
    name_ja: '牛の胃袋のコムタン',
    description_ja:
      '牛の胃袋を白濁スープになるまでじっくりと煮込み、その後大根を入れて再び煮込んだスープ。牛の胃袋は、熱いお湯をかけて黒い膜をはがし、スープに入れたり焼いてよく食べられる。',
    name_zh: '精熬牛胃汤',
    description_zh:
      '将牛胃细熬慢炖至汤色乳白，再放入萝卜继续炖煮一会儿即成营养滋补汤。处理牛胃时，要先浇上开水，撕掉黑色的薄膜。牛胃可以用来做汤或烧烤。',
    name_zh2: '精熬牛胃湯',
    description_zh2:
      '長時間燉煮牛胃，直至湯色發白，然後放入蘿蔔繼續燉煮片刻即成滋補美食。清理牛胃時澆上熱水，撕掉黑色膜。牛胃可以做湯或燒烤。',
  },
  {
    id: 237,
    category: '탕 [Tang]',
    name: '어묵꼬치',
    pronounce: 'Eomukkkochi',
    description:
      '무, 다시마, 멸치 따위로 우린 국물에 꼬챙이에 꿴 어묵을 푹 담가 끓여서 먹는 음식이다. 뜨끈한 어묵 국물에 쫄깃한 어묵꼬치를 건져 양념간장에 찍어 먹는다.',
    name_en: 'Skewered Fishcake Soup',
    description_en:
      'Fishcakes threaded on skewers boiled in broth made with radish, kelp, and anchovies. Skewered fishcakes in the hot soup are served with a dipping sauce.',
    name_ja: '串刺し練り天',
    description_ja:
      '大根、昆布、煮干しなどでとった出し汁に、串に刺した練り天を入れて煮たもの。温かい出し汁から歯ごたえのある食感の串刺し練り天を取り出し、醤油だれにつけて食べると美味しい。',
    name_zh: '鱼糕串',
    description_zh:
      '在用萝卜、海带、鳀鱼等食材熬制的高汤里放入鱼糕串煮食的料理。从汤中捞出口感筋道的鱼糕串再蘸上调味酱油，搭配热乎乎的鱼糕汤一起吃。',
    name_zh2: '魚板串',
    description_zh2:
      '在用蘿蔔、海帶、鳀魚等材料熬製的高湯裡放入魚板串後煮著吃。從湯中撈出口感有嚼勁的魚板串沾取調味醬油，搭配熱騰騰的魚板湯一起吃。',
  },
  {
    id: 238,
    category: '탕 [Tang]',
    name: '연포탕',
    pronounce: 'Yeonpotang',
    description:
      '두부를 지져 닭고기, 표고, 다시마 등과 함께 끓인 국이다. 전라남도 영암에서는 낙지를 통째로 넣은 다음 각종 양념을 더해 끓여 먹는 낙지연포탕이 발달해 왔다.',
    name_en: 'Bean Curd Soup',
    description_en:
      'This is a soup featuring boiled and pan-fried bean curd, chicken, shitake mushroom, and kelp. In Yeongam,South Jeollanam Province, yeonpotang boiled with a whole, seasoned octopus is quite popular.',
    name_ja: '豆腐スープ',
    description_ja:
      '豆腐を焼いて鶏肉、しいたけ、昆布などと一緒に煮たスープ。全羅南道・霊岩では、テナガダコを丸ごと入れて薬味を加えて煮るテナガダコスープが有名。',
    name_zh: '豆腐清汤',
    description_zh:
      '软泡即豆腐，将油煎的豆腐和鸡肉、香菇、海带等材料一起熬成的汤。全罗南道灵岩地区流行章鱼鲜蔬汤，将整只章鱼放进去，加入各种调料一起熬煮。',
    name_zh2: '豆腐清湯',
    description_zh2:
      '把豆腐煎好，再跟雞肉、香菇、昆布等一起煮成湯。在全羅南道靈岩地區，人們會放入整只章魚，然後加入各種調料煮成湯，這種湯叫做章魚鮮蔬湯。',
  },
  {
    id: 239,
    category: '탕 [Tang]',
    name: '영양한우갈비탕',
    pronounce: 'YeongyanghanuGalbitang',
    description:
      '다진 한우 갈빗살을 양념해 치댄 후 데친 우엉에 붙여 한입 크기로 모양을 낸 다음 양념한 육수에 밤, 표고버섯 등과 함께 넣고 졸인 뒤 육수를 부어 낸다.',
    name_en: 'Nutritious Korean Beef Rib Soup',
    description_en:
      'This dish is a beef rib soup made with minced beef rib meat wrapped with parboiled burdock root and cut into bite-sized pieces in seasoned beef stock, along with chestnuts and shitake mushroom.',
    name_ja: '栄養韓牛カルビタン',
    description_ja:
      '挽いた韓牛のカルビを味付けしてこね、湯掻いたごぼうにつけて一口大の大きさにする。味付けしたスープに栗、しいたけなどと一緒に入れて煮込み、再びスープを注ぐ。',
    name_zh: '营养韩牛排骨汤',
    description_zh:
      '将韩牛的排骨肉剁碎后加入调料揉搓均匀备用。将肉末贴在用开水焯过的牛蒡上，做成方便入口的大小，然后倒入调过味的高汤，加入栗子、香菇等一起炖，最后倒上高汤上桌即可。',
    name_zh2: '營養韓牛排骨湯',
    description_zh2:
      '剁好的韓牛排骨肉裡加入調料後好好揉搓，然後按一口大小貼在牛蒡上，再跟調好味的高湯、栗子、香菇等一起燉煮，端鍋的時候再倒一點高湯。',
  },
  {
    id: 240,
    category: '탕 [Tang]',
    name: '왕갈비탕',
    pronounce: 'Wanggalbitang',
    description:
      '보통의 갈비보다 크게 자른 왕갈비를 넣고, 연하고 흐물흐물해지도록 푹 고아 다진 파와 소금을 넣어 먹는다. 국물이 구수하고 갈비를 뜯어 먹는 맛이 쏠쏠하다.',
    name_en: 'Beef Rib Soup',
    description_en:
      'This hearty and nutritious soup is made by simmering large beef ribs until tender and seasoning with chopped green onion and salt.',
    name_ja: '王カルビタン',
    description_ja:
      '通常のカルビより大きめに切ったカルビを入れ、やわらかくほろほろになるまで煮込み、みじん切りしたねぎと塩を入れて食べる。スープは風味があり、骨付きカルビにかぶりつく楽しさもある。',
    name_zh: '大排骨汤',
    description_zh:
      '将切成比普通排骨更大块的大排骨放入汤里炖至软烂，再放入葱花和食盐即可。大排骨汤味道香浓鲜美，排骨肉啃起来也是别有一番乐趣。',
    name_zh2: '大排骨湯',
    description_zh2:
      '把切成比普通排骨大塊的王排骨放入湯裡充分燉煮，然後放入蔥花和食鹽調味。王排骨湯味道非常鮮美，津津有味地啃個排骨也非常有樂趣。',
  },
  {
    id: 241,
    category: '탕 [Tang]',
    name: '용봉탕',
    pronounce: 'Yongbongtang',
    description:
      '잉어나 자라를 닭과 함께 넣어 끓인 탕이다. 문어, 낙지, 소고기, 전복, 해삼 등을 추가하기도 하며 기력을 보충 해주는 보양 음식으로 즐겨 먹는다.',
    name_en: 'Carp, Softshell Turtle, and Chicken Soup',
    description_en:
      'A clear soup boiled with carp or softshell turtle and chicken. Other ingredients, such as octopus, beef, abalone, and sea cucumber, can be added. This soup is considered an energy-boosting dish.',
    name_ja: '鯉と鶏肉のスープ',
    description_ja:
      '鯉やスッポンを鶏肉と一緒に煮込んだスープ。タコ、テナガダコ、牛肉、アワビ、ナマコなどを加えることもある。気力を回復させる滋養食としてよく食べられている。',
    name_zh: '龙凤汤',
    description_zh:
      '将鲤鱼或甲鱼与鸡一起熬煮的汤料理。有时还会添加章鱼、长爪章鱼、牛肉、鲍鱼、海参等，作为一道滋补美食备受人们喜爱。',
    name_zh2: '龍鳳湯',
    description_zh2:
      '用鯉魚或鱉和雞一起熬煮而成。也會添加大章魚、章魚、牛肉、鮑魚、海參等，是一種備受喜愛的滋補美食。',
  },
  {
    id: 242,
    category: '탕 [Tang]',
    name: '우거지갈비탕',
    pronounce: 'Ugeojigalbitang',
    description:
      '갈비뼈를 오랫동안 끓인 국물에 우거지와 된장을 넣어 만든 탕이다. 우거지는 푸성귀를 다듬을 때 골라 놓은 겉대를 말하며 식이섬유가 많아 정장작용에 좋다.',
    name_en: 'Korean Cabbage and Short Rib Soup',
    description_en:
      'Korean cabbage leaves slowly simmered in a beef rib stock and seasoned with doenjang (soybean paste). Ugeoji refers to the green outer layer of Korean cabbage or other leafy vegetables.',
    name_ja: '白菜カルビタン',
    description_ja:
      'あばら骨をじっくり煮込んだスープにウゴジとテンジャンを加えたスープ。「ウゴジ」は白菜の外側の葉のこと。',
    name_zh: '干白菜排骨汤',
    description_zh:
      '用排骨长时间熬煮制成高汤，再放入泡发的干白菜和大酱熬煮。干白菜是青菜的外表层菜叶，富含膳食纤维，对肠胃好。',
    name_zh2: '乾白菜排骨湯',
    description_zh2:
      '乾白菜牛骨湯是在牛排骨湯裡放入乾白菜和大醬煮出的香醇湯餚。牛排骨的高湯可用來煮年糕湯、香辣牛肉湯、蘿蔔清湯等不同的湯。',
  },
  {
    id: 243,
    category: '탕 [Tang]',
    name: '우럭매운탕',
    pronounce: 'Ureokmaeuntang',
    description:
      '손질한 우럭을 적당한 크기로 토막 내 매운 양념과 함께 각종 채소를 넣어 얼큰하게 끓인 탕이다. 우럭은 기름이 많아 고소한 국물이 많이 우러나오기 때문에 술안주로도 각광받는다.',
    name_en: 'Spicy Rockfish Stew',
    description_en:
      'For this dish, rockfish is cut into pieces and boiled with vegetables and spicy seasoning. Rockfish is popular as a side dish with alcohol, as it is fatty and has a pleasingly savory taste.',
    name_ja: 'クロソイの辛味スープ',
    description_ja:
      'クロソイを適当な大きさにぶつ切りにし、辛味の薬味と野菜を入れて辛く煮たスープ。クロソイは脂身が多く、コクのある出汁がよく出るため、酒の肴としても人気だ。',
    name_zh: '鲜辣石斑鱼汤',
    description_zh:
      '将石斑鱼切成适当的大小，放入辣味的调味汤和各种蔬菜，熬成鲜辣的鱼汤。石斑鱼油多，熬久了汤里就会渗出香浓的汤味，因此也是人们喜爱的下酒菜之一。',
    name_zh2: '鮮辣石斑魚湯',
    description_zh2:
      '把清理好的石斑魚剁成適當大小，放入辣味調料和各種蔬菜煮沸。石斑魚富含油分，所以能煮出多量鮮美的魚湯，非常適合做下酒菜。',
  },
  {
    id: 244,
    category: '탕 [Tang]',
    name: '우족탕',
    pronounce: 'Ujoktang',
    description:
      '소의 족발 부위를 장시간 삶아내어 끓인 탕이다. 파를 얹어 소금, 후추로 간한 뒤 먹는데, 진한 국물과 쫀득쫀득한 우족의 식감이 별미다.',
    name_en: 'Ox Feet Soup',
    description_en:
      'Ox feett simmered for a long period of time and seasoned with salt and pepper. Chopped green onion is added as a garnish. The thick broth and chewy texture of the ox feet are especially appealing.',
    name_ja: '牛足スープ',
    description_ja:
      '牛の足の部位を長時間茹でて煮込んだスープ。ねぎをのせ、塩、こしょうで味を調えて食べる。濃厚なスープと弾力のある牛足の食感がたまらない。',
    name_zh: '牛蹄汤',
    description_zh:
      '将牛蹄长时间细熬慢炖而成，吃的时候要放一些葱花，并用食盐和胡椒调味，香浓的汤和有嚼劲的牛蹄肉令人回味无穷。',
    name_zh2: '牛蹄湯',
    description_zh2:
      '牛蹄經長時間燉煮，然後放入蔥花、食鹽和胡椒調味。牛蹄湯非常香濃，牛蹄肉非常勁道，是非常美味的滋補美食。',
  },
  {
    id: 245,
    category: '탕 [Tang]',
    name: '장어탕',
    pronounce: 'Jangeotang',
    description:
      '장어를 뼈가 허물어질 때까지 푹 끓인 후, 된장과 고춧가루로 간을 하여 끓인 탕이다. 더운 여름에 먹는 보양식으로 유명하며, 방아 잎이나 들깨가루를 넣으면 국물이 진하고 깊은 맛이 난다.',
    name_en: 'Eel Soup',
    description_en:
      'Eel simmered until tender and seasoned with doenjang (soybean paste) and red chili powder. This eel soup, a popular summer delicacy, can be made thicker and more flavorful by adding perilla seeds or agastache leaves.',
    name_ja: 'ウナギスープ',
    description_ja:
      'ウナギの骨がやわらかくなるまでじっくり煮込み、テンジャンと粉唐辛子で味を調えて煮込んだスープ。暑い夏に食べる滋養食として有名で、カワミドリ やエゴマの粉を入れると濃厚なスープになる。',
    name_zh: '鳗鱼汤',
    description_zh:
      '将鳗鱼炖至鱼骨完全酥烂，再用大酱和辣椒粉调味即可。鳗鱼汤是最具代表性的夏季营养滋补美食，加入排草香或紫苏粉会使汤味更加鲜美香浓。',
    name_zh2: '鰻魚湯',
    description_zh2:
      '把鰻魚燉煮至骨頭髮軟，再用大醬和辣椒粉調味。鰻魚湯是炎熱夏季的著名滋補美食，放入排草香或野蘇子粉會更加美味。',
  },
  {
    id: 246,
    category: '탕 [Tang]',
    name: '전복삼계탕',
    pronounce: 'Jeonboksamgyetang',
    description:
      '어린 닭에 전복과 인삼, 대추, 밤, 찹쌀, 마늘 등을 넣고 푹 고아 만든 음식이다. 전복의 내장이 함께 들어가 고소한 맛이 난다.',
    name_en: 'Abalone and Ginseng Chicken Soup',
    description_en:
      'A soup prepared by simmering a whole young chicken with abalone, ginseng, jujubes, chestnuts, glutinous rice, and garlic until the meat becomes tender. The abalone offal makes the soup even more savory.',
    name_ja: 'アワビサムゲタン',
    description_ja:
      '若鶏にアワビと高麗人参、なつめ、栗、もち米、にんにくなどを入れてじっくり煮込んだ料理。アワビの内臓が入るので香りがいい。',
    name_zh: '鲍鱼参鸡汤',
    description_zh:
      '将小鸡和鲍鱼、人参、红枣、栗子、糯米、蒜等材料一起细熬慢炖即可。鲍鱼内脏让汤的味道更加香醇。',
    name_zh2: '鮑魚參雞湯',
    description_zh2:
      '把小雞和鮑魚、人參、大棗、栗子、糯米、大蒜等一起充分燉煮，湯裡的鮑魚內臟能夠很好地提味。',
  },
  {
    id: 247,
    category: '탕 [Tang]',
    name: '조개탕',
    pronounce: 'Jogaetang',
    description:
      '숙취해소에 특히 좋은 음식이다. 해감을 뺀 재첩이나 대합, 모시조개 등을 깨끗이 씻어 물을 붓고 끓이다가 맛이 우러났을 때 채 썬 파를 얹어 먹는 시원하고 맑은 탕이다.',
    name_en: 'Clam Soup',
    description_en:
      'Popular as a hangover remedy,Jogaetang is a clear soup made by boiling clams, including Asian clams and shortneckedclams, in water. The clams areprepared by soaking in salted water to purge the sand. Julienned green onions are addedat the table.',
    name_ja: '貝のスープ',
    description_ja:
      '二日酔いの酔い覚ましにも良いとされる料理。砂抜きしたシジミやハマグリ、アサリなどをきれいに洗って水を注いで煮立たせ、出汁が出たら千切りにしたねぎをのせて食べる。透明であっさりしたスープ。',
    name_zh: '蛤蜊汤',
    description_zh:
      '一道有助于解酒的汤品。将吐净泥沙的河蚬或文蛤、黑壳蛤等洗净后放入锅中，加清水一起熬煮，等到熬出味儿的时候，再放入葱丝，味道十分清淡爽口。',
    name_zh2: '蛤蜊湯',
    description_zh2:
      '蛤蜊湯是非常好的醒酒湯。把吐完沙子的蜆、花蛤、巴非蛤清理乾淨後，倒入清水煮沸，等出味後用蔥絲調味，是非常清爽的鮮湯。',
  },
  {
    id: 248,
    category: '탕 [Tang]',
    name: '조기매운탕',
    pronounce: 'Jogimaeuntang',
    description:
      '고추장 양념을 푼물에 무와 조기를 넣고 끓이다 마지막에 쑥갓을 올려 내는 탕으로 칼칼한 맛이 매력이다.',
    name_en: 'Spicy Yellow Croaker Stew',
    description_en:
      'This spicy soup is made by boiling radish and yellow croaker in water seasoned with a gochujang (red chili paste) sauce. Crown daisy is added before serving.',
    name_ja: 'イシモチの辛味スープ',
    description_ja:
      'コチュジャンベースのたれをといた水に大根とイシモチを入れて煮込み、最後に春菊をのせるスープ。ピリッとした辛味が魅力。',
    name_zh: '鲜辣黄花鱼汤',
    description_zh:
      '清水中加入一些辣椒酱调味料，再放入萝卜和黄花鱼一起炖煮，起锅前放入茼蒿即可。鱼汤的味道十分香辣鲜美。',
    name_zh2: '鮮辣黃花魚湯',
    description_zh2:
      '用清水把辣椒醬衝開，然後放入蘿蔔與黃花魚燉煮，端鍋前放入青蒿，這樣做出來的湯非常鮮辣美味。',
  },
  {
    id: 249,
    category: '탕 [Tang]',
    name: '참게매운탕',
    pronounce: 'Chamgemaeuntang',
    description:
      '된장과 고추장을 푼 물에 해감한 참게와 애호박, 시래기, 대파, 들깨가루, 국간 장을 넣고 푹 끓인 탕으로 초피가루를 곁들여 먹기도 한다.',
    name_en: 'Spicy Hairy Crab Stew',
    description_en:
      'Purged crabs boiled with zucchini, siraegi (radish greens), green onion, perilla seed powder, and soy sauce in water with doenjang (soybean paste) and gochujang (red chili paste). Korean pepper may also be added according to one’s preference.',
    name_ja: '上海ガニの辛味スープ',
    description_ja:
      'テンジャンとコチュジャンを溶いた水に砂抜きした上海ガニとズッキーニ、大根の葉、長ねぎ、エゴマ粉、クッカンジャンを加え、じっくりと煮たスープ。カホクザンショウ粉を添えて食べる場合もある。',
    name_zh: '鲜辣河蟹汤',
    description_zh:
      '清水中加入大酱和辣椒酱，放入吐完沙的河蟹和西葫芦、干萝卜缨、大葱、紫苏粉、淡酱油等材料一起熬煮即可，食用时也可加入一些花椒粉。',
    name_zh2: '鮮辣河蟹湯',
    description_zh2:
      '清水裡放入大醬與辣椒醬，在放入吐好沙子的螃蟹和西葫蘆、幹蘿蔔纓、大蔥、野蘇子粉、韓式湯醬油等煮沸。也可以根據喜好放點花椒粉。',
  },
  {
    id: 250,
    category: '탕 [Tang]',
    name: '초계탕',
    pronounce: 'Chogyetang',
    description:
      '닭을 푹 삶아 육수는 차게 식혀 식초와 겨자로 간을 하고, 살코기는 잘게 찢어서 함께 먹는 음식이다. 저칼로리 음식으로 메밀국수를 함께 말아 먹으면 좋다.',
    name_en: 'Cold Chicken Soup',
    description_en:
      'This is a chicken soup flavored with vinegar and mustard and topped with shredded chicken. It is a low-calorie meal often served with buckwheat noodles.',
    name_ja: '鶏肉の冷製スープ',
    description_ja:
      '鶏肉をじっくり煮込んだ出し汁を冷やして酢と辛子で味を調える。肉は細かくさいて一緒に食べる。低カロリーの料理で、そばとからめて食べるのもおすすめ。',
    name_zh: '醋鸡凉汤',
    description_zh:
      '先将鸡放入锅中炖至烂熟，鸡汤放凉待用，再用醋和芥末调味，鸡肉则撕成细丝连汤一起食用即可。 醋鸡凉汤不仅美味，而且热量低，将荞麦面放入鸡汤里一起吃风味更佳。',
    name_zh2: '醋雞涼湯',
    description_zh2:
      '先將雞肉燉好，肉湯放涼後，用醋與芥末調味，雞肉則撕成細絲。這道菜的卡路里很低，將蕎麥麵倒入雞湯一同食用則風味更佳。',
  },
  {
    id: 251,
    category: '탕 [Tang]',
    name: '추어탕',
    pronounce: 'Chueotang',
    description:
      '소금으로 해감한 미꾸라지를 씻은 뒤 끓인 다음 믹서에 갈아 놓는다. 이 국물에 부추와 시래기를 넣고 다시 끓여 고추장 등으로 간을 맞춘 것으로 보양식으로 인기가 좋다.',
    name_en: 'Loach Soup',
    description_en:
      'This dish is a soup prepared by purging sand out of live loach by boiling in salted water. The boiled and cleaned loach is then ground in a blender and brought to a boil again with various ingredients, such as chive, dried radish greens, and gochujang. It is a popular health food in Korea.',
    name_ja: 'どじょうスープ',
    description_ja:
      '塩で水垢をとったドジョウを洗って煮込み、ミキサーで粉砕しておく。そのスープにネギとダイコンの葉を入れてもう一度煮込み、コチュジャンなどで味付けする。保養食として人気が高い。',
    name_zh: '泥鳅汤',
    description_zh:
      '先用盐巴去掉泥鳅身上的淤泥，加入适量水煮熟后用搅拌机打碎。在汤和打碎的肉里放入韭菜和泡发的干菜叶重新熬煮，最后用辣椒酱等调节咸淡，是极受欢迎的滋补养生汤。',
    name_zh2: '泥鰍湯',
    description_zh2: '泥鰍湯是放入煮過攪碎的泥鰍和蔬菜煮成的傳統滋補湯。',
  },
  {
    id: 252,
    category: '탕 [Tang]',
    name: '콩비지탕',
    pronounce: 'Kongbijitang',
    description:
      '콩비지는 두부를 만들고 남은 찌꺼기를 말한다. 콩비지와 배추우거지를 넣고 푹 끓인 후 소금과 새우젓으로 간을 한 탕이다.',
    name_en: 'Pureed Soybean Soup',
    description_en:
      'Kongbiji (pureed soybean) boiled with ugeoji (dried outer leaves of Korean cabbage) and seasoned with salt and salted shrimp.',
    name_ja: 'おからスープ',
    description_ja:
      '豆腐を作る過程で出るおから。おからと白菜の外葉を入れてじっくり煮込んだ後、塩とアミの塩辛で味を調えるスープ。',
    name_zh: '黄豆渣汤',
    description_zh:
      '黄豆渣是制作豆腐时滤去浆汁所剩的渣子。将黄豆渣和干白菜一起炖煮，最后用盐和虾酱调味即可。',
    name_zh2: '黃豆渣湯',
    description_zh2:
      '豆渣是指做豆腐之後剩下的渣滓。烹飪時，先將豆渣與白菜幫燉好，再用鹽與蝦醬調味即可。',
  },
  {
    id: 253,
    category: '탕 [Tang]',
    name: '콩탕',
    pronounce: 'Kongtang',
    description:
      '콩물 또는 고운 날콩가루를 찬물에 풀어 끓이다가 순두부처럼 엉길 때 채소를 썰어 넣고 다시 끓여 양념한 묽은 콩죽으로 밥을 넣어 끓이기도 한다.',
    name_en: 'Soybean Soup',
    description_en:
      'This dish is a watery Soybean Soup made by boiling soybean soup with a mixture of finely ground soybeanpowder mixed with cold water until it curdles like sundubu (soft bean curd). Chopped vegetables are then added and brought to a boil, with or without rice. Serve with sauce.',
    name_ja: '大豆スープ',
    description_ja:
      '豆乳または豆粉を冷水に溶いて煮立たせ、おぼろ豆腐のように固まりかけたら野菜を加えて再び煮立たせて味付けした薄い豆粥。ご飯を加えることもある。',
    name_zh: '豆汤',
    description_zh:
      '将豆汁或细豆粉加凉水熬煮，待到像嫩豆腐一样凝固时，放入切好的蔬菜继续熬煮，至稀粥状态后调味起锅即可，还可放入米饭一起熬煮。',
    name_zh2: '豆湯',
    description_zh2:
      '用涼水衝開豆汁或磨細的生豆麵，然後煮沸，呈嫩豆腐形狀時把切好的蔬菜放進去繼續煮沸，然後加入調料即成豆湯。有時候也會加入米飯一起熬製。',
  },
  {
    id: 254,
    category: '탕 [Tang]',
    name: '통추어탕',
    pronounce: 'Tongchueotang',
    description:
      '미꾸라지를 통으로 넣고 채소와 함께 끓인 요리이다. 미꾸라지는 반드시 살아 있는 것을 이용하며 소금과 밀가루로 번갈아 씻어내고 요리한다. 진한 국물이 일품인 보양 음식이다.',
    name_en: 'Whole Loach Soup',
    description_en:
      'Whole loaches boiled with vegetables. Live loaches are prepared and washed with salt first, and then with flour. It is an energy-boosting dish with a thick and flavorful broth.',
    name_ja: '丸ごとどじょうスープ',
    description_ja:
      '丸ごとのどじょうを野菜と一緒に煮込んだ料理。どじょうは必ず生きているものを使い、塩と小麦粉で交互に洗って煮込む。濃厚なスープが絶品の滋養食。',
    name_zh: '泥鳅汤',
    description_zh:
      '用整条泥鳅与蔬菜一起熬制的汤。必须使用活泥鳅，用盐和面粉反复清洗后烹制，是汤浓味鲜的滋补养生美食。',
    name_zh2: '整條泥鰍湯',
    description_zh2:
      '用整條泥鰍與蔬菜一起熬製的湯。必須使用活泥鰍，用鹽和麵粉反覆清洗後烹煮，是一道湯濃味鮮的滋補養生湯。',
  },
  {
    id: 255,
    category: '탕 [Tang]',
    name: '해물탕',
    pronounce: 'Haemultang',
    description:
      '생선, 꽃게, 낙지, 새우 등의 각종 해산물에 매운 고춧가루 양념장을 풀어 얼큰하게 끓인 탕이다. 시원한 국물 맛이 일품이다.',
    name_en: 'Spicy Seafood Stew',
    description_en:
      'A spicy stew made of fish, blue crab, baby octopus, shrimp, and other seafood. It is seasoned with red chili powder sauce, giving it a hot, zesty flavor.',
    name_ja: '海鮮鍋',
    description_ja:
      '魚や、ワタリガニ、タコ、エビなどの魚介類にコチュジャンベースの薬味を加えて煮た、あっさり辛口のスープ。魚介類のおいしさが引き立つ一品。',
    name_zh: '海鲜汤',
    description_zh:
      '用鱼，螃蟹，章鱼，虾等各种海鲜及 辣酱一同熬煮而成，口感略辣，具有海鲜特有 的鲜味。',
    name_zh2: '海鮮湯',
    description_zh2: '放入新鮮海鮮、花蟹、章魚等各種海鮮，加入辣椒粉調料煮出鮮辣味道的湯。',
  },
  {
    id: 256,
    category: '탕 [Tang]',
    name: '홍어탕',
    pronounce: 'Hongeotang',
    description:
      '물에 고춧가루, 된장, 무를 넣어 끓이다가 홍어와 내장을 넣고 끓어오르면 미나리, 대파, 고추, 다진 마늘, 생강을 넣고 한소끔 더 끓여 국 간장으로 간을 한다. 톡 쏘는 독특한 맛과 향이 매력이다.',
    name_en: 'Skate Soup',
    description_en:
      'Skate and its offal boiled in water with red chili powder, doenjang (soybean paste), and radish. When the soup comes to a boil, add water parsley, green onion, green pepper, and chopped garlic and ginger, bring to a boil again, and season with soy sauce. This soup has a unique tangy taste and fragrance.',
    name_ja: 'ガンギエイスープ',
    description_ja:
      '水に粉唐辛子、テンジャン、大根を入れて煮た後、ガンギエイと内臓を加える。煮立ったらセリ、長ねぎ、唐辛子、みじん切りしたにんにく、生姜を入れて一煮立ちさせ、クッカンジャンで味を調える。独特の味と香りが魅力的。',
    name_zh: '斑鳐汤',
    description_zh:
      '清水中加入辣椒粉、大酱、萝卜慢慢熬煮，加入斑鳐和内脏继续熬煮至沸，再加入水芹、大葱、辣椒、蒜末、生姜等调料煮沸，最后用淡酱油调味即可。斑鳐刺激味蕾的独特味道和清香可令人胃口大开。',
    name_zh2: '斑鰩湯',
    description_zh2:
      '水裡放點辣椒粉、大醬和蘿蔔煮開，然後放入斑鰩與內臟繼續煮，水開後放入水芹、大蔥、辣椒、蒜蓉、生薑等繼續煮沸片刻，最後用韓式湯醬油調味。斑鰩湯有特殊的風味與香氣，是一道極具魅力的清湯。',
  },
  {
    id: 257,
    category: '탕 [Tang]',
    name: '홍합탕',
    pronounce: 'Honghaptang',
    description:
      '냄비에 물을 붓고 무, 홍고추, 풋고추를 넣어 끓이다가 홍합을 넣고 더 끓인다. 뽀얗고 구수한 국물이 특징이며 통통한 홍합 살을 껍질로부터 빼서 먹는 맛이 일품이다.',
    name_en: 'Mussel Soup',
    description_en:
      'Boil a pot of water with radish and red and green pepper and then add mussels. Bring all ingredients to a boil together for a while. This hearty soup is prepared with mussels in the shell.',
    name_ja: 'ムール貝スープ',
    description_ja:
      '鍋に水を入れ、大根、赤唐辛子、青唐辛子を入れて沸騰したらムール貝を入れてさらに煮込む。 白くて香ばしいスープが特徴で、ムール貝の身がとてもおいしい。',
    name_zh: '贻贝汤',
    description_zh:
      '在锅中倒入清水，放入萝卜、红辣椒、 青椒等熬煮，接着放入贻贝继续熬煮。贻贝汤 的汤水颜色雪白、味道鲜美香浓，从贝壳里剥 下贝肉放进嘴里，别有一番滋味。',
    name_zh2: '貽貝湯',
    description_zh2: '貽貝湯是放入貽貝和蘿蔔、辣椒後倒水煮出的清湯。常作為醒酒湯。',
  },
  {
    id: 258,
    category: '찌개 [Jjigae]',
    name: '갈치찌개',
    pronounce: 'Galchijjigae',
    description:
      '토막 낸 갈치를 애호박과 함께 끓이다 고춧가루, 다진 마늘, 소금 등을 넣어 끓여낸 찌개이다. 칼칼한 국물과 부드러운 갈치의 맛을 느낄 수 있다.',
    name_en: 'Cutlassfish Stew',
    description_en:
      'This spicy dish is made by cutting cutlassfish into pieces, boiling with zucchini, and seasoning with red chili powder, chopped garlic, and salt. The meat of the cutlass fish is soft, and the spicy broth is quite savory.',
    name_ja: '太刀魚チゲ',
    description_ja:
      'ぶつ切りにした太刀魚をズッキーニと一緒に煮て、粉唐辛子、みじん切りしたにんにく、塩などを入れて煮込んだチゲ。辛味がきいたスープとやわらかい太刀魚の味を楽しめる。',
    name_zh: '带鱼锅',
    description_zh:
      '将带鱼切成块，和西葫芦一起炖煮，再放入辣椒粉、蒜末、盐等材料继续炖煮至熟即可。带鱼锅汤味辣爽，带鱼肉质细嫩，十分美味。',
    name_zh2: '帶魚鍋',
    description_zh2:
      '先將帶魚切成小塊，與西葫蘆一同熬煮，然後放入辣椒粉、蒜末、鹽等材料。這道菜品的特點是湯味辣爽，帶魚柔滑。',
  },
  {
    id: 259,
    category: '찌개 [Jjigae]',
    name: '강된장',
    pronounce: 'Gangdoenjang',
    description:
      '뚝배기에 곱게 다진 소고기나 멸치, 다진 마늘과 파, 풋고추, 참기름, 된장을 섞어 속뜨물을 조금 붓고 되직하게 끓인 된장으로 쌈과 비빔밥에 곁들이는 한여름 별미다.',
    name_en: 'Seasoned Soybean Paste',
    description_en:
      'This is a thick sauce made with finely chopped beef, anchovies, minced garlic, green onion, green chili, sesame oil, and doenjang, all mixed with a small amount of rice water.Gangdoenjang is a summer delicacy served with ssam (wraps) and bibimbap.',
    name_ja: 'カンテンジャン',
    description_ja:
      '土鍋に小口に切った牛肉や煮干し、みじん切りにしたにんにくとねぎ、青唐辛子を入れ、ごま油、テンジャンを混ぜ、米の研ぎ汁を少量注いで煮詰めたテンジャン。包み野菜やビビンバに添える夏の料理である。',
    name_zh: '调味大酱',
    description_zh:
      '将剁碎的牛肉或鳀鱼、蒜茸、葱、 青椒、香油、大酱放入砂锅中搅拌，再倒入少 许淘米水慢慢熬煮，直至变得稍微浓稠，用来 包饭和拌饭，是夏天的一道经典美味。',
    name_zh2: '調味大醬',
    description_zh2:
      '把切碎的牛肉和鯷魚、蒜末、蔥花、青椒、香油、大醬等放入砂鍋裡，再倒入一點淘米水煮熟的大醬叫做調味大醬。酷暑季節，可以做包飯和拌飯的調味醬。',
  },
  {
    id: 260,
    category: '찌개 [Jjigae]',
    name: '고추장찌개',
    pronounce: 'Gochujangjjigae',
    description:
      '물이나 멸치육수에 고추장을 풀어 고기와 각종 채소를 썰어 넣어 끓여 낸 찌개다. 끓을 때 두부를 넣으면 두부고추장찌개, 감자를 넣으면 감자고추장찌개가 된다.',
    name_en: 'Red Chilli Paste Stew',
    description_en:
      'This is a meat and vegetable stew in water or anchovy stock and seasoned with gochujang. To this, bean curd or potatoes can then be added for variation.',
    name_ja: 'コチュジャンチゲ',
    description_ja:
      'お湯や煮干しの出し汁にコチュジャンを溶き、肉や野菜を加えたチゲ。豆腐を入れて煮ると豆腐コチュジャンチゲ、じゃがいもを入れるとじゃがいもコチュジャンチゲになる。',
    name_zh: '辣椒酱锅',
    description_zh:
      '在清水或鳀鱼高汤中加入辣椒酱， 再放入肉和各种蔬菜熬至而成。烧开时加入 豆腐就是豆腐辣椒酱锅，加入土豆就是土豆 辣椒酱锅。',
    name_zh2: '辣椒醬鍋',
    description_zh2:
      '用水或鯷魚湯衝開辣椒醬，再放入肉與各種蔬菜煮熟。水開後放入豆腐的稱作豆腐辣椒醬鍋，放土豆的稱作土豆辣椒醬鍋。',
  },
  {
    id: 261,
    category: '찌개 [Jjigae]',
    name: '김치찌개',
    pronounce: 'Kimchijjigae',
    description:
      '신김치를 이용한 국물요리다. 김치의 양념을 털어내고 돼지고기나 어패류, 두부, 굵게 썬 파 등을 함께 넣어 얼큰하게 끓인 음식이다.',
    name_en: 'Kimchi Stew',
    description_en:
      'A spicy stew made with sour kimchi, fatty pork, shellfish, and chunks of bean curd and green onion. It is served hot with steamed rice.',
    name_ja: 'キムチチゲ',
    description_ja:
      '熟成した酸味の強いキムチと、豚肉や魚介類、豆腐、太めに切ったねぎなどを一緒に煮た辛口の鍋。',
    name_zh: '辛奇汤',
    description_zh:
      '用发酵完熟好的酸味儿辛奇炖的汤。将辛奇上的调味料抹掉，加入猪肉、鱼贝类、豆腐、葱段等一同熬煮而成。',
    name_zh2: '辛奇湯',
    description_zh2:
      '辛奇湯是在熟成的辛奇中放入豬肉、豆腐、蔥等後煮出的爽辣飲食。與大醬湯同為韓式飯桌上最常見的美食。',
  },
  {
    id: 262,
    category: '찌개 [Jjigae]',
    name: '꽁치김치찌개',
    pronounce: 'Kkongchikimchijjigae',
    description:
      '냄비에 기름을 두르고 신김치와 마늘을 볶다 육수를 넣고 김치가 무르면 쉽게 구할 수 있는 통조림 꽁치를 넣고, 고춧가루, 다진 마늘, 대파, 풋고추 등을 넣어 마무리 한다.',
    name_en: 'Saury and Kimchi Stew',
    description_en:
      'Over-fermented kimchi and garlic pan-fried in an oiled pot and boiled in broth. When the kimchi becomes soft, canned saury, chopped garlic and green onion, red chili powder, and green pepper are added.',
    name_ja: 'サンマキムチチゲ',
    description_ja:
      '油をひいた鍋で熟成した酸味の強いキムチとにんにくを炒め、そこへスープを加える。キムチがやわらかく煮えたら缶詰のサンマを入れ、さらに粉唐辛子、みじん切りしたにんにく、長ねぎ、青唐辛子などを加えて食べる。',
    name_zh: '秋刀鱼辛奇汤',
    description_zh:
      '锅中倒入适量的食用油，放入酸辛奇和辣椒翻炒一会儿后倒入高汤熬煮，煮至辛奇熟后，放入市面上很容易买到的罐头装秋刀鱼，再加入辣椒粉、蒜末、从、青辣椒等材料一起熬煮即可。',
    name_zh2: '秋刀魚辛奇湯',
    description_zh2:
      '鍋裡倒點油炒酸辛奇與大蒜，再放入高湯煮開，等辛奇變軟後放入常見的秋刀魚罐頭，最後放點辣椒粉、蒜蓉、大蔥、辣椒碎等提味。',
  },
  {
    id: 263,
    category: '찌개 [Jjigae]',
    name: '도루묵찌개',
    pronounce: 'Dorumukjjigae',
    description:
      '도루묵은 비린내가 거의 없는 생선으로 무, 양파, 대파, 팽이버섯 등을 넣어 매콤하게 끓인 찌개다. 특히 도루묵의 알은 씹을 때마다 입안에서 터지는 맛이 특별하다.',
    name_en: 'Spicy Sailfin Sandfish Stew',
    description_en:
      'This spicy dish is prepared by boiling sailfin sandfish, which tastes less fishy than most other fish, with sliced radish, onion, green pepper, and enokitake mushroom. The eggs of the sailfin sandfish release a unique flavor when they pop in the mouth.',
    name_ja: 'ハタハタのチゲ',
    description_ja:
      'ハタハタは臭みがほとんどない魚。ハタハタ、大根、たまねぎ、長ねぎ、エノキダケなどを入れて辛口に仕上げたチゲは、噛むたびにハタハタの卵が口の中ではじける食感もたまらない。',
    name_zh: '银鱼锅',
    description_zh:
      '银鱼几乎没有鱼腥味，加入萝卜、洋 葱、大葱、金针菇等材料，熬成鲜辣爽口的银 鱼锅。尤其在咀嚼时银鱼的鱼卵在嘴里噼里 啪啦的炸开，味道十分特别。',
    name_zh2: '銀魚鍋',
    description_zh2:
      '銀魚沒有腥味，銀魚湯是放入蘿蔔、洋蔥、大蔥、金針菇等烹製的辣湯。尤其在咀嚼時銀魚的魚卵在嘴裡劈里啪啦的炸開，味道十分特別。',
  },
  {
    id: 264,
    category: '찌개 [Jjigae]',
    name: '동태찌개',
    pronounce: 'Dongtaejjigae',
    description:
      '동태에 무, 쑥갓 등의 채소와 두부, 고춧가루 등을 넣어 얼큰하게 끓인 찌개이다. 칼칼한 맛이 겨울철에 더 잘 어울리며, 고춧가루를 넣지 않고 맑게 끓이기도 한다.',
    name_en: 'Pollack Stew',
    description_en:
      'This spicy stew is made with pollack boiled with radish, crown daisy, and other vegetables, along with bean curd and is seasoned with red chili powder. Its spiciness makes it an ideal meal in thewinter. However, a non-spicy version canbe made without the red chili powder, depending upon one’s preference.',
    name_ja: 'スケトウダラチゲ',
    description_ja:
      'スケトウダラに大根や春菊などの野菜と豆腐、粉唐辛子などを入れて煮込んだ辛い鍋。ピリッとした辛味がきいていて、冬に食べるととてもおいしい。唐辛子を入れないものもある 。',
    name_zh: '冻明太鱼汤',
    description_zh:
      '将冻明太鱼和萝卜、茼蒿等蔬菜 放入锅中加水煮开，再放入豆腐和辣椒粉等 熬出的辣鱼汤。味道辛辣，更适合冬天食用， 也可以不放辣椒粉做成清汤。',
    name_zh2: '凍明太魚湯',
    description_zh2:
      '凍明太魚是指冷凍的明太魚。在凍明太魚裡加入各種蔬菜後煮出辣味醬湯，也可不放入辣椒粉煮出清湯。',
  },
  {
    id: 265,
    category: '찌개 [Jjigae]',
    name: '돼지갈비찌개',
    pronounce: 'Dwaejigalbijjigae',
    description:
      '핏물을 뺀 돼지갈비를 푹 끓인 후 채소를 넣어 자작하게 끓인 요리이다. 고춧가루와 파, 마늘, 새우젓으로 양념해 국물이 진하고 얼큰하다.',
    name_en: 'Pork Short Rib Stew',
    description_en:
      'Pork ribs, soaked in cold water to remove the blood, simmered with vegetables. The dish is seasoned with red chili pepper, green onion, garlic, and salted shrimp, making the broth thick and spicy.',
    name_ja: '豚カルビチゲ',
    description_ja:
      '脂身を取り除いた豚カルビをじっくりと煮込み、野菜を加えて煮詰めた料理。粉唐辛子やねぎ、にんにく、アミの塩辛で味を付け、濃厚で辛いスープが絶品。',
    name_zh: '猪排骨锅',
    description_zh:
      '猪排骨浸泡去血后煮至软烂，再放入蔬菜一起煮。用辣椒粉、葱、蒜和虾酱调味。汤味浓郁，香辣可口。',
    name_zh2: '豬排骨鍋',
    description_zh2:
      '豬排骨浸泡去血水後煮至肉爛，再放入各種蔬菜一起煮到湯汁微乾為止，用辣椒粉、蔥、大蒜、蝦醬調味。湯味濃郁，香辣可口。',
  },
  {
    id: 266,
    category: '찌개 [Jjigae]',
    name: '돼지고기김치찌개',
    pronounce: 'Dwaejigogikimchijjigae',
    description:
      '신김치에 돼지고기, 두부, 굵게 썬 대파 등을 넣어 얼큰하게 끓인 찌개이다. 기름진 돼지고기와 김치의 조화가 환상적인 한국인의 소울 푸드 같은 음식이다.',
    name_en: 'Pork and Kimchi Stew',
    description_en:
      'Over-fermented kimchi boiled with pork, bean curd, and green onion. Often considered Korean “soul food,” this spicy kimchi stew strikes a perfect balance with the greasy pork.',
    name_ja: '豚キムチチゲ',
    description_ja:
      '熟成した酸味の強いキムチに豚肉、豆腐、太く切った長ねぎなどを入れて辛めに煮込んだチゲ。脂身のある豚肉とキムチの調和がすばらしく、韓国人のソウルフードともいえる料理。',
    name_zh: '猪肉辛奇汤',
    description_zh:
      '将酸辛奇放入锅中，再加入猪肉、豆腐以及切成粗丝的葱等材料炖煮即可。肥美的猪肉与酸爽的辛奇形成完美的组合，可谓是韩国人的“灵魂美食”。',
    name_zh2: '豬肉辛奇湯',
    description_zh2:
      '在酸辛奇中，加入豬肉、豆腐以及切成粗絲的大蔥等材料，味道辣爽。油膩的豬肉與辛奇形成了夢幻般的組合，可謂韓國人的「靈魂食品」。',
  },
  {
    id: 267,
    category: '찌개 [Jjigae]',
    name: '된장찌개',
    pronounce: 'Doenjangjjigae',
    description:
      '육수에 된장을 풀고 고기나 조개류, 두부, 애호박 등을 넣어 끓인 음식이다.국물이 걸쭉하고 여러 가지 재료가 어우러져 밥을 비벼 먹기에 좋다.',
    name_en: 'Soybean Paste Stew',
    description_en:
      'Doenjang-seasonedstew made with anchovy broth, fish or clams, and summer squash. The broth is thick and flavorful, and good for mixing with rice.',
    name_ja: 'テンジャンチゲ',
    description_ja:
      'だし汁にテンジャン(味噌)を溶き、肉や魚介類、豆腐、エホバクなどを入れて煮た鍋。豊富な食材が混ざり合ったとろみのあるスープにご飯を混ぜて食べてもおいしい。',
    name_zh: '大酱汤',
    description_zh:
      '高汤中放入大酱，再加入肉、鱼贝 类、豆腐、西葫芦等熬煮即可。大酱汤的汤汁 浓厚，材料丰富，很适合拌饭吃。',
    name_zh2: '大醬湯',
    description_zh2:
      '大醬湯是在肉高湯或鳀魚高湯、貽貝高湯裡放入大醬，加入豆腐、馬鈴薯、南瓜等蔬菜後煮出的飲食。是韓國人最喜歡也最常見的湯餚飲食。',
  },
  {
    id: 268,
    category: '찌개 [Jjigae]',
    name: '부대찌개',
    pronounce: 'Budaejjigae',
    description:
      '햄과 소시지를 주재료로 하여 김치, 돼지고기, 두부 등을 한데 넣고 육수를 부어 얼큰하게 끓인 음식이다. 라면을 넣어 먹기도 한다.',
    name_en: 'Sausage Stew',
    description_en:
      'A fusion dish made with ham, sausage, kimchi, pork, and bean curd.Everything is combined and cooked in a spicy broth. Ramen noodles are often added to the simmering stew.',
    name_ja: 'プデチゲ',
    description_ja:
      'ハムやソーセージを主材料に、キムチや豚肉、豆腐などを加えて煮た辛口の鍋。即席麺を入れることもある。',
    name_zh: '火腿肠锅',
    description_zh:
      '以香肠和火腿肠为主料，外加辛奇、猪肉、豆腐等，再倒入高汤熬煮而成的辣 味混合型料理。按喜好可加入方便面。',
    name_zh2: '火腿腸鍋',
    description_zh2:
      '火腿腸鍋是將韓式食材辛奇、豆腐、豬肉和西式食材香腸、火腿腸一起放入鍋裡燉煮的爽辣特色醬湯。',
  },
  {
    id: 269,
    category: '찌개 [Jjigae]',
    name: '생태찌개',
    pronounce: 'Saengtaejjigae',
    description:
      '생태에 무, 미나리, 쑥갓 등의 채소와 두부, 고춧가루 등을 넣어서 얼큰하게 끓인 것으로 시원하고, 칼칼한 국물이 특징적인 찌개이다.',
    name_en: 'Pollack Stew',
    description_en:
      'Spicy saengtae (fresh pollack) stew made with fresh pollack, bean curd, radish, crown daisy, and other vegetables and seasoned with red chili powder. This dish is characterized by its spicy broth and savory taste.',
    name_ja: 'スケトウダラチゲ',
    description_ja:
      'スケトウダラに大根、セリ、春菊などの野菜と豆腐、粉唐辛子などを入れて辛めに煮込んだもの。さっぱりとして辛味の効いたスープが特徴的なチゲ。',
    name_zh: '鲜明太鱼锅',
    description_zh:
      '将鲜明太鱼和萝卜、水芹、筒蒿等蔬菜以及豆腐、辣椒粉等材料一起炖煮而成，汤味十分鲜辣爽口。',
    name_zh2: '鮮明太魚鍋',
    description_zh2:
      '在鮮明太魚中加入蘿蔔、水芹菜、茼蒿等蔬菜，以及豆腐、辣椒粉等材料，該菜品湯味鮮辣，以辣爽為特點。',
  },
  {
    id: 270,
    category: '찌개 [Jjigae]',
    name: '순두부찌개',
    pronounce: 'Sundubujjigae',
    description:
      '뚝배기에 순두부와 소고기, 조개류, 채소를 넣고 육수를 부어 끓인 음식으로 계란을 넣기도 한다. 얼큰하게 또는 맑게 즐긴다.',
    name_en: 'Soft Bean Curd Stew',
    description_en:
      'Soft bean curd stew boiled with beef, clams, and vegetables.A raw egg may be added to the hot stew.Ranges from extra spicy to mild.',
    name_ja: 'スンドゥブチゲ',
    description_ja:
      '土鍋におぼろ豆腐、牛肉、貝類、野菜を入れ、スープを加えて煮た鍋。卵を入れることもある。粉唐辛子を加えて辛口で食べるか、そのままあっさり風味で食べる。',
    name_zh: '嫩豆腐锅',
    description_zh:
      '在砂锅中放入嫩豆腐和牛肉、蛤 蜊、蔬菜，再加入高汤熬煮而成，还可打个鸡 蛋下去。可加入辣椒粉做成辣味，也可不放辣 椒做成清汤。',
    name_zh2: '嫩豆腐鍋',
    description_zh2:
      '放入嫩豆腐和肉、蛤蜊、蔬菜等後倒入高湯煮成，還可放入雞蛋。煮出爽辣的鮮辣湯或清淡的清湯。',
  },
  {
    id: 271,
    category: '찌개 [Jjigae]',
    name: '시래기된장지짐',
    pronounce: 'Siraegidoenjangjijim',
    description:
      '말린 무청을 삶아서 된장, 마늘, 고춧가루를 넣어 무친 후, 멸치 육수를 부어 끓인다. 투박하지만 정겨운 시골의 맛이 나는 구수한 음식이다.',
    name_en: 'Braised Dried Radish Leaf Soybean Paste',
    description_en:
      'Boiled dried siraegi (radish greens) mixed with doenjang (soybean paste), chopped garlic, and red chili powder and boiled in an anchovy-based broth. This is a country-style dish.',
    name_ja: '干し菜っ葉のテンジャン煮込み',
    description_ja:
      '茹でた干した菜っ葉をテンジャン、にんにく、粉唐辛子で和えた後、煮干しの出汁を加えて煮る。どこかしら懐かしさを感じる料理。',
    name_zh: '大酱炖干萝卜缨',
    description_zh:
      '将煮好的干萝卜缨加入大酱、蒜、辣椒粉搅拌后，倒入鳀鱼高汤炖煮即可。这道菜虽然不够精致，但是酱香浓郁，充满农家风味。',
    name_zh2: '大醬燉幹蘿蔔纓',
    description_zh2:
      '把幹蘿蔔纓煮熟後用大醬、大蒜和辣椒粉拌勻，再放入鯷魚湯煮開。雖然是粗製菜肴，但口感非常樸素香醇。',
  },
  {
    id: 272,
    category: '찌개 [Jjigae]',
    name: '애호박찌개',
    pronounce: 'Aehobakjjigae',
    description:
      '소고기를 볶다가 물을 부어 끓이고, 새우젓으로 간을 맞춰 애호박, 붉은 고추, 실파를 넣어 끓인 찌개이다. 소고기 대신 조갯살이나 굴을 넣어도 좋다.',
    name_en: 'Zucchini Stew',
    description_en:
      'A stew made by boiling braised beef, zucchini, red chili pepper, and thread scallions in water and seasoned with salted shrimp. The beef maybe replaced with clam or oyster.',
    name_ja: 'ズッキーニチゲ',
    description_ja:
      '炒めた牛肉に水を加えて煮込み、アミの塩辛で味を調え、ズッキーニ、赤唐辛子、わけぎを入れて煮たチゲ。牛肉の代わりに貝の身やカキを入れるのもおすすめ。',
    name_zh: '西葫芦锅',
    description_zh:
      '先将牛肉放入锅中翻炒，再倒入清水炖煮，以虾酱调味后，放入西葫芦、红辣椒、香葱继续炖煮至熟即可。可根据喜好，用贝肉或牡蛎代替牛肉。',
    name_zh2: '西葫蘆鍋',
    description_zh2:
      '先翻炒牛肉，然後鍋內倒水，以蝦醬調味，再放入西葫蘆、紅辣椒、香蔥燉煮。烹飪時也可以用蛤蚌肉、牡蠣代替牛肉。',
  },
  {
    id: 273,
    category: '찌개 [Jjigae]',
    name: '양푼김치찌개',
    pronounce: 'Yangpunkimchijjigae',
    description:
      '양푼에 신김치와 돼지고기, 두부, 대파 등을 넣고 푹 끓인 찌개이다. 양푼은 손잡이가 없고 높이가 낮으며 편평한 그릇을 의미하며, 보통은 양은 냄비에 끓인다.',
    name_en: 'Kimchi Stew in Large Brass Bowl',
    description_en:
      'Kimchi simmered with pork, bean curd, and green onion in a large brass bowl. A brass pot can be used instead of a bowl.',
    name_ja: 'ヤンプンキムチチゲ',
    description_ja:
      'ヤンプンと呼ばれる大きな器に熟成した酸味の強いキムチ、豚肉、豆腐、長ねぎなどを入れてじっくり煮込んだチゲ。ヤンプンは取っ手がなく、浅くて底の広い器のこと。通常は洋銀鍋で作る。',
    name_zh: '铜盆辛奇汤',
    description_zh:
      '将辛奇和猪肉、豆腐、葱等材料放入铜盆里炖煮即可。铜盆是一种没有手把、深度不深而扁平的器皿，一般用铜盆来煮。',
    name_zh2: '銅盆辛奇湯',
    description_zh2:
      '銅盆裡盛點酸辛奇、豬肉、豆腐、大蔥等熬煮。銅盆沒有手柄，過比較淺。辛奇鍋一般用鋼精鍋來煮。',
  },
  {
    id: 274,
    category: '찌개 [Jjigae]',
    name: '오분자기뚝배기',
    pronounce: 'Obunjagittukbaegi',
    description:
      '오분자기는 제주도의 얕은 바다에서 잡히는 조개류이다. 뚝배기에 오분자기와 갖가지 해물을 넣고 끓여 내오는 음식으로 시원하면서 칼칼한 맛이 난다.',
    name_en: 'Sea Snail Hot Pot',
    description_en:
      'The sea snails (haliotis supertexta) are caught in the shallow waters of Jeju Island. The dish is made by boiling sea snails and a variety of other seafood in an earthenware pot. It tastes refreshingly spicy.',
    name_ja: 'トコブシの土鍋スープ',
    description_ja:
      'トコブシは済州島の沖合で獲れる貝類のこと。土鍋にトコブシや魚介類を入れて煮る料理で、すっきりとしているのに辛みがあるのが特徴。',
    name_zh: '小鲍鱼砂锅',
    description_zh:
      '小鲍鱼是从济州岛浅海捕捞的贝类。在砂锅里放入小鲍鱼和各种海鲜一起熬煮，味道鲜辣爽口。',
    name_zh2: '砂鍋小鮑魚',
    description_zh2:
      '小鮑魚為在濟州島淺海捕撈的貝類。在砂鍋裡放入小鮑魚和各種海鮮一起熬煮後上桌，味道鮮辣爽口。',
  },
  {
    id: 275,
    category: '찌개 [Jjigae]',
    name: '전복뚝배기',
    pronounce: 'Jeonbokttukbaegi',
    description:
      '뚝배기에 전복, 조개, 오징어, 새우, 바지락, 소라 등의 싱싱한 해물과 야채, 된장을 넣어 끓이는 찌개이다. 주로 제주도에서 많이 먹으며 칼칼한 국물 맛이 매력이다.',
    name_en: 'Abalone Hot Pot',
    description_en:
      'Fresh abalone, clam, squid, shrimp, conch, and other seafood boiled with vegetables and a doenjang (soybean paste) sauce in an earthen pot. Characterized by its deep-flavored broth, this dish is eaten widely across Jeju Island.',
    name_ja: 'アワビ土鍋',
    description_ja:
      '土鍋にアワビ、貝類、イカ、エビ、アサリ、サザエなどの新鮮な魚介と野菜、テンジャンを入れて煮込んだチゲ。主に済州島でよく食べられる。ピリっとした辛味が絶品。',
    name_zh: '鲍鱼砂锅',
    description_zh:
      '将鲍鱼、贝类、鱿鱼、虾、蛤蜊、海螺等新鲜的海鲜和蔬菜以及大酱一起放入砂锅中炖煮即可。鲍鱼砂锅是济州岛常见的一种美食，汤味十分鲜辣爽口。',
    name_zh2: '鮑魚砂鍋',
    description_zh2:
      '將鮑魚、貝類、魷魚、蝦、花蛤、海螺等海鮮放入鍋裡，跟蔬菜和大醬一起煮開。鮑魚砂鍋是濟州島人愛吃的美食，味道非常鮮美。',
  },
  {
    id: 276,
    category: '찌개 [Jjigae]',
    name: '차돌된장찌개',
    pronounce: 'Chadoldoenjangjjigae',
    description:
      '소의 가슴에서 배 아래쪽 양지머리에 붙은 황백색의 기름진 고기인 차돌박이를 된장찌개에 넣어 끓이면 쫀득한 고기 맛과 구수한 된장 맛을 동시에 즐길 수 있다.',
    name_en: 'Beef Brisket Soybean Paste Stew',
    description_en:
      'This is a stew made with doenjang and brisket,an off-white fatty cut of meat from thebreast or lower chest of the cow. The dish is characterized by the chewiness of the brisket and deep flavor of the doenjang.',
    name_ja: '牛のともばら肉入りテンジャンチゲ',
    description_ja:
      '牛の胸から腹の下のあばらに付いている象牙色の脂身を持つともばら肉をテンジャンチゲに加えて煮込むと、もっちりした肉の食感と香り高いテンジャンの味を同時に楽しむことができる。',
    name_zh: '牛胸肉大酱汤',
    description_zh:
      '将取自牛的胸部至腹下胸骨 肉上的黄白色肥肉牛胸肉熬成大酱汤，可同时 品尝到香嫩的肉味和醇厚的大酱味。',
    name_zh2: '牛胸肉大醬湯',
    description_zh2:
      '牛胸肉是黃白色的帶油肉，放入醬湯裡一起煮，就能享用肉質勁道的牛肉與有滋有味的醬湯。',
  },
  {
    id: 277,
    category: '찌개 [Jjigae]',
    name: '참치김치찌개',
    pronounce: 'Chamchikimchijjigae',
    description:
      '냄비에 기름을 두르고 신김치와 마늘을 볶다 육수를 넣고 김치가 무르면 통조림 참치와 두부, 대파, 고추, 고춧가루 등을 넣어 마무리 한다. 통조림 참치는 기름을 빼고 넣어야 맛이 깔끔하다.',
    name_en: 'Tuna and Kimchi Stew',
    description_en:
      'Over-fermented kimchi and garlic pan-fried in an oiled pot and boiled in broth. When the kimchi becomes soft, canned tuna, bean curd, chopped green onion, red chili powder, and green pepper are added. To give the stew a cleaner taste, be sure to drain the oil from the canned tuna.',
    name_ja: 'ツナキムチチゲ',
    description_ja:
      '油をひいた鍋で熟成した酸味の強いキムチとにんにくを炒め、そこへスープを加える。キムチが柔らかく煮えたらツナ缶と豆腐、長ねぎ、唐辛子、粉唐辛子などを入れる。ツナ缶は油切りして入れるとさっぱりとした味になる。',
    name_zh: '金枪鱼辛奇汤',
    description_zh:
      '锅中倒入适量的食用油，放入酸辛奇和辣椒翻炒一会儿后倒入高汤熬煮，煮至辛奇熟后，放入罐头装金枪鱼和豆腐、从、辣椒、辣椒粉等材料一起熬煮即可。罐头装金枪鱼要先滤油，味道才更加清淡鲜美。',
    name_zh2: '金槍魚辛奇湯',
    description_zh2:
      '鍋裡倒點油炒酸辛奇與大蒜，再放入高湯煮開，等辛奇變軟後放入金槍魚罐頭、豆腐、大蔥、辣椒、辣椒粉等。金槍魚罐頭需要先濾油後再放，這樣喝起來口感會更好。',
  },
  {
    id: 278,
    category: '찌개 [Jjigae]',
    name: '청국장찌개',
    pronounce: 'Cheonggukjangjjigae',
    description:
      '청국장은 푹 삶은 콩을 따뜻한 곳에서 단시간에 발효시켜 만든 장이다. 육수에 고기, 김치, 두부, 고추 등을 넣고 청국장을 풀어 찌개를 끓여 먹는다.',
    name_en: 'Rich Soybean Paste Stew',
    description_en:
      'A thick stew made of beef, bean curd kimchi, and other ingredients in a broth seasoned withcheonggukjang (quick-fermented soybeans).',
    name_ja: 'チョングクチャンチゲ',
    description_ja:
      'だし汁に肉、キムチ、豆腐、唐辛子などを入れ、チョングッチャンを溶いて煮た鍋。チョングクチャンは蒸した豆を温かい場所に置き、短時間で発酵させたもの。',
    name_zh: '清麴酱锅',
    description_zh:
      '清麴酱是将煮熟的黄豆放在温热的地方快速发酵而成的食品，在高汤中放入肉、辛奇、豆腐、辣椒等，再加入清麴酱熬 煮即可。',
    name_zh2: '清麴醬鍋',
    description_zh2:
      '清麴醬是豆煮熟後，在溫暖處短時間發酵而成的醬。在肉高湯中放入肉、辛奇、豆腐等食材後，加入清麴醬煮成香濃的醬湯。',
  },
  {
    id: 279,
    category: '찌개 [Jjigae]',
    name: '콩비지찌개',
    pronounce: 'Kongbijijjigae',
    description:
      '콩을 불렸다 곱게 갈아 만든 되비지로 끓인 찌개다. 돼지고기와 배추김치를 함께 볶다가 콩비지와 물을 붓고 끓인 후 양념한 것으로 이북 사람들이 즐기는 음식이다.',
    name_en: 'Pureed Soybean Stew',
    description_en:
      'This dish consists of soaked and finely ground soybeans boiled with pan-fried pork and kimchi in water.Sauce is added before serving. Kongbijijjigae is especially popular among people from North Korea.',
    name_ja: 'おからチゲ',
    description_ja:
      '大豆をふやかしてすりつぶしたおからを使ったチゲ。豚肉と白菜キムチを一緒に炒め、おからと水を加えて煮たもので、北朝鮮の人々によく食べられている料理。',
    name_zh: '黄豆渣锅',
    description_zh:
      '大豆泡发后磨成豆渣备用。先将猪肉和辛奇放入锅中翻炒，再倒入黄豆渣和清水熬煮，最后加入调料调味即可，是北朝鲜人最喜欢的菜肴之一。',
    name_zh2: '黃豆渣鍋',
    description_zh2:
      '黃豆泡發後用攪拌機攪碎，再把其煮熟。豬肉和辛奇一起炒熟後，把黃豆渣放裡面，再倒入清水煮沸，並調味。是朝鮮的人們非常愛吃的美食。',
  },
  {
    id: 280,
    category: '찌개 [Jjigae]',
    name: '해물된장찌개',
    pronounce: 'Haemuldoenjangjjigae',
    description:
      '육수에 된장을 풀고 오징어, 바지락, 새우 등 해물을 넣어 끓인 찌개이다. 국물이 걸쭉하고 여러 가지 재료가 어우러져 밥을 비벼먹기에 좋다.',
    name_en: 'Seafood Soybean Paste Stew',
    description_en:
      'Soybean paste stew boiled with squid, baby clam, shrimp, and other seafood. The thick stew and various ingredients match perfectly with rice.',
    name_ja: '海鮮テンジャンチゲ',
    description_ja:
      '出し汁にテンジャンをとき、イカ、アサリ、エビなどの魚介を入れて煮込んだチゲ。スープにとろみがあり、色々な食材と合い、ご飯を混ぜて食べるのもおすすめ。',
    name_zh: '海鲜大酱汤',
    description_zh:
      '高汤里加入一些大酱，再放入鱿鱼、蛤蜊、虾等海鲜炖煮即可。海鲜大酱汤汤汁浓稠，材料丰富，很适合拌饭吃。',
    name_zh2: '海鮮大醬湯',
    description_zh2:
      '先用肉湯稀釋大醬，再加入魷魚、蛤仔、蝦等海鮮即可。湯味濃稠，材料豐富，適合拌飯吃。',
  },
  {
    id: 281,
    category: '찌개 [Jjigae]',
    name: '해물뚝배기',
    pronounce: 'Haemulttukbaegi',
    description:
      '멸치 국물에 조개, 새우 등 각종 싱싱한 해물과 된장 등 양념을 넣고 뚝배기에 끓이다가 쑥갓, 두부, 애호박, 버섯 등을 넣고 끓여 낸 찌개다.',
    name_en: 'Seafood Hot Pot',
    description_en:
      'This dish is a stew made by boiling clams, shrimp, and other fresh seafood along with crown daisy, squash, and mushroom. It is seasoned with soybean sauce and served in an earthenware pot.',
    name_ja: '海鮮土鍋',
    description_ja:
      '煮干しの出し汁に貝、えびなどの新鮮な魚介類とテンジャンなどの調味料を加えて土鍋で煮込んで、春菊、豆腐、エホバク、きのこなどを加えたチゲ。',
    name_zh: '海鲜砂锅',
    description_zh:
      '在砂锅中倒入鳀鱼高汤，放入蛤 蜊、虾等各种生猛海鲜和大酱等调料一起熬 煮，稍后再放入茼蒿、豆腐、西葫芦、蘑菇等 材料继续熬煮即可。',
    name_zh2: '海鮮砂鍋',
    description_zh2:
      '海鮮砂鍋是在鯷魚湯砂鍋裡放入貝類、蝦等各種海鮮，再用大醬等調味，煮開後加入青蒿、豆腐、西葫蘆、蘑菇等食材煮沸的鍋子。',
  },
  {
    id: 282,
    category: '찌개 [Jjigae]',
    name: '해물순두부찌개',
    pronounce: 'Haemulsundubujjigae',
    description:
      '오징어, 조개, 새우 등 해물과 순두부, 채소 등을 넣어 끓인 찌개이다. 기호에 따라 계란을 넣어 먹기도 하고, 얼큰하게 또는 맑게 즐긴다.',
    name_en: 'Seafood and Soft Bean Curd Stew',
    description_en:
      'This stew is prepared by boiling squid, clam, shrimp, and other seafood with soft bean curd and vegetables. Egg or a spicy sauce may be added to suit one’s taste.',
    name_ja: '海鮮スンドゥブチゲ',
    description_ja:
      'イカ、貝、エビなどの魚介とスンドゥブ（おぼろ豆腐）、野菜などを入れて煮込んだチゲ。好みにより卵を落として食べたり、辛くして、又は澄まし汁で食べる。',
    name_zh: '海鲜嫩豆腐锅',
    description_zh:
      '将鱿鱼、贝类、虾等海鲜和嫩豆腐、蔬菜等材料放入锅中一起炖煮即可。可依据个人喜好加入鸡蛋，也可做成辣汤或清汤。',
    name_zh2: '海鮮嫩豆腐鍋',
    description_zh2:
      '將魷魚、貝類、蝦等海鮮，以及嫩豆腐、蔬菜等一同燉煮即可。可依據個人喜好加入雞蛋，也有人更偏好辣爽或清淡的味道。',
  },
  {
    id: 283,
    category: '찜 [Jjim]',
    name: '갈비찜',
    pronounce: 'Galbijjim',
    description:
      '소나 돼지 갈비를 물에 담가 핏물을 없애고 지방을 제거하여 당근과 밤, 은행 등을 섞어 간장을 비롯한 갖은 양념을 하여 부드럽게 조려 낸 음식이다.',
    name_en: 'Braised Short Ribs',
    description_en:
      'Beef short ribs, trimmed of fat, seasoned in sweet soy sauce, and braised until tender with carrots, chestnuts, ginko nuts, and other vegetables.',
    name_ja: 'カルビの蒸し物',
    description_ja:
      '牛や豚のカルビの脂身を取りのぞき、にんじんや栗、銀杏などと混ぜ合わせ、薬味と醤油を加えてじっくり煮込んだ料理。',
    name_zh: '炖牛排骨',
    description_zh:
      '牛排骨或猪排骨泡水去掉血水和 油脂后，加入胡萝卜、板栗、银杏等材料，以 酱油等各种调料进行调味后，用文火慢炖即 可。',
    name_zh2: '燉牛排骨',
    description_zh2:
      '混合牛排骨(或豬排骨)以及蘿蔔、胡蘿蔔、板栗、銀杏等食材，以醬油等調味料調味後慢燉即可。在韓國，燉牛排骨是人們常在韓國的節日-春節或中秋節享用的代表性飲食。',
  },
  {
    id: 284,
    category: '찜 [Jjim]',
    name: '계란찜',
    pronounce: 'Gyeranjjim',
    description:
      '계란을 풀어 버섯, 어묵 등을 넣고 새우젓이나 소금으로 간하여 찐 음식이다.색깔도 곱고 식감이 가벼우며 부드러워 특별히 어린아이나 노인들이 좋아한다.',
    name_en: 'Steamed Eggs',
    description_en:
      'Similar to egg soufflé, this steamed egg dish is made with eggs well mixed with chopped mushroom, fishcake, and other ingredients, and seasoned with saeujeot (salted shrimp) or salt. Its soft texture and beautiful color are particularly appealing to children and the elderly.',
    name_ja: '茶碗蒸し',
    description_ja:
      '溶き卵にきのこやかまぼこなどを入れ、小エビの塩辛または塩で味付けしたものを蒸した料理。鮮やかな色と軽くてまろやかな食感で、特に小さな子どもや高齢者に好まれている。',
    name_zh: '鸡蛋羹',
    description_zh:
      '将鸡蛋磕入碗中打散，放一些蘑菇和 鱼饼，再加少许虾酱或盐，然后放在蒸笼里蒸 煮即可。鸡蛋羹不仅颜色鲜嫩，而且口感柔滑， 儿童和老人尤其喜欢。',
    name_zh2: '雞蛋羹',
    description_zh2: '將雞蛋磕入碗中打散，用蝦醬或食鹽調味後蒸煮成口感鮮嫩的清淡雞蛋羹。',
  },
  {
    id: 285,
    category: '찜 [Jjim]',
    name: '굴보쌈',
    pronounce: 'Gulbossam',
    description:
      '싱싱한 생굴과 삶은 돼지고기를 매콤하게 무친 무와 절인 배추에 함께 싸 먹는 음식이다. 고기는 새우젓을 찍어 배추김치나 보쌈김치에 싸 먹기도 한다.',
    name_en: 'Kimchi Wraps with Pork and Oyster',
    description_en:
      'Fresh oysters and steamed pork wrapped in salted Korean cabbage leaves with julienned radish seasoned with red chili powder. The meat may also be dipped in salted shrimp sauce and wrapped in cabbage or bossamkimchi.',
    name_ja: 'カキのポサム',
    description_ja:
      '新鮮な生ガキと茹でた豚肉を、辛めに合えた大根と塩漬けした白菜で包んで食べる料理。肉はアミの塩辛をつけて白菜キムチやポサムキムチに包んで食べたりもする。',
    name_zh: '牡蛎菜包肉',
    description_zh:
      '将新鲜的生牡蛎和水煮猪肉，用腌白菜和香辣拌萝卜一起包着吃即可。猪肉还可以蘸虾酱后，用白菜辛奇或包卷辛奇包着吃。',
    name_zh2: '牡蠣菜包肉',
    description_zh2:
      '將新鮮的生牡蠣、煮好的豬肉，與香辣拌蘿蔔、醃白菜一同包起來食用即可。豬肉還可以用肉蘸蝦醬，然後用白菜辛奇或包卷辛奇包著吃。',
  },
  {
    id: 286,
    category: '찜 [Jjim]',
    name: '꼬리찜',
    pronounce: 'Kkorijjim',
    description:
      '토막을 낸 소꼬리를 푹 삶아 무, 당근, 표고버섯. 밤 등을 넣고 간장 양념을 하여 무르게 푹 익힌 보양음식이다. 양념이 잘 밴 뼈 속살의 쫀득쫀득한 맛이 일품이다.',
    name_en: 'Braised Oxtail',
    description_en:
      'For this dish, oxtail is cut into pieces, boiled, and marinated with soy sauce and then braised with radish, carrot, shiitake mushroom, and chestnuts. The well-marinated and braised oxtail meat is soft yet pleasantly chewy.',
    name_ja: '牛テールの蒸し物',
    description_ja:
      'ぶつ切りにした牛テールをじっくりと茹で、大根、にんじん、しいたけ、栗などを入れて醤油ベースのたれでやわらかく煮込んだ滋養食。たれがしみ込んだ骨の中の身のもちもちさは抜群。',
    name_zh: '炖牛尾',
    description_zh:
      '将切成块状的牛尾炖至烂熟，再放入萝卜、胡萝卜、香菇、栗子等材料继续炖煮，最后用酱油调味，是一道营养丰富的滋补美食。入味的牛骨肉口感细腻而有弹性，味道十分鲜美。',
    name_zh2: '燉牛尾',
    description_zh2:
      '燉牛尾是一種保健食品，在烹飪時，先將牛尾切成塊兒狀然後慢燉，再加入蘿蔔、胡蘿蔔、香菇、栗子等材料，最後加入醬油調味熬煮而成。牛骨肉熬煮入味之後，其富有彈性的味道堪稱一絕。',
  },
  {
    id: 287,
    category: '찜 [Jjim]',
    name: '꽃게찜',
    pronounce: 'Kkotgejjim',
    description:
      '꽃게를 양념하여 찜통에 쪄낸 음식이다. 찜에 사용하는 꽃게는 토막을 내기도 하고 통째로 사용하기도 한다. 입맛에 따라 무, 콩나물, 미나리 따위의 채소를 양념해 함께 넣고 찌기도 한다.',
    name_en: 'Steamed Blue Crab',
    description_en:
      "Steamed seasoned blue crabs. The crabs can be cooked whole or in pieces. Depending on one's taste, the crabs are steamed with seasoned vegetables, such as radish, bean sprouts, and water parsley.",
    name_ja: 'ワタリガニの蒸し物',
    description_ja:
      '味付けしたワタリガニを蒸し器で蒸したもの。蒸し物に使うワタリガニは、食べやすい大きさに切ったり、丸ごと使ったりする。好みに応じて大根、豆もやし、セリなどの野菜を味付けして一緒に蒸すこともある。',
    name_zh: '蒸花蟹',
    description_zh:
      '将花蟹调味后放入蒸锅里蒸熟。花蟹既可切块，也可整只使用。可根据个人喜好，将萝卜、豆芽、水芹等蔬菜调味后一起蒸。',
    name_zh2: '清蒸梭子蟹',
    description_zh2:
      '將梭子蟹調味後放入蒸鍋裡蒸熟。可將梭子蟹切塊或整隻使用。可根據個人喜好放入調味過的蘿蔔、豆芽、水芹等蔬菜一起蒸。',
  },
  {
    id: 288,
    category: '찜 [Jjim]',
    name: '낙지찜',
    pronounce: 'Nakjijjim',
    description:
      '낙지에 고춧가루, 다진 마늘 등을 섞어 만든 양념장을 넣어 매콤하게 익히고 콩나물을 얹어 찐 음식이다. 먹고 남은 양념으로 밥을 볶아 먹기도 한다.',
    name_en: 'Braised Octopus',
    description_en:
      'Octopus marinated in a sauce made with red chili powder and chopped garlic and then braised with bean sprouts. The sauce is also used to make a rice stir-fry.',
    name_ja: 'テナガダコの蒸し物',
    description_ja:
      'テナガダコに粉唐辛子、にんにくのみじん切りなどを混ぜて作ったたれをからめて辛めにして火を通し、豆もやしをのせて蒸した料理。余ったたれでご飯を炒めて食べるのもおすすめ。',
    name_zh: '炖章鱼',
    description_zh:
      '将章鱼和用辣椒粉、蒜末等做成的调味酱一起放入锅中炖煮至熟，上面再放入豆芽继续炖煮即可，汤味香辣，入口爽口。吃完章鱼，剩下的酱料可以用来炒饭吃。',
    name_zh2: '燉章魚',
    description_zh2:
      '先用辣椒粉、蒜末等調製調味醬，然後在章魚中放入該調味醬煮熟，再加入豆芽繼續燉一會兒，湯味香辣。用剩下的醬料炒飯味道也不錯。',
  },
  {
    id: 289,
    category: '찜 [Jjim]',
    name: '누룽지닭백숙',
    pronounce: 'Nurungjidakbaeksuk',
    description:
      '물에 불린 찹쌀을 솥 밑바닥에 깔고 삼계용 닭을 올려 인삼, 대추 등을 넣고 끓인 것이 누룽지닭백숙이다. 닭 국물이 밴 누룽지는 쫀득하면서도 고소해 찹쌀로 쑨 죽보다 감칠맛이 매우 좋다.',
    name_en: 'Whole Chicken Soup with Scorched Rice',
    description_en:
      'This dish features a whole chicken boiled in water with ginseng and jujubes with soaked glutinous rice on the bottom of the pot (which becomes scorched by the heat). Soaked in chicken soup, the scorched rice becomes incredibly chewy and delicious—it tastes even better than porridge made with glutinous rice.',
    name_ja: 'おこげ入り鶏肉の水炊き',
    description_ja:
      '水に浸けたもち米を鍋の底に敷き、サムゲタン用の鶏肉をのせて高麗人参、なつめなどを入れて煮込む。鶏のスープが染み込んだおこげはもっちりして香ばしく、一般的なもち米のお粥よりもコクがある。',
    name_zh: '锅巴清炖鸡',
    description_zh:
      '将浸泡过的糯米铺在大锅里，上面 放上做参鸡汤用的鸡以及人参、红枣等材料一起 熬煮即可。鸡汤的醇浓味道渗入锅巴里，吃起来 又香又有嚼头，味道比用糯米熬的粥更加鲜美。',
    name_zh2: '鍋巴清燉雞',
    description_zh2:
      '把泡好的糯米平鋪在鍋底，再放入參雞用整雞，人參和大棗等一起熬煮。也可以把糯米換成鍋巴，被雞湯泡過的鍋巴非常勁道又美味，比糯米粥還要美味。',
  },
  {
    id: 290,
    category: '찜 [Jjim]',
    name: '닭백숙',
    pronounce: 'Dakbaeksuk',
    description:
      '냄비에 닭을 통째로 담고 물을 부은 뒤 마늘, 대추를 넣고 푹 삶은 음식이다. 삶은 고기는 소금을 곁들이고 국물은 찹쌀을 넣고 죽을 쑤어 먹는다. 인삼과 대추를 넣기도 한다.',
    name_en: 'Whole Chicken Soup',
    description_en:
      'Whole chicken boiled with garlic and served with sea salt.Sweet rice is boiled in the leftover stock to make a thick rice congee. Ginseng and jujubes may be added for flavor.',
    name_ja: '鶏肉の水炊き',
    description_ja:
      '鶏肉を丸ごと鍋に入れ、水とにんにくを加えてじっくり煮込み、身は塩をつけて、スープはもち米を入れてお粥にして食べる。高麗人参やなつめを入れることもある。',
    name_zh: '清炖鸡',
    description_zh:
      '将整只鸡与蒜头一起放入水中煮熟， 鸡肉沾盐吃，汤则加入糯米煮成粥来吃。还可 以放一些人参和大枣。',
    name_zh2: '清燉雞',
    description_zh2:
      '將大蒜、大棗等放入整隻雞的肚子裡，加水燉煮而成。將煮熟的雞肉沾食鹽吃，將糯米放入高湯中煮成粥食用。',
  },
  {
    id: 291,
    category: '찜 [Jjim]',
    name: '대게찜',
    pronounce: 'Daegejjim',
    description:
      '깨끗이 닦아 물기를 뺀 대게를 찜통에 넣고 쪄내 살을 발라 초장에 찍어 먹는다. 대게는 배를 위쪽으로 하고, 다리가 떨어지지 않게 쪄야 맛이 더욱 신선하다.',
    name_en: 'Steamed Snow Crab',
    description_en:
      'This dish is steamed crab meat removed from the shell and served with a vinegar sauce. When steaming snow crabs, turn the crabs upside down and be careful not to let the legs detach from the body. This helps keep the meat tasting as fresh as possible.',
    name_ja: 'ズワイガニの蒸し物',
    description_ja:
      'きれいに洗って水気を切ったズワイガニを蒸し器で蒸し、身を取って酢コチュジャンにつけて食べる。ズワイガニは腹を上向きにして足が落ちないように蒸すことで、より新鮮な味わいになる。',
    name_zh: '蒸雪蟹',
    description_zh:
      '将雪蟹擦干控水后放入蒸锅里蒸熟， 剔出蟹肉蘸酸辣酱吃。雪蟹要蟹肚朝上放入 蒸笼中，蟹腿不能掉下拉，这样蒸出来的蟹肉 味道才会更加新鲜。',
    name_zh2: '蒸雪蟹',
    description_zh2:
      '把清洗乾淨並瀝幹水分的雪蟹放入蒸籠裡蒸熟，蟹肉蘸醋醬非常美味。蒸的時候要讓雪蟹肚皮朝上，注意不要弄掉蟹腿，這樣蒸出來的雪蟹非常鮮美。',
  },
  {
    id: 292,
    category: '찜 [Jjim]',
    name: '대구뽈찜',
    pronounce: 'Daeguppoljjim',
    description:
      '대구 대가리에 갖은 양념을 더하여 콩나물, 미나리 등의 채소와 함께 매콤하게 쪄낸 음식이다. 대구 대가리는 살이 많고, 쫄깃한 것이 특징이다.',
    name_en: 'Braised Codfish Head',
    description_en:
      'This spicy dish is made by braising seasoned cod heads with bean sprouts, water parsley, and other vegetables. Cod head has a meaty and chewy texture.',
    name_ja: 'たらの頭の蒸し物',
    description_ja:
      'たらの頭にたれをからめて豆もやし、セリなどの野菜と一緒にピリっと辛く蒸した料理。たらの頭には身が多く、もっちりとしているのが特徴。',
    name_zh: '炖鳕鱼头',
    description_zh:
      '将鳕鱼头和豆芽、水芹等蔬菜一起放入锅中，再加入各种酱料炖煮至熟即可。鳕鱼头肉多、口感嫩滑，味道十分鲜美。',
    name_zh2: '燉鱈魚頭',
    description_zh2:
      '在鱈魚頭中加入各種醬料，再放入豆芽、水芹等蔬菜，燉出鮮辣的味道。鱈魚頭的特點是肉質多、口感彈滑。',
  },
  {
    id: 293,
    category: '찜 [Jjim]',
    name: '대하찜',
    pronounce: 'Daehajjim',
    description:
      '내장을 꺼낸 대하의 등 쪽에 칼집을 넣어 넓게 펴 그곳에 잘게 채 친 버섯, 풋고추, 홍고추, 미나리, 달걀지단 등을 고명으로 얹어 찐 음식이다. 초고추장이나 간장을 곁들여 먹는다.',
    name_en: 'Steamed Prawn',
    description_en:
      'Gutted prawns slit open along the back, spread out flat, and stuffed with finely chopped mushrooms, red and green chili peppers, and water parsley with an egg garnish. The steamed dish is served with a vinegar-based gochujang (red chili paste) sauce or soy sauce.',
    name_ja: '大正海老の蒸し物',
    description_ja:
      '大正海老の背を開いて背わたを取り、背の方に細かく刻んだきのこや青唐辛子、赤唐辛子、セリ、錦糸玉子などを添えて蒸したもの。酢コチュジャンや醤油をつけて食べると美味しい。',
    name_zh: '蒸大虾',
    description_zh:
      '在摘除内脏的大虾背部打上刀花，将虾身铺开后放上切好的蘑菇、青辣椒、红辣椒、水芹、鸡蛋丝等配菜蒸熟即可，搭配酸辣酱或酱油一起吃。',
    name_zh2: '蒸明蝦',
    description_zh2:
      '切開取出內臟的明蝦背部後鋪平，放上切好的蘑菇、青龍椒、紅辣椒、水芹、雞蛋絲等配料蒸熟，配醋辣醬或醬油一起吃。',
  },
  {
    id: 294,
    category: '찜 [Jjim]',
    name: '더덕보쌈',
    pronounce: 'Deodeokbossam',
    description:
      '더덕은 산과 들에 자생하며 어린잎은 나물과 쌈으로 먹고, 뿌리는 식용과 약용으로 쓰인다. 잘 익은 더덕을 적당한 크기로 잘라 삶은 돼지고기와 함께 쌈을 싸서 먹는다.',
    name_en: 'Kimchi Wraps with Pork and Deodeok',
    description_en:
      'Known as deodeok in Korean, wild bellflower roots grow on mountains and in fields throughout the country. The young leaves are used as wraps, while the roots are used in herbal medicines as well as food. For this particular dish, well-ripened deodeok is cut into bite-sized pieces and wrapped in leaveswith boiled pork.',
    name_ja: '蔓人参のポサム',
    description_ja:
      '蔓人参は山野に自生し、若葉はナムルや包み菜として、根は食用と薬用に用いられる。よく熟した蔓人参を適当な大きさに切り、茹でた豚肉と一緒に野菜で包んで食べる。',
    name_zh: '沙参菜包肉',
    description_zh:
      '沙参生长于山野，嫩叶可作素菜 和包饭菜，根部可作食用或药用。将熟透的沙 参切成适当的大小，和水煮的猪肉一起用菜 包着吃。',
    name_zh2: '沙參菜包肉',
    description_zh2:
      '沙參是山野上滋生的植物。嫩葉是非常美味的野菜，可以包飯吃，根莖則是藥食同源的食材。沙參弄熟後加工成適當大小，跟水煮豬肉一起包著吃非常美味。',
  },
  {
    id: 295,
    category: '찜 [Jjim]',
    name: '도가니수육',
    pronounce: 'Doganisuyuk',
    description:
      '소의 무릎 뼈인 도가니 뼈를 삶아 만든 보양식으로, 칼슘이 많아 어린이와 임산부, 노인에게 좋은 음식이다. 수육은 간장에 찍어 먹으면 맛있다.',
    name_en: 'Boiled Ox Knee',
    description_en:
      'An energy-boosting dish prepared by boiling ox knee bones, doganisuyuk is rich in calcium and good for children, seniors, and expecting mothers. It is served with a soy sauce-based dipping sauce.',
    name_ja: 'ゆで牛の膝軟骨',
    description_ja:
      '牛の膝の軟骨を茹でて作る滋養食。カルシウムが豊富で特に子どもや妊婦、高齢者におすすめ。ゆで肉はカンジャンをつけて食べると美味しい。',
    name_zh: '白切牛膝骨',
    description_zh:
      '用牛膝骨熬煮而成的滋补美食，富含钙质，非常适合儿童、孕妇和老人食用。白切肉蘸酱油吃非常美味。',
    name_zh2: '白切牛膝骨',
    description_zh2:
      '這是一道保健食品，採用牛膝骨烹飪而成，富含鈣質，有利於兒童、孕婦、老人的健康。白切肉蘸醬油食用起來非常美味。',
  },
  {
    id: 296,
    category: '찜 [Jjim]',
    name: '도미찜',
    pronounce: 'Domijjim',
    description:
      '도미 비늘을 제거한 후 칼집을 서너 번 넣고 밑간을 해, 통으로 쪄낸 후, 도미 위에 소고기, 미나리, 버섯, 달걀지단 등으로 화려하게 고명을 얹은 고급음식이다. 예전엔 임금님 수라상에도 올랐던 음식이다.',
    name_en: 'Steamed Sea Bream',
    description_en:
      'A descaled, scored, and salted snapper braised in a steamer and topped colorfully with beef, water parsley, mushroom, and egg garnish, domijjim is a delicacy that used to be served at the royal court.',
    name_ja: '鯛の蒸し物',
    description_ja:
      '鯛の鱗を除去した後に３～４回切れ目を入れて下味をつけ、蒸し器で蒸す。その鯛に牛肉、セリ、きのこ、錦糸卵などを華やかに盛り付ける高級料理。昔は王様の食事に出されていた。',
    name_zh: '蒸鲷鱼',
    description_zh:
      '刮掉鱼鳞后，在鱼身上打三四下花刀，撒上盐稍微腌一下，然后把整只鱼放入蒸锅中，待鱼蒸熟后取出，上面放一些牛肉、水芹、蘑菇、鸡蛋丝等菜码进行装饰即可。蒸鲷鱼曾经是一道宫廷御膳，是高级菜肴。',
    name_zh2: '蒸鯛魚',
    description_zh2:
      '這是一種高級食品。烹飪時，首先剝除鯛魚的魚鱗，在鯛魚上打三四下花刀，然後醃製一下，上蒸鍋蒸好，再在鯛魚上放上牛肉、水芹、蘑菇、雞蛋絲等澆頭。從前這道菜還曾上國王的禦膳桌。',
  },
  {
    id: 297,
    category: '찜 [Jjim]',
    name: '동태찜',
    pronounce: 'Dongtaejjim',
    description:
      '명태를 급속 냉동시킨 것이 동태다. 토막 낸 동태를 간장, 파, 마늘 등 갖은 양념장에 조리거나 콩나물과 미나리를 곁들여 매운 양념장으로 얼큰하게 하여도 좋다.',
    name_en: 'Braised Pollack',
    description_en:
      'To prepare this dish, cutdongtae (quick-frozen pollack) into piecesand braise with soy sauce mixed with green pepper and garlic. Add bean sprouts and water parsley and braise with seasoning of red chili pepper to add spiciness.',
    name_ja: 'スケトウダラの蒸し物',
    description_ja:
      'スケトウダラを急速冷凍させたものを「トンテ」と呼ぶ。ぶつ切りにしたトンテを醤油、ねぎ、にんにくなどを使った薬味で煮しめる。豆もやしとせりを添えて辛味のたれで煮てもよい。',
    name_zh: '炖冻明太鱼',
    description_zh:
      '明太鱼快速冷冻即成冻明太 鱼。将东明太鱼切成块儿，加入酱油、大葱、 大蒜等各种调料炖烧，或者加入黄豆芽和水 芹菜，用辣味的调味酱做成鲜辣口味。',
    name_zh2: '燉凍明太魚',
    description_zh2:
      '速凍明太魚叫做凍明太魚。用醬油、蔥、蒜等各種調味料燉製，或加入豆芽與水芹，用香辣調味汁拌勻食用也非常美味。',
  },
  {
    id: 298,
    category: '찜 [Jjim]',
    name: '돼지등뼈찜',
    pronounce: 'Dwaejideungppyeojjim',
    description:
      '미리 삶아 낸 돼지 등뼈에 각종 채소와 간장 양념을 넣어 조려 낸 음식이다. 등뼈는 저렴하면서도 영양 많아 부담 없이 먹기에 좋다.',
    name_en: 'Brasied Pork Back-bone',
    description_en:
      'This dish is made by braising boiled pig backbone with various vegetables and a soy sauce-based seasoning. Pig backbones are affordable yet nutritious and tasty.',
    name_ja: '豚の背骨の蒸し物',
    description_ja:
      'あらかじめ茹でておいた豚の背骨を、各種野菜と醤油ベースのたれを入れて煮付けた料理。背骨は手頃な価格で栄養もあり、気軽に食べやすい。',
    name_zh: '炖猪脊骨',
    description_zh:
      '先将猪脊骨炖好待用，再将各种蔬菜和酱油调味料一起放入锅中炖煮即可。脊骨价格低廉，但是营养丰富，可谓是物美价廉。',
    name_zh2: '燉豬脊骨',
    description_zh2:
      '先將豬脊骨燉好，然後加入各種蔬菜與調味料繼續燉一會兒即可。豬脊骨價格低廉卻營養豐富，食用時經濟負擔較小。',
  },
  {
    id: 299,
    category: '찜 [Jjim]',
    name: '등갈비묵은지찜',
    pronounce: 'Deunggalbimugeunjijjim',
    description:
      '오래된 김장김치인 묵은지에 등갈비를 넣어 만든 찜이다. 묵은지에 양념을 하여 육수를 넣어 오래 끓이면 맛이 부드러워지면서 깊은 맛이 난다.',
    name_en: 'Braised Pork Rib with Aged Kimchi',
    description_en:
      'For this dish, pig backbone is braised with mukeunji (aged kimchi). After being seasoned and simmered in broth, the mukeunji becomessoft and savory.',
    name_ja: 'バックリプと熟成キムチの蒸し物',
    description_ja:
      '熟成キムチとバックリブの蒸し物。 熟成キムチをたれと合わせ、出し汁を入れて長時間煮込むとやわらかくも深い味わいになる。',
    name_zh: '炖脊排酸辛奇',
    description_zh:
      '将陈辛奇和猪排骨一起放入锅中煮炖而成。将酸辛奇加入调味酱搅拌，再倒入高汤细熬慢炖，味道醇香浓郁，回味悠长。',
    name_zh2: '燉脊排酸辛奇',
    description_zh2:
      '在酸辛奇中放入豬排煮燉而成。在酸辛奇中加入醬料、肉湯熬煮，味道柔和又回味悠遠。',
  },
  {
    id: 300,
    category: '찜 [Jjim]',
    name: '뚝배기계란찜',
    pronounce: 'Ttukbaegigyeranjjim',
    description:
      '뚝배기에 달걀을 풀어 넣고 새우젓이나 소금으로 간하여 찐 음식이다. 색깔도 곱고, 식감이 가볍고, 부드러워 어린아이나 노인들이 좋아한다.',
    name_en: 'Steamed Egg Hot Pot',
    description_en:
      'Eggs well beaten with salted shrimp and seasoned with salt and steamed in a hot pot. The beautiful color and soft texture of this dish are especially appealing to children and seniors.',
    name_ja: '土鍋茶碗蒸し',
    description_ja:
      '土鍋に溶き卵を入れてアミの塩辛や塩で味を調えて蒸した料理。色も美しく、口当たりも軽い。やわらかいため幼い子どもや高齢者に好まれる。',
    name_zh: '砂锅鸡蛋羹',
    description_zh:
      '鸡蛋打成蛋液后倒入砂锅中，用虾酱或盐调味后蒸熟即可。鸡蛋羹颜色鲜嫩，口感软滑，深受老人和孩子的喜爱。',
    name_zh2: '砂鍋雞蛋羹',
    description_zh2:
      '在砂鍋中打入雞蛋攪拌均勻，用蝦醬、鹽調味，然後燉製即可。顏色清麗、口感柔和、清淡，深受老人、孩子的喜愛。',
  },
  {
    id: 301,
    category: '찜 [Jjim]',
    name: '매운갈비찜',
    pronounce: 'Maeungalbijjim',
    description:
      '미리 삶아낸 돼지갈비나 소갈비에 고추장 양념장과 감자, 당근 등의 채소를 넣고 조려 낸 찜이다. 맵지만 자꾸 손이 가는 중독성 있는 음식이다.',
    name_en: 'Spicy Braised Short Ribs',
    description_en:
      'This dish of boiled pork or pork short ribs braised with gochujang (red chili paste) sauce, potato, carrot, and other vegetables is highly addictive.',
    name_ja: '辛味カルビの蒸し物',
    description_ja:
      '事前に茹でておいた豚カルビや牛カルビに、コチュジャンベースのたれとじゃがいも、にんじんなどの野菜を加えて煮込んだ蒸し料理。辛さはあるが、手がとまらないクセになる料理。',
    name_zh: '香辣炖排骨',
    description_zh:
      '将猪排骨或牛排骨煮熟待用，再加入用辣椒酱调制的调味酱和土豆、胡萝卜等蔬菜炖制而成。味道虽辣，却令人欲罢不能。',
    name_zh2: '香辣燉排骨',
    description_zh2:
      '首先將豬排或牛排煮好，再加入辣椒醬等調味醬與土豆、胡蘿蔔等蔬菜燉製而成。味道雖辣，卻往往令人欲罷不能。',
  },
  {
    id: 302,
    category: '찜 [Jjim]',
    name: '매운닭찜',
    pronounce: 'Maeundakjjim',
    description:
      '닭을 먹기 좋은 크기로 손질해 당면, 감자, 당근 등을 넣고 약간 물기가 남아있을 정도로 조린 음식이다. 고춧가루, 마늘, 청양고추 등을 넉넉하게 넣어 매콤한 맛이 난다.',
    name_en: 'Spicy Braised Chicken',
    description_en:
      'A whole chicken cut into pieces and braised with glass noodles, potato, and carrot. Sufficient red chili powder, garlic, and Cheongyang chili pepper are used to give a spicy flavor to the dish.',
    name_ja: '鶏肉と野菜のピリ辛煮',
    description_ja:
      '鶏肉を食べやすい大きさに切り、春雨、じゃがいも、にんじんなどを加えて少し煮汁を残すように煮付けた料理。粉唐辛子、にんにく、激辛唐辛子などを多めに入れて辛めにして食べるのがおすすめ。',
    name_zh: '辣炖鸡块',
    description_zh:
      '将鸡肉切成适合入口的大小，加入粉丝、土豆、胡萝卜等各种食材，炖到收浓汤汁为止。放入足量的辣椒粉、蒜、青阳辣椒等，味道香辣可口。',
    name_zh2: '辣味燉雞',
    description_zh2:
      '將雞肉切成適合入口的大小，加入粉條、馬鈴薯、胡蘿蔔等食材，燉至湯汁收濃。放入充足的辣椒粉、大蒜、青陽辣椒等，更添辣味。',
  },
  {
    id: 303,
    category: '찜 [Jjim]',
    name: '머릿고기',
    pronounce: 'Meoritgogi',
    description:
      '돼지의 머리 고기를 삶아 무거운 것을 눌러 편육으로 만든 것으로 살코기 편육과는 전혀 다른 쫀득한 맛이 있다. 양념한 새우젓에 찍어 먹는다.',
    name_en: 'Pork Head Meat',
    description_en:
      'This dish is made by boiling and pressing a pig’s head. More chewy than pressed pork meat, the pressed pig’s head is sliced and served with seasoned and salted shrimp sauce.',
    name_ja: 'ゆで頭部肉',
    description_ja:
      '豚の頭部の肉を茹でてから、平たく伸ばして薄切りにしたもの。一般のゆで薄切り肉とは全く違うもっちり感がある。アミの塩辛に入ったたれにつけて食べる。',
    name_zh: '白切猪头肉',
    description_zh:
      '猪头肉用清水煮熟，用重物按压去掉水分后切成肉片，与纯瘦肉的肉片相比，口感更加嫩滑。蘸虾酱吃味道十分鲜美。',
    name_zh2: '白切豬頭肉',
    description_zh2:
      '首先將豬頭肉煮好，再用重物按壓做成肉片，食用時頗有嚼勁，散發出絕然不同於精肉片的風味。可蘸蝦醬食用。',
  },
  {
    id: 304,
    category: '찜 [Jjim]',
    name: '명태찜',
    pronounce: 'Myeongtaejjim',
    description:
      '명태에 콩나물과 각종 양념, 녹말 물을 넣어 걸쭉하게 졸인 음식이다. 명태는 우리나라에서 가장 대중적인 생선 중 하나로, 생선살뿐만 아니라 내장과 알까지 다양하게 가공되어 쓰인다.',
    name_en: 'Braised Pollack',
    description_en:
      'Myeongtae (fresh pollack) braised with bean sprouts and seasoned with a sauce thickened with starch. Myeongtae is one of the most common fish, which is why its offal, eggs, and meat are prepared and eaten in diverse ways.',
    name_ja: 'スケトウダラの蒸し物',
    description_ja:
      'スケトウダラと豆もやし、各種のたれ、水溶き片栗粉を入れてとろみをつけて煮詰めた料理。スケトウダラは韓国で最も大衆的な魚のひとつで、身の部分だけでなく、内臓と卵も加工して使われる。',
    name_zh: '炖明太鱼',
    description_zh:
      '将明太鱼和豆芽、各种调料、淀粉水等一起放入锅中熬煮即可。明太鱼是韩国人最常吃的鱼类之一，不仅鱼肉可以吃，连内脏和鱼籽也被加工成各种食品。',
    name_zh2: '燉明太魚',
    description_zh2:
      '在明太魚中加入各種調料、澱粉水等，熬煮成濃湯。明太魚是韓國民眾經常食用的魚類之一，不僅魚肉被廣泛食用，就連內臟與魚籽也被加工成了各種產品。',
  },
  {
    id: 305,
    category: '찜 [Jjim]',
    name: '묵은지두부찜',
    pronounce: 'Mugeunjidubujjim',
    description:
      '묵은지와 두부를 넣고 국물이 자작하도록 조린 음식. 먹기 좋게 자른 두부를 묵은지에 돌돌 말아 냄비에 차곡차곡 담아 끓여내기도 한다.',
    name_en: 'Braised Aged Kimchi and Bean Curd',
    description_en:
      'Aged kimchi and bean curd braised together. Bean curd is cut into bite-sized pieces, wrapped in aged kimchi, arranged neatly in a pot, and boiled.',
    name_ja: '熟成キムチと豆腐の煮物',
    description_ja:
      '熟成キムチと豆腐を入れて少し煮汁を残すように煮付けたもの。食べやすい大きさに切った豆腐を、熟成キムチでくるくると巻いて、鍋で煮て食べることもある。',
    name_zh: '酸辛奇炖豆腐',
    description_zh:
      '将酸辛奇和豆腐放在一起炖到收浓汤汁。有时也会用辛奇将切成适合入口的豆腐卷起来，整齐地摆入锅中蒸炖。',
    name_zh2: '酸辛奇燉豆腐',
    description_zh2:
      '將酸辛奇和豆腐一起燉至湯汁收濃。也可將切成適合入口大小的豆腐用酸辛奇捲起來，整齊地擺放到鍋中煮製。',
  },
  {
    id: 306,
    category: '찜 [Jjim]',
    name: '묵은지찜',
    pronounce: 'Mugeunjijjim',
    description:
      '오래된 김장김치인 묵은지에 돼지고기를 썰어 넣고 만든 찜으로 밥도둑으로 불린다. 묵은지에 양념을 하여 육수를 넣어 오래도록 끓이면 맛이 부드러우면서 깊은 맛이 나는 것이 특징이다.',
    name_en: 'Braised Pork with Aged Kimchi',
    description_en:
      'This dish is made by boiling well-aged kimchi with sliced pork in a seasoned broth. After slow cooking, it becomes quite savory and tender.',
    name_ja: '熟成キムチの蒸し物',
    description_ja:
      '熟成したキムチ「ムグンジ」にスライスした豚肉を入れて蒸したもので、「ご飯泥棒」と呼ばれる。熟成キムチに味付けをし、肉だし汁を入れて長時間煮込むと、まろやかで深い味わいが出るのが特徴。',
    name_zh: '炖酸辛奇',
    description_zh:
      '将低温发酵超过六个月以上的辛奇和切成适当大小的猪肉放在一起炖煮，是绝佳的下饭菜。将辛奇调味后倒入高汤熬至熟烂，味道特别醇厚。',
    name_zh2: '燉酸辛奇',
    description_zh2:
      '將長時間低溫發酵的辛奇和豬肉放在一起倒入高湯燉煮而成。陳辛奇比一般辛奇鹹、有經長時間發酵的陳味，通常會先沖洗一次後包肉或燉煮食用。',
  },
  {
    id: 307,
    category: '찜 [Jjim]',
    name: '민어찜',
    pronounce: 'Mineojjim',
    description:
      '민어를 손질하여 통으로 또는 토막을 내어 찐 후 고명을 얹은 음식이다. 민어는 특히 여름철이 제철인 생선으로, 선조들에게 여름 보양식으로 사랑받았다.',
    name_en: 'Steamed Croaker',
    description_en:
      'This dish features a whole croaker or croaker cut into pieces steamed and topped with garnish. As it reaches its peak in summer, croaker used to be eaten as an energy-boosting summer delicacy.',
    name_ja: 'ニベの蒸し物',
    description_ja:
      'ニベを下処理し、丸ごとまたはぶつ切りにして蒸した後、薬味をのせる料理。ニベは特に夏が旬の魚で、昔は夏の滋養食として好まれた。',
    name_zh: '蒸黄姑鱼',
    description_zh:
      '将处理好的黄姑鱼切块，放入蒸锅中蒸熟后，放上各种菜码即可。夏天的黄姑鱼最为肥美，自古以来就是备受喜爱的夏季滋补美食。',
    name_zh2: '蒸黃姑魚',
    description_zh2:
      '將黃姑魚收拾好，然後切塊，上蒸鍋蒸好，最後放上澆頭即可。黃姑魚特別適合夏季食用，作為一種夏季保健食品，深受祖先的喜愛。',
  },
  {
    id: 308,
    category: '찜 [Jjim]',
    name: '병어찜',
    pronounce: 'Byeongeojjim',
    description:
      '병어를 찜통에 쪄서 간장과 고춧가루로 만든 양념장을 바르거나 무를 깔고 병어를 올린 후 양념을 넣어 익힌 음식이다. 병어는 비린내가 없고, 살이 연해서 남녀노소 누구나 좋아하는 생선이다.',
    name_en: 'Steamed Pomfret',
    description_en:
      'Pomfret steamed in a steamer and drizzled with soy sauce mixed with red chili pepper. It is also placed on sliced radish and braised with a sauce. As its meat is soft and lacks the usual fishy smell and taste, pomfret is a highly popular fish.',
    name_ja: 'マナガツオの蒸し物',
    description_ja:
      'マナガツオを蒸し器で蒸し、カンジャンと粉唐辛子ベースのたれをぬったり、大根おろしをのせた後、たれをからめて火を通して食べる。マナガツオは生臭さがなく身がやわらかいため、老若男女問わず人気の魚。',
    name_zh: '蒸平鱼',
    description_zh:
      '将平鱼放入蒸锅中蒸熟后抹上用酱油和辣椒粉做成的调味酱，或者在锅底铺上一层萝卜后将平鱼置于上面，再倒入调味酱煮熟即可。平鱼有腥味，肉质细嫩，男女老少都很喜欢。',
    name_zh2: '蒸平魚',
    description_zh2:
      '首先將鯧魚上蒸鍋蒸好，再用醬油、辣椒粉做成調味醬，並均勻地塗抹在鯧魚上。或是先在蒸鍋中鋪一層蘿蔔，再將鯧魚置於其上，加入調味醬蒸熟。鯧魚沒有腥味，肉質鬆軟，男女老少均愛食用。',
  },
  {
    id: 309,
    category: '찜 [Jjim]',
    name: '보쌈',
    pronounce: 'Bossam',
    description:
      '삶은 돼지고기를 얇게 썰어 매콤하게 무친 무와 절인 배추에 함께 싸 먹는 음식이다. 새우젓을 찍어 배추김치나 보쌈김치 등에 싸먹기도 한다.',
    name_en: 'Kimchi Wraps with Pork',
    description_en:
      'Boiled pork wrapped in cabbage leaves with a spicy relish made of sliced radish. The meat may also be dipped in salted shrimp sauce and wrapped in cabbage or bossamkimchi.',
    name_ja: 'ポサム',
    description_ja:
      'ゆでて薄切りにした豚肉と辛い薬味で和えた大根を、塩漬けにした白菜で包んで食べる。豚肉をアミの塩辛につけ、魚介類を加えたポサムキムチや白菜キムチで包んで食べてもおいしい。',
    name_zh: '菜包肉',
    description_zh:
      '煮熟的猪肉切成薄片，与辣拌萝卜丝 一起用腌白菜包着吃，也可以沾虾酱后用辣 白菜或包菜用的辛奇等包着吃。',
    name_zh2: '菜包肉',
    description_zh2:
      '煮熟的豬肉切成薄片，會與辣拌蘿蔔絲一起用醃白菜包著吃。由於採用「豬肉」作為食食材，也稱為菜包豬肉。',
  },
  {
    id: 310,
    category: '찜 [Jjim]',
    name: '북어찜',
    pronounce: 'Bugeojjim',
    description:
      '말린 명태인 북어를 물에 담가 부드럽게 불린 후 물기를 꼭 짜서 적당한 크기로 썰어 간장 등의 갖은 양념을 하여 조린 것이다. 쇠고기를 함께 썰어 넣기도 한다.',
    name_en: 'Steamed Dried Pollack',
    description_en:
      'For this dish, soak dried pollack in water until it becomes tender and squeeze to remove any excess moisture. Cut the pollack into pieces and braise in soy sauce and other seasonings.Sliced beef is sometimes added as well.',
    name_ja: '干しスケトウダラの蒸し物',
    description_ja:
      '干しスケトウダラを水に浸けてやわらかく戻し、水気を切って適当な大きさに切り、醤油などで味付けして煮付けたもの。牛肉を刻んで加えることもある。',
    name_zh: '炖干明太鱼',
    description_zh:
      '将干明太鱼用水泡发，待变软 后挤干水分，切成适当的大小，然后用酱油等 各种调料炖烧而成。也可以放些牛肉一起炖 烧。',
    name_zh2: '燉幹明太魚',
    description_zh2:
      '把幹明太魚用水泡軟，擠幹水分，然後切成大小適中的小塊，用醬油等各種調料進行燉製。也可以跟牛肉一起燉。',
  },
  {
    id: 311,
    category: '찜 [Jjim]',
    name: '소갈비찜',
    pronounce: 'Sogalbijjim',
    description:
      '소갈비를 무르게 삶고, 무, 표고버섯, 당근, 밤 등을 넣어 간장 양념을 하여 부드럽게 조려 낸다. 추석이나 설처럼 가족들이 오랜만에 모이는 명절상이나 잔칫상에 올리는 특별한 음식이다.',
    name_en: 'Braised Beef Short Ribs',
    description_en:
      'This is beef short ribs boiled until tender and braised with radish, shiitake mushroom, carrot, and chestnuts in soy sauce. It is a main dish for special occasions, such as Chuseok (Korean Thanksgiving), New Year’s Day, and parties.',
    name_ja: '牛カルビの蒸し物',
    description_ja:
      '牛カルビをやわらかく茹でて、大根、しいたけ、にんじん、栗などを入れて醤油ベースのたれをからめてやわらかく煮付ける。秋月（韓国のお盆） やお正月など家族が久しぶりに集まったり、祝い事の席に登場する特別な料理。',
    name_zh: '炖牛排骨',
    description_zh:
      '将牛排骨炖至烂熟，再放入萝卜、香菇、胡萝卜、栗子等材料，用酱油调味，文火炖熟即可。在中秋节或春节等节日家人欢聚一堂时，炖牛排是餐桌与祭桌上必不可少的一道菜肴。',
    name_zh2: '燉牛排骨',
    description_zh2:
      '先將牛排燉熟，再放入蘿蔔、香菇、胡蘿蔔、栗子等材料，用醬油調味，文火燉熟。在中秋或春節等節日，家人歡聚一堂，燉牛排便是餐桌與祭桌上必不可少的一道特別菜品。',
  },
  {
    id: 312,
    category: '찜 [Jjim]',
    name: '소꼬리찜',
    pronounce: 'Sokkorijjim',
    description:
      '소꼬리는 여러 마디로 되어 있으며 오랜 시간 가열하면 콜라겐이 젤라틴으로 되어 피부미용에 매우 좋다. 소꼬리에 갖은 양념을 해 장시간 조려 내면 부드럽고 쫄깃한 맛이 일품이다.',
    name_en: 'Braised Oxtail',
    description_en:
      'Oxtail consists of several knuckles, and when simmered, its collagen turns into gelatin, which is known to be great for the skin. After simmering for a long period of time, the seasoned oxtail will become soft yet chewy.',
    name_ja: '牛テールの蒸し物',
    description_ja:
      '牛テールは節がいくつもあり、長時間熱を加えるとコラーゲンがゼラチンとなって肌の美容にとても良いと言われる。味付けして長時間煮込むと、柔らかくてもっちりとした味わいになる。',
    name_zh: '炖牛尾',
    description_zh:
      '牛尾由很多节组成，长时间加热，胶 原就会变成凝胶，有助于皮肤美容。牛尾中加 入各种调料长时间蒸煮，不仅口感好，而且营 养价值高。',
    name_zh2: '燉牛尾',
    description_zh2:
      '牛尾有一節一節的關節，長時間加熱就能使膠原蛋白轉化成動物膠，有助於肌膚美容。加上各種調料長時間燉製牛尾，就能品嘗到柔軟又勁道的美味佳餚。',
  },
  {
    id: 313,
    category: '찜 [Jjim]',
    name: '소머리수육',
    pronounce: 'Someorisuyuk',
    description:
      '소의 머리 부분 살을 푹 삶아 한입에 먹기 좋게 썰어 양념장에 찍어 먹는 음식이다. 새우젓과 함께 먹기도 하는데, 소화에도 도움이 된다.',
    name_en: 'Boiled Beef Head Meat',
    description_en:
      "For this dish, a cooked cow's head is cut into thin slices and served with a sauce. It is sometimes accompanied by salted shrimp to aid digestion.",
    name_ja: 'ゆで牛の頭部肉',
    description_ja:
      '牛頭肉をじっくり茹で、一口大に切って、たれにつけて食べる料理。アミの塩辛を加えて食べたりもする。消化にも良い。',
    name_zh: '白切牛头肉',
    description_zh: '将牛头肉煮熟后,切成一口大小，蘸着调味酱食用即可。也可以蘸虾酱吃，有助于消化。',
    name_zh2: '白切牛頭肉',
    description_zh2:
      '將牛頭肉煮爛後,切成一口大小, 蘸調味醬食用。有時也可與蝦醬一同食用，有助於消化。',
  },
  {
    id: 314,
    category: '찜 [Jjim]',
    name: '수육',
    pronounce: 'Suyuk',
    description:
      '소고기나 돼지고기를 덩어리로 푹 삶아 한입에 먹기 좋게 썬 음식이다. 소고기 수육은 초간장을, 돼지고기 수육은 새우젓국을 찍어 먹는다.',
    name_en: 'Boiled Beef Slices / Boiled Pork Slices',
    description_en:
      'Boiled beef or pork cut into thin slices. Beef suyuk is served with a soy vinaigrette sauce, while pork suyuk is served with a salted shrimp dipping sauce.',
    name_ja: 'ゆで肉',
    description_ja: '牛頭肉をじっくり茹で、一口大に切って、たれにつけて食べる料理。',
    name_zh: '白切肉',
    description_zh:
      '将牛肉或猪肉整块放进水里煮熟，捞 出来沥干水分后切成适当尺寸即可。牛肉可沾酱油加醋、猪肉可沾虾酱吃。',
    name_zh2: '白切肉',
    description_zh2:
      '燙熟牛肉或豬肉後，切成扁平薄片的叫作「肉片」。牛肉片一般沾加醋醬油吃，豬肉片沾蝦醬吃。',
  },
  {
    id: 315,
    category: '찜 [Jjim]',
    name: '순대',
    pronounce: 'Sundae',
    description:
      '돼지 곱창에 당면, 채소, 찹쌀, 선지 등을 섞어 양념한 소를 채워 넣고 수증기에 찐 음식이다. 오징어순대, 찹쌀순대, 병천순대, 아바이순대 등 종류가 다양하다.',
    name_en: 'Blood Sausage',
    description_en:
      "Pork intestines stuffed with glass noodles, vegetables, sweet rice, coagulated pig's blood (seonji) and steamed. Variations include Ojingeosundae (stuffed squid) and chapssal sundae (sweet rice sundae). This Korean blood sausage also comes in regional variations such as Byeongcheon or Abai Blood Sausage.",
    name_ja: 'スンデ',
    description_ja:
      '春雨や野菜、もち米、牛の血などを混ぜて味付けしたものを豚の腸に詰めて蒸した料理。イカスンデやチャプサル(もち米)スンデなど、地方によってレシピも味も様々。',
    name_zh: '血肠',
    description_zh:
      '猪肥肠中填入粉丝、蔬菜、糯米、猪血 等配制的馅料后放入蒸锅中蒸熟即可。米肠的种类很多，主要有鱿鱼米肠、糯米肠、 竝川米肠、阿爸伊米肠等。',
    name_zh2: '血腸',
    description_zh2: '在豬肥腸內放進用糯米、粉絲、蔬菜和調味料做成的餡後用水蒸氣蒸煮而成。',
  },
  {
    id: 316,
    category: '찜 [Jjim]',
    name: '아귀찜',
    pronounce: 'Agwijjim',
    description:
      '아귀에 콩나물과 미나리 등을 넣고 매운 양념장을 넣어 익힌 음식으로, 아귀의 쫄깃한 육질과 아삭한 채소 맛이 어우러진 별미이다.',
    name_en: 'Braised Spicy Monkfish',
    description_en:
      'Monkfish braised in a spicy sauce with bean sprout and Korean parsley. This is a delicacy of chewy monkfish and crispy vegetables prepared in perfect harmony.',
    name_ja: 'アンコウの蒸し物',
    description_ja:
      'アンコウと豆もやし、セリなどを入れて辛みのあるたれを入れて煮込んだ料理。アンコウのもっちりした身としゃきっとした野菜が相性抜群。',
    name_zh: '辣炖安康鱼',
    description_zh:
      '将安康鱼和豆芽、水芹等蔬菜以及辣味调味酱一起放入锅中炖熟即可。安康鱼肉质细嫩又有弹性，蔬菜味道清爽，二者搭配别具风味。',
    name_zh2: '辣燉鮟鱇魚',
    description_zh2:
      '放入鮟鱇魚和大量的豆芽後，加入辣味調料燉煮而成。包含順口柔嫩的魚肉以及鮮香的柄海鞘、水芹等風味絕佳的海鮮料理。',
  },
  {
    id: 317,
    category: '찜 [Jjim]',
    name: '아바이순대',
    pronounce: 'Abaisundae',
    description:
      '돼지 대창 속에 선지, 찹쌀, 우거지, 숙주 등을 채운 후 찜통에 쪄서 만든 순대다. 함경도 사투리인 ‘아바이’가 의미하는 대로 크고 푸짐해 주식으로 대용이 가능하다.',
    name_en: 'Abai Blood Sausage',
    description_en:
      'This dish is made by stuffing pork intestines with glass noodles, vegetables, sweet rice, and coagulated pig’s blood (seonji) and steaming. Abai Blood Sausage is filling enough to be eaten as a meal. The word abai comes from the dialect of Hamgyeong Province.',
    name_ja: 'アバイスンデ',
    description_ja:
      '豚の大腸に牛の血、もち米、白菜の外葉、もやしなどを詰めて蒸した豚の腸詰め（スンデ）。咸鏡道の方言である「アバイ（おじいさん）」が意味するように、大きくてボリュームがあるため主食にもなる。',
    name_zh: '阿巴伊血肠',
    description_zh:
      '将猪血、糯米、干白菜、绿豆 芽等灌入猪大肠中，扎紧捆实后放入锅中煮 熟的血肠。阿巴伊血肠的韩文名字叫“Abai Blood Sausage”，“Abai”是咸镜道方言， 血肠正如其名，又大又饱满，足可代替主食。',
    name_zh2: '阿巴伊血腸',
    description_zh2:
      '在豬大腸裡填入豬血、糯米、幹蘿蔔葉、綠豆牙等食材後蒸熟。「阿巴伊」是咸鏡道方言，意指又大有多，完全可以作為代餐。',
  },
  {
    id: 318,
    category: '찜 [Jjim]',
    name: '안동찜닭',
    pronounce: 'Andongjjimdak',
    description:
      '경상북도 안동에서 유래한 음식으로, 닭고기에 당근, 감자 등의 채소와 간장 양념장을 넣어 졸인 음식으로, 당면을 함께 넣기도 한다.',
    name_en: 'Andong Braised Chicken',
    description_en:
      'To make this dish, chicken is cut into pieces and braised with carrot, potato, and other vegetables, along with a soy sauce-based seasoning. Glass noodles can be added according to one’s taste. This dish originated in Andong, North Gyeongsang Province, thus the name “Andong Jjimdak.”',
    name_ja: 'アンドンチムダク',
    description_ja:
      'アンドン発祥の料理で、鶏肉とにんじん、じゃがいもなどの野菜と醤油ベースのたれを入れて煮詰めたもの。春雨を入れる場合もある。',
    name_zh: '安东炖鸡块',
    description_zh:
      '安东炖鸡块发源于庆尚北道安东地区，将鸡肉和胡萝卜、土豆等蔬菜以及用酱油做成的调味酱放入锅中一起炖煮，有时也可以加入粉条。',
    name_zh2: '安東燉雞塊',
    description_zh2:
      '安東燉雞塊發源於慶尚北道安東地區，烹飪時在雞肉中加入胡蘿蔔、土豆等蔬菜，以及醬油等調味醬，有時候也會加入粉條一同燉煮。',
  },
  {
    id: 319,
    category: '찜 [Jjim]',
    name: '오리백숙',
    pronounce: 'Oribaeksuk',
    description:
      '솥에 깨끗이 손질한 오리를 담고 물을 부은 뒤 황기, 밤, 인삼, 대추 등을 넣어 푹 끓여 낸 보양식이다. 육수에 찹쌀, 당근, 양파 등을 넣고 쑨 죽의 맛 또한 일품이다.',
    name_en: 'Whole Duck Soup',
    description_en:
      'This dish is a high-energy food made with a whole duck boiled with milk vetch root, chestnuts, ginseng, and jujubes. The stock can also be used to make a delicious porridge by boiling glutinous rice with chopped carrot and onion.',
    name_ja: '鴨肉の水炊き',
    description_ja:
      '鍋に鴨肉を入れて水を注ぎ、黄耆、栗、高麗人参、なつめなどを加えてじっくり煮込んだ滋養食。スープにもち米、にんじん、たまねぎなどを入れて炊いたお粥の味もまた絶品。',
    name_zh: '清炖鸭',
    description_zh:
      '将收拾干净的鸭子和清水一起倒入 锅中，加入黄芪、栗子、人参、大枣等一起熬 煮而成的滋补食品。还可以用高汤和糯米、胡 萝卜、洋葱等材料一起熬成粥，味道十分鲜美 清香。',
    name_zh2: '清燉鴨',
    description_zh2:
      '鍋裡放入清洗乾淨的鴨子，倒入清水，在放黃芪、栗子、人參、紅棗等煮熟即成滋補美食。湯裡放入糯米、胡蘿蔔、洋蔥等熬製的粥也非常美味。',
  },
  {
    id: 320,
    category: '찜 [Jjim]',
    name: '오이선',
    pronounce: 'Oiseon',
    description:
      '씹는 맛이 아삭하고 모양이 화려하여 전채요리에 좋다. 오이에 칼집을 넣어 소금물에 절인 다음 고기, 버섯, 계란지단 등으로 소를 채워 넣고 단촛물을 끼얹어 내는 음식이다.',
    name_en: 'Stuffed Cucumber',
    description_en:
      'Oiseon is an ideal appetizer due to its crispy texture and fancy appearance. Lightly salted cucumbers are scored and stuffed with sautéed beef, mushrooms, and egg garnish and dressed with a tangy vinaigrette sauce.',
    name_ja: '飾りキュウリの甘酢がけ',
    description_ja:
      'きゅうりに切れ目を入れて塩漬けにし、肉やきのこ、錦糸卵などの具を挟んで甘酢をかけた料理。',
    name_zh: '黄瓜膳',
    description_zh:
      '入口爽脆，外观华丽，适合做为前菜。留刀口的黄瓜用盐腌渍以后，塞入肉、蘑菇、鸡 蛋等馅料，再浇上酸甜调味汁而成。',
    name_zh2: '黃瓜膳',
    description_zh2:
      '將打花刀的小黃瓜放入鹽水醃製後炒出，在刀口內塞入肉和蘑菇等，再澆上糖醋水製成。',
  },
  {
    id: 321,
    category: '찜 [Jjim]',
    name: '오징어순대',
    pronounce: 'Ojingeosundae',
    description:
      '내장을 빼낸 오징어 몸통 속에 찹쌀, 두부, 숙주, 풋고추, 홍고추 등을 다져 넣고 쪄내 적당한 크기로 썰어 초간장을 곁들인다. 타우린이 많아 피로 회복에 좋다.',
    name_en: 'Stuffed Squid',
    description_en:
      'For this dish, clean the squid, remove the innards, fill with chopped green and red chili, glutinous rice, tofu, and bean sprouts and steam. Slice the stuffed squid and serve with soy vinaigrette sauce. Rich in taurine, squid helps relieve fatigue.',
    name_ja: 'イカスンデ',
    description_ja:
      'ワタを取り除いたイカの中にもち米、豆腐、もやし、青唐辛子、赤唐辛子などを刻んで詰め、それを蒸して適当な大きさに切り、酢醤油を添える。タウリンが多く含まれ、疲労回復に効果があるとされる。',
    name_zh: '鱿鱼血肠',
    description_zh:
      '鱿鱼取出内脏后，往里面塞入糯米 和剁成碎末的豆腐、绿豆芽、青辣椒、红辣椒 等，放入蒸锅中煮熟后，再取出来切成适当的 大小，蘸醋酱油吃即可。鱿鱼含有丰富的牛磺 酸，有助于缓解疲劳。',
    name_zh2: '魷魚血腸',
    description_zh2:
      '魷魚內臟清除洗乾淨後，把糯米、豆腐、綠豆牙、青椒、紅椒等切成碎末塞入魷魚肚裡，蒸熟後切成適當大小蘸醋醬油吃即可。魷魚血腸富含牛磺酸，有助於恢復疲勞。',
  },
  {
    id: 322,
    category: '찜 [Jjim]',
    name: '전복갈비찜',
    pronounce: 'Jeonbokgalbijjim',
    description:
      '손질한 소갈비에 전복, 당근, 밤, 은행 등을 섞어 간장 양념을 하여 부드럽게 조려 낸 고급 음식이다.',
    name_en: 'Braised Short Ribs and Abalone',
    description_en:
      'Made by braising cleaned beef short ribs with abalone, carrot, chestnuts, and gingko nuts in soy sauce, this dish is a delicacy eaten on special occasions.',
    name_ja: 'アワビとカルビの蒸し物',
    description_ja:
      '牛カルビ、アワビ、にんじん、栗、銀杏などを混ぜ、醤油ベースのたれをからめてやわらかく煮詰めた高級料理。',
    name_zh: '鲍鱼炖排骨',
    description_zh:
      '将处理好的牛排骨和鲍鱼、胡萝卜、栗子、银杏等材料以及酱油调味料一起放入锅中炖煮，是一道营养丰富的高级菜肴。',
    name_zh2: '鮑魚燉排骨',
    description_zh2:
      '這是一道高級菜品，在烹飪時，首先要將牛排收拾好，然後加入鮑魚、胡蘿蔔、銀杏等材料，並用醬油調料，用文火燉 熟。',
  },
  {
    id: 323,
    category: '찜 [Jjim]',
    name: '조기찜',
    pronounce: 'Jogijjim',
    description:
      '미리 소금 간을 한 조기에 다진 마늘, 파 채, 고춧가루, 통깨 등을 얹어 찜통에 찌는데, 짭짤하고 쫄깃한 맛이 밥과 잘 어울린다.',
    name_en: 'Steamed Yellow Croaker',
    description_en:
      'Salted yellow croaker topped with minced garlic, julienned green onion, red chili powder, and sesame seeds and steamed in a steamer. The salty taste and chewy texture of the dish go well with rice.',
    name_ja: 'イシモチの蒸し物',
    description_ja:
      'あらかじめ塩で味をつけたイシモチに、にんにくのみじん切り、白髪ねぎ、粉唐辛子、ゴマなどをのせて蒸し器で蒸す。塩気のあるもっちりとした味わいがご飯とよく合う。',
    name_zh: '蒸黄花鱼',
    description_zh:
      '将提前撒上盐的黄花鱼放入蒸锅中，上面铺上蒜末、葱丝、辣椒粉、芝麻粒等材料蒸熟，微咸的味道和细嫩有弹性的口感，很适合配米饭。',
    name_zh2: '蒸黃花魚',
    description_zh2:
      '首先將黃花魚用鹽調好味，在放上蒜末、蔥絲、辣椒粉、芝麻粒等材料，上蒸鍋蒸熟，味道微咸，富有彈性，適合搭配米飯一同食用。',
  },
  {
    id: 324,
    category: '찜 [Jjim]',
    name: '족발',
    pronounce: 'Jokbal',
    description:
      '돼지족에 간장과 생강, 마늘, 양파를 넣고 조려 먹기 좋게 썰어낸 음식이다. 족발에는 젤라틴 성분이 풍부하여 피부 미용과 노화 방지에 효과가 있다.',
    name_en: "Braised Pigs' Feet",
    description_en:
      'Pig’s feet glazed in a soy sauce with ginger and garlic. Served off the bone and thinly sliced. The high gelatin content of jokbal helps to maintain a healthy and youthful complexion.',
    name_ja: '豚足',
    description_ja:
      '豚足を醤油、しょうが、にんにく、玉ねぎと一緒に煮込み、食べやすい大きさに切った料理。ゼラチンが豊富に含まれており、美容や老化防止に効果的。',
    name_zh: '酱猪蹄',
    description_zh:
      '将猪蹄和酱油、生姜、蒜头、洋葱等 一起放入锅中炖煮，煮熟后切成适当大小即 可。猪蹄富含骨胶，具有美容和防止老化的功 效。',
    name_zh2: '醬豬蹄',
    description_zh2: '豬蹄燙熟後加入醬油、生薑等食材燉煮的飲食，含豐富的動物膠質。',
  },
  {
    id: 325,
    category: '찜 [Jjim]',
    name: '찜닭',
    pronounce: 'Jjimdak',
    description:
      '토막 낸 닭에 각종 채소와 양념을 넣고 끓이다가 당면을 섞어 조려 낸다. 경상북도 안동에서 유래한 찜닭은 술안주, 반찬, 간식 등 여러 용도로 즐겨 먹는다.',
    name_en: 'Braised Chicken',
    description_en:
      'Here, chicken is cut into pieces and braised with vegetables, seasoning, and glass noodles. Originating in Andong, North Gyeongsang Province, jjimdak is popular as a side dish and a snack, with our without alcoholic beverages.',
    name_ja: 'チムダク',
    description_ja:
      'ぶつ切りにした鶏肉に野菜や薬味を加えて煮込み、春雨を加えて煮詰める。慶尚北道・安東が発祥のチムダクは、お酒の肴、おかず、間食などとして食べられる。',
    name_zh: '炖鸡块',
    description_zh:
      '鸡肉切成块，加入各种蔬菜和调料一 起熬煮，再放入一些粉条炖烧至熟即可。这 道菜源自庆尚北道的安东，可作下酒菜、配饭 菜、零食等。',
    name_zh2: '燉雞塊',
    description_zh2:
      '把雞塊、各種蔬菜和調料混合在一起燉煮，中間放入紅薯粉繼續煮熟。源自慶尙北道安東的燉雞塊無論是做下酒菜、下飯菜還是零食都非常不錯。',
  },
  {
    id: 326,
    category: '찜 [Jjim]',
    name: '참꼬막찜',
    pronounce: 'Chamkkomakjjim',
    description:
      '해감한 꼬막을 끓는 물에 살짝 데쳐 껍질을 한쪽만 제거하고, 그릇에 차곡차곡 담아 양념장을 끼얹어 내는 음식이다. 꼬막은 참꼬막, 새꼬막, 피꼬막 세 종류로 나뉘는데, 그 중 참꼬막을 최고로 친다. 쫄깃한 맛뿐만 아니라 하나하나 빼먹는 재미가 쏠쏠한 요리이다.',
    name_en: 'Steamed Cockles',
    description_en:
      'This dish is prepared by placing cleaned and parboiled cockles in a bowl with the top shells removed and drizzling them with a sauce. Among the various kinds of cockles, true cockle is considered to be the best due to its chewy texture and savory taste.',
    name_ja: 'ハイガイの蒸し物',
    description_ja:
      '砂抜きしたハイガイを沸騰したお湯でゆがいて殻を片方だけ取り、器に積み上げてたれをかける。ハイガイの種類は、ハイガイ、サルボウ、アカガイの三種類に分けられるが、その中でもハイガイが最高と言われる。歯ごたえだけでなく、ひとつひとつ取り出して食べる楽しさがあるのも魅力。',
    name_zh: '蒸血蚶',
    description_zh:
      '将吐沙干净的血蚶用开水焯一下，去掉一侧的壳，然后整齐地摆放到盘中，再浇上调味酱即可。蚶分为血蚶、毛蚶、魁蚶等三种，其中又以血蚶为佳。血蚶肉味鲜美，且剥食的过程也别有趣味。',
    name_zh2: '蒸血蚶',
    description_zh2:
      '血蚶有土腥味，需要放到沸水中稍微焯一下，去掉一側的殼，然後整齊地擺放到碗中，搭配調味醬一同食用。 蚶分為血蚶、毛蚶、魁蚶等三種，其中以血蚶為佳。肉質富有彈性，且剝食的過程也趣味盎然。',
  },
  {
    id: 327,
    category: '찜 [Jjim]',
    name: '코다리찜',
    pronounce: 'Kodarijjim',
    description:
      '명태를 반건조한 것이 코다리다. 큼직하게 썬 무와 함께 고추장이나 간장으로 갖은 양념을 하여 졸이면 쫄깃한 맛을 즐길 수 있다. 양념장에 밥을 볶아먹기도 한다.',
    name_en: 'Braised Half-dried Pollack',
    description_en:
      'This dish features kodari, or half-dried pollack, seasoned with gochujang or soy sauce and braised with radish chunks. The result is wonderfully chewy. The sauce is also used to make a rice stir-fry.',
    name_ja: '半干しスケトウダラの蒸し物',
    description_ja:
      '半干ししたスケトウダラをざく切りにした大根と一緒にコチュジャンや醤油で味付けして煮しめると、もっちりした口当たりを楽しむことができる。残ったたれにご飯を入れて炒めて食べるのもおいしい。',
    name_zh: '炖半干明太鱼',
    description_zh:
      '将半干明太鱼和大萝卜块儿以 及用辣椒酱或酱油制成的调味酱一起慢慢炖 烧，口感非常筋道。还可用调味酱拌饭吃。',
    name_zh2: '燉半幹明太魚',
    description_zh2:
      '把明太魚進行半乾燥的就是半幹明太魚。用辣椒醬或醬油跟大塊蘿蔔一起燉，就能享用非常勁道的美味，用剩下的湯汁炒飯吃也非常美味。',
  },
  {
    id: 328,
    category: '찜 [Jjim]',
    name: '편육',
    pronounce: 'Pyeonyuk',
    description:
      '돼지머리와 파, 마늘 등의 향신채소를 넣고 냄새가 나지 않도록 푹 삶은 후 면포에 싸서 무거운 것으로 눌러 굳힌다. 얇게 썰어 접시에 돌려 담고 새우젓 등을 곁들인다.',
    name_en: 'Cold Pork Slices',
    description_en:
      "A pig's head boiled with condiment vegetables, such as green onion and garlic, to get rid of the meat smell, and then wrapped in a cotton cloth and pressed with a heavy weight. Thinly sliced, layered in a circle on a plate, and served with salted shrimp.",
    name_ja: '薄切りゆで肉',
    description_ja:
      '豚の頭の肉にねぎ、にんにくなどの香辛料を加えて臭みが出ないようにじっくりとゆでる。それを布で巻いておもしを載せて固める。固くなったら薄切りにして盛り付け、アミの塩辛などを添える。',
    name_zh: '白切肉',
    description_zh:
      '将猪头肉与葱、蒜等香辛蔬菜一起煮熟去除异味，再用棉布包好用重物按压而成。将肉切成薄片后，在盘中转圈摆放，搭配虾酱等一起食用。',
    name_zh2: '白切肉',
    description_zh2:
      '將豬頭肉和蔥、大蒜等蔬菜一起燉煮至無異味，再以棉布包好，用重物按壓而成。把肉切成薄片後在盤子裡擺成一圈，搭配蝦醬一同食用。',
  },
  {
    id: 329,
    category: '찜 [Jjim]',
    name: '한방오리백숙',
    pronounce: 'Hanbangoribaeksuk',
    description:
      '손질한 오리를 황기, 인삼, 마늘 등의 한약재와 함께 푹 끓인 백숙 요리이다. 오리는 보양식으로 각광받고 있지만, 불포화지방산이 풍부해 다이어트에도 좋다.',
    name_en: 'Whole Duck Soup with Medicinal Herbs',
    description_en:
      'This is a high-energy food made by boiling a whole duck with medicinal herbs, such as milk vetch root, ginseng, and garlic. High in unsaturated fatty acids, it is an ideal dish for weight loss.',
    name_ja: '鴨肉の韓方水炊き',
    description_ja:
      '下処理した鴨肉を黄耆、高麗人参、にんにくなどの漢方 食材と一緒にじっくり煮込んだ水炊き料理。鴨肉は滋養食としても脚光を浴びているが、不飽和脂肪酸が豊富でダイエットにも効果的とされる。',
    name_zh: '药膳清炖鸭',
    description_zh:
      '将处理好的鸭子和黄芪、人参、蒜等药材一起炖煮即可。鸭肉不仅是广受青睐的滋补食品，还富含不饱和脂肪酸，有助于减肥。',
    name_zh2: '藥膳清燉鴨',
    description_zh2:
      '加入清理好的鴨子跟黃芪、人參和大蒜等韓藥材燉煮。鴨肉不僅是非常好的滋補食品，還富含不飽和脂肪酸，有助於減肥。',
  },
  {
    id: 330,
    category: '찜 [Jjim]',
    name: '한방오리찜',
    pronounce: 'Hanbangorijjm',
    description:
      '손질한 오리에 엄나무, 오가피, 황기 등 한약재를 넣어 끓인 찜이다. 여름철 보양식으로 인기가 있으며, 오랫동안 조리하여 맛이 깊고, 고기가 담백하면서 쫄깃하다.',
    name_en: 'Steamed Whole Duck with Medical Herbs',
    description_en:
      'This is a cleaned whole duck steamed with kalopanax, eleuthero, and medicinal herbs in water. Popular as a summer delicacy, this dish is characterized by its deep flavor and soft yet chewy meat, achieved by allowing it to simmer slowly over a long period of time.',
    name_ja: '鴨肉の韓方蒸し物',
    description_ja:
      '鴨肉にハリギリ、ウコギ、黄耆などの漢方 食材を入れて煮た蒸し物。夏の滋養食として人気があり、長時間調理することで深みのある味となる。肉はあっさりとしていながら弾力がある。',
    name_zh: '药膳炖鸭',
    description_zh:
      '将处理好的鸭子和刺桐、五加皮、黄芪等中药材一起熬煮即可。药膳炖鸭是一道夏季滋补美食，细熬慢炖，味道醇浓鲜美，肉质细嫩清淡，十分美味。',
    name_zh2: '藥膳燉鴨',
    description_zh2:
      '將鴨子收拾好之後，放入刺桐、五加皮、黃芪等中藥材熬煮即可。作為一種夏季保健食品，藥膳燉鴨受到人們的歡迎，由於長時間的燉煮，回味悠遠、肉質清淡、富有彈性。',
  },
  {
    id: 331,
    category: '찜 [Jjim]',
    name: '해물찜',
    pronounce: 'Haemuljjim',
    description:
      '새우, 오징어, 꽃게, 조개류 등 싱싱한 제철 해물에 콩나물, 미나리 등을 얹고 매운 양념장을 넣어 걸쭉하게 익힌 음식이다.',
    name_en: 'Spicy Braised Seafood',
    description_en:
      'Fresh shrimp, squid, crab, fish, clam, and other seasonal catches cooked with soybean sprouts and Korean parsley in a thick spicy sauce.',
    name_ja: '海鮮の蒸し物',
    description_ja:
      'えび、イカ、ワタリガニなどの旬の魚介類に、豆もやしや、せりなどをのせ、辛口の薬味を加えて蒸し煮にした料理。',
    name_zh: '辣炖海鲜',
    description_zh:
      '将虾、鱿鱼、螃蟹、贝类等新鲜的 应季海鲜与黄豆芽、水芹等蔬菜一起放入锅 中，加入辣味调味酱蒸炖而成。',
    name_zh2: '辣燉海鮮',
    description_zh2: '放入當季海鮮，即蝦、鱿魚、花蟹等和豆芽等蔬菜後加入辣調味料燉煮而成。',
  },
  {
    id: 332,
    category: '찜 [Jjim]',
    name: '홍어삼합',
    pronounce: 'Hongeosamhap',
    description:
      '삭힌 홍어와 삶은 돼지고기, 묵은 김치를 적당한 크기로 썰어 함께 먹는 음식으로 톡 쏘는 맛이 입맛을 자극하는 음식이다. 삼합에는 막걸리가 어울린다.',
    name_en: 'Skate, Pork, and Kimchi Combo',
    description_en:
      'Fermented skate, boiled pork, and well-aged kimchi sliced and served together. The pungent taste of the fermented skate tends to stimulate one’s appetite. Maggeolli (unrefined rice wine) goes well with this combo dish.',
    name_ja: 'ガンギエイのサムハプ',
    description_ja:
      '発酵させたガンギエイと茹でた豚肉、熟成キムチを適当な大きさに切って一緒に食べる料理。ピリッとした味が口の中を刺激する。サムハプはマッコリと相性がいい。',
    name_zh: '斑鳐三合',
    description_zh:
      '将经过发酵的斑鳐和水煮猪肉、酸辛奇切成合适的大小，然后叠在一起放进嘴里一口吃下去，入口即感到一股独特的刺鼻味道，勾动人的食欲。三合最适合搭配甘甜的米酒。',
    name_zh2: '斑鰩三合',
    description_zh2:
      '將發酵過後的斑鰩、煮好的豬肉、酸辛奇切成合適的大小，放在一起食用，味道刺激酸爽，激發人的食欲。適合與米酒搭配食用。',
  },
  {
    id: 333,
    category: '찜 [Jjim]',
    name: '홍어찜',
    pronounce: 'Hongeojjim',
    description:
      '생 홍어나 살짝 말린 홍어를 쪄서 양념장을 끼얹어 내는 음식이다. 홍어는 생으로 먹기도 하지만, 항아리에 짚을 깔고 삭혀서 톡 쏘는 자극적인 풍미로도 즐기는 생선이다.',
    name_en: 'Steamed Skate',
    description_en:
      'This dish features fresh or slightly dried skate steamed and drizzled with a soy sauce-based sauce. Skate can be eaten raw, but it is often packed in an earthen pot with straw and left to ferment in order to give it a strong taste.',
    name_ja: 'ガンギエイの蒸し物',
    description_ja:
      '生のガンギエイや半がわきのガンギエイを蒸してたれをかけた料理。ガンギエイはそのままでも食べるが、壷に藁を敷いて発酵させ、刺激のある風味も楽しめる魚。',
    name_zh: '蒸斑鳐',
    description_zh:
      '将生斑鳐或微干的斑鳐放入锅中蒸熟后，浇上调味酱即可。斑鳐可生吃，也可在缸中铺上秸秆进行发酵，味道很有刺激性，别有一番滋味。',
    name_zh2: '蒸斑鰩',
    description_zh2:
      '將生斑鰩或微幹的斑鰩蒸熟，搭配調味醬一同食用即可。斑鰩可以生吃，也可以在缸中鋪上秸稈進行發酵，味道很刺激，別有一番滋味。',
  },
  {
    id: 334,
    category: '찜 [Jjim]',
    name: '황기닭백숙',
    pronounce: 'Hwanggidakbaeksuk',
    description:
      '황기는 산지에서 자라는 식물로 뿌리는 인삼을 대용하는 약재로 이용되어 왔다. 닭에 황기를 넣어 양념하지 않고 맹물에 푹 삶아 낸 음식으로 대표적 보양식이다.',
    name_en: 'Whole Chicken Soup with Milk Vetch Roots',
    description_en:
      'Milk vetch roots grow in mountainous regions and are often used as an alternative to ginseng. This dish, chicken boiled with milk vetch roots in water without any seasoning, is popular in Korea for those looking for an energy boost.',
    name_ja: '黄耆入り鶏肉の水炊き',
    description_ja:
      '黄耆は山地で育つ植物で、根は高麗人参の代用となる生薬として利用されてきた。鶏肉に黄耆を詰め、味付けをせずに水炊きにした料理で、代表的な滋養食である。',
    name_zh: '黄芪清炖鸡',
    description_zh:
      '黄芪生长于山地，根部可作为替 代人参的药材。将整只鸡和黄芪一起放入清 水中熬煮，不加任何调料，是代表性的滋补食 品。',
    name_zh2: '黃芪清燉雞',
    description_zh2:
      '黃芪是在山地生長的植物，一直以來都是替代人參的藥材。黃芪清燉雞是跟黃芪一起清燉的雞，是具有代表性的滋補美食。',
  },
  {
    id: 335,
    category: '찜 [Jjim]',
    name: '황기족발',
    pronounce: 'Hwanggijokbal',
    description:
      '황기를 넣고 돼지 다리를 삶아 양념장에 조려 낸 음식이다. 따뜻한 성질의 황기와 찬 성질의 돼지고기가 궁합을 이루는 메뉴로 새우젓을 곁들이면 소화를 돕는다.',
    name_en: "Braised Pigs' Feet with Milk Vetch Root",
    description_en:
      'This dish features pigs’ feet boiled with milk vetch root and braised with a sauce.The hot-natured milk vetch root and cold-natured pork make an excellent match, and salted shrimp is said to aid in the digestion of pork.',
    name_ja: '黄耆豚足',
    description_ja:
      '黄耆を入れて豚足を茹で、ヤンニョムジャンで煮しめた料理。温かい性質を持つ黄耆と冷たい性質を持つ豚肉の相性が良いメニューで、アミの塩辛を添えると消化作用を助けるとされる。',
    name_zh: '黄芪酱猪蹄',
    description_zh:
      '将猪腿和黄芪一起放入水中熬 煮，再加入调味料炖烧即可。黄芪性温，猪肉 性凉，两者十分搭配，吃的时候蘸一些虾酱可 以助消化。',
    name_zh2: '黃芪醬豬蹄',
    description_zh2:
      '放入黃芪和調味汁醬制的豬腿，黃芪性溫，豬肉性寒，是陰陽協調的菜譜，沾著蝦醬一起吃有助於消化。',
  },
  {
    id: 336,
    category: '찜 [Jjim]',
    name: '황태찜',
    pronounce: 'Hwangtaejjim',
    description:
      '물에 불린 황태를 간장 양념이나 고추장 양념을 하여 익힌 찜이다. 황태 특유의 감칠맛과 매콤하면서도 고소하고, 쫄깃한 맛이 난다.',
    name_en: 'Braised Dried Pollack',
    description_en:
      'Presoaked hwangtae (dried pollack) braised with a soy sauce-based sauce or a gochujang (red chili paste)-based sauce, hwangtaejjim is characterized by the chewy texture of the fish meat and spicy yet savory sauce.',
    name_ja: '干しスケトウダラの蒸し物',
    description_ja:
      '水で戻した干しスケトウダラに醤油ベースのたれやコチュジャンベースのたれで味をつけて火を通した蒸し物。スケトウダラ特有の風味と辛いが香りがあり、歯ごたえもある。',
    name_zh: '炖干明太鱼',
    description_zh:
      '明太鱼用冷水泡发后，用酱油或辣椒酱调味，再放入锅中炖煮即可。明太鱼特有的鲜美味道，加上香辣爽口的口感，肉质劲道有嚼劲。',
    name_zh2: '燉幹明太魚',
    description_zh2:
      '先將幹明太魚在水中發泡之後，再用醬油或辣醬進行調味燉製即可。它散發著明太魚所特有的味道，味道香辣，富有彈性。',
  },
  {
    id: 337,
    category: '찜 [Jjim]',
    name: '훈제오리보쌈',
    pronounce: 'Hunjeoribossam',
    description:
      '참나무 장작불에 훈제한 오리, 삶은 돼지고기, 매콤하게 무친 무를 절인 배추나 쌈 채소에 함께 싸 먹는 음식이다.',
    name_en: 'Kimchi Wraps with Pork and Smoked Duck',
    description_en:
      'Oak smoked duck wrapped in salted Korean cabbage leaves or leafy vegetables with boiled pork and julienned radish seasoned with red chili powder.',
    name_ja: '鴨の燻製ポサム',
    description_ja:
      '楢の薪で燻製にした鴨肉、茹でた豚肉、辛く和えた大根を塩漬けした白菜や包み野菜で一緒に巻いて食べる料理。',
    name_zh: '菜包熏鸭肉',
    description_zh:
      '将用柞树柴火薰制而成的鸭子和水煮猪肉、香辣拌萝卜一起放在腌白菜或包菜上面包着吃即可。',
    name_zh2: '菜包熏鴨肉',
    description_zh2:
      '將用柞樹柴火薰製而成的鴨子、煮熟的豬肉與香辣拌蘿蔔一起，用醃白菜或包菜包起來食用即可。',
  },
  {
    id: 338,
    category: '볶음 [Bokkeum]',
    name: '가지볶음',
    pronounce: 'Gajibokkeum',
    description:
      '달구어진 팬에 기름을 두르고, 소금에 살짝 절인 가지와 파, 다진 마늘, 간장 양념을 함께 넣어 볶은 반찬이다. 만들기도 쉽고, 비타민 함유량이 높아 피로회복에 좋다.',
    name_en: 'Stir-fried Eggplant',
    description_en:
      'Lightly salted eggplant stir-fried with minced green onion, garlic, and soy sauce. This is a nutritious and vitamin-rich side dish that is easy to make and great for overcoming fatigue.',
    name_ja: 'なす炒め',
    description_ja:
      '熱したフライパンに油をまわし、軽く塩漬けしておいたなすとねぎ、にんにくのみじん切り、醤油ベースのたれを一緒に加えて炒めたおかず。調理法も簡単で、ビタミン含有量が高く、疲労回復にもおすすめ。',
    name_zh: '炒茄子',
    description_zh:
      '烧热的平底锅中倒入食用油，将用盐稍微腌制的茄子和葱、蒜末、酱油调料一起放入锅中翻炒至熟即可。炒茄子做法简单，而且富含维生素，有利于缓解疲劳。',
    name_zh2: '炒茄子',
    description_zh2:
      '將平底鍋燒熱，放油，茄子放鹽稍微醃製一下，然後將其與蔥、蒜末、醬油調料一同倒入鍋中炒製即可。它的烹飪方法簡單，富含維生素，有利於驅趕疲勞。',
  },
  {
    id: 339,
    category: '볶음 [Bokkeum]',
    name: '감자볶음',
    pronounce: 'Gamjabokkeum',
    description:
      '땅속의 사과라 할 정도로 비타민 C가 많고 소화가 잘되며 열량이 높지 않아 남녀노소 모두에게 인기 있는 반찬이다. 채 썬 감자를 소금간하여 물기를 제거하고 양파를 함께 넣고 볶는다.',
    name_en: 'Stir-fried Potatoes',
    description_en:
      'Potatoes are sometimes referred to as “underground apples,” because they are rich in vitamin C and low in calories. For this dish, julienned potatoes are seasoned with salt and stir-fried with onions.',
    name_ja: 'じゃがいも炒め',
    description_ja:
      'じゃがいもは「地中のりんご」と言われるほどビタミンCが豊富で消化に良い。また、カロリーが低いため、じゃがいも炒めは老若男女問わず人気があるおかず。千切りにしたじゃがいもに塩で下味を付け、水気を切ってたまねぎと一緒に炒める。',
    name_zh: '炒土豆丝',
    description_zh:
      '土豆被誉为是地里的苹果，富含维生素C,易消化，热量又不高，可谓老少皆宜。土豆切丝，加入少许盐腌一下，控干水分后，加入洋葱一起翻炒至熟。',
    name_zh2: '炒土豆絲',
    description_zh2:
      '土豆被譽為埋在地底下的蘋果，是富含維生素C，有助於消化，且熱量不高的男女老少皆愛的蔬菜。把擦成絲的土豆用鹽醃製，倒掉水之後跟洋蔥一起炒熟。',
  },
  {
    id: 340,
    category: '볶음 [Bokkeum]',
    name: '고구마맛탕',
    pronounce: 'Gogumamattang',
    description:
      '껍질을 벗겨 한입 크기로 썬 고구마에 녹말가루를 묻혀 식용유에 튀겨 낸 뒤 설탕, 물엿 등으로 만든 시럽에 버무린 다음 검은깨를 뿌려 식힌 후식이다.',
    name_en: 'Deep-fried and Sugar Glazed Sweet Potatoes',
    description_en:
      'For this dish, peeled sweetpotatoes are cut into bite-sized pieces, sprinkled with starch, and deep-fried. Beforeserving, the sweet potatoes are mixed witha sweet, starch-based syrup and sprinkledwith black sesame seeds.',
    name_ja: '大学芋',
    description_ja:
      '皮をむいて一口大に切ったさつまいもに片栗粉をつけて油で揚げ、砂糖や水飴などで作ったシロップをからめ、黒ごまをかけて冷やしたスイーツ。',
    name_zh: '拔丝地瓜',
    description_zh:
      '将地瓜(红薯)削皮后切成方便入口 的大小，裹上淀粉后油炸，待熟后捞出来浇 上用白糖、糖稀等调制的糖浆搅拌均匀，最 后撒上黑芝麻放凉即可，是一种很美味的甜 点。',
    name_zh2: '拔絲地瓜',
    description_zh2:
      '把削皮紅薯切成塊兒，再沾上澱粉用食用油炸熟，並用白糖或糖稀裹勻，最後撒上黑芝麻，是非常不錯的飯後甜點。',
  },
  {
    id: 341,
    category: '볶음 [Bokkeum]',
    name: '곰장어볶음',
    pronounce: 'Gomjangeobokkeum',
    description:
      '손질한 곰장어에 고춧가루와 간장, 마늘, 파, 고추 등을 넣어서 볶는 음식이다. 곰장어는 먹장어의 방언으로, 서민의 대표적인 안주로 유명하다.',
    name_en: 'Stir-fried Sea Eel',
    description_en:
      'For this dish, cleaned eel is stir-fried with soy sauce mixed with red chili powder, minced garlic, and green pepper. Eel is a popular food served with alcoholic beverages in Korea.',
    name_ja: 'ヌタウナギ炒め',
    description_ja:
      'ヌタウナギを粉唐辛子とカンジャン、にんにく、ねぎ、唐辛子などを入れて炒めた料理。ヌタウナギは庶民の代表的な酒のつまみとして有名。',
    name_zh: '辣炒盲鳗',
    description_zh:
      '将处理好的盲鳗和辣椒粉、酱油、蒜、葱、辣椒等一起翻炒即可。盲鳗是深受老百姓喜爱的最大众化的下酒菜之一。',
    name_zh2: '辣炒盲鰻',
    description_zh2:
      '將鰻魚收拾好之後，放入辣椒粉、醬油、蒜、蔥、辣椒等翻炒即可。鰻魚又稱鱔，是平民百姓代表性的下酒菜。',
  },
  {
    id: 342,
    category: '볶음 [Bokkeum]',
    name: '곱창볶음',
    pronounce: 'Gopchangbokkeum',
    description:
      '소나 돼지의 내장인 곱창에 양배추, 양파, 깻잎, 대파 등을 넣어 매콤하게 볶아낸 요리이다. 떡이나 순대, 당면을 함께 넣어 볶아 먹기도 한다.',
    name_en: '(소곱창) Stir-fried Beef Small Intestine(돼지곱창) Stir-fried Pork Small Intestine',
    description_en:
      'This spicy dish is made with cow’s or pig’s intestines stir-fried with chopped cabbage, onion, perilla leaves, and green onion. Rice cake, sundae (Blood Sausage), and glass noodles can be added according to one’s preference.',
    name_ja: 'コプチャン炒め',
    description_ja:
      '牛肉や豚肉の内臓であるコプチャンにキャベツ、玉ねぎ、エゴマの葉、長ねぎなどを入れた辛みのある炒め料理。',
    name_zh: '(소) 辣炒牛肠(돼지) 辣炒猪肠',
    description_zh:
      '将猪肠或牛肠和卷心菜、洋葱、苏子叶、葱等材料以及调味料一起翻炒即可，味道香辣鲜美，也可放入年糕、血肠、粉条等一起翻炒。',
    name_zh2: '(소) 辣炒牛腸(돼지) 辣炒豬腸',
    description_zh2:
      '肥腸是豬、牛的一種內臟，在肥腸中加入捲心菜、洋蔥、蘇子葉、大蔥等材料，炒出香辣味道。也可以加入年糕、血腸、粉條一同翻炒。',
  },
  {
    id: 343,
    category: '볶음 [Bokkeum]',
    name: '국물떡볶이',
    pronounce: 'Gungmultteokbokki',
    description:
      '떡볶이 떡과 어묵, 채소를 넣고 국물을 떡과 함께 떠먹을 수 있도록 조리한 떡볶이. 튀긴 만두를 국물에 넣어 먹기도 한다.',
    name_en: 'Stir-fried Rice Cake',
    description_en:
      'Tteokbokkitteok (thin rice cake sticks) stir-fried with fish cakes and vegetables in broth. Pan-fried dumplings can be added and eaten with the broth.',
    name_ja: 'スープトッポッキ',
    description_ja:
      'トッポッキの餅と練り物、野菜を入れた、スープと餅が一緒に食べられるトッポッキ。揚げ餃子をスープに入れて食べる場合もある。',
    name_zh: '辣炒年糕汤',
    description_zh:
      '把辣炒年糕条糕和鱼糕、蔬菜等材料做成带汤汁的辣炒年糕，根据喜好也可以放入一些炸饺子配汤汁吃。',
    name_zh2: '辣炒年糕湯',
    description_zh2: '將米糕條、魚糕、蔬菜一起做成帶湯的炒年糕。也可以把炸餃子放入湯裡一起吃。',
  },
  {
    id: 344,
    category: '볶음 [Bokkeum]',
    name: '궁중떡볶이',
    pronounce: 'Gungjungtteokbokki',
    description:
      '가래떡을 적당한 크기로 잘라 소고기와 표고버섯, 양파, 당근 등을 넣고 볶다가 간장, 설탕 등을 넣어 익힌 음식으로 궁중에서 먹던 떡볶이다.',
    name_en: 'Royal Stir-fried Rice Cake',
    description_en:
      'Long cylinder-shaped tteok (garaetteok) cut into pieces and stir-fried with beef, shitakeGungjungtteokbokkimushrooms, onion, and carrots in a sweet soy sauce mixture. A dish traditionally served in the royal court.',
    name_ja: '宮中トッポッキ',
    description_ja:
      '棒状のお餅を食べやすい長さに切り、牛肉や椎茸、玉ねぎ、にんじんなどと一緒に炒め、醤油や砂糖などを加えて炒め煮したもの。かつて宮廷で食べられた料理。',
    name_zh: '宫廷炒年糕',
    description_zh:
      '将年糕切成段，与牛肉、香菇、 洋葱、胡萝卜等一同翻炒，最后加入酱油和砂 糖调味即可，是过去宫廷常吃的一道菜。',
    name_zh2: '宮廷炒年糕',
    description_zh2:
      '將條狀年糕切成適當大小後，加入牛肉、香菇等以及醬油調味料炒製而成。這是古代宮中人喜歡吃的飲食。由於不放入辣椒醬，又稱「醬油炒年糕」。',
  },
  {
    id: 345,
    category: '볶음 [Bokkeum]',
    name: '김치볶음',
    pronounce: 'Kimchibokkeum',
    description:
      '신김치를 파, 다진 마늘 등과 함께 식용유를 두른 팬에 볶는 반찬이다. 밥과 함께 먹기도 하지만 두부와 함께 먹어도 맛있다.',
    name_en: 'Stir-fried Kimchi',
    description_en:
      'Well-fermented kimchi stir-fried with chopped green onion and garlic in a pan greased with oil, this is a popular side dish usually eaten with rice. It also goes well with bean curd.',
    name_ja: 'キムチ炒め',
    description_ja:
      '熟成した酸味の強いキムチを、ねぎ、にんにくのみじん切りなどと一緒に食用油をひいたフライパンで炒めた料理。ご飯と一緒に食べる場合もあるが、豆腐と一緒に食べても美味しい。',
    name_zh: '炒辛奇',
    description_zh:
      '热锅中倒入些许食用油，将酸辛奇和葱、蒜末等一起放入锅中翻炒即可。炒辛奇可以配米饭吃，配豆腐一起食用也十分美味。',
    name_zh2: '炒辛奇',
    description_zh2:
      '先在鍋中倒入食用油，然後加入酸辛奇、蔥、蒜末等一同翻炒即可。可以與米飯一同食用，與豆腐一起食用也十分美味。',
  },
  {
    id: 346,
    category: '볶음 [Bokkeum]',
    name: '깻잎나물볶음',
    pronounce: 'Kkaennipnamulbokkeum',
    description:
      '어린 깻잎을 살짝 데친 후 파, 마늘, 간장 양념을 넣어 볶는 음식으로, 깻잎 특유의 향이 입맛을 돋우는 나물이다.',
    name_en: 'Stir-fried Perilla Leaves',
    description_en:
      'Parboiled young perilla leaves stir-fried with chopped green onions and garlic in soy sauce. The unique fragrance of perilla leaves is known to stimulate appetite.',
    name_ja: 'エゴマの葉ナムル炒め',
    description_ja:
      '若いエゴマの葉をさっとゆがいて、ねぎ、にんにく、醤油ベースのたれを入れて炒めた料理。エゴマの葉特有の香りが食欲をそそるナムル。',
    name_zh: '炒苏子叶',
    description_zh:
      '将嫩苏子叶用开水绰一下，再放入葱、蒜、姜翻炒即可。苏子叶特有的香味可令人食欲大增。',
    name_zh2: '炒蘇子葉',
    description_zh2:
      '將嫩蘇子葉稍微焯一下，放入蔥、蒜、姜翻炒即可。蘇子葉特有的香味會令人食欲大增。',
  },
  {
    id: 347,
    category: '볶음 [Bokkeum]',
    name: '꽈리고추멸치볶음',
    pronounce: 'Kkwarigochumyeolchibokkeum',
    description:
      '팬에 멸치를 먼저 볶아 비린내를 없애고, 꽈리고추와 간장 양념장을 넣어 볶은 후 참기름, 물엿, 통깨를 넣고 버무린 것이다. 밑반찬으로 많이 먹는다.',
    name_en: 'Stir-fried Shishito Peppers and Dried Anchovies',
    description_en:
      'This popular side dish is made by first pan-frying dried anchovies without oil to remove the fishy smell and taste and then stir-frying with shishito pepper in soy sauce. Before serving, mix with syrup, sesame oil, and sesame seeds.',
    name_ja: 'ざこと獅子唐辛子炒め',
    description_ja:
      'まず、フライパンで煮干しを炒めて生臭さを飛ばし、獅子唐辛子と醤油ベースのたれを入れて炒めた後、ごま油、水あめ、ゴマを入れて和える。常備菜としてよく食べられる。',
    name_zh: '炒小青椒鳀鱼',
    description_zh:
      '将鳀鱼放入平底锅中翻炒一下去除腥味，再放入小青椒和酱油调味酱翻炒，最后加入香油、糖稀、芝麻粒搅拌均匀即可，是一种很普遍的家常小菜。',
    name_zh2: '炒小青椒鳀魚',
    description_zh2:
      '先在平底鍋中將鳀魚翻炒一下去除腥味，然後放入小青椒與醬油調味醬翻炒，最後加入香油、糖稀、芝麻粒攪拌即可。經常作為小菜食用。',
  },
  {
    id: 348,
    category: '볶음 [Bokkeum]',
    name: '낙지볶음',
    pronounce: 'Nakjibokkeum',
    description:
      '낙지를 적당한 길이로 썰어 고춧가루, 다진 마늘 등을 섞은 양념장에 볶은 음식이다. 양파, 당근 등의 채소를 함께 넣으면 더 맛있고 마지막에 남은 양념으로 밥을 볶아 먹기도 한다.',
    name_en: 'Stir-fried Octopus',
    description_en:
      'Octopus cut intopieces and stir-fried in a spicy sauce madeof red chili powder and minced garlic. Onions, carrots, and other vegetables can be added.Mixing the leftover sauce with rice is a tasty way to end the meal.',
    name_ja: 'テナガダコ炒め',
    description_ja:
      'さっとゆがいたテナガダコを食べやすい大きさに切り、粉唐辛子やにんにくのみじん切りなどを混ぜた薬味で炒めた料理。玉ねぎやにんじんなどの野菜を加えることもある。',
    name_zh: '辣炒章鱼',
    description_zh:
      '章鱼切成段，与用辣椒粉、蒜末等 调成的调味酱一同翻炒即可。可加入洋葱、胡 萝卜等蔬菜，吃完章鱼和蔬菜后，还可用剩下 的调味酱炒饭吃。',
    name_zh2: '辣炒章魚',
    description_zh2: '將章魚切成塊狀後放入辣調味料和蔬菜後炒製而成。味道耐嚼微辣，可以開胃。',
  },
  {
    id: 349,
    category: '볶음 [Bokkeum]',
    name: '낙지철판볶음',
    pronounce: 'Nakjicheolpanbokkeum',
    description:
      '낙지를 적당한 길이로 썰어 고춧가루, 다진 마늘 등을 섞은 양념장과 함께 철판에 볶은 음식이다. 양파, 당근, 등의 채소를 함께 넣으면 더 맛있고, 마지막에 남은 양념으로 밥을 볶아 먹기도 한다.',
    name_en: 'Stir-fried Octopus on Hot Iron Plate',
    description_en:
      'To make this dish, cut octopus into bite-sized pieces and stir-fry in a sauce mixed with red chili powder and minced garlic in an iron griddle. Onion, carrot, and other vegetables may be added according to one’s preference. The sauce is also used to make a rice stir-fry.',
    name_ja: 'テナガダコの鉄板炒め',
    description_ja:
      'テナガダコを食べやすい大きさに切り、粉唐辛子、にんにくのみじん切りなどが入ったたれと一緒に鉄板で炒める料理。玉ねぎ、にんじんなどの野菜を一緒に炒めるとより旨みが出る。シメに残ったたれでご飯を炒めて食べることもある。',
    name_zh: '铁板章鱼',
    description_zh:
      '将章鱼切成适当大小，加入用辣椒粉、蒜末等做成的调味酱一起在铁板上翻炒即可。如果加入洋葱、胡萝卜等蔬菜翻炒则味道更佳，吃完章鱼后剩下的汤汁还可用来炒饭吃。',
    name_zh2: '鐵板章魚',
    description_zh2:
      '先將章魚切成適合的長度，在調味醬中拌入辣椒粉、蒜末，然後在鐵板上將章魚與調味醬一同翻炒即可。如加入洋蔥、胡蘿蔔等蔬菜翻炒則味道更佳，也可以用剩餘的調味醬炒飯吃。',
  },
  {
    id: 350,
    category: '볶음 [Bokkeum]',
    name: '느타리버섯볶음',
    pronounce: 'Neutaribeoseotbokkeum',
    description:
      '데친 느타리버섯을 넣고 당근, 양파 같은 야채들을 채 썰어 함께 볶아 먹는다. 쫄깃하고, 칼로리가 높지 않은 건강한 밥반찬이다.',
    name_en: 'Stir-fried Oyster Mushrooms',
    description_en:
      'Parboiled oyster mushrooms stir-fried with carrot, onion, and other vegetables, this dish is low in calories and has a chewy texture.',
    name_ja: 'ヒラタケ炒め',
    description_ja:
      'ゆがいたヒラタケをにんじん、玉ねぎなどの野菜の千切りと一緒に炒めて食べる。もちっとして低カロリーなヘルシー料理。',
    name_zh: '炒平菇',
    description_zh:
      '将平菇用开水焯一下，再放入切成丝的胡萝卜、洋葱等蔬菜一起翻炒即可。炒平菇口感滑嫩劲道，热量低，是一道健康又美味的小菜。',
    name_zh2: '炒平菇',
    description_zh2:
      '先將胡蘿蔔、洋蔥等蔬菜切絲，再將平菇稍微焯一下，然後將它們放入鍋中翻炒即可。口味勁道，卡路里低，是一種健康食品。',
  },
  {
    id: 351,
    category: '볶음 [Bokkeum]',
    name: '닭갈비',
    pronounce: 'Dakgalbi',
    description:
      '닭고기를 고추장 양념장에 재웠다가 뜨겁게 달군 팬에 기름을 두르고 양배추, 고구마, 당근, 떡과 함께 볶아 먹는 강원도 춘천의 향토 음식이다.',
    name_en: 'Spicy Stir-fried Chicken',
    description_en:
      'Chicken pieces marinated in a gochujang, and stir-fried in a flat grill pan with cabbage, sweet potato, carrots, and tteok (rice cakes). A local dish of Chuncheon city in Gangwon Province.',
    name_ja: 'タッカルビ',
    description_ja:
      '鶏肉をコチュジャンベースの薬味に漬けこみ、キャベツやさつまいも、にんじん、餅などと一緒に油をひいた鉄板で炒める。江原道春川（カンウォンド・チュンチョン）の郷土料理。',
    name_zh: '铁板鸡',
    description_zh:
      '先将鸡肉切成块状，用辣椒酱腌制一 下，煎锅烧热下油后，将腌制好的鸡肉连同圆 白菜、红薯、胡萝卜、年糕等一起翻炒至熟即 可，是江原道春川的乡土饮食。',
    name_zh2: '鐵板雞',
    description_zh2:
      '先將雞肉切成塊狀，用辣椒醬調味料醃製，在燒熱的鍋裡倒入油後與高麗菜、地瓜等蔬菜一起拌炒食用。',
  },
  {
    id: 352,
    category: '볶음 [Bokkeum]',
    name: '닭강정',
    pronounce: 'Dakgangjeong',
    description:
      '닭고기를 튀겨서 매콤한 양념장에 조려 내거나 볶아내는 음식으로, 마지막에 견과류를 고명으로 얹기도 한다.',
    name_en: 'Deep-fried and Braised Chicken',
    description_en:
      'Chicken cut into pieces and deep-fried and braised with a spicy sauce or pan-fried. This dish is sprinkled with nuts before serving.',
    name_ja: '鶏肉の唐揚げ',
    description_ja: '鶏肉を揚げて甘辛のたれで煮たり炒めたもの。ナッツをまぶして食べる場合もある。',
    name_zh: '调味炸鸡丁',
    description_zh: '鸡肉油炸后，放入辣味调味酱炖或烧煮即可，最后可撒上一些坚果做装饰。',
    name_zh2: '調味炸雞丁',
    description_zh2: '把雞肉炸熟後用香辣調味醬燉或炒一下，最後撒點堅果粒點綴。',
  },
  {
    id: 353,
    category: '볶음 [Bokkeum]',
    name: '닭똥집볶음',
    pronounce: 'Dakttongjipbokkeum',
    description:
      '닭똥집에 양파, 마늘, 고추 등 같은 갖은 채소를 넣어 함께 볶아낸 음식으로 술안주로 즐겨 먹는다.',
    name_en: 'Stir-fried Chicken Gizzard',
    description_en:
      'Chicken gizzards stir-fried with onion, garlic, green pepper, and other vegetables. It is a popular snack with alcoholic beverages.',
    name_ja: '砂肝炒め',
    description_ja:
      '砂肝に玉ねぎ、にんにく、唐辛子などの野菜を加えて炒めたもの。酒のつまみとしてよく食べられる。',
    name_zh: '炒鸡胗',
    description_zh: '将鸡胗和洋葱、蒜、辣椒等各种蔬菜一起翻炒即可，是很好的一道下酒菜。',
    name_zh2: '炒雞胗',
    description_zh2: '將雞胗和洋蔥、大蒜、辣椒等各種蔬菜一起爆炒，是非常美味的下酒菜。',
  },
  {
    id: 354,
    category: '볶음 [Bokkeum]',
    name: '닭볶음탕',
    pronounce: 'Dakbokkeumtang',
    description:
      '닭, 감자, 양파와 함께 고춧가루 등의 양념장에 버무려 바특하게 끓여낸 것으로, 찜과 탕의 중간 형태다. 어느 정도 먹고 난 후 남아있는 국물에 밥을 볶아 먹기도 한다.',
    name_en: 'Spicy Braised Chicken',
    description_en:
      'This dish is a stew of chicken, potato, and onion with seasoning. At the end of the meal, any leftover broth is combined with rice and fried.',
    name_ja: '鶏肉の炒め煮',
    description_ja:
      '鶏肉、じゃがいも、たまねぎと一緒に粉唐辛子などのヤンニョムジャン(たれ）に和えてぐつぐつと煮込んだもので、蒸し物とスープの中間といった料理。残ったスープにご飯を入れ、炒めて食べることもある。',
    name_zh: '辣炖鸡块',
    description_zh:
      '将鸡肉、土豆和洋葱用辣椒粉等调 味酱搅拌均匀，加水炖至汤汁略收，比汤稍微 粘稠的程度即可。鸡肉等主要材料吃完后，可 以用剩下的汤汁炒饭吃。',
    name_zh2: '辣燉雞塊',
    description_zh2:
      '辣燉雞塊又稱辣味燉雞或辣燒雞湯。將雞肉和馬鈴薯切成塊狀後放進鍋裡，用辣調味醬攪拌後加水燉至湯汁略收。辣燉雞塊介於雞肉湯與燉雞肉之間，更接近燉雞。',
  },
  {
    id: 355,
    category: '볶음 [Bokkeum]',
    name: '도치두루치기',
    pronounce: 'Dochiduruchigi',
    description:
      '도치는 못생겼지만 비린내가 없고 살이 연하며 뼈도 먹을 수 있는 생선이다. 한입 크기로 썬 도치를 배추김치와 함께 볶다가 갖은 양념을 해서 푹 익힌다.',
    name_en: 'Stir-fried Pacific Spiny Lumpsucker',
    description_en:
      'Pacific spiny lumpsucker may look ugly, but it has tender flesh and bones and no strongfishy smell. For this dish, it is cut into bitesized pieces, stir-fried with kimchi, and seasoned and boiled until well done.',
    name_ja: 'イボダンゴ炒め',
    description_ja:
      'イボダンゴは臭みがなく身が柔らかく、骨まで食べることができる魚。一口大に切ったイボダンゴを白菜キムチと一緒に炒め、味付けをして十分に火を通す。',
    name_zh: '辣炒圆鳍鱼',
    description_zh:
      '圆鳍鱼虽然长相很丑，但没有腥味，肉质软嫩，鱼骨也可食用。将狮子鱼切成方便入口的大小，加入辛奇一起翻炒一会儿，再放入各种调料炒至熟透即可。',
    name_zh2: '辣炒圓鰭魚',
    description_zh2:
      '圓鰭魚長得很醜，但沒有腥味，肉質柔軟，連骨頭都可以食用。把切成一口大小的圓鰭魚跟辛奇一起炒，中間放各種調料後繼續炒熟。',
  },
  {
    id: 356,
    category: '볶음 [Bokkeum]',
    name: '돼지고기두루치기',
    pronounce: 'Dwaejigogiduruchigi',
    description:
      '돼지고기에 갖은 야채와 고추장 양념장을 넣어 국물이 자작하게 볶아낸 음식이다. 가격이 저렴하면서도 포만감을 느낄 수 있어 직장 남성들에게 인기 있는 메뉴다.',
    name_en: 'Stir-fried Pork',
    description_en:
      'This is pork stir-fried with vegetables in a gochujang-based sauce. Both affordable and filling, it is popular among male office workers.',
    name_ja: '豚肉炒め',
    description_ja:
      '豚肉と野菜を、コチュジャンベースのたれで汁気を飛ばしながら炒めた料理。価格もお手頃で満腹感も得られるためサラリーマンに人気の一品。',
    name_zh: '辣炒猪肉',
    description_zh:
      '将猪肉和各种蔬菜以用辣椒酱做成的调味酱一起翻炒至汤汁微微黏稠即可。辣炒猪肉味美、价廉，又有饱腹感，很受男性上班族的青睐。',
    name_zh2: '辣炒豬肉',
    description_zh2:
      '在豬肉中放入各種蔬菜翻炒，用辣椒醬調味，令湯很好地滲入材料之中。它價格低廉，容易給人帶來飽腹感，很受職業男性的青睞。',
  },
  {
    id: 357,
    category: '볶음 [Bokkeum]',
    name: '돼지고기볶음',
    pronounce: 'Dwaejigogibokkeum',
    description:
      '돼지고기를 얇게 저며 생강즙을 넣은 고추장 양념에 재웠다가 볶은 음식이다. 우리나라 사람들이 가장 자주 먹는 점심메뉴 중에 하나이다.',
    name_en: 'Stir-fried Pork',
    description_en:
      'Sliced pork marinated with gochujang (red chili paste) sauce mixed with ginger juice and stir-fried. This is one of the most popular lunch menu items in Korea.',
    name_ja: '豚肉炒め',
    description_ja:
      '薄くスライスした豚肉を生姜汁を入れたコチュジャンベースのたれにつけておき、それを炒めた料理。韓国の人たちがもっともよく食べるとされるランチメニューのひとつ。',
    name_zh: '炒猪肉',
    description_zh:
      '用姜汁和辣椒酱做成调味酱，将切成薄片的猪肉用调味酱腌制片刻，让后放入锅中翻炒至熟即可。炒猪肉是韩国人最常吃的午餐菜肴之一。',
    name_zh2: '炒豬肉',
    description_zh2:
      '將豬肉切成薄片，在辣醬中放入姜汁製成調味醬，用調味醬醃制豬肉片刻，然後翻炒即可。韓國人經常將這道菜作為午餐食用。',
  },
  {
    id: 358,
    category: '볶음 [Bokkeum]',
    name: '돼지고기주물럭',
    pronounce: 'DoejigogiJumulleok',
    description:
      '돼지고기에 고추장을 비롯한 갖은 양념을 넣고 잘 주물러 숙성시켜 굽거나 볶은 음식이다. 돼지고기 부위는 앞다리, 뒷다리, 삼겹살, 목살 등을 사용하며 마늘, 파, 부추 등을 곁들이면 좋다.',
    name_en: 'Spicy Stir-fried Pork',
    description_en:
      'This is a dish of grilled or stir-fried pork that has been rubbed with gochujang (red chili paste) and other spices by hand and left to be marinated. Pork parts, such as shoulder, leg, belly, and neck, are used. The dish can also have added garlic, green onion, and chives.',
    name_ja: '豚肉コチュジャン炒め',
    description_ja:
      '豚肉をコチュジャンベースのたれで揉み込んで熟成させる。それを焼いたり炒めたりして食べるもの。豚肉は前足、後ろ足、バラ肉、肩ロースなどを使う。にんにく、ねぎ、ニラなどを添えるとよりいっそう美味しくなる。',
    name_zh: '风味炒猪肉',
    description_zh:
      '在猪肉中放入辣椒酱等各种调料，用手揉搓使其入味，然后放在火上煎烤或翻炒而成。主要使用猪前腿肉、后腿肉、五花肉、猪颈肉等。搭配蒜、葱、韭菜等味道更佳。',
    name_zh2: '調味炒豬肉',
    description_zh2:
      '在豬肉中放入辣椒醬等各種調味料，用手揉搓使其入味，然後放在火上煎烤或炒製而成。主要使用的豬肉部位為前腿、後腿、五花肉、豬肩肉等。搭配大蒜、蔥、韭菜等更好吃。',
  },
  {
    id: 359,
    category: '볶음 [Bokkeum]',
    name: '돼지껍데기볶음',
    pronounce: 'Dwaejikkeopdegibokkeum',
    description:
      '돼지 껍데기는 돼지의 껍데기 부분으로, 삶아서 매콤하게 볶아 먹는다. 식감이 쫄깃하고, 콜라겐을 많이 함유하고 있어, 피부 미용과 다이어트에 효과적이다.',
    name_en: 'Stir-fried Pork Rind',
    description_en:
      'This spicy dish is made by boiling and stir-frying pork rinds, which are chewy and a rich source of collagen, making them good for skin health and weight loss.',
    name_ja: '豚皮炒め',
    description_ja:
      '豚の皮を茹でて辛めに炒める。歯ごたえがあり、コラーゲンが豊富に含まれていて、肌の美容やダイエットにいいと言われる。',
    name_zh: '辣炒猪皮',
    description_zh:
      '将猪皮煮熟后加入辣椒酱翻炒至熟即可。辣炒猪皮味道香辣，口感脆嫩有嚼劲，而且富含胶原蛋白，有助于美容养颜和减肥。',
    name_zh2: '辣炒豬皮',
    description_zh2:
      '將部分豬皮煮熟之後，炒至香辣。它口感勁道，富含膠原蛋白，對皮膚美容與減肥十分有效。',
  },
  {
    id: 360,
    category: '볶음 [Bokkeum]',
    name: '두부김치',
    pronounce: 'Dubukimchi',
    description:
      '잘 익은 김치에 돼지고기 목살이나 삼겹살을 얇게 썰어 넣고 볶은 뒤 따뜻하게 데운 두부를 곁들여 먹는 음식이다.',
    name_en: 'Bean Curd with Stir-fried Kimchi',
    description_en:
      'Wellaged sour kimchi stir-fried with thinly-sliced pork shoulder or belly and served with warm bean curd.',
    name_ja: '豆腐キムチ',
    description_ja:
      '豚の肩ロースやバラ肉を薄切りにし、熟成したキムチと一緒に炒め、アツアツの豆腐に添えて食べる料理。',
    name_zh: '炒辛奇豆腐',
    description_zh: '将发酵完熟的辛奇和猪颈肉或五花肉片儿一同翻炒，然后配着热水焯过的豆腐一起吃。',
    name_zh2: '炒辛奇豆腐',
    description_zh2: '放入豬肉和辛奇炒熟後，搭配燙熱的豆腐食用。',
  },
  {
    id: 361,
    category: '볶음 [Bokkeum]',
    name: '떡볶이',
    pronounce: 'Tteokbokki',
    description:
      '한입 크기로 썬 가래떡이나 가늘게 뽑은 떡볶이용 떡에 채소, 어묵을 함께 넣고 고추장 양념으로 볶은 음식이다.',
    name_en: 'Stir-fried Rice Cake',
    description_en:
      'Sliced rice cake bar (garaetteok) or thin rice cake sticks(Tteokbokkitteok) stir-fried in a spicy gochujang sauce with vegetables and fish cakes.',
    name_ja: 'トッポッキ',
    description_ja:
      '棒状の餅を一口大に切ったものかトッポッキ用の細い餅を、野菜や練り物と一緒にコチュジャンベースの薬味で煮た料理。',
    name_zh: '辣炒年糕',
    description_zh:
      '将长条的年糕切成段或者用炒年 糕专用的年糕加入各种蔬菜和鱼饼，用辣味 调味酱一同炒熟即可。',
    name_zh2: '辣炒年糕',
    description_zh2:
      '放入細長的條狀年糕或是適合入口的塊狀年糕以及多種蔬菜後，用辣椒醬調味料炒製的甜辣美味的辣炒年糕。',
  },
  {
    id: 362,
    category: '볶음 [Bokkeum]',
    name: '라볶이',
    pronounce: 'Rabokki',
    description:
      '떡과 채소, 어묵을 넣고 고추장 양념에 볶는 떡볶이에 라면을 함께 넣고 끓이는 음식이다. 어린이와 여성들이 간식으로 자주 먹는다.',
    name_en: 'Stir-fried Instant Noodle',
    description_en:
      'This dish is tteokbokki with ramen noodles. Tteokbokki is a spicy dish made with rice cake, vegetables, and fish cake, all stir-fried together in a gochujang (red chili paste) sauce. It is a popular snack favored by children and women.',
    name_ja: 'ラボキ',
    description_ja:
      '餅と野菜、かまぼこを入れてコチュジャンベースのたれで炒めたトッポッキに、インスタントラーメンを加えて煮た料理。子どもや女性のおやつとしてよく食べられる。',
    name_zh: '拉面辣炒年糕',
    description_zh:
      '用年糕、蔬菜和鱼饼加入辣椒酱做成辣炒年糕，再放入泡面一起熬煮至熟，是儿童和女性尤其喜爱的美味小吃。',
    name_zh2: '拉麵辣炒年糕',
    description_zh2:
      '用辣醬調味的炒年糕、蔬菜和魚餅、速食麵一起煮，是一道兒童和婦女們非常愛吃的加餐。',
  },
  {
    id: 363,
    category: '볶음 [Bokkeum]',
    name: '마늘종볶음',
    pronounce: 'Maneuljongbokkeum',
    description:
      '마늘종은 마늘의 꽃줄기를 일컫는다. 마늘종을 적당히 잘라 끓는 물에 데친 후, 소금이나 간장으로 간을 하여 볶은 음식이다. 보리새우와 함께 볶으면 맛과 색감이 좋다.',
    name_en: 'Stir-fried Garlic Scape',
    description_en:
      'Garlic scapes are the flowering stems of garlic plants. This dish is made by parboiling garlic scapes cut into pieces and then stir-frying them with salt or soy sauce. If opossum shrimp are stir-fried together, the dish tastes and looks better.',
    name_ja: 'にんにくの芽炒め',
    description_ja:
      'にんにくの芽はにんにくの花茎の部分をいう。にんにくの芽を適当に切って熱湯でさっとゆがき、塩や醤油で味を調えて炒めたもの。クルマエビと一緒に炒めると、味や色がさらに引き立つ。',
    name_zh: '炒蒜苔',
    description_zh:
      '蒜苔是指蒜的花茎。将蒜苔切成适当大小，用开水焯一下后，用盐或酱油调味翻炒而成。与竹节虾一起翻炒，味道和色泽更佳。',
    name_zh2: '炒蒜薹',
    description_zh2:
      '蒜薹是指大蒜的花莖。將蒜薹切成適當大小，用開水燙一下下後以用鹽或醬油調味炒製而成。與竹節蝦一起炒會讓味道和色澤更好。',
  },
  {
    id: 364,
    category: '볶음 [Bokkeum]',
    name: '마른새우볶음',
    pronounce: 'Mareunsaeubokkeum',
    description:
      '뜨겁게 달군 팬에 마른 새우와 간장, 설탕, 참기름 등을 넣어 볶는 마른 반찬이다. 마늘종이나 꽈리고추를 넣어 볶기도 한다.',
    name_en: 'Stir-fried Dried Shrimp',
    description_en:
      'Dried shrimp stir-fried and mixed with soy sauce, sugar, and sesame oil in a preheated pan. Garlic scapes or shishito pepper can be added as well, according to one’s taste.',
    name_ja: '干し海老炒め',
    description_ja:
      '熱したフライパンで干し海老、カンジャン、砂糖、ごま油などを入れて炒めた料理。にんにくの芽や青唐辛子を入れて炒める場合もある。',
    name_zh: '炒干虾',
    description_zh:
      '将干虾、酱油、白糖、香油等材料放入烧热的平底锅中翻炒即可。炒干虾是一道干菜，也可以加入蒜苗或尖辣椒一起翻炒。',
    name_zh2: '炒乾蝦',
    description_zh2:
      '先將平底鍋燒熱，然後放入幹蝦、醬油、白糖、香油等翻炒即可，它是一道乾菜。也可以加入蒜苗或尖椒翻炒。',
  },
  {
    id: 365,
    category: '볶음 [Bokkeum]',
    name: '매운닭발볶음',
    pronounce: 'Maeundakbalbokkeum',
    description:
      '마늘, 대파, 생강, 월계수 잎 등의 향신채를 넣고 삶은 닭발에 고추장, 고춧가루, 다진 마늘, 물엿, 맛술을 넣은 양념장을 넣고 매콤하게 볶는다. 콜라겐이 많아 여성들이 좋아한다.',
    name_en: "Spicy Stir-fried Chicken's Feet",
    description_en:
      'Chicken feet boiled with garlic, green onion, ginger, and bay leaves and stir-fried with a mixture of gochujang (red chili paste), red chili powder, chopped garlic, syrup, and rice wine. Chicken feet is favored especially by women as it has a high content of collagen, a type of proten known to be good for skin health.',
    name_ja: '辛味鶏足炒め',
    description_ja:
      'にんにく、ねぎ、生姜、月桂樹の葉などの香辛料を入れて茹でた鶏足に、コチュジャン、粉唐辛子、みじん切りしたにんにく、水あめ、料理酒などの合わせ調味料を加えて辛く味付けして炒めた料理。コラーゲンが豊富で女性に人気。',
    name_zh: '辣炒鸡爪',
    description_zh:
      '将鸡爪和葱、姜、蒜、月桂树叶等香料一起放入水中煮熟，捞出沥干水分后，加入辣椒酱、辣椒粉、蒜末、糖稀、料酒等调料翻炒即可。鸡爪富含胶原蛋白，是女性很喜爱的一道菜。',
    name_zh2: '辣炒雞爪',
    description_zh2:
      '將雞爪跟大蒜、大蔥、生薑、香葉等各種香料一起煮熟，然後把煮熟的雞爪和辣椒醬、辣椒粉、蒜蓉、糖稀、料酒等一起爆炒即可。 雞爪富含膠原蛋白，是備受女士們喜愛的美食。',
  },
  {
    id: 366,
    category: '볶음 [Bokkeum]',
    name: '머위나물볶음',
    pronounce: 'Meowinamulbokkeum',
    description:
      '머위는 줄기와 잎을 분리해 삶아서 사용한다. 다진 마늘, 소금을 넣어서 볶아주는데, 머위 나물은 들깨와 들기름이 잘 어울려서 같이 넣고 볶아줘야 부드럽고, 고소한 맛을 낼 수 있다.',
    name_en: 'Stir-fried Butterbur',
    description_en:
      'To prepare this dish, clean butterbur by separating its stems, then boil and stir-fry with minced garlic and salt. Butterbur goes well with perilla seeds and perilla oil and becomes soft and tasty when cooked.',
    name_ja: 'フキナムル炒め',
    description_ja:
      'フキは茎と葉を分けて茹でて使用する。にんにくのみじん切り、塩を加えて炒める。フキナムルはエゴマとエゴマ油がよく合い、一緒に炒めるとやわらかく風味のある味に仕上がる。',
    name_zh: '炒蜂斗菜',
    description_zh:
      '将蜂斗菜的茎叶分别摘下来煮好备用，再加入蒜末、盐翻炒即可。蜂斗菜与紫苏、苏籽油是极好的搭配，放入这些材料一起翻炒，味道更佳醇香。',
    name_zh2: '炒蜂斗菜',
    description_zh2:
      '將蜂斗菜的莖葉分別摘好，煮好備用。加入蒜末、鹽翻炒即可。蜂斗菜與紫蘇子、蘇籽油是極好的搭配，放入這些材料翻炒，味道更佳柔和香濃。',
  },
  {
    id: 367,
    category: '볶음 [Bokkeum]',
    name: '물오징어불고기',
    pronounce: 'Murojingeobulgogi',
    description:
      '오징어의 몸통 안쪽에 사선으로 칼집을 넣고 썰어 고추장 양념장에 재워다가 뜨거운 팬에 볶거나 구워 낸 음식이다. 껍질 쪽에 칼집을 넣으면 둥글게 말리지 않는다.',
    name_en: 'Squid Bulgogi',
    description_en:
      'This dish features sliced squid marinated in a gochujang sauce and stir-fried or grilled. The squid is prepared bymaking cuts diagonally inside the squid’s body to prevent it from curling inside out when cooked.',
    name_ja: 'イカのプルゴギ',
    description_ja:
      'イカの内側にななめに切れ目を入れて、コチュジャンベースのたれに漬け込み、熱したフライパンで炒めたり焼いたりする料理。皮のほうに切れ目を入れると丸まらない。',
    name_zh: '烤鱿鱼',
    description_zh:
      '在鱿鱼的躯干部分划出斜线的刀花 后，放入用辣椒酱调制的调味酱中腌制一会 儿，然后取出来热炒或煎烤至熟。在外皮上划 上刀花可防止鱿鱼卷曲。',
    name_zh2: '烤魷魚',
    description_zh2:
      '在魷魚內側弄出很多斜向刀紋，切成適當大小，用辣椒醬和調味汁進行醃製，然後用熱平底鍋煎炒或烤製。要注意，在魷魚外側劃斜線則不會打卷兒。',
  },
  {
    id: 368,
    category: '볶음 [Bokkeum]',
    name: '미역줄기볶음',
    pronounce: 'Miyeokjulgibokkeum',
    description:
      '미역줄기는 미역의 줄기를 얇고 길게 쪼개 놓은 것이다. 물에 씻어 소금기를 뺀 미역줄기를 팬에 볶아서 만드는데, 저렴한 가격과 꼬들꼬들한 맛이 장점이다.',
    name_en: 'Stir-fried Seaweed Stems',
    description_en:
      'This is desalinated brown seaweed stems stir-fried in a pan. The affordability and chewy texture of this food makes it an ideal side dish.',
    name_ja: '茎ワカメ炒め',
    description_ja:
      '茎ワカメはワカメの茎を薄く長くさいたもの。水ですすいで塩を落とした茎ワカメをフライパンで炒める。手頃な価格と食感がいい。',
    name_zh: '炒海带丝',
    description_zh:
      '先将海带茎撕成薄薄的、长长的形状，用清水洗去上面的盐分，然后将控完水的海带茎放入平底锅中翻炒至熟即可。炒海带茎味美价廉，口感尤其脆爽。',
    name_zh2: '炒海帶絲',
    description_zh2:
      '這裡需要先將普通的海帶頸撕成薄薄的、長長的形狀，然後用水清洗海帶莖，去除其中的鹽分，然後用平底鍋進行翻炒。價格低廉、口味勁道是它的優點。',
  },
  {
    id: 369,
    category: '볶음 [Bokkeum]',
    name: '소시지야채볶음',
    pronounce: 'Sosijiyachaebokkeum',
    description:
      '양파, 당근 따위의 채소와 소시지를 넣고 기름에 볶은 요리이다. 보통 작은 크기의 소시지를 사용하며 케첩을 넣어 맛을 내기도 한다. 밥반찬이나 술안주로 즐겨 먹는다.',
    name_en: 'Stir-fried Sausage with Vegetables',
    description_en:
      'Stir-fried sausage with vegetables, such as onion and carrot. Bite-sized sausages are usually used and ketchup can be added to give flavor. The dish is enjoyed as a side dish to rice or as a drink accompaniment.',
    name_ja: 'ソーセージの野菜炒め',
    description_ja:
      '玉ねぎ、にんじんなどの野菜をソーセージと一緒に油で炒めたもの。通常、一口大のソーセージを使い、ケチャップで味を付けることもある。おかずとしてももちろん、酒のつまみにも最高。',
    name_zh: '蔬菜炒香肠',
    description_zh:
      '热锅中倒油，将洋葱、胡萝卜等蔬菜和香肠放入锅中一起翻炒而成。一般会选择小一些的香肠，也可以用番茄酱调味。作为下饭菜和下酒菜都很受欢迎。',
    name_zh2: '蔬菜炒香腸',
    description_zh2:
      '熱鍋中倒入食用油，將洋蔥、胡蘿蔔等蔬菜和香腸放入鍋中一起翻炒。一般使用維也納香腸，也可用番茄醬調味。作為下飯菜和下酒菜都很受歡迎。',
  },
  {
    id: 370,
    category: '볶음 [Bokkeum]',
    name: '순대볶음',
    pronounce: 'Sundaebokkeum',
    description:
      '식용유를 두른 프라이팬에 가래떡, 양배추, 양파 등을 넣어 볶다가 순대와 양념을 넣고 볶아 낸다. 양념의 마지막에 들깻가루나 깻잎을 넣으면 순대의 누린내를 제거할 수 있다.',
    name_en: 'Stir-fried Blood Sausage',
    description_en:
      'This dish consists of sundae (pork intestines stuffed with glass noodles, vegetables, sweet rice, and coagulated pig’s blood) stir-fried with garaetteok (cylinder-shaped rice cake), cabbage, and onion and seasoned with sauce. Perilla seed powder or perilla leaves can be added to get rid of the meat smell.',
    name_ja: 'スンデ炒め',
    description_ja:
      '油をひいたフライパンに餅、キャベツ、たまねぎなどを入れて炒め、スンデと薬味を加えてさらに炒める。薬味としてエゴマの粉やエゴマの葉を入れるとスンデの臭みを取ることができる。',
    name_zh: '辣炒血肠',
    description_zh:
      '在烧热的平底锅中倒入食用油，放 入长条糕、卷心菜、洋葱等材料翻炒，稍后再 放入血肠和调料一起翻炒。起锅前加一些黑芝 麻粉或苏子叶可消除血肠的膻味儿。',
    name_zh2: '辣炒血腸',
    description_zh2:
      '在平底鍋裡倒點食用油，放入米糕條、圓白菜、洋蔥等，再放入血腸與調料一起翻炒。最後撒點野蘇子粉或蘇子葉，就能清除血腸的腥味。',
  },
  {
    id: 371,
    category: '볶음 [Bokkeum]',
    name: '애호박볶음',
    pronounce: 'Aehobakbokkeum',
    description:
      '기름을 두른 팬에 애호박과 다진 마늘, 파, 새우젓을 넣고 볶은 나물이다. 여름철이 제철로, 맛뿐 아니라 비타민 A와 C가 풍부해 소화 흡수도 잘된다.',
    name_en: 'Stir-fried Zucchini',
    description_en:
      'Sliced zucchini stir-fried with chopped garlic and green onion and seasoned with salted shrimp in an oiled pan. A vegetable that reaches its peak in summer, zucchini is tasty and nutritious, as it is rich in vitamins A and C. It is also good for digestion.',
    name_ja: 'ズッキーニ炒め',
    description_ja:
      '油をひいたフライパンにズッキーニとにんにくのみじん切り、ねぎ、アミの塩辛を入れて炒めたナムル。夏が旬で、味が良いだけでなくビタミンAとCが豊富に含まれており、消化吸収にも優れている。',
    name_zh: '炒西葫芦',
    description_zh:
      '热锅中倒入食用油，将西葫芦和蒜末、葱、虾酱等放入锅中一起翻炒即可。炒西葫芦是一道夏季菜肴，不仅味道鲜美，而且富含维生素A和维生素C，便于消化和吸收。',
    name_zh2: '炒西葫蘆',
    description_zh2:
      '鍋中放油，倒入西葫蘆、蒜末、蔥、蝦醬翻炒即可。這道菜適合夏季食用，它不僅美味，還富含維生素A與維生素C，便於消化、吸收。',
  },
  {
    id: 372,
    category: '볶음 [Bokkeum]',
    name: '양념치킨',
    pronounce: 'Yangnyeom Chicken',
    description:
      '적당한 크기로 자른 닭고기를 밑간하여 식용유에 튀겨 간장이나 고추장 등으로 만든 양념에 버무린 음식이다. 순하고 부드러우며 매콤한 맛으로 간식이나 안주로 즐겨 먹는다.',
    name_en: 'Seasoned Fried Chicken',
    description_en:
      'This dish is seasoned chicken cut into pieces, deep-fried, and mixed with soy sauce, gochujang, or other sauces. It has a mild yet spicy taste that makes it ideal for a snack, with or without alcoholic beverages.',
    name_ja: 'ヤンニョムチキン',
    description_ja:
      '適当な大きさに切った鶏肉に下味を付け、油で揚げてから醤油やコチュジャンなどで作ったヤンニョム（たれ）をからめた料理。柔らかくピリ辛の味が、おやつやお酒のつまみとしてよく好まれる。',
    name_zh: '调味炸鸡',
    description_zh:
      '将鸡胸肉切成方便入口的块状，用 盐腌一下，然后油炸，最后捞出来浇上用酱油 或辣椒酱等调制的调味酱搅拌即可。 味道香 醇鲜辣，是很受喜爱的零食和下酒菜。',
    name_zh2: '調味炸雞',
    description_zh2:
      '把剁成適當大小的雞塊兒提前醃製好，再用食用油炸熟後跟醬油或辣椒醬等調料拌勻。調味炸雞肉質柔軟，帶著香辣味，是非常好的零食和下酒菜。',
  },
  {
    id: 373,
    category: '볶음 [Bokkeum]',
    name: '어묵볶음',
    pronounce: 'Eomukbokkeum',
    description:
      '어묵과 양파를 간장 양념장에 볶아 먹는 반찬이다. 백반을 파는 식당에서 기본 반찬으로 자주 나올 정도로 한국인에게 인기 있는 반찬이다.',
    name_en: 'Stir-fried Fishcake',
    description_en:
      'Fishcakes stir-fried with onion in soy sauce. This is one of the most popular and common side dishes in Korean restaurants that serve set menus consisting of rice, soups, and side dishes.',
    name_ja: '練り物炒め',
    description_ja:
      '練り物と玉ねぎを醤油ベースのたれで炒めた料理。定食を出す食堂の基本惣菜としてよく登場するほど韓国人に人気。',
    name_zh: '炒鱼糕',
    description_zh:
      '将鱼糕和洋葱加入用酱油做成的调味料一起翻炒即可。在以家常套餐为主饭馆儿里，炒鱼糕可以说是基本小菜，很受韩国人的欢迎。',
    name_zh2: '炒魚糕',
    description_zh2:
      '在魚丸與洋蔥中放入醬油調味料，翻炒即可。在以家常套餐為主的飯店中，作為一種經常出現的基本小菜，它很受韓國人的歡迎。',
  },
  {
    id: 374,
    category: '볶음 [Bokkeum]',
    name: '오리주물럭',
    pronounce: 'Orijumulleok',
    description:
      '한입 크기로 썰어 준비한 오리고기를 고추장 양념과 함께 주물러 불에 굽는다. 고기와 양념을 손으로 주물럭거린다고 해서 ‘주물럭’이라는 이름이 붙여졌다.',
    name_en: 'Spicy Stir-fried Duck',
    description_en:
      'This is a dish of grilled duck that has been cut into bite-sized pieces and seasoned with gochujang. The word jumulleok implies that the duck meat has been rubbed with sauce by hand.',
    name_ja: '鴨肉コチュジャン炒め',
    description_ja:
      '一口大に切った鴨肉をコチュジャンベースのたれで揉みこみ、直火で焼く。肉とたれを手で揉むことから、韓国語では、「チュムルロク（揉む）」という名前がついている。',
    name_zh: '调味炒鸭肉',
    description_zh:
      '将鸭肉切成方便入口的大小，放 入用辣椒酱调制的调味酱，将鸭肉和调味酱 用手揉搓使其入味，然后放置火上煎烤。',
    name_zh2: '調味炒鴨肉',
    description_zh2:
      '把鴨肉切成一口大小，放入辣椒醬調料一起拌勻後烤製。調味炒鴨肉在調味的時候需要用手不斷抓鴨肉，以便入味。',
  },
  {
    id: 375,
    category: '볶음 [Bokkeum]',
    name: '오삼불고기',
    pronounce: 'Osambulgogi',
    description:
      '오징어와 돼지고기 삼겹살에 대파, 양파를 넣고 고추장 양념으로 버무려 볶은 요리다. 오징어와 삼겹살은 각자 양념하여 볶은 후 익으면 혼합하여 채소와 함께 뒤적여 접시에 담는다.',
    name_en: 'Squid and Pork Belly Bulgogi',
    description_en:
      'This is squid and pork belly stir-fried with onion and green onion and seasoned with gochujang. The squid and pork belly are stir-fried separately but mixed together withvegetables before serving.',
    name_ja: 'イカとサムギョプサルのプルゴギ',
    description_ja:
      'イカと豚肉のサムギョプサルに長ねぎ、たまねぎを加えコチュジャンベースのたれをからめて炒めた料理。イカとサムギョプサルはそれぞれ味付けをしてから別々に炒め、火が通ったら野菜と一緒に混ぜ合わせて盛り付ける。',
    name_zh: '烤鱿鱼五花肉',
    description_zh:
      '鱿鱼和五花肉中加入大葱、洋 葱和辣椒酱搅拌后放入锅中翻勺即可。鱿鱼 和五花肉分开加入调料搅拌后，再加入蔬菜 一起放油锅里炒，炒熟后翻勺即可装盘。',
    name_zh2: '烤魷魚五花肉',
    description_zh2:
      '魷魚和五花肉裡加入大蔥和洋蔥，再放點辣椒醬拌勻後炒熟。魷魚和五花肉可以分別用調料拌勻後炒，熟了以後再混合起來跟蔬菜一起翻炒端上桌。',
  },
  {
    id: 376,
    category: '볶음 [Bokkeum]',
    name: '오징어두루치기',
    pronounce: 'Ojingeoduruchigi',
    description:
      '오징어와 호박, 양파 등을 넣고 국물이 조금 있는 상태로 볶듯이 끓인 음식. 고춧가루, 마늘로 양념한다. 밥반찬과 술안주로 즐겨 먹는다.',
    name_en: 'Stir-fried Squid',
    description_en:
      'Squid braised and boiled with zucchini and onion in a sauce made with red chili powder and garlic. The dish is enjoyed as a side dish to rice or as a drink accompaniment.',
    name_ja: 'イカの野菜炒め',
    description_ja:
      'イカやズッキーニ、玉ねぎなどを入れて少し汁気を残すように炒めたもので、粉唐辛子、にんにくで味を調える。おかずや酒のつまみとしてもよく合う。',
    name_zh: '辣炒鱿鱼',
    description_zh:
      '放入鱿鱼、西葫芦和洋葱等，在稍微带汤汁的情况下翻炒煮而成。用辣椒粉和蒜调味。作为下饭菜和下酒菜都很受欢迎。',
    name_zh2: '辣炒魷魚',
    description_zh2:
      '放入魷魚、南瓜、洋蔥等，在稍微有點湯汁的狀態下翻炒而成。用辣椒粉和大蒜調味，作為下飯菜和下酒菜都很受歡迎。',
  },
  {
    id: 377,
    category: '볶음 [Bokkeum]',
    name: '오징어볶음',
    pronounce: 'Ojingeobokkeum',
    description:
      '살짝 데친 오징어에 양파, 당근, 양배추 등을 넣고 고춧가루와 고추장을 넣은 매운 양념장에 볶은 음식이다.',
    name_en: 'Stir-fried Squid',
    description_en:
      'Squid stir-fried with onions, carrots, and cabbage in a spicy mixture of gochujang and red chili powder.',
    name_ja: 'イカ炒め',
    description_ja:
      'さっとゆがいたイカを、玉ねぎやにんじん、キャベツなどと一緒に、粉唐辛子とコチュジャンを入れた辛口の薬味で炒めた料理。',
    name_zh: '辣炒鱿鱼',
    description_zh: '将鱿鱼和洋葱、胡萝卜、圆白菜等 蔬菜用辣椒酱调成的调味酱炒制即可。',
    name_zh2: '辣炒魷魚',
    description_zh2:
      '放入鱿魚和洋蔥、胡蘿蔔、高麗菜等後，用加入辣椒粉和辣椒醬的辣調味醬炒製。辣炒鱿魚無需太多的食材，而且烹飪過程也很簡單，適合沒有味口時簡單烹調的風味小菜。',
  },
  {
    id: 378,
    category: '볶음 [Bokkeum]',
    name: '오징어채볶음',
    pronounce: 'Ojingeochaebokkeum',
    description:
      '오징어채는 오징어에 설탕, 소금 등을 첨가하여 건조시킨 뒤 잘게 자른 것으로 진미채 라고도 한다. 기름을 두른 팬에 고추장 양념을 넣어 끓으면, 오징어채를 넣어 볶는다.',
    name_en: 'Stir-fried Dried Squid Strips',
    description_en:
      'Ojingeochae is made by seasoning squid with sugar and salt and then shredding it after it is dried. Also called “jinmichae,” ojingeochae is made by adding shredded squid to a boiling gochujang (red chili paste) sauce in an oily pan.',
    name_ja: '干しイカ炒め',
    description_ja:
      '千切りしたイカは、イカに砂糖、塩などをまぶして乾燥させた後、小さく切ったものを使い、チンミチェと呼ばれることもある。油をひいたフライパンにコチュジャンベースのたれを入れて一煮立ちさせ、干しイカを入れて炒める。',
    name_zh: '炒干鱿鱼丝',
    description_zh:
      '干鱿鱼丝又叫做“真味菜”，是将鱿鱼用白糖、盐等调味后晒干，再将其切成细丝。热锅中倒入适量食用油，将辣椒酱做成的调味酱倒入锅中熬煮，煮沸后再放入干鱿鱼丝翻炒至熟即可。',
    name_zh2: '炒乾魷魚絲',
    description_zh2:
      '在魷魚中放入白糖、鹽等調料，等其乾燥以後切成細絲，也被稱為「真味菜」。鍋中放油，先倒入辣椒醬調味醬煮沸，再倒入魷魚絲翻炒即可。',
  },
  {
    id: 379,
    category: '볶음 [Bokkeum]',
    name: '우삼겹숙주볶음',
    pronounce: 'Usamgyeopsukjubokkeum',
    description:
      '소의 가슴에서 배 아래쪽 삼겹양지살을 우삼겹이라 한다. 지방과 붉은 살이 층을 이루고 있어 진하고 부드럽다. 우삼겹, 숙주를 넣고 볶다가 소금, 후추, 굴 소스로 간하여 만든 음식이다.',
    name_en: 'Stir-fried Beef Plate with Mung Bean Sprouts',
    description_en:
      'Usamgyeop refers to a beef part between the chest and the lower belly. The fat-streaked red meat is tender and flavorful. This dish is made by stir-frying beef and bean sprouts and then seasoned with salt, pepper, and oyster sauce.',
    name_ja: 'もやしと牛バラの炒めもの',
    description_ja:
      '牛バラとは牛のお腹まわりの肉のことをいう。脂肪と赤身が層になっており、特有の旨味が強くてやわらかい。牛バラともやしを炒め、塩、こしょう、オイスターソースで味を調える。',
    name_zh: '绿豆芽炒牛五花肉',
    description_zh:
      '牛的胸部至腹下胸骨肉称为牛五花肉。因其脂肪与瘦肉分布均匀，味道浓醇细腻。和绿豆芽一起翻炒后，用盐、胡椒、蚝油调味而成。',
    name_zh2: '綠豆芽炒牛五花',
    description_zh2:
      '牛的胸部至腹下胸骨肉被稱為牛五花肉，因脂肪與紅肉分布均勻，味道濃醇細膩。和綠豆芽一起翻炒後， 用鹽、胡椒、蠔油調味即可。',
  },
  {
    id: 380,
    category: '볶음 [Bokkeum]',
    name: '잔멸치볶음',
    pronounce: 'Janmyeolchibokkeum',
    description:
      '먼저 비린내를 제거하기 위해 잔멸치를 식용유를 두른 팬에 볶다가 물엿, 간장, 설탕을 넣어 볶아준다. 바삭하고, 달콤한 맛이 나며, 칼슘이 많아 건강에도 좋다.',
    name_en: 'Stir-fried Small Dried Anchovies',
    description_en:
      'This sweet, crispy, and calcium-rich side dish is made by first pan-frying baby anchovies in an oiled pan to remove the fishy smell and taste and then stir-frying in a mixture of syrup, soy sauce, and sugar.',
    name_ja: 'ざこ炒め',
    description_ja:
      'まず、生臭さをとるため、食用油をひいたフライパンでざこを炒め、そこに水あめ、カンジャン、砂糖を入れて炒める。サクッとして甘みがあり、カルシウムが豊富で健康にもいい。',
    name_zh: '炒小鳀鱼',
    description_zh:
      '热锅中倒入适量食用油，将小鳀鱼放入锅中翻炒以去除腥味，然后再加入糖稀、酱油、白糖继续翻炒。这道小菜味道酥脆、香甜，而且富含钙质，有益于健康。',
    name_zh2: '炒小鳀魚',
    description_zh2:
      '首先在鍋中放入食用油翻炒細海蜒以去除腥味，然後再加入糖稀、醬油、白糖繼續翻炒。它味道脆爽、香甜，富含鈣質，有益於健康。',
  },
  {
    id: 381,
    category: '볶음 [Bokkeum]',
    name: '제육볶음',
    pronounce: 'Jeyukbokkeum',
    description:
      '돼지고기를 얇게 저며 생강즙을 넣은 고추장 양념에 재웠다가 볶은 음식이다.기호에 따라 양파, 당근, 깻잎, 양배추 등을 넣기도 한다.',
    name_en: 'Stir-fried Pork',
    description_en:
      'Thinly sliced pork marinated in spicy ginger-gochujang and stir-fried with onion, carrots, perilla leaves, or abbage. Ingredients vary according to taste.',
    name_ja: '豚肉炒め',
    description_ja:
      '細切りにした豚肉を、しょうが汁を加えたコチュジャンベースの薬味に漬け込み、炒めた料理。好みで玉ねぎやにんじん、ごまの葉、キャベツなどを加える。',
    name_zh: '辣炒猪肉',
    description_zh:
      '将猪肉切成薄片，用加入姜汁的辣 椒酱腌制一段时间后下锅翻炒，可根据个人喜 好加入洋葱、胡萝卜、苏子叶、圆白菜等。',
    name_zh2: '辣炒豬肉',
    description_zh2:
      '將豬肉切成薄片用辣調味醬攪拌後拌炒而成的料理，又稱燒豬肉。根據喜好可以放入洋蔥、高麗菜等。',
  },
  {
    id: 382,
    category: '볶음 [Bokkeum]',
    name: '주꾸미볶음',
    pronounce: 'Jukkumibokkeum',
    description:
      '손질한 주꾸미를 적당한 크기로 잘라 채소와 고추장 양념을 넣고 볶다가 참기름을 두른다. 주꾸미는 오래 볶으면 물이 생기고 질겨지므로 센 불에서 간이 밸만큼 살짝 볶는다.',
    name_en: 'Stir-fried Webfoot Octopus',
    description_en:
      'This is webfoot octopus stir-fried with vegetables and mixed with gochujang sauce and sesame oil. The octopus is cut into bite-sized pieces and stir-fried quickly over high heat in order to prevent the meat from becoming tough and keep the juices inside.',
    name_ja: 'イイダコ炒め',
    description_ja:
      'イイダコを適当な大きさに切り、野菜とコチュジャンベースのたれに加えて炒め、ごま油をかける。イイダコは炒めすぎると水分が出て固くなるので、強火でたれをからめるようにサッと炒める。',
    name_zh: '辣炒八爪鱼',
    description_zh:
      '将收拾好的八爪鱼切成段，加入 各种蔬菜和辣椒调味酱翻炒，起锅前倒入几 滴香油。八爪鱼炒久了会出水，肉质变硬，因 此要猛火快炒，只要入味即可。',
    name_zh2: '辣炒八爪魚',
    description_zh2:
      '把清理好的八爪魚切成適當大小，放入蔬菜和辣椒醬調料一起炒製而成，中間撒點香油。八爪魚炒的時間長了會出水、變硬，所以用大火稍微炒一下，入味即可關火。',
  },
  {
    id: 383,
    category: '볶음 [Bokkeum]',
    name: '죽순볶음',
    pronounce: 'Juksunbokkeum',
    description:
      '기름을 두른 팬에 삶은 죽순과 양파 등 채소를 넣고 소금으로 간을 해 볶은 요리이다. 소고기나 버섯을 함께 볶아도 맛있다.',
    name_en: 'Stir-fried Bamboo Shoots',
    description_en:
      'Boiled bamboo shoots stir-fried with onion and other vegetables in an oiled pan and seasoned with salt. Beef or mushroom can be added according to one’s preference.',
    name_ja: '竹の子炒め',
    description_ja:
      '油をひいたフライパンに茹でた竹の子と玉ねぎなどの野菜を入れて塩で味を調えた料理。牛肉やきのこと一緒に炒めても美味しい。',
    name_zh: '炒竹笋',
    description_zh:
      '热锅中倒入食用油，将煮熟的竹笋和洋葱等蔬菜放入锅中一起翻炒，用盐调味即可。放入牛肉、蘑菇等一起翻炒也很美味。',
    name_zh2: '炒竹筍',
    description_zh2:
      '鍋中放油，再加入煮好的竹筍、洋蔥等蔬菜翻炒，用鹽調味即可。與牛肉、蘑菇等一起翻炒也很美味。',
  },
  {
    id: 384,
    category: '볶음 [Bokkeum]',
    name: '쥐치채볶음',
    pronounce: 'Jwichichaebokkeum',
    description:
      '마른 쥐치 채를 연한 조림간장에 볶아서 만든 반찬이다. 쥐치 채에 간이 있어 소금이나 간장은 조금만 넣어도 되고, 단맛을 위해 넣는 물엿은 많이 넣으면 딱딱해지니 주의해야 한다.',
    name_en: 'Stir-fried Dried Filefish Strips',
    description_en:
      'This is dried and shredded filefish stir-fried with a mild soy sauce. Be careful not to add too much salt, as shredded filefish is naturally salty. It should also be noted that too much syrup causes the filefish to become stiff.',
    name_ja: '干しカワハギ炒め',
    description_ja:
      '細切りの干したカワハギを薄口のチョリムカンジャンで炒めた料理。カワハギ自体に塩気があるため、塩やカンジャンは少し加えるだけでもいい。甘みを出すための水あめは入れすぎるとかたまってしまうので注意が必要。',
    name_zh: '炒干鳞鲀丝',
    description_zh:
      '在干鳞魨丝中倒入淡味炖菜用酱油翻炒即可。鳞鲀丝本身已有咸淡，盐或酱油只要放少许即可，增加甜味的糖稀也不可多放，否则会变硬。',
    name_zh2: '炒乾鱗魨絲',
    description_zh2:
      '在幹鱗魨絲中倒入淡味醬油翻炒即可。鱗魨絲中本身已有鹽味，可以少放一些鹽與醬油。為了讓菜有些甜味，可以放一些糖稀進去，但要注意不能放太多，否則會變硬。',
  },
  {
    id: 385,
    category: '볶음 [Bokkeum]',
    name: '즉석떡볶이',
    pronounce: 'Jeukseoktteokbokki',
    description:
      '떡볶이 떡과 어묵, 고추장 양념장을 넣은 냄비를 테이블에서 손님이 직접 끓여먹는 음식이다. 만두, 쫄면, 삶은 달걀, 치즈 등을 넣어 같이 먹기도 한다.',
    name_en: 'Stir-fried Rice Cake',
    description_en:
      'Tteokbokkitteok (thin rice cake sticks) stir-fried in a spicy gochujang (red chili paste) sauce with vegetables and fish cakes and cooked at the table. Dumplings, jjolmyeon (chewy noodle), hard-boiled eggs, and cheese may be added as well.',
    name_ja: '即席トッポッキ',
    description_ja:
      'トッポッキ用の餅と練り物、コチュジャンベースのたれを入れた鍋を各テーブルで客が直接煮て食べる料理。餃子、麺、ゆで卵、チーズなどをトッピングして食べる場合もある。',
    name_zh: '辣炒年糕锅',
    description_zh:
      '将制作辣炒年糕用的米糕和鱼糕、辣椒酱等一起放入锅中，在餐桌上现煮先吃即可，也可加入饺子、筋面、煮鸡蛋、奶酪等材料。',
    name_zh2: '辣炒年糕鍋',
    description_zh2:
      '把鍋中放入炒年糕中的年糕、魚丸、辣椒醬等調味料等材料，把鍋放到客人的面前，由客人自己煮著吃。有時也可以在裡面放上餃子、筋麵、煮雞蛋、芝士等材料。',
  },
  {
    id: 386,
    category: '볶음 [Bokkeum]',
    name: '철판순대볶음',
    pronounce: 'Cheolpansundaebokkeum',
    description: '순대에 양배추, 양파, 깻잎, 대파 등을 넣어 철판에서 매콤하게 볶아낸 요리이다.',
    name_en: 'Stir-fried Blood Sausage on Hot Iron Plate',
    description_en:
      'A spicy dish made with sundae (Blood Sausagee) stir fried with chopped cabbage, onion, perilla leaves, and green onion in an iron griddle.',
    name_ja: 'スンデの鉄板炒め',
    description_ja:
      'スンデ、キャベツ、玉ねぎ、エゴマの葉、長ねぎなどを入れて鉄板で辛口に炒めた料理。',
    name_zh: '铁板血肠',
    description_zh:
      '将血肠和卷心菜、洋葱、苏子叶、葱等材料放在铁板上一起翻炒即可，味道十分香辣鲜美。',
    name_zh2: '鐵板血腸',
    description_zh2: '在血腸中放入捲心菜、洋蔥、蘇子葉、大蔥等材料，在鐵板上翻炒而成，味道香辣。',
  },
  {
    id: 387,
    category: '볶음 [Bokkeum]',
    name: '표고버섯볶음',
    pronounce: 'Pyogobeoseotbokkeum',
    description:
      '말린 표고버섯을 부드럽게 불려서 양념하여 볶은 음식이다. 고추나 양파를 함께 넣어 볶아도 맛있다. 표고버섯은 특유의 은은한 향과 씹는 맛이 좋고, 고기와도 잘 어울린다.',
    name_en: 'Stir-fried Golden Oak Mushrooms',
    description_en:
      'This is dried shiitake mushroom that is soaked in water, seasoned, and stir-fried. It goes well with green pepper and onion. The unique fragrance and chewy texture of golden oak mushroom make it a perfect match for meat.',
    name_ja: 'シイタケ炒め',
    description_ja:
      '干しシイタケをやわらかくなるまで戻し、味をつけて炒める。唐辛子や玉ねぎを一緒にいれて炒めても美味しい。シイタケは特有の香りと食感がよく、肉との相性もいい。',
    name_zh: '炒香菇',
    description_zh:
      '将香菇用冷水泡发并调味后，放入锅中翻炒即可，也可以放入一些辣椒和洋葱，味道十分美味。香菇有一种独特的清香，又十分耐嚼，与肉类搭配更是相得益彰。',
    name_zh2: '炒香菇',
    description_zh2:
      '將幹香菇稍微發泡、醃制之後，翻炒即可。也可以放入辣椒、洋蔥等一塊兒翻炒，十分美味。香菇有一種特別的香味，又十分耐嚼，與肉類搭配食用也很合適。',
  },
  {
    id: 388,
    category: '볶음 [Bokkeum]',
    name: '해물떡볶이',
    pronounce: 'Haemultteokbokki',
    description:
      '한입 크기로 썬 가래떡이나 가늘게 뽑은 떡볶이용 떡에 채소와 어묵을 함께 넣고 고추장 양념을 넣어 끓이다 떡에 간이 적당이 배면 꽃게, 새우, 오징어, 홍합 등을 넣어 끓인 음식이다.',
    name_en: 'Stir-fried Rice Cake and Seafood',
    description_en:
      'Garaetteok (long cylinder-shaped rice cake) cut into bite-sized pieces or tteokbokkitteok (thin rice cake sticks) stir-fried with vegetables and fish cake in a spicy gochujang (red chili paste) sauce. When the tteokbokkitteok is sufficiently seasoned, crab, shrimp, squid, mussels, and other seafood are added and boiled.',
    name_ja: '海鮮トッポッキ',
    description_ja:
      '一口大にスライスしたカレトクや細長いトッポッキ用の餅に野菜と練り物を加えてコチュジャンベースのたれで煮詰め、餅に味がしみ込んだらワタリガニ、エビ、イカ、ムール貝などを加えて煮込んだもの。',
    name_zh: '海鲜辣炒年糕',
    description_zh:
      '切成一口大小的长条糕或细长形状的辣炒年糕里，加入蔬菜和鱼糕以及用辣椒酱做成的调味酱一起熬煮，待米糕入味后，再放入花蟹、虾、鱿鱼、贻贝等海鲜继续熬煮即可。',
    name_zh2: '海鮮辣炒年糕',
    description_zh2:
      '切成一口大小的米糕或條狀米糕裡放入蔬菜和魚糕，再加入辣椒醬調味料一起煮開，等米糕入味了，再放入花蟹、蝦、魷魚和貽貝繼續煮。',
  },
  {
    id: 389,
    category: '조림 [Jorim]',
    name: '가자미조림',
    pronounce: 'Gajamijorim',
    description:
      '손질한 가자미에 간장 양념장을 얹어 무와 함께 담백하게 조린 음식으로 밥반찬으로 많이 먹는다.',
    name_en: 'Braised Plaice',
    description_en:
      'Cleaned plaice drizzled with a soy sauce-based seasoning sauce. Plaice braised with radish is a tasty side dish that is widely enjoyed in Korea.',
    name_ja: 'カレイの煮付け',
    description_ja:
      'カレイに醤油ベースのたれをかけて大根と一緒にあっさりと煮付けた料理。ご飯とよく合う。',
    name_zh: '炖鲽鱼',
    description_zh:
      '用酱油做成调味酱，浇在处理好的鲽鱼上面，再放入萝卜一起慢炖即可，清淡鲜美的味道很适合配饭。',
    name_zh2: '燉鰈魚',
    description_zh2:
      '將鰈魚收拾好以後，在裡面倒入醬油，放上蘿蔔慢燉即可。它味道清淡，作為一種搭配米飯食用的菜品很受歡迎。',
  },
  {
    id: 390,
    category: '조림 [Jorim]',
    name: '갈치조림',
    pronounce: 'Galchijorim',
    description:
      '토막 낸 갈치와 무, 풋고추 등을 냄비에 담은 뒤 고춧가루를 비롯한 마늘 등의 양념장을 끼얹어 고루 간이 배도록 조린 음식이다. 무 대신 감자를 넣어도 별미다.',
    name_en: 'Braised Cutlassfish',
    description_en:
      'Cutlassfish cut into pieces and braised in a spicy soy sauce mixture with white radish and green chili peppers. The sauce is spooned over the ingredients while cooking to allow the flavors to seep in. Potato can be used instead of radish.',
    name_ja: '太刀魚の煮付け',
    description_ja:
      'ぶつ切りにした太刀魚や大根、青唐辛子やニンニクなどを鍋に入れ、辛口の醤油だれをかけて味がしみこむまでじっくり煮た料理。大根の代わりにじゃがいもを入れてもよい。',
    name_zh: '辣炖带鱼',
    description_zh:
      '带鱼切块儿，与萝卜、青辣椒一同 放入锅中，浇上用辣椒粉、大蒜等做成的调味 酱炖至入味即可，也可用土豆代替萝卜。',
    name_zh2: '辣燉帶魚',
    description_zh2:
      '將切成塊狀的白帶魚和蘿蔔等食材放入鍋裡，放上辣椒粉調味醬燉煮而成。做辣燉白帶魚時可以放入蘿蔔和乾菜葉、地瓜莖、馬鈴薯、辛奇等食材。',
  },
  {
    id: 391,
    category: '조림 [Jorim]',
    name: '감자조림',
    pronounce: 'Gamjajorim',
    description:
      '냄비에 기름을 두르고 적당한 크기로썬 감자를 넣어 중불에서 볶는다. 양념간장과 물을 붓고 끓이다가 윤기 나게 조린다.',
    name_en: 'Braised Potatoes',
    description_en:
      'To make Gamjajorim (braised potatoes with soysauce), potatoes are cut into bite-sizedpieces and fried in a pan over medium heat.They are then added to soy sauce and water and boiled to a glaze.',
    name_ja: 'じゃがいもの煮付け',
    description_ja:
      '鍋に油をひき、適当な大きさに切ったじゃがいもを入れて中火で炒める。薬味醤油と水を入れて煮込み、つやが出るまで煮詰める。',
    name_zh: '酱土豆',
    description_zh:
      '热锅放油，将切成大小适中的土豆放 入锅中翻炒，火调至中火。接着放一些调味酱 油和适量的水继续熬煮，烧至土豆颜色酱红 润泽。',
    name_zh2: '醬土豆',
    description_zh2: '醬土豆是將馬鈴薯切成塊狀後用食用油輕炒，加入醬油和白糖燉的香甜飲食。',
  },
  {
    id: 392,
    category: '조림 [Jorim]',
    name: '고등어조림',
    pronounce: 'Godeungeojorim',
    description:
      '고등어와 무, 풋고추 등을 냄비에 담고 매운 간장 양념장을 끼얹어 조린 음식이다.우거지나 김치를 넣기도 한다.',
    name_en: 'Braised Mackerel',
    description_en:
      'Mackerel sliced sideways and braised in a spicy soy sauce mixture with white radish or potatoes. Green Korean cabbage leaves or kimchi may also be added.',
    name_ja: 'サバの煮付け',
    description_ja:
      'サバや、大根、青唐辛子などに辛口の薬味をまぶして煮る。ウゴジ(白菜の外葉)やキムチを加えることもある。',
    name_zh: '炖青花鱼',
    description_zh:
      '青花鱼斜切成块儿，加入萝卜和青辣椒等，用辣味调味酱炖煮。有时还加入干白菜或辛奇一同炖制，也是别有一番味道。',
    name_zh2: '燉青花魚',
    description_zh2:
      '將鯖魚和地瓜、洋蔥、辣椒放入鍋裡，加醬油調味料燉煮而成。燉魚食材可以使用白帶魚、黃花魚、鯧魚、秋刀魚等，可根據喜好放入馬鈴薯、南瓜、胡蘿蔔等食材後加辣調味醬燉出鮮美的燉魚料理。',
  },
  {
    id: 393,
    category: '조림 [Jorim]',
    name: '도미조림',
    pronounce: 'Domijorim',
    description:
      '도미에 저민 마늘과 생강, 간장, 설탕 등을 함께 넣어 간이 배이도록 윤이 나게 조린 것이다. 달짝지근한 국물 맛과 어우러져 밥반찬과 술안주로 손색이 없다.',
    name_en: 'Braised Sea Bream',
    description_en:
      'Sea bream braised with soy sauce, sliced garlic, ginger, and sugar until a glaze forms. The sweet sauce of this dish makes it a perfect match for rice or alcoholic beverages.',
    name_ja: '鯛の煮付け',
    description_ja:
      '鯛に、にんにくと生姜、カンジャン、砂糖などを一緒に入れて味がしみ込み照りが出るよう煮付ける。甘みのある汁が、ご飯や酒のつまみによく合う。',
    name_zh: '炖鲷鱼',
    description_zh:
      '将鲷鱼和蒜片、姜、酱油、白糖等材料一起炖至入味、色泽油亮即可。炖鲷鱼汤汁微甜，配饭下酒都很适合。',
    name_zh2: '燉鯛魚',
    description_zh2:
      '在鯛魚中放入蒜片、姜、醬油、白糖等材料，燉至入味、色澤油亮即可。它湯味微甜，作為下飯菜與下酒菜都毫不遜色。',
  },
  {
    id: 394,
    category: '조림 [Jorim]',
    name: '돼지고기 메추리알장조림',
    pronounce: 'Dwaejigogimechurialjangjorim',
    description:
      '돼지고기 살코기와 삶은 메추리알을 간장, 설탕, 마늘 등을 넣고 조린 음식이다. 먹을 때는 고기의 결대로 찢어 간장 국물을 끼얹어 낸다.',
    name_en: 'Braised Pork and Quail Eggs in Soy Sauce',
    description_en:
      'To prepare this dish, lean cuts of pork and quail eggs are braised in a mixture of soy sauce, sugar, and garlic. The meat is shredded along the grain into small pieces and drizzled with the braising sauce when served.',
    name_ja: '豚肉とうずらの卵の煮付け',
    description_ja:
      '豚肉の赤身と茹でたうずらの卵をカンジャン、砂糖、にんにくなどを入れて煮付けた料理。食べる際は肉の繊維に沿ってさき、カンジャンスープをかける。',
    name_zh: '酱猪肉鹌鹑蛋',
    description_zh:
      '将瘦猪肉和煮好的鹌鹑蛋加入酱油、白糖、蒜等材料炖制而成。食用时，先将猪肉顺着肌理方向撕成细丝状，再淋上酱汁即可。',
    name_zh2: '醬豬肉鵪鶉蛋',
    description_zh2:
      '在豬肉與煮好的鵪鶉蛋中，加入醬油、白糖、蒜等材料燉制而成。食用時，將煮好的豬肉順著紋理撕好，再淋上醬油湯料即可。',
  },
  {
    id: 395,
    category: '조림 [Jorim]',
    name: '두부조림',
    pronounce: 'Dubujorim',
    description:
      '두부를 기름에 살짝 지진 다음 간장과 고춧가루, 설탕, 파, 마늘 등을 넣고 조린 반찬이다.',
    name_en: 'Braised Bean Curd',
    description_en:
      'Lightly pan-fried bean curd simmered in soy sauce with red chili pepper, sugar, green onions, and garlic. It is served as a banchan (side dish).',
    name_ja: '豆腐の煮付け',
    description_ja:
      '油でさっと焼いた豆腐に、醤油, 粉唐辛子、砂糖、ねぎ、にんにくなどを加えて煮たおかず。',
    name_zh: '烧豆腐',
    description_zh:
      '将豆腐用食用油略微煎一下，然后与 酱油、辣椒粉、砂糖、葱、蒜头等炖制的佐餐 菜。',
    name_zh2: '燒豆腐',
    description_zh2: '用食用油將豆腐煎到呈焦黃為止，然後放入醬油、辣椒粉等燉燒而成。',
  },
  {
    id: 396,
    category: '조림 [Jorim]',
    name: '땅콩조림',
    pronounce: 'Ttangkongjorim',
    description:
      '땅콩에 물을 넣고 삶다가 진간장, 물엿, 설탕, 마늘을 넣어 약한 불에서 조린 조림이다. 고소한 맛이 일품이고, 땅콩 10알이면 비타민 E의 하루 필요량을 충족시킬 수 있어 영양도 좋다.',
    name_en: 'Braised Peanuts',
    description_en:
      'For this dish, peanuts are boiled in water and braised in a mixture of soy sauce, syrup, sugar, and garlic over low heat. Not only does it taste great, but it is packed with nutrients as well, as 10 peanuts meet the daily requirement for vitamin E.',
    name_ja: '落花生の煮付け',
    description_ja:
      '落花生に水を加えて茹でて、チンカンジャン、水あめ、砂糖、にんにくを入れて弱火で煮付ける。香ばしさも抜群で、落花生10粒で一日のビタミンEの必要量が摂取できると言われるほど栄養面も優れている。',
    name_zh: '酱花生',
    description_zh:
      '将花生放入清水中熬煮，再放入浓酱油、糖稀、白糖、蒜等材料文火炖制即可。酱花生香浓的味道堪称一绝，而且十粒花生就能满足人一天所需的维生素E，营养十分丰富。',
    name_zh2: '醬花生',
    description_zh2:
      '花生加水煮好，然後放入濃醬油、糖稀、白糖、蒜等材料，文火燉制。香濃的味道堪稱一絕，10顆花生便可以滿足人一天所需的維生素E，營養十分豐富。',
  },
  {
    id: 397,
    category: '조림 [Jorim]',
    name: '메추리알장조림',
    pronounce: 'Mechurialjangjorim',
    description:
      '삶은 메추리알의 껍질을 까서 간장, 마늘, 생강, 설탕, 물을 넣고 조린 것이다. 밑반찬으로 많이 활용한다.',
    name_en: 'Braised Quail Eggs in Soy Sauce',
    description_en:
      'Boiled and peeled quail eggs braised in a mixture of soy sauce, chopped garlic, ginger, sugar, and water, this popular Korean side dish is usually eaten with rice.',
    name_ja: 'うずらの卵の煮付け',
    description_ja:
      '茹でたうずらの卵の殻をむき、カンジャン、にんにく、生姜、砂糖、水を加えて煮付ける。常備菜としてよく活用される。',
    name_zh: '酱鹌鹑蛋',
    description_zh:
      '鹌鹑蛋煮熟剥壳后，加入酱油、蒜、姜、白糖、水一起炖制即可，是一道很常见的家常小菜。',
    name_zh2: '醬鵪鶉蛋',
    description_zh2:
      '鵪鶉蛋煮好之後剝皮，加入醬油、蒜、姜、白糖、水燉制即可。它經常作為小菜出現在餐桌上。',
  },
  {
    id: 398,
    category: '조림 [Jorim]',
    name: '명태조림',
    pronounce: 'Myeongtaejorim',
    description:
      '명태를 토막 쳐서 넣고 양념하여 약한 불에서 오래 조린 음식이다. 쇠고기나 돼지고기를 썰어 넣기도 한다. 칼칼한 국물과 명태의 시원한 맛이 잘 어우러진다.',
    name_en: 'Braised Pollack',
    description_en:
      'Pollack cut into pieces, marinated, and braised over a low heat. Chopped beef or pork can be added. The spicy sauce and the refreshing flavor of pollack go well together.',
    name_ja: 'スケトウダラの煮付け',
    description_ja:
      'ぶつ切りにしたスケトウダラに味付し、弱火で長く煮付けたもの。牛肉や豚肉を加えたりもする。辛いスープとスケトウダラのすっきりとした味が相まって美味しい。',
    name_zh: '炖明太鱼',
    description_zh:
      '将切成大块后调味的明太鱼用文火长时间炖制。有时也会放入切碎的牛肉或猪肉。香辣的汤汁和明太鱼的鲜爽味道相得益彰。',
    name_zh2: '燉明太魚',
    description_zh2:
      '將明太魚切成大塊後調味，以小火長時間燉製而成。有時也會加入切碎的牛肉或豬肉。辛辣的湯和明太魚的清爽味道相得益彰。',
  },
  {
    id: 399,
    category: '조림 [Jorim]',
    name: '묵은지고등어조림',
    pronounce: 'Mugeunjigodeungeojorim',
    description:
      '고등어와 묵은 김치를 넣어 얼큰하게 조린 음식이다. 부드러운 고등어 살에 묵은 김치가 어우러져 간단한 조리과정에도 깊은 맛이 나는 음식이다.',
    name_en: 'Braised Mackerel with Aged Kimchi',
    description_en:
      'This dish is made by braising mackerel and well-aged kimchi in a spicy sauce. The recipe may be simple, but the soft mackerel and well-aged kimchi seem to come together in perfect harmony.',
    name_ja: '熟成キムチとサバの煮付け',
    description_ja:
      'サバと熟成キムチを辛口に煮付けた料理。やわらかいサバの身に熟成キムチがよく合い、調理方法は簡単でも深みのある味が出る。',
    name_zh: '炖酸辛奇青花鱼',
    description_zh:
      '将青花鱼和酸辛奇一起炖制而成，青花鱼鲜嫩的肉质，搭配酸辛奇酸爽的味道，虽然做法简单，但透出醇香鲜辣的味道。',
    name_zh2: '燉酸辛奇青花魚',
    description_zh2:
      '使用青花魚與酸辛奇燉製而成，味道辣爽。青花魚肉質柔嫩，搭配酸辛奇，雖然烹飪過程簡單，卻散發出一種濃郁的味道。',
  },
  {
    id: 400,
    category: '조림 [Jorim]',
    name: '병어조림',
    pronounce: 'Byeongeojorim',
    description:
      '냄비에 감자를 깔고 병어를 올린 후 고춧가루와 간장, 다진 마늘로 만든 양념장을 골고루 끼얹어 조린다가 파, 고추를 넣고 조린 음식이다.',
    name_en: 'Braised Pomfret',
    description_en:
      'Pomfret placed in a pot with potato slices in the bottom and braised in a spicy soy sauce mixture of red chili powder, soy sauce, and minced garlic with green onion and chili pepper.',
    name_ja: 'マナガツオの煮付け',
    description_ja:
      '鍋にじゃがいもをしいてマナガツオをのせた後、粉唐辛子とカンジャン、にんにくのみじん切りで作ったたれをまんべんなくかけて煮付け、さらにねぎ、唐辛子を入れて煮る。',
    name_zh: '辣炖平鱼',
    description_zh:
      '在平底锅中铺上一层土豆，将平鱼置于其上，再将用辣椒粉、酱油、蒜末做成的调味酱均匀地浇在上面，用文火慢慢炖煮，最后放上葱、辣椒即可。',
    name_zh2: '辣燉平魚',
    description_zh2:
      '在平底鍋中鋪上一層土豆，將平魚置於其上，再將用辣椒粉、醬油、蒜末製作而成的調味醬均勻地澆在上面燉煮，最後放上蔥、辣椒再煮一會兒即可。',
  },
  {
    id: 401,
    category: '조림 [Jorim]',
    name: '북어조림',
    pronounce: 'Bugeojorim',
    description:
      '북어는 명태를 말린 것이다. 불린 북어와 갖은 양념을 넣어 약한 불에서 간이 골고루 배도록 조려서 먹는다.',
    name_en: 'Braised Dried Pollack',
    description_en:
      'Bukeo (dried pollack) soaked in water and braised in a sauce over lower heat. While cooking, the sauce is spooned over the ingredients to allow the flavors to seep in.',
    name_ja: '干しスケトウダラの煮付け',
    description_ja:
      '水で戻した干しスケトウダラとたれを入れ、弱火で味がしみ込むように煮付けて食べる。',
    name_zh: '炖干明太鱼',
    description_zh: '将干明太鱼用冷水泡发后，放入各种调味料，用文火炖制入味即可。',
    name_zh2: '燉幹明太魚',
    description_zh2: '將幹明太魚浸泡在水中以後，放入各種調味料，用文火燉製入味即可。',
  },
  {
    id: 402,
    category: '조림 [Jorim]',
    name: '붕어조림',
    pronounce: 'Bungeojorim',
    description:
      '냄비에 납작하게 썬 무를 깔고 그 위에 붕어를 얹은 다음 풋고추, 파, 마늘 등을 얹어 매콤하게 조린 음식이다. 내장을 제거한 붕어 배 속에 소고기를 넣기도 한다.',
    name_en: 'Braised Carp',
    description_en:
      'Carp placed in a pot with radish slices in the bottom and braised in a spicy sauce with green chili pepper, green onion, and garlic. Beef can be stuffed into the belly of the gutted carp.',
    name_ja: 'フナの煮付け',
    description_ja:
      '鍋に薄切りにした大根を敷いてフナをのせた後、青唐辛子、ねぎ、にんにくなどを加えて辛めに煮付けた料理。内臓を取り除いたフナのお腹に牛肉を入れることもある。',
    name_zh: '红烧鲫鱼',
    description_zh:
      '将萝卜切片铺在锅底，然后放上鲫鱼，再加入青辣椒、葱、蒜等辣炖而成。有时也会在取出鲫鱼内脏后，往里面塞入牛肉。',
    name_zh2: '燉鯽魚',
    description_zh2:
      '將切片的蘿蔔鋪在鍋底，然後放上鯽魚，再加入青龍椒、蔥、大蒜等燉煮而成，口味鮮辣。有時也會在取出鯽魚內臟後填入牛肉。',
  },
  {
    id: 403,
    category: '조림 [Jorim]',
    name: '생멸치조림',
    pronounce: 'Saengmyeolchijorim',
    description: '삶은 메추리알과 소고기 살코기를 간장 양념에 조린 음식으로, 반찬으로 많이 먹는다.',
    name_en: 'Braised Anchovies',
    description_en:
      'Here, fresh anchovies are braised in a mixture of doenjang (soybean paste) and gochujang (red chili paste) with onion, chili pepper, green onion, and crown daisy. Dried radish leaves and Korean cabbage leaves can be added according to one’s taste. This dish is a local specialty of Korea’s south coast area, including Namhae and Tongyeong, where anchovies comprise a major portion of the catch.',
    name_ja: 'カタクチイワシの煮付け',
    description_ja:
      'カタクチイワシにテンジャン、コチュジャンを混ぜたたれをとき、玉ねぎ、唐辛子、長ねぎ、春菊を入れて煮付ける。大根菜や白菜の外葉などを入れて食べる場合もある。ナムヘやトンヨンを中心としたカタクチイワシがよく獲れる南海岸地域の郷土料理。',
    name_zh: '辣炖鲜鳀鱼',
    description_zh:
      '用大酱和辣椒酱做成调味酱，将生鳀鱼和调味酱以及洋葱、辣椒、葱、筒蒿等材料一起放入锅中炖煮即可，也可以放一些干萝卜缨或干白菜。南海和统营等南海岸地区盛产生鳀鱼，这道菜也是当地的地方特色美食。',
    name_zh2: '辣燉鮮鳀魚',
    description_zh2:
      '首先用大醬、辣椒醬混在一起製成調味醬，然後在生銀魚中加入該調味醬，並放入洋蔥、辣椒、大蔥、茼蒿燉煮即可。燉製時也可以放入蘿蔔乾菜、白菜幫。在南海或統營等南海岸地區，鮮鳀魚產的比較多，這道菜時候該地區的鄉土美食。',
  },
  {
    id: 404,
    category: '조림 [Jorim]',
    name: '소고기 메추리알장조림',
    pronounce: 'Sogogimechurialjangjorim',
    description:
      '생 멸치에 된장, 고추장을 섞은 양념장을 풀고 양파, 고추, 대파, 쑥갓을 넣어 끓인 음식이다. 무시래기나 배추 우거지를 넣어 먹기도 한다. 남해나 통영을 중심으로 생멸치 생산이 많은 남해안 지역의 향토음식이다.',
    name_en: 'Braised Beef and Quail Eggs in Soy Sauce',
    description_en:
      'This popular side dish is made by braising boiled quail eggs and lean cuts of beef in a soy sauce mixture. It is served with rice and soup.',
    name_ja: '牛肉とうずらの卵の煮付け',
    description_ja:
      '茹でたうずらの卵と牛肉の赤身を醤油ベースのたれで煮付けた料理。惣菜としてよく食べる。',
    name_zh: '酱牛肉鹌鹑蛋',
    description_zh: '将煮熟的鹌鹑蛋和瘦牛肉加入酱油炖制而成，是一种常见的家常小菜。',
    name_zh2: '醬牛肉鵪鶉蛋',
    description_zh2: '在煮好的鵪鶉蛋與精牛肉中加入醬油燉製而成，是一種常見菜品。',
  },
  {
    id: 405,
    category: '조림 [Jorim]',
    name: '연근조림',
    pronounce: 'Yeongeunjorim',
    description:
      '연근은 연꽃의 뿌리로 식용한다. 끓는 물에 연근을 살짝 데친 후 간장과 설탕을 넣어 서서히 조리다가 물엿을 넣고 달콤하게 조려 낸다.',
    name_en: 'Braised Lotus Roots',
    description_en:
      'Yeongeun (lotus root) parboiled and braised in a mixture of soy sauce and sugar over lower heat. Add syrup and braise to a glaze before serving.',
    name_ja: 'れんこんの煮付け',
    description_ja:
      'れんこんは蓮の地下茎で食べることができる。熱湯でさっとゆがき、カンジャンと砂糖を入れてコトコトと煮付け、水あめを加えて甘く仕上げる。',
    name_zh: '酱莲藕',
    description_zh:
      '莲藕是莲花的根部，可以食用。烹饪时先用沸水将莲藕稍微绰一下，在其中加入酱油与白糖，慢慢炖一会儿之后加入糖稀，味道甜美。',
    name_zh2: '醬蓮藕',
    description_zh2:
      '蓮藕是蓮花的根部，可以食用。烹飪時先用沸水將蓮藕稍微焯一下，在其中加入醬油與白糖，慢慢燉一會兒之後加入糖稀，味道甜美。',
  },
  {
    id: 406,
    category: '조림 [Jorim]',
    name: '오징어조림',
    pronounce: 'Ojingeojorim',
    description:
      '간장에 파, 마늘 등의 양념을 섞어 조림장을 끓이다 오징어를 넣고 조린 음식이다. 맛이 순하여 아이들 반찬으로 좋다. 또한 기호에 따라 고추, 마늘 등을 넣어 칼칼하게 만들기도 한다.',
    name_en: 'Braised Squid',
    description_en:
      "This dish is made by boiling a sauce made with soy sauce, green onion, and garlic and then braising squid in the sauce. The dish has a mild flavor and can be a good side dish for children. Depending on one's taste, chili pepper or garlic can be added to give a spicy flavor.",
    name_ja: 'イカの煮付け',
    description_ja:
      '醤油やネギ、にんにくなどで作った煮汁に、イカを加えて煮付けたもの。優しい味で子どもにも食べやすい。好みに応じて唐辛子やにんにくなどを加えて辛めに仕上げても良い。',
    name_zh: '红烧鱿鱼',
    description_zh:
      '在酱油里放入葱、蒜等调料煮制成酱料，再放入鱿鱼红烧而成。味道柔和，可作为孩子们的下饭菜。也可以根据个人喜好，放入辣椒、蒜等做成香辣口味。',
    name_zh2: '紅燒魷魚',
    description_zh2:
      '在醬油裡放入蔥、大蒜等調味料煮成醬料，再放入魷魚燒製而成。味道溫和，適合兒童食用。也可根據喜好放入辣椒、大蒜等，做成香辣口味。',
  },
  {
    id: 407,
    category: '조림 [Jorim]',
    name: '우럭조림',
    pronounce: 'Ureokjorim',
    description:
      '우럭에 각종 채소와 양념을 곁들여 익힌 음식이다. 충남에서는 말린 우럭을 이용하기도 한다. 담백하고 부드러운 우럭의 살에 칼칼한 국물이 배어 밥반찬으로 먹기 좋다.',
    name_en: 'Braised Rockfish',
    description_en:
      'Rockfish braised with vegetables and seasoning. In Chungcheong Province, dried rockfish is used as well. The soft and refreshing rockfish meat and spicy sauce make it a perfect side dish.',
    name_ja: 'クロソイの煮付け',
    description_ja:
      'クロソイに野菜とたれを添えて調理したもの。チュンナム地方は干したクロソイを使うこともある。淡泊でやわらかいクロソイの身にピリッと辛いスープがしみ込んでご飯もすすむ。',
    name_zh: '炖石斑鱼',
    description_zh:
      '将石斑鱼和各种蔬菜以及调味酱一起炖煮即可。在忠清南道地区，有时会使用干石斑鱼。石斑鱼肉质鲜嫩清淡，配上鲜辣的汤汁，是一道很好的下饭菜。',
    name_zh2: '燉石斑魚',
    description_zh2:
      '該菜品在烹飪時，只要在石斑魚中加入各種蔬菜與調味醬燉熟即可。在忠清南道地區有時也使用幹石斑魚來烹飪這道菜品。石斑魚肉質清淡、柔和，其中滲入了香辣的湯味，是一道很好的下飯菜。',
  },
  {
    id: 408,
    category: '조림 [Jorim]',
    name: '우엉조림',
    pronounce: 'Ueongjorim',
    description:
      '데친 우엉에 간장, 설탕, 맛술을 넣고 조린 후 참기름, 물엿, 깨소금을 넣어 버무린다. 우엉조림은 반찬으로 많이 먹지만, 김밥의 재료로도 많이 쓰인다.',
    name_en: 'Braised Burdock Roots',
    description_en:
      'For this dish, parboil and braise julienned burdock root in a mixture of soy sauce, sugar, and cooking wine. Mix with syrup, sesame oil, and sesame seeds before serving. Braised burdock is a common ingredient in gimbap as well as a popular side dish eaten with rice.',
    name_ja: 'ごぼうの煮付け',
    description_ja:
      'ゆがいたごぼうにカンジャン、砂糖、料理酒を入れて煮付け、ごま油、水あめ、ごま塩を加えて和える。ごぼうの煮付けはおかずとしてよく食べられるが、キンパプの材料としてもよく使われる。',
    name_zh: '酱牛蒡',
    description_zh:
      '将牛蒡用开水焯一下，加入酱油、白糖、料酒炖制一会儿，然后再加入香油、糖稀、芝麻盐搅拌即可。酱牛蒡是一种常见的小菜，也经常用作紫菜包饭的材料。',
    name_zh2: '醬牛蒡',
    description_zh2:
      '首先將牛蒡焯一下，加入醬油、白糖、料酒燉製一會兒，然後再加入香油、糖稀、芝麻鹽拌好即可。燉牛蒡既是一種常見的菜品，也經常用作紫菜包飯的材料。',
  },
  {
    id: 409,
    category: '조림 [Jorim]',
    name: '은대구조림',
    pronounce: 'Eundaegujorim',
    description:
      '은대구를 살짝 구운 뒤 무와 함께 달콤한 간장 양념장에 조린 음식이다. 부드럽고 담백한 맛을 즐길 수 있다.',
    name_en: 'Braised Black Cod',
    description_en:
      'Fresh black cod lightly seared and braised in a sweet soy sauce glaze with white radish. Black cod has a creamy texture and mild taste.',
    name_ja: '銀だらの煮付け',
    description_ja:
      '身が柔らかく淡白な味わいの銀だらをさっと焼き、甘辛い醤油だれで大根と一緒に煮た料理。',
    name_zh: '炖银鳕鱼',
    description_zh:
      '将肉质柔嫩鲜美的银鳕鱼用微甜 的酱油与萝卜一同炖制。可以品尝肉质柔嫩鲜 美的银鳕鱼。',
    name_zh2: '燉銀鱈魚',
    description_zh2: '採用富含油分的銀鳕魚和蓮藕等食材，用甜醬油燉出的香醇濃郁的料理。',
  },
  {
    id: 410,
    category: '조림 [Jorim]',
    name: '장조림',
    pronounce: 'Jangjorim',
    description:
      '소고기나 돼지고기 살코기를 큼직하게 토막 내어 간장, 설탕, 마늘 등을 넣고 조린 음식이다. 먹을 때는 고기의 결대로 찢어 간장 국물을 끼얹어 낸다.',
    name_en: 'Braised Beef in Soy Sauce',
    description_en:
      'Lean cuts of beef or pork braised in a mixture of soy sauce, sugar, and garlic. The meat is shredded along the grain into small pieces and drizzled with the braising sauce when served.',
    name_ja: '肉の煮付け',
    description_ja:
      '牛肉か豚肉をぶつ切りにし、醤油や砂糖、にんにくなどを加えて煮た料理。食べるときは食べやすく裂いて器に盛り、煮汁をかけて出す。',
    name_zh: '酱牛肉',
    description_zh:
      '取牛或猪的瘦肉切成大块，用酱油、 砂糖、蒜头等炖制，食用时把酱肉按肌理撕下 来，浇上酱肉汁即可。',
    name_zh2: '醬牛肉',
    description_zh2:
      '這是用牛肉或豬肉切塊加入醬油、糖燉煮而成的小菜。將瘦肉按紋理撕成絲後，澆上燉煮的醬油滷汁就可端上飯桌。',
  },
  {
    id: 411,
    category: '조림 [Jorim]',
    name: '조기조림',
    pronounce: 'Jogijorim',
    description:
      '조기를 두세 토막 내어 갖은 양념으로 약한 불에서 끓인 생선조림이다. 조기는 구이, 조림, 탕에 두루 쓰이는 재료로 우리나라 사람들이 가장 즐기는 생선 중의 하나이다.',
    name_en: 'Braised Yellow Croaker',
    description_en:
      'Yellow croaker cut into two to three pieces and braised with a sauce mixture over low heat. A popular ingredient that can be grilled, braised, or boiled, yellow croaker is one of the most-loved fish among Koreans.',
    name_ja: 'イシモチの煮付け',
    description_ja:
      'イシモチを２～３等分し、たれとからめて弱火で煮る魚の煮付け。イシモチは焼いたり、煮付け、スープでもよく使われる食材で、韓国人が好む魚のひとつ。',
    name_zh: '炖黄花鱼',
    description_zh:
      '将黄花鱼切成两三块，加入各种调料后，用文火慢炖即可。黄花鱼可以做成烤鱼、炖鱼、鱼汤等，是韩国人最喜爱的鱼肉之一。',
    name_zh2: '燉黃花魚',
    description_zh2:
      '將黃花魚切成兩三塊，加入各種調料之後，用文火燉製即可。黃花魚可以烤製、燉製、醃製，是韓國人最喜歡食用的魚肉之一。',
  },
  {
    id: 412,
    category: '조림 [Jorim]',
    name: '코다리조림',
    pronounce: 'Kodarijorim',
    description:
      '코다리는 명태를 반 건조한 것으로 간장, 고춧가루, 마늘 등으로 만든 양념장을 넣고 조린다. 쫄깃한 식감이 일품으로 밥반찬으로 인기가 좋다.',
    name_en: 'Braised Half-dried Pollack',
    description_en:
      'Kodari (half-dried pollack) braised in a mixture of soy sauce, red chili powder, and minced garlic. This dish has a soft yet chewy texture that has made it a popular side dish eaten with rice.',
    name_ja: '半干しスケトウダラの煮付け',
    description_ja:
      '半干しスケトウダラをカンジャン、粉唐辛子、にんにくなどを合わせたたれと煮付ける。もっちりした食感が絶妙で、ご飯と相性がよく人気。',
    name_zh: '炖半干明太鱼',
    description_zh:
      '用酱油、辣椒粉、蒜等做成调味酱，再将半干明太鱼和调味酱一起炖制即可。半干明太鱼口感劲道，很适合配米饭吃。',
    name_zh2: '燉半乾明太魚',
    description_zh2:
      '先用醬油、辣椒粉、蒜等製成調味醬，再加入半幹的明太魚中燉製即可。它口感勁道，作為一種搭配米飯食用的菜品很受歡迎。',
  },
  {
    id: 413,
    category: '조림 [Jorim]',
    name: '콩조림',
    pronounce: 'Kongjorim',
    description:
      '콩을 간장에 조려서 만든 음식으로, 짭짤하게 만든 반찬이다. 지방에 따라 콩장, 콩자반으로도 불린다.',
    name_en: 'Braised Beans',
    description_en:
      'This salty side dish, made by braising soybean in soy sauce, is called by different names, such as “kongjang” and “kongjaban,” in different regions.',
    name_ja: '豆の煮付け',
    description_ja:
      '豆をカンジャンで濃いめに煮詰めた料理。地域によりコンジャン、コンジャバンと呼ばれる。',
    name_zh: '酱黄豆',
    description_zh:
      '将黄豆用酱油炖制而成，味道微咸，是很适合配米饭吃的小菜。酱黄豆在有些地方又叫做“酱豆”或“咸豆”。',
    name_zh2: '醬黃豆',
    description_zh2:
      '將黃豆用醬油燉製而成，味道微咸。每個地方稱呼的名稱各有不同，有的地方也稱它為「醬豆」或「咸豆」。',
  },
  {
    id: 414,
    category: '조림 [Jorim]',
    name: '풋고추조림',
    pronounce: 'Putgochujorim',
    description:
      '풋고추에 간장과 함께 설탕과 썬 파를 버무리고 쇠고기, 돼지고기, 마른 어물 따위를 섞어서 조린 음식이다. 참기름, 통깨를 뿌려 밥반찬으로 먹는다.',
    name_en: 'Braised Green Chili Pepper',
    description_en:
      'Green chili peppers mixed with soy sauce, sugar, and chopped green onion and then braised with beef, pork, or dried fish. Flavored with sesame oil and sesame seeds and then served as a side dish to rice.',
    name_ja: '青唐辛子の煮付け',
    description_ja:
      '青唐辛子を醤油、砂糖、千切りにしたねぎと混ぜて、牛肉、豚肉、干した魚介類などを加えて煮付けた料理。ごま油やごまをかけてご飯と一緒に食べると美味しい。',
    name_zh: '青椒炖菜',
    description_zh:
      '青辣椒用酱油、白糖、葱丝一起调味后，放入牛肉、猪肉、鱼干等食材一起炖制而成。撒上香油和芝麻，可当下饭菜吃。',
    name_zh2: '燉青龍椒',
    description_zh2:
      '青龍椒加入醬油、糖、蔥絲拌炒，和牛肉、豬肉、魚乾等材料一起燉製而成。撒上香油和芝麻即可當下飯菜吃。',
  },
  {
    id: 415,
    category: '숙채 [Sukchae]',
    name: '가지나물',
    pronounce: 'Gajinamul',
    description:
      '가지를 길게 반 갈라 찜통에 찐 후 찢어 갖은 양념에 무쳐 먹는 나물이다. 찐 가지는 물기를 살짝 짠 뒤 무쳐야 물이 덜 생겨서 맛있다. 여름에 많이 해 먹는다.',
    name_en: 'Eggplant Salad',
    description_en:
      'Halved fresh eggplant steamed in a steamer, shred, and seasoned with a mixture of condiments. Steamed eggplant should be lightly squeezed to drain the excess water before mixing with seasonings. Eggplant salad is a summer side dish served with rice.',
    name_ja: 'なすのナムル',
    description_ja:
      'なすを縦に半分にし、蒸し器で蒸す。その後、薄切りして、たれで和えたナムル。夏によく食べる。',
    name_zh: '凉拌茄子',
    description_zh:
      '茄子竖切成两半后放入蒸锅中蒸熟，取出撕成条状，加入调料搅拌即可。蒸熟的茄子要沥去水分后搅拌才更好吃，否则会产生太多水分，影响味道和口感。凉拌茄子是夏天常吃的一道小菜。',
    name_zh2: '涼拌茄子',
    description_zh2:
      '茄子按長度切成一半蒸熟，然後撕成長條，放入調料拌勻即可。蒸熟的茄子輕輕擠出些水分後再拌調料，以免水分太多影響口感。涼拌茄子是夏季常吃的家常菜。',
  },
  {
    id: 416,
    category: '숙채 [Sukchae]',
    name: '간편잡채',
    pronounce: 'Ganpyeonjapchae',
    description:
      '삶아서 물기를 뺀 당면에 기호에 따라 채 썬 채소나 전복, 소고기 등을 넣고 프라이팬에 볶는다. 1인분씩 유산지에 담아 냉장 보관하다가 먹기 전 데워 낸다.',
    name_en: 'Stir-fried Glass Noodles and Vegetables',
    description_en:
      'This dish is made by boilingand draining glass noodles and then stir-frying with julienned vegetables, abalone, and beef. Japchae can be packaged into single servings using parchment paper and stored in the freezer. Heat before serving.',
    name_ja: '簡単チャプチェ',
    description_ja:
      '茹でて水気を切った春雨に、好きな野菜を千切りしたものやアワビ、牛肉などを加えてフライパンで炒める。一人前ずつクッキングシートに包んで冷蔵庫で保管し、食べる前に温める。',
    name_zh: '简便什锦炒粉丝',
    description_zh:
      '粉丝煮熟控水，在平底锅 中和切成丝的各种蔬菜或鲍鱼、牛肉等一起 翻炒。可分成小份用硫酸纸包起来放入冰箱 中，需要时拿出来加热一下即可食用。',
    name_zh2: '簡便什錦炒粉絲',
    description_zh2:
      '把粉絲煮熟並瀝幹水分，根據喜好加入蔬菜絲或鮑魚、牛肉等用平底鍋炒製。用油紙一份份分好，放入冰箱冷藏，吃之前拿出來熱一下即可。',
  },
  {
    id: 417,
    category: '숙채 [Sukchae]',
    name: '고구마순나물',
    pronounce: 'Gogumasunnamul',
    description:
      '고구마순의 껍질을 벗겨 끓는 물에 삶아 물기를 짜고 갖은 양념을 한 후 기름에 볶은 나물이다. 고구마순은 나물로도 많이 먹지만, 여름철에는 김치를 담겨 먹기도 한다.',
    name_en: 'Sweet Potato Stalk Salad',
    description_en:
      'Peeled and boiled sweet potato shoots drained of all excess water, mixed with a variety of seasonings, and stir-fry in an oiled pan. In summer, sweet potato shoots are also used to make salad and kimchi.',
    name_ja: 'さつまいもの茎のナムル',
    description_ja:
      '薄皮をむいたさつまいもの茎の部分を茹でて、水気を切った後、たれをからめて油で炒めたナムル。さつまいもの茎はナムルとしてもよく食べるが、夏にはキムチとして漬けて食べることもある。',
    name_zh: '凉拌红薯梗',
    description_zh:
      '红薯梗去皮，用开水焯一下，捞出沥干水分后加入各种调料搅拌，最后再入油翻炒一下即可。红薯梗除凉拌以外，夏天也可用来腌制辛奇。',
    name_zh2: '涼拌紅薯梗',
    description_zh2:
      '紅薯梗先把皮剝掉，用開水煮熟後擠幹水分，再用調料煨好之後倒點油烹製。紅薯梗不僅可以涼拌，夏季還可以做成辛奇吃。',
  },
  {
    id: 418,
    category: '숙채 [Sukchae]',
    name: '고사리나물',
    pronounce: 'Gosarinamul',
    description:
      '마른 고사리를 물에 불리고 난 후 부드럽게 삶아 제물에 식을 때 까지 담가 놓았다가 떫은 맛을 우려내고 물기를 뺀 뒤 단단한 부분을 자르고 간장, 파, 마늘 등으로 양념하여 볶는다.',
    name_en: 'Bracken Salad',
    description_en:
      'Here, dried bracken is first soaked in water and boiled to make it tender. After being chilled to remove its sour taste, the bracken is squeezed to remove any excess water and tough parts and seasoned with soy sauce, green pepper, and garlic.',
    name_ja: 'ワラビのナムル',
    description_ja:
      '乾燥ワラビを水でもどし、柔らかく茹でて煮汁が冷めるまで放置して渋みを取る。その後、水気を切って固い部分を切り落とし、醤油、ねぎ、にんにくなどで味付けして炒める。',
    name_zh: '凉拌蕨菜',
    description_zh:
      '干蕨菜用水泡发后，烧沸水煮至软 化，在原汤中放凉，待去掉涩味后捞出来控干 水分，切掉坚硬的部分，加入酱油、葱蒜等调 料翻炒至熟。',
    name_zh2: '涼拌蕨菜',
    description_zh2:
      '用水泡軟幹蕨菜後煮熟，放在原水裡晾涼，清除澀味與水氣後切掉硬杆部分，用醬油、蔥蒜等調味炒熟。',
  },
  {
    id: 419,
    category: '숙채 [Sukchae]',
    name: '고춧잎나물',
    pronounce: 'Gochunnipnamul',
    description:
      '고춧잎을 데쳐 물기를 잘 짜서 고추장, 된장, 통깨, 참기름으로 무친 것이다. 고춧잎에는 고추보다 비타민 A, C가 풍부해 무더위에 지친 몸을 활력 있게 만드는 데 도움을 준다.',
    name_en: 'Chili Pepper Leaf Salad',
    description_en:
      'Parboiled and squeeze-dried green pepper leaves mixed with gochujang (red chili paste), sesame seeds, and sesame oil. Chili pepper leaves are a richer source of vitamins A and C than chili peppers, providing a much-needed energy boost in summer.',
    name_ja: '唐辛子の葉のナムル',
    description_ja:
      '唐辛子の葉をゆがいて水気を切った後、コチュジャン、テンジャン、ゴマ、ごま油で和えたもの。唐辛子の葉には唐辛子よりビタミンA、Cが豊富に含まれており、暑さに疲れた体の疲労回復に効果的とされる。',
    name_zh: '凉拌辣椒叶',
    description_zh:
      '辣椒叶用开水焯一下，捞出沥干水分后，加入辣椒酱、大酱、芝麻、香油搅拌即可。辣椒叶的维生素A和维生素C的含量比辣椒还要丰富，在炎热的夏天食用，有助于恢复身体健康活力。',
    name_zh2: '涼拌辣椒葉',
    description_zh2:
      '辣椒葉用熱水焯一下，然後擠幹水分，用辣椒醬、大醬、炒芝麻和香油拌勻即可。辣椒葉所含維生素A和C比辣椒還要高，炎熱的夏季可以滋補身體。',
  },
  {
    id: 420,
    category: '숙채 [Sukchae]',
    name: '곤드레나물',
    pronounce: 'Gondeurenamul',
    description:
      '곤드레를 끓는 물에 살짝 데쳐 간장, 다진 파, 다진 마늘, 참기름, 깨소금 등의 양념에 무쳐 먹는 나물로 부드럽고 향이 독특하다. 장아찌나 쌈으로도 먹는다.',
    name_en: 'Thistle Salad',
    description_en:
      'Thistle parboiled and tossed with soy sauce, chopped green onion and garlic, sesame oil, and sesame seeds. Thistle is a tender vegetable with a distinctive fragrance that is also eaten pickled or in a leafy wrap.',
    name_ja: 'コンドゥレナムル',
    description_ja:
      'コンドゥレをお湯でさっと湯がき、カンジャン、みじん切りしたねぎとにんにく、ごま油、ごま塩などのたれで和えて食べるナムル。やわらかく、独特の香りがある。漬物や包み野菜としても食べられる。',
    name_zh: '凉拌山蓟菜',
    description_zh:
      '山蓟菜用开水焯一下，捞出沥干水分后，加入酱油、葱末、蒜末、香油、芝麻盐等调料搅拌即可。山蓟菜香味独特，口感细嫩，除了凉拌以外，还可以做成酱菜或包饭吃。',
    name_zh2: '涼拌山薊菜',
    description_zh2:
      '山薊菜用開水稍微焯一下，然後放入醬油、蔥花、蒜蓉、香油、芝麻鹽等拌勻。山薊菜口感柔軟，帶有一種特殊的香氣。也可以做成醬菜或包飯吃。',
  },
  {
    id: 421,
    category: '숙채 [Sukchae]',
    name: '구절판',
    pronounce: 'Gujeolpan',
    description:
      '아홉 칸으로 나눠 그릇에 채소와 고기 등 여덟 가지 음식을 빛깔 맞춰 담고 가운데 담은 밀전병에 싸서 겨자초장을 찍어 먹는 궁중음식이다.',
    name_en: 'Platter of Nine Delicacies',
    description_en:
      'Eight kinds of colorful vegetables and meats served in an octagonal wooden box. The vegetables are wrapped in the thin wheat crepes stacked in the central compartment and dipped in a mustard-soy sauce.',
    name_ja: 'クジョルパン',
    description_ja:
      '9つに仕切られた木製の器に野菜や肉など8種類の具材を盛り付け、中央に置いた小麦粉で焼いた皮に包んで、辛子醤油につけて食べる宮廷料理。',
    name_zh: '九折坂',
    description_zh:
      '将蔬菜和肉等八种食物按颜色搭配 放入分成九格的木质餐盒中，中间放薄面饼。吃的时候将八种食物各取一些放在薄面饼 上，然后包起来沾芥末醋酱吃，是宫廷饮食。',
    name_zh2: '九折坂',
    description_zh2:
      '因為是裝在分成九格的餐盤,稱為九折坂。煮熟蔬菜和肉後按照五色裝在外緣的8格，在中央放上薄麵餅。是用薄麵餅包各種食食材後沾芥子醬吃的宮廷飲食。',
  },
  {
    id: 422,
    category: '숙채 [Sukchae]',
    name: '깻잎순무침',
    pronounce: 'Kkaennipsunmuchim',
    description:
      '깻잎을 끓는 물에 살짝 데쳐 물기를 짠 후 간장, 소금, 마늘, 들기름, 실파를 넣고 조물조물 무친 나물이다. 향긋한 맛이 좋아 입맛을 살리기에 좋은 반찬이다.',
    name_en: 'Perilla Leaf Salad',
    description_en:
      'Parboiled and squeeze-dried perilla leaves mixed with soy sauce, salt, garlic, perilla oil, and thread scallions. Its fragrant and savory taste makes it an appetite-stimulating side dish served with rice.',
    name_ja: 'エゴマの葉の和え物',
    description_ja:
      'エゴマを熱湯でさっと湯がいた後、カンジャン、塩、にんにく、エゴマ油、わけぎを加えて和えたナムル。香りがよく、食欲をそそる一品。',
    name_zh: '凉拌苏子叶',
    description_zh:
      '苏子叶用开水焯一下，捞出沥干水分后，加入酱油、盐、蒜、苏籽油、香葱搅拌均匀即可。苏子叶特有的香气能够刺激食欲，是一道很开胃的小菜。',
    name_zh2: '涼拌蘇子葉',
    description_zh2:
      '蘇子葉用開水稍微焯一下，然後擠幹水分，再放入醬油、食鹽、大蒜、野蘇子油、香蔥拌勻。蘇子葉特有的香氣有助於開胃。',
  },
  {
    id: 423,
    category: '숙채 [Sukchae]',
    name: '나물',
    pronounce: 'Namul',
    description:
      '산이나 들에서 채취한 식물 또는 채소를 데쳐서 양념하여 만든 반찬의 총칭으로 숙채라 한다. 고사리, 도라지 등 볶아서 익히는 나물과 시금치, 쑥갓 등 데쳐서 무치는 나물이 있다.',
    name_en: 'Salad',
    description_en:
      'Dishes made with various wild vegetables collected from mountains and fields are referred to collectively as sukchae. Dried sukchae are soaked in water, squeezed to remove excess fluid, and mixed with a variety of seasonings. The vegetables typically used for sukchae include bracken and balloon flower roots, which are pan-fried, and spinach and crown daisy, which are parboiled.',
    name_ja: 'ナムル',
    description_ja:
      '山や野原で採取した植物または野菜を茹でて味付けしたおかずの総称で、「スクチェ」ともいう。ワラビやキキョウなどを炒めたものと、ほうれん草や春菊などを茹でて和えたものがある。',
    name_zh: '素菜',
    description_zh:
      '将生长在深山和田野中的植物或蔬菜焯熟后凉拌的统称为素菜。具体有蕨菜、桔梗等油炒的素菜和菠菜、茼蒿等用水焯一遍后凉拌的素菜。',
    name_zh2: '素菜',
    description_zh2:
      '將生長在深山和田野中的蔬菜清燙後調味製成的小菜，稱為素菜。主要使用嫩蘿蔔、蕨菜、桔梗、菠菜等食材。',
  },
  {
    id: 424,
    category: '숙채 [Sukchae]',
    name: '냉이나물',
    pronounce: 'Naenginamul',
    description:
      '데친 냉이를 간장 또는 된장이나 고추장에 다진 파ㆍ마늘, 깨소금, 참기름으로 무친 것이다. 봄철에 입맛이 없을 때에 먹으면 식욕을 돋워 준다.',
    name_en: "Shepherd's Purse Salad",
    description_en:
      "Shepherd's purse parboiled and tossed with a mixture of doenjang (soybean paste) or gochujang (red chili paste), chopped garlic, sesame seeds, and sesame oil. This salad is often eaten in spring to stimulate appetite.",
    name_ja: 'ナズナのナムル',
    description_ja:
      '湯がいたナズナを。カンジャンまたはコチュジャン、みじん切りしたねぎとにんにく、ごま塩、ごま油などで和えたもの。春の食欲がない時にもおすすめ。',
    name_zh: '凉拌荠菜',
    description_zh:
      '荠菜用开水焯一下，捞出沥干水分后，加入大酱或辣椒酱和葱末、蒜末、芝麻盐、香油等调料搅拌即可。春天没有胃口时吃，可以增加食欲。',
    name_zh2: '涼拌薺菜',
    description_zh2:
      '將焯水的薺菜裡放入醬油，或者放大醬或辣椒醬，再放入蔥花、蒜蓉、芝麻鹽、香油等調料拌勻。 春天胃口不佳的時候吃這道菜，可以有效開胃。',
  },
  {
    id: 425,
    category: '숙채 [Sukchae]',
    name: '대하냉채',
    pronounce: 'Daehanaengchae',
    description:
      '대하를 쪄서 껍질을 벗기고 반으로 저민 다음 소고기 편육, 죽순, 오이 등과 함께 차게 식혀 잣 소스를 끼얹어 먹는 음식이다.대표적인 궁중 요리이다.',
    name_en: 'Chilled Prawn Salad',
    description_en:
      'A cold salad of butterflied prawns, beef slices, bamboo shoots, and cucumbers mixed in a pine nut dressing. It is a major royal court dish.',
    name_ja: '大正海老の冷菜',
    description_ja:
      '蒸して殻をむき、半分に切った大正海老を、蒸して薄切りにした牛肉や竹の子、きゅうりなどと一緒に冷やし、松の実のソースをかけて食べる。',
    name_zh: '凉拌大虾',
    description_zh:
      '将蒸熟的大虾剥皮后从中间切开，加入熟牛肉片、竹笋、黄瓜等，冷却后在上面浇上松仁调味汁即可。',
    name_zh2: '涼拌大蝦',
    description_zh2:
      '將大蝦蒸熟後，加入熟肉片、竹筍、小黃瓜等，用松仁調味汁攪拌的宮廷飲食，口味鮮香。',
  },
  {
    id: 426,
    category: '숙채 [Sukchae]',
    name: '도라지나물',
    pronounce: 'Dorajinamul',
    description:
      '껍질을 벗긴 도라지는 가늘게 잘라 소금으로 주물러 쓴맛을 빼고, 기름을 두른 팬에서 다진 마늘, 깨소금과 함께 볶은 나물이다. 담백하고, 쌉싸름한 맛이 입맛을 돋운다.',
    name_en: 'Bellflower Root Salad',
    description_en:
      'For this dish, peel, shred, and knead balloon flower root with coarse salt to get rid of its bitter taste and stir-fry with minced garlic and sesame seeds in an oiled pan. The sharp yet refreshing taste stimulates one’s appetite.',
    name_ja: '桔梗の根のナムル',
    description_ja:
      '皮をむいて薄切りにした桔梗の根に塩をまぶして苦味をとり、油をひいたフライパンでみじん切りしたにんにく、ごま塩といっしょに炒めたナムル。あっさりとした味と少しの苦味が食欲をそそる。',
    name_zh: '凉拌桔梗',
    description_zh:
      '桔梗去皮后切成细条，撒上盐揉搓一会儿去掉涩味，平底锅烧热后倒入少许油，加入桔梗和蒜末、芝麻盐一起翻炒即可。凉拌桔梗的味道清淡中带着微微的苦涩，非常开胃。',
    name_zh2: '涼拌桔梗',
    description_zh2:
      '桔梗剝掉皮，撕成細絲，然後用食鹽抓一抓，以去掉苦味。鍋裡倒點油，爆蒜蓉，放入桔梗絲和芝麻鹽炒熟。桔梗特有的苦味有助於開胃。',
  },
  {
    id: 427,
    category: '숙채 [Sukchae]',
    name: '무나물',
    pronounce: 'Munamul',
    description:
      '무를 채 썰어서 볶아서 무르게 익힌 나물이다. 뜨거울 때 밥에 얹어 먹으면 촉촉하고, 부드러우며 단 맛이 나는 것이 좋다.',
    name_en: 'Radish Salad',
    description_en:
      'Radish julienned and stir-fried in a pan. This sweet and moist radish salad makes a nice side dish for rice when warm.',
    name_ja: '大根のナムル',
    description_ja:
      '大根を千切りにしてやわかかくなるまで炒めたナムル。あつあつのものをご飯にのせて食べると、しっとりとしてやわらかい甘みがより際立ち美味しい。',
    name_zh: '凉拌萝卜丝',
    description_zh: '萝卜切成丝后炒熟即可。趁热时配米饭吃，味道更加绵润清甜。',
    name_zh2: '涼拌蘿蔔絲',
    description_zh2: '把蘿蔔切成絲後炒熟，趁熱的時候放在米飯上吃，口感柔軟香甜，有滋有味。',
  },
  {
    id: 428,
    category: '숙채 [Sukchae]',
    name: '미나리나물',
    pronounce: 'Minarinamul',
    description:
      '미나리를 끓는 물에 데쳐 갖은 양념으로 무친 나물이다. 미나리는 해독작용이 뛰어나 미세먼지 배출에 도움을 주는 식품으로, 향긋하고 아삭아삭한 맛이 좋다.',
    name_en: 'Water Parsley Salad',
    description_en:
      'Parboiled water parsley mixed with a variety of condiments. Fragrant and crunchy, water parsley is an excellent food for detoxing as it helps eliminate fine dust from the body.',
    name_ja: 'セリのナムル',
    description_ja:
      'セリを熱湯で湯がいてたれで和えたナムル。セリには解毒作用があり、体内に入ってきた粒子状物質の排出を促してくれる食べ物と言われる。香りとしゃきしゃきした食感がいい。',
    name_zh: '凉拌水芹',
    description_zh:
      '水芹用开水焯一下，捞出沥干水分后，加入各种调料搅拌即可。水芹清热解毒，有助于排出微尘，而且味道十分鲜美爽口，口感极好。',
    name_zh2: '涼拌水芹',
    description_zh2:
      '用熱水焯一下水芹，然後用各種調料拌勻。水芹具有非常出色的解毒作用，有助於排出體內微塵，口感香脆。',
  },
  {
    id: 429,
    category: '숙채 [Sukchae]',
    name: '미역초무침',
    pronounce: 'Miyeokchomuchim',
    description:
      '데친 미역에 소금, 설탕, 식초를 넣고 상큼하게 간을 한 음식이다. 기호에 따라 오이나 고추를 같이 넣으면 맛있다.',
    name_en: 'Sweet and Sour Seaweed Salad',
    description_en:
      'Parboiled brown seaweed seasoned with a mixture of salt, sugar, and vinegar. Cucumber or green peppers may be added according to one’s preference.',
    name_ja: 'ワカメ酢の物',
    description_ja:
      'ゆがいたワカメに塩、砂糖、酢を加えてさっぱりと味を調える。好みによりキュウリや唐辛子を入れても美味しい。',
    name_zh: '醋拌海带',
    description_zh:
      '海带用开水焯一下，加入盐、白糖、醋凉拌即可。醋拌海带味道酸甜又爽口，根据个人的喜好加一些黄瓜或辣椒，味道更加美味。',
    name_zh2: '醋拌海帶',
    description_zh2:
      '海帶用熱水焯一下，然後放入食鹽、白糖和食醋，是口感酸甜的菜肴。可根據喜好放入黃瓜或辣椒。',
  },
  {
    id: 430,
    category: '숙채 [Sukchae]',
    name: '비름나물',
    pronounce: 'Bireumnamul',
    description:
      '살짝 데쳐 물기를 꼭 짠 비름에 기호에 따라 간장 양념, 된장 양념, 고추장 양념을 넣어 무친 나물이다.',
    name_en: 'Pigweed Salad',
    description_en:
      'Parboiled and squeeze-dried pigweed mixed with a mixture of soy sauce, doenjang (soybean paste), and gochujang (red chili paste).',
    name_ja: 'ヒユのナムル',
    description_ja:
      'さっと湯がいて水気を切ったヒユを、好みによってカンジャンベースのたれ、テンジャンベースのたれ、コチュジャンベースのたれでからめたナムル。',
    name_zh: '凉拌苋菜',
    description_zh:
      '苋菜用开水焯一下，捞出挤干水分后，根据个人的口味加入用酱油、大酱或辣椒酱调制的调味酱搅拌即可。',
    name_zh2: '涼拌莧菜',
    description_zh2:
      '莧菜用熱水稍微焯一下，然後擠幹水分。可以根據喜好加入醬油、大醬、辣椒醬等調料拌勻。',
  },
  {
    id: 431,
    category: '숙채 [Sukchae]',
    name: '숙주나물',
    pronounce: 'Sukjunamul',
    description:
      '소금물에 살짝 데친 숙주에 파, 마늘, 소금, 참기름을 넣고 조물조물 무친 나물이다. 숙주는 녹두의 어린 싹으로, 비빔밥의 재료로도 쓰이고, 제사상에도 올라가는 나물이다.',
    name_en: 'Mung Bean Sprout Salad',
    description_en:
      'Mung bean sprouts parboiled in salt water and mixed with a variety of seasonings, including chopped green onion, garlic, salt, and sesame oil.',
    name_ja: 'もやしのナムル',
    description_ja:
      '緑豆もやしの芽のナムル。もやしを茹でて水気をしっかり切った後、クッカンジャン、みじん切りにしたねぎとにんにくで味を調えて食べる。',
    name_zh: '凉拌绿豆芽',
    description_zh:
      '绿豆芽用盐水焯一下，捞出沥干水分后，加入葱、蒜,、盐、香油等调料搅拌均匀即可。绿豆芽是绿豆的嫩芽，可作为拌饭的材料，也是祭祀桌上常见的一道凉拌菜。',
    name_zh2: '涼拌綠豆芽',
    description_zh2:
      '綠豆芽用熱鹽水焯一下，再放入蔥花、蒜末、食鹽和香油拌勻。綠豆芽是綠豆的嫩芽，可以拌飯吃。這道菜也作為祭祀用菜。',
  },
  {
    id: 432,
    category: '숙채 [Sukchae]',
    name: '시금치나물',
    pronounce: 'Sigeumchinamul',
    description:
      '끓는 물에 데친 시금치를 소금, 다진 파ㆍ마늘, 참기름, 깨소금으로 무친 것이다. 나물로도 많이 먹지만, 김밥의 재료로도 많이 쓰인다.',
    name_en: 'Spinach Salad',
    description_en:
      'Parboiled spinach seasoned with salt, chopped green onion and garlic, sesame oil, and sesame seeds. Spinach is used to make salads and as a filling for gimbap.',
    name_ja: 'ほうれん草のナムル',
    description_ja:
      '熱湯で湯がいたほうれん草を、塩、みじん切りしたねぎとにんにく、ごま油、ごま塩で和えたもの。ナムルとしてもよく食べられるが、キンパプの材料としてもよく使われる。',
    name_zh: '凉拌菠菜',
    description_zh:
      '菠菜用开水焯一下，捞出挤干水分后，加入盐、葱末、蒜末、香油、芝麻盐搅拌即可。菠菜除了凉拌以外，还可用来做紫菜包饭。',
    name_zh2: '涼拌菠菜',
    description_zh2:
      '把菠菜用熱水焯一下，再放入食鹽、蔥花和蒜末，以及香油拌勻。菠菜除了做成涼拌菜，也可以作為紫菜卷飯的食材。',
  },
  {
    id: 433,
    category: '숙채 [Sukchae]',
    name: '시래기나물',
    pronounce: 'Siraeginamul',
    description:
      '시래기는 무청을 말린 것을 말한다. 무청 시래기를 삶아 하룻밤 정도 물에 불린 후 국 간장, 다진 파ㆍ마늘, 참기름 등의 양념에 무쳐 팬에 볶는다.',
    name_en: 'Dried Radish Leaf Salad',
    description_en:
      'For this dish, boil siraegi (radish greens) that has been soaked in water overnight, drain, mix with soy sauce, chopped green onion, garlic, and sesame oil, and stir-fry in a pan.',
    name_ja: '干し菜っ葉のナムル',
    description_ja:
      '干し菜っ葉を茹でて一晩ほど水に浸けてクッカンジャン、みじん切りしたねぎとにんにく、ごま油などのたれで和えてフライパンで炒めたもの。',
    name_zh: '凉拌干萝卜缨',
    description_zh:
      '干萝卜缨用水煮开并清水浸泡一个晚上，捞出沥干水分后，加入酱油、葱末、蒜末、香油等调料搅拌均匀后炒一下即可。',
    name_zh2: '涼拌幹蘿蔔纓',
    description_zh2:
      '幹蘿蔔纓是指曬乾的蘿蔔纓。把蘿蔔纓煮熟，用水泡一夜，然後用湯醬油、蔥花、蒜蓉和香油等調料拌勻後炒熟。',
  },
  {
    id: 434,
    category: '숙채 [Sukchae]',
    name: '쑥갓나물무침',
    pronounce: 'Ssukgannamulmuchim',
    description:
      '쑥갓을 데쳐 간장, 참기름 양념에 무친 것이다. 기호에 따라 두부를 넣기도 하며, 향긋한 맛이 나는 것이 특징이다.',
    name_en: 'Crown Daisy Salad',
    description_en:
      'Parboiled crown daisy mixed with soy sauce and sesame oil. Tofu may be added if one wishes. Crown daisy is especially favored for its pleasant fragrance.',
    name_ja: '春菊のナムルの和え物',
    description_ja:
      '春菊を湯がき、カンジャンとごま油のたれで和える。好みにより豆腐を入れる場合もある。香ばしい香りがあるのが特徴。',
    name_zh: '凉拌茼蒿',
    description_zh:
      '茼蒿用开水焯一下，加入酱油和香油搅拌即可。味道略带香甜，也可根据个人的口味加入豆腐。',
    name_zh2: '涼拌茼蒿',
    description_zh2:
      '用熱水焯一下茼蒿，然後用醬油和香油等拌勻，可根據喜好放入豆腐。這道菜的特點是散發著茼蒿特有的香氣。',
  },
  {
    id: 435,
    category: '숙채 [Sukchae]',
    name: '열무된장무침',
    pronounce: 'Yeolmudoenjangmuchim',
    description:
      '살짝 데친 열무에 된장, 마늘, 매실액 등의 양념을 넣어 무쳐 먹는다. 열무의 쌉쌀한 맛과 된장이 잘 어울려 밥에 비벼 먹으면 맛있다. 여름에 즐겨 먹는 밥반찬이다.',
    name_en: 'Young Radish Soybean Paste Salad',
    description_en:
      'Parboiled young radish mixed with a sauce made with doenjang (soybean paste), garlic, and fermented Japanese apricot juice. The pungent young radish goes well with doenjang.',
    name_ja: '大根の若菜のテンジャン和え',
    description_ja:
      'さっとゆがいた大根の若菜にテンジャン、にんにく、梅エキスなどを加えて和えたもの。大根の若菜の苦味とテンジャンの風味が抜群で、ご飯に混ぜて食べるとさらに美味しい。夏の定番料理でもある。',
    name_zh: '凉拌大酱萝卜缨',
    description_zh:
      '萝卜缨用开水稍微焯一下，加入大酱、蒜、梅子汁等调料拌匀即可。萝卜缨微苦的味道与大酱形成绝妙的组合，拌米饭吃味道更佳。是夏季常吃的下饭菜。',
    name_zh2: '涼拌大醬蘿蔔纓辛奇',
    description_zh2:
      '蘿蔔纓用開水燙過，加入大醬、大蒜、梅子汁等調味料拌勻即可。蘿蔔纓略帶苦澀的味道與大醬相輔相成，拌米飯吃更加可口。是夏季常吃的下飯菜。',
  },
  {
    id: 436,
    category: '숙채 [Sukchae]',
    name: '우엉잡채',
    pronounce: 'Ueongjapchae',
    description:
      '우엉을 채 썰어 간장과 설탕에 조리고 여러 가지 채소를 채 썰어 볶아서 삶은 당면과 함께 버무린 음식이다. 각종 채소의 색이 보기 좋게 어우러진 전통 음식이다.',
    name_en: 'Stir-fried Glass Noodles and Vegetables with Burdock Root',
    description_en:
      'This dish is made by braising julienned burdock root in a soy sauce sweetened with sugar and mixing it with stir-fried chopped vegetables and boiled glass noodles. It is a colorful classic dish.',
    name_ja: 'ゴボウチャプチェ',
    description_ja:
      '千切りゴボウを醤油と砂糖で濃いめに煮詰めた後、千切りにして炒めた野菜や、ゆでた春雨と一緒に混ぜ合わせたもの。色とりどりの野菜を組み合わせた伝統料理。',
    name_zh: '牛蒡炒粉丝',
    description_zh:
      '将牛蒡切成丝后加入酱油和白糖炖制、再与切丝炒熟的各种蔬菜和煮好的粉丝一同拌匀即可。是一道汇集了各色蔬菜的传统料理。',
    name_zh2: '牛蒡什錦炒粉絲',
    description_zh2:
      '牛蒡切絲後加入醬油、糖燉煮，加上切絲炒熟的各種蔬菜和煮好的粉條攪拌而成，是一道色彩鮮豔的傳統飲食。',
  },
  {
    id: 437,
    category: '숙채 [Sukchae]',
    name: '잡채',
    pronounce: 'Japchae',
    description:
      '삶은 당면과 볶은 채소, 버섯, 고기 등을 간장 양념에 함께 버무려 먹는 음식이다.화려하면서도 품격 있어 잔치 때 빠지지 않고 상에 오르는 음식이다.',
    name_en: 'Stir-fried Glass Noodles and Vegetables',
    description_en:
      'Glass noodles stir-friedwith beef and assorted mushrooms and vegetables. A colorful classic dish that is always served at large gatherings or on special occasions.',
    name_ja: 'チャプチェ',
    description_ja:
      'ゆでた春雨と、炒めた野菜やきのこ、肉などを和えた料理。見た目にも華やかで高級感があり、お祝いの席にも欠かせない一品。',
    name_zh: '什锦炒粉丝',
    description_zh:
      '将蔬菜、蘑菇、肉丝等炒熟，用调 味料与煮好的粉丝一同搅拌而成，不仅色泽 华丽、味道鲜美，是宴席上不可缺少的菜肴。',
    name_zh2: '什錦拌粉絲',
    description_zh2:
      '炒蔬菜、蘑菇、肉等後與煮好的粉絲一起用醬油調味料攪拌而成。特點在於將各種食材各自用調味料攪拌後炒熟再放在一起攪拌。',
  },
  {
    id: 438,
    category: '숙채 [Sukchae]',
    name: '죽순채',
    pronounce: 'Juksunchae',
    description:
      '삶은 죽순을 납작하게 썰어 소고기, 버섯, 미나리, 풋고추 등과 볶은 뒤 초간장 양념을 끼얹어 버무려 먹는 음식이다.',
    name_en: 'Seasoned Bamboo Shoots',
    description_en:
      'Boiled andsliced bamboo shoots stir-fried with beef,mushrooms, Korean parsley, and green chili pepper. Drizzled with a soy vinaigrette sauce before serving.',
    name_ja: '竹の子の炒め物',
    description_ja:
      'ゆでた竹の子を薄切りにして炒め、牛肉やきのこ、せり、青唐辛子なども軽く火を通し、酢醤油をかけて和えたもの。',
    name_zh: '竹笋菜',
    description_zh:
      '将煮熟的竹笋切片炒熟，再将牛肉 丝、蘑菇、水芹、尖椒等分别炒熟后用醋和酱 油拌匀。',
    name_zh2: '竹筍菜',
    description_zh2: '將煮好的竹筍切成片後，與牛肉、蘑菇等食材一起炒後加入加醋醬油拌勻。',
  },
  {
    id: 439,
    category: '숙채 [Sukchae]',
    name: '참나물',
    pronounce: 'Chamnamul',
    description:
      '참나물을 소금물에 살짝 데쳐 찬물에 헹구어 간장이나 고추장, 다진 파, 다진 마늘, 깨소금, 참기름, 소금 등을 넣고 골고루 무친다. 봄철에 입맛을 돋워 주는 나물이다.',
    name_en: 'Short-fruit Pimpinella Salad',
    description_en:
      'Short-fruit pimpinella parboiled in salt water, rinsed in cold water, and seasoned with a mixture of soy sauce or gochujang (red chili paste), chopped garlic and green onion, sesame seeds, sesame oil, and salt. This salad is often eaten in spring to stimulate appetite.',
    name_ja: 'ヒカゲミツバゼリのナムル',
    description_ja:
      '干したヒカゲミツバゼリを茹でてから冷水ですすいで水気を切り、カンジャン、コチュジャン、刻みねぎ、みじん切りしたにんにく、ごま塩、ごま油、塩などで和える。春の食欲不振によいナムルである。',
    name_zh: '凉拌茴芹',
    description_zh:
      '茴芹用开水焯一下，用凉水冲洗后沥干水分，加入酱油或辣椒酱和葱末、蒜末、芝麻盐、香油、盐等调料搅拌均匀即可。茴芹产于春季，是一道可令人增加食欲的野菜。',
    name_zh2: '涼拌茴芹',
    description_zh2:
      '茴芹用鹽水稍微焯一下，然後用涼水沖好瀝幹，加入醬油或辣椒醬、蔥花、蒜蓉、芝麻鹽、香油、食鹽等拌勻，是非常好的春季開胃菜。',
  },
  {
    id: 440,
    category: '숙채 [Sukchae]',
    name: '취나물',
    pronounce: 'Chwinamul',
    description:
      '산에서 자생하는 취나물은 맛과 향이 뛰어나 쌈이나 나물로 즐겨 먹는다. 끓는 물에 살짝 데쳐 쓴맛을 없앤 후 양념에 무치거나 볶아서 먹으면 좋다.',
    name_en: 'Aster Leaf Salad',
    description_en:
      'An edible mountain plant, aster is fragrant and delicious. For this dish, it is parboiled to remove its bitter taste and thenseasoned or stir-fried. It is also eaten in wraps.',
    name_ja: 'シラヤマギクのナムル',
    description_ja:
      '山に自生するシラヤマギクは、味と香りに優れ、包み菜やナムルとしてよく食べられる。熱湯で湯掻いて苦みを取り、和え物や炒め物で食べる。',
    name_zh: '凉拌东风菜',
    description_zh:
      '东风菜生长于山上，香浓味美， 可作包菜或素菜。用开水轻轻焯一下去掉涩 味，然后加入调料凉拌或炒着吃均可。',
    name_zh2: '涼拌東風菜',
    description_zh2:
      '在山裡生長的馬蹄葉味道與香氣都非常好，經常用來包飯或做成涼拌菜。用開水燙一下，以清除苦味，然後用調料拌勻或炒著吃都非常美味。',
  },
  {
    id: 441,
    category: '숙채 [Sukchae]',
    name: '콩나물무침',
    pronounce: 'Kongnamulmuchim',
    description:
      '단백질과 비타민이 풍부한 콩나물은 재배가 간단해 사계절 먹을 수 있는 식물이다. 찬물에 소금을 넣고 끓인 콩나물을 씻어, 물기를 가볍게 제거하고 갖은 양념에 무쳐 낸다.',
    name_en: 'Bean Sprout Salad',
    description_en:
      'Rich in protein and vitamins, bean sprouts are easy to grow all year round. This dish is made by boiling bean sprouts in salt water, draining them, and then mixing with a variety of seasonings.',
    name_ja: '豆もやしの和え物',
    description_ja:
      'タンパク質とビタミンが豊富に含まれているもやしは、栽培が簡単で、四季を通じて食べることができる植物だ。冷たい水に塩を入れて煮たもやしを洗い、軽く水を切って薬味で和える。',
    name_zh: '凉拌豆芽',
    description_zh:
      '黄豆芽具有丰富的蛋白质和维生素，而且容易培育，一年四季都可食用。锅中加入凉水和盐烧开，将豆芽倒入开水中煮熟，捞出后用清水冲洗并沥干水分，放入各种调料搅拌均匀即可。',
    name_zh2: '涼拌豆芽',
    description_zh2:
      '豆芽富含蛋白質與維生素，而且易於栽培，是一年四季皆產的蔬菜。將豆芽放入加鹽的涼水裡煮熟，然後用清水沖洗並輕輕瀝幹水分，再加入各種調料拌勻。',
  },
  {
    id: 442,
    category: '숙채 [Sukchae]',
    name: '탕평채',
    pronounce: 'Tangpyeongchae',
    description:
      '녹두묵 채 썬 것에 고기볶음, 미나리, 계란지단, 김 등 다섯 가지 색깔의 재료를 섞어 만든 무침이다. 화해의 의미가 있으며 청포묵 무침이라고도 한다.',
    name_en: 'Mung Bean Jelly Salad',
    description_en:
      'Thinly-sliced mung bean muk (jelly) with sautéed beef, Korean parsley, egg garnish, and roasted dried laver. Featuring five different colors, this dish is also called cheongpomukmuchim (seasoned mung bean jelly).',
    name_ja: 'ところてんの和え物',
    description_ja:
      '緑豆のでん粉をゼリー状に固めたものに、炒めた肉やせり、錦糸卵、海苔など五色の材料を混ぜた料理。「チョンポムッムチム」とも呼ばれる。',
    name_zh: '荡平菜',
    description_zh:
      '用绿豆凉粉切丝加上炒肉丝、水芹、 鸡蛋、紫菜等五种颜色的食材做的拌菜，具有 归于和好的喻意，又叫做拌绿豆凉粉。',
    name_zh2: '蕩平菜',
    description_zh2:
      '蕩平菜是用綠豆澱粉製成綠豆涼粉後切成絲，加上炒肉絲和煎雞蛋等五色食材做的拌菜。',
  },
  {
    id: 443,
    category: '생채 [Saengchae]',
    name: '골뱅이무침',
    pronounce: 'Golbaengimuchim',
    description:
      '쫄깃한 맛의 골뱅이와 각종 채소를 썰어서 고춧가루 등의 갖은 양념으로 무친 것이다. 매콤한 맛의 골뱅이 무침은 술안주로도 좋고 국수를 넣어 한 끼 식사로도 훌륭하다.',
    name_en: 'Spicy Sea Snails Salad',
    description_en:
      'This dish is made by mixing chewy sea snails with a varietyof julienned vegetables and red chili-basedseasonings. This spicy sea snail salad is a popular dish that is often served with alcoholic beverages or mixed with noodles.',
    name_ja: 'つぶ貝の和え物',
    description_ja:
      '歯ごたえのあるつぶ貝と色々な野菜を切り、粉唐辛子などの薬味で和えたもの。ピリッと辛いつぶ貝の和え物は、酒のつまみにもぴったりで、麺を入れて食べると立派な食事になる。',
    name_zh: '凉拌海螺',
    description_zh:
      '将口感鲜嫩有嚼劲的海螺和切成 适当大小的各种蔬菜倒入器皿里，加入辣椒 粉等各种调料拌匀。鲜辣爽口的味道不仅适 合做下酒菜，加入煮熟的面条拌一拌就可以 作为一顿正餐。',
    name_zh2: '涼拌海螺',
    description_zh2:
      '在口感鮮嫩有嚼勁的罐頭海螺中加入各種蔬菜後，用辣拌調味醬攪拌而成，味道鮮辣酸甜。',
  },
  {
    id: 444,
    category: '생채 [Saengchae]',
    name: '굴무침',
    pronounce: 'Gulmuchim',
    description:
      '싱싱한 굴에 갖은 양념을 하여 무친 요리로, 겨울철 별미이다. 굴은 비타민과 무기질 등이 풍부한 음식이며, 무침을 하면 향이 살아나 먹기 좋다',
    name_en: 'Oyster Salad',
    description_en:
      'This winter delicacy is made by mixing fresh oysters with a variety of seasonings. It is rich in vitamins and minerals and prepared in such a way that it brings out the unique fragrance of the oysters.',
    name_ja: 'カキの和え物',
    description_ja:
      '新鮮なカキにたれをからめて和えた冬が旬の料理。カキには、ビタミンやミネラルなどが豊富に含まれている。和え物にすると香りがたち、味のほかに香りも楽しめる。',
    name_zh: '凉拌牡蛎',
    description_zh:
      '新鲜的牡蛎加入各种调料搅拌即可，是冬天的一道特色菜肴。牡蛎富含维生素和矿物质等营养成分，尤其凉拌更能让人感受到满口大海的清香味道，味道十分鲜美。',
    name_zh2: '涼拌牡蠣',
    description_zh2:
      '新鮮牡蠣用各種調料拌勻即可，是冬季常吃的美食。牡蠣富含維生素與礦物質，涼拌牡蠣吃起來非常鮮美，散發一股牡蠣的清香。',
  },
  {
    id: 445,
    category: '생채 [Saengchae]',
    name: '김무침',
    pronounce: 'Gimmuchim',
    description:
      '김은 홍조류 보라 털과의 조류를 평평하게 펴서 종이처럼 얇게 말린 것이다. 김을 살짝 구워서 부스러뜨린 후 간장, 설탕, 깨소금, 참기름, 고춧가루를 섞어 양념장을 만들어 무친다.',
    name_en: 'Laver Salad',
    description_en:
      'Gim (laver) is an edible red alga that is dried on a flat surface like a piece of paper. This laver salad is made by crushing lightly toasted laver and seasoning it with a mixture of soy sauce, sugar, sesame seeds, sesame oil, and red chili powder.',
    name_ja: 'のりの和え物',
    description_ja:
      'のりは、赤藻類のウシケノリ科の藻類を平たくのばして紙のように薄くして干したもの。のりをさっとあぶって揉み、カンジャン、砂糖、ごま塩、ごま油、粉唐辛子を混ぜたたれで和える。',
    name_zh: '凉拌紫菜',
    description_zh:
      '紫菜是将红藻类红毛藻科的藻类摊成纸片一样后晾晒而成。紫菜稍微烤一下，然后捏碎，再加入用酱油、白糖、芝麻盐、香油、辣椒粉等调制的调味酱搅拌即可。',
    name_zh2: '涼拌紫菜',
    description_zh2:
      '把紅藻類薄薄地平鋪之後曬乾即成紫菜。紫菜稍微烤一下，然後弄成紫菜碎，再用醬油、白糖、芝麻鹽、香油和辣椒粉做成調味汁拌勻。',
  },
  {
    id: 446,
    category: '생채 [Saengchae]',
    name: '꼬막무침',
    pronounce: 'Kkomangmuchim',
    description:
      '꼬막을 삶아 껍질을 깐 후, 오이, 양파, 당근, 깻잎 등의 야채와 간장, 고춧가루를 넣어 만든 양념장을 넣고 무쳐 새콤달콤하게 먹는 음식이다.',
    name_en: 'Cockle Salad',
    description_en:
      'Cockles boiled, shucked, and tossed with cucumber, onion, carrot, perilla leaves, and other vegetables.',
    name_ja: 'ハイガイの和え物',
    description_ja:
      'ハイガイを茹でて殻をとり、キュウリ、玉ねぎ、にんじん、エゴマの葉などの野菜と、カンジャン、粉唐辛子のたれを加えて和えた甘酸っぱい和え物。',
    name_zh: '凉拌血蚶',
    description_zh:
      '血蚶煮熟、去壳后，加入黄瓜、洋葱、胡萝卜、苏子叶等蔬菜，用酱油、辣椒粉等做成的调味酱搅拌即可，味道十分酸甜可口。',
    name_zh2: '涼拌泥蚶',
    description_zh2:
      '泥蚶煮熟後取出肉，放入黃瓜、洋蔥、胡蘿蔔、蘇子葉等蔬菜，再放入用醬油和辣椒粉做成的調味料拌勻。這道菜味道酸酸甜甜，非常可口。',
  },
  {
    id: 447,
    category: '생채 [Saengchae]',
    name: '냉채족발',
    pronounce: 'Naengchaejokbal',
    description:
      '부드럽게 삶은 돼지족발을 얇게 썰어 오이, 양파, 양배추 등 채소와 함께 푸짐하게 담아 겨자소스를 뿌려 먹는다. 새콤달콤하며 매콤한 소스 맛이 일품이다.',
    name_en: 'Chilled Pig’s Feet Salad',
    description_en:
      "Pig's feet boiled until tender then sliced and served with vegetables, such as cucumber, onion, and cabbage, on a platter. A mustard-based sauce is poured over the dish for a spicy, sweet, and sour taste.",
    name_ja: '豚足冷菜',
    description_ja:
      'やわらかくゆでた豚足を薄切りにし、たっぷりのきゅうり、玉ねぎ、キャベツなどの野菜と一緒に盛り付け、辛子ソースをかけて食べる。甘酸っぱくて辛いソースが食欲をそそる。',
    name_zh: '凉拌酱猪蹄',
    description_zh:
      '将猪蹄煮至软烂后切成薄片，和黄瓜、洋葱、卷心菜等蔬菜一起摆到盘中，淋上芥末调味汁来吃。酸甜香辣的酱汁带来极佳风味。',
    name_zh2: '豬腳冷盤',
    description_zh2:
      '將豬腳煮至柔軟後切薄片，和小黃瓜、洋蔥、高麗菜等蔬菜一起擺到盤子裡，淋上芥末醬食用。酸甜帶辣的醬汁風味極佳。',
  },
  {
    id: 448,
    category: '생채 [Saengchae]',
    name: '노각무침',
    pronounce: 'Nogangmuchim',
    description:
      '노각은 완전히 익어 표면의 색깔이 누렇게 된 늙은 오이를 말한다. 껍질을 벗겨 속을 긁어낸 다음, 소금에 살짝 절여 갖은 양념에 버무려 먹는데, 아삭아삭한 맛이 좋다.',
    name_en: 'Yellow Cucumber Salad',
    description_en:
      'Peeled and cored nogak (overripe cucumber) lightly salted and mixed with a variety of seasonings. This salad is delightfully crunchy.',
    name_ja: '老いキュウリの和え物',
    description_ja:
      '老いキュウリは、熟しすぎて表面が黄色くなったキュウリのこと。皮をむいて種などを取り除いた後、軽く塩漬けし、たれをからめて食べる。シャキシャキした食感がいい。',
    name_zh: '凉拌老黄瓜',
    description_zh:
      '老黄瓜是指表面全部都变黄的很老的黄瓜。将老黄瓜剥皮、取籽后，用盐腌一会儿，再加入各种调料搅拌即可，吃起来非常清脆爽口。',
    name_zh2: '涼拌老黃瓜',
    description_zh2:
      '老黃瓜是指因熟透而表皮發黃的黃瓜。削掉皮，挖除瓤，用食鹽醃製片刻後再用各種調料拌勻。這道菜口感爽脆，非常美味。',
  },
  {
    id: 449,
    category: '생채 [Saengchae]',
    name: '달래무침',
    pronounce: 'Dallaemuchim',
    description:
      '달래를 간장, 고춧가루, 깨소금, 참기름 등의 양념에 무친 것이다. 달래는 무쳐서도 먹지만, 잘게 썰어 양념간장을 만들거나 된장찌개에 넣어도 맛이 좋다.',
    name_en: 'Wild Chive Salad',
    description_en:
      'Fresh wild chives mixed with soy sauce, red chili powder, sesame seeds, and sesame oil. Although wild chives are often eaten in salad, they are also used as an ingredient in sauces or doenjangjjigae (soybean paste stew).',
    name_ja: 'ヒメニラの和え物',
    description_ja:
      'ヒメニラをカンジャン、粉唐辛子、ごま塩、ごま油などのたれで和えたもの。ヒメニラは和えものにして食べるほかに、小さく切ってカンジャンベースのたれに入れたり、テンジャンククに入れても美味しい。',
    name_zh: '凉拌山蒜',
    description_zh:
      '山蒜用酱油、辣椒粉、芝麻盐、香油等调料搅拌即可。山蒜可以凉拌，也可以切碎做成酱油调味酱或者做大酱锅时放一些进去。',
    name_zh2: '涼拌山蒜',
    description_zh2:
      '山蒜用醬油、辣椒粉、芝麻鹽、香油等拌勻。除了涼拌，也可以切成小段，做成調味醬，或者放入醬湯裡也非常美味。',
  },
  {
    id: 450,
    category: '생채 [Saengchae]',
    name: '대구포무침',
    pronounce: 'Daegupomuchim',
    description:
      '대구 배 쪽에 칼집을 넣어 내장을 제거한 후, 펼쳐 말려 포로 만든 것을 말한다. 구워먹기도 하고, 고춧가루와 참기름을 넣고 무쳐 먹기도 한다.',
    name_en: 'Dried Codfish Fillet Salad',
    description_en:
      'Gut a cod by making an incision in the belly and removing the guts, gills, and roe and butterfly it before drying. Dried cod is cooked on a grill or mixed with red chili powder and sesame oil.',
    name_ja: '干したらの和え物',
    description_ja:
      'たらのはらわたを取り除き、開いて干物にしたもの。焼いたり、粉唐辛子とごま油と和えて食べる。',
    name_zh: '凉拌鳕鱼干',
    description_zh:
      '切开鳕鱼的腹部去掉内脏，摊平后晒干，做成鱼干即可，可以烤着吃，也可以加一些辣椒粉和香油伴着吃。',
    name_zh2: '涼拌鱈魚乾',
    description_zh2:
      '用刀劃開鱈魚的肚皮，清除內臟後翻開曬乾。可以烤著吃，也可以用辣椒粉和香油拌著吃。',
  },
  {
    id: 451,
    category: '생채 [Saengchae]',
    name: '더덕생채',
    pronounce: 'Deodeoksaengchae',
    description:
      '더덕을 손질하여 소금물에 담가 쓴맛을 우려낸 후 물기를 없애고 두들겨서 편 다음 가늘게 찢어 새콤달콤한 초고추장 양념으로 무쳐낸 음식이다.',
    name_en: 'Deodeok Fresh Salad',
    description_en:
      'For this dish, deodeok is flattened, shredded, andseasoned with a sweet and sour vinegar-based gochujang. To prepare, the deodeok is first soaked in salt water to remove the bitter taste and then dried.',
    name_ja: '蔓人参の和え物',
    description_ja:
      '蔓人参を塩水に浸けて苦みを取り、水気を切ってたたいて伸ばす。それを細く裂いて甘酸っぱい酢コチュジャンで和えた料理。',
    name_zh: '生拌沙参',
    description_zh:
      '将沙参洗净后在盐水中浸泡一段 时间以去除涩味，控水后放在砧板上拍打，再 撕成细条，用酸甜口味的辣椒酱搅拌即可。',
    name_zh2: '生拌沙參',
    description_zh2:
      '用鹽水泡清理好的沙參，以清除苦味。然後瀝幹水分，拍打成片狀，再撕成細絲，用酸甜的醋辣醬拌勻。',
  },
  {
    id: 452,
    category: '생채 [Saengchae]',
    name: '도라지생채',
    pronounce: 'Dorajisaengchae',
    description:
      '껍질을 벗기고 먹기 좋은 크기로 잘라 손질한 생도라지에 설탕, 식초, 고춧가루 등을 넣어 맛을 낸 생채로, 오이를 어슷하게 썰어서 넣기도 한다.',
    name_en: 'Bellflower Root Fresh Salad',
    description_en:
      'Peeled and shredded fresh bellflower root seasoned with a mixture of sugar, vinegar, and red chili powder. This salad is often tossed with cucumbers sliced sideways as well.',
    name_ja: '桔梗の根の和え物',
    description_ja:
      '皮をむいて食べやすい大きさに切った桔梗の根に砂糖、酢、粉唐辛子などを入れて味を調えたナムル。半月切りしたきゅうりを混ぜる場合もある。',
    name_zh: '生拌桔梗',
    description_zh:
      '生桔梗剥皮后切成适当大小，加入白糖、醋、辣椒粉等调料搅拌即可，也可以放一些斜切的黄瓜片。',
    name_zh2: '生拌桔梗',
    description_zh2:
      '新鮮桔梗去掉皮，撕成適當粗細的絲，然後放入白糖、食醋、辣椒粉等拌勻，也可以放入切好的黃瓜。',
  },
  {
    id: 453,
    category: '생채 [Saengchae]',
    name: '도토리묵',
    pronounce: 'Dotorimuk',
    description:
      '도토리 녹말을 물에 풀어 끓인 다음 굳힌 음식이다. 당근, 쑥갓, 오이, 풋고추 등을 넣고 양념장에 버무려 먹는다.',
    name_en: 'Acorn Jelly Salad',
    description_en:
      'A smooth gelatin made of acorn starch sliced and tossed with carrots, crown daisy, cucumber, and greenchili pepper in a seasoned soy-sesamesauce.',
    name_ja: 'どんぐりこんにゃくの和え物',
    description_ja:
      'どんぐりのでん粉を煮詰めてゼリー状に固めたもの。にんじんや春菊、きゅうり、青唐辛子などと一緒に薬味で和えて食べる。',
    name_zh: '橡子凉粉',
    description_zh:
      '橡子冻是用橡子粉加水煮熟后凝 固的食品，加入胡萝卜、茼蒿、黄瓜、尖椒等， 用调味酱搅拌一下即可食用。',
    name_zh2: '橡子涼粉',
    description_zh2:
      '橡子凍是將橡子粉放入水中煮熟凝固的食品，加入胡蘿蔔、小黃瓜等蔬菜後用調味醬攪拌一下即可食用。',
  },
  {
    id: 454,
    category: '생채 [Saengchae]',
    name: '도토리묵무침',
    pronounce: 'Dotorimungmuchim',
    description:
      '도토리 가루를 물에 풀어 계속 저으면서 끓여 굳인 것을 도토리묵이라 한다. 도토리묵무침은 도토리묵에 당근, 쑥갓, 오이, 고추 등을 넣고 양념장에 버무린 음식이다. 기호에 따라 구운 김과 미나리를 넣기도 한다.',
    name_en: 'Acorn Jelly Salad',
    description_en:
      'For this dish, dotorimuk (acorn jelly), which is made by mixing acorn starch powder with water and hardening, is sliced and tossed with carrots, crown daisy, cucumber, and green chili pepper in a seasoned soy-sesame sauce. Toasted and crushed laver and water parsley may be added according to one’s taste.',
    name_ja: 'どんぐりこんにゃくの和え物',
    description_ja:
      'どんぐりの粉を水に溶き、かきまぜながら煮て固めたものをどんぐりこんにゃくという。どんぐりこんにゃくの和え物は、どんぐりこんにゃくに、人参、春菊、キュウリ、唐辛子などを加えてたれで和えたもの。好みにより焼きのりとセリを入れることも。',
    name_zh: '橡子凉粉',
    description_zh:
      '将橡子粉在水中化开，一边煮一边搅拌，等汁液凉了凝固后就成了橡子凉粉。橡子凉粉和胡萝卜、茼蒿、黄瓜、辣椒等材料一起用调味酱进行搅拌即可。根据个人的口味，也可以放一下烤紫菜和水芹。',
    name_zh2: '橡子涼粉',
    description_zh2:
      '把橡子粉用水沖開，然後邊攪邊使其凝固。橡子涼粉裡放入胡蘿蔔、艾蒿、黃瓜、辣椒等，再用調味醬拌勻。可根據喜好放入烤紫菜和水芹。',
  },
  {
    id: 455,
    category: '생채 [Saengchae]',
    name: '돌미나리무침',
    pronounce: 'Dolminarimuchim',
    description:
      '돌미나리는 밭에서 자라는 야생 미나리이다. 소금물에 데친 돌미나리에 국간장, 파, 마늘, 참기름을 넣어 무치고 깨소금을 뿌려 마무리 한다.',
    name_en: 'Wild Parsley Salad',
    description_en:
      'Wild parsley parboiled in salt water and mixed with soy sauce, chopped green onion and garlic, and sesame oil. Sprinkle with sesame seeds before serving.',
    name_ja: '野芹の和え物',
    description_ja:
      '野芹は田のあぜなどに自生する野生のセリのこと。塩茹でした野芹にクッカンジャン、ねぎ、にんにく、ごま油を入れて和え、ごま塩をふって食べる。',
    name_zh: '凉拌野生水芹',
    description_zh:
      '野生水芹是生长于旱田的野生芹菜。将野生水芹用盐水焯一下，加入清酱油、葱、蒜、香油等调料搅拌，最后撒一些芝麻盐即可。',
    name_zh2: '涼拌野生水芹',
    description_zh2:
      '野生水芹是長在田裡的野菜。用鹽水焯一下野生水芹，然後用湯醬油、蔥蒜、香油拌勻，最後撒點芝麻鹽即可。',
  },
  {
    id: 456,
    category: '생채 [Saengchae]',
    name: '두릅초회',
    pronounce: 'Dureupchohoe',
    description:
      '두릅을 데쳐서 초고추장과 곁들여 내는 채소 숙회이다. 봄 두릅은 ‘산채의 제왕’로 불릴 정도로 영양이 좋은데, 피로회복과 춘곤증에 특히 좋다.',
    name_en: 'Parboiled Fatsia Shoot',
    description_en:
      'Parboiled fatsia shoots served with a vinegar-based gochujang dipping sauce. Fatsia shoots are so nutritious that they are called the “best wild edible vegetable” and known to be an effective remedy for fatigue and spring fever.',
    name_ja: 'タラの芽酢の物',
    description_ja:
      'タラの芽を湯がいて酢コチュジャンを添えるゆで野菜。春のタラの芽は「山菜の王様」と呼ばれるほど栄養面に優れており、特に疲労回復と春特有の眠気などにもいいとされる。',
    name_zh: '白灼刺嫩芽',
    description_zh:
      '刺嫩芽用开水焯一下，配上醋辣椒酱蘸着吃即可。春天的刺嫩芽被誉为“山菜之王”。不仅营养丰富，尤其有助于解除疲劳和春困症。',
    name_zh2: '白灼刺嫩芽',
    description_zh2:
      '刺嫩芽用熱水焯一下，跟辣椒醬一起吃即可。春天的刺嫩芽堪稱「野菜之王」，是營養豐富，有助於恢復疲勞和改善春困症的蔬菜。',
  },
  {
    id: 457,
    category: '생채 [Saengchae]',
    name: '마늘종무침',
    pronounce: 'Maneuljongmuchim',
    description:
      '마늘종에 고춧가루, 고추장, 다진 마늘 설탕, 소금, 참기름, 참깨, 물엿 등의 갖은 양념을 하여 무친 음식이다. 마늘종은 소금물에 살짝 데쳐 내어 특유의 아린 맛을 제거한 후 무치면 좋다.',
    name_en: 'Spicy Garlic Stem Salad',
    description_en:
      'Garlic scapes mixed with red chili powder, gochujang (red chili paste), chopped garlic, sugar, sesame oil, sesame seeds, and syrup. The garlic scapes should be parboiled in salt water to remove their unique, pungent taste before mixing with the seasonings.',
    name_ja: 'にんにくの茎の和え物',
    description_ja:
      'にんにくの茎を粉唐辛子、コチュジャン、みじん切りしたにんにく、砂糖、塩、ごま油、ごま、水あめなどが入ったたれで和えたもの。にんにくの芽は、さっと塩茹でし、特有のえぐ味をとってから和えるのがいい。',
    name_zh: '凉拌蒜薹',
    description_zh:
      '将蒜薹和辣椒粉、辣椒酱、蒜末、白糖、盐、香油、芝麻、糖稀等各种调料一起搅拌即可。蒜薹用盐水焯一下，可以去掉其特有的辛辣味儿。',
    name_zh2: '涼拌蒜薹',
    description_zh2:
      '蒜薹裡加入辣椒粉、辣椒醬、蒜蓉、白糖、食鹽、香油、熟芝麻、糖稀等各種調料拌勻。蒜薹可以提前用鹽水稍微焯一下，這樣可以有效清除蒜薹特有的辣味。',
  },
  {
    id: 458,
    category: '생채 [Saengchae]',
    name: '메밀무침',
    pronounce: 'Memilmuchim',
    description:
      '어리고 연한 메밀 잎을 깨끗이 씻어 뜨거운 물에 살짝 데친 다음 찬물에 헹궈 물기를 꼭 짜낸 후 양념장으로 무쳐 참기름을 더한 나물로 고혈압 예방에 좋다.',
    name_en: 'Buckwheat Leaf Salad',
    description_en:
      'This is a salad made with young and tender parboiled buckwheat leaves seasoned with a sauce and flavored with sesame oil. Buckwheat leaves are known to be effective for preventing high blood pressure.',
    name_ja: 'そばの和え物',
    description_ja:
      '若くて柔らかいそばの葉をきれいに洗い、熱湯で湯掻いてから冷水ですすいで水気を切り、ヤンニョムジャンで和えてごま油を加えたナムル。高血圧の予防にも良いとされる。',
    name_zh: '凉拌荞麦叶',
    description_zh:
      '取荞麦嫩叶，放入开水中焯一 下，捞起来用凉水漂洗，挤干水分后用调味酱 搅拌，最后放几滴香油即可。该素菜不仅味 美，而且有助于预防高血压。',
    name_zh2: '涼拌蕎麥葉',
    description_zh2:
      '清洗蕎麥嫩葉，用熱水焯一下，再用涼水沖掉熱氣，擠幹水分，用調味汁和香油拌勻。涼拌蕎麥葉有助於預防高血壓。',
  },
  {
    id: 459,
    category: '생채 [Saengchae]',
    name: '메밀묵무침',
    pronounce: 'Memilmungmuchim',
    description:
      '메밀묵은 메밀을 갈아 만든 전분으로 만든 묵이다. 메밀묵과 배추김치에 간장, 설탕, 참기름, 마늘 등 넣어 무치고 김을 얹은 음식이다.',
    name_en: 'Buckwheat Jelly Salad',
    description_en:
      'Sliced buckwheat jelly mixed with Korean cabbage kimchi, soy sauce, sugar, sesame oil, and chopped garlic and topped with shredded dried laver. Buckwheat jelly is a smooth gelatin made by boiling and cooling a mixture of buckwheat starch and water.',
    name_ja: 'そば粉こんにゃくの和え物',
    description_ja:
      'そばを粉をひいたデンプンで作ったこんにゃく。そば粉こんにゃくと白菜キムチにカンジャン、砂糖、ごま油、にんにくなどを加えて和え、のりをかけて食べる。',
    name_zh: '荞麦凉粉',
    description_zh:
      '荞麦凉粉是用荞麦磨成的淀粉制作的一种凉粉。将荞麦凉粉和辛奇以及酱油、白糖、香油、蒜等调料一起进行搅拌，装盘前上面撒一些紫菜。',
    name_zh2: '蕎麥涼粉',
    description_zh2:
      '蕎麥涼粉是把蕎麥磨成粉後加工的涼粉，蕎麥涼粉和辛奇裡放入醬油、白糖、香油、大蒜等拌勻，最後放上烤紫菜即可。',
  },
  {
    id: 460,
    category: '생채 [Saengchae]',
    name: '무말랭이무침',
    pronounce: 'Mumallaengimuchim',
    description:
      '무를 채 썰어서 말린 것을 무말랭이라 한다. 무말랭이를 찬물에 불려서 물기를 짜고 간장에 재웠다가 무치거나 고춧가루를 넣어 갖은 양념하여 무치는 것으로 고춧잎 등을 섞기도 한다.',
    name_en: 'Dried Radish Salad',
    description_en:
      'For this dish, dried julienned radish, called mumallaengi in Korean, is soaked in cold water and squeezed to remove any excess water. It is then marinated in soy sauce and seasoned with red pepper powder or some other seasoning.',
    name_ja: '干し大根の和え物',
    description_ja:
      '大根を千切りにして干したものを冷水でもどして水気を切り、醤油に漬け込んで和えるか、粉唐辛子を加えて味付けて和えたもの。唐辛子の葉などを加えることもある。',
    name_zh: '凉拌萝卜干',
    description_zh:
      '将萝卜切丝晒干的叫做萝卜干。萝卜干用凉水浸泡一会儿，捞出来挤干水分后 用酱油腌制一下，然后放入其它调料搅拌，也 可放入辣椒粉或搅拌，还可以加一些辣椒叶 等。',
    name_zh2: '涼拌蘿蔔乾',
    description_zh2:
      '把蘿蔔擦成絲晾乾的叫做蘿蔔乾。用涼水泡軟蘿蔔乾，擠幹水分後用醬油醃製一下，然後放入辣椒粉和各種調料拌勻，有時候也會放辣椒葉。',
  },
  {
    id: 461,
    category: '생채 [Saengchae]',
    name: '무말이강회',
    pronounce: 'Mumariganghoe',
    description:
      '얇게 썬 무에 식초, 설탕, 소금을 넣어 절여서 오이, 당근, 표고버섯 등 채소와 고기를 돌돌 말아 먹는 요리이다. 찹쌀가루를 물에 풀어 소금으로 간하고 살짝 끓여 찍어 먹는다.',
    name_en: 'Vegetables and Meat Wrapped in Radish Slices',
    description_en:
      'Vegetables, such as cucumber, carrot, and shiitake, and meat wrapped in thinly sliced radish that have been marinated in a mixture of vinegar, sugar, and salt. The dish is served with a dipping sauce that is made with slightly boiling water mixed with glutinous rice powder and salt.',
    name_ja: '大根巻き',
    description_ja:
      '酢、砂糖、塩に漬けた薄切り大根の上に、きゅうり、にんじん、シイタケなどの野菜と肉をのせて巻いたもの。もち粉を水に溶き、塩で味を調えて煮立たせたソースにつけて食べる。',
    name_zh: '萝卜片什锦卷',
    description_zh:
      '将切成薄片的萝卜用醋、白糖、盐腌制后，与黄瓜、胡萝卜、香菇等蔬菜和肉卷起来吃。搭配用水、糯米粉和盐后微煮而成的酱汁蘸着吃。',
    name_zh2: '蘿蔔片蔬菜捲',
    description_zh2:
      '將切成薄片的蘿蔔用食醋、糖、鹽醃製後，與小黃瓜、胡蘿蔔、香菇等蔬菜和肉捲起來吃，搭配用水、糯米粉和鹽稍微煮過而成的沾醬。',
  },
  {
    id: 462,
    category: '생채 [Saengchae]',
    name: '무생채',
    pronounce: 'Musaengchae',
    description:
      '채 썬 무에 식초, 설탕, 고춧가루 등을 넣고 새콤달콤하게 무쳐 먹는 반찬이다. 고춧가루를 넣지 않고 하얗게 무쳐 먹기도 한다.',
    name_en: 'Julienne Radish Fresh Salad',
    description_en:
      'A sweet and tangy dish of julienned white radish seasoned with vinegar, sugar, and red chili powder. Chili powder may be omitted for a milder version.',
    name_ja: '大根の和え物',
    description_ja:
      '細切りにした大根に酢や砂糖、粉唐辛子などを加え、甘酸っぱく和えて食べる。粉唐辛子を省けば、淡白な仕上がりに。',
    name_zh: '生拌萝卜丝',
    description_zh:
      '萝卜切丝后加入醋、糖、辣椒粉等拌匀即可，味道酸甜，适合配饭。也可以不放辣椒粉，拌成白色萝卜丝。',
    name_zh2: '生拌蘿蔔絲',
    description_zh2:
      '生拌蘿蔔絲是將蘿蔔切成絲後加入食鹽、醬油、白糖、辣椒粉、食醋拌成三色的酸甜小菜。',
  },
  {
    id: 463,
    category: '생채 [Saengchae]',
    name: '부추무침',
    pronounce: 'Buchumuchim',
    description:
      '부추를 썰어 고춧가루, 다진 파ㆍ마늘, 멸치액젓 등의 양념으로 무친 것이다. 부추를 무칠 때는 살살 버무려야 풋내가 나지 않는다.',
    name_en: 'Chive Salad',
    description_en:
      'Chives cut into bite-sized pieces and tossed with red chili powder, chopped green onion and garlic, and salted anchovy juice. The chives should be tossed lightly so as not to make them smell like fresh-cut grass.',
    name_ja: 'ニラの和え物',
    description_ja:
      'ニラを切り、粉唐辛子、みじん切りしたねぎとにんにく、カタクチイワシの魚醤などのたれで和えたもの。ニラを和える際、やさしく和えると青臭さがたたない。',
    name_zh: '凉拌韭菜',
    description_zh:
      '韭菜切成段，加入辣椒粉、葱末、蒜末、鳀鱼汁等调料一起搅拌即可。韭菜要轻轻搅拌，才不会有青菜味。',
    name_zh2: '涼拌韭菜',
    description_zh2:
      '韭菜切成適當長度，放入辣椒粉、蔥蒜末、鯷魚醬等拌勻。拌韭菜的時候尤其要注意力度，以免過於使勁而破壞韭菜的鮮味。',
  },
  {
    id: 464,
    category: '생채 [Saengchae]',
    name: '북어채무침',
    pronounce: 'Bugeochaemuchim',
    description:
      '북어는 명태를 건조한 것으로, 씹는 맛이 좋다. 북어 채를 물에 살짝 씻어 물기를 꼭 짠 후 고추장 양념에 무치는 음식이다.',
    name_en: 'Dried Pollack Strip Salad',
    description_en:
      'Here, lightly wash and drain shredded dried pollack and mix with a gochujang (red chili paste) sauce.',
    name_ja: '干しスケトウダラの和え物',
    description_ja:
      '干しスケトウダラは、食感がいい。細切りしたスケトウダラを水で戻し、水気を切った後、コチュジャンベースのたれで和える。',
    name_zh: '凉拌干明太鱼丝',
    description_zh:
      '干明太鱼是指晒干的明太鱼，嚼起来很有味道。干明太鱼丝用水洗一下，挤干水分后，加入用辣椒酱调制的调味酱一起搅拌即可。',
    name_zh2: '涼拌幹明太魚絲',
    description_zh2:
      '幹明太魚非常有嚼頭。把幹明太魚用清水稍微洗一下，擠幹水分後用辣椒醬調料拌勻即可。',
  },
  {
    id: 465,
    category: '생채 [Saengchae]',
    name: '상추겉절이',
    pronounce: 'Sangchugeotjeori',
    description:
      '상추를 손으로 적당한 크기로 잘라 고춧가루, 다진 파ㆍ마늘, 설탕, 간장, 참기름 등의 양념으로 살짝 버무린 것이다. 고기와 함께 먹어도 맛있다.',
    name_en: 'Fresh Lettuce Kimchi',
    description_en:
      'Lettuce cut into bite-sized pieces and tossed with red chili powder, chopped green onion and garlic, sugar, soy sauce, and sesame oil. It goes particularly well with meat.',
    name_ja: 'サンチュの和え物',
    description_ja:
      '一口大にちぎったサンチュに、粉唐辛子、みじん切りしたねぎとにんにく、砂糖、カンジャン、ごま油などの調味料で味をつけ、さっと和えたもの。肉と一緒に食べると相性抜群。',
    name_zh: '鲜辣生菜',
    description_zh:
      '生菜切成巴掌大小，加入辣椒粉、葱末、蒜末、白糖、酱油、香油等调料轻轻搅拌即可，搭配肉类吃更加美味。',
    name_zh2: '鮮辣生菜',
    description_zh2:
      '將生菜用手撕成合適的大小，再用辣椒粉、蒜末、蔥末、醬油、香油等調料稍微拌一下即可食用。與肉類一同食用也很美味。',
  },
  {
    id: 466,
    category: '생채 [Saengchae]',
    name: '영양부추겉절이',
    pronounce: 'Yeongyangbuchugeotjeori',
    description:
      '영양부추에 고춧가루, 멸치액젓, 다진 마늘, 참기름, 참깨 등을 넣어 무쳐 먹는 음식이다. 차돌박이 구이 같은 구운 고기와 먹어도 잘 어울린다.',
    name_en: 'Fresh Chive Kimchi',
    description_en:
      'Chives tossed with red chili powder, salted anchovy juice, chopped garlic, sesame oil, and sesame seeds. Fresh chive kimchi goes well with grilled beef brisket and other grilled meat dishes.',
    name_ja: '浅漬けニラ',
    description_ja:
      'ニラに粉唐辛子、カタクチイワシの魚醤、みじん切りしたにんにく、ごま油、ごまなどを入れ、和えたもの。焼いたともばら肉などの焼肉とよく合う。',
    name_zh: '鲜辣韭菜',
    description_zh:
      '营养韭菜加入辣椒粉、鳀鱼汁、蒜末、香油、芝麻等调料一起搅拌即可，与烤牛胸肉等烤肉也是很好的搭配。',
    name_zh2: '鮮辣韭菜',
    description_zh2:
      '營養韭菜加入辣椒粉、鯷魚醬、蒜蓉、香油、熟芝麻等拌勻即可享用。跟烤牛胸肉一起吃也非常美味。',
  },
  {
    id: 467,
    category: '생채 [Saengchae]',
    name: '오이냉채',
    pronounce: 'Oinaengchae',
    description:
      '오이를 채 썰어 설탕, 식초 따위를 넣고 차게 만들어서 먹는 음식이다. 껍질이 얇고 단맛이 좋은 가시 오이를 사용하면 더욱 시원하고 아삭하다.',
    name_en: 'Chilled Cucumber Salad',
    description_en:
      'Chilled julienned cucumbers with a sauce made with vinegar and sugar drizzled on top. Thorny cucumbers that are thin-skinned and sweeter can be used to make the chilled dish more crispy.',
    name_ja: 'きゅうり冷菜',
    description_ja:
      'きゅうりの千切りに砂糖や酢などを加え、冷たくして食べる。皮が薄くて甘みのあるきゅうりを使うと、みずみずしさとシャキっとした食感が増す。',
    name_zh: '凉拌黄瓜',
    description_zh:
      '将切成丝的黄瓜用白糖、醋等调味后放凉即可。使用皮薄甜度高的刺黄瓜，口感更加爽口脆嫩。',
    name_zh2: '小黃瓜冷盤',
    description_zh2:
      '將切絲的小黃瓜用糖、醋等調味後放涼即可。如果使用皮薄甜度高的有刺小黃瓜，口感會更加爽口脆嫩。',
  },
  {
    id: 468,
    category: '생채 [Saengchae]',
    name: '오이무침',
    pronounce: 'Oimuchim',
    description:
      '오이를 소금에 절여 고추장, 매실액 등을 넣어 무친 음식으로, 아삭하고 상큼한 맛이 일품이다.',
    name_en: 'Cucumber Salad',
    description_en:
      'Fresh cucumber lightly salted and mixed with gochujang (red chili paste) and fermented Japanese apricot juice. The chewy texture and refreshing taste of this salad makes it an ideal side dish.',
    name_ja: 'キュウリの和え物',
    description_ja:
      'キュウリを塩に漬け、コチュジャン、梅エキスなどを入れて和えたもの。シャキッとした食感とさわやかな味が絶妙。',
    name_zh: '凉拌黄瓜',
    description_zh:
      '黄瓜用盐腌渍后，加入辣椒酱、梅子液等调料一起搅拌即可，味道清脆爽口，十分开胃。',
    name_zh2: '涼拌黃瓜',
    description_zh2: '黃瓜用鹽醃製一下，然後放入辣椒醬、青梅汁等拌勻即可，這道菜口感爽脆。',
  },
  {
    id: 469,
    category: '생채 [Saengchae]',
    name: '오이미역초무침',
    pronounce: 'Oimiyeokchomuchim',
    description:
      '마른 미역은 끓는 물에 데친 후 오이, 무와 식초, 매실 액, 소금을 넣어 무친 음식이다. 여름에 가볍고, 상큼하게 먹기 좋은 반찬이다.',
    name_en: 'Sweet and Sour Seaweed Cucumber Salad',
    description_en:
      'Parboiled dried brown seaweed mixed with julienned cucumber and radish, vinegar, fermented Japanese apricot juice, and salt. This salad is a tasty and refreshing side dish that is often enjoyed in summer.',
    name_ja: 'キュウリとワカメの酢の物',
    description_ja:
      '乾燥ワカメを熱湯で湯がいた後、キュウリ、大根、酢、梅のエキス、塩を入れて和えたもの。夏にさらっと食べたい時にぴったりな一品。',
    name_zh: '醋拌黄瓜海带',
    description_zh:
      '干海带用开水焯一下，加入黄瓜和萝卜以及醋、梅子液、盐一起搅拌即可，味道鲜爽，是一道很适合夏天吃的小菜。',
    name_zh2: '醋拌黃瓜海帶',
    description_zh2:
      '用熱水焯一下幹海帶，然後跟黃瓜、蘿蔔、食醋、青梅汁、鹽拌勻即可享用。是炎熱夏季裡的上好開胃菜。',
  },
  {
    id: 470,
    category: '생채 [Saengchae]',
    name: '오이지무침',
    pronounce: 'Oijimuchim',
    description:
      '오이지는 오이를 소금에 절인 장아찌로, 더위에 음식이 상하지 않게 만든 저장식품이다. 오이지를 물에 담가 짠맛을 우려낸 후 파ㆍ마늘, 고춧가루, 설탕, 참기름으로 무쳐 먹는다.',
    name_en: 'Pickled Cucumber Salad',
    description_en:
      'Soak sliced brine-pickled cucumber in water to remove the salty taste and mix with chopped green onion and garlic, red chili powder, sugar, and sesame oil. Brine-pickled cucumber is a type of preserved food made to prevent spoiling in summer.',
    name_ja: 'キュウリの漬物の和え物',
    description_ja:
      'キュウリの漬物はキュウリを塩漬けしたもので、暑さで傷まないように作られた保存食。キュウリの漬物を水につけ、塩気を抜いた後、ねぎ、にんにく、粉唐辛子、砂糖、ごま油などで和えて食べる。',
    name_zh: '凉拌腌黄瓜',
    description_zh:
      '腌黄瓜是将黄瓜用盐腌渍而成的酱菜，在高温下也不易坏的窖藏食品。腌黄瓜用水泡一会儿去掉咸味，再加入葱、蒜、辣椒粉、白糖、香油等调料一起搅拌即可。',
    name_zh2: '涼拌醃黃瓜',
    description_zh2:
      '醃黃瓜是用鹽醃製的黃瓜醬菜，是為了避免食物變質而醃製起來的儲藏食品。把醃黃瓜用清水泡片刻，以去掉鹹味，然後放入蔥蒜、辣椒粉、白糖、香油拌勻即可。',
  },
  {
    id: 471,
    category: '생채 [Saengchae]',
    name: '오징어강회',
    pronounce: 'Ojingeoganghoe',
    description:
      '데친 오징어를 먹기 좋게 잘라 살짝 데친 쪽파나 미나리로 둘둘 말아 초고추장에 찍어 먹는 요리이다. 입맛이 없을 때 상큼한 채소를 곁들여 멋과 맛이 좋은 요리이다.',
    name_en: 'Squid Wrapped with Chives (or Water Parsley)',
    description_en:
      'This dish is made by cutting parboiled squid into bite-sized pieces and wrapping them with parboiled chives or water parsley. It is served with a vinegar-based gochujang (red chili paste) dipping sauce. With the refreshing taste of vegetables, this colorful dish stimulates the appetite.',
    name_ja: 'イカのわけぎ巻き',
    description_ja:
      'ゆでたイカを食べやすい大きさに切る。それをさっとゆがいたわけぎやセリで巻き、酢コチュジャンにつけて食べる料理。食欲がないとき、さっぱりとした野菜を添えて食べると食欲がわく。',
    name_zh: '鱿鱼什锦卷',
    description_zh:
      '将鱿鱼用开水焯过后切成适合入口的大小，用微微焯过的小葱或水芹卷起来蘸酸辣酱吃。搭配爽口的蔬菜色香味俱全，非常开胃。',
    name_zh2: '魷魚什錦卷',
    description_zh2:
      '魷魚用水燙過後切成適合入口的大小，在用燙過的黃蔥或水芹捲起來沾醋辣醬吃。這道料理色香味俱全，適合在沒有胃口時食用。',
  },
  {
    id: 472,
    category: '생채 [Saengchae]',
    name: '오징어무침',
    pronounce: 'Ojingeomuchim',
    description:
      '내장을 제거한 오징어를 적당한 크기로 썰어 끓는 물에 살짝 데친 후 초고추장 양념에 무쳐 낸다. 동해안에서 많이 잡히는 오징어는 강원도 사람들이 즐겨 먹는다.',
    name_en: 'Squid Salad',
    description_en:
      'Here, parboiled squid with the innards removed is cut into pieces andseasoned with a vinegar-based gochujang.Squid in Korea comes mostly from the East Sea and is particularly loved in the Gangwon Province area.',
    name_ja: 'イカの和え物',
    description_ja:
      'ワタを取ったイカを適当な大きさに切り、沸騰したお湯で湯掻き、酢コチュジャンで和える。東海岸でよく釣れるイカは、江原道の人々に好んで食べられる。',
    name_zh: '凉拌鱿鱼',
    description_zh:
      '鱿鱼去掉内脏洗净后切成适当的 大小，放入开水中焯一下，然后用调味酱搅拌 即可。东海岸盛产鱿鱼，是江原道人喜爱的海 鲜。',
    name_zh2: '涼拌魷魚',
    description_zh2:
      '把清除內臟的魷魚切成適當的大小，並用熱水燙一下，然後用醋辣醬拌勻。魷魚多產自東海岸，江原道的人們非常愛吃。',
  },
  {
    id: 473,
    category: '생채 [Saengchae]',
    name: '오징어초무침',
    pronounce: 'Ojingeochomuchim',
    description:
      '끓는 물에 데친 오징어를 먹기 좋은 크기로 썰어 오이와 함께 초고추장 양념으로 무친 것이다.',
    name_en: 'Sweet and Sour Squid Salad',
    description_en:
      'Parboiled squid cut into bite-sized pieces and mixed with sliced cucumber and a vinegar-based gochujang (red chili paste) sauce.',
    name_ja: 'イカ酢の物',
    description_ja:
      '湯がいたイカを食べやすい大きさに切り、キュウリと酢コチュジャンベースのたれで和えたもの。',
    name_zh: '醋拌鱿鱼',
    description_zh: '由于用开水焯一下，切成适合入口的大小，加入黄瓜和醋辣椒酱一起搅拌即可。',
    name_zh2: '醋拌魷魚',
    description_zh2: '用開水焯一下魷魚，然後切成適當大小，跟黃瓜一起用醋辣醬拌勻即可。',
  },
  {
    id: 474,
    category: '생채 [Saengchae]',
    name: '올챙이묵',
    pronounce: 'Olchaengimuk',
    description:
      '곱게 간 옥수수 앙금을 반죽해 구멍이 여러 개 난 그릇에 넣고 누르면 찬물 위로 올챙이 모양의 묵이 뚝뚝 떨어진다. 김칫국에 말아 먹거나 양념장에 비벼 먹는다.',
    name_en: 'Corn Starch Noodles',
    description_en:
      'First make cornstarch by boiling finely grated corn. Next, force the mixture through a perforated container into a bowl of cold water to make tadpole-shaped muk (jelly). Olchaengi-muk is served in kimchi soup or with sauce.',
    name_ja: 'とうもろこし麺',
    description_ja:
      '細かくひいたとうもろこしの粉をこね、いくつも穴の開いた容器に入れて押し出すと、オルチェンイ（おたまじゃくし）の形になって出てくる。そのため韓国語ではオルチェンイムクという。出てきた麺をキムチの汁に混ぜたり、ヤンニョムジャンと混ぜて食べる。',
    name_zh: '蝌蚪玉米凉粉',
    description_zh:
      '将细玉米粉和成面团，放在 有很多小孔的器皿上面用力按压，蝌蚪形状 的凉粉就会通过小孔掉入凉水中。蝌蚪玉米 凉粉可以放入辛奇汤里吃或加些调料拌着 吃。',
    name_zh2: '蝌蚪玉米涼粉',
    description_zh2:
      '磨成細粉的玉米澱粉用水和好，然後放進大孔篩子擠壓，蝌蚪形狀的涼粉會掉入涼水盆裡。用辛奇湯泡著吃或用調味汁拌著吃都非常美味。',
  },
  {
    id: 475,
    category: '생채 [Saengchae]',
    name: '우렁초무침',
    pronounce: 'Ureongchomuchim',
    description:
      '살짝 데친 우렁이와 미나리, 양파, 오이 등의 채소를 고춧가루와 설탕, 식초 등으로 만든 양념장에 버무려 먹는다. 소면을 삶아 곁들이면 식사대용으로 좋다.',
    name_en: 'Freshwater Snail Salad with Vinegar Dressing',
    description_en:
      'Parboiled freshwater snails and vegetables, such as water parsley, onion, and cucumber, flavored with a sauce made with red chili powder, sugar, and vinegar. The dish can be served with boiled noodles as a meal.',
    name_ja: 'タニシの酢の物',
    description_ja:
      'さっとゆでたタニシやセリ、玉ねぎ、きゅうりなどの野菜を、粉唐辛子や砂糖、酢などで作ったたれで和えたもの。ゆでた素麺を添えて食べると、食事の代わりにもなる。',
    name_zh: '酸辣凉拌田螺',
    description_zh:
      '将稍微焯过水的田螺和水芹、洋葱、黄瓜等蔬菜用辣椒粉、白糖、醋等做成的料汁拌匀即可。也搭配煮好的龙须面作为正式的一餐。',
    name_zh2: '醋拌田螺',
    description_zh2:
      '將稍微用水燙過的田螺和水芹、洋蔥、小黃瓜等蔬菜一起以辣椒粉、糖、食醋等調製而成的醬汁拌勻即可。也可搭配煮好的細麵作為正餐。',
  },
  {
    id: 476,
    category: '생채 [Saengchae]',
    name: '청포묵무침',
    pronounce: 'Cheongpomungmuchim',
    description:
      '녹두 전분으로 만든 청포묵에 고기볶음과 데친 미나리, 구운 김 등을 섞어 만든 묵무침으로, 탕평채라고도 부른다.',
    name_en: 'Mung Bean Jelly Salad',
    description_en:
      'Sliced mung bean jelly mixed with pan-fried beef, water parsley, and toasted seaweed. Mung Bean Jelly Salad is referred to as tangpyeongchae in Korean.',
    name_ja: '緑豆こんにゃくの和え物',
    description_ja:
      '緑豆デンプンで作られた緑豆こんにゃくに肉炒め、湯がいたセリ、焼きのりなどを混ぜて作ったこんにゃくの和え物。ところてんの和え物とも呼ばれる。',
    name_zh: '绿豆凉粉',
    description_zh:
      '将绿豆凉粉和炒肉、用开水焯过的水芹、烤海苔等一起搅拌即可。绿豆凉粉又叫做“荡平菜”。',
    name_zh2: '綠豆涼粉',
    description_zh2: '在用綠豆澱粉製作的涼粉裡放入炒肉、燙好的水芹、烤紫菜等拌勻的菜叫蕩平菜。',
  },
  {
    id: 477,
    category: '생채 [Saengchae]',
    name: '파강회',
    pronounce: 'Paganghoe',
    description:
      '쪽파를 데쳐서 돼지고기나 편육을 휘감아 상투처럼 만들고 잣을 박은 것을 초고추장에 찍어 먹는 요리이다. 쪽파 대신 실파나 미나리 등으로 만들어도 맛이 상큼하다.',
    name_en: 'Meat Wrapped with Chives',
    description_en:
      'Cold pork slices or other boiled pork cuts wrapped with parboiled chives in the shape of a topknot, with pine nuts inserted into the part resembles a topknot. It is served with a vinegar-based gochujang (red chili paste) sauce. Instead of chives, small green onions or water parsley can be used for their refreshing flavor.',
    name_ja: 'わけぎ巻き',
    description_ja:
      'ゆでたわけぎで豚肉や薄切りゆで肉を巻き、松の実を入れて酢コチュジャンにつけて食べる料理。わけぎの代わりにセリなどを使ってもさっぱりとした味が楽しめる。',
    name_zh: '葱什锦卷',
    description_zh:
      '用焯过水的小葱将猪肉或肉片缠绕成发髻状后嵌上松仁，蘸着酸辣酱来吃。用细葱或水芹等代替小葱，味道也很爽口。',
    name_zh2: '蔥什錦捲',
    description_zh2:
      '用燙過的黃蔥捲起豬肉或白切肉片做成髮髻狀，最後放上松果，沾醋辣醬吃。用細蔥或水芹等代替黃蔥，味道也很清爽。',
  },
  {
    id: 478,
    category: '생채 [Saengchae]',
    name: '파래무침',
    pronounce: 'Paraemuchim',
    description:
      '파래는 갈파래 과에 속하는 해조류로 주로 무쳐먹거나 김으로 만들어 먹는다. 파래와 채 썬 무, 간장, 참기름, 깨소금을 넣어 무친다.',
    name_en: 'Green Laver Salad',
    description_en:
      'For this dish, mix sea lettuce with julienned radish, soy sauce, sesame oil, and sesame seeds. Sea lettuce is a type of edible green algae that is used in salads or made into a dried laver.',
    name_ja: '青海苔の和え物',
    description_ja:
      '青海苔はアオサ科に属する海藻類で、主に和え物やのりとして食べる。青海苔と千切りにした大根、カンジャン、ごま油、ごま塩を加えて和える。',
    name_zh: '凉拌海青菜',
    description_zh:
      '海青菜是属于石莼科的海藻类，主要凉拌或制成紫菜。将海青菜和萝卜丝加入酱油、香油、芝麻盐一起搅拌即可。',
    name_zh2: '涼拌海青菜',
    description_zh2:
      '海青菜屬於褐藻類，主要拌著吃或做成紫菜。把海青菜與切好的蘿蔔，用醬油、香油、芝麻鹽拌勻即可享用。',
  },
  {
    id: 479,
    category: '생채 [Saengchae]',
    name: '파무침',
    pronounce: 'Pamuchim',
    description:
      '대파를 채쳐서 간장, 고춧가루, 마늘, 참기름 등을 넣어 무친 것으로, 구운 고기와 함께 많이 먹는다.',
    name_en: 'Green Onion Salad',
    description_en:
      'Julienned green onion tossed with soy sauce, red chili powder, chopped garlic, and sesame oil. This salad is a perfect match for grilled meat dishes.',
    name_ja: 'ねぎの和え物',
    description_ja:
      '千切りにしたねぎをカンジャン、粉唐辛子、にんにく、ごま油などで和えたもの。焼肉と一緒に食べることが多い。',
    name_zh: '凉拌葱丝',
    description_zh:
      '大葱切成细丝，加入酱油、辣椒粉、蒜、香油等调料一起搅拌即可，可搭配烤肉一起吃。',
    name_zh2: '涼拌蔥絲',
    description_zh2: '把大蔥切成細絲，用醬油、辣椒面、蒜蓉、香油等拌勻即可，一般跟烤肉搭配著吃。',
  },
  {
    id: 480,
    category: '생채 [Saengchae]',
    name: '해파리냉채',
    pronounce: 'Haeparinaengchae',
    description:
      '데친 해파리에 배와 오이채를 넣고, 겨자마늘초장에 버무려 먹는 음식이다.꼬들꼬들한 식감과 새콤달콤하면서 톡 쏘는 맛이 일품이다.',
    name_en: 'Chilled Jellyfish Salad',
    description_en:
      'Thinly-sliced,parboiled jellyfish and julienned cucumbers drizzled with a mustard or garlic vinaigrette sauce. The crunchy texture, tangy sauce, and sharp bite of mustard fumes create a distinctively enjoyable dish.',
    name_ja: 'クラゲの冷菜',
    description_ja:
      'ゆがいたクラゲと細切りにしたきゅうりを辛子ソースで和えて食べる。コリコリした食感と鼻につんとくる甘酸っぱいソースが絶品。',
    name_zh: '凉拌海蜇',
    description_zh: '海蜇用开水焯好，加入黄瓜丝，用 芥末醋酱搅拌均匀即可，口感脆嫩，酸甜适 口。',
    name_zh2: '涼拌海蜇',
    description_zh2: '海蜇用滾水清燙後，加入梨、黃瓜絲、芥子、大蒜、食醋製成。口感脆嫩，酸甜適口。',
  },
  {
    id: 481,
    category: '전골 [Jeongol]',
    name: '갈낙전골',
    pronounce: 'Gallakjeongol',
    description:
      '소갈비와 낙지를 넣어 끓인 전골 요리로 전라남도 영암군의 향토음식이다.  기호에 따라 버섯이나 새우, 조개를 넣어도 맛이 좋다.',
    name_en: 'Short Rib and Octopus Hot Pot',
    description_en:
      'A local specialty of Yeongam-gun, South Jeolla Province, this dish is made by boiling short ribs and octopus together in a hot pot. Other ingredients, such as mushroom, shrimp, and clam, may also be added.',
    name_ja: 'カルビとテナガダコの寄せ鍋',
    description_ja:
      '牛カルビとテナガダコの寄せ鍋。全羅南道霊岩郡の郷土料理。好みによりきのこやエビ、貝類を入れても美味しい。',
    name_zh: '排骨章鱼火锅',
    description_zh:
      '将牛排骨和章鱼一起炖煮的火锅，是全罗南道灵岩郡的特色菜，也可根据个人喜好，放一些菌类或鲜虾、贝类等。',
    name_zh2: '排骨章魚火鍋',
    description_zh2:
      '這是一道把牛排骨與章魚混在一起煮的全羅南道靈岩郡的地方美食。可根據喜好加入蘑菇、蝦和貝類。',
  },
  {
    id: 482,
    category: '전골 [Jeongol]',
    name: '곱창전골',
    pronounce: 'Gopchangjeongol',
    description:
      '소나 돼지의 내장을 손질해 양념한 다음 당근, 양파, 쑥갓 등 여러 가지 채소와 함께 담아 육수를 부어 끓인 음식이다.',
    name_en: 'Beef Tripe Hot Pot',
    description_en:
      'Beef or pork innards cooked in a spicy broth with sliced carrots, onion, crown daisy, and other fragrant vegetables.',
    name_ja: 'コプチャンの寄せ鍋',
    description_ja:
      '牛や豚の内臓を下ごしらえして薬味で味付けし、にんじんや玉ねぎ、春菊などの野菜と一緒に鍋に入れ、スープを加えて煮た鍋。',
    name_zh: '肥肠火锅',
    description_zh:
      '将牛或猪的肥肠洗净腌制以后，与 胡萝卜、洋葱、茼蒿等各种蔬菜一起加入高汤 熬煮而成。',
    name_zh2: '肥腸火鍋',
    description_zh2:
      '肥腸火鍋是處理好的牛內臟調成辣味後加入蔬菜，倒入高湯現煮現吃的火鍋。還可放入烏龍麵，當主食吃。',
  },
  {
    id: 483,
    category: '전골 [Jeongol]',
    name: '국수전골',
    pronounce: 'Guksujeongol',
    description:
      '얇게 썬 소고기와 채소를 멸치국물에 넣고 끓인 뒤 생면을 넣어 한 번 더 끓인 음식이다. 손질한 재료나 국물을 추가로 넣어가면서 즉석에서 끓여 먹는다.',
    name_en: 'Noodle Hot Pot',
    description_en:
      'A simmering pot of thinly sliced beef and vegetables cooked at the table. After the beef and vegetables have been consumed, fresh noodles are added to the remaining broth and it is brought to a boil again.',
    name_ja: '麺の寄せ鍋',
    description_ja: '薄切りの牛肉、野菜、生麺にだし汁を加えて煮た鍋料理。',
    name_zh: '面条火锅',
    description_zh:
      '用鳀鱼熬出高汤，加入切成薄片的 牛肉和蔬菜熬煮一定时间，然后再加入生面 条继续熬煮至熟。边煮边吃，食材和高汤吃完 了可以继续添加。',
    name_zh2: '麵條火鍋',
    description_zh2: '麵條火鍋是將切成薄片的牛肉和蔬菜放入高湯裡煮，放入生麵後煮著吃的火鍋。',
  },
  {
    id: 484,
    category: '전골 [Jeongol]',
    name: '김치전골',
    pronounce: 'Kimchijeongol',
    description:
      '잘 익은 배추김치와 돼지고기를 양념하여 전골냄비 바닥에 담고 그 위에 김치, 양념한 돼지고기, 양파, 파 등을 담은 뒤 육수를 붓고 끓이다가 간을 맞춰 먹는 대표적인 전통음식이다.',
    name_en: 'Kimchi Hot Pot',
    description_en:
      'This dish is prepared by adding well-aged kimchi and pork to a broth and boiling with other ingredients, such as onion and green onion. This is one of the most traditional Korean dishes.',
    name_ja: 'キムチの寄せ鍋',
    description_ja:
      'よく熟した白菜キムチと豚肉を味付けして鍋に敷き、その上にキムチや味付けした豚肉、玉ねぎ、ネギなどを入れ、肉だし汁を入れて煮込んだ韓国の代表的な伝統料理。',
    name_zh: '辛奇火锅',
    description_zh:
      '将完全发酵的辛奇和调味后的猪肉放入锅底，上面放入洋葱、大葱等各种材料，然后倒入高汤煮至沸腾，最后按喜好调节咸淡，是韩国最具代表性的传统饮食之一。',
    name_zh2: '辛奇火鍋',
    description_zh2: '將辛奇和豬肉在調好味後放入鍋裡，加入豆腐、洋蔥等副食材邊煮邊吃的火鍋。',
  },
  {
    id: 485,
    category: '전골 [Jeongol]',
    name: '낙지곱창새우전골',
    pronounce: 'Nakjigopchangsaeujeongol',
    description:
      '낙지, 곱창, 새우와 각종 채소를 냄비에 보기 좋게 담은 후 육수를 붓고 얼큰한 양념장을 더해 끓여 먹는 음식이다. 낙지, 곱창, 새우의 맛이 어우러져 술안주로 즐겨 먹는다.',
    name_en: 'Octopus, Shrimp, and Beef Tripe Hot Pot',
    description_en:
      'Octopus, beef or pork tripe, shrimp, and a variety of vegetables attractively arranged in a pot and boiled in broth flavored with a spicy sauce. The combined flavors of octopus, tripe, and shrimp make the dish a popular accompaniment to alcoholic beverages.',
    name_ja: 'テナガダコとコプチャンとエビの寄せ鍋',
    description_ja:
      'テナガダコ、コプチャン、エビ、野菜を鍋にきれいに並べ、出し汁と辛いたれを加えて煮たもの。テナガダコ、コプチャン、エビの風味が相まって、お酒のつまみとしても人気。',
    name_zh: '章鱼肥肠虾仁火锅',
    description_zh:
      '将章鱼、肥肠、虾仁整齐摆放在锅里，再放入高汤和香辣的调味酱后熬煮而成。章鱼、肥肠、虾仁的味道相得益彰，是很受欢迎的下酒菜。',
    name_zh2: '章魚小腸蝦仁火鍋',
    description_zh2:
      '將章魚、小腸、蝦仁整齊放在鍋裡，加入高湯和香辣的調味醬煮成。章魚、小腸和蝦仁的味道相得益彰，是很受歡迎的下酒菜。',
  },
  {
    id: 486,
    category: '전골 [Jeongol]',
    name: '낙지전골',
    pronounce: 'Nakjijeongol',
    description:
      '전골냄비에 양념한 쇠고기와 낙지, 느타리버섯, 붉은 고추, 미나리 등을 담고 육수를 부어 끓이다가 국간장과 소금으로 간을 한 전골이다.',
    name_en: 'Octopus Hot Pot',
    description_en:
      'Seasoned beef, octopus, oyster mushroom, red chili pepper, and water parsley boiled with a variety of vegetables in broth in a hot pot. Cooked at the table, this dish is seasoned with soy sauce and salt.',
    name_ja: 'テナガダコの寄せ鍋',
    description_ja:
      'たれをからめた牛肉とテナガダコ、平茸、赤唐辛子、セリなどを鍋に入れ、出し汁を注いで煮る。クッカンジャンと塩で味を調えて食べる寄せ鍋。',
    name_zh: '章鱼火锅',
    description_zh:
      '将调味好的牛肉和章鱼、平菇、红辣椒、水芹等材料放入锅中，再倒入高汤一起炖煮，最后用淡酱油和盐调味即可。',
    name_zh2: '章魚火鍋',
    description_zh2:
      '火鍋裡放入調好味的牛肉與章魚、平菇、紅椒、水芹等，然後倒入高湯煮開，最後用湯醬油和食鹽調味。',
  },
  {
    id: 487,
    category: '전골 [Jeongol]',
    name: '닭한마리',
    pronounce: 'Dakhanmari',
    description:
      '커다란 냄비에 닭 한 마리와 감자, 떡, 대추, 버섯 등을 함께 넣어 테이블에서 끓여 먹는 음식으로, 고춧가루와 간장으로 만든 소스에 찍어 먹는다. 건더기를 다 건져 먹은 후 국물에 칼국수를 끓여 먹으면 별미이다.',
    name_en: 'Whole Chicken Stew',
    description_en:
      'A whole chicken cooked with potato, rice cake, date, and mushroom in a large pot at the table and served with a mixture of soy sauce and red chili powder dipping sauce. Near the end of the meal, knife-cut noodles are boiled in the excess sauce.',
    name_ja: '丸鶏の寄せ鍋',
    description_ja:
      '大きな鍋に鶏１羽、じゃがいも、餅、なつめ、きのこなどを入れて直接客席で煮て食べる料理。粉唐辛子とカンジャンのソースにつけて食べる。最後に、残ったスープでカルグクスを煮込んで食べるのもおすすめ。',
    name_zh: '全鸡火锅',
    description_zh:
      '将一整只鸡和土豆、米糕、红枣、蘑菇等配菜一起放入大锅中，在餐桌上现煮现吃，鸡肉和其他材料可蘸用辣椒粉和酱油做成的调料汁吃。鸡肉和配菜吃完后，可在剩下的汤水中下刀切面吃，别有一股风味。',
    name_zh2: '全雞火鍋',
    description_zh2:
      '將整隻雞和土豆、年糕、大棗、蘑菇等放入大鍋裡，在餐桌上邊煮邊吃。可以用辣椒粉和醬油做調味醬沾著吃。雞肉和配菜吃完後，用剩下的湯煮麵吃非常美味。',
  },
  {
    id: 488,
    category: '전골 [Jeongol]',
    name: '두부전골',
    pronounce: 'Dubujeongol',
    description:
      '두부와 양파, 당근, 미나리, 소고기 등을 보기 좋게 둘러 담고 육수를 자작하게 부어 끓여가며 먹는 음식이다. 맛이 순하고 담백하다.',
    name_en: 'Bean Curd Hot Pot',
    description_en:
      'Sliced bean curd, onion, carrots, Korean parsley, and beef, artfully arranged and cooked in a hot pot.Loved by many for its mild and refreshing taste.',
    name_ja: '豆腐の寄せ鍋',
    description_ja:
      '豆腐や玉ねぎ、にんじん、せり、牛肉などをきれいに並べ、スープを加えたもの。煮込みながら食べる。',
    name_zh: '豆腐火锅',
    description_zh:
      '将豆腐与洋葱、胡萝卜、水芹、牛肉 等整齐码放，倒入适量的高汤后边煮边吃，味 道比较柔和清淡。',
    name_zh2: '豆腐火鍋',
    description_zh2: '豆腐火鍋是將中間夾肉的煎豆腐和蔬菜放入火鍋裡，倒入醬湯煮著吃的飲食。',
  },
  {
    id: 489,
    category: '전골 [Jeongol]',
    name: '만두전골',
    pronounce: 'Mandujeongol',
    description:
      '소고기, 버섯, 당근 등의 재료를 둘러 담고 만두를 얹어 끓인 음식이다.다양한 재료가 어우러진 국물 맛과 함께 만두까지 즐길 수 있다.',
    name_en: 'Dumpling Hot Pot',
    description_en:
      'Mandu (dumplings) simmered in broth with beef, mushrooms, carrots, and other vegetables. The many ingredients produce a savory soup that goes well with the dumplings.',
    name_ja: '餃子の寄せ鍋',
    description_ja:
      '鍋に牛肉やきのこ、にんじんなどを並べ、餃子を加えて煮た料理。様々な食材が生み出す風味豊かなスープと餃子が同時に楽しめる一品。',
    name_zh: '饺子火锅',
    description_zh:
      '将牛肉、蘑菇、胡萝卜等码放整 齐，再放入饺子熬煮。各种食材混合而成的汤 汁味道丰富而鲜美，还可吃到美味的饺子。',
    name_zh2: '餃子火鍋',
    description_zh2:
      '餃子火鍋是將餃子和牛肉、香菇等擺好邊煮邊吃的飲食。既可放入辣調味料品嘗鮮辣的味道，也可不加辣調味料，煮成清湯後再沾加醋醬油吃。',
  },
  {
    id: 490,
    category: '전골 [Jeongol]',
    name: '버섯전골',
    pronounce: 'Beoseotjeongol',
    description:
      '멸치국물에 버섯을 넣고 끓인 전골이다. 느타리, 표고, 송이 등 여러 가지 버섯을 주재료로 하여 채소, 소고기 등을 한데 담고 장국을 부어 끓인 음식이다.',
    name_en: 'Mushroom Hot Pot',
    description_en:
      'A hot pot of oysters and shitake, pine, and other assorted mushrooms. Beef and various vegetables are added to enhance the flavor of the broth.',
    name_ja: 'きのこの寄せ鍋',
    description_ja:
      '平茸や椎茸、松茸といったきのこを主材料に、野菜や牛肉などを加え、だし汁で煮た料理。',
    name_zh: '蘑菇火锅',
    description_zh:
      '用鳀鱼熬制的高汤里加入蘑菇熬 煮的火锅，以糙皮侧耳蘑菇、香菇、松茸等各 种蘑菇为主食材，外加蔬菜、牛肉等，加入高 汤熬煮而成。',
    name_zh2: '蘑菇火鍋',
    description_zh2: '蘑菇火鍋是在各種菇類和牛肉裡倒入鳀魚高湯後煮著吃的飲食。',
  },
  {
    id: 491,
    category: '전골 [Jeongol]',
    name: '불낙전골',
    pronounce: 'Bullakjeongol',
    description:
      '불고기와 낙지, 채소를 한데 담고 육수를 부어 끓여가며 먹는 음식이다.달콤하고 부드러운 불고기와 매콤하고 쫄깃쫄깃한 낙지가 잘 어우러진다.',
    name_en: 'Bulgogi and Octopus Hot Pot',
    description_en:
      'A hot pot of bulgogi, baby octopus, and vegetables simmered in broth. The sweet and tender bulgogi goes well with the spicy, chewy baby octopus.',
    name_ja: '牛肉とテナガダコの寄せ鍋',
    description_ja:
      '牛肉とテナガダコ、野菜を鍋に入れ、スープを加えて煮込みながら食べる。甘くて柔らかい牛肉と、辛くて歯ごたえのあるテナガダコが絶妙のハーモニーを織り成す一品。',
    name_zh: '烤牛肉章鱼火锅',
    description_zh:
      '将烤牛肉与章鱼及蔬菜放 入锅中，倒入高汤后边煮边吃。软嫩甘甜的牛 肉和鲜辣筋道的章鱼味道极配，可谓相得益 彰。',
    name_zh2: '烤牛肉章魚火鍋',
    description_zh2:
      '烤牛肉章魚火鍋是放入調成辣味的章魚和用醬油調味的烤肉、蔬菜後，邊煮邊吃的飲食。烤肉與章魚的味道相協調而呈現鮮美味道。',
  },
  {
    id: 492,
    category: '전골 [Jeongol]',
    name: '소고기국수전골',
    pronounce: 'Sogogiguksujeongol',
    description:
      '얇게 썬 소고기와 여러 가지 채소에 육수를 부어 즉석에서 끓여먹는 음식이다. 고기와 채소, 육수를 추가로 넣어가면서 끓이고, 건더기를 다 먹으면 국물에 면을 넣어 끓여 먹는다.',
    name_en: 'Beef and Noodle Hot Pot',
    description_en:
      'A simmering pot of thinly sliced beef and vegetables cooked at the table. After the beef and vegetables have been eaten, fresh noodles are added to the remaining broth and brought to a boil once again.',
    name_ja: '牛肉と素麺の寄せ鍋',
    description_ja:
      '薄切りにした牛肉と野菜に出し汁に加えて煮る即席の寄せ鍋料理。肉、野菜、出し汁を追加しながら食べる。〆に麺を入れて食べる。',
    name_zh: '牛肉面条火锅',
    description_zh:
      '将切成薄片的牛肉和各种蔬菜一起放入锅中，倒入高汤后一起炖煮，边煮边吃。牛肉和蔬菜以及高汤可继续添加，火锅料吃完后，还可下面。',
    name_zh2: '牛肉麵條火鍋',
    description_zh2:
      '把切成薄片的牛肉與各種蔬菜用高湯煮開即可。可以不斷放入肉類和蔬菜，湯不夠時可以隨時加高湯。火鍋料吃完後，可以用剩下的火鍋湯煮麵條吃。',
  },
  {
    id: 493,
    category: '전골 [Jeongol]',
    name: '소고기버섯전골',
    pronounce: 'Sogogibeoseotjeongol',
    description:
      '느타리버섯, 표고버섯, 송이버섯 등 여러 가지 버섯과 양념한 소고기를 넣어 끓인 전골이다. 향긋한 버섯의 향이 일품으로 찬바람이 불기 시작하는 가을에 주로 먹는다.',
    name_en: 'Beef and Mushroom Hot Pot',
    description_en:
      'A hot pot of oysters and shitake, pine, and other assorted mushrooms. Beef and various vegetables are added to enhance the flavor of the broth. This dish becomes a popular choice among Koreans when the cold wind begins to blow in fall.',
    name_ja: '牛肉ときのこの寄せ鍋',
    description_ja:
      '平茸、しいたけ、松茸などの様々なきのことたれにからめた牛肉の寄せ鍋。きのこの香りが絶妙で、冷たい風が吹き始める秋頃によく食べられる。',
    name_zh: '牛肉蘑菇火锅',
    description_zh:
      '将平菇、香菇、松茸等各种菌类和调味好的牛肉一起放入锅中炖煮即可。菌类特有的香味刺激人的味蕾，最适合凉风徐徐的秋天食用。',
    name_zh2: '牛肉蘑菇火鍋',
    description_zh2:
      '把平菇、香菇、松茸等各種蘑菇和提前醃製好的牛肉一起煮開。這樣煮熟的蘑菇非常香，這道火鍋主要在刮寒風之前的晚秋時節多吃。',
  },
  {
    id: 494,
    category: '전골 [Jeongol]',
    name: '소고기전골',
    pronounce: 'Sogogijeongol',
    description:
      '전골냄비에 양념한 소고기와 각각의 채소를 돌려 담아 육수를 붓고 즉석에서 끓여 먹는 요리이다. 청장과 소금으로 간을 하고 계란을 중앙에 깨뜨려 넣어 반숙이 될 때까지 더 끓인다.',
    name_en: 'Beef Hot Pot',
    description_en:
      'This dish is made by boiling seasoned beef with a variety of vegetables in a broth. Cooked right at the table, this hot pot dish is seasoned with salt and boiled until the egg in the center becomes soft boiled.',
    name_ja: '牛肉の寄せ鍋',
    description_ja:
      '鍋に味付けした牛肉と色々な野菜を敷き、肉だし汁を入れ、煮込みながら食べる料理。薄口のしょう油と塩で味付けし、卵を割って真ん中に入れ、半熟になるまで煮る。',
    name_zh: '牛肉火锅',
    description_zh:
      '将调味后的牛肉和各种蔬菜整整齐 齐地放入火锅锅子里，然后倒入高汤煮沸，边 煮边吃。用清酱和盐调节咸淡，最后将一个生 鸡蛋打入锅子中央并继续煮至半熟。',
    name_zh2: '牛肉火鍋',
    description_zh2: '放上調好味的牛肉和蔬菜後倒入高湯煮著吃的飲食。',
  },
  {
    id: 495,
    category: '전골 [Jeongol]',
    name: '순두부전골',
    pronounce: 'Sundubujeongol',
    description:
      '순두부와 버섯, 애호박, 콩나물 등을 넣고 육수를 부어 끓여 먹는 음식이다. 이때 끓이면서 육수를 계속 부어가면서 먹는다. 만두나 명란 등을 추가해 다양한 맛으로 즐겨도 좋다.',
    name_en: 'Soft Bean Curd Hot Pot',
    description_en:
      'Soft bean curd, mushroom, zucchini, and bean sprouts boiled in a broth. The broth is continually added to the boiling pot. Other ingredients, such as dumplings or pollack roe, can be added to enjoy a variety of flavors.',
    name_ja: 'スンドゥブの寄せ鍋',
    description_ja:
      '出し汁にスンドゥブやきのこ、ズッキーニ、豆もやしなどを入れ、煮ながら食べる料理。餃子や明太子などを加えて食べても美味しい。',
    name_zh: '嫩豆腐火锅',
    description_zh:
      '在锅中放入嫩豆腐、蘑菇、西葫芦、豆芽等，再倒入高汤熬煮而成。吃的时候，边煮边加高汤。还可放入饺子或明太鱼子等，纵享多种风味。',
    name_zh2: '嫩豆腐火鍋',
    description_zh2:
      '在鍋中放入嫩豆腐、蘑菇、櫛瓜、豆芽等，再倒入高湯熬煮。享用時邊煮邊加高湯。也可加入餃子或明太子等，享受多種風味。',
  },
  {
    id: 496,
    category: '전골 [Jeongol]',
    name: '신선로',
    pronounce: 'Sinseollo',
    description:
      '가운데 숯불을 담는 통이 있는 신선로라는 탕기에 고기와 해산물, 채소 등을 이용하여 전을 부쳐서 둘러 담고 육수를 부어 즉석에서 끓여 먹는다. 대표적인 궁중음식이다.',
    name_en: 'Royal Hot Pot',
    description_en:
      'A hot pot of seafood, meat, and vegetables cooked at the table in a brass sinseollo pot over hot charcoals in a central cylinder. This dish is representative of Korean royal cuisine.',
    name_ja: '宮中鍋',
    description_ja:
      '中に炭火を入れたシンソルロ(神仙炉)と呼ばれる鍋に、肉や魚介類、野菜などを並べ、スープを加えて煮込みながら食べる代表的な宮廷料理。',
    name_zh: '神仙炉',
    description_zh:
      '神仙炉是中间有炭火桶的一种器皿， 将肉、海鲜、蔬菜等材料做成的小煎饼围着炭 火桶周围码放，再加入高汤边煮边吃，是典型 的宫廷饮食。',
    name_zh2: '神仙爐',
    description_zh2:
      '神仙爐是將食材放入中間有炭火桶的鍋裡煮著吃的料理。在神仙爐裡放入高湯和各種煎菜後邊煮邊吃，是古代宮廷或兩班家在特別的節日或慶宴時吃的特殊飲食。',
  },
  {
    id: 497,
    category: '전골 [Jeongol]',
    name: '해물낙지전골',
    pronounce: 'Haemullakjijeongol',
    description:
      '꽃게, 새우, 가리비 등의 각종 해산물과 낙지를 넣고, 매운 고춧가루 양념장을 풀어 얼큰하게 끓인 전골이다. 여러 가지 해물이 들어가 시원한 국물 맛이 일품이다.',
    name_en: 'Seafood and Octopus Hot Pot',
    description_en:
      'Octopus and various seafoods, including crab, shrimp, and scallops, boiled in broth with a mixture of red chili powder and other seasonings. This spicy dish is popular for its deep flavor.',
    name_ja: '海鮮とテナガダコの寄せ鍋',
    description_ja:
      'ワタリガニ、エビ、ホタテ貝などの海産物とテナガダコを辛い粉唐辛子のソースで煮込んだ寄せ鍋。海の幸がたっぷり入った辛口の味は絶品。',
    name_zh: '海鲜章鱼火锅',
    description_zh:
      '将花蟹、虾、扇贝等各种海鲜和章鱼一起放入锅中，加入用辣椒粉调制的调味酱熬煮即可。各种海鲜熬出的汤味道十分鲜美爽口。',
    name_zh2: '海鮮章魚火鍋',
    description_zh2:
      '將花蟹、蝦、扇貝等各種海鮮和章魚放入鍋裡，加點辣椒面調味醬煮開。這道湯用了多種海鮮，所以喝起來非常鮮美，是口感非常鮮辣的火鍋。',
  },
  {
    id: 498,
    category: '적·산적 [Jeok And Sanjeok]',
    name: '송이산적',
    pronounce: 'Songisanjeok',
    description:
      '송이버섯은 소금과 참기름으로 간하고 소고기는 송이버섯과 비슷한 길이로 썰어 양념한 다음 꼬치에 번갈아 꿰어 구운 음식이다.',
    name_en: 'Pine Mushroom Skewers',
    description_en:
      'Pine mushrooms brushed with salt and sesameoil alternately threaded on a skewer with soy-marinated beef strips and grilled.',
    name_ja: '松茸の串焼き',
    description_ja:
      '塩とごま油で味付けした松茸と、松茸と同じ長さに切って薬味で味付けした牛肉を、串に交互に通して焼いた料理。',
    name_zh: '松茸烤串',
    description_zh:
      '松茸用盐和香油调味，牛肉切成和 松茸同样大小并用酱油调味，然后将松茸和 牛肉依次轮流串起来烤制即可。',
    name_zh2: '松茸烤串',
    description_zh2:
      '松茸用食鹽、麻油調味，牛肉用醬油汁調味，然後將松茸和牛肉依序輪流串起來烤製即可。松茸有自然松茸、洋香菇、杏鮑菇等。',
  },
  {
    id: 499,
    category: '적·산적 [Jeok And Sanjeok]',
    name: '화양적',
    pronounce: 'Hwayangjeok',
    description:
      '도라지, 소고기, 당근, 버섯, 파 등을 살짝 볶은 다음 색을 맞춰 꼬치에 꿰어 기름에 부친 음식으로 추석 때 많이 먹는다.화양은 도라지를 의미한다.',
    name_en: 'Beef and Vegetable Skewers',
    description_en:
      'A multicolored brochette of sautéed bellflower roots, beef, carrots, mushrooms, and green onions threaded onto a skewer andpan-fried. Traditionally made on Chuseok(Harvest Moon Festival). “Hwayang” means “bellflower.”',
    name_ja: '彩り串焼き',
    description_ja:
      'ききょうや牛肉、にんじん、きのこ、ねぎなどにさっと火を通し、彩りよく串に通して油で焼いた料理。日本の旧盆にあたるチュソク (秋夕)によく食べられる。',
    name_zh: '华阳串',
    description_zh:
      '将桔梗、牛肉、胡萝卜、蘑菇、大葱等 微炒一下，然后按颜色搭配串起来，用食用油 煎制而成。多在中秋节吃，这里的华阳指的是 桔梗。',
    name_zh2: '華陽串',
    description_zh2:
      '將香菇、桔梗、黃瓜、雞蛋、肉等五種顔色的食食材分別煮熟後，依序輪流串起來製成華陽串。',
  },
  {
    id: 500,
    category: '구이 [Gui]',
    name: '가리비구이',
    pronounce: 'Garibigui',
    description:
      '가리비는 조개의 일종으로, 해감 후 껍질을 깨끗이 씻어 불판 위에 올려 구워 먹는 음식이다. 가리비 입이 벌어지면 살을 발라 초고추장에 찍어 먹는다.',
    name_en: 'Grilled Scallops',
    description_en:
      'Scallops are a type of shellfish. This dish is prepared by purging sand from scallops, washing the shells clean, and grilling them. When their shells are opened, the flesh can be eaten with a vinegar-based gochujang (red chili paste) dipping sauce.',
    name_ja: 'ホタテの貝焼き',
    description_ja:
      '砂抜きしたホタテ貝の殻をきれいに洗って鉄板で焼いたもの。ホタテ貝の口が開いたら、身を取り出して酢コチュジャンにつけて食べる。',
    name_zh: '烤扇贝',
    description_zh:
      '扇贝是贝类的一种。将吐净泥沙后清洗干净的扇贝放在烤盘上烤熟即可。扇贝开口后，剔出肉蘸着酸辣酱吃。',
    name_zh2: '烤扇貝',
    description_zh2:
      '扇貝是一種貝類。將吐沙後清洗乾淨的扇貝放在烤盤上烤熟即可。扇貝開口後，剔出貝肉沾醋辣醬吃。',
  },
  {
    id: 501,
    category: '구이 [Gui]',
    name: '가자미구이',
    pronounce: 'Gajamigui',
    description:
      '바다 밑바닥에 붙어살며 몸이 납작한 가자미는 살이 부드럽고 식감이 쫄깃하며 맛이 담백하다. 손질해 소금에 절인 가자미를 그대로 굽거나 양념을 발라 구워 먹으면 별미다.',
    name_en: 'Grilled Plaice',
    description_en:
      'Plaice is a flatfish that lives on the ocean floor. Its soft flesh is chewyand has a fresh taste. Salt-Grilled Plaice isdelicious with or without seasoning brushed over it.',
    name_ja: 'カレイ焼き',
    description_ja:
      'カレイは、身が柔らかく、もっちりした食感とさっぱりとした味が楽しめる。塩漬けにしたカレイをそのまま焼いたり、たれをつけて焼く。',
    name_zh: '烤鲽鱼',
    description_zh:
      '鲽鱼身体扁平，栖息在浅海的海底， 肉质细嫩洁白,味道鲜美肥腴。将收拾好的鲽 鱼用盐腌一下，然后直接煎烤或抹上调味上 煎烤即可。',
    name_zh2: '烤鰈魚',
    description_zh2:
      '鰈魚棲息在海底，身體非常扁。鰈魚的肉質非常勁道，味道清淡。把鰈魚清理好後醃製一下，然後直接煎熟，或抹上調料烤製非常美味。',
  },
  {
    id: 502,
    category: '구이 [Gui]',
    name: '갈치구이',
    pronounce: 'Galchigui',
    description:
      '토막 낸 갈치에 소금으로 밑간하여 석쇠나 팬에 구워 먹는다. 손질한 갈치에 밀가루를 솔솔 뿌리거나 밀가루 즙을 묻혀 기름을 두르고 팬에 구우면 비린 맛이 제거되어 맛이 담백하다.',
    name_en: 'Grilled Cutlassfish',
    description_en:
      'This is salted cutlassfish cut into pieces and grilled on a gridiron or pan. Cleaning and coating the fish with flour before cooking helps remove the fishy smell.',
    name_ja: '太刀魚焼き',
    description_ja:
      'ぶつ切りにした太刀魚に塩で下味を付け、焼き網やフライパンで焼いて食べる。小麦粉を振りかけるか、水で溶いた小麦粉をつけて油をひいてフライパンで焼くと、臭みが取れてあっさりした味わいになる。',
    name_zh: '烤带鱼',
    description_zh:
      '将带鱼洗净切段后用盐腌一下，然后 放在烤架或平底锅上煎烤。收拾好的带鱼在 上面撒些面粉或者裹些面粉浆，在烧热的平 底锅里倒入食用油后，将带鱼放进去煎烤，可 去除腥味，味道十分鲜美。',
    name_zh2: '烤帶魚',
    description_zh2:
      '切成段的帶魚用鹽醃製，然後用鐵盤烤製或用平底鍋煎熟。清理好的帶魚抹上面粉或麵糊後再煎就能清除腥味，吃起來更加可口。',
  },
  {
    id: 503,
    category: '구이 [Gui]',
    name: '고등어구이',
    pronounce: 'Godeungeogui',
    description:
      '굵은 소금을 뿌린 고등어를 반으로 갈라 석쇠나 팬에 구운 음식이다. 미리 소금을 뿌려 꾸덕꾸덕하게 말리거나, 소금에 절여 구워 먹기도 한다.',
    name_en: 'Grilled Mackerel',
    description_en:
      'Mackerel sprinkled withcoarse sea salt and grilled or pan-fried.Mackerel is sometimes salted and half dried or heavily salted for storage.',
    name_ja: 'サバの塩焼き',
    description_ja:
      'あら塩をふったサバを開いてフライパンや焼き網で焼いたもの。塩をふって干したり、塩漬けにしたものを焼いて食べてもおいしい。',
    name_zh: '烤青花鱼',
    description_zh:
      '将撒上粗盐的青花鱼从中间剖开 后用烤架或煎锅烤熟即可。可以先撒上粗盐 晾成半干的状态，或者用盐腌渍后烤食。',
    name_zh2: '烤青花魚',
    description_zh2:
      '鯖魚撒上粗鹽後，用烤架或煎鍋烤熟即可。是韓國最常吃的魚之一，一般用新鮮的鯖魚，也常用醃製鯖魚。',
  },
  {
    id: 504,
    category: '구이 [Gui]',
    name: '고추장불고기',
    pronounce: 'Gochujangbulgogi',
    description:
      '소고기나 돼지고기를 고추장, 고춧가루, 간장, 마늘, 청주, 설탕, 다진 파와 마늘 등을 넣은 양념장에 버무려 구워먹는 불고기이다.',
    name_en: 'Red Chili Paste Bulgogi',
    description_en:
      'Beef or pork marinated with a mixture of gochujang (red chili paste), red chili powder, soy sauce, chopped green onion and garlic, rice wine, and sugar and grilled.',
    name_ja: 'コチュジャンプルゴギ',
    description_ja:
      '牛肉や豚肉をコチュジャン、粉唐辛子、カンジャン、にんにく、清酒、砂糖、みじん切りしたねぎ、にんにくなどが入ったたれで和えて焼いて食べるプルゴギ。',
    name_zh: '辣椒酱烤牛肉',
    description_zh:
      '用辣椒酱、辣椒粉、酱油、蒜、清酒、白糖、葱末、蒜等调料做成调味酱，将牛肉或猪肉用调味酱搅拌后烤着吃即可。',
    name_zh2: '辣椒醬烤牛肉',
    description_zh2:
      '用辣椒醬、辣椒粉、醬油、蒜、清酒、白糖、蔥蒜末做成調味醬，然後把牛肉或豬肉醃製片刻後再烤熟即可。',
  },
  {
    id: 505,
    category: '구이 [Gui]',
    name: '고추장삼겹살',
    pronounce: 'Gochujangsamgyeopsal',
    description:
      '삼겹살에 고추장 양념을 하여 굽거나 볶은 음식이다. 기름이 많은 삼겹살을 고추장 양념으로 잡아 느끼하지 않고 매콤하게 즐길 수 있다.',
    name_en: 'Red Chili Paste Pork Belly',
    description_en:
      'Sliced pork belly marinated with a gochujang (red chili paste) sauce and grilled or pan-fried. This spicy dish seems to remove the greasy taste of the pork belly.',
    name_ja: 'コチュジャンサムギョプサル',
    description_ja:
      'サムギョプサルにコチュジャンベースのたれをからめて焼いたり炒めたりする料理。サムギョプサルは脂身が多いが、コチュジャンのおかげでもたれずに辛い味を楽しめる。',
    name_zh: '辣椒酱烤五花肉',
    description_zh:
      '将五花肉用辣椒酱做成的调味酱搅拌后，烤着吃或炒着吃即可。用辣椒酱调味的五花肉肥而不腻，非常香嫩。',
    name_zh2: '辣椒醬烤五花肉',
    description_zh2:
      '用辣椒醬調料醃製五花肉，然後烤製或炒熟。五花肉油分較大，用辣椒醬調味後可以解膩，是香辣口的美食。',
  },
  {
    id: 506,
    category: '구이 [Gui]',
    name: '곰장어구이',
    pronounce: 'Gomjangeogui',
    description:
      '석쇠에 먹장어를 통째로 올려 짚불에 구운 뒤 껍질과 내장을 제거해 먹는 구이로 부산 기장의 향토음식이다. 곰장어는 먹장어의 경상도 사투리다.',
    name_en: 'Grilled Sea Eel',
    description_en:
      'A local specialty of Gijang, Busan, this dish is made by straw grilling whole sea eel and removing the skin and offal before serving. “Gomjangeo” is the term for “meokjangeo” in the dialect of Gyeongsang Province.',
    name_ja: 'ヌタウナギ焼き',
    description_ja:
      '焼き網にヌタウナギを丸ごとのせ、藁で焼いた後、皮と内臓を取り除いて食べる料理。釜山機張の郷土料理。',
    name_zh: '烤盲鳗',
    description_zh:
      '将盲鳗整条放在烤架上，以稻草为柴，慢慢翻烤至熟，去除皮和内脏后食用即可。烤盲鳗是釜山机张地区的特色美食。',
    name_zh2: '烤盲鰻',
    description_zh2:
      '將整條鰻魚放在鐵箅子上用稻草烤熟，吃的時候剝皮並取出內臟，是釜山機張地區的地方美食。',
  },
  {
    id: 507,
    category: '구이 [Gui]',
    name: '곱창구이',
    pronounce: 'Gopchanggui',
    description:
      '소의 내장을 냄새가 나지 않도록 손질한 뒤 불에 구워 양념장을 찍어 먹거나 갖은 양념해서 구운 음식이다.',
    name_en: 'Grilled Beef TripeGrilled Pork Tripe',
    description_en:
      'Beef innards either marinated and grilled or simply grilled and served with a seasoned sauce.',
    name_ja: 'コプチャン焼き',
    description_ja:
      '牛の内臓を下処理して臭みを取り、下味をつけて焼くか、焼いて薬味につけて食べる。',
    name_zh: '烤肥肠',
    description_zh:
      '为了去腥味，肥肠要用面粉和盐用力 搓洗干净，然后放在明火上烤至熟透后沾调 味酱吃，也可以先调味后再烤。',
    name_zh2: '烤肥腸',
    description_zh2:
      '將牛或豬的內臟搓洗乾淨後，加各種調味料調味後烤或直接烤留住原味，食用時再沾麻油鹽醬。',
  },
  {
    id: 508,
    category: '구이 [Gui]',
    name: '광양불고기',
    pronounce: 'Gwangyangbulgogi',
    description:
      '전라남도 광양의 향토음식으로, 얇게 썬 소고기를 먹기 직전에 조미하여 참숯에 구워 먹는 음식이다. 열전도율이 빠른 구리 석쇠에 구워내 고기가 빨리 익어 육즙이 속 안에 그대로 차 있다.',
    name_en: 'Gwangyang Bulgogi',
    description_en:
      'A local specialty of Gwangyang, South Jeolla Province, this dish is prepared by seasoning thinly sliced beef immediately before cooking on a charcoal grill. Cooking the beef quickly on a copper grill with excellent heat conductivity keeps it juicy and tender.',
    name_ja: 'クァンヤンプルゴギ',
    description_ja:
      '全羅南道の光陽（クァンヤン）の郷土料理。食べる直前に薄く切った牛肉に味をつけて炭火で焼いて食べる。熱伝導のいい銅の焼き網で焼くため、肉に火が早く通り、肉汁が中に閉じ込められる。',
    name_zh: '光阳烤牛肉',
    description_zh:
      '这是全罗南道光阳的地方特色美食，牛肉切成薄片，食用前调味后，放在炭火上烤着吃即可。红铜做成的烤架导热快，肉片放上去熟得很快，肉汁饱满，十分美味。',
    name_zh2: '光陽烤牛肉',
    description_zh2:
      '這道菜是全羅南道光陽的地方美食。將切成薄片的牛肉吃之前進行調味，然後用炭火烤著吃。用導熱非常快的銅鐵箅子烤肉，就能使肉熟得非常快，肉汁不會流失，口感會更好。',
  },
  {
    id: 509,
    category: '구이 [Gui]',
    name: '굴비구이',
    pronounce: 'Gulbigui',
    description:
      '조기를 소금에 절여 말린 것을 굴비라 하며 전라남도 영광산 굴비를 최고로 친다. 굴비에 참기름을 발라 석쇠에 노릇하게 구워 낸 요리로 매우 고급 반찬이며 밥도둑으로 유명하다.',
    name_en: 'Grilled Dried Yellow Croaker',
    description_en:
      'Gulbi, or salted and dried yellow croaker, is closely associated with Yeonggwang, South Jeolla Province. This dish features gulbi brushed with sesame oil and cooked on a gridiron. It is considered a luxury food.',
    name_ja: '干しイシモチ焼き',
    description_ja:
      'シモチを塩漬けにして干したものは「クルビ」と呼ばれ、全羅南道・霊光産のものが最高とされる。干しイシモチ焼きは、このクルビにごま油を塗り、焼き網でこんがりと焼いた料理で、とても高級なおかずとされ、ご飯にもよく合うことで知られる。',
    name_zh: '烤半干黄花鱼',
    description_zh:
      '用盐腌制后晒干的咸黄花鱼， 全罗南道灵光的咸黄花鱼最为有名。咸黄花 鱼身上抹上香油，放在烤架上煎烤至外皮焦 黄，是一种高级配菜，也是出了名的下饭菜。',
    name_zh2: '烤半幹黃花魚',
    description_zh2:
      '用鹽醃製黃花魚後晾乾的黃花魚叫半幹黃花魚。魚身上抹香油，放在鐵架子上烤成焦黃色即可。烤半幹黃花魚是一道高檔料理，是非常下飯的美味佳餚。',
  },
  {
    id: 510,
    category: '구이 [Gui]',
    name: '김',
    pronounce: 'Gim',
    description:
      '바다의 암초에 이끼처럼 붙어서 자라는 해조류로 바람에 말려서 반찬으로 먹는다. 참기름이나 들기름을 발라 구워 먹기도 하고 각종 재료를 넣어 김밥을 만들어 먹기도 한다.',
    name_en: 'Laver',
    description_en:
      'This is a type of edible seaweed, or dried laver, made from seaweed that grows on rocks like moss. It is eaten by toasting it with sesame or perilla oil. Also, gimbap is made by rolling a variety of ingredients and rice in sheets of gim.',
    name_ja: 'のり',
    description_ja:
      '海の暗礁に苔のようにくっついて生息する海藻で、風で乾燥させ、おかずとして食べる。ゴマ油やエゴマ油を塗って焼いて食べたり、色々な材料を入れてのり巻きにして食べたりする。',
    name_zh: '海苔',
    description_zh:
      '海苔是生长于浅海岩石上的藻类植物， 风干后可供食用。可抹上香油或白苏油烤来 吃，也可以放入各种材料做成卷饭。',
    name_zh2: '紫菜',
    description_zh2: '在屬於海藻類的海苔上塗抹麻油後烤製而成，包飯吃別有風味。',
  },
  {
    id: 511,
    category: '구이 [Gui]',
    name: '꼬치구이',
    pronounce: 'Kkochigui',
    description:
      '고기와 각종 해물, 채소 등을 꼬치에 꿰어서 구운 음식이다. 길거리 포장마차에서 흔하게 볼 수 있는 닭 꼬치가 대표적이다.',
    name_en: 'Grilled Skewers',
    description_en:
      'One of the most popular skewed dishes and street snacks, chicken skewers are made by grilling meat, seafood, and vegetables that have been cut into bite-sized pieces and placed on a skewer.',
    name_ja: '串焼き',
    description_ja: '肉や魚介、野菜などを串にさして焼いたもの。屋台でよく見かける焼き鳥が代表的。',
    name_zh: '烤串',
    description_zh:
      '将肉和各种海鲜、蔬菜等用竹签串起来烤熟即可。在街边小摊经常可见的烤鸡串就是最典型的的烤串。',
    name_zh2: '烤串',
    description_zh2:
      '把肉和各種海鮮、蔬菜等串起來烤熟。在街頭的帳篷小店裡經常能吃到這樣的烤串，最具代表性的當屬雞肉串。',
  },
  {
    id: 512,
    category: '구이 [Gui]',
    name: '꽁치구이',
    pronounce: 'Kkongchigui',
    description:
      '손질하여 칼집을 넣은 꽁치에 소금을 뿌려서 석쇠나 식용유를 두른 팬에 구운 음식이다. 꽁치는 저렴하지만 맛이 좋고 영양가가 높아 일반 가정에서나 식당에서 자주 이용한다.',
    name_en: 'Grilled Saury',
    description_en:
      'This is cleaned, scored, and salted saury cooked on a grill or roasted in an oiled pan. Saury is affordable yet nutritious and tasty, making it a popular dish both at home and restaurants.',
    name_ja: 'サンマ焼き',
    description_ja:
      'サンマに塩をふり、焼き網や食用油をひいたフライパンで焼いたもの。サンマは手頃で味も良く、栄養もあることから一般家庭の食卓や食堂によく並ぶ。',
    name_zh: '烤秋刀鱼',
    description_zh:
      '将处理好的秋刀鱼打上花刀，撒上盐，放在烤架上或烧热倒油的平底锅里烤熟即可。秋刀鱼虽然廉价，但是味道鲜美，又富含各种营养成分，在一般家庭和餐厅都很常见。',
    name_zh2: '烤秋刀魚',
    description_zh2:
      '秋刀魚清理乾淨後劃幾個刀口，然後撒上鹽，用箅子烤或用放油的鍋煎熟。秋刀魚價格低廉，但非常美味，是家庭或餐廳裡最常見的食材。',
  },
  {
    id: 513,
    category: '구이 [Gui]',
    name: '낙지호롱',
    pronounce: 'Nakjihorong',
    description:
      '대나무 젓가락이나 짚 묶음에 세발낙지를 머리부터 통째로 끼워 돌돌 감은 다음 양념장을 골고루 발라 구워낸 음식이다. 돌돌 말린 낙지를 풀어가며 먹는 재미가 쏠쏠한 색다른 별미다.',
    name_en: 'Grilled Whole Octopus',
    description_en:
      'A whole octopus skewered on a bamboo stick and rolled up, brushed with a sauce, and grilled. Rolling the octopus in this way makes it more fun to eat.',
    name_ja: 'テナガダコの丸焼き',
    description_ja:
      '竹箸や編んだ藁に大きくなる前の足の細いテナガダコを頭からくるくる巻き付けてたれにつけて焼いたもの。巻かれたテナガダコをほどきながら食べる楽しさがある。',
    name_zh: '章鱼串',
    description_zh:
      '用竹筷或秸秆将细爪章鱼从头部开始卷起来，均匀地涂抹调味酱后，放在火上烤熟即可。卷在竹筷上的章鱼吃起来不仅美味，而且别有一股乐趣。',
    name_zh2: '章魚串',
    description_zh2:
      '用竹筷或稻草棍把細爪章魚從頭邊轉邊串，然後均勻抹上調味醬烤熟。卷在竹筷上的章魚吃起來不僅美味，而且別有一番情趣。',
  },
  {
    id: 514,
    category: '구이 [Gui]',
    name: '너비아니',
    pronounce: 'Neobiani',
    description:
      '소고기 등심이나 안심을 얇게 저며 간장 양념한 다음 석쇠에 구워 잣가루를 뿌린 요리다. 한국의 전통 고기 요리 중 대표적인 것으로 너붓너붓 썰었다 해서 너비아니라고 한다.',
    name_en: 'Marinated Grilled Beef Slices',
    description_en:
      'This dish is prepared by grilling slices of beef that have been marinated in seasoned soy sauce, and is served with ground pine nuts sprinkled on top. It is one of the most representative traditional Korean meat dishes. Neobiani is named for the shape of the slices of beef, as the term implies “to slice up.”',
    name_ja: '宮中焼き肉',
    description_ja:
      '牛ロースや牛のばら肉を薄くスライスして醤油で味付けし、グリルで焼いてから朝鮮松の実の粉をまぶした料理。韓国の伝統的な肉料理の中で最も代表的なもの。',
    name_zh: '宫廷烤牛肉',
    description_zh:
      '将牛肉的背脊肉或里脊肉切成 薄片，用酱油调味后，放在烤肉架上翻烤，最 后撒上松仁粉末即可，是韩国肉菜中具有代 表性的一道传统菜。',
    name_zh2: '宮廷烤牛肉',
    description_zh2:
      '將牛的背脊肉或里脊肉切成厚片後打花刀，用肉調味醬醃製後，用直火兩面翻烤後撒上松仁粉即可。',
  },
  {
    id: 515,
    category: '구이 [Gui]',
    name: '닭꼬치구이',
    pronounce: 'Dakkkochigui',
    description:
      '한입 크기로 자른 닭 가슴살에 소금 등으로 밑간을 하여 꼬치에 꿰어 구워서 간장이나 고추장 양념을 하여 구운 음식이다. 기호에 따라 풋고추 등 다양한 색깔의 채소를 끼우기도 한다.',
    name_en: 'Chicken Skewers',
    description_en:
      'Here, salted chickenbreast is cut into bite-sized pieces andskewered and grilled with soy or gochujang.To make it more visually pleasing, vegetables in various colors, such as green pepper, can be put on the skewers with the chicken.',
    name_ja: '焼き鳥',
    description_ja:
      '一口大に切った鶏の胸肉に塩などで下味を付けて串に刺し、醤油やコチュジャンで味付けして焼く。好みによって青唐辛子など彩り豊かな野菜を挟むこともある。',
    name_zh: '烤鸡肉串',
    description_zh:
      '将鸡胸肉切成方便入口的块状，用 盐腌一下，然后用竹签串起来，抹上用酱油或 辣椒酱等调制的调味酱后烤熟即可。按照个人 的喜好，还可使用青椒等各种颜色的蔬菜。',
    name_zh2: '烤雞肉串',
    description_zh2:
      '把醃製好的一口大小雞胸肉串起來，抹上醬油或辣椒醬調味汁烤製。可根據喜好串上青椒等各種顏色的蔬菜。',
  },
  {
    id: 516,
    category: '구이 [Gui]',
    name: '대창구이',
    pronounce: 'Daechanggui',
    description:
      '대창은 소의 큰창자를 말한다. 뒤집어서 밀가루를 이용하여 깨끗하게 씻은 뒤 바로 굽거나 양념에 재운 뒤 굽는다. 고소하면서 쫀득한 식감을 즐길 수 있다.',
    name_en: 'Grilled Beef Large Intestine',
    description_en:
      'Tripe or beef large intestines turned inside out, cleaned with flour, and grilled or marinated in a sauce before grilling. This dish is both tasty and chewy.',
    name_ja: '牛大腸焼き',
    description_ja:
      '大腸を裏返して小麦粉できれいに洗った後、そのまま焼いたり、たれに漬けてから焼く。香ばしく歯ごたえのある食感が楽しめる。',
    name_zh: '烤牛大肠',
    description_zh:
      '大肠指牛的大肠，将大肠翻过来，用面粉搓洗干净后，可直接烤着吃，也可用调味酱腌制一会儿后烤着吃。烤牛大肠味道又香又嫩，口感十分劲道。',
    name_zh2: '烤牛大腸',
    description_zh2:
      '大腸是指牛大腸。大腸翻過來用麵粉清洗乾淨，然後直接烤製或先用調料醃好後再烤。吃起來又香又勁道。',
  },
  {
    id: 517,
    category: '구이 [Gui]',
    name: '대패삼겹살',
    pronounce: 'Daepaesamgyeopsal',
    description:
      '얇은 두께로 썰어낸 냉동 삼겹살이다. 대패로 썬 듯이 얇다하여 대패삼겹살이라 이름 붙여졌다. 구이나 볶음 등으로 다양하게 조리해서 먹을 수 있고, 냉동육이므로 저렴한 가격으로 부담 없이 즐길 수 있다.',
    name_en: 'Grilled Thin-sliced Pork Belly',
    description_en:
      'Frozen pork belly sliced as thinly as thin, planed strips of wood, thus the name “Grilled Thin-sliced Pork Belly.” Thinly sliced pork belly is prepared by grilling or stir-frying, among other cooking methods. As the pork comes frozen, it is quite affordable.',
    name_ja: '薄切りサムギョプサル',
    description_ja:
      '薄く削った冷凍サムギョプサル。鉋で削ったように薄いサムギョプサルのため、鉋サムギョプサルと呼ばれる。焼く、炒めるなど調理法は様々。冷凍肉のため手頃な価格で食べられる。',
    name_zh: '薄切五花肉',
    description_zh:
      '切得很薄的冷冻五花肉就像是用刨子推的一样薄，因此叫刨子五花肉。可用来烧烤或炒炖等烹调方法丰富多样，而且因为是冷冻肉，价格比较便宜。',
    name_zh2: '薄切五花肉',
    description_zh2:
      '是非常薄的冷凍五花肉片，像用鉋子弄的一樣薄，所以叫做鉋子五花肉。烤或炒均可，因為是冷凍肉，所以價格也非常實惠。',
  },
  {
    id: 518,
    category: '구이 [Gui]',
    name: '대하구이',
    pronounce: 'Daehagui',
    description:
      '굵은 소금을 팬에 깔고 그 위에 대하를 올려 구워 먹는다. 대하는 몸집이 큰 대형 새우로 가을이 제철이다.',
    name_en: 'Grilled Prawn',
    description_en: 'Salt-grilled prawn. Prawn is in season in fall.',
    name_ja: '大正海老焼き',
    description_ja:
      'あら塩をフライパンに敷き、その上に大正海老をのせて焼いて食べる。大正海老は秋が旬の大きめのエビ。',
    name_zh: '烤大虾',
    description_zh:
      '平底锅中铺一层粗盐，将大虾放在粗盐上烤熟即可。大虾个大肉多，鲜嫩爽口，尤其秋天的大虾最为肥美。',
    name_zh2: '烤大蝦',
    description_zh2: '鍋裡倒入粗鹽，把大蝦放在上面烤熟。大蝦體量大，是秋季海鮮。',
  },
  {
    id: 519,
    category: '구이 [Gui]',
    name: '대합구이',
    pronounce: 'Daehapgui',
    description:
      '대합 살, 소고기, 두부, 표고버섯 등을 곱게 다져 양념하여 대합 껍데기 안에 채워 넣고 팬이나 석쇠에서 구운 고급음식이다. 궁중이나 혼례음식으로 사용되었다.',
    name_en: 'Grilled Hard Clams',
    description_en:
      'Chopped hard clams, beef, bean curd, and shiitake mushroom mixed with seasonings and cooked on hard clam shells on a grill or roasted in a pan. This delicacy used to be served at the royal court and on special occasions.',
    name_ja: 'ハマグリ焼き',
    description_ja:
      'ハマグリの身、牛肉、豆腐、しいたけなどを細かく刻んで味をつけ、ハマグリの殻の内側に詰めてフライパンや焼き網で焼く高級料理。宮中や婚礼料理として食べられた。',
    name_zh: '烤文蛤',
    description_zh:
      '文蛤肉、牛肉、豆腐、香菇等材料剁碎调味后，塞入文蛤壳里，放在平底锅里或烤架上烤熟 即可。烤文蛤是一道高级菜肴，曾是宫廷菜和喜宴菜。',
    name_zh2: '烤文蛤',
    description_zh2:
      '把文蛤肉、牛肉、豆腐、香菇等切成碎末放入文蛤殼裡，然後用鍋煎熟或用箅子烤熟，是一道高檔美食，過去是宮廷禦膳或婚宴美食。',
  },
  {
    id: 520,
    category: '구이 [Gui]',
    name: '더덕구이',
    pronounce: 'Deodeokgui',
    description:
      '인삼 못지않은 약효와 특유의 맛을 갖고 있는 뿌리 채소 더덕에 매콤달콤한 고추장 양념장을 발라 구운 음식이다.',
    name_en: 'Grilled Deodeok',
    description_en:
      'Deodeok (bonnet bellflower root) brushed with sweet and spicy gochujang and grilled. The slightly bitter deodeok root has health benefits similar to ginseng.',
    name_ja: '蔓人蔘焼き',
    description_ja:
      '高麗人参に劣らない効能と独特の苦味のある蔓人参に、甘辛いコチュジャンベースの薬味を塗って焼いた料理。',
    name_zh: '烤沙参',
    description_zh:
      '沙参具有不亚于人参的药效及特有的 微苦口感。用辣椒酱调制辣中微甜的调味酱 均匀地涂抹在沙参上，然后下锅煎烤即可。',
    name_zh2: '烤沙蔘',
    description_zh2: '在根類蔬菜沙蔘上塗抹辣椒醬汁烤製，可以享用微苦香脆的美味。',
  },
  {
    id: 521,
    category: '구이 [Gui]',
    name: '도루묵구이',
    pronounce: 'Dorumukgui',
    description:
      '손질한 도루묵에 양념장을 발라 가며 골고루 구워 먹는다. 또한 굽기 30분 전쯤 소금을 뿌려둔 다음 구우면 살이 덜 부스러지며 비린내 없이 한결 맛이 깔끔하다.',
    name_en: 'Grilled Sailfin Sandfish',
    description_en:
      'Here, sailfin sandfish is brushed with a sauce and grilled. Salt is sprinkled on the fish some 30 minutes before grilling in order to make the flesh firm and remove the fishy smell.',
    name_ja: 'ハタハタ焼き',
    description_ja:
      'ハタハタにたれを付けながらよく焼く。焼く30分前ぐらいに塩をふっておくと、身が崩れにくくなり、臭みもなくなってさっぱりした味わいになる。',
    name_zh: '烤银鱼',
    description_zh:
      '银鱼收拾干净后涂抹调味酱，放在火上正反面翻过来均匀地烤熟即可。烤前撒上盐腌制三十分钟，烤出来的鱼肉更加软嫩而且没有鱼腥味，味道更加醇正。',
    name_zh2: '烤銀魚',
    description_zh2:
      '在清理乾淨的銀魚上均勻塗抹調味汁，一邊塗抹一邊烤制。烤前30分鐘撒上鹽，就能使魚肉變得緊實，不易脫落，還能清除腥味，吃起來口感會更好。',
  },
  {
    id: 522,
    category: '구이 [Gui]',
    name: '도리뱅뱅',
    pronounce: 'Doribaengbaeng',
    description:
      '피라미를 프라이팬에 동그랗게 돌려 담아 기름에 튀긴 후 매콤한 양념에 조린 음식이다. 충청북도 옥천지역의 향토음식으로 고소하고 바삭한 맛이 일품이다.',
    name_en: 'Spicy Braised Freshwater Sprats',
    description_en:
      'Freshwater sprats arranged in a circle in a pan and fried before braising with a spicy sauce. A local specialty of the Okcheon area of North Chungcheong Province, this dish is popular for the crisp texture and savory taste of the fish.',
    name_ja: '揚げ出しオイカワの煮物',
    description_ja:
      'オイカワをフライパンにぐるりと並べ、油でさっと揚げた後、辛いたれで味をつけたもの。オクチョン地方の郷土料理。香ばしくさくっとして美味しい。',
    name_zh: '炖炸白糯鱼',
    description_zh:
      '将白糯鱼围城圆圈状后放入锅中油炸，再加入鲜辣的调味酱炖煮即可。炖炸白糯鱼是忠清北道沃川地区的地方特色美食，味道香浓酥脆，十分美味。',
    name_zh2: '燉炸白糯魚',
    description_zh2:
      '將白糯魚整齊地擺放成圓形用油煎熟，然後用香辣調料燉製。這道菜是忠清北道沃川地區的地方美食，口感酥脆。',
  },
  {
    id: 523,
    category: '구이 [Gui]',
    name: '도미구이',
    pronounce: 'Domigui',
    description:
      '손질한 도미를 참기름을 발라가며 석쇠에 구운 음식이다. 익기 전에 자주 뒤집으면 껍질이 상하므로, 한쪽 면이 다 익으면 뒤집는 것이 좋다.',
    name_en: 'Grilled Sea Bream',
    description_en:
      'This dish is made by grilling cleaned snapper while brushing with sesame oil. Be sure not to turn the fish until one side is completely cooked, so as not to damage the skin.',
    name_ja: '鯛焼き',
    description_ja:
      '鯛にごま油をぬりながら焼き網で焼く。焼ける前に頻繁に裏返すと皮がくずれるため、片側が焼けてから裏返して焼くといい。',
    name_zh: '烤鲷鱼',
    description_zh:
      '将处理好的鲷鱼放到烧烤的烤架上，边烤边抹香油，直至颜色焦黄即可。鱼放上贴网后不要随意翻动，否则鱼皮很容易损坏，应该一面完全烤好后再翻身烤另一面。',
    name_zh2: '烤鯛魚',
    description_zh2:
      '清理好的鯛魚抹上香油，再用箅子烤熟。還沒熟之前老翻，會使魚皮受損，所以最好一面熟透了再烤另一面。',
  },
  {
    id: 524,
    category: '구이 [Gui]',
    name: '돼지갈비구이',
    pronounce: 'Dwaejigalbigui',
    description:
      '돼지갈비의 살을 얇게 펴서 손질한 뒤 간장 양념장에 재웠다가 숯불에 구워 먹는 음식. 고춧가루나 고추장을 넣어 맵게 양념하기도 한다.',
    name_en: 'Grilled Spareribs',
    description_en:
      'Pork spareribs butterflied or accordion cut, marinated in a sweet soy sauce mixture, and chargrilled.Red chili powder or gochujang may be added to make it spicy.',
    name_ja: '豚カルビ焼き',
    description_ja:
      '豚カルビの身を開いて醤油だれに漬けこみ、炭火で焼いた料理。粉唐辛子やコチュジャンで辛味を加えることもある。',
    name_zh: '烤猪排',
    description_zh:
      '将猪排肉用调味汁腌渍以后放到炭 火上烤熟即可。如果喜欢辣味，可在调味汁中 加入辣椒粉和辣椒酱。',
    name_zh2: '烤豬排',
    description_zh2: '將豬排或排骨肉用調味醬醃製後用直火烤吃。可以根據喜好使用辣調味醬。',
  },
  {
    id: 525,
    category: '구이 [Gui]',
    name: '돼지막창구이',
    pronounce: 'Dwaejimakchanggui',
    description:
      '돼지 막창을 석쇠나 불판에 구워먹는 음식이다. 막창은 창자의 마지막 직장 부위를 가리키는데, 한 마리당 250g 정도 밖에 나오지 않는다. 대구광역시나 경상도 지방에서 즐겨 먹던 음식이었으나 현재는 전국에서 쉽게 맛볼 수 있다.',
    name_en: 'Grilled Pork Intestine',
    description_en:
      'Pig’s entrails grilled or roasted. The supply of pig’s entrails is rather limited, as one pig provides only 250 grams of entrails. This dish used to be popular in Daegu and other parts of Gyeongsang Province, but it is now enjoyed widely across the nation.',
    name_ja: '豚てっぽう焼き',
    description_ja:
      '豚てっぽうを焼き網や鉄板で焼いたもの。てっぽうとは、はらわたの最後の直腸部位をさし、一匹当たり250g程度しかとれない。テグやキョンサン地方でよく食べられる料理だったが、現在は全国で食べることができる。',
    name_zh: '烤猪肠头',
    description_zh:
      '将猪肥肠放在烤架或烤盘上烤熟即可。猪肥肠采用肠子最尾端的直肠部位，平均一只猪只得250克。烤猪肥肠原是大邱广域市和庆尚道地区的特色食物，如今在全国各地都能吃到。',
    name_zh2: '烤豬腸頭',
    description_zh2:
      '是用箅子或鐵盤烤熟即可享用的美食。肥腸是指大腸的最後一段，每頭僅有250g左右。這道菜肴是大邱廣域市或慶尚道地區的人愛吃的美食，如今在韓國各地都能品嘗得到。',
  },
  {
    id: 526,
    category: '구이 [Gui]',
    name: '등갈비구이',
    pronounce: 'Deunggalbigui',
    description:
      '끓는 물에 삶은 등갈비에 양념을 발라 구워낸 음식이다. 뼈에 붙어 있는 살코기를 발라먹는 맛이 으뜸이다.',
    name_en: 'Grilled Back Ribs',
    description_en:
      'Boiled pork back ribs seasoned and grilled. The meat on the bone is chewy and delicious.',
    name_ja: 'バックリプ焼き',
    description_ja:
      '熱湯で茹でたバックリブにたれをぬって焼いたもの。骨についている身の味は最高に美味しい。',
    name_zh: '烤脊排',
    description_zh:
      '将脊骨放入开水中煮熟后，抹上调味酱烤着吃即可。烤脊骨不仅味道鲜美，啃带骨肉更是一种乐趣，令人欲罢不能。',
    name_zh2: '烤脊排',
    description_zh2: '用熱水煮熟的脊排抹上調味料烤熟即可。帶骨頭的瘦肉吃起來非常美味。',
  },
  {
    id: 527,
    category: '구이 [Gui]',
    name: '등심구이',
    pronounce: 'Deungsimgui',
    description:
      '소의 등심 부위를 불에 구워먹는 요리이다. 적당히 구워 기름장에 찍어 먹거나 쌈 채소와 함께 먹기도 한다.',
    name_en: 'Grilled Sirloin',
    description_en:
      'Grilled sirloin is often eaten with an oil-based dipping sauce or leafy vegetables.',
    name_ja: 'ロース焼き',
    description_ja:
      'ロース部位を焼いた料理。焼いた肉は、ごま油と塩のたれにつけて食べたり、野菜に包んで食べる。',
    name_zh: '烤外脊',
    description_zh: '将牛的外脊部位烤熟后，用香油加盐调制的酱蘸着吃或用蔬菜包着吃即可。',
    name_zh2: '烤外脊',
    description_zh2:
      '這是一道烤著吃的牛裡脊肉菜肴。牛裡脊適當烤熟後用油醬沾著吃，或者用蔬菜包著吃即可。',
  },
  {
    id: 528,
    category: '구이 [Gui]',
    name: '떡갈비',
    pronounce: 'Tteokgalbi',
    description:
      '갈비살을 곱게 다져 간장, 다진 마늘 등으로 갖은 양념하여 치댄 뒤 갈비뼈에 도톰하게 붙여 남은 양념장을 발라가며 구워 먹는 음식이다. 부드럽고 쫄깃한 맛이 특징이다.',
    name_en: 'Grilled Short Rib Patties',
    description_en:
      'Minced beef rib meat seasoned with garlic and soy sauce, molded around the bone and chargrilled while brushing with a soy sauce mixture. It is characterized by its soft yet chewy texture.',
    name_ja: '粗挽きカルビ焼き',
    description_ja:
      '挽いた牛ばら肉に醤油やにんにくのみじん切りなどの薬味を加えてこね、あばら骨にくっつけ、残った薬味を塗りながら焼いた料理。',
    name_zh: '牛肉饼',
    description_zh:
      '将排骨肉剁成碎末，用酱油，蒜蓉等 调味料搅拌均匀后重新贴到排骨上，并把剩 余的调味料涂抹在牛排上烤熟即可。吃起来 口感软嫩，十分美味。',
    name_zh2: '牛肉餅',
    description_zh2:
      '將牛排肉剁成碎末，用醬油調味後，重新沾在肋排骨上烤製食用。烤熟後吃起來口感軟嫩、十分美味。',
  },
  {
    id: 529,
    category: '구이 [Gui]',
    name: '막창구이',
    pronounce: 'Makchanggui',
    description:
      '소나 돼지의 막창 부위를 석쇠나 불판에 구워먹는 음식이다. 노릇노릇하게 구운 뒤, 소금이나 기름장에 찍어 먹는다.',
    name_en: 'Grilled Beef Reed Tripe',
    description_en:
      'Grilled pig’s or cow’s entrails served with salt or an oil-based dipping sauce.',
    name_ja: 'ギアラ焼き',
    description_ja:
      '牛や豚の胃袋部位を焼き網や鉄板で焼いて食べる料理。こんがり焼いたものを塩やごま油と塩のたれにつけて食べる。',
    name_zh: '烤牛胃',
    description_zh:
      '将牛胃或猪胃放在烧烤用的烤架或烤盘上烤熟，待表面颜色变得焦黄后，蘸盐或香油加盐的香油酱吃即可。',
    name_zh2: '烤牛胃',
    description_zh2: '把牛胃或豬胃用箅子或鐵板烤著吃。烤成焦黃色之後沾食鹽或油醬吃即可。',
  },
  {
    id: 530,
    category: '구이 [Gui]',
    name: '매운족발',
    pronounce: 'Maeunjokbal',
    description:
      '푹 삶아 부드럽게 익은 족발에 고추장, 고춧가루, 간장, 물엿, 다진 마늘 등을 넣어 만든 매운 양념을 발라가서 다시 구운 음식이다. 매콤한 양념에 불향이 더 해진 맛이 매력이다.',
    name_en: "Spicy Braised Pigs' Feet",
    description_en:
      'This dish is prepared by boiling pig’s (or ox) feet and then grilling while brushing with a mixture of gochujang (red chili paste), red chili powder, soy sauce, syrup, and chopped garlic. This spicy dish is especially delicious when cooked over a fire.',
    name_ja: '辛味豚足',
    description_ja:
      'じっくり茹でて柔らかくなった豚足に、コチュジャン、粉唐辛子、カンジャン、水あめ、みじん切りしたにんにくなどが入った辛めのたれをにぬりながら焼いた料理。炎にあぶられた辛味はやみつきに。',
    name_zh: '香辣猪蹄',
    description_zh:
      '猪蹄煮至软烂后，抹上用辣椒酱、辣椒粉、酱油、糖稀、蒜末等调制的调味酱，再放在火上烤熟即可。调味酱加上火烤的味道，烤香浓郁，风味独特。',
    name_zh2: '香辣豬蹄',
    description_zh2:
      '煮透的豬蹄抹上用辣椒醬、辣椒粉、醬油、糖稀、蒜蓉等做成的調味醬後烤製。香辣調料加上烤焦味，吃起來非常過癮。',
  },
  {
    id: 531,
    category: '구이 [Gui]',
    name: '모던불고기',
    pronounce: 'Modern Bulgogi',
    description:
      '다진 소고기를 양념에 재워 둥글납작하게 반대기를 지어서 속은 육즙이 배고 겉은 바삭하게 구워 낸 뒤 샐러드를 얹고 작고 동그란 번 빵 위에 놓아 간편하게 들고 먹는다.',
    name_en: 'Modern Bulgogi',
    description_en:
      'For this dish, minced beef is marinated in seasoning and flattened. The round, flattened beef patty is then fried until crispy on the outside and tender on the inside. It is served with a salad on top and a small bun underneath.',
    name_ja: 'モダンプルゴギ',
    description_ja:
      '牛挽き肉を味付けして寝かせ、丸く平らに形成して焼く。外側を香ばしく焼き上げることで肉汁を逃がさない。肉の上にサラダをのせて、それをバンズの上に置き、手軽に食べる。',
    name_zh: '现代式烤牛肉',
    description_zh:
      '牛肉剁碎调味后做成圆扁状， 烤成外焦里嫩的状态，上面放一些蔬菜沙拉， 然后将两者一起放在小圆面包上面，用手拿起 来吃即可。',
    name_zh2: '現代式烤牛肉',
    description_zh2:
      '用調料醃製打碎的牛肉，然後弄成圓餅煎熟，這樣加工的牛肉餅外酥裡嫩，一咬一口汁。在牛肉餅上放沙拉，然後整個放在圓形的甜麵包上拿著吃即可。',
  },
  {
    id: 532,
    category: '구이 [Gui]',
    name: '목살구이',
    pronounce: 'Moksalgui',
    description:
      '소금과 후추로 밑간한 돼지 목살을 불판 위에 올려 구워 먹는다. 된장으로 만든 소스와 야채를 곁들여 먹으면 맛있다.',
    name_en: 'Grilled Pork Neck',
    description_en:
      'Grilled pork neck seasoned with salt and pepper. The dish tastes great with a doenjang (soybean paste) dipping sauce and vegetables.',
    name_ja: '豚の肩ロース焼き',
    description_ja:
      '塩とこしょうで下味を付けた豚の肩ロースを鉄板で焼いて食べる料理。テンジャンベースのソースと野菜を添えて食べるとさらに美味しい。',
    name_zh: '烤猪颈肉',
    description_zh:
      '将用盐、胡椒粉腌制的猪颈肉放在烤盘上烤着吃。搭配用大酱做的酱汁和蔬菜，味道更佳。',
    name_zh2: '烤豬肩肉',
    description_zh2:
      '將用鹽、胡椒粉醃製的豬肩肉放在烤盤上烤來吃。搭配用大醬做的醬汁和蔬菜，味道更鮮香。',
  },
  {
    id: 533,
    category: '구이 [Gui]',
    name: '바싹불고기',
    pronounce: 'Bassakbulgogi',
    description:
      '소고기를 얇게 저며 간장 양념을 한 후 이틀정도 숙성 하여 석쇠 사이에 고기를 넓게 펴서 육즙이 빠지지 않도록 직화로 바싹 구워낸 음식이다.',
    name_en: 'Thin-sliced Bulgogi',
    description_en:
      'Thinly sliced beef marinated in a mixture of soy sauce and other seasonings for about two days, spread on a grill, and cooked over a fire, which allows the meat to retain its moisture.',
    name_ja: '直火プルゴギ',
    description_ja:
      '牛肉を薄く切り、カンジャンベースのたれで味をつける。二日ほど熟成させて焼き網の間に肉を広げて肉汁が逃げないように直火で焼き上げた料理。',
    name_zh: '酥烤牛肉',
    description_zh:
      '牛肉片成薄片，用酱油调味后放置两天左右，待入味后，将牛肉平铺在烤架上，用明火快烤，确保肉汁丰富，味道鲜嫩。',
    name_zh2: '酥烤牛肉',
    description_zh2:
      '把牛肉切成薄片，並用醬油調味後放置兩天左右。將熟成的牛肉片鋪在鐵箅子上用直火烤熟，這樣烤出來的牛肉肉汁飽滿，外酥裡嫩。',
  },
  {
    id: 534,
    category: '구이 [Gui]',
    name: '병어구이',
    pronounce: 'Byeongeogui',
    description:
      '칼집을 넣고 소금을 살짝 뿌린 병어를 달군 석쇠에 구운 다음 고명으로 송송 썬 실파와 실고추를 얹는다. 또 다른 방법으로는 손질한 병어를 구워 고춧가루가 들어간 간장 양념장을 끼얹어 만들기도 한다.',
    name_en: 'Grilled Pomfret',
    description_en:
      'Scored and salted pomfret cooked on a preheated grill and garnished with chopped green onion and dried red pepper threads before serving. This dish can also be prepared by grilling pomfret and drizzling with a soy sauce mixed with red chili powder.',
    name_ja: 'マナガツオ焼き',
    description_ja:
      '塩をふったマナガツオを熱した焼き網で焼いた後、小口切りしたわけぎと糸唐辛子を薬味としてのせる。また、焼いたマナガツオに粉唐辛子入りのカンジャンベースのたれをかける場合もある。',
    name_zh: '烤平鱼',
    description_zh:
      '平鱼打上花刀撒上少许盐后，放在烤架上烤熟，然后在上面摆放一些切细的香葱和辣椒做装饰即可。还有另一种做法，是将处理好的平鱼烤熟后，将加了辣椒粉和酱油调制的调味酱浇在上面。',
    name_zh2: '烤平魚',
    description_zh2:
      '鯧魚清理好後劃幾個扣子，撒上一點鹽，用箅子烤熟，最後放上蔥絲與辣椒絲。另一種做法是，清理好的鯧魚烤熟後澆上辣椒麵醬油調味醬。',
  },
  {
    id: 535,
    category: '구이 [Gui]',
    name: '보리굴비',
    pronounce: 'Borigulbi',
    description:
      '조기를 바닷바람에 자연 건조시킨 뒤 항아리 속에 통보리와 함께 켜켜이 쌓아 숙성시킨 굴비이다. 굴비를 보리쌀에 넣어 보관했기 때문에 생긴 이름이다. 쌀뜨물에 담갔다가 살짝 쪄서 먹으면 독특한 식감을 느낄 수 있다.',
    name_en: 'Barley-aged Dried Yellow Croaker',
    description_en:
      'Yellow corvine dried in the wind blowing in from the sea and aged in an earthen pot filled with barley, thus the name “Bori (barley) gulbi (dried yellow corvina).” When soaked in rice water and lightly steamed, Borigulbi takes on a unique flavor.',
    name_ja: '麦熟成の干しイシモチ',
    description_ja:
      'イシモチを海風で自然乾燥させた後、壷に麦と一緒に層にして入れ、熟成させたもの。イシモチを麦と保存するため麦熟成の干しイシモチと呼ばれる。米のとぎ汁につけてさっと蒸して食べると独特な食感を楽しめる。',
    name_zh: '大麦干黄花鱼',
    description_zh:
      '黄花鱼利用海风晒干，和大麦一起在坛子里层层叠放后进行发酵。因将黄花鱼放在大麦里面保管，所以叫大麦干黄花鱼。发酵好的黄花鱼用淘米水浸泡一会儿后，放入锅中蒸熟即可，口感十分独特。',
    name_zh2: '大麥乾黃花魚',
    description_zh2:
      '黃花魚用海風自然乾燥，然後跟整粒大麥一起層層放入缸裡保存，因為用大麥保存黃花魚，所以被稱為大麥乾黃花魚。把大麥乾黃花魚用淘米水泡一會兒，然後蒸著吃，是一道口感非常獨特的美味佳餚。',
  },
  {
    id: 536,
    category: '구이 [Gui]',
    name: '복불고기',
    pronounce: 'Bokbulgogi',
    description:
      '복어 살코기를 콩나물 등의 채소와 함께 매콤하게 볶아낸 음식이다. 매콤한 양념과 부드러운 복어의 살, 아삭한 콩나물이 조화를 이루어 술안주로도 좋다.',
    name_en: 'Puffer Fish Bulgogi',
    description_en:
      'Puffer fish meat stir-fried with bean sprouts and other vegetables in a spicy sauce. The soft yet spicy puffer fish meat with crunchy bean sprouts pairs perfectly with rice and alcoholic beverages.',
    name_ja: 'ふぐプルゴギ',
    description_ja:
      'ふぐの身を豆もやしなどの野菜と一緒に辛めに炒めたもの。辛味ソースとやわらかいふぐの身、シャキッとした豆もやしのバランスがよく、酒のつまみにもぴったり。',
    name_zh: '炒河豚',
    description_zh:
      '将河豚肉和黄豆芽等蔬菜一起翻炒至熟即可。鲜辣的调味酱和柔嫩细腻的河豚肉、口感爽脆的黄豆芽形成完美的和谐，很适合下酒。',
    name_zh2: '炒河豚',
    description_zh2:
      '是把河豚肉跟豆芽等蔬菜一起炒製的辣味美食。香辣調料與河豚肉，以及口感爽脆的豆芽完美地融合在一起，是非常好的下酒菜。',
  },
  {
    id: 537,
    category: '구이 [Gui]',
    name: '북어구이',
    pronounce: 'Bugeogui',
    description:
      '불린 북어를 방망이로 두드려서 양념장을 발라 재워두었다가 석쇠에 구운 것이다. 밥과 함께 먹으면 반찬으로 좋다.',
    name_en: 'Grilled Dried Pollack',
    description_en:
      'Dried pollack soaked in water, drained, tenderized by pounding with a paddle, and marinated in a sauce and grilled. Grilled dried pollack serves as a tasty side dish with rice.',
    name_ja: '干しスケトウダラ焼き',
    description_ja:
      '水で戻した干しスケトウダラをたたいてたれをぬり、しばらく寝かせてから焼き網で焼いたもの。ご飯がすすむ一品。',
    name_zh: '烤干明太鱼',
    description_zh:
      '将泡发的干明太鱼用木棒敲打后，抹上调味酱腌一会儿，入味后放至烤架上烤熟即可，配米饭吃味道更佳。',
    name_zh2: '烤乾明太魚',
    description_zh2:
      '把提前用水泡過的幹明太魚用木棍敲打使其肉質變松，然後抹上調味醬用箅子烤製。是非常美味的下飯菜。',
  },
  {
    id: 538,
    category: '구이 [Gui]',
    name: '불고기',
    pronounce: 'Bulgogi',
    description:
      '간장, 꿀, 다진 파, 마늘, 깨소금, 후춧가루 등으로 만든 양념장에 소고기를 재웠다가 불고기판에 올려 구워 먹는다. 자작한 국물에 밥을 비벼 먹어도 일품이다.',
    name_en: 'Bulgogi',
    description_en:
      'Bulgogi is prepared with beef that has been marinated in soy sauce, honey, minced green onion, garlic, sesame seeds, and pepper, and then grilled. The excess liquid can be mixed with rice, which tastes as good as the bulgogi itself.',
    name_ja: 'プルゴギ',
    description_ja:
      '醤油や蜂蜜、ネギのみじん切り、ニンニク、ごま塩、胡椒などで作ったヤンニョムジャンたれに牛肉を漬け、プルゴギのプレートにのせて焼いて食べる。汁にご飯を混ぜて食べてもおいしい。',
    name_zh: '烤牛肉',
    description_zh:
      '用酱油、蜂蜜、葱末、蒜泥、芝麻盐、 胡椒粉等制作调味酱，将牛肉用调味酱腌制一 定时间，然后放在烤肉盘上烤食。浓稠的汤汁 可拌饭吃，味道十分美味。',
    name_zh2: '烤牛肉',
    description_zh2: '用醬油、蔥、大蒜等混合的調味醬醃製薄片牛肉後，放在烤肉盤上烤著吃。',
  },
  {
    id: 539,
    category: '구이 [Gui]',
    name: '삼겹살',
    pronounce: 'Samgyeopsal',
    description:
      '돼지의 배 부위로 살코기와 지방이세 겹으로 되어 있어 육질이 부드럽고 고소하다. 양념을 하지 않고 구워 소금이나 쌈장을 찍어 먹고 채소에 쌈을 싸 먹기도 한다.',
    name_en: 'Grilled Pork Belly',
    description_en:
      'Fat-streaked pork belly grilled and dipped in salt or ssamjang (red soybean paste dip). Also eaten wrapped in lettuce leaves.',
    name_ja: 'サムギョプサル',
    description_ja:
      '豚の腹部の肉は赤身と脂身が交互に3層になっているため、柔らかく味も良い。そのまま焼いて、塩や合わせ味噌をつけて食べたり、野菜で包んで食べる。',
    name_zh: '烤五花肉',
    description_zh:
      '五花肉是猪肚腩部位的肉，因瘦肉 和脂肪交替，所以肉质软嫩可口。一般是生肉 直接上火烤，烤熟后沾盐或调味大酱吃，也可 以用蔬菜包肉吃。',
    name_zh2: '烤五花肉',
    description_zh2:
      '五花肉是豬的腹部肉，肉質柔嫩香鮮。在未經調味的狀態下烤之後，蘸麻油、食鹽直接吃，或加上調味大醬用蔬菜包肉吃。',
  },
  {
    id: 540,
    category: '구이 [Gui]',
    name: '삼치구이',
    pronounce: 'Samchigui',
    description:
      '손질한 삼치를 팬이나 석쇠에 구운 음식이다. 생선살이 많고, 부드러워 이가 약한 노인이나 아이들이 먹기에도 좋다.',
    name_en: 'Grilled Spotted Mackerel',
    description_en:
      'Cleaned Japanese Spanish mackerel cooked on a grill or roasted in a pan. This type of mackerel is a meaty fish with a soft texture, which makes it especially good for elderly people and children.',
    name_ja: 'サワラ焼き',
    description_ja:
      'サワラをフライパンや焼き網で焼いたもの。身が多く、柔らかいため、子どもや歯が弱い人も食べやすい。',
    name_zh: '烤鲅鱼',
    description_zh:
      '将处理好的鲅鱼放至平底锅中或烤架上烤熟即可。鲅鱼肉多，口感细嫩，牙齿不要的老人孩子也很适合吃。',
    name_zh2: '烤鮁魚',
    description_zh2:
      '把清理好的鮁魚用箅子烤熟即可。鮁魚魚肉飽滿且口感柔和，非常適合牙口不好的老人或孩子。',
  },
  {
    id: 541,
    category: '구이 [Gui]',
    name: '새우구이',
    pronounce: 'Saeugui',
    description:
      '팬에 굵은 소금을 깔고 깨끗이 씻어 등 쪽의 내장을 빼낸 새우를 얹은 다음 소금으로 새우를 덮은 후 팬의 뚜껑을 닫고 구워 낸 요리로 술안주에 좋다.',
    name_en: 'Grilled Shrimp',
    description_en:
      'Grilled shrimp is made by grilling deveined shrimp with coarse salt in a covered pan. These salted and grilled shrimps are a popular snack served with drinks.',
    name_ja: '海老の塩焼き',
    description_ja:
      'フライパンに粗塩を敷き、きれいに洗って内臓を取り出したエビをのせて塩をかぶせ、フライパンの蓋をして焼いたもので、酒のおつまみにピッタリの料理。',
    name_zh: '烤虾',
    description_zh:
      '在煎锅上铺一层粗盐，将洗净并摘除内 脏的大虾放在粗盐上面，然后盖上锅盖焖烤 即可，很适合作下酒菜。',
    name_zh2: '烤蝦',
    description_zh2: '在鍋裡鋪上粗鹽後放入整條整條的蝦，蓋上蓋後烤熟。',
  },
  {
    id: 542,
    category: '구이 [Gui]',
    name: '생선구이',
    pronounce: 'Saengseongui',
    description:
      '오븐이나 팬을 사용하여 고등어, 꽁치, 갈치 등 각종 생선을 구워 먹는 요리다.소금으로 간을 한 소금구이, 고추장 등으로 갖은 양념한 생선양념구이 등이 있다.',
    name_en: 'Grilled Fish',
    description_en:
      'A variety of fish, including mackerel, saury, and cutlassfish, are grilled and seasoned with salt or gochujang to taste.',
    name_ja: '焼き魚',
    description_ja:
      'オーブンまたはフライパンでサバやサンマ、タチウオなど色々な魚を焼いたもの。塩で味付けした塩焼き、コチュジャンなどで味付けしたヤンニョム焼きなどがある。',
    name_zh: '烤鱼',
    description_zh: '利用烤箱或煎锅烤青花鱼、秋刀鱼、带鱼 等各种鱼类，分为盐烤鱼和辣酱烤鱼等。',
    name_zh2: '烤魚',
    description_zh2:
      '利用烤箱或煎鍋烤出的各種魚，有用食鹽調味的食鹽烤魚和塗抹辣椒醬汁後烤製的辣椒醬汁烤魚。',
  },
  {
    id: 543,
    category: '구이 [Gui]',
    name: '생선양념구이',
    pronounce: 'Saengseonyangnyeomgui',
    description:
      '비늘과 지느러미, 내장을 제거한 생선에 기름을 발라 노릇하게 구운 후, 고추장 양념장을 발라 석쇠에서 한 번 더 굽는다. 주로 조기나 고등어 등의 생선을 쓰며 매콤한 맛이 일품이다.',
    name_en: 'Seasoned Grilled Fish',
    description_en:
      'This dish is made by grilling fish that is scaled, gutted, finned, and brushed with oil. The grilled fish is glazed with a gochujang (red chili paste) sauce and then grilled again. Yellow corvina and mackerel are often used for the dish and the spicy taste is great.',
    name_ja: '魚のコチュジャン焼き',
    description_ja:
      '鱗やヒレ、内臓を取り除いた魚に、油を塗ってこんがりと焼いた後、コチュジャンベースのたれを塗ってもう一度焼く。主にイシモチやサバを使い、ピリ辛味がクセになる。',
    name_zh: '辣酱烤鱼',
    description_zh:
      '将鱼去除鱼鳞、鱼鳍和内脏后抹上油烤至外焦里嫩，然后刷上辣椒酱放在烤架上再烤一次。该料理主要使用黄花鱼、青花鱼等鱼类，鲜辣的味道极佳。',
    name_zh2: '調味炒魚肉',
    description_zh2:
      '魚去除魚鱗、鰭、內臟後抹上油，上架烤至外皮焦黃，塗上辣椒醬後再烤一次。主要使用黃花魚、白腹鯖魚等魚類，鮮辣滋味絕佳。',
  },
  {
    id: 544,
    category: '구이 [Gui]',
    name: '석쇠돼지불고기',
    pronounce: 'Seoksoedwaejibulgogi',
    description:
      '양념한 돼지고기를 달군 석쇠에 구운 음식으로, 불향이 고기에 배어들어가 풍미가 좋다. 양념 때문에 타기 쉬워 앞뒤로 잘 뒤집어 가며 구워야 한다.',
    name_en: 'Grilled Pork Bulgogi',
    description_en:
      'Marinated pork cooked on a preheated grill. The pork is cooked over a fire and has a rich flavor. However, it should be turned frequently so as not to burn the sauce.',
    name_ja: '豚肉プルゴギ網焼き',
    description_ja:
      'たれにからめた豚肉を熱した焼き網で焼いたもの。直火で焼くため、風味が増す。たれが焦げやすいので、よく裏返しながら焼く。',
    name_zh: '烧烤猪肉',
    description_zh:
      '调味好的猪肉放至烤架上烤熟即可，火烤使调料更加入味，烤香浓郁，风味独特。抹上调味酱后很容易烤焦，因此要适时地翻动。',
    name_zh2: '燒烤豬肉',
    description_zh2:
      '把醃製好的豬肉用烤架烤熟即可。這樣烤出來的豬肉帶一種自然熏香，所以滋味非常好。帶醬料的豬肉容易糊，一定要注意翻烤，以免烤焦。',
  },
  {
    id: 545,
    category: '구이 [Gui]',
    name: '소갈비구이',
    pronounce: 'Sogalbigui',
    description:
      '갈비를 갖은 양념하여 구운 것이다. 토막 낸 소갈비의 살을 얇게 펴서 부드럽게 손질한 뒤 간장 양념장에 재웠다가 구워 먹는 음식이다.',
    name_en: 'Grilled Beef Ribs',
    description_en:
      'Beef short ribs butterflied or accordion cut, marinated in a sweet soy sauce mixture, and char-grilled.',
    name_ja: '牛カルビ焼き',
    description_ja: '牛カルビの身を開いて醤油だれに漬けこみ、炭火で焼いた料理。',
    name_zh: '烤牛排',
    description_zh:
      '将牛排肉用调味汁腌渍后烤熟即可。牛排骨剁块，肉切成长条状的薄片并剁出十字花刀，用酱油调味汁腌渍一段时间后烤熟 即可。',
    name_zh2: '烤牛排',
    description_zh2: '將牛排肉切成薄片鋪開，用醬油調味料醃製後烤製。',
  },
  {
    id: 546,
    category: '구이 [Gui]',
    name: '소고기구이',
    pronounce: 'Sogogigui',
    description:
      '소고기를 숯불에 구워먹는 음식으로, 한국인이 가장 대중적으로 소고기를 먹는 방식이다.',
    name_en: 'Grilled Beef',
    description_en:
      'This is beef grilled over charcoal, which is one of the most popular ways of cooking beef in Korea.',
    name_ja: '牛肉焼き',
    description_ja: '牛肉を炭火で焼いたもの。韓国人のもっとも一般的な牛肉の食べ方。',
    name_zh: '烤牛肉',
    description_zh: '在炭火上放上烤架，将牛肉放在烤架上烤熟即可，是韩国人最喜爱的吃法。',
    name_zh2: '烤牛肉',
    description_zh2: '用炭火烤的牛肉，是韓國最常見的牛肉食用方法。',
  },
  {
    id: 547,
    category: '구이 [Gui]',
    name: '소고기편채',
    pronounce: 'Sogogipyeonchae',
    description:
      '소고기를 얇게 썰어 찹쌀가루 옷을 입혀 구운 뒤 생채소를 돌돌 말아 겨자 소스에 찍어 먹는 음식. 소고기 부위에 따라 안심편채 또는 등심편채라고도 한다.',
    name_en: 'Sliced Beef with Vegetables',
    description_en:
      'Sliced beef coated with sweet rice powder and pan-frieduntil crisp. Shredded vegetables are wrapped in the beef and dipped in a soy-mustard sauce. Called deungshimpyeonchae (beef sirloin and vegetables) or anshimpyeonchae (beef tenderloin and vegetables) according to the cut of beef used.',
    name_ja: '牛ロースの薄切り',
    description_ja:
      '薄切りにした牛肉にもち粉をまぶして焼き、生野菜で巻いて辛子ソースにつけて食べる料理。ばら肉を使ったものは「アンシムピョンチェ」、ヒレ肉を使ったものは「トゥンシムピョンチェ」とも呼ばれる。',
    name_zh: '肉片菜丝',
    description_zh:
      '牛肉切成薄片裹上糯米粉后烤熟，再把生的蔬菜放在肉片上卷起来沾芥末汁 吃。根据牛肉的部位又称为里脊肉片菜丝和背脊肉片菜丝。',
    name_zh2: '肉片菜絲',
    description_zh2: '將牛肉切成薄片裹上糯米粉後烤熟，再把生的蔬菜放在肉片上捲起來沾芥子汁吃。',
  },
  {
    id: 548,
    category: '구이 [Gui]',
    name: '소곱창구이',
    pronounce: 'Sogopchanggui',
    description:
      '곱창은 소의 작은창자로, 주로 돌 판에 구워먹는다. 예전에는 비싼 고기를 먹지 못하던 서민들이 즐겨 먹었던 음식이었는데, 요즈음은 가격이 비싸져 고급음식으로 대접받는다.',
    name_en: 'Grilled Beef Small Intestine',
    description_en:
      'Beef small intestines cooked mostly on a stone. In the past, grilled beef intestines was an inexpensive dish popular among those who could not afford to eat beef. However, it has now become an expensive delicacy in Korea.',
    name_ja: '牛コプチャン焼き',
    description_ja:
      'コプチャンは牛の小腸のこと。主に石焼きで食べる。以前は肉が高く、なかなか食べられなかったため、主に庶民に好まれ食べられていた料理だったが、最近は価格もあがり、高級料理とされている。',
    name_zh: '烤牛肠',
    description_zh:
      '将牛的小肠放在石制烤盘上烤熟即可。过去烤牛小肠是生活贫苦吃不起高价牛肉的老百姓最喜爱的大众食品，现在已变成一种高级菜肴，价格也很贵。',
    name_zh2: '烤牛腸',
    description_zh2:
      '肥腸是指牛小腸，一般用石板烤製。過去因為肉很昂貴，老百姓就常吃烤肥腸，如今烤肥腸卻價格飛漲，已然成為高檔美食。',
  },
  {
    id: 549,
    category: '구이 [Gui]',
    name: '소시지떡꼬치',
    pronounce: 'Sosijitteokkkochi',
    description:
      '소시지와 가래떡을 꼬치에 번갈아 꽂아 바삭하게 튀긴 후 케첩이나 칠리소스, 머스타드소스, 고추장소스 등을 발라 먹는다.',
    name_en: 'Sausage and Rice Cake Skewers',
    description_en:
      'Sausages and cylinder-shaped rice cake (garaetteok) alternately threaded on a skewer, fried, and topped with ketchup, chili, mustard, or gochujang (red chili paste) sauce.',
    name_ja: 'ソーセージとお餅の串し焼き',
    description_ja:
      'ソーセージとお餅を串に交互に差してカリッと焼いて、ケチャップやチリソース、マスタードソース、コチュジャンソースなどをかけて食べる。',
    name_zh: '烤香肠年糕串',
    description_zh:
      '将香肠和年糕条交替穿串后炸至酥脆，再抹上番茄酱、甜辣酱、芥末酱、辣椒酱等酱汁即可。',
    name_zh2: '烤香腸年糕串',
    description_zh2:
      '長條年糕和香腸交替穿成串，炸至酥脆後塗上番茄醬、辣醬、芥末醬、辣醬等醬汁食用。',
  },
  {
    id: 550,
    category: '구이 [Gui]',
    name: '솥뚜껑삼겹살',
    pronounce: 'Sotttukkeongsamgyeopsal',
    description:
      '솥뚜껑에 돼지의 삼겹살을 올려 구워먹는 음식이다. 솥뚜껑은 원래 무쇠로 만든 가마솥의 뚜껑인데, 요즘은 삼겹살을 굽는 불판으로 많이 사용한다.',
    name_en: 'Caldron Lid-grilled Pork Belly',
    description_en:
      'Sliced pork belly cooked on a caldron lid. Cast iron caldron lids are now widely used for grilling pork belly.',
    name_ja: '釜のふたサムギョプサル',
    description_ja:
      '釜のふたに豚のサムギョプサルをのせて焼いたもの。釜のふたは本来鋳鉄で作られた釜のふたのことだが、最近はサムギョプサルを焼く鉄板としてよく使われる。',
    name_zh: '锅盖烤五花肉',
    description_zh:
      '将五花肉放在锅盖上烤着吃即可。锅盖原是铁锅的盖子，以生铁制成，最近则常被用来作为烤五花肉的烤盘。',
    name_zh2: '鍋蓋烤五花肉',
    description_zh2:
      '把五花肉放在鍋蓋上烤著吃，所以叫鍋蓋烤五花肉。鍋蓋是鑄鐵產品，本來是用來蓋鍋的，最近經常被用作烤肉盤。',
  },
  {
    id: 551,
    category: '구이 [Gui]',
    name: '숯불닭갈비',
    pronounce: 'Sutbuldakgalbi',
    description:
      '닭고기를 고추장 양념장에 재웠다가 숯불에 구워먹는 음식으로, 강원도 춘천의 향토음식이다.',
    name_en: 'Spicy Charcoal-grilled Chicken',
    description_en:
      'Chicken marinated in a gochujang (red chili paste) sauce and cooked on a charcoal grill. This dish is a local specialty of Chuncheon, Gangwon Province.',
    name_ja: '炭火タッカルビ',
    description_ja:
      'コチュジャンベースのたれに漬けておいた鶏肉を炭火で焼いて食べる。江原道春川の郷土料理。',
    name_zh: '炭烤鸡块',
    description_zh:
      '鸡肉用辣椒酱调制的调味酱腌一会儿，入味后放在炭火上烤熟即可，是江原道春川的地方特色美食。',
    name_zh2: '炭烤雞塊',
    description_zh2:
      '雞肉用辣椒醬調味料醃製好，然後用炭火烤製。這道菜肴是江原道春川的代表性地方美食。',
  },
  {
    id: 552,
    category: '구이 [Gui]',
    name: '숯불삼겹살',
    pronounce: 'Sutbulsamgyeopsal',
    description:
      '삼겹살을 숯불로 구워 먹는 음식이다. 숯불로 구워 육즙이 풍부하고, 삼겹살의 기름이 빠져 직화 구이 특유의 담백한 맛을 즐길 수 있다.',
    name_en: 'Charcoal-grilled Pork Belly',
    description_en:
      'Pork belly grilled over charcoal. Cooking the pork belly over charcoal makes the meat lean and juicy, as it allows all the fat to drain off. This dish has the unique flavor of meat grilled over a fire.',
    name_ja: '炭火サムギョプサル',
    description_ja:
      'サムギョプサルを炭火で焼いて食べる料理｡炭火で焼くため､肉汁がたっぷり詰まっている。余計な油が落ちて、直火焼きの風味とさっぱりとした味が楽しめる。',
    name_zh: '炭烤五花肉',
    description_zh:
      '把五花肉放在炭火上烤着吃。五花肉用炭火烤制，肉汁丰富而不油腻，可享受直火烤肉特有的纯粹风味。',
    name_zh2: '炭烤五花肉',
    description_zh2:
      '將五花肉放在炭火上燒烤。因用炭火烤，五花肉的肉汁飽滿而不油膩，可享受到直火燒烤獨有的清淡味道。',
  },
  {
    id: 553,
    category: '구이 [Gui]',
    name: '양곱창구이',
    pronounce: 'Yanggopchanggui',
    description:
      '양곱창에 밀가루를 뿌려 바락바락 주물러 냄새를 제거하고 껍질을 벗겨 하얗게 손질한 후 갖은 양념을 하여 구워 낸 것이다. 고기에 비해 쫄깃쫄깃하고 씹는 맛이 좋다.',
    name_en: 'Grilled Beef Tripe',
    description_en:
      'Beef tripe marinated in a sauce and grilled. The tripe is cleaned by kneading with flour, which removes the odor and the membrane. It is chewier than beef.',
    name_ja: '牛ミノ焼き',
    description_ja:
      '牛のミノに小麦粉をまぶして揉んでくさみを取り除いた後、皮をはがして切り、たれをつけて焼いたもの。歯ごたえも楽しめる。',
    name_zh: '烤牛胃',
    description_zh:
      '牛胃撒上面粉用力揉搓，去掉腥味，撕掉皮后，清洗至发白，再用各种调料调味后，放在烤架上烤熟即可。口感比牛肉更加劲道滑嫩。',
    name_zh2: '烤牛胃',
    description_zh2:
      '牛胃裡撒上面粉使勁抓洗，以清除膻味，然後剝掉皮清洗。用各種調料醃制後烤熟即可食用。牛胃相比羊肉有嚼頭。',
  },
  {
    id: 554,
    category: '구이 [Gui]',
    name: '양념갈비',
    pronounce: 'Yangnyeomgalbi',
    description:
      '우리나라를 대표하는 요리로 숯불에 구워먹으면 불 맛과 고기의 조화가 매우 좋다.소갈비는 대체로 간장 양념으로 하며 돼지갈비는 고추장 양념에 재워 구워 먹는다.',
    name_en: 'Marinated Grilled Beef RibsMarinated Grilled Pork Ribs',
    description_en:
      'One of the most popular Korean dishes, this dish of marinated beef or pork ribs tastes excellent when grilled. The beef ribs are marinated in soy sauce, while the pork ribs are marinated in seasoned gochujang.',
    name_ja: '味付けカルビ',
    description_ja:
      '韓国を代表する料理で、炭火で焼いて食べると炭火と肉の風味が調和してとてもおいしい。牛カルビは醤油味にし、豚カルビはコチュジャンタレに漬け込んでから焼くのが一般的。',
    name_zh: '调味排骨',
    description_zh:
      '韩国最具代表性的一道菜肴，用炭火烤出来的肉，味道更纯、更正。牛排一般用酱油调味腌制，猪排则是用辣椒酱调味腌 制。',
    name_zh2: '調味排骨',
    description_zh2:
      '用醬油調味料醃製牛排、用辣椒醬調味料醃製豬排後烤著吃。用炭火烤出來的肉味道更加濃郁可口。',
  },
  {
    id: 555,
    category: '구이 [Gui]',
    name: '양념장어구이',
    pronounce: 'Yangnyeomjangeogui',
    description:
      '장어를 손질하여 고추장 양념을 발라 굽는 음식이다. 장어에는 비타민 A, B, C가 풍부해 피부미용과 노화방지에도 좋고, 스태미나에도 좋다.',
    name_en: 'Grilled Seasoned Eel',
    description_en:
      'Cleaned eel marinated in a gochujang (red chili paste) sauce and grilled. Eel is a high-energy food with high levels of vitamins A, B, and C. It also helps improve skin health and slow the aging process.',
    name_ja: '味付けウナギ焼き',
    description_ja:
      'ウナギにコチュジャンベースのたれをぬって焼いたもの。ウナギにはビタミンA、B、Cが豊富に含まれており、肌の美容や老化防止にも効果的で、スタミナをつけるのにもいいとされる。',
    name_zh: '调味烤鳗鱼',
    description_zh:
      '处理好的鳗鱼抹上用辣椒酱调制的调味酱，放在烤架上烤熟即可。鳗鱼富含维生素A、B、C，有助于美容养颜和抗衰老，可补精益气。',
    name_zh2: '調味烤鰻魚',
    description_zh2:
      '鰻魚清理好後抹上辣椒醬調味料，然後烤製即可。鰻魚富含維生素A、B、C，有助於皮膚美容和延緩衰老，還能補充元氣。',
  },
  {
    id: 556,
    category: '구이 [Gui]',
    name: '언양불고기',
    pronounce: 'Eonyangbulgogi',
    description:
      '소고기를 간장 양념에 재웠다가 석쇠에 국물이 없어 바짝 구워 통깨를 뿌린 것으로, 울산 언양읍의 향토 음식이다.',
    name_en: 'Eonyang Bulgogi',
    description_en:
      'A local specialty of Eonyang-up, Ulsan, this dish is made by marinating beef in a soy sauce-based sauce and cooking on a grill. It is sprinkled with sesame seeds before serving.',
    name_ja: 'オンヤンプルゴギ',
    description_ja:
      'カンジャンベースのたれに漬けておいた牛肉を汁気なしで焼き網で焼いたもの。そこにゴマをまぶして食べるオンヤンの郷土料理。',
    name_zh: '彦阳烤牛肉',
    description_zh:
      '牛肉用酱油调制的调味酱腌一会儿，入味到放在烤架上烤熟，撒上芝麻即可，是蔚山彦阳地区的地方特色美食。',
    name_zh2: '彥陽烤牛肉',
    description_zh2: '用醬油醃製牛肉，然後用鐵網烤熟，最後撒上熟芝麻，是蔚山彥陽邑的地方美食。',
  },
  {
    id: 557,
    category: '구이 [Gui]',
    name: '오리구이',
    pronounce: 'Origui',
    description:
      '오리를 껍질째 먹기 좋게 썰어 소금, 후춧가루 등을 뿌려 구운 음식이다.된장 소스, 겨자 소스 등에 찍어 먹고, 채소 쌈을 싸 먹기도 한다.',
    name_en: 'Grilled Duck',
    description_en:
      'Sliced duck with the skin on, seasoned with salt and pepper, and grilled.Served with doenjang (soybean paste) ormustard-soy dipping sauce. Also eatenwrapped in crispy vegetable leaves.',
    name_ja: '鴨肉焼き',
    description_ja:
      '鴨肉を食べやすい大きさに皮ごと切り、塩や胡椒などをふって焼いた料理。テンジャンソースや辛子ソースにつけて食べたり、野菜で包んで食べる。',
    name_zh: '烤鸭肉',
    description_zh:
      '将鸭肉带皮切成适当大小，撒上盐和 胡椒粉烤熟，食用时可沾大酱或芥末汁，也可 用蔬菜包着吃。',
    name_zh2: '烤鴨肉',
    description_zh2:
      '將鴨肉帶皮切成一口大小，撒上食鹽、胡椒粉烤熟。食用時可沾大醬、芥子汁，也可用蔬菜包著吃。',
  },
  {
    id: 558,
    category: '구이 [Gui]',
    name: '오리로스',
    pronounce: 'Oriroseu',
    description:
      '오리고기를 껍질째 먹기 좋게 썰어 소금, 후춧가루 등을 뿌려 구운 음식이다. 된장소스, 겨자소스 등에 찍어 먹고, 채소 쌈을 싸 먹기도 한다.',
    name_en: 'Grilled Duck',
    description_en:
      'Duck sliced with the skin still on, sprinkled with salt and pepper, and grilled. This dish is served with a doenjang (soybean paste) or mustard dipping sauce and leafy vegetables.',
    name_ja: '鴨肉ロース',
    description_ja:
      '鴨肉を皮ごと食べやすい大きさに切り、塩、胡椒などをまぶして焼いたもの。テンジャンソース、辛子ソースなどにつけて食べる。野菜で巻いて食べる場合もある。',
    name_zh: '烤鸭肉',
    description_zh:
      '鸭肉连皮一起切成适合入口的大小，撒上盐、胡椒粉等调料烤熟即可，可用大酱调味汁、芥末调味汁等蘸着吃，也可用蔬菜包着吃。',
    name_zh2: '烤鴨肉',
    description_zh2:
      '把帶皮鴨肉切成適當大小，撒上鹽和胡椒烤製，吃的時候可以沾大醬沙司或芥末沙司，用蔬菜包著吃也非常美味。',
  },
  {
    id: 559,
    category: '구이 [Gui]',
    name: '오리불고기',
    pronounce: 'Oribulgogi',
    description:
      '한입 크기로 썰어낸 오기고기를 고추장 양념을 해 구워 먹는다. 오리고기는 불포화지방산이 풍부해 보양식으로 인기 있다.',
    name_en: 'Duck Bulgogi',
    description_en:
      'Duck meat cut into bite-sized pieces, marinated in a gochujang (red chili paste) sauce, and cooked on a grill. Rich in unsaturated fatty acids, duck is a popular energy-boosting food in Korea.',
    name_ja: '鴨肉プルゴギ',
    description_ja:
      '一口大に切った鴨肉にコチュジャンベースのたれをからめて焼いたもの。鴨肉は不飽和脂肪酸が豊富で、滋養食としても人気がある。',
    name_zh: '烤鸭肉',
    description_zh:
      '鸭肉切成一口大小，用辣椒酱调制的调味酱腌一会儿，入味后烤着吃即可。鸭肉富含不饱和脂肪酸，是一种很好的营养滋补食品。',
    name_zh2: '烤鴨肉',
    description_zh2:
      '切成一口大小的鴨肉用辣椒醬調味料醃製後烤著吃，鴨肉富含不飽和脂肪酸，是非常有人氣的滋補美食。',
  },
  {
    id: 560,
    category: '구이 [Gui]',
    name: '오징어구이',
    pronounce: 'Ojingeogui',
    description:
      '씹는 맛이 탁월해 반찬이나 안주로 각광받는 오징어는 가을철에 가장 맛이 좋다. 껍질 벗긴 오징어 몸통에 사선으로 칼집을 넣어 고추장 양념을 발라 석쇠에 굽는다.',
    name_en: 'Grilled Squid',
    description_en:
      'Squid is characterized by its chewy texture and always seems to taste best in autumn. This dish features peeled squid scored diagonally across the mantle, brushed with gochujang, and grilled.',
    name_ja: 'イカ焼き',
    description_ja:
      '食感が良くおかずやお酒の肴として脚光を浴びるイカは、冬場が一番おいしくなる。皮をむいたイカの胴体にななめに切れ目を入れ、コチュジャンベースのたれをつけて焼き網で焼く。',
    name_zh: '烤鱿鱼',
    description_zh:
      '鱿鱼口感筋道、味道鲜美，是韩国人非常喜爱的配菜和下酒菜，尤以秋天的鱿鱼味道最佳。将鱿鱼去皮后，在躯干上打上斜线 的刀花，抹上辣椒调味酱后放在烤架上烤熟 即可。',
    name_zh2: '烤魷魚',
    description_zh2:
      '魷魚口感勁道，是非常受歡迎的下飯菜或下酒菜，秋季的章魚口感最好。把皮剝掉後劃出多個斜向刀口，然後抹上調味辣醬，用篦子烤熟即可。',
  },
  {
    id: 561,
    category: '구이 [Gui]',
    name: '오징어불고기',
    pronounce: 'Ojingeobulgogi',
    description:
      '오징어에 칼집을 넣어 자른 후 간장 또는 고추장 양념을 해서 구운 음식이다. 오징어는 타우린이 풍부해 피로회복에 좋고, 칼로리가 낮아 다이어트용 식재료로도 안성맞춤이다.',
    name_en: 'Squid Bulgogi',
    description_en:
      'Scored squid cut into bite-sized pieces, mixed with a soy or gochujang (red chili paste) sauce, and grilled. Squid is a low-calorie food with high levels of taurine, making it ideal for weight loss and treating fatigue.',
    name_ja: 'イカのプルゴギ',
    description_ja:
      '切ったイカをカンジャンまたはコチュジャンベースのたれとからめて焼いたもの。イカはタウリンが豊富で、疲労回復にいいとされる。また、低カロリーのため、ダイエット用食材にもぴったり。',
    name_zh: '烤鱿鱼',
    description_zh:
      '鱿鱼打花刀后切成块儿，用酱油或辣椒酱调制的调味酱腌一会儿，入味后烤熟即可。鱿鱼富含牛磺酸，有助于恢复疲劳，而且热量低，是很好的减肥食材。',
    name_zh2: '烤魷魚',
    description_zh2:
      '魷魚上劃幾個刀口，然後放入醬油或辣椒醬烤製。魷魚富含牛磺酸，有助於緩解疲勞，而且熱量低，是非常好的減肥美食。',
  },
  {
    id: 562,
    category: '구이 [Gui]',
    name: '옥돔구이',
    pronounce: 'Okdomgui',
    description:
      '옥돔은 제주도의 특산품이다. 옥돔에 소금을 뿌려 반건조한 후 기름을 두른 팬에 굽는다. 구이로 먹으면 맛이 담백하며 미역, 애호박을 넣어 끓인 국물도 일품이다.',
    name_en: 'Grilled Red Tilefish',
    description_en:
      'Red tilefish butterflied, salted, half-dried, and pan-fried. Red tilefish soup boiled with brown seaweed and zucchini tastes just as great as the grilled version.',
    name_ja: 'アマダイ焼き',
    description_ja:
      '甘鯛は済州島の特産品。甘鯛を開きにし、塩をふって半干しした後、油をひいたフライパンで焼く。さっぱりとした味は格別。ワカメやズッキーニと一緒に煮込んだスープは絶品と言われる。',
    name_zh: '烤马头鱼',
    description_zh:
      '马头鱼为济州岛特产，将鱼切腹、撒盐，风干后，放入平底锅中油煎，味道十分清淡鲜美。马头鱼加入海带和南瓜一起熬煮成汤，也是一道极具特色的风味菜肴。',
    name_zh2: '烤馬頭魚',
    description_zh2:
      '馬頭魚是濟州島特產。馬頭魚剖肚撒上鹽後風乾，吃的時候鍋裡放點油一煎即可，是非常可口的下飯菜。跟海帶或西葫蘆一起煮成湯也非常鮮美。',
  },
  {
    id: 563,
    category: '구이 [Gui]',
    name: '은어구이',
    pronounce: 'Euneogui',
    description:
      '은어에 굵은 소금을 뿌려 앞뒤로 노릇노릇하게 구운 음식이다. 7~9월이 제철로 수박향이 나며 비린 맛이 없는 여름철 별미이다.',
    name_en: 'Grilled Sweetfish',
    description_en:
      'Whole sweetfish drizzled with salt and grilled. A summer delicacy with a refreshing taste and fragrance similar to watermelon, sweetfish is in its prime every summer from July to September.',
    name_ja: '鮎焼き',
    description_ja:
      '鮎にあら塩をふり、裏表をこんがりと焼く。７～9月が旬。すいかの香りがし、臭みのない夏が美味しい。',
    name_zh: '烤香鱼',
    description_zh:
      '香鱼撒上粗盐后，将前后面油煎至焦黄即可。7-9月的香鱼最为肥美，有一股独特的西瓜香气，没有腥味，是夏季的一道风味美食。',
    name_zh2: '烤香魚',
    description_zh2:
      '香魚撒上粗鹽，前後煎成焦黃色即可。香魚7~9月盛產，帶有西瓜的香味，是沒有腥味的夏季美食。',
  },
  {
    id: 564,
    category: '구이 [Gui]',
    name: '임연수구이',
    pronounce: 'Imyeonsugui',
    description:
      '손질한 임연수를 반으로 갈라 구워먹는 음식이다. 임연수 껍질을 먹다가 가산을 탕진했다는 말이 있을 정도로 껍질이 맛있는 생선이다.',
    name_en: 'Grilled Greenling Fish',
    description_en:
      'Cleaned atka mackerel butterflied and grilled. The skin of atka mackerel tastes so good that there is an old saying that, once hooked, one will squander all his or her money to get more of the fish.',
    name_ja: 'ホッケ焼き',
    description_ja:
      '開いたホッケを焼いたもの。ホッケの皮を食べたら家財を使い果たしたという話があるように、皮が美味しい魚。',
    name_zh: '烤多线鱼',
    description_zh:
      '将处理好的多线鱼切开两半后烤熟即可。相传古时有人吃多线鱼皮吃得倾家荡产，说明连鱼皮也好吃得令人欲罢不能。',
    name_zh2: '烤多線魚',
    description_zh2:
      '把清理好的多線魚分成兩半煎著吃。俗話說即使破產也要吃多線魚，可見多線魚的魚皮是多麼地好吃。',
  },
  {
    id: 565,
    category: '구이 [Gui]',
    name: '장어구이',
    pronounce: 'Jangeogui',
    description:
      '장어를 손질하여 소금구이, 간장 양념구이, 고추장 양념구이 등 다양하게 양념하여 구워 먹는다. 장어에는 비타민 A, B, C가 풍부해 피부미용과 노화방지 등에 좋다.',
    name_en: 'Grilled Eel',
    description_en:
      'Cleaned eel are seasoned with salt, soy sauce, gochujang, and others to taste, and then grilled. Eel is rich in vitamins A, B, and C, which fight aging and keep the skin healthy and youthful.',
    name_ja: 'ウナギ焼き',
    description_ja:
      'ウナギを下ごしらえし、塩焼きや醤油ヤンニョム焼き、コチュジャンヤンニョム焼きなど、色々な薬味で味付けして焼く。ウナギにはビタミンA・B・Cが豊富にふくまれており、肌の美容や老化防止などに良い。',
    name_zh: '烤鳗鱼',
    description_zh:
      '将洗净去内脏的鳗鱼用盐或者酱油汁、辣酱汁等煎烤，不仅口感诱人、入口窜香，而且具有丰富的维生素A、维生素B和维生素 C，是皮肤美容、防止老化的佳品。',
    name_zh2: '烤鳗魚',
    description_zh2:
      '烤鳗魚是將洗淨并去除內臟的鳗魚用食鹽或者醬油汁、辣椒醬汁等醬料調味並煎烤，能享受到多種滋味的養生補品。',
  },
  {
    id: 566,
    category: '구이 [Gui]',
    name: '장작구이통닭',
    pronounce: 'Jangjakguitongdak',
    description:
      '긴 꼬치에 여러 마리 닭을 통째로 꽂아 장작불에 돌아가면서 굽는 것이다. 직화로 구워 불 맛이 나고, 기름이 빠져 맛이 담백하다.',
    name_en: 'Wood-grilled Chicken',
    description_en:
      'Several whole chickens skewered on a long stick and wood-grilled while the skewer is rotated. Cooking the chicken over a fire makes the meat lean and juicy, as it allows all the fat to drain off.',
    name_ja: '丸鶏の薪焼き',
    description_ja:
      '長い串に鶏肉をまるごと数羽さし、まわしながら薪火で焼いたもの。直火で焼くため、余計な油が落ちて、直火焼きの風味とさっぱりとした味わいになる。',
    name_zh: '柴烤全鸡',
    description_zh:
      '用一条长长的铁杆将几只全鸡串起来，放在以木头为柴的火上烤熟即可。因直接用火烤制，所以烤出的鸡肉烤香浓郁，味道清淡不油腻，十分美味。',
    name_zh2: '柴烤全雞',
    description_zh2:
      '用長長的串把多隻整雞串在一起，用柴火邊轉邊烤。因為直接用火烤製，所以滋味豐富，也不油膩。',
  },
  {
    id: 567,
    category: '구이 [Gui]',
    name: '전복구이',
    pronounce: 'Jeonbokgui',
    description:
      '전복은 오돌오돌 씹히는 촉감이 일품인 고단백, 저지방 건강식품이다. 칼집을 낸 전복을 숯불에서 구워 껍질에 담고 기름장을 발라 먹으면 이만한 별미가 없다.',
    name_en: 'Grilled Abalone',
    description_en:
      'Characterized by its chewy texture, abalone is a healthy food that is also high in protein and low in calories.Before serving this dish, brush the scored,charcoal-grilled abalone with oil.',
    name_ja: 'アワビ焼き',
    description_ja:
      'アワビはコリコリとした食感が絶品の高たんぱく、低脂肪の健康食品。切れ目を入れたアワビを炭火で焼いて殻に盛り付け、ごま油と塩のたれにつけるだけでも十分おいしい。',
    name_zh: '烤鲍鱼',
    description_zh:
      '鲍鱼很筋道，肉质感软嫩香滑，是高 蛋白、低脂肪的健康营养食品。将鲍鱼打上刀 花后放在炭火上烤，待熟后取出鲍鱼肉装在 壳里，蘸着香油酱吃，味道堪称一绝。',
    name_zh2: '烤鮑魚',
    description_zh2:
      '鮑魚的口感非常勁道，是高蛋白、低脂肪的保健食品。弄出幾道刀印的鮑魚用炭火烤熟，然後放在鮑魚殼裡，吃的時候沾上油料會非常美味。',
  },
  {
    id: 568,
    category: '구이 [Gui]',
    name: '전어구이',
    pronounce: 'Jeoneogui',
    description:
      '전어에 칼집을 넣고 소금을 뿌려 석쇠에 구운 것이다. 가을이 제철인 생선으로, 가을 전어는 기름이 많아 더 고소하다.',
    name_en: 'Grilled Gizzard Shad',
    description_en:
      'Scored and salted gizzard shad cooked on a grill. Gizzard shads are best in fall, when they have a richer taste.',
    name_ja: 'コノシロ焼き',
    description_ja:
      'コノシロに塩をまぶし、焼き網で焼いたもの。秋が旬の魚で、脂がのって香りもいい。',
    name_zh: '烤斑鰶',
    description_zh: '斑鰶打上花刀，撒上盐，放在烤架上烤熟即可。秋天的斑鰶最为肥美，味道更加香嫩。',
    name_zh2: '烤斑鰶',
    description_zh2:
      '清理好的斑鰶上劃幾個刀口，撒上鹽用箅子烤熟。斑鰶是秋季盛產魚類，秋天的斑鰶油分多，所以吃起來更加美味。',
  },
  {
    id: 569,
    category: '구이 [Gui]',
    name: '조개구이',
    pronounce: 'Jogaegui',
    description:
      '소금물에 담가 해감을 뺀 각종 조개를 잘 씻어 껍질째 불에 구운 뒤 초고추장을 찍어 먹는다. 바닷물이 맑고 모래가 깨끗한 해안에서 자라는 알 굵은 조개가 맛있다.',
    name_en: 'Grilled Clams',
    description_en:
      'For this dish, clams are soaked in salt water to purge the sand from them and carefully cleaned before beinggrilled and served with a vinegar-basedgochujang. These large clams are harvested from a clean beach and are very tasty.',
    name_ja: '貝焼き',
    description_ja:
      '砂抜きした様々な貝をよく洗い、殻ごと直火で焼いてから酢コチュジャンにつけて食べる。澄んだ海水ときれいな海岸で育った大ぶりの貝はおいしい。',
    name_zh: '烤贝壳',
    description_zh:
      '各种贝壳用盐水浸泡使之吐净泥沙， 然后将清洗干净的贝壳放在火上烤熟，取出 里面的贝壳肉蘸酸辣酱吃。在海水清澈、沙 子干净的海岸生长的大贝壳味道最为鲜美。',
    name_zh2: '烤貝殼',
    description_zh2:
      '用鹽水吐好沙子的各種貝類清洗乾淨後帶殼烤熟，然後沾辣椒醬吃即可。在清淨海域打撈的大貝類味道會更好。',
  },
  {
    id: 570,
    category: '구이 [Gui]',
    name: '조기구이',
    pronounce: 'Jogigui',
    description:
      '비늘과 내장, 지느러미를 제거한 조기를 간하여 기름에 튀기듯 노릇하게 구운 요리이다. 식감이 부드러워 노인이나 아이들이 먹기에도 좋다.',
    name_en: 'Pan-fried Yellow Corvina',
    description_en:
      'Yellow corvina scaled, gutted, finned, salted, and then pan-fried to a golden brown color. Its tender texture makes it an ideal meal for seniors and children.',
    name_ja: '焼きイシモチ',
    description_ja:
      '鱗や内臓、ヒレを取り除いたイシモチに、下味を付けて油でこんがりと焼いたもの｡やわらかいため､お年寄りや子どもでも食べやすい｡',
    name_zh: '烤黄花鱼',
    description_zh:
      '将黄花鱼去除鱼鳞、内脏和鱼鳍，调味后像油炸一样煎烤至金黄色即可。口感柔嫩，适合老人和儿童食用。',
    name_zh2: '烤黃花魚',
    description_zh2:
      '黃花魚去除魚鱗、內臟和鰭，調味後像油炸一樣煎烤至金黃色即可。口感柔嫩，適合兒童和老人食用。',
  },
  {
    id: 571,
    category: '구이 [Gui]',
    name: '주꾸미삼겹살불고기',
    pronounce: 'Jukkumisamgyeopsalbulgogi',
    description:
      '주꾸미삼겹살불고기를 줄여 부르는 말이다. 매콤하고 달콤한 고추장 양념에 주꾸미와 삼겹살을 재운 후 채소와 함께 센 불에 볶아 먹는 음식이며 비슷한 음식으로 오삼불고기가 있다.',
    name_en: 'Webfoot Octopus and Pork Belly Bulgogi',
    description_en:
      'Jusam is an abbreviated word meaning "webfoot octopus and pork belly." This dish features webfoot octopus and pork belly marinated in a spicy and sweet gochujang (red chili paste) sauce and stir-fried with vegetables over a high heat. A similar dish is called "Osambulgogi," which features squid instead of webfoot octopus.',
    name_ja: 'イイダコとサムギョプサルのプルゴギ',
    description_ja:
      'イイダコとサムギョプサルを甘辛いコチュジャンベースのたれに漬けたものを、野菜と一緒に強火で炒めた料理。似た料理としてイカとサムギョプサルのプルゴギがある。',
    name_zh: '小章鱼炒五花肉',
    description_zh:
      '小章鱼炒五花肉韩语简称为“jusam”。用甜辣的辣椒酱调料腌制八爪鱼和五花肉后与蔬菜一起用大火翻炒。与之类似的料理还有鱿鱼炒五花肉。',
    name_zh2: '小章魚烤五花肉',
    description_zh2:
      '小烤五花是小章魚烤五花肉的縮寫。將小章魚和五花肉用甜辣味的辣椒醬醃製而成，然後和蔬菜一起大火翻炒。類似的料理有魷魚烤五花肉。',
  },
  {
    id: 572,
    category: '구이 [Gui]',
    name: '차돌박이구이',
    pronounce: 'Chadolbagigui',
    description:
      '소고기의 양지 중 차돌박이 부위를 얇게 잘라 구운 음식이다. 고기를 뜨거운 불에 올렸다가 타지 않도록 바로 뒤집어 붉은 기가 가시면 먹는다. 기름장에 찍어 먹어도 좋고, 쌈 채소로 쌈을 싸먹거나, 계절채소로 무친 겉절이와 함께 먹어도 맛있다.',
    name_en: 'Grilled Beef Brisket',
    description_en:
      'For this dish, lightly grill thinly sliced beef brisket on both sides on a preheated grill to avoid burning and eat as soon as the meat turns brown. It can be served with a dipping oil or leafy wraps and goes well with fresh kimchi made with seasonal vegetables.',
    name_ja: '牛のともばら肉焼き',
    description_ja:
      '薄切りにした牛のともばら肉を焼いたもの。肉は焦げないようにすぐに返して赤い部分に火が通ったら食べる。ごま油と塩のたれにつけて食べたり、野菜で包んで食べたり、季節野菜の浅漬けと一緒に食べるのもおすすめ。',
    name_zh: '烤牛胸肉',
    description_zh:
      '将牛胸肉切成薄片烤熟即可。烤牛胸肉不宜过老，颜色一变就要立刻翻动，只要烤至红色不见即可食用。可用香油加盐的香油酱蘸着吃，也可用蔬菜包着吃，配上用时令蔬菜做的生拌菜一起吃味道更加美味。',
    name_zh2: '烤牛胸肉',
    description_zh2:
      '把牛胸肉切成薄片烤製。把肉放在火上烤一下，然後馬上翻開，紅色消失即可食用。可以沾油醬吃，也可以用蔬菜包著吃。配著吃用應季蔬菜做的辛奇會更美味。',
  },
  {
    id: 573,
    category: '구이 [Gui]',
    name: '코다리구이',
    pronounce: 'Kodarigui',
    description:
      '팬에 코다리를 살짝 구운 후 고추장, 고춧가루, 마늘, 간장, 설탕 등을 넣어 만든 양념장을 코다리 위에 골고루 발라 다시 한 번 타지 않게 구워 송송 썬 실파를 얹어 낸다.',
    name_en: 'Grilled Half-dried Pollack',
    description_en:
      'Half-dried pollack lightly pan-fried and brushed with a mixture of gochujang (red chili paste), red chili powder, chopped garlic, soy sauce, and sugar before grilling. Well-grilled half-dried pollack is garnished with chopped thread scallions.',
    name_ja: '半干しスケトウダラ焼き',
    description_ja:
      'フライパンで半干ししたスケトウダラをさっと焼き、コチュジャン、粉唐辛子、にんにく、カンジャン、砂糖などのたれをスケトウダラの上にまんべんなくぬる。それを再び焦げないように気を付けながら焼き、最後に刻んだわけぎを盛り付けて食べる。',
    name_zh: '烤半干明太鱼',
    description_zh:
      '半干明太鱼放入平底锅中煎至微熟，将辣椒酱、辣椒粉、蒜、酱油、白糖等调料做成的调味酱均匀地涂抹后，继续文火油煎，最后撒上葱末即可。',
    name_zh2: '烤半乾明太魚',
    description_zh2:
      '用煎鍋稍微煎一下半幹明太魚，然後把用辣椒醬、辣椒粉、蒜蓉、醬油、白糖等調料做成的調味醬均勻塗抹在明太魚上，並再煎片刻，調料容易焦糊，要格外留意，最後把蔥花撒在上面即可。',
  },
  {
    id: 574,
    category: '구이 [Gui]',
    name: '황태구이',
    pronounce: 'Hwangtaegui',
    description:
      '황태는 명태를 겨울바람에 말린 것으로, 반으로 갈라 등뼈와 가시를 발라내고 적당히 토막 낸 다음 고추장 양념장을 발라 구운 음식이다.',
    name_en: 'Grilled Dried Pollack',
    description_en:
      'Winter air-driedpollack (hwangtae) filleted, deboned, and brushed with a gochujang and grilled.',
    name_ja: 'スケトウダラ焼き',
    description_ja:
      '冬に干したスケトウダラの身を開いて骨を取り除きぶつ切りにしたものにコチュジャンベースの薬味を塗って焼いた料理。',
    name_zh: '烤干明太鱼',
    description_zh:
      '将在冬日寒风下晾晒的干明太 鱼从中间剖开，剔除鱼骨并切成段，裹上辣椒 酱后烤熟即可。',
    name_zh2: '烤乾明太魚',
    description_zh2: '將在寒風下晾曬的乾明太魚剁成塊狀，塗抹辣椒醬汁後烤熟。',
  },
  {
    id: 575,
    category: '구이 [Gui]',
    name: '훈제삼겹살',
    pronounce: 'Hunjesamgyeopsal',
    description:
      '돼지고기 삼겹살에 연기를 쐬어 훈연한 음식이다. 훈연하여 고기의 누린내를 제거한다. 특유의 훈제향과 함께 기름기 빠진 담백한 식감을 즐길 수 있다.',
    name_en: 'Smoked Pork Belly',
    description_en:
      'A dish of smoked pork belly. Smoking the meat removes the meat smell. The dish has the unique flavor of smoked and lean meat, with the fat drained off.',
    name_ja: '燻製サムギョプサル',
    description_ja:
      'サムギョプサルを燻製して焼いたもので、臭みがないのが特徴。燻製特有の香りとあっさりとした脂の旨味を楽しむことができる。',
    name_zh: '烟熏五花肉',
    description_zh:
      '将五花肉烟熏制而成的料理。以烟熏的方式消除猪肉的腥味。可以体验到熏制醇香和清淡不油腻的口感。',
    name_zh2: '煙燻五花肉',
    description_zh2:
      '將豬五花肉以煙燻製而成。以煙燻方式消除豬肉的腥味，可以享受到煙燻香和不油膩的清淡味道。',
  },
  {
    id: 576,
    category: '구이 [Gui]',
    name: '훈제오리',
    pronounce: 'Hunjeori',
    description:
      '오리를 참나무 장작불에 훈제하여 구운 음식이다. 머스터드소스와 생채소를 곁들여 먹어도 맛이 좋다.',
    name_en: 'Smoked Duck',
    description_en: 'Oak-smoked duck served with a mustard sauce and fresh vegetables.',
    name_ja: '鴨の燻製',
    description_ja:
      '鴨肉をナラの薪火で燻製にして焼いたもの。マスタードソースと生野菜を添えて食べるのがおすすめ。',
    name_zh: '烟熏鸭肉',
    description_zh:
      '鸭肉放在以柞树为柴的火上熏制后烤着吃即可。可用芥末黄酱蘸着吃，也可配生蔬菜一起吃。',
    name_zh2: '煙熏鴨肉',
    description_zh2: '把鴨肉用柞木柴火薰製。跟芥末沙司和新鮮蔬菜配著吃非常美味。',
  },
  {
    id: 577,
    category: '구이 [Gui]',
    name: 'LA갈비',
    pronounce: 'La Galbi',
    description:
      'LA갈비는 통 갈비 대를 뼈와 직각 방향으로 잘라서 중간 중간에 조금한 갈비뼈가 붙어있는 형태를 말한다. 주로 구이나 찜으로 이용한다.',
    name_en: 'Marinated Grilled Ribs',
    description_en:
      'LA Beef Ribs are beef ribs with diagonally cut bones that protrude along the long edge. They are used mostly for grilled and braised dishes.',
    name_ja: 'LAカルビ',
    description_ja:
      'LAカルビは、骨付きカルビのかたまりを骨ごと垂直に切り出したカルビのことをいう。主に焼いたり蒸したりして食べる。',
    name_zh: 'LA排骨',
    description_zh:
      'LA排骨是将整条排骨切成与骨头呈直角方向，形成连骨带肉的T骨牛排，主要可做烧烤或炖排骨。',
    name_zh2: 'LA排骨',
    description_zh2: 'LA排骨是橫切排骨，從而使肉裡嵌著幾個排骨骨頭。主要烤著吃或者做蒸排骨。',
  },
  {
    id: 578,
    category: '장 [Jang]',
    name: '간장',
    pronounce: 'Ganjang',
    description:
      '콩을 삶아 만든 메주를 발효시켜 소금물에 담가 우려낸 뒤 그 국물을 달여서 만든 액체 상태의 장이다. 음식의 간을 맞추는 양념으로 짠맛이 나며 특유의 향을 지니고 있다.',
    name_en: 'Soy Sauce',
    description_en:
      'Bricks of boiled and fermented soybean (meju) cured in brine yields a dark liquid. This liquid is brewed to make ganjang (soy sauce). Ganjang is a salty seasoning with a unique flavor.',
    name_ja: 'カンジャン',
    description_ja:
      '蒸した豆で作った麹を発酵させて塩水に漬け、分離した液体を沸かしたもの。あらゆる料理の味付けに使われ、塩辛く独特の風味がある。',
    name_zh: '酱油',
    description_zh:
      '把酱曲泡在盐水中，之后将盐水滤出熬煮，就成为液体状酱油。酱油用来调味，并拥有特殊的酱香。',
    name_zh2: '醬油',
    description_zh2:
      '煮豆製成醬曲並發酵後，放入鹽水中浸泡而成的就是傳統醬油。製作料理時作為基本調料使用。',
  },
  {
    id: 579,
    category: '장 [Jang]',
    name: '감식초',
    pronounce: 'Gamsikcho',
    description:
      '감을 숙성시켜 만든 식초이다. 각종 무침이나 소스를 만들 때 넣기도 하고 물이나 우유에 타 마시기도 한다.',
    name_en: 'Persimmon Vinegar',
    description_en:
      'Vinegar made by fermenting persimmons. It is used to make salads and sauces or drinks by adding it to water or milk and stirring.',
    name_ja: '柿酢',
    description_ja:
      '柿を熟成させて作った酢。和え物やソースを作るときに使ったり、水や牛乳に加えて飲んだりもする。',
    name_zh: '柿子醋',
    description_zh:
      '由柿子发酵而成的醋。一般在做各种凉拌菜或酱汁时作为调味料添加，有时也会加入水或牛奶一起喝。',
    name_zh2: '柿子醋',
    description_zh2:
      '柿子發酵而成的食醋。一般在做各種涼拌菜或醬汁時作為調味料添加，也可以加入水或牛奶一起喝。',
  },
  {
    id: 580,
    category: '장 [Jang]',
    name: '고추장',
    pronounce: 'Gochujang',
    description:
      '고춧가루를 주재료로 하여 찹쌀 풀과 메줏가루, 소금 등을 섞어 항아리에서 발효시킨 전통 양념 중 하나. 붉은 빛깔을 띠며 매운 맛을 낸다.',
    name_en: 'Red Chili Paste',
    description_en:
      'A traditional condiment made of red chili powder, glutinous rice, powdered meju (a brick of dried and fermented boiled soybean), and salt and fermented in earthenware jars. It is bright red in color and very spicy.',
    name_ja: 'コチュジャン',
    description_ja:
      '主材料の粉唐辛子にもち米麹や豆麹粉、塩などを混ぜて瓶で発酵させた、伝統的な調味料のひとつ。鮮やかな赤色を帯びており、とても辛い。',
    name_zh: '辣椒酱',
    description_zh:
      '以辣椒粉为主材料，与糯米粉、酱曲粉、食盐等放入坛中进行发酵而成，是传统调味料之一，色泽偏红，呈辣味。',
    name_zh2: '辣椒醬',
    description_zh2:
      '辣椒醬是在辣椒粉中拌入糯米漿糊、醬曲粉、食鹽等發酵的傳統調味料，呈紅色、辣味和鹹味。',
  },
  {
    id: 581,
    category: '장 [Jang]',
    name: '깻묵장',
    pronounce: 'Kkaenmukjang',
    description:
      '메주와 깻묵으로 담근 장이다. 일반 간장보다 색이 짙고 고소하며 단맛이 난다. 담근 지 10일이 지나면 먹을 수 있는 속성 장이다. 전라남도의 향토 음식이다.',
    name_en: 'Sauce Made from Sesame Dregs and Boiled and Fermented Soybeans',
    description_en:
      'Sauce made from meju (bricks of boiled and fermented soybeans) and sesame dregs. It is darker, sweeter, and more savory than regular soy sauce. It is fully fermented and can only be eaten after ten days. It is a local delicacy of South Jeolla Province.',
    name_ja: '油粕醤',
    description_ja:
      'みそ玉麹と油粕で漬けた醤。一般的な醤油よりも色が濃く、香ばしくて甘みがある。漬けてから10日後に食べられるのが特徴で、全羅南道の郷土料理。',
    name_zh: '油渣酱',
    description_zh:
      '用酱曲和油粕酿造的酱。与一般的酱油相比，颜色更深，味道香醇。只要发酵10天即可食用。是全罗南道的当地美食。',
    name_zh2: '油渣醬',
    description_zh2:
      '用豆醬餅和 油渣釀造的醬。顏色比一般的醬油更深，味道香甜。只需發酵10天就可食用，是全羅南道的鄉土飲食。',
  },
  {
    id: 582,
    category: '장 [Jang]',
    name: '담북장',
    pronounce: 'Dambukjang',
    description:
      '삶은 콩을 더운 방에 띄워 반쯤 찧다가 소금과 고춧가루를 넣어 만드는 장이다. 주로 소고기나 무를 넣고 찌개를 끓여 먹는다. 이른 봄철에 만들어 먹는 전통 장이다.',
    name_en: 'Quick-fermented Soybean Paste',
    description_en:
      'Paste made by fermenting boiled soybeans in a warm room and then roughly pounding them with salt and red chili powder. It is usually used to make stew with beef or radish. It is a traditional sauce made and eaten in early spring.',
    name_ja: '淡北醤',
    description_ja:
      '高温の部屋で発酵させたゆでた大豆に、塩と粉唐辛子を加えて作った醤。主に牛肉や大根入りのチゲを作るときに使う。春先に作って食べる伝統的な醤。',
    name_zh: '淡水酱',
    description_zh:
      '将煮熟的大豆放在炎热的房间中发酵，捣至半碎后放入盐和辣椒粉即可。主要在做炖菜时与牛肉或萝卜一起放入料理中。是早春时制作的传统酱。',
    name_zh2: '淡水醬',
    description_zh2:
      '將煮熟的大豆放在高溫的室內發酵，搗至半碎後放入鹽和辣椒粉製成。主要在煮鍋物時與牛肉或蘿蔔一起放入，是早春季節做來食用的傳統醬。',
  },
  {
    id: 583,
    category: '장 [Jang]',
    name: '된장',
    pronounce: 'Doenjang',
    description:
      '콩을 삶아 만든 메주를 발효시켜 장을 담가 장물을 떠내고 남은 건더기를 숙성시킨 장이다. 구수하고 짭짤한 맛으로 국, 찌개, 쌈장 등을 만들 때 쓴다.',
    name_en: 'Soybean Paste',
    description_en:
      'After fermenting mejuin brine to make soy sauce, the meju is removed from the soy sauce and fermented to make doenjang (soybean paste). It is a salty condiment with a nutty taste used for seasoning soups and stews and to make ssamjang (red soybean paste dip).',
    name_ja: 'テンジャン',
    description_ja:
      '蒸した豆で作った麹を発酵させて塩水に漬け、分離した固体を熟成させたもの。塩の利いた香ばしい味が特徴で、スープやチゲ、合わせ味噌などに使われる。',
    name_zh: '大酱',
    description_zh:
      '把大豆煮熟做成酱曲，然后将发酵的酱曲泡在盐水中一定时间，再将盐水舀出来，剩下的酱曲进行发酵即成为大酱。大酱味道咸香，用来做清汤，炖汤，包菜酱等。',
    name_zh2: '大醬',
    description_zh2:
      '將煮豆發酵的醬曲浸泡於鹽水中，經過40天左右撈出醬曲搗碎，就能製成大醬。這時發酵出的黑色液體就是傳統醬油。大醬可用於清湯、醬湯、調味醬等。',
  },
  {
    id: 584,
    category: '장 [Jang]',
    name: '막장',
    pronounce: 'Makjang',
    description:
      '메줏가루에 미지근한 물을 부어서 불어나면 소금과 고추씨 가루나 고춧가루를 약간 넣고 버무려서 항아리에 담아 열흘 정도 지나면 바로 먹을 수 있다. 경상도와 강원도에서 많이 담근다.',
    name_en: 'Fermented Soybean Paste with Red Chili Powder',
    description_en:
      'Dried and fermented soybeans powdered and soaked in water, which is then mixed with salt and a small amount of powdered red chili pepper seed or red chili powder and fermented in an earthen pot. Makjang is eaten widely in the Gyeongsang and Gangwon provinces.',
    name_ja: 'マクチャン',
    description_ja:
      '豆麹粉にぬるめのお湯を注ぎ、塩と唐辛子の種の粉や粉唐辛子粉を少量加えて混ぜる。それを壺に入れ、十日ほど置いてから食べる。慶尚道と江原道でよく漬けられている。',
    name_zh: '剁椒豆酱',
    description_zh:
      '酱曲面里放入温水待其泡发，加入适量食盐、辣椒籽粉或辣椒粉拌匀，放入缸里熟成十天左右即可食用，是庆尚道与江原道地区的特色酱。',
    name_zh2: '剁椒豆醬',
    description_zh2:
      '醬曲面中加入溫水，待面發後，加入適量的鹽和辣椒籽粉或辣椒粉攪拌均勻，裝入壇子裡發酵十天左右即可食用，是慶尚道和江原道地區常見的醬類。',
  },
  {
    id: 585,
    category: '장 [Jang]',
    name: '볶음고추장',
    pronounce: 'Bokkeumgochujang',
    description:
      '고추장에 다진 쇠고기 볶음과 꿀이나 설탕, 잣 등을 넣어 볶은 음식이다. 꿀이 들어가 약고추장이라고도 하는데, 흰밥에 반찬으로 올려 먹기도 하고, 비빔밥에 양념장으로 올리기도 한다.',
    name_en: 'Stir-fried Red Chili Paste',
    description_en:
      'Minced beef stir-fried with gochujang (red chili paste), honey or sugar, and chopped pine nuts in a pot. Gochujang with honey is referred to as “medicinal gochujang,” and is served with white rice as a side dish or as a sauce with bibimbap.',
    name_ja: '炒めコチュジャン',
    description_ja:
      'コチュジャンに細切りにした牛肉炒めと蜂蜜や砂糖、松の実などを加えて炒めた料理。蜂蜜が入るため、薬コチュジャンとも呼ばれる。白米の上にのせて食べたり、ビビンバのたれとしても使われる。',
    name_zh: '炒辣椒酱',
    description_zh:
      '将辣椒酱和炒牛肉末、蜂蜜或白糖、松仁等材料一起翻炒即可。由于材料中含有蜂蜜，因此也成为“药辣椒酱”，可以配白饭吃，也可以作为拌饭的调味酱。',
    name_zh2: '炒辣椒醬',
    description_zh2:
      '在辣椒醬中放入炒牛肉末，再加入蜂蜜、白糖、松子翻炒即可。由於材料中包含蜂蜜，所以也稱為「藥辣椒醬」，它既可以作為小菜蓋到白米飯上食用，也可以作為拌飯中的調味醬。',
  },
  {
    id: 586,
    category: '장 [Jang]',
    name: '쌈장',
    pronounce: 'Ssamjang',
    description:
      '쌈을 싸 먹을 때 쓰는 장을 말한다. 된장에 고추장을 섞고 다진 마늘, 파, 깨, 참기름 등을 넣고 섞어서 만드는데, 기호에 따라 견과류를 넣기도 한다.',
    name_en: 'Red Chili and Soybean Paste',
    description_en:
      'A sauce served with leafy wrap dishes that is made by mixing doenjang (soybean paste) with gochujang (red chili paste) along with chopped garlic and green onion, sesame seeds, and sesame oil. Crushed nuts may be added according to one’s preference.',
    name_ja: 'サムジャン',
    description_ja:
      '葉野菜などに包んで食べる際に使われるジャン。テンジャンにコチュジャンを混ぜ、みじん切りしたにんにく、ねぎ、ゴマ、ごま油などを加えて作る。好みによりナッツ類を混ぜる場合もある。',
    name_zh: '包饭酱',
    description_zh:
      '指包饭时使用的酱料，用大酱和辣椒酱调和，加入蒜末、葱末、芝麻、香油等调料搅拌均匀即可，根据喜好也可放入一些坚果。',
    name_zh2: '包飯醬',
    description_zh2:
      '這是用作包飯佐料的調味醬。大醬裡加入辣椒醬、蒜末、大蔥、芝麻、香油等攪勻，可根據喜好放入一些堅果。',
  },
  {
    id: 587,
    category: '장 [Jang]',
    name: '양념간장',
    pronounce: 'Yangnyeomganjang',
    description:
      '맛을 돋우기 위해 파, 다진 마늘, 통깨, 매실청, 참기름 등 갖은 양념을 한 간장이다. 곤드레밥이나 콩나물밥에 비벼 먹기도 하고 두부 부침, 김 등 다양한 음식에 곁들이기도 한다.',
    name_en: 'Spicy Soy Sauce',
    description_en:
      'Soy sauce mixed with a variety of ingredients, such as green onion, crushed garlic, sesame seeds, Japanese apricot extract, and sesame oil, to improve flavor. The sauce is used to flavor rice with bean sprouts or thistle and other dishes, such as pan-fried bean curd and roasted seaweed.',
    name_ja: '醤油だれ',
    description_ja:
      'ねぎ、にんにくのみじん切り、ごま、梅エキス、ごま油などで味付けした醤油で、風味を引き立てたいときに使う。コンドゥレナムルご飯や豆もやしご飯に入れて混ぜたり、豆腐のチヂミや海苔などのさまざまな料理に添えて食べる。',
    name_zh: '调味酱油',
    description_zh:
      '为了提味，放入葱、蒜末、芝麻、梅子酱、香油等各种调料的酱油。可以用来拌山蓟菜饭或豆芽饭，也可以搭配香煎豆腐、紫菜等多种食物。',
    name_zh2: '調味醬油',
    description_zh2:
      '放入蔥、蒜末、芝麻、青梅、香油等各種調味料的醬油。可以用來拌山薊菜飯或豆芽飯，也可以搭配香煎豆腐、海苔等多種食物。',
  },
  {
    id: 588,
    category: '장 [Jang]',
    name: '어간장',
    pronounce: 'Eoganjang',
    description:
      '물고기의 단백질을 가수 분해 효소 또는 산이나 알칼리로 분해하여 만든 간장이다. 간장, 액젓, 조미료 대신 사용하며, 김치, 나물무침, 찌개, 국 등에 넣어 깊은 맛을 낸다.',
    name_en: 'Fish Soy Sauce',
    description_en:
      'Soy sauce made by decomposing fish protein, using protease enzymes, acid, or alkali. It can be a substitute for regular soy sauce, salted seafood juice, and other condiments and can add savory depth to foods like kimchi, parboiled vegetables, stew, and soup.',
    name_ja: '魚醤',
    description_ja:
      '魚のたんぱく質を加水分解酵素や酸、アルカリで分解して作ったもの。醤油、塩辛、調味料の代わりに使い、キムチ、ナムルの和え物、チゲ、スープなどに加えると、深みのある味になる。',
    name_zh: '鱼酱油',
    description_zh:
      '将鱼肉中的蛋白质用水解酶、酸或碱分解而成的酱油。可代替酱油、鱼露、调味料，放入辛奇、凉拌野菜、炖菜、汤等料理中，可提味增香。',
    name_zh2: '魚醬油',
    description_zh2:
      '用水解酶、酸或鹼分解魚肉中的蛋白質後製成的醬油。可代替醬油、魚露、調味料使用，放入辛奇、涼拌蔬菜、鍋物或湯品等料理中，可提味增香。',
  },
  {
    id: 589,
    category: '장 [Jang]',
    name: '집장',
    pronounce: 'Jipjang',
    description:
      '메주를 빻아서 고운 고춧가루 따위와 함께 찰밥에 버무려 장항아리에 담고 간장을 조금 넣어 뚜껑을 막아 만든다. 8~9일 두었다가 꺼내 먹는 장이다.',
    name_en: 'Seasoned Soybean Paste',
    description_en:
      'Bricks of boiled and fermented soybean (meju) pounded and mixed with fine red chili powder and cooked glutinous rice. A little soy sauce is added and it is then stored in an earthenware jar with the lid on for eight to nine days until it is ready to be eaten.',
    name_ja: 'チプ醤',
    description_ja:
      'つぶしたみそ玉麹と、粉唐辛子やもち米を混ぜて壺に入れる。最後に醤油を少し加えて蓋をし、8～9日ほどおくとコクのある醤になる。',
    name_zh: '发酵大酱',
    description_zh:
      '将搅碎的酱曲与细辣椒粉、糯米饭一起搅拌后放入酱缸中，再加入少许酱油，盖上盖子即可。发酵8~9天后取出食用。',
    name_zh2: '菜醬',
    description_zh2:
      '將攪碎的豆醬餅與細辣椒粉、糯米飯一起攪拌，裝入醬缸後加少許醬油，蓋上蓋子即可。發酵8～9天后取出食用。',
  },
  {
    id: 590,
    category: '장 [Jang]',
    name: '초간장',
    pronounce: 'Choganjang',
    description:
      '간장에 식초를 넣은 장이다. 새콤한 맛으로 입맛을 돌게 하며 부침개 같은 음식과 함께 곁들여 먹는 소스로 애용된다.',
    name_en: 'Vinegar Soy Sauce',
    description_en:
      'Soy sauce mixed with vinegar. This sour sauce stimulates the appetite and is often served with buchimgae (pancakes).',
    name_ja: 'チョガンジャン',
    description_ja:
      'カンジャンに酢を加えたジャン。酸味が食欲をそそる。チヂミのような料理のソースとして好まれる。',
    name_zh: '酱油醋',
    description_zh: '酱油中加入醋调制的酱料，味道酸酸甜甜，增强人的食欲，还可蘸煎饼等食物吃。',
    name_zh2: '醬油醋',
    description_zh2: '這是在醬油中加入醋調製的醬料。口感酸甜，可以做煎餅蘸料。',
  },
  {
    id: 591,
    category: '장 [Jang]',
    name: '초고추장',
    pronounce: 'Chogochujang',
    description:
      '고추장에 식초, 마늘, 설탕 등 여러 재료를 섞어 만든 새콤달콤한 양념장이다. 주로 회를 먹을 때 사용하지만, 국수와 무침 등을 만들 때 소스로도 사용한다.',
    name_en: 'Sweet and Sour Red Chili Paste',
    description_en:
      'Gochujang (red chili paste) mixed with vinegar, chopped garlic, sugar, and other seasonings. This spicy yet sweet and sour sauce is usually served with sliced raw fish, but it is also used in spicy noodle dishes and vegetable salads.',
    name_ja: 'チョゴチュジャン',
    description_ja:
      'コチュジャンに酢、にんにく、砂糖など様々な材料を混ぜて作った甘酸っぱい合わせ調味料。主に刺身を食べる際に添えて出される。素麺や和え物などのソースとしても使われる。',
    name_zh: '糖醋辣酱',
    description_zh:
      '辣椒酱中加入醋、蒜、白糖等各种调料做成的调味酱，味道酸酸甜甜，十分爽口。除了蘸生鱼片吃以外，制作拌面或凉拌菜时也经常使用。',
    name_zh2: '糖醋辣醬',
    description_zh2:
      '辣椒醬裡放入醋、大蒜、白糖等各種調料製成的酸甜調味醬，主要用作生魚片蘸料，也可以在吃麵條或做涼拌菜時使用。',
  },
  {
    id: 592,
    category: '장아찌 [Jangajji]',
    name: '가죽장아찌',
    pronounce: 'Gajukjangajji',
    description:
      '참죽의 새순을 ‘가죽’이라고 한다. 이른 봄에 따서 물에 소금을 약간 넣어 데쳐 말린 가죽잎에 간장, 물엿, 고추장, 고춧가루를 섞은 양념장을 켜켜로 항아리에 담아 숙성시킨 장아찌다. 독특한 향이 있으며 산중 스님들이 즐겨 먹었다.',
    name_en: 'Pickled Red Toon Shoot',
    description_en:
      'Gajuk (young leaves of Chinese mahogany) parboiled in lightly salted water, dried, and layered alternately with a mixture of soy sauce, syrup, gochujang (red chili paste), and red chili powder in an earthen pot for fermentation. Gajuk is a vegetable with a distinctive fragrance that used to be eaten by Buddhist monks who lived in the mountains.',
    name_ja: 'チャンチンの若芽の漬物',
    description_ja:
      '春先に摘んだチャンチンの葉を塩茹でして干したものを重ね、カンジャン、水あめ、コチュジャン、粉唐辛子などを混ぜた薬味を挟んで壷で熟成させた漬物。独特の香りがあり、山で修行に励む僧侶などによく食べられた。',
    name_zh: '椿芽酱菜',
    description_zh:
      '取早春的椿芽，放入加了些微盐的开水中焯一下，捞出沥干水分，用酱油、糖稀、辣椒酱、辣椒粉做成调味酱后，将椿芽和调味酱一层一层叠放入坛子里发酵即可。椿芽有一股独特的清香，是山中寺庙僧人常吃的一道斋菜。',
    name_zh2: '椿芽醬菜',
    description_zh2:
      '初春采些香椿用鹽水稍微焯一下，然後曬乾。 將曬乾的香椿跟醬油、糖稀、辣椒醬、辣椒粉一起層層放入缸裡醃製。 這樣做出來的香椿醬菜帶有一種特別的清香，是山裡僧人們愛吃的美食。',
  },
  {
    id: 593,
    category: '장아찌 [Jangajji]',
    name: '간장게장',
    pronounce: 'Ganjanggejang',
    description:
      '살아 있는 싱싱한 게에 끓인 양념간장을 식혀 붓기를 여러 번 반복한 다음 저장해두고 먹는 음식이다. 알을 배고 있는 암케로 담가야 제 맛이다.',
    name_en: 'Soy Sauce Marinated Crab',
    description_en:
      'Fresh, live crabs pickled in a brine of soy sauce, ginger, and garlic. The brine is strained, boiled, and poured over the crabs several times. The best tasting Ganjanggejang is made withegg-bearing female crabs filled with roe.',
    name_ja: 'カンジャンケジャン',
    description_ja:
      '生きた新鮮なカニに煮立てた醤油だれをかけて漬け、これを何度か繰り返してから保管したもの。卵を持つカニで漬けるといっそう美味しい。',
    name_zh: '酱生蟹',
    description_zh:
      '把酱油煮沸冷却以后浇在鲜活螃蟹上，如此反复进行多次以后进行储藏即成为酱蟹。制作酱蟹时最好使用蟹黄饱满的母蟹。',
    name_zh2: '醬生蟹',
    description_zh2:
      '鮮活的螃蟹加入生薑、大蒜、整條辣椒後倒入醬油，醬油味完全滲入就可以食用。適合與熱呼呼的米飯一起拌著吃。',
  },
  {
    id: 594,
    category: '장아찌 [Jangajji]',
    name: '고추장아찌',
    pronounce: 'Gochujangajji',
    description:
      '꼭지를 일부 남겨놓은 풋고추를 깨끗이 씻어 소금물에 삭힌 뒤 간장을 부어 숙성시킨다. 고추장이나 된장에 박아 6개월 정도 숙성시켜 먹거나 양념을 해서 먹기도 한다.',
    name_en: 'Pickled Chili Peppers',
    description_en:
      'Here, green chili peppers are brined and soaked in soy sauce to undergo fermentation. The fermented green chili peppers are then stored in gochujang or doenjang sauce for roughly six months or simply seasoned and served.',
    name_ja: '唐辛子の漬物',
    description_ja:
      'へたを一部残した青唐辛子をきれいに洗い、塩水に浸けて発酵させてから醤油を注いで熟成させる。コチュジャンやテンジャンに漬け込んで6ヵ月ほど熟成させたり、味付けをして食べることもある。',
    name_zh: '辣椒酱菜',
    description_zh:
      '取留部分辣椒蒂的青椒，洗净后用 盐水腌制，然后倒入酱油等待发酵。也可插入 辣椒酱或大酱里发酵六个月左右，取出来直 接吃或调味后吃均可。',
    name_zh2: '辣椒醬菜',
    description_zh2:
      '取留部分辣椒蒂的青椒，清洗乾淨後用鹽水泡軟，然後倒入醬油繼續醃製。也可以插入辣椒醬或大醬裡醃製半年後再吃，或加點調料拌著吃也非常好吃。',
  },
  {
    id: 595,
    category: '장아찌 [Jangajji]',
    name: '김장아찌',
    pronounce: 'Gimjangajji',
    description:
      '멸치, 표고, 다시마를 넣고 끓인 육수에 진간장, 마른고추, 설탕, 물엿, 양파, 대파, 생강, 마늘을 넣고 달임 장을 만들어 조각 낸 김에 부어 숙성시킨다. 김은 미네랄과 비타민C가 많고, 밥반찬으로 좋다.',
    name_en: 'Pickled Laver',
    description_en:
      'Laver flakes soaked in broth made by boiling anchovies, shiitake mushroom, and kelp and seasoned with soy sauce, dried red chili pepper, sugar, syrup, onion, green onion, ginger, and garlic for fermentation. Laver is rich in minerals and vitamin C and goes well with rice.',
    name_ja: 'のりの漬物',
    description_ja:
      '煮干し、しいたけ、昆布でとった出汁に、長熟醤油、干し唐辛子、砂糖、水あめ、玉ねぎ、ねぎ、生姜、にんにくを加えて漬けだれを作り、そこにちぎったのりを入れて熟成させる。のりにはミネラルとビタミンCが豊富に含まれており、ご飯との相性は抜群。',
    name_zh: '紫菜酱菜',
    description_zh:
      '用鳀鱼、香菇、昆布熬出高汤，加入浓酱油、干辣椒、白糖、糖稀、洋葱、葱、姜、蒜等调料熬成酱汁后，倒入切成块状的紫菜上发酵即可。紫菜富含矿物质和维生素C，很适合配饭吃。',
    name_zh2: '紫菜醬菜',
    description_zh2:
      '用鳀魚、香菇、昆布熬出高湯，加入濃醬油、幹辣椒、白糖、糖稀、洋蔥、蔥、姜、蒜等調料熬成醬汁後，倒入切成塊狀的紫菜上發酵即可。紫菜富含礦物質和維生素C，很適合配飯吃。',
  },
  {
    id: 596,
    category: '장아찌 [Jangajji]',
    name: '깻잎지',
    pronounce: 'Kkaennipji',
    description:
      '깻잎에 간장 양념장을 뿌려 켜켜이 쌓는 것으로, 한 장씩 흰 쌀밥 위에 올려 싸 먹으면 향과 맛이 좋다.',
    name_en: 'Pickled Perilla Leaf',
    description_en:
      'Perilla leaves piled up in layers and drizzled with a soy sauce marinade across each layer. Eating a spoonful of warm cooked rice wrapped in a perilla leaf spreads the perilla leaf fragrance throughout the mouth.',
    name_ja: 'エゴマの葉の漬物',
    description_ja:
      'エゴマの葉一枚ずつにカンジャンベースのたれをぬり、重ねて層にして漬ける。一枚ずつご飯の上にのせて食べる。香りと味が絶品。',
    name_zh: '苏子叶酱菜',
    description_zh:
      '苏子叶浇上用酱油调制的调味酱后层层叠放即可。吃的时候，将苏子叶一张一张放在米饭上包着吃，香味和口感俱佳。',
    name_zh2: '蘇子葉醬菜',
    description_zh2:
      '在蘇子葉上撒上醬油等調料，然後將葉子一層層疊在一起即可。食用時用一片蘇子葉包上白米飯，香氣、味道令人回味。',
  },
  {
    id: 597,
    category: '장아찌 [Jangajji]',
    name: '노각장아찌',
    pronounce: 'Nogakjangajji',
    description:
      '노각은 늙은 오이를 말한다. 껍질 벗긴 노각을 소금에 살짝 절인 후 채반에 널어 1~2일간 햇볕에 말린 후 항아리에 술지개미와 노각을 켜켜이 담아 서늘한 곳에 둔다. 맛이 들면 꺼내어 물에 씻은 후 갖은 양념하거나 그냥 먹어도 좋다.',
    name_en: 'Pickled Yellow Cucumber',
    description_en:
      'Yellowish cucumbers peeled, lightly salted, sun-dried for one to two days, and alternately layered with suljigaemi (rice-wine filter cake) in an earthen pot kept in a cool place. Well-fermented cucumber is cleaned, sliced, and seasoned before serving. Or, it can be eaten without seasonings.',
    name_ja: '老いキュウリの漬物',
    description_ja:
      '老いキュウリは、熟しすぎて表面が黄色くなったキュウリのこと。皮をむいて、軽く塩漬けし、ざるで１～２日、日干しにする。その後、壷に酒粕と老いキュウリを層にして重ねて入れ、冷暗所で保管する。味が染みたら取り出して水ですすぎ、味をつけたりそのまま食べる。',
    name_zh: '老黄瓜酱菜',
    description_zh:
      '老黄瓜去皮，用盐稍微腌渍后，放在柳条盘上在阳光下晒一到两天，再将其和酒糟一层一层叠放入坛子里，放置在阴凉处即可。等到完全入味发酵后，取出来洗净，放入各种调料搅拌或直接食用即可。',
    name_zh2: '老黃瓜醬菜',
    description_zh2:
      '老黃瓜是指表面全部都變黃的很老的黃瓜。將老黃瓜剝皮、用鹽醃一會兒，然後放在柳條盤裡曬乾1~2天。在缸裡層層碼上酒粕與曬乾的老黃瓜，並放在陰涼處保存。等入味了拿出來用水沖洗後，加入各種調料拌著吃，或者直接吃也非常美味。',
  },
  {
    id: 598,
    category: '장아찌 [Jangajji]',
    name: '더덕장아찌',
    pronounce: 'Deodeokjangajji',
    description:
      '더덕을 고추장 항아리 속에 박아 두었다가 간이 배이면 꺼내 쭉쭉 갈라서 찢어 참기름, 깨소금, 설탕 등을 넣어 무친 장아찌이다. 향긋하고 짭조름한 맛이 나 밑반찬으로 만들어 놓으면 좋다.',
    name_en: 'Pickled Deodeok',
    description_en:
      'Peeled deodeok (bonnet bellflower root) aged in gochujang (red chili paste) in an earthen pot. Shredded and mixed with sesame oil, sesame seeds, and sugar, pickled deodeok is fragrant and a bit salty, making it a great side dish with rice.',
    name_ja: '蔓人参の漬物',
    description_ja:
      '蔓人参をコチュジャンの壷に入れて保存し、塩気がしみ込んだら取り出す。それをさいてごま油、ごま塩、砂糖などと和えた漬物。香りがよく、塩辛さがあるため、作り置きのおかずとしておすすめ。',
    name_zh: '沙参酱菜',
    description_zh:
      '将沙参埋入辣椒酱缸里，入味后取出来，撕成长条，加入香油、芝麻盐、白糖等调料搅拌即可。这种酱菜香味浓郁，咸甜适口，很适合作小菜。',
    name_zh2: '沙參醬菜',
    description_zh2:
      '將沙參埋在辣椒醬缸裡，等味道滲入以後再從醬缸中拿出，將沙參切片，拌入香油、芝麻鹽、白糖等調料即可。它的味道香濃、微咸，非常適合做小菜。',
  },
  {
    id: 599,
    category: '장아찌 [Jangajji]',
    name: '두릅장아찌',
    pronounce: 'Dureupjangajji',
    description:
      '이른 봄에 나는 두릅나무의 새순을 끓는 물에 데쳐 달인 간장에 담거나 고추장에 박아두었다가 먹는 장아찌로 숙성되면 꺼내 갖은 양념에 무쳐 먹는다.',
    name_en: 'Pickled Fastia Shoot',
    description_en:
      'Fatsia shoots parboiled and pickled in soy sauce or gochujang (red chili paste). Pickled fatsia shoot is mixed with various seasonings before serving.',
    name_ja: 'タラの芽の漬物',
    description_ja:
      '春先にとれるタラの木の芽を湯がき、煮詰めたカンジャンに漬けたり、コチュジャンに漬ける漬物。よく漬かったら取り出して、薬味をからめて食べる。',
    name_zh: '刺嫩芽酱菜',
    description_zh:
      '取早春的刺嫩芽，用开水焯一下，捞出沥干水分后，用酱油或辣椒酱浸泡，待完全入味发酵后取出来，加入各种调料拌着吃即可。',
    name_zh2: '刺嫩芽醬菜',
    description_zh2:
      '初春時節採集刺嫩芽用開水焯一下，然後放入熬好晾涼的醬油或辣椒醬裡醃製，熟成後用各種調料拌勻即可。',
  },
  {
    id: 600,
    category: '장아찌 [Jangajji]',
    name: '마늘장아찌',
    pronounce: 'Maneuljangajji',
    description:
      '장아찌는 채소를 소금이나 간장에 절여 숙성시킨 저장식품이다. 마늘장아찌는 통마늘을 식초, 설탕, 간장에 숙성시킨 것으로 햇마늘이 나오는 초여름에 담가 일 년 내내 먹는다.',
    name_en: 'Pickled Garlic',
    description_en:
      'Jangajji refers to all vegetables fermented in brine or soy sauce for the purpose of preservation. Pickled garlic, made by fermenting garlic bulbs in vinegar, sugar, or soy sauce, is usually produced in early summer, when garlic is harvested, and enjoyed all year round.',
    name_ja: 'にんにくの漬物',
    description_ja:
      '漬物は、野菜を塩やカンジャンに漬けて熟成させた保存食品。にんにくの漬物はにんにく丸ごとを、酢、砂糖、カンジャンで熟成させたもので、新にんにくが出回る初夏に漬け、一年中食べられる。',
    name_zh: '大蒜酱菜',
    description_zh:
      '酱菜是将蔬菜用盐或酱油腌渍后发酵的窖藏食品。大蒜酱菜是将整颗大蒜加入醋、白糖、酱油发酵而成，在每年夏天新大蒜出来时腌制，可以吃一整年。',
    name_zh2: '大蒜醬菜',
    description_zh2:
      '醬菜是指在用鹽或醬油醃製、發酵的儲存食品。醃制大蒜醬菜時，需要在整頭蒜裡加入醋、白糖、醬油等調料，並使之發酵，這種醬菜適合初夏醃製，因為當時新蒜剛剛上市，醃好以後可以整年食用。',
  },
  {
    id: 601,
    category: '장아찌 [Jangajji]',
    name: '마늘종장아찌',
    pronounce: 'Maneuljongjangajji',
    description:
      '마늘종을 소금에 살짝 절였다가 달인 간장을 부어 담근 장아찌이다. 5~6월 햇마늘이 나오기 시작하면 담그는데, 입맛 잃은 여름에 먹는 장아찌이다.',
    name_en: 'Pickled Garlic Stem',
    description_en:
      'Garlic stems lightly salted and preserved in decocted soy sauce. This food is typically made in May and June, when the garlic harvest begins, and enjoyed in summer as an appetite stimulant.',
    name_ja: 'にんにくの茎の漬物',
    description_ja:
      'にんにくの茎を軽く塩漬けし、煮詰めたカンジャンで漬けた漬物。5～6月の新にんにくが出始めた頃に漬け、食欲が落ちる夏によく食べる。',
    name_zh: '蒜薹酱菜',
    description_zh:
      '将蒜薹用盐腌渍一会儿，倒入熬煮过的酱油进行发酵即可。每年5-6月新蒜出来时腌制，在炎热酷暑没有胃口的时候吃最好。',
    name_zh2: '蒜薹醬菜',
    description_zh2:
      '將蒜薹用鹽稍微醃製一下，倒入煮過的醬油醃製即可。五六月份新蒜薹上市時便可以醃製，適合夏季胃口不佳時食用。',
  },
  {
    id: 602,
    category: '장아찌 [Jangajji]',
    name: '매실장아찌',
    pronounce: 'Maesiljangajji',
    description:
      '매실장아찌는 씨를 뺀 매실을 설탕과 켜켜이 쌓아 밀봉하여 숙성시킨 것이다. 새콤달콤한 맛이 나 입맛을 돋우는데 효과가 있고, 소화에도 좋다.',
    name_en: 'Pickled Green Plum',
    description_en:
      'Pitted Japanese apricots alternately layered with sugar and sealed in a container for fermentation. Their sweet and sour taste helps stimulate appetite and promotes digestion.',
    name_ja: '梅の漬物',
    description_ja:
      '梅の漬物は、種を取り除いた梅を砂糖と一緒に層にして密閉して熟成させたもの。甘酸っぱい味が食欲をそそる。消化にもいい。',
    name_zh: '青梅酱菜',
    description_zh:
      '将去了核的青梅和白糖一起放入坛子里密封后发酵即可。酸酸甜甜的味道十分开胃，而且还有助消化。',
    name_zh2: '青梅醬菜',
    description_zh2:
      '在醃製青梅醬菜時，首先需要去核，再一層層加入白糖，然後密封、發酵即可。它的味道酸甜爽口，有利於增進食欲，還又有助於消化。',
  },
  {
    id: 603,
    category: '장아찌 [Jangajji]',
    name: '명이나물장아찌',
    pronounce: 'Myeonginamuljangajji',
    description:
      '울릉도에서 많이 생산되는 산마늘을 명이나물이라고도 한다. 명이나물에 간장 달인 물을 부어 숙성시킨 장아찌이다. 고기구이를 먹을 때 명이나물장아찌로 싸서 먹으면, 깔끔한 맛을 즐길 수 있어 인기이다.',
    name_en: 'Pickled Victory Onion',
    description_en:
      'Known as sanmaneul or myeonginamul in Korean, victory onion is produced widely on Ulleungdo Island. Pickled victory onion is made by fermenting victory onion in decocted soy sauce and is commonly eaten in grilled meat wraps.',
    name_ja: '行者にんにくの葉の漬物',
    description_ja:
      '鬱陵島で多く生産されている行者にんにくの葉を、煮詰めたカンジャンで熟成させた漬物。焼肉を食べる際に、行者にんにくの葉の漬物で包んで食べるとさっぱりと食べられるため人気。',
    name_zh: '茖葱叶酱菜',
    description_zh:
      '茖葱是郁陵岛盛产的一种蔬菜。将茖葱叶和熬煮过的酱油及水一起放入坛子里发酵即可。吃烤肉时，用茖葱叶酱菜包着吃，味道清淡爽口，十分美味。',
    name_zh2: '茖蔥葉醬菜',
    description_zh2:
      '鬱陵島盛產茖蔥，在醃製茖蔥葉醬菜時，只需在茖蔥中倒入用水稀釋的醬油，並進行發酵即可。在食用烤肉等食物時，把茖蔥醬菜一同包起來食用，便可以享受到清爽的味道。',
  },
  {
    id: 604,
    category: '장아찌 [Jangajji]',
    name: '무말랭이장아찌',
    pronounce: 'Mumallaengijangajji',
    description:
      '채 썰어 말린 무말랭이와 말린 고춧잎을 물에 불려 물기를 꼭 짠 후 고춧가루, 멸치액젓, 물엿, 마늘, 참기름, 다진 파 등 갖은 양념을 넣고 골고루 버무려 숙성해 두었다가 밥반찬으로 먹는다. 꼬득꼬득 씹히는 맛이 일품이다.',
    name_en: 'Pickled Dried Radish',
    description_en:
      'Julienned radish and dried red pepper leaves soaked in water, drained, and marinated in red chili powder, salted anchovy juice, syrup, chopped garlic and green onion, and sesame oil. This is a popular side dish with rice. The chewy texture of the radish makes it fun to eat.',
    name_ja: '干し大根の漬物',
    description_ja:
      '大根を細切りして干したものと、干した唐辛子の葉を水で戻し、水気を切った後に粉唐辛子、カタクチイワシの魚醤、水あめ、にんにく、ごま油、みじん切りしたねぎなどのたれを加えて和えて熟成させたもの。ご飯との相性がいい。コリコリとした食感も絶品。',
    name_zh: '萝卜干酱菜',
    description_zh:
      '将切丝晒干的萝卜和辣椒叶用水泡好后挤干水分，加入辣椒粉、鳀鱼汁、糖稀、大蒜、香油、葱花等各种调料拌匀，待熟成后可当下饭菜。萝卜干酱菜嚼起来嘎嘣脆，是非常美味的酱菜。',
    name_zh2: '蘿蔔幹醬菜',
    description_zh2:
      '曬乾的蘿蔔條和乾辣椒葉用水泡發，擠乾水分後，加入辣椒粉、鳀魚汁、糖稀、蒜、香油、蔥花等各種調料攪拌均勻，放置發酵後即可食用。蘿蔔幹醬菜味道鮮辣、有嚼頭，是很適合配米飯的小菜。',
  },
  {
    id: 605,
    category: '장아찌 [Jangajji]',
    name: '무장아찌',
    pronounce: 'Mujangajji',
    description:
      '무장아찌는 소금에 절여 물기를 뺀 무를 고추장이나 간장에 넣어 숙성시킨 장아찌이다.',
    name_en: 'Pickled Radish',
    description_en:
      'Salted and drained radish placed in gochujang (red chili paste) or doenjang (soybean paste) for fermentation.',
    name_ja: '大根の漬物',
    description_ja:
      '大根の漬物は、塩漬けして水気を切った大根をコチュジャンやカンジャンと一緒に熟成させたもの。',
    name_zh: '萝卜酱菜',
    description_zh: '萝卜用盐腌渍，沥干水分后，放入辣椒酱或酱油里发酵即可。',
    name_zh2: '蘿蔔醬菜',
    description_zh2:
      '在醃製蘿蔔醬菜時，需要先在蘿蔔中放鹽醃製，並瀝幹水分，然後加入辣椒醬、醬油等進行發酵即可。',
  },
  {
    id: 606,
    category: '장아찌 [Jangajji]',
    name: '버섯장아찌',
    pronounce: 'Beoseotjangajji',
    description:
      '버섯으로 만든 장아찌이다. 버섯을 살짝 쪄 낸 후 간장소스에 담가 숙성시켜서 먹는다. 간장과 설탕, 식초, 물을 끓여 간장소스를 만든 뒤 버섯에 부어 하루 뒤 먹으면 새콤한 맛이 난다.',
    name_en: 'Pickled Mushrooms',
    description_en:
      'Mushrooms lightly steamed, pickled, and aged for one day in a sauce made by boiling a mixture of soy sauce, sugar, vinegar, and water. It has a sweet and sour flavor.',
    name_ja: 'きのこの醤油漬け',
    description_ja:
      'きのこで作った漬物で、さっと蒸したきのこを醤油ソースに漬けて熟成させて食べる。醤油や砂糖、酢、水を煮て醤油ソースを作る。それをきのこに注いで1日後に食べると、ほのかな酸味が効いて美味しい。',
    name_zh: '蘑菇酱菜',
    description_zh:
      '用蘑菇做的酱菜。将蘑菇稍微蒸熟后浸泡在酱油汁中发酵而成。用酱油、白糖、醋和水煮成酱油汁后，淋在蘑菇上，静置一天后食用，味道酸甜。',
    name_zh2: '蘑菇醬菜',
    description_zh2:
      '用蘑菇做的醬菜。將蘑菇稍微蒸過後浸泡在醬油汁中發酵而成。醬油汁用醬油、糖、醋和水煮成。放置一天后食用，味道酸甜。',
  },
  {
    id: 607,
    category: '장아찌 [Jangajji]',
    name: '새우장',
    pronounce: 'Saeujang',
    description:
      '제철 대하를 이용하면 좋다. 깨끗이 씻은 새우의 수염, 꼬리 등을 제거한 후 끓여서 식힌 간장 양념장을 붓고 2~3일 정도 숙성시킨 후 먹으면 밥도둑으로 손색이 없다.',
    name_en: 'Soy Sauce Marinated Shrimp',
    description_en:
      'This is raw shrimp that is marinated in boiled and chilled soy sauce for two to three days. To prepare the shrimp, their antennae and tails are removed.',
    name_ja: 'カンジャンセウ',
    description_ja:
      '旬の大正海老を使うと良い。きれいに洗った大正海老のひげや尾などを取り除き、煮立ててから冷ました醤油の薬味ソースを注ぎ、2、3日ほど熟成させてから食べる。',
    name_zh: '酱生虾',
    description_zh:
      '使用当季的鲜虾更好吃。鲜虾洗净，去除虾的须和尾，倒入烧开后防凉的酱油调味酱，发酵两到三天即可食用，尤其适合配米饭吃，十分开胃。',
    name_zh2: '醬生蝦',
    description_zh2:
      '最好用應季大蝦，清洗大蝦，清除鬚子和蝦尾後，倒入煮沸後晾涼的醬油調味料醃製2~3天。醬生蝦味道鮮美，是非常好吃的下飯菜。',
  },
  {
    id: 608,
    category: '장아찌 [Jangajji]',
    name: '양념게장',
    pronounce: 'Yangnyeomgejang',
    description:
      '양념게장은 신선한 게를 손질하여 고춧가루를 비롯한 갖은 양념으로 맛을 낸 매콤한 요리다. 두고 오랫동안 익혀서(발효시켜) 먹기보다는 양념하여 짧은 시간 내에 바로 먹는 것이 좋다.',
    name_en: 'Spicy Marinated Crab',
    description_en:
      'This spicy raw crab dish is prepared by mixing red chili powder and other seasonings with fresh raw crab. It is intended to be eaten soon after cooking, as it is not a fermented dish that can be preserved for a long time.',
    name_ja: '味付けケジャン',
    description_ja:
      '味付けケジャンは、新鮮なカニを粉唐辛子などいろいろな薬味で味付けしたスパイシーな料理。長時間発酵させて食べるより、薬味で味付けして早めに食べたほうがおいしい。',
    name_zh: '鲜辣生蟹',
    description_zh:
      '将处理好的新鲜花蟹用辣椒粉等各种调味料腌制，味道鲜辣可口。抹上调味料不要放置(发酵)太久，短时间内食用味道更 佳。',
    name_zh2: '鮮辣生蟹',
    description_zh2:
      '鮮辣生蟹是將新鮮花蟹剁成塊後，加入辣椒粉和蔥、大蒜等調料攪拌的辣味飲食。可以和米飯一起拌著吃。',
  },
  {
    id: 609,
    category: '장아찌 [Jangajji]',
    name: '양파장아찌',
    pronounce: 'Yangpajangajji',
    description:
      '양파를 새콤달콤하게 달인 간장에 담가 먹는 장아찌이다. 고기요리와 같이 먹으면 입맛을 개운하게 하고, 고지혈증과 동맥경화를 예방하는 효능까지 있어 음식 궁합이 좋다.',
    name_en: 'Pickled Onion',
    description_en:
      'Onions preserved in sweet and sour decocted soy sauce. They go well with meat dishes and help prevent hyperlipidemia and arteriosclerosis.',
    name_ja: '玉ねぎの漬物',
    description_ja:
      '甘酸っぱく煮詰めたカンジャンに玉ねぎを漬けたもの。さわやかな味が肉料理と合う。高脂血症と動脈硬化の予防効果もあり、相性がいい。',
    name_zh: '洋葱酱菜',
    description_zh:
      '将洋葱和熬煮过的酸甜味的酱油一起放入坛子里发酵即可。配烤肉吃味道十分清淡酸爽，还能预防高血脂和动脉硬化，是绝佳的食物搭配。',
    name_zh2: '洋蔥醬菜',
    description_zh2:
      '將洋蔥放入熬煮過的酸甜的醬油中進行醃製便成為洋蔥醬菜了。它與肉類一同食用，口味會更加清爽，同時還可以預防高血脂、動脈硬化等疾病，非常適合與肉類搭配食用。',
  },
  {
    id: 610,
    category: '장아찌 [Jangajji]',
    name: '오이지',
    pronounce: 'Oiji',
    description:
      '오이를 소금에 절여 숙성시켜 먹는 저장식품이다. 고춧가루 양념에 무치거나 냉수에 띄워서 시원하게 먹는 여름철 반찬이다.',
    name_en: 'Pickled Cucumber',
    description_en:
      'Cucumber preserved in brine. A popular side dish in summer, pickled cucumber is sliced and mixed with a red chili powder sauce or served in cold water.',
    name_ja: 'キュウリの漬物',
    description_ja:
      'キュウリを塩漬けし、熟成させた保存食。唐辛子ベースのたれで和えたり、冷水に浮かべて食べる夏の絶品。',
    name_zh: '腌黄瓜',
    description_zh:
      '将黄瓜用盐腌渍后发酵即可。可用辣椒粉调制的调味酱搅拌或泡入冷水中食用，是夏天常吃的一道小菜。',
    name_zh2: '醃黃瓜',
    description_zh2:
      '在黃瓜裡放上鹽、發酵後即可食用，是一種儲藏食品。食用時可用辣椒粉涼拌，或是在冷水中冰鎮，夏日食用非常清爽。',
  },
  {
    id: 611,
    category: '장아찌 [Jangajji]',
    name: '장아찌',
    pronounce: 'Jangajji',
    description:
      '무, 오이, 마늘, 마늘쫑, 깻잎 등의 채소를 소금이나 간장, 된장, 고추장에 절여 숙성시킨 음식이다. 오래 저장해두고 사시사철 먹는 반찬이다.',
    name_en: 'Pickled Vegetables',
    description_en:
      'Radish, cucumber, garlic, garlic stems, perilla leaves, and other vegetables pickled and aged in soy sauce, soy bean paste, or red chili paste. Preserved and enjoyed throughout the year.',
    name_ja: '漬物',
    description_ja:
      '大根やきゅうり、にんにく、にんにくの茎、ごまの葉などの野菜を、塩や醤油、テンジャン、コチュジャンに漬けて熟成させたもの。しっかり保存すれば一年中食べられる。',
    name_zh: '酱菜',
    description_zh:
      '把萝卜、黄瓜、蒜头、蒜苗、苏子叶等用 酱油、大酱、辣椒酱腌制发酵后即可食用，可 长期储藏，四季皆可享用。',
    name_zh2: '醬菜',
    description_zh2:
      '醬菜是將大蒜、黃瓜、蘿蔔等蔬菜用食鹽或醬油、大醬、辣椒醬醃漬發酵而成的傳統飲食。可長期儲藏，適合當小菜食用。',
  },
  {
    id: 612,
    category: '장아찌 [Jangajji]',
    name: '죽순장아찌',
    pronounce: 'Juksunjangajji',
    description:
      '죽순은 쌀뜨물을 넣고 삶아 껍질을 벗기고 깨끗이 씻어 물기를 제거한 다음 항아리에 담고 달임 장을 끓여 붓는다. 4~5일 지난 후 간장을 따라내어 다시 끓여 식혀서 붓는 과정을 3회 반복한다. 한 달 정도 지나면 꺼내 갖은 양념해 먹는다.',
    name_en: 'Pickled Bamboo Shoot',
    description_en:
      'Bamboo shoots boiled in rice water, peeled, washed, and drained. After the excess water is removed, the bamboo shoots are placed in an earthen pot and pickled in warm soy sauce that has been simmered. The soy sauce is drained after four to five days, simmered again, and poured back into the earthen pot. After this process is repeated three times, the bamboo shoots are ready to serve.',
    name_ja: '竹の子の漬物',
    description_ja:
      '竹の子は米のとぎ汁で茹で、皮をむいてきれいに洗う。水気を切ったら、壷に入れて煮詰めたたれを注ぐ。４～５日後、カンジャンを汲みだし、再び沸騰させ、冷まして注ぐ。この工程を３回繰り返す。およそ１か月後に取り出して味をつけて食べる。',
    name_zh: '竹笋酱菜',
    description_zh:
      '竹笋用淘米水中煮熟，去皮洗净沥干水分，将竹笋和酱汁一起放入坛子里腌渍。过四到五天后，将酱汁倒掉，再熬制新的酱汁，放凉后倒入坛子里继续腌渍，如此反复三次。一个月后取出来，加入各种调料伴着吃即可。',
    name_zh2: '竹筍醬菜',
    description_zh2:
      '竹筍用淘米水煮熟，剝掉外皮，清洗之後瀝幹水分，然後放入缸裡倒入熬好的醬汁。4~5天之後把醬汁倒出來重新熬一下，並晾涼後重新倒入缸裡。如此反復三次，約過一個月後用各種調料拌勻即可享用。',
  },
  {
    id: 613,
    category: '장아찌 [Jangajji]',
    name: '참외장아찌',
    pronounce: 'Chamoejangajji',
    description:
      '덜 익은 참외의 씨와 속을 파내고 소금물을 부어 약 한 달간 숙성시켜 만든 장아찌이다. 먹을 땐 참외를 잘게 썰어 참기름과 설탕 등으로 양념한다.',
    name_en: 'Pickled Oriental Melons',
    description_en:
      'Unripe oriental melons whose seeds have been removed, pickled, and aged in brine for about a month. When served, pickled melons are finely chopped and flavored with sesame oil and sugar.',
    name_ja: 'マクワウリの漬物',
    description_ja:
      'まだ熟していないマクワウリの種と果肉を取り除き、塩漬けにして１か月間熟成させた漬物。マクワウリを細かく切り、ごま油や砂糖などで味付けして食べると美味しい。',
    name_zh: '甜瓜酱菜',
    description_zh:
      '去除未熟透甜瓜的瓜籽和瓜瓤后，倒入盐水，经一个月左右发酵而成。吃的时候，将甜瓜切碎后，用香油和白糖等调味。',
    name_zh2: '甜瓜醬菜',
    description_zh2:
      '將未熟透甜瓜的瓜籽和瓜瓤去除，倒入鹽水，經發酵約一個月而成。食用前切碎，以香油和糖等調味。',
  },
  {
    id: 614,
    category: '장아찌 [Jangajji]',
    name: '콩잎장아찌',
    pronounce: 'Kongnipjangajji',
    description:
      '늦가을에 콩잎을 따서 연한 소금물에 담가 열흘 정도 삭힌 후 물기를 뺀 다음 된장에 박아 잘 삭혀 양념에 버무려 먹는 별미 장아찌로 경상도에서 많이 먹었다.',
    name_en: 'Pickled Bean Leaf',
    description_en:
      'Bean leaves collected in late fall, cured in light brine for roughly 10 days, drained, fermented in doenjang (soybean paste), and mixed with seasonings. This dish is a delicacy that used to be widely eaten in Gyeongsang Province.',
    name_ja: '豆の葉の漬物',
    description_ja:
      '秋の終わりに、豆の葉を摘み、少量の塩が入った水に漬けて１０日ほど発酵させる。取り出して水気を切ったら、テンジャンに漬けて発酵させる。食べる際はたれと和え、慶尚道でよく食べられる漬物。',
    name_zh: '豆叶酱菜',
    description_zh:
      '摘取晚秋十分的大豆叶子，用稍淡的盐水浸泡十天左右，捞出沥干水分后埋入大酱中，待其入味发酵后取出，加入各种调料拌着吃即可，是庆尚道地区常见的一道小菜。',
    name_zh2: '豆葉醬菜',
    description_zh2:
      '晚秋時節采些豆葉用淡鹽水醃製十天左右，然後撈出瀝幹水分。將瀝幹水分的豆葉放入大醬裡醃製。入味後可用各種調料拌勻。是慶尚道人愛吃的地方美食。',
  },
  {
    id: 615,
    category: '전 [Jeon]',
    name: '가자미전',
    pronounce: 'Gajamijeon',
    description:
      '가자미에 소금, 후춧가루로 밑간을 한 후, 밀가루와 달걀옷을 입혀 팬에 구워낸 전이다. 전 집마다 있는 흔한 전은 아니지만, 종로 광장시장에 가면 파는 곳이 여럿 있어 쉽게 맛 볼 수 있다.',
    name_en: 'Pan-fried Battered Plaice',
    description_en:
      'Flounder fillets seasoned with salt and pepper, coated with egg batter, and pan-fried. Flounder is not a common fish for egg-battered, pan-fried dishes, but there are several shops that use it this way in Gwangjang Traditional Market in Jongno-gu, Seoul.',
    name_ja: 'カレイのチヂミ',
    description_ja:
      '塩、胡椒で下味をつけたカレイに、小麦粉と卵の衣液をつけてフライパンで焼いたもの。チヂミ店に必ずあるメニューではないが、鐘路の広蔵市場に行けば売っている屋台がいくつかあり、食べることができる。',
    name_zh: '香煎鲽鱼片',
    description_zh:
      '鲽鱼用盐、胡椒粉腌一下，入味后裹上蛋液，放入平底锅中煎熟即可。虽然不是每家每户都常吃的家常菜，但是到位于首尔市钟路区的广藏市场可以看到很多家在卖鲽鱼煎饼。',
    name_zh2: '香煎鰈魚片',
    description_zh2:
      '在製作香煎鰈魚片時，需要首先在鰈魚中加入鹽、胡椒粉入味，然後裹一層麵粉與蛋液，在平底鍋中煎製即可。香煎鰈魚片並不常見，並非每家餐廳都有，但是位於鐘路的廣藏市場上卻有很多銷售香煎鰈魚片的地方，人們很容易品嘗到它的味道。',
  },
  {
    id: 616,
    category: '전 [Jeon]',
    name: '감자전',
    pronounce: 'Gamjajeon',
    description:
      '감자를 강판에 간 건더기와 가라앉은 앙금에 소금을 넣어 지진 전이다.불린 멥쌀 간 것을 섞거나 당근, 양파, 부추 등을 넣기도 한다.',
    name_en: 'Potato Pancake',
    description_en:
      'Grated potato mixedwith seasoning and shallow-fried on agriddle. The potato starch sediment is also salted and added to the batter. Ground rice can be added as well as carrots, onion, or chives.',
    name_ja: 'じゃがいものチヂミ',
    description_ja:
      'すりおろしたじゃがいもに塩を加え、油で焼いた料理。水でふやかしたうるち米を挽いたものやにんじん、玉ねぎ、にらなどを加えることもある。',
    name_zh: '土豆煎饼',
    description_zh:
      '把土豆用擦菜板擦碎，用滤网过滤掉水分后只留下土豆泥，再加入一些盐调味后煎成小饼状。还可以适当加入一些磨碎的大米或胡萝卜、洋葱、韭菜等。',
    name_zh2: '土豆煎餅',
    description_zh2: '將磨碎的馬鈴薯泥和沈澱的澱粉一起放入鍋裡煎製而成。',
  },
  {
    id: 617,
    category: '전 [Jeon]',
    name: '계란말이',
    pronounce: 'Gyeranmari',
    description:
      '계란을 깨뜨려 저은 뒤 송송 썬 파와 곱게 다진 당근, 양파 등의 채소를 넣고 소금 간하여 기름 두른 팬에 얇게 펴서 서서히 익혀가며 둥글게 만 음식이다.',
    name_en: 'Rolled Omelet',
    description_en:
      'Eggs mixed with chopped green onions, carrots, and onions, fried and rolled up.',
    name_ja: '卵焼き',
    description_ja:
      '溶き卵に刻んだねぎやにんじん、玉ねぎなどの野菜を加え、塩で味付けしたものを、油をひいたフライパンに広げて焼きながら巻いた料理。',
    name_zh: '鸡蛋卷',
    description_zh:
      '把鸡蛋打碎，加入一些葱花和胡萝卜、洋葱等蔬菜碎末，用盐调味后，倒入烧热下油的煎锅中薄薄地摊开，在小火下慢慢地煎 熟并卷起来即可。',
    name_zh2: '雞蛋捲',
    description_zh2:
      '將雞蛋磕入大碗裡攪拌後，放入蔥末、蔬菜等食材後鋪在煎鍋裡，邊煎黃邊捲成圓形後，像紫菜捲飯一樣切成段。滑嫩可口，適合作為小菜或開胃菜食用。',
  },
  {
    id: 618,
    category: '전 [Jeon]',
    name: '고구마튀김',
    pronounce: 'Gogumatwigim',
    description:
      '고구마를 먹기 좋은 크기로 썰어 밀가루와 밀가루반죽을 묻혀 기름에 튀긴 음식이다. 아이들 간식으로 좋고, 떡볶이와 함께도 많이 먹는다.',
    name_en: 'Deep-fried Sweet Potatoes',
    description_en:
      'Sweet potatoes cut into bite-sized pieces, battered, and deep-fried. This dish is a favorite snack among children and often eaten with tteokbokki.',
    name_ja: 'さつまいも天ぷら',
    description_ja:
      'さつまいもを食べやすい大きさに切り、小麦粉と小麦粉の衣液にからめて揚げたもの。子どものおやつとしても食べやすく、よくトッポッキと一緒に食べられる。',
    name_zh: '炸红薯',
    description_zh:
      '红薯切成适合入口的大小，裹上面粉液和面粉油炸即可。炸红薯可作为孩子的间餐，还可搭配辣炒年糕一起吃。',
    name_zh2: '炸紅薯',
    description_zh2:
      '將紅薯切成合適的大小，然後在外面裹一層麵粉，油炸即可。它既可以做孩子的零食，也可以與炒年糕一同食用。',
  },
  {
    id: 619,
    category: '전 [Jeon]',
    name: '고추부각',
    pronounce: 'Gochubugak',
    description:
      '고추를 반으로 갈라 씨를 빼고 밀가루나 찹쌀가루, 찹쌀풀을 골고루 무쳐 찜통에 찐 후 햇빛에 바삭바삭하게 말려서 기름에 튀긴 음식이다.',
    name_en: 'Chili Pepper Chips',
    description_en:
      'Green peppers halved with seeds removed, coated with flour, sweet rice powder, or sweet rice paste and then steamed, sun-dried, and deep-fried.',
    name_ja: '唐辛子のパリパリ揚げ',
    description_ja:
      '唐辛子を半分に切り、種を取り除いた後、小麦粉やもち粉、もち米の米糊をまんべんなく付けて蒸し器で蒸す。蒸し上がったら天日干しし、それを油で揚げる。',
    name_zh: '干炸辣椒片',
    description_zh:
      '辣椒切成两半后去籽，均匀地裹上面粉或糯米粉、糯米浆糊，放入锅中蒸熟，再放到阳光下晒至酥脆，最后放入锅中油炸即可。',
    name_zh2: '乾炸辣椒片',
    description_zh2:
      '將辣椒按長條切成一半，去除辣椒籽。然後沾上麵粉或糯米粉，或者糯米糊後蒸熟，再曬乾。最後用油炸即可。',
  },
  {
    id: 620,
    category: '전 [Jeon]',
    name: '고추전',
    pronounce: 'Gochujeon',
    description:
      '간 소고기와 두부에 양념을 하여 고루 섞은 것을 씨를 뺀 고추 안쪽에 채워 넣고, 밀가루와 달걀옷을 입혀지진 전이다. 고추의 매콤한 맛 때문에 개운하게 먹을 수 있다.',
    name_en: 'Pan-fried Battered Chili Pepper',
    description_en:
      'Egg-battered, pan-fried green peppers halved with seeds removed and stuffed with a mixture of seasoned ground beef and bean curd. The spiciness of the peppers makes this dish particularly delicious.',
    name_ja: '青唐辛子のチヂミ',
    description_ja:
      '牛ひき肉と豆腐にたれをからめてこねたものを、種をぬいた唐辛子の中につめて小麦粉と卵の衣液をつけて焼いたもの。唐辛子の辛味が効いてしつこくない味が楽しめる。',
    name_zh: '香煎尖椒',
    description_zh:
      '将搅碎的牛肉和豆腐加入调料搅拌均匀后，填入挖空的辣椒里，再裹上面粉和蛋液件数即可。辣椒特有的鲜辣，使味道更加清淡爽口。',
    name_zh2: '香煎尖椒',
    description_zh2:
      '在剁好的牛肉與豆腐裡加入調料攪拌均勻，辣椒去芯，然後將牛肉與豆腐填入辣椒裡面，並在辣椒外面裹一層麵粉、雞蛋，煎製即可。由於辣椒的辣味，食用時感覺非常清爽。',
  },
  {
    id: 621,
    category: '전 [Jeon]',
    name: '굴전',
    pronounce: 'Guljeon',
    description: '굴에 밀가루와 달걀 물을 묻혀 기름에 지진 음식으로, 초간장을 곁들여 먹는다.',
    name_en: 'Pan-fried Battered Oyster',
    description_en:
      'Flour-coated, egg-battered oysters pan-fried and served with a vinegar-based soy sauce.',
    name_ja: 'カキのチヂミ',
    description_ja: 'カキに小麦粉と水溶き卵をからめ、油で焼いたもの。酢醤油を添えて食べる。',
    name_zh: '香煎牡蛎',
    description_zh: '将牡蛎裹上面粉和蛋液，放入锅中油煎，蘸醋酱油吃即可。',
    name_zh2: '香煎牡蠣',
    description_zh2: '將牡蠣裹上麵粉與雞蛋后用油煎熟，蘸醬油醋吃即可。',
  },
  {
    id: 622,
    category: '전 [Jeon]',
    name: '김말이튀김',
    pronounce: 'Gimmaritwigim',
    description:
      '삶은 당면과 당근, 양파를 식용유를 두른 팬에 볶은 후, 김은 4등분을 해 준비한다. 김 위에 볶은 당면을 올리고 돌돌 말아 튀김옷을 입혀 튀긴다. 주로 떡볶이와 같이 먹으며, 남녀노소 좋아하는 간식거리이다.',
    name_en: 'Deep-fried Laver Roll',
    description_en:
      'Boiled glass noodles pan-fried with chopped carrot and green onion, wrapped in laver cut into four pieces, and battered and fried. A Korean favorite, this snack is usually eaten with tteokbokki.',
    name_ja: '春雨のり巻き天ぷら',
    description_ja:
      '茹でた春雨とにんじん、玉ねぎをフライパンで炒める。のりは四等分にしておく。のりの上に炒めた春雨をのせ、巻いて衣をつけて揚げる。主にトッポッキと一緒に食べる誰からも愛されるおやつ。',
    name_zh: '炸紫菜卷',
    description_zh:
      '烧热的平底锅中倒入适量的食用油，将煮熟的粉丝和胡萝卜、洋葱一起倒入锅中翻炒，一张紫菜切成四份待用。将炒好的粉丝和蔬菜放在紫菜上卷起来，裹上油炸粉放入锅中油炸即可。炸紫菜卷一般搭配辣炒年糕一起吃，是男女老少都喜爱的一道小吃。',
    name_zh2: '炸紫菜捲',
    description_zh2:
      '將煮熟的粉條和洋蔥用油焯一下，紫菜分成4等分備好。把炒熟的粉條放在紫菜上卷起來，裹上炸粉油炸。一般跟辣炒年糕一起吃，是男女老少皆愛吃的零食。',
  },
  {
    id: 623,
    category: '전 [Jeon]',
    name: '김부각',
    pronounce: 'Gimbugak',
    description: '김에 찹쌀 풀을 발라 참깨와 고춧가루를 뿌려 말렸다가 기름에 튀겨 먹는 밑반찬이다.',
    name_en: 'Laver Chips',
    description_en:
      'This side dish is made by brushing laver with sweet rice paste and sprinkling with sesame seeds and red chili powder before sun-drying and deep-frying.',
    name_ja: 'のりのパリパリ揚げ',
    description_ja:
      'のりにもち米の米糊をぬり、ゴマと粉唐辛子をふりかけて乾かしたものを油で揚げたもの。',
    name_zh: '干炸紫菜片',
    description_zh:
      '紫菜抹上糯米浆糊，撒上芝麻和辣椒粉晒干后，放入锅中油炸即可，是一道很美味的小菜。',
    name_zh2: '乾炸紫菜片',
    description_zh2:
      '將紫菜抹上糯米漿糊，撒上芝麻與辣椒粉後曬乾，最後用油炸即可，是非常好的下飯小菜。',
  },
  {
    id: 624,
    category: '전 [Jeon]',
    name: '김치빈대떡',
    pronounce: 'Kimchibindaetteok',
    description:
      '녹두를 물에 불려 껍질을 벗긴 후 갈아 김치, 쇠고기나 돼지고기 따위를 넣고 번철이나 프라이팬 따위에 부쳐 만든다. 반죽에 쌀가루를 섞어 부치면 바삭한 식감이 좋다.',
    name_en: 'Kimchi and Mung Bean Pancake',
    description_en:
      'This dish is made by peeling and soaking mung beans, grinding them, and then frying them with kimchi and beef or pork in a frying pan or on a griddle. Rice powder can be mixed into the batter to make it more crispy.',
    name_ja: 'キムチのピンデトク',
    description_ja:
      '水にふやかし、皮をむいた緑豆を挽き、キムチや牛肉、豚肉などを加えて鉄板やフライパンなどで焼いたもの。生地に米粉を混ぜて焼くと、サクッとした食感が増す。',
    name_zh: '辛奇绿豆煎饼',
    description_zh:
      '将绿豆泡水去皮后磨成浆，放入辛奇、牛肉或猪肉，倒入煎锅或平底锅中做成煎饼。在面糊中加入米粉煎制，口感会更加酥脆。',
    name_zh2: '辛奇綠豆煎餅',
    description_zh2:
      '將綠豆泡水去皮後用石磨磨成漿，放入辛奇、牛肉或豬肉，倒入煎鍋或平底鍋做成煎餅。在麵糊裡拌入米粉煎，口感會更酥脆。',
  },
  {
    id: 625,
    category: '전 [Jeon]',
    name: '김치전',
    pronounce: 'Kimchijeon',
    description:
      '밀가루 반죽에 잘 익은 김치를 송송 썰어 넣고 부친 전이다. 잘게 썬 돼지고기나 오징어, 조갯살 등을 섞어 부치기도 한다.',
    name_en: 'Kimchi Pancake',
    description_en:
      'Slices of well-fermented kimchi mixed into a flour batter and pan-fried. Finely chopped pork, squid, and clam meat may be added to the batter as well.',
    name_ja: 'キムチのチヂミ',
    description_ja:
      '小麦粉の生地に熟成したキムチを入れて油で焼いた料理。豚肉の細切れやイカ、貝などを混ぜてもおいしい。',
    name_zh: '辛奇煎饼',
    description_zh: '发酵完熟的辛奇切丝拌入面糊中煎制而成，还可加入猪肉丝，鱿鱼，蛤蜊 肉等。',
    name_zh2: '辛奇煎餅',
    description_zh2: '發酵完熟的辛奇切成絲後拌入麵糊中，在鍋裡倒入油後煎製而成。',
  },
  {
    id: 626,
    category: '전 [Jeon]',
    name: '깻잎전',
    pronounce: 'Kkaennipjeon',
    description:
      '깻잎은 들깨의 잎을 가리키는 말이다. 깻잎에 고기와 채소를 소로 넣어 반으로 접어 구워 낸 전으로 향긋한 맛이 매력적이다.',
    name_en: 'Pan-fried Battered Perilla Leaves',
    description_en:
      'Half-folded perilla leaves stuffed with a mixture of minced meat and vegetables, egg-battered, and pan-fried. The fragrant perilla leaves stimulate one’s taste buds.',
    name_ja: 'エゴマの葉のチヂミ',
    description_ja:
      'エゴマの葉に肉と野菜のあんをのせて半分に折って焼いたもの。エゴマの香りがたつ。',
    name_zh: '香煎苏子叶',
    description_zh:
      '苏子叶是指紫苏的叶子。用牛肉和蔬菜做成馅儿放在苏子叶上，再将苏子叶对折后，用油煎熟即可，苏子叶特有的香味令人胃口大增。',
    name_zh2: '香煎蘇子葉',
    description_zh2:
      '蘇子葉是指白蘇的葉子。首先在蘇子葉中包上肉與蔬菜，折成一半，然後烤製即可。濃郁的香味是其魅力所在。',
  },
  {
    id: 627,
    category: '전 [Jeon]',
    name: '꼬막전',
    pronounce: 'Kkomakjeon',
    description:
      '데친 꼬막에 계란, 밀가루, 야채를 넣고 기름을 두른 팬에 부쳐낸 전으로 꼬막의 주산지인 전라남도의 향토음식이다.',
    name_en: 'Pan-fried Battered Cockles',
    description_en:
      'Parboiled and shucked cockles mixed with beaten eggs, flour, and vegetables and pan-fried. This dish is a local specialty of South Jeolla Province, which is a major cockle producer.',
    name_ja: 'ハイガイのチヂミ',
    description_ja:
      '湯がいたハイガイに卵、小麦粉、野菜を加えてフライパンで焼いたもの。ハイガイの主な生産地である全羅南道の郷土料理。',
    name_zh: '香煎血蚶',
    description_zh:
      '血蚶用开水焯一下，加入鸡蛋、面粉、蔬菜搅拌均匀，倒入烧热的平底锅中用油煎即可。血蚶煎饼是盛产泥蚶的全罗南道的特色美食。',
    name_zh2: '香煎泥蚶',
    description_zh2:
      '用熱水焯好的泥蚶裡放入雞蛋、麵粉和蔬菜攪勻，然後鍋裡倒點油煎成餅。這道菜是盛產泥蚶的全羅南道地方美食。',
  },
  {
    id: 628,
    category: '전 [Jeon]',
    name: '녹두전',
    pronounce: 'Nokdujeon',
    description:
      '녹두를 물에 불려 껍질을 벗긴 뒤 곱게 갈아 소고기나 돼지고기, 숙주, 고사리, 배추김치 등을 넣고 지진 음식. 불린 멥쌀을 갈아 섞으면 맛이 더 부드럽다.',
    name_en: 'Mung Bean Pancake',
    description_en:
      'Stone-ground mung beans, sliced beef or pork, mung bean sprouts, fiddleheads, and cabbage kimchimixed into a batter and shallow-fried on agriddle. Ground rice may be added to soften the taste.',
    name_ja: '緑豆のチヂミ',
    description_ja:
      '水でふやかした緑豆の皮をむいて細かく挽き、牛肉や豚肉、緑豆もやし、ワラビ、白菜キムチなどを加えて油で焼いた料理。水でふやかしたうるち米を挽いて混ぜると、いっそうまろやかな口当たりになる。',
    name_zh: '绿豆煎',
    description_zh:
      '绿豆用水泡发，去皮后磨成浆，然后加入牛肉或猪肉、绿豆芽、蕨菜、辛奇等煎成薄饼状。也可将大米磨成粉掺入其中。',
    name_zh2: '綠豆煎',
    description_zh2:
      '將綠豆用水浸泡後去皮，然後磨成細粉，加入牛肉或豬肉、綠豆芽、蕨菜，辛奇等一起煎成餅。',
  },
  {
    id: 629,
    category: '전 [Jeon]',
    name: '다시마부각',
    pronounce: 'Dasimabugak',
    description:
      '두꺼운 다시마에 찹쌀밥을 붙여서 말렸다가 기름에 튀긴 부각으로 색다른 맛과 모양이 별미이다.',
    name_en: 'Kelp Chips',
    description_en: 'Thick kelp brushed with sweet rice paste and then sun-dried and deep-fried.',
    name_ja: '昆布のパリパリ揚げ',
    description_ja: '厚い昆布にもち米の米糊をぬり、乾かしたものを油で揚げたもの。味も形も絶品。',
    name_zh: '干炸昆布片',
    description_zh: '略厚的昆布抹上糯米饭粒晒干后，放入锅中油炸即可，味道和形状均十分独特。',
    name_zh2: '乾炸昆布片',
    description_zh2:
      '將厚昆布抹上糯米飯曬乾，最後用油炸即可。乾炸昆布片形狀各異，且有著與眾不同的味道。',
  },
  {
    id: 630,
    category: '전 [Jeon]',
    name: '단군신화전',
    pronounce: 'Dangunsinhwajeon',
    description:
      '한국의 건국 신화인 ‘단군신화’에 나오는 재료를 이용한 요리로 배추김치 위에 깻잎과 구운 소고기와 마늘을 얹고 말아 밀가루와 달걀을 묻혀 지져서 잘라 낸다.',
    name_en: 'Pan-fried Battered Kimchi Roll with Garlic and Beef',
    description_en:
      'This is a dish made with the ingredients mentioned in the Korean foundation myth, “Myth of Dangun.” Perilla leaves, roasted beef, and garlic are rolled in cabbage leaves, coated with flour, and dipped into beaten eggs. The wraps are cut into bite-sized pieces before serving.',
    name_ja: '檀君神話チヂミ',
    description_ja:
      '韓国の建国神話である「檀君神話」に出てくる食材を利用した料理。白菜キムチの上にエゴマの葉と焼いた牛肉、にんにくをのせて巻く。それに小麦粉と卵をつけて焼き、切って食べる。',
    name_zh: '檀君神话辛奇卷',
    description_zh:
      '以韩国开国神话即“檀君神话”中的材料为主要食材，将苏子叶和烤熟的牛肉、大蒜等放在辛奇上面，然后将其卷起来裹上面粉和蛋液后，放入锅中煎熟即 可。',
    name_zh2: '檀君神話辛奇卷',
    description_zh2:
      '以韓國開國神話即“檀君神話”中的材料為主要食材，將蘇子葉和烤熟的牛肉、大蒜等放在辛奇上面，然後卷起來沾上麵粉和雞蛋煎熟，切成適當大小即可食用。',
  },
  {
    id: 631,
    category: '전 [Jeon]',
    name: '단호박튀김',
    pronounce: 'Danhobaktwigim',
    description:
      '단호박은 씨를 빼고 1~2cm 크기로 잘라서 준비한다. 자른 단호박에 밀가루를 묻히고, 튀김옷을 입혀 튀겨내는데, 고구마만큼 달콤한 맛이 난다.',
    name_en: 'Deep-fried Pumpkin',
    description_en:
      'Seeded sweet pumpkin cut into one- to two-centimeter pieces, coated with flour, battered, and fried. Sweet pumpkin is just as sweet as sweet potatoes.',
    name_ja: 'カボチャ天ぷら',
    description_ja:
      'カボチャは種をとって１～２cmの大きさに切る。切ったカボチャに小麦粉の衣をつけて揚げる。さつまいものように甘い。',
    name_zh: '炸甜南瓜',
    description_zh:
      '甜南瓜去籽，切成1-2cm长后，裹上面粉和油炸粉，放入锅中油炸即可，味道如红薯一样香甜可口。',
    name_zh2: '炸甜南瓜',
    description_zh2:
      '甜南瓜去籽，切成1~2釐米大小的塊兒，裹上麵粉和炸粉，然後用油炸熟。炸甜南瓜香甜滑嫩，甜度可以跟紅薯媲美。',
  },
  {
    id: 632,
    category: '전 [Jeon]',
    name: '달래전',
    pronounce: 'Dallaejeon',
    description:
      '밀가루 반죽에 달래를 넣고 번철이나 프라이팬 따위에 부쳐 만든다. 취향에 따라 고추를 잘게 썰어 넣으면 매콤한 달래전이 된다. 간장에 찍어 먹는다.',
    name_en: 'Wild Rocambole Pancake',
    description_en:
      "This dish is made by mixing wild rocambole into a flour batter and frying in a pan or on a griddle. Depending on one's taste, finely chopped chili peppers can be added to give a spicy flavor to the dish. It is served with a soy sauce dip.",
    name_ja: 'ノビルのチヂミ',
    description_ja:
      '小麦粉の生地にノビルを加え、鉄板やフライパンなどで焼いたもの。好みに応じて細かく刻んだ唐辛子を加えると、辛いノビルのチヂミが楽しめる。醤油をつけて食べても美味しい。',
    name_zh: '小根蒜煎饼',
    description_zh:
      '面糊中放入小根蒜后在煎锅或平底锅中煎制而成，蘸着酱油吃。也可根据个人喜好，放入切好的辣椒丝，增添香辣的味道。',
    name_zh2: '山蒜煎餅',
    description_zh2:
      '在麵糊裡拌入山蒜，倒入煎鍋或平底鍋煎製而成。可跟據個人喜好放入辣椒絲，增添香辣味道。沾醬油吃。',
  },
  {
    id: 633,
    category: '전 [Jeon]',
    name: '동그랑땡',
    pronounce: 'Donggeurangttaeng',
    description:
      '동그랑땡은 고기 완자 전을 말하는데, 동그랗게 생긴 모양으로 인해 부르게 된 명칭이다. 간 소고기나 돼지고기와 다진 채소를 고루 섞어 동전모양으로 동글납작하게 만든 뒤, 밀가루와 달걀옷을 입혀지진 전이다.',
    name_en: 'Meat Fritters',
    description_en:
      'A mixture of ground beef or pork and minced vegetables molded into round shapes, flour-coated, egg-battered, and pan-fried.',
    name_ja: '肉団子のチヂミ',
    description_ja:
      '肉団子のチヂミは牛や豚のひき肉と、刻み野菜を平たく丸い形にし、小麦粉と卵の衣液をつけて焼く。',
    name_zh: '香煎肉饼',
    description_zh:
      '顾名思义，是一种圆形的小煎肉饼。将搅碎的牛肉或猪肉和剁碎的蔬菜一起搅拌均匀，做成像硬币一样圆圆扁扁的形状，再裹上面粉和蛋液后煎熟即可。',
    name_zh2: '香煎肉餅',
    description_zh2:
      '香煎肉餅是指一種圓形的丸子餅，在製作時，首先將牛肉、豬肉、蔬菜剁碎，攪拌均勻，製作成硬幣一般圓形，然後在外面裹一層麵粉與雞蛋煎制即可。',
  },
  {
    id: 634,
    category: '전 [Jeon]',
    name: '동태전',
    pronounce: 'Dongtaejeon',
    description:
      '동태전은 차례 상에 올라가는 대표적인 음식이다. 소금, 후춧가루로 밑간한 동태 포에 밀가루와 달걀옷을 입혀 식용유를 두른 팬에 지진 것이다.',
    name_en: 'Pan-fried Battered Pollack Fillet',
    description_en:
      'Dongtaejeon is one of the essential dishes served for the Korean ancestor worship ceremony. It is made by seasoning frozen pollack fillets with salt and pepper, coating with flour and beaten eggs, and pan-frying.',
    name_ja: 'スケトウダラのチヂミ',
    description_ja:
      'スケトウダラのチヂミは民俗的な行事の席に登場する代表料理。塩、胡椒で下味をつけたスケトウダラの干物に小麦粉と卵の衣液をつけ、油をひいたフライパンで焼く。',
    name_zh: '香煎冻明太鱼片',
    description_zh:
      '香煎冻明太鱼片是代表性的祭祀菜。冻明太鱼片用盐、胡椒粉调味，入味后裹上面粉和蛋液用油煎熟即可。',
    name_zh2: '香煎凍明太魚片',
    description_zh2:
      '凍明太魚煎餅是祭祀時使用的富有代表性的食物之一。首先將東明太魚脯用鹽、辣椒粉調味，然後裹上一層麵粉與雞蛋，平底鍋中放油，煎製而成。',
  },
  {
    id: 635,
    category: '전 [Jeon]',
    name: '두부전',
    pronounce: 'Dubujeon',
    description:
      '두부를 달궈진 팬에 노릇노릇하게 지진 전이다. 먹을 때 양념장에 찍어 먹는다. 두부는 우리나라를 비롯한 일본, 중국에서 즐겨먹던 식품으로, 건강음식으로 각광받는다.',
    name_en: 'Pan-fried Battered Bean Curd',
    description_en:
      'Bean curd cut into bite-sized pieces and pan-fried in a preheated pan. Served with a soy sauce-based dipping sauce, pan-fried bean curd is a popular and healthy food widely eaten in Korea, Japan, and China.',
    name_ja: '豆腐のチヂミ',
    description_ja:
      '豆腐を熱したフライパンでこんがりと焼いたチヂミ。食べる際にたれにつけて食べる。豆腐は韓国をはじめ、日本、中国で食べられる食品で、健康食品として注目されている。',
    name_zh: '香煎豆腐',
    description_zh:
      '将豆腐用油煎成两面焦黄，用调味酱蘸着吃即可。豆腐作为一种健康食品，在韩国以及中国和日本都广受欢迎。',
    name_zh2: '香煎豆腐',
    description_zh2:
      '將平底鍋燒熱，把豆腐放入平底鍋煎至金黃即可。食用時搭配辣味調味醬。豆腐在韓國、日本、中國都很受歡迎，作為一種健康食品也受到大家的喜愛。',
  },
  {
    id: 636,
    category: '전 [Jeon]',
    name: '떡튀김',
    pronounce: 'Tteoktwigim',
    description:
      '떡을 기름에 튀긴 음식이다. 떡국용으로 얇게 썰어 튀기거나 떡볶이용으로 나온 얇은 가래떡을 튀기기도 한다. 꿀이나 매콤하고 달콤한 고추장 소스에 찍어 먹는다.',
    name_en: 'Deep-fried Rice Cake',
    description_en:
      'Sliced rice cake bars (garaetteok) or thin rice cake sticks (tteokbokkitteok) fried. This dish is served with a honey dip or a sweet and spicy gochujang (red chili paste) dipping sauce.',
    name_ja: 'お餅の天ぷら',
    description_ja:
      'お餅を油で揚げたもの。トッククに使うお餅を薄切りにして揚げたり、トッポッキに使う細長いお餅を揚げたりもする。蜂蜜や甘辛いコチュジャンソースをつけて食べると美味しい。',
    name_zh: '炸年糕',
    description_zh:
      '将年糕片油炸而成的料理。将年糕切成薄片，或者使用做辣炒年糕时使用的细长年糕条。可以蘸着蜂蜜或辣甜的辣椒酱吃。',
    name_zh2: '炸年糕',
    description_zh2:
      '將年糕片油炸而成。把年糕切成薄片使用，或用做辣炒年糕的薄片長條年糕。沾蜂蜜或有甜味的辣椒醬吃。',
  },
  {
    id: 637,
    category: '전 [Jeon]',
    name: '만두튀김',
    pronounce: 'Mandutwigim',
    description:
      '다진고기, 두부, 파, 양파, 당면 등을 만두피로 감싸 납작하게 빚은 만두를 통째로 기름에 튀긴 음식이다. 초간장을 찍어 먹는다.',
    name_en: 'Deep-fried Dumplings',
    description_en:
      'Deep-fried flat dumplings stuffed with minced meat, bean curd, green onion, onion, and glass noodles. It is served with a vinegar-soy dipping sauce.',
    name_ja: '揚げ餃子',
    description_ja:
      '細切りにした肉、豆腐、ねぎ、玉ねぎ、春雨などを餃子の皮で包んで平たく作る。それを丸ごと油で揚げ、酢醤油を付けて食べる。',
    name_zh: '炸饺子',
    description_zh:
      '将用肉末、豆腐、葱、洋葱、粉丝等做成的馅料放在面皮上包好，捏成扁平状后油炸而成。蘸着醋酱油吃。',
    name_zh2: '炸餃子',
    description_zh2:
      '將用肉末、豆腐、蔥、洋蔥、粉條等製成的餃子餡放在麵皮上，捏成扁平狀後油炸。沾醋醬油吃。',
  },
  {
    id: 638,
    category: '전 [Jeon]',
    name: '메밀장떡',
    pronounce: 'Memiljangtteok',
    description:
      '메밀가루 반죽에 된장이나 고추장을 풀어 기름을 두른 번철이나 프라이팬 따위에 얇게 펴 놓고 지진 음식이다. 취나물, 달래 등을 함께 넣어 부치기도 한다.',
    name_en: 'Buckwheat Pancake',
    description_en:
      'Buckwheat batter mixed with gochujang (red chili paste) or doenjang (soybean paste) and thinly spread and fried in an oiled pan or griddle. Aster leaves or wild rocambole can be mixed into the batter.',
    name_ja: 'コチュジャン入りそば粉チヂミ',
    description_ja:
      'そば粉の生地にテンジャンやコチュジャンを溶かして入れたものを、油をひいた鉄板やフライパンなどに広げて焼いた料理。シラヤマギクやノビルなどを加えて焼く場合もある。',
    name_zh: '荞麦酱饼',
    description_zh:
      '荞麦粉糊里拌入大酱或辣椒酱后，倒入涂了油的煎锅或平底锅中薄薄地摊开煎制而成。有时也会放入马蹄菜、小根蒜一起煎。',
    name_zh2: '蕎麥醬餅',
    description_zh2:
      '在蕎麥粉糊裡拌入大醬或辣椒醬後，倒入抹油的煎鍋或平底鍋中攤薄煎製而成。也可以拌入東風菜、山蒜一起煎。',
  },
  {
    id: 639,
    category: '전 [Jeon]',
    name: '메밀전병',
    pronounce: 'Memiljeonbyeong',
    description:
      '메밀가루를 묽게 반죽해서 팬에 두른 후 무, 배추, 고기 등을 소로 넣고 말아 지진 음식이다. 메밀총떡의 다른 이름으로 부침개에 가깝다.',
    name_en: 'Buckwheat Crepe',
    description_en:
      'This crepe-like dish is made by pan-frying buckwheat batter and rolling it with chopped radish, Korean cabbage, and meat as a filling. It is also referred to as memilchongtteok and buchimgae.',
    name_ja: 'そば粉の薄皮巻き',
    description_ja:
      'こねたそば粉をフライパンに広げ、大根や白菜、肉などを巻いて焼いたもの。「そばチョントク」とも呼ばれ、チヂミに似ている。',
    name_zh: '荞麦煎饼',
    description_zh:
      '荞麦粉加水调稀倒入锅中摊平，再 放入萝卜、白菜、肉等馅料，在还未凝固时卷 起，类似于煎饼。',
    name_zh2: '蕎麥煎餅',
    description_zh2: '蕎麥粉加水調稀，倒入鍋中鋪平，再放入蘿蔔、白菜、肉等餡料，在凝固之前捲起。',
  },
  {
    id: 640,
    category: '전 [Jeon]',
    name: '모둠전',
    pronounce: 'Modumjeon',
    description:
      '고기, 생선, 채소 등 다양한 재료에 밀가루와 계란 옷을 입혀 부친 전을 색깔 맞춰 보기 좋게 담아낸 음식이다.',
    name_en: 'Assorted Savory Pancakes',
    description_en:
      'A colorful dish of beef, fish, and vegetable slicescoated in flour or egg batter and pan-fried.The assorted jeons are tastefully arranged on a plate.',
    name_ja: 'チヂミの盛り合わせ',
    description_ja:
      '肉や魚、野菜など様々な材料に小麦粉や卵の衣をつけて油で焼いたものを、彩りよく盛った料理。',
    name_zh: '煎饼拼盘',
    description_zh: '把肉、鱼、蔬菜等多种食材裹上蛋 清煎好，然后根据颜色装盘。',
    name_zh2: '煎餅拼盤',
    description_zh2: '用肉類、魚類、蔬菜等多種食材裹上麵粉和蛋液後煎製而成。',
  },
  {
    id: 641,
    category: '전 [Jeon]',
    name: '미꾸라지튀김',
    pronounce: 'Mikkurajitwigim',
    description:
      '깨끗하게 손질한 미꾸라지를 밀가루반죽을 입혀 통째로 튀겨낸 음식이다. 바삭하면서 고소해 간식으로 먹어도 좋고, 술안주로 좋다.',
    name_en: 'Deep-fried Loach',
    description_en:
      'Cleaned loach flour-battered and deep-fried. This dish is crisp, rich-flavored, and ideal as a snack or side dish for alcoholic beverages.',
    name_ja: 'どじょう天ぷら',
    description_ja:
      'きれいに洗ったどじょうを小麦粉の衣液にからめて丸ごと素揚げしたもの。サクッとして香ばしく、おやつとしても酒のつまみとしてもぴったり。',
    name_zh: '炸泥鳅',
    description_zh:
      '将处理好的泥鳅裹上面糊整条放入油锅中炸至酥脆即可。炸泥鳅味道香脆，可作为间餐，也用来做下酒菜。',
    name_zh2: '炸泥鰍',
    description_zh2:
      '首先將泥鰍摘洗幹淨，裹上一層麵糊，整條放到油鍋中炸製即可。它的味道酥脆，既可以作為零食食用，也可以做下酒菜。',
  },
  {
    id: 642,
    category: '전 [Jeon]',
    name: '미나리전',
    pronounce: 'Minarijeon',
    description:
      '식용유를 두른 팬에 미나리를 나란히 올리고, 밀가루와 달걀 물, 소금을 섞어 만든 묽은 반죽을 끼얹어 부친다. 기호에 따라 볶은 쇠고기와 홍합, 고추 등을 올려서 지지기도 한다.',
    name_en: 'Water Parsley Pancake',
    description_en:
      'Water parsley placed in an oiled pan, drizzled with a mixture of flour, beaten eggs, water, and salt, and pan-fried. Stir-fried beef, mussel meat, and green pepper can be added according to one’s taste.',
    name_ja: 'セリのチヂミ',
    description_ja:
      '油をひいたフライパンにセリを並べ、小麦粉と水溶き玉子、塩を加えて作った生地を流し込んで焼く。好みにより炒めた牛肉やムール貝、唐辛子などをのせて焼く場合もある。',
    name_zh: '水芹煎饼',
    description_zh:
      '平底锅烧热后倒入食用油，将水芹整齐地摆放后，倒入用面粉和蛋液、盐搅拌而成的面糊煎熟即可，也可根据喜好放入炒牛肉和贻贝、辣椒等。',
    name_zh2: '水芹煎餅',
    description_zh2:
      '首先把麵粉、雞蛋液、食鹽和成麵糊，然後在鍋中放油，將水芹並排擺放在鍋中，再把麵糊倒入鍋中。也可以根據個人的喜好，在裡面加入炒好的牛肉、貽貝、辣椒等材料。',
  },
  {
    id: 643,
    category: '전 [Jeon]',
    name: '배추전',
    pronounce: 'Baechujeon',
    description:
      '배추 잎을 소금 간한 밀가루 반죽에 묻혀 식용유를 두른 팬에 지져, 초간장을 찍어 먹는 전이다. 경상도에서 즐기는 전으로, 쉽게 만들 수 있고 담백한 맛이 매력이다.',
    name_en: 'Cabbage Pancake',
    description_en:
      'Korean cabbage leaves dipped in a flour batter seasoned with salt and pan-fried in an oiled pan. Popular in Gyeongsang Province, this dish is served with a mixture of soy sauce and vinegar. As it is made with simple ingredients, it has a refreshing taste.',
    name_ja: '白菜のチヂミ',
    description_ja:
      '塩をふった白菜の葉を小麦粉の生地にくぐらせて食用油をひいたフライパンで焼き、酢醤油につけて食べる。慶尚道でよく食べられるチヂミで、作り方も簡単。さっぱりとした味が絶品。',
    name_zh: '白菜煎饼',
    description_zh:
      '将白菜叶裹上用盐调味的面糊，放入烧热后倒入食用油的平底锅中煎熟，蘸醋酱油吃即可。白菜煎饼是庆尚道地区常见的一道菜，简单易做，清淡美味。',
    name_zh2: '白菜煎餅',
    description_zh2:
      '麵糊用食鹽調好味，在白菜葉子上裹一層麵糊，平底鍋中放油，然後將白菜葉子放入鍋中煎製即可。食用時可搭配加醋醬油，這道菜尤其在慶尚道被人們廣泛喜愛，製作簡單、味道清淡是其獨特的魅力所在。',
  },
  {
    id: 644,
    category: '전 [Jeon]',
    name: '버섯전',
    pronounce: 'Beoseotjeon',
    description:
      '말린 표고버섯, 느타리버섯, 새 송이버섯 등 다양한 버섯을 밀가루와 달걀 물을 씌어 전을 부친 것이다. 향긋하고 쫄깃한 맛이 좋다.',
    name_en: 'Pan-fried Battered Mushrooms',
    description_en:
      'Dried shiitake, oyster, king oyster, and other types of mushrooms flour-coated and pan-fried in egg batter. This dish is favored for its flavor and chewy texture.',
    name_ja: 'きのこのチヂミ',
    description_ja:
      '干ししいたけ、平茸、エリンギなどの様々なきのこを小麦粉と水溶き卵にからめて焼いたもの。香りと食感が抜群。',
    name_zh: '蘑菇煎饼',
    description_zh: '将干香菇、平菇、杏鲍菇等各种菌类浇上面粉和蛋液煎熟即可，味道和口感十分鲜美。',
    name_zh2: '蘑菇煎餅',
    description_zh2:
      '在幹香菇、平菇、杏鲍菇等各種蘑菇上裹上一層麵粉與雞蛋液，煎製即可。香味濃郁、口感彈滑。',
  },
  {
    id: 645,
    category: '전 [Jeon]',
    name: '복튀김',
    pronounce: 'Boktwigim',
    description:
      '도톰하게 자른 복어에 다진 마늘, 참기름, 소금, 후춧가루로 양념을 한 후 튀김옷을 입혀 기름에 튀긴 것이다. 고급 튀김 요리로 겉이 바삭하면서도 속은 부드럽고 담백한 맛이 난다.',
    name_en: 'Deep-fried Puffer Fish',
    description_en:
      'Puffer fish cut nice and thick, seasoned with chopped garlic, sesame oil, salt, and pepper powder, and then battered and fried. A deep-fried delicacy, this tasty dish is crispy on the outside and tender and moist on the inside.',
    name_ja: 'ふぐ天ぷら',
    description_ja:
      '厚切りしたふぐに、みじん切りしたにんにく、ごま油、塩、胡椒で味をつけた後、衣をつけて油であげたもの。高級な天ぷら料理で、外はさくさく、中はやわらかくさっぱりとした味が魅力。',
    name_zh: '炸河豚',
    description_zh:
      '河豚肉切成略厚的片状，用蒜末、香油、盐、胡椒粉调味后，裹上油炸粉放入锅中油炸即可。炸河豚是一道高级油炸菜肴，外焦里嫩，口感酥脆，味道十分鲜美清淡。',
    name_zh2: '炸河豚',
    description_zh2:
      '河豚切成厚片，放入蒜蓉、香油、鹽、胡椒粉調味，然後沾上炸粉油炸即可。炸河豚是高檔料理，口感外酥裡嫩，非常鮮香。',
  },
  {
    id: 646,
    category: '전 [Jeon]',
    name: '봄나물전',
    pronounce: 'Bomnamuljeon',
    description:
      '쑥, 방풍나물, 냉이, 취나물 등 봄철에 나는 제철 나물을 밀가루 반죽에 넣고 기름을 두른 프라이팬에 얇게 부쳐 먹는 음식이다.',
    name_en: 'Spring Vegetable Pancake',
    description_en:
      "Spring vegetables, such as mugwort, coastal hog fennel, shepherd's purse, and aster leaves, mixed into a flour batter and thinly spread and fried in an oiled pan.",
    name_ja: '春のナムルのチヂミ',
    description_ja:
      'ヨモギ、ボウフウ、シラヤマギクなど春に旬を迎えるナムルを、小麦粉の生地に混ぜ、油をひいたフライパンで薄く焼いたもの。',
    name_zh: '春菜煎饼',
    description_zh:
      '将艾草、防风菜、荠菜、马蹄菜等春季应季野菜放入面糊中，再倒入涂了油的平底锅中薄薄地摊开煎制而成。',
    name_zh2: '春菜煎餅',
    description_zh2:
      '將艾草、濱海前胡、薺菜、東風菜等春季應季蔬菜拌入麵糊後，倒入抹油的平底鍋中攤薄煎製而成。',
  },
  {
    id: 647,
    category: '전 [Jeon]',
    name: '부각',
    pronounce: 'Bugak',
    description:
      '식물성 식품에 찹쌀 풀을 발라서 말려 두었다가 필요할 때 기름에 튀겨 먹는 음식이다. 겨울철 저장 식품으로 풋고추, 김, 깻잎, 두릅, 감자, 다시마, 우엉 잎 등 종류가 다양하다.',
    name_en: 'Vegetable and Seaweed Chips',
    description_en:
      'This refers to a variety of deep-fried vegetables coated with glutinous rice paste and dried for preservation.A food that is prepared for winter, bugak can be made with many different vegetables, including green pepper, seaweed, perilla leaves, fatsia shoots, kelp, and burdock leaves, among others.',
    name_ja: '海藻・野菜のパリパリ揚げ',
    description_ja:
      '植物性食品にもち米の糊を塗って乾燥させておき、必要なときに揚げて食べる料理。冬の保存食品で、青唐辛子やのり、エゴマの葉、タラの芽、じゃがいも、昆布、ごぼうの葉など色々な種類がある。',
    name_zh: '干炸片',
    description_zh:
      '在植物性食材上涂抹糯米浆糊后晾干，等到需要时再拿出来油炸的一种食物。种类有很多种，尖椒、海苔、紫苏叶、楤木芽、土豆、海带 片、牛蒡叶等，主要是储存起来以备冬季食用。',
    name_zh2: '乾炸片',
    description_zh2:
      '乾炸片是在海苔或辣椒、紫蘇葉等食材上塗抹糯米漿後晾乾，等到需要時拿出來油炸後食用的特色小菜。',
  },
  {
    id: 648,
    category: '전 [Jeon]',
    name: '부추전',
    pronounce: 'Buchujeon',
    description:
      '밀가루 반죽에 부추와 채 썬 당근, 풋고추 등을 넣은 뒤 프라이팬에 둥글납작하게 지져 초간장에 찍어 먹는다. 부추는 피를 맑게 해주고 몸을 따뜻하게 하는 식품이다.',
    name_en: 'Chive Pancake',
    description_en:
      'To prepare this dish, chive, julienned carrot, and green pepper are mixed with flour and pan-fried in a flat, round, pancake-like shape. The pancake is then served with a vinegar-based soy sauce. Chive is known as a vegetable that cleanses and warms the body.',
    name_ja: 'にらのチヂミ',
    description_ja:
      '小麦粉の生地ににらと千切りしたにんじん、青唐辛子などを加え、フライパンで丸く平らに焼き、酢醤油につけて食べる。にらは血液をきれいにし、体を温める食材とされる。',
    name_zh: '韭菜煎饼',
    description_zh:
      '面粉加水调成糊状，加入韭菜和切 成丝的胡萝卜、青椒等搅拌均匀后，倒入平底 锅中煎成圆饼状，蘸醋酱油吃即可。韭菜具有 清血、暖身的效果。',
    name_zh2: '韭菜煎餅',
    description_zh2:
      '麵糊裡放入切好的韭菜和胡蘿蔔絲、青椒等，然後用平底鍋煎成圓餅沾醋醬油吃即可。韭菜具有淨化血液和暖身的功效。',
  },
  {
    id: 649,
    category: '전 [Jeon]',
    name: '빈대떡',
    pronounce: 'Bindaetteok',
    description:
      '명절이나 잔칫상에 빠지지 않는 음식으로 녹두부침, 빈자떡이라고도 한다. 물에 불려 껍질을 벗긴 녹두를 맷돌에 갈아 여러 가지 채소를 넣고 부친 전이다.',
    name_en: 'Mung Bean Pancake',
    description_en:
      'This is one of the mandatory dishes on traditional holidays or special festive occasions. Also called nokdujijim or binjatteok, bingdaetteok is made by peeling and soaking mung beans, grinding them, and then pan-frying withvarious vegetables.',
    name_ja: 'ピンデトク',
    description_ja:
      '祝日や祝宴の膳に欠かせない料理で、「緑豆チヂミ」「ピンジャトク」とも呼ばれる。水にふやかし、皮をむいた緑豆を石臼で挽き、色々な野菜を入れて焼いたチヂミ。',
    name_zh: '绿豆煎饼',
    description_zh:
      '绿豆煎饼是韩国人过年过节和喜庆家宴上不可或缺的食物，先将绿豆泡水去皮，然后用石磨磨成浆，再放入各种蔬菜做成煎 饼。',
    name_zh2: '綠豆煎餅',
    description_zh2:
      '綠豆用水泡發後磨成漿，然後加入各種輔食材煎製而成。綠豆煎餅是每逢各大節日與慶宴常見於餐桌的代表性節慶飲食，又稱「綠豆煎」、「綠豆煎糕」。',
  },
  {
    id: 650,
    category: '전 [Jeon]',
    name: '빙떡',
    pronounce: 'Bingtteok',
    description:
      '고운 메밀가루 반죽을 기름을 두른 번철이나 프라이팬 따위에 얇게 펴 놓고 가운데에 양념한 무채 소를 넣고 말아서 지진 떡이다. 제주도 향토 음식이며 담백한 맛이 특징이다.',
    name_en: 'Buckwheat Crepe Stuffed with Radish',
    description_en:
      'This crepe-like dish is made by thinly spreading and frying the batter made with finely ground buckwheat on an oiled pan or griddle, rolling it with julienned and seasoned radish as a filling. It is a local specialty of Jeju Island and has a clean taste.',
    name_ja: '千切り大根ナムル入りそば粉のクレープ巻き',
    description_ja:
      'そば粉の生地を油をひいた鉄板やフライパンなどに薄く広げる。その真ん中に味付けをした大根の千切りをのせ、巻いて焼いたもの。済州島の郷土料理で、さっぱりとした味が絶品。',
    name_zh: '荞麦萝卜糕',
    description_zh:
      '将细荞麦粉调成糊状，倒入涂了油的煎锅或平底锅中薄薄地摊开，在中间放上调味的萝卜丝作为馅料，卷起来煎制而成。是济州岛的当地美食，味道清淡鲜美。',
    name_zh2: '蕎麥蘿蔔糕',
    description_zh2:
      '將細蕎麥粉調成糊狀，倒入抹油的煎鍋或平底鍋中薄薄地攤開，在中間放上調味的蘿蔔絲為餡料，再捲起來煎製而成。是濟州島的鄉土飲食，味道清淡鮮美。',
  },
  {
    id: 651,
    category: '전 [Jeon]',
    name: '빙어튀김',
    pronounce: 'Bingeotwigim',
    description:
      '깨끗이 손질해 물기를 제거한 빙어에 밀가루와 달걀을 씌워서 기름에 튀긴 음식이다. 빙어 특유의 향긋하고 바삭한 식감이 일품이다.',
    name_en: 'Deep-fried Smelt',
    description_en:
      'Cleaned smelts egg-battered and deep-fried. The unique flavor of the smelts and the crispy texture are great.',
    name_ja: 'ワカサギの天ぷら',
    description_ja:
      'きれいに下ごしらえして水気を切ったワカサギに、小麦粉と溶き卵をつけて油で揚げたもの。ワカサギ特有の香りやサクッとした食感がクセになる。',
    name_zh: '炸西太公鱼',
    description_zh:
      '西太公鱼收拾干净，去除多余水分，裹上面粉和蛋液后油炸而成。西太公鱼特有的香醇和酥脆的口感堪称一绝。',
    name_zh2: '炸池沼公魚',
    description_zh2:
      '將池沼公魚收拾乾淨、擦乾水分，裹上麵粉和蛋液後油炸而成。池沼公魚特有的香醇和酥脆口感堪稱一流。',
  },
  {
    id: 652,
    category: '전 [Jeon]',
    name: '산천어튀김',
    pronounce: 'Sancheoneotwigim',
    description:
      '산천어는 물이 맑고 차가운 하천 최상류에 서식하는 민물고기이다. 담백한 맛이 나는 산천어에 튀김옷을 입혀 튀겨 만든 음식이다.',
    name_en: 'Deep-fried Masu Salmon',
    description_en:
      'The masu salmon is a freshwater fish inhabiting the clear and cold uppermost rivers. This dish is made by battering and deep-frying masu salmon, which tastes light.',
    name_ja: 'ヤマメの天ぷら',
    description_ja:
      'ヤマメは冷たくて澄んだ川の最上流に生息する淡水魚。さっぱりとした味わいのヤマメに衣をつけて揚げたもの。',
    name_zh: '炸山鳟鱼',
    description_zh:
      '山鳟鱼是一种淡水鱼，栖息在清凉河水的最上游。味道清淡的山鳟鱼裹上油炸粉后油炸即可。',
    name_zh2: '炸櫻鱒',
    description_zh2:
      '櫻鱒是一種淡水魚，棲息在河水潔淨清涼的最上游。這道料理是將味道清淡的櫻鱒裹上油炸粉後油炸而成。',
  },
  {
    id: 653,
    category: '전 [Jeon]',
    name: '삼색전',
    pronounce: 'Samsaekjeon',
    description:
      '채소, 고기, 해물 등의 재료를 이용해 세 가지 색깔 또는 맛이 나도록 지진 전이다. 흔히 버섯, 풋고추, 양파, 쪽파 등을 조합해 만든다. 고기나 흰살 생선 등을 넣기도 한다.',
    name_en: 'Tricolor Skewers',
    description_en:
      'A brochette of vegetables, meat, or seafood threaded onto a skewer and pan-fried, which has three colors or flavors. The brochette is often a combination of mushroom, green chili pepper, onion, or chives. Meat or white flesh fish can be used.',
    name_ja: '三色チヂミ',
    description_ja:
      '野菜、肉、魚介類などを材料にし、3つの色や味に仕上げたもの。主にきのこ、青唐辛子、玉ねぎ、わけぎなどを組み合わせて作る。肉や白身魚などを加えることもある。',
    name_zh: '三色煎饼',
    description_zh:
      '用蔬菜、肉、海鲜等食材煎成三种颜色和味道的煎饼。蘑菇、青辣椒、洋葱、小葱的组合最为常见。有时还会放入肉或白肉鱼等。',
    name_zh2: '三色煎餅',
    description_zh2:
      '用蔬菜、肉、海鮮等食材煎製而成，擁有三種顏色和味道的煎餅。蘑菇、青龍椒、洋蔥、黃蔥的組合最為常見，還會放入肉或白肉魚等。',
  },
  {
    id: 654,
    category: '전 [Jeon]',
    name: '새우튀김',
    pronounce: 'Saeutwigim',
    description:
      '새우 껍질을 까고 밀가루, 달걀, 빵가루를 묻혀서 기름에 튀긴 것이다. 남녀노소 모두에게 사랑받는 튀김음식이다.',
    name_en: 'Deep-fried Shrimp',
    description_en:
      'Peeled shrimp flour-coated, egg-battered, breaded, and deep-fried. This dish is widely loved by people of all ages and genders.',
    name_ja: '海老天ぷら',
    description_ja:
      'エビの皮をむき、小麦粉、卵、パン粉をまぶして油で揚げたもの。子どもから大人まで誰からも愛される天ぷら。',
    name_zh: '炸虾',
    description_zh:
      '鲜虾去皮，裹上面粉、蛋液、面包屑后，放入油锅中炸至酥脆即可，是男女老少都喜爱的油炸食品。',
    name_zh2: '炸蝦',
    description_zh2: '大蝦去皮，裹上面粉、雞蛋、麵包粉，放油鍋炸製即可，深受男女老少的喜愛。',
  },
  {
    id: 655,
    category: '전 [Jeon]',
    name: '생선전',
    pronounce: 'Saengseonjeon',
    description:
      '얇게 포를 뜬 생선에 소금, 후춧가루를 뿌려 재워둔 다음 밀가루와 계란 옷을 입힌 후 달궈진 팬에 기름을 두르고 부쳐낸다. 명태, 대구, 도미 등 흰 살 생선을 많이 이용한다.',
    name_en: 'Pan-fried Battered Fish-fillets',
    description_en:
      'This is made by seasoning slices of fish with salt and pepper and letting them sit for a while. The fish slices are then coated with flour, dipped in eggbatter, and pan-fried. It is usually made with white-flesh fish, such as pollack, cod, and seabream.',
    name_ja: '白身魚のチヂミ',
    description_ja:
      '薄くスライスした魚に塩と胡椒をまぶし、小麦粉と溶き卵をつけ、熱したフライパンに油をひいて焼く。スケトウダラやタラ、タイなど白身魚が多く使われる。',
    name_zh: '香煎鱼片',
    description_zh:
      '将鱼肉切成薄片，撒上少许盐和胡椒粉腌制一定时间，然后裹上面粉和鸡蛋，待热锅上油后放入锅里煎熟即可。鱼肉多使用明太鱼、鳕鱼、鲷鱼等肉质呈白色的鱼类。',
    name_zh2: '香煎魚片',
    description_zh2:
      '將薄魚片裡加入鹽和胡椒粉醃製片刻，熱鍋裡倒入食用油燒熱，醃製好的魚片沾上麵粉和雞蛋用油煎熟。一般用明太魚、鱈魚，鯛魚等白肉魚。',
  },
  {
    id: 656,
    category: '전 [Jeon]',
    name: '수수부꾸미',
    pronounce: 'Susubukkumi',
    description:
      '찰수수가루를 뜨거운 물로 반죽해 둥글납작하게 빚어 기름에 지지다가 팥소를 넣고 반달 모양으로 접어 지져 낸 토속 음식으로 고소하고 쫀득한 맛이 일품이다.',
    name_en: 'Pan-fried Millet Rice Cake',
    description_en:
      'For this dish, first make the dough by mixing glutinous sorghum powder with warm water. Next, fry flattened dough balls on a pan, add red bean filling, and fold to make create half-moon shapes. This local specialty is characterized by its savory taste and chewy texture.',
    name_ja: '焼ききび餅',
    description_ja:
      'もちきび粉を熱湯でこねて丸く平らに形成し、油で焼く。そこに小豆あんを入れて半月状に折り、再び焼いた郷土料理。香ばしくもちもちした食感が絶品である。',
    name_zh: '高粱煎糕',
    description_zh:
      '先在高粱面粉里加入一些开水和成面团，然后捏成圆圆扁扁的形状后，再放入烧热的平底锅中油煎，在上面放一些红豆馅儿后对叠成半月状继续煎熟即可。高粱煎糕是江原道的乡村饮食，味道很香又有嚼劲儿。',
    name_zh2: '高粱煎糕',
    description_zh2:
      '用熱水燙黏高粱粉末，做成圓餅後用油煎，然後放入紅豆餡捏成半月狀繼續煎熟，是口感勁道且香香的地方美食。',
  },
  {
    id: 657,
    category: '전 [Jeon]',
    name: '애호박전',
    pronounce: 'Aehobakjeon',
    description:
      '얇고 둥글게 썬 애호박에 소금 간을 한 뒤 밀가루와 달걀을 묻혀 식용유를 두른 프라이팬에 노릇노릇하게 지진다. 이때 풋고추, 홍고추, 쑥갓 등을 올려 모양을 낸다.',
    name_en: 'Pan-fried Battered Zuccinni',
    description_en:
      'For this dish, thinly sliced squash is seasoned with salt, coated with flour, and dippedinto beaten egg and pan-fried to a goldenbrown color. Garnish with green pepper, red pepper, and crown daisy.',
    name_ja: 'ズッキーニのチヂミ',
    description_ja:
      '薄く輪切りにしたエホバクに塩をふり、小麦粉と卵をつけて油をひいたフライパンで黄金色になるまで焼く。焼く際、青唐辛子、赤唐辛子、春菊などをのせて飾り付ける。',
    name_zh: '香煎西葫芦',
    description_zh:
      '西葫芦切片，用盐调味后，裹上面粉和蛋汁，在烧热的平底锅中倒入食用油，将西葫芦放进去煎至外皮焦黄。西葫芦上面放一些青椒、红椒、茼蒿叶等作装饰。',
    name_zh2: '香煎西葫蘆',
    description_zh2:
      '切成圓片的西葫蘆用鹽調味，然後沾上麵粉與雞蛋油煎，此時放入青椒、紅椒、茼蒿等弄出形狀。',
  },
  {
    id: 658,
    category: '전 [Jeon]',
    name: '야채튀김',
    pronounce: 'Yachaetwigim',
    description:
      '고구마, 양파, 당근, 깻잎 등의 채소를 도톰하게 채를 쳐서 밀가루 반죽에 묻혀 튀겨내는데, 간식으로 먹기 좋다.',
    name_en: 'Deep-fried Vegetables',
    description_en:
      'Julienned sweet potato, onion, carrot, perilla leaves, and other vegetables dipped in a flour batter and deep-fried. This food is a popular snack in Korea.',
    name_ja: '野菜天ぷら',
    description_ja:
      '厚切りしたさつまいも、玉ねぎ、人参、エゴマの葉などの野菜を小麦粉の衣液にからめて揚げたもの。おやつにもちょうどいい。',
    name_zh: '炸蔬菜',
    description_zh:
      '红薯、洋葱、胡萝卜、苏子叶等蔬菜切成粗丝，裹上面糊后放入油锅中炸至酥脆即可，很适合当零食食用。',
    name_zh2: '炸蔬菜',
    description_zh2:
      '將紅薯、洋蔥、胡蘿蔔、蘇子葉等蔬菜切成較粗的絲狀，裹上面糊炸製即可，適合做零食食用。',
  },
  {
    id: 659,
    category: '전 [Jeon]',
    name: '연근전',
    pronounce: 'Yeongeunjeon',
    description:
      '껍질 벗긴 연근을 끓는 물에 살짝 데쳐 물기를 없애고, 밀가루와 달걀 물을 묻혀 식용유를 두른 팬에 지진 전이다. 아삭아삭 씹히는 말이 일품이다.',
    name_en: 'Pan-fried Battered Lotus Roots',
    description_en:
      'Peeled, parboiled, and dried sliced lotus root flour-coated, egg-battered, and pan-fried in an oiled pan. The chewy texture of lotus root makes this dish fun to eat.',
    name_ja: 'れんこん天ぷら',
    description_ja:
      '皮をむいたれんこんを熱湯でさっと湯がき、水気を切った後、小麦粉と卵の衣液にくぐらせて食用油をひいたフライパンで焼いたもの。サクサクした食感がいい。',
    name_zh: '香煎莲藕',
    description_zh:
      '莲藕去皮，用开水焯一下，捞出沥干水分后，裹上面粉和蛋液，放入平底锅中油煎即可，清爽酥脆的味道令人百吃不腻。',
    name_zh2: '香煎蓮藕',
    description_zh2:
      '首先將蓮藕去皮，放入沸水中稍微焯一下，瀝幹水分後，裹上一層麵糊與蛋液，平底鍋中放油，煎製即可。酥脆的口感可謂一絕。',
  },
  {
    id: 660,
    category: '전 [Jeon]',
    name: '오징어튀김',
    pronounce: 'Ojingeotwigim',
    description:
      '오징어에 튀김옷을 입힌 뒤 기름에 바삭하게 튀겨낸 것이다. 겉은 바삭하고 속은 쫀득한 오징어의 식감이 특징이다. 생 오징어를 주로 하지만, 마른 오징어를 물에 불려 만들기도 한다.',
    name_en: 'Deep-fried Squid',
    description_en:
      'Flour-battered, deep-fried squid. Crisp outside and chewy inside, this deep-fried squid dish is made with fresh squid, but dried squid soaked in water may also be used.',
    name_ja: 'イカ天ぷら',
    description_ja:
      'イカを衣液につけて、油でさっと揚げたもの。外はサクっと、中はイカの歯ごたえがあるのが特徴。主に生のイカを使用するが、干しイカを水で戻して使用する場合もある。',
    name_zh: '炸鱿鱼',
    description_zh:
      '鱿鱼裹上面粉浆后油炸至酥脆即可。炸鱿鱼外焦里嫩，口感十分酥脆，材料主要使用生鱿鱼，有时也使用水浸泡过的干鱿鱼。',
    name_zh2: '炸魷魚',
    description_zh2:
      '把魷魚勾芡好，放入油鍋炸至酥脆。外酥裡嫩是這道菜的特點。在油炸魷魚時，主要使用新鮮的魷魚，但有時候也會使用發泡的幹魷魚。',
  },
  {
    id: 661,
    category: '전 [Jeon]',
    name: '육전',
    pronounce: 'Yukjeon',
    description:
      '혼례나 명절 때 먹는 음식으로 한입 크기로 자른 소고기를 소금과 후춧가루 등을 넣어 양념한 후 밀가루와 달걀을 입혀 식용유를 두른 프라이팬에 지져 낸다.',
    name_en: 'Pan-fried Battered Beef',
    description_en:
      'This is a dish prepared for special occasions such as wedding ceremonies and seasonal celebrations. Beef is cut into bite-sized pieces, seasoned with salt and pepper, coated with flour, and then dipped in beaten eggs and pan-fried.',
    name_ja: '牛肉のチヂミ',
    description_ja:
      '婚礼や年中行事の際に食べられる料理で、一口大に切った牛肉を塩胡椒で味付けし、小麦粉と卵をつけて油をひいたフライパンで焼く。',
    name_zh: '香煎肉片',
    description_zh:
      '婚礼或节日时吃的食物。将牛肉切成方便入口的大小后，加入盐和胡椒粉等调料，裹上面粉和蛋液，放入平底锅中煎熟即可。',
    name_zh2: '香煎肉片',
    description_zh2:
      '香煎肉片是辦婚禮或節日時常吃的美食。把一口大小的牛肉用食鹽和胡椒粉進行醃製，然後裹上麵粉和雞蛋用油煎熟。',
  },
  {
    id: 662,
    category: '전 [Jeon]',
    name: '장떡',
    pronounce: 'Jangtteok',
    description:
      '고추장을 탄 물에 밀가루를 풀고 미나리 등의 나물을 넣어서 기름을 두른 번철에 부친 부침개이다. 부추, 깻잎, 고추 등을 넣기도 한다.',
    name_en: 'Chili Pepper Paste and Vegetable Pancake',
    description_en:
      'A flour batter seasoned with gochujang (red chili paste), mixed with water parsley and other vegetables, and fried on an oiled griddle. Chives, perilla leaves, or chili peppers can be mixed into the batter.',
    name_ja: 'コチュジャン入りチヂミ',
    description_ja:
      'コチュジャンを溶いた水に、小麦粉やセリなどの野菜を加え、油をひいた鉄板で焼いたもの。ニラやエゴマの葉、唐辛子などを加えることもある。',
    name_zh: '酱菜煎饼',
    description_zh:
      '将加了辣椒酱的水中放入面粉调成糊状后，放入水芹等野菜，在涂了油的煎锅中煎制。有时也会拌入韭菜、苏子叶、辣椒等。',
    name_zh2: '醬餅',
    description_zh2:
      '將辣椒醬和麵粉加水調成糊狀，拌入水芹菜等蔬菜後，在抹油的煎鍋上煎製而成。也可拌入韭菜、紫蘇葉、辣椒等。',
  },
  {
    id: 663,
    category: '전 [Jeon]',
    name: '추어튀김',
    pronounce: 'Chueotwigim',
    description:
      '미꾸라지에 전분과 달걀을 씌워서 기름에 바삭하게 튀긴 음식이다. 바삭한 식감에 고소한 맛이 난다. 청양고추를 다져 넣어 매콤하게 먹기도 한다.',
    name_en: 'Deep-fried Loach',
    description_en:
      'Loaches battered with starch and eggs and deep-fried. This dish is crispy and savory. Chopped Cheongyang chili pepper can be mixed into the batter to give a spicy flavor to the dish.',
    name_ja: 'どじょうの天ぷら',
    description_ja:
      'どじょうにデンプンと溶き卵をつけて油で揚げたもので、サクッとした食感と香ばしい味がクセになる。激辛唐辛子のみじん切りを入れて辛めに仕上げる場合もある。',
    name_zh: '炸泥鳅',
    description_zh:
      '将泥鳅裹上淀粉和蛋液，炸至酥脆。口感香脆香醇。可根据个人喜好，放入剁碎的青阳辣椒，增添辣味。',
    name_zh2: '炸泥鰍',
    description_zh2:
      '將泥鰍裹上澱粉和蛋液，炸至酥脆而成。口感香脆香醇。可根據喜好放入剁碎的青陽辣椒，增添辣味。',
  },
  {
    id: 664,
    category: '전 [Jeon]',
    name: '파래전',
    pronounce: 'Paraejeon',
    description:
      '깨끗하게 씻은 파래를 밀가루 반죽에 섞고 소금으로 간을 해서 부친 전이다. 향긋한 파래향이 매력적이며, 기호에 따라 새우나 고추를 넣어 부치기도 한다.',
    name_en: 'Green Laver Pancake',
    description_en:
      'Cleaned green laver mixed into a flour batter, seasoned with salt, and pan-fried. The fragrance of green laver tends to stimulate the appetite. Shrimp, green pepper, and other ingredients may also be added according to one’s taste.',
    name_ja: '青海苔のチヂミ',
    description_ja:
      'きれいに洗った青海苔を小麦粉の生地とまぜて、塩で味を調えて焼いたチヂミ。青海苔の香りがたち、好みによりエビや唐辛子を加えて焼く場合もある。',
    name_zh: '海青菜煎饼',
    description_zh:
      '海青菜洗净倒入面糊中搅拌，以盐调味后用油煎即可。清香的海青菜味道十分鲜香，也可根据喜好加入虾或辣椒。',
    name_zh2: '海青菜煎餅',
    description_zh2:
      '首先將海青菜洗淨，和上面糊，用鹽調味，煎製而成。海青菜的清香味獨具魅力，也可根據個人的喜好加入大蝦或辣椒煎製。',
  },
  {
    id: 665,
    category: '전 [Jeon]',
    name: '파전',
    pronounce: 'Pajeon',
    description:
      '막걸리와 잘 어울리며 연한 쪽파를 주재료로 만든 전으로 밀가루 반죽에 길쭉길쭉하게 썬 파를 섞어 부친 다음 초간장에 찍어 먹는다.',
    name_en: 'Green Onion Pancake',
    description_en:
      'Tender young green onions mixed with a flour batter and pan-fried in oil. Served with a soy vinaigrette dipping sauce. It goes well with makgeolli, which is traditional Korean wine.',
    name_ja: 'ねぎのチヂミ',
    description_ja:
      '柔らかい細ねぎを主材料にしたチヂミ。マッコリとよく合う。小麦粉の生地に長めに切ったねぎを混ぜて油で焼き、酢醤油につけて食べる。',
    name_zh: '葱煎饼',
    description_zh:
      '与马格利酒堪称绝配的葱煎饼以小葱作为主料，把切成长段的小葱用香油调味后放入面糊里搅拌均匀，然后下锅煎成圆饼状，沾着加醋的酱汁吃。',
    name_zh2: '蔥煎餅',
    description_zh2:
      '在燒熱的鍋裡攤平麵糊後，整齊放上蔥煎製而成。也可在麵糊放入蔥後煎，沾加醋醬油食用。',
  },
  {
    id: 666,
    category: '전 [Jeon]',
    name: '해물부추전',
    pronounce: 'Haemulbuchujeon',
    description:
      '부추와 홍합, 조개, 오징어, 새우 등의 해물을 밀가루 반죽을 섞어 뜨겁게 달군 팬에 기름을 넉넉히 두르고 지진 전이다. 해물이 씹히는 맛이 좋으며, 술안주로도 많이 먹는다.',
    name_en: 'Seafood and Chive Pancake',
    description_en:
      'Chives mixed into a flour batter with mussel and clam meat, squid, shrimp, and any other available seafood and pan-fried in an oiled pan. This chewy, pan-fried seafood dish is also enjoyed as a side dish with alcoholic beverages.',
    name_ja: '海鮮とニラのチヂミ',
    description_ja:
      'ニラ、ムール貝、貝類、イカ、エビなどの魚介を小麦粉の生地にまぜて、熱したフライパンに油をたっぷりひいて焼いたチヂミ。魚介の歯ごたえがよく、酒のつまみとして好まれる。',
    name_zh: '海鲜韭菜煎饼',
    description_zh:
      '在烧热的锅中倒入食用油，将韭菜和贻贝、蛤蜊、鱿鱼、虾等海鲜用面糊中搅拌后，倒入锅中煎熟即可。丰富的海鲜材料不仅味道鲜美，而且有嚼头，是很好的下酒菜。',
    name_zh2: '海鮮韭菜煎餅',
    description_zh2:
      '首先將韭菜、貽貝、蛤蚌、魷魚、大蝦等海鮮和上面糊，然後將鍋燒熱，倒入足量的油煎製即可。海鮮在咀嚼時口感很棒，也經常作為下酒菜食用。',
  },
  {
    id: 667,
    category: '전 [Jeon]',
    name: '해물파전',
    pronounce: 'Haemulpajeon',
    description:
      '밀가루 반죽에 길쭉길쭉하게 썬 쪽파와 오징어, 새우, 조갯살, 굴 등을 넣어 부친 음식이다. 초간장을 곁들여 찍어 먹는다.',
    name_en: 'Seafood and Green Onion Pancake',
    description_en:
      'Julienned, tender young green onion stems folded into a flour batter with squid, clam meat, and oysters and pan-fried. Served with a soy vinaigrette dipping sauce.',
    name_ja: '海鮮とねぎのチヂミ',
    description_ja:
      '小麦粉の生地に、長めに切ったねぎやイカ、えび、貝、牡蠣などを混ぜて油で焼いた料理。酢醤油につけて食べる。',
    name_zh: '海鲜葱煎饼',
    description_zh: '面糊中加入小葱段、鱿鱼、虾、蛤蜊肉、牡蛎等煎制。沾着加醋的酱汁吃。',
    name_zh2: '海鮮蔥煎餅',
    description_zh2: '在麵糊上整齊的放上細蔥後，在其上面放上鱿魚、蝦、牡蠣等各種海鮮之後煎製而成。',
  },
  {
    id: 668,
    category: '전 [Jeon]',
    name: '호박전',
    pronounce: 'Hobakjeon',
    description:
      '애호박에 밀가루와 달걀 물을 입혀 부친 전이다. 만드는 방법이 간단하고 맛있어 특별한 날이 아니라도 자주 부쳐 먹는 전이다.',
    name_en: 'Pan-fried Battered Zucchini',
    description_en:
      'Zucchini sliced, flour-coated, and pan-fried in egg batter. This dish is simple to make and consumed as an everyday side dish with rice.',
    name_ja: 'ズッキーニのチヂミ',
    description_ja:
      'ズッキーニに小麦粉と水溶き卵で衣をつけて焼いたチヂミ。作り方が簡単で普段からよく食べられる。',
    name_zh: '香煎西葫芦',
    description_zh: '西葫芦裹上面粉和蛋液后用油煎熟即可。做法简单方便，是平时常吃的一道菜。',
    name_zh2: '香煎西葫蘆',
    description_zh2:
      '在西葫蘆上裹一層麵粉與雞蛋液煎製即可。由於製作方法簡單、美味，所以即便不逢年過節，平時也可以經常做著吃。',
  },
  {
    id: 669,
    category: '젓갈 [Jeotgal]',
    name: '가자미식해',
    pronounce: 'Gajamijsikhae',
    description:
      '가자미에 엿기름을 넣고 삭혀서 만든 함경도 고유의 저염 젓갈이다. 참가자미를 썰어 엿기름에 삭힌 후 좁쌀밥에 소금, 고춧가루 등의 양념을 넣어 발효시켜 만든다.',
    name_en: 'Salted and Fermented Flounder',
    description_en:
      'Low-salted flounders fermented with malt. This variation is a local delicacy of Hamgyeong Province. Right-eyed flounders are sliced and fermented with malt and then mixed with cooked millet and rice, salt, and red chili powder for fermentation purposes.',
    name_ja: '発酵カレイ',
    description_ja:
      'カレイを麦芽で発酵させて作る咸鏡道地域の低塩塩辛。ぶつ切りにしたカレイを麦芽で発酵させた後、粟飯、塩や粉唐辛子などの薬味を加えて熟成させる。',
    name_zh: '发酵鲽鱼酱',
    description_zh:
      '放入麦芽糖使鲽鱼发酵而成，是咸镜道特有的低盐鱼酱。将切好的鲽鱼用麦芽糖发酵后，加入小米饭、盐、辣椒粉等调料进行二次发酵。',
    name_zh2: '發酵鰈魚',
    description_zh2:
      '放入麥芽使鰈魚發酵，為咸鏡道的地方特色低鹽魚醬。用麥芽釀製切好的鰈魚，再加入小米飯、鹽、辣椒粉等調味料醃至再次發酵。',
  },
  {
    id: 670,
    category: '젓갈 [Jeotgal]',
    name: '갈치젓',
    pronounce: 'Galchijeot',
    description:
      '갈치 내장과 비늘을 제거해 통째로 소금에 절여 2~3개월 동안 숙성시킨 것으로, 김치 담그는데 주로 이용한다. 갈치의 내장만 따로 모아 염장 숙성한 갈치속젓은 밥반찬으로도 인기다.',
    name_en: 'Salted Cutlassfish',
    description_en:
      'Gutted and scaled cutlassfish cured in salt for two to three months. It is widely used as an ingredient for kimchi. Also, galchisokjeot (salted cutlass offal) is a popular side dish with rice.',
    name_ja: '太刀魚の塩辛',
    description_ja:
      '太刀魚の内臓と鱗を取り除いた後、丸ごと塩漬けにし2～3か月熟成させたもの。主にキムチを漬ける際に使う。太刀魚の内臓だけを別に集め、塩蔵熟成させた太刀魚の内臓の塩辛はご飯にぴったりなおかずとして人気。',
    name_zh: '带鱼酱',
    description_zh:
      '带鱼去掉内脏和鱼鳞，整条用盐腌渍2-3个月进行发酵即可，主要用于腌制辛奇。另有用带鱼内脏腌制而成的带鱼内脏酱是一道十分受欢迎的下饭小菜。',
    name_zh2: '帶魚醬',
    description_zh2:
      '帶魚清除內臟與魚鱗，然後把整條魚用鹽醃製2~3個月，主要用作辛奇調料。用帶魚內臟醃製的帶魚內臟醬是非常受人喜愛的下飯菜。',
  },
  {
    id: 671,
    category: '젓갈 [Jeotgal]',
    name: '꼴뚜기젓',
    pronounce: 'Kkolttugijeot',
    description:
      '꼴뚜기에 소금을 뿌려가며 켜켜이 항아리에 담아 2~3개월 정도 삭힌 젓갈로, 먹을 때 씻어서 고춧가루, 깨소금, 참기름 등을 넣어 무쳐 먹는다.',
    name_en: 'Salted Beka Squid',
    description_en:
      'Beka squid layered alternately with salt and fermented in an earthen pot for two to three months. Before serving, it is mixed with red chili powder, sesame seeds, and sesame oil.',
    name_ja: 'ベイカの塩辛',
    description_ja:
      'ベイカに塩をふり、層にして重ねて壷に入れて2～3か月ほど発酵させた塩辛。食べる時に洗い、粉唐辛子、ごま塩、ごま油などで和えて食べる。',
    name_zh: '墨鱼仔酱',
    description_zh:
      '墨鱼仔撒上盐，一层一层叠放入坛子里腌制两到三个月，食用时，加入辣椒粉、芝麻盐、香油等调料搅拌即可。',
    name_zh2: '墨魚仔醬',
    description_zh2:
      '墨魚仔上撒點鹽，層層放入缸裡醃製 2~3個月，吃的時候加入辣椒粉、芝麻鹽、香油等拌勻即可。',
  },
  {
    id: 672,
    category: '젓갈 [Jeotgal]',
    name: '낙지젓',
    pronounce: 'Nakjijeot',
    description:
      '젓갈은 해산물을 소금에 절여 삭힌 것으로, 조리 시 양념으로 이용하기도 하고, 그 자체가 반찬이 되기도 한다. 낙지젓은 낙지를 소금에 절여 담근 젓갈로 쫄깃한 맛이 난다.',
    name_en: 'Salted Octopus',
    description_en:
      'Seafood cured in salt that is often used as a seasoning or side dish. Salted octopus is popular for its chewy texture.',
    name_ja: 'テナガダコの塩辛',
    description_ja:
      '塩辛は魚介類を塩につけて発酵させたもの。調理の際に調味料として使われることもあるが、そのままでも一品になる。テナガダコの塩辛はテナガダコを塩漬けした塩辛で、歯ごたえがある。',
    name_zh: '章鱼酱',
    description_zh:
      '鱼酱是将海鲜用盐腌渍发酵而成，可在做菜时作为调料使用，也可作为小菜。章鱼酱是将章鱼用盐腌渍的鱼酱，味道清香，口感滑嫩。',
    name_zh2: '章魚醬',
    description_zh2:
      '將海鮮用鹽醃製、發酵，便成為海鮮醬。海鮮醬既可以用於烹飪時的佐料，其本身也是一種小菜。章魚醬是用章魚放鹽醃製而成的，口感彈力十足。',
  },
  {
    id: 673,
    category: '젓갈 [Jeotgal]',
    name: '멸치젓',
    pronounce: 'Myeolchijeot',
    description:
      '멸치를 소금에 절여 숙성시킨 젓갈이다. 멸치 몸체를 썰어 갖은 양념에 무쳐 반찬으로 먹거나 즙액을 걸러 물을 넣고 끓여 식혀서 액젓을 만들어 김치를 담글 때 넣는다.',
    name_en: 'Salted Anchovies',
    description_en:
      'Salted and fermented anchovies. The anchovies are seasoned with spices and served as a side dish, while the extract is mixed with water and boiled to make a refreshing liquid that is used to make kimchi.',
    name_ja: 'カタクチイワシの塩辛',
    description_ja:
      'カタクチイワシを塩漬けにし、2～3カ月熟成させた塩辛。薬味で和えておかずにしたり、キムチを漬けるときに加えたりする。',
    name_zh: '鳀鱼酱',
    description_zh:
      '将鳀鱼盐渍2-3个月进行发酵而成，可将鳀鱼切成小段拌入调味酱佐餐用，或将过滤的汁液加水煮沸后进行冷却，在制作辛奇时使用。',
    name_zh2: '鳀魚醬',
    description_zh2:
      '鳀魚醬是將鳀魚鹽漬發酵而成的魚蝦醬。拌入調味醬當小菜食用，或加水煮成魚汁並冷卻後當作醃辛奇調味料使用。',
  },
  {
    id: 674,
    category: '젓갈 [Jeotgal]',
    name: '명란젓',
    pronounce: 'Myeongnanjeot',
    description:
      '명태의 알을 소금에 절여 담근 젓갈이다. 참기름과 파를 넣고 무쳐먹기도 하고, 찌개나, 달걀찜에도 넣어 먹는 등 다양한 방법으로 먹는다.',
    name_en: 'Salted Pollack Roe',
    description_en:
      'Fresh pollack roe cured in salt and mixed with sesame oil and chopped green onion. It is also boiled in stews, mixed with beaten eggs, and used in other types of dishes.',
    name_ja: '明太子の塩辛',
    description_ja:
      '明太子を塩に漬けた塩辛。ごま油とねぎを加えて和えたり、チゲや茶わん蒸しにも入れて食べるなど、様々な方法で食べる。',
    name_zh: '明太鱼子酱',
    description_zh:
      '将明太鱼子用盐腌渍而成，可加入香油和葱搅拌，也可在做各种炖菜和鸡蛋羹时用来提味增鲜等做法非常多样。',
    name_zh2: '明太魚子醬',
    description_zh2:
      '將明太魚子用鹽醃製一下即為明太魚子醬。食用方法多種多樣，既可以用香油與蔥涼拌，也可以在燉湯、蒸雞蛋糕時放上一些。',
  },
  {
    id: 675,
    category: '젓갈 [Jeotgal]',
    name: '명태식해',
    pronounce: 'Myeongtaesikhae',
    description:
      '식해는 어패류에 소금, 곡식으로 지은 밥, 고춧가루, 무 등을 넣고 버무려 삭힌 음식이다. 꾸덕꾸덕하게 말린 명태에 좁쌀 밥이나 찰밥, 소금, 고춧가루 등을 넣어 삭힌 것으로 강원도와 함경도의 향토음식이다.',
    name_en: 'Salted and Fermented Pollack',
    description_en:
      'Half-dried fresh pollack mixed and fermented with cooked millet or glutinous rice and red chili powder. Sikhae refers to a food made by mixing seafood with salt, cooked grains, red chili powder, and radish for fermentation purposes. This variation is a local delicacy of Gangwon and Hamgyeong provinces.',
    name_ja: 'スケトウダラの塩辛',
    description_ja:
      '魚介類に塩、穀物で炊いた米、粉唐辛子、大根などを加えて和えて発酵させた料理の一種。スケトウダラの塩辛は、干しスケトウダラと粟飯や炊いたもち米、塩、粉唐辛子などを発酵させたもので、カンウォンドとハムギョンドの郷土料理。',
    name_zh: '发酵明太鱼酱',
    description_zh:
      '发酵明太鱼酱(食醢)是将鱼贝类和盐、米饭、辣椒粉、萝卜等一起搅拌后发酵而成。 晒干的明太鱼，加上小米饭或糯米饭、盐、辣椒粉等材料一起放入坛子里进行发酵即可，是江原道和咸镜道地区的地方特色美食。',
    name_zh2: '發酵明太魚醬',
    description_zh2:
      '在魚貝類中放入鹽、穀物飯、辣椒粉、蘿蔔等發酵，即為魚醬。在幹明太魚中放入小米飯、鹽、辣椒粉等材料發酵，是江原道與咸鏡道的鄉土美食。',
  },
  {
    id: 676,
    category: '젓갈 [Jeotgal]',
    name: '새우젓',
    pronounce: 'Saeujeot',
    description:
      '생새우에 소금을 뿌려 담근 젓갈이다. 생산시기에 따라 오젓, 육젓, 추젓 등으로 나뉜다. 김치를 담글 때, 찌개의 간을 맞출 때, 돼지고기 수육을 먹을 때 주로 사용한다.',
    name_en: 'Salted Shrimp',
    description_en:
      'Salted and fermented small white shrimp used for making kimchi, seasoning stews (jjigae), or served as a dipping sauce for boiled pork. There are several types of Saeujeot, depending upon when the shrimp is harvested, such as ojeot (spring), yukjeot (June), and chujeot (autumn), among others.',
    name_ja: 'アミの塩辛',
    description_ja:
      'アミを塩漬けにして作った塩辛。生産時期によって5月、6月、秋にとったアミの塩辛などに分けられる。キムチを漬けるときやチゲの味付けに使ったり、ゆで豚を食べるときなどに添えられたりする。',
    name_zh: '虾酱',
    description_zh:
      '用白色小虾盐渍而成，按小虾的捕获时期，分为五虾酱、六虾酱、秋虾酱等。主要用于做辛奇，或炖汤时调味以及吃熟猪肉时的蘸料。道和咸镜道地区的地方特色美食。',
    name_zh2: '蝦醬',
    description_zh2:
      '用白色小蝦鹽漬而成。特點在於味道鹹，醃製辛奇或煮醬湯作為調味料使用，或拌入調味醬當小菜食用。',
  },
  {
    id: 677,
    category: '젓갈 [Jeotgal]',
    name: '어리굴젓',
    pronounce: 'Eoriguljeot',
    description:
      '생굴에 소금과 고춧가루를 버무려 담근 젓갈로, 따뜻한 흰쌀밥과 잘 어울린다. 고춧가루를 사용한 매운 양념으로 버무리는 것이 일반 굴젓과 다른 점이다.',
    name_en: 'Spicy Salted Oysters',
    description_en:
      'Fresh oysters cured in salt and red chili pepper. Spicy salted oysters are a perfect match for rice. Oysters are salted with or without red chili powder, and non-spicy salted oyster is called “gulgeot.”',
    name_ja: '味付けカキの塩辛',
    description_ja:
      '生ガキと粉唐辛子を和えて漬けた塩辛。熱々のご飯とよく合う。粉唐辛子を使用した辛いたれで和えるのが一般的なカキの塩辛と違う点。',
    name_zh: '辣牡蛎酱',
    description_zh:
      '生牡蛎中加入盐和辣椒粉一起搅拌后发酵而成，最适合搭配热米饭吃。辣牡蛎酱不同于一般的牡蛎酱，使用以辣椒粉调制的调味酱，味道十分鲜辣。',
    name_zh2: '辣牡蠣醬',
    description_zh2:
      '在生牡蠣中加入鹽、辣椒粉進行發酵，適合與熱乎乎的白米飯搭配食用。拌入辣椒醬是它區別於普通牡蠣醬的特點。',
  },
  {
    id: 678,
    category: '젓갈 [Jeotgal]',
    name: '연어장',
    pronounce: 'Yeoneojang',
    description:
      '대파, 다시마, 양파, 후추, 설탕 등을 간장과 맛술로 끓인 뒤 충분히 식혀 손질한 생연어에 붓는다. 냉장고에서 3~7시간 저온 숙성해 먹는 음식이다.',
    name_en: 'Soy Sauce-marinated Salmon',
    description_en:
      'This dish is made by boiling soy sauce and cooking wine with green onion, kelp, onion, pepper, and sugar to make brine and pouring the cooled brine over cleaned raw salmon. It is marinated and aged in the refrigerator for three to seven hours until ready to be served.',
    name_ja: 'サーモンの醤油漬け',
    description_ja:
      '長ネギ、昆布、玉ねぎ、こしょう、砂糖などに醤油と料理酒を加えて煮たものを、冷まして下処理したサーモンに注ぐ。冷蔵庫で3～7時間じっくりと低温熟成させて食べる。',
    name_zh: '三文鱼酱',
    description_zh:
      '将大葱、海带、洋葱、胡椒、白糖等食材用酱油和料酒熬煮，放凉后倒入收拾干净的生三文鱼中。在冰箱里低温发酵3~7个小时后即可食用。',
    name_zh2: '醬生鮭魚',
    description_zh2:
      '用醬油和料酒熬煮大蔥、昆布、洋蔥、胡椒、糖等食材，放涼後倒入收拾乾淨的生鮭魚。在冰箱放置3～7個小時，低溫發酵後食用。',
  },
  {
    id: 679,
    category: '젓갈 [Jeotgal]',
    name: '오징어젓',
    pronounce: 'Ojingeojeot',
    description:
      '오징어를 가늘게 썰어 소금에 절여 담근 젓갈이다. 짭짤하고 쫄깃한 맛이 나며, 가장 대중적인 젓갈이다.',
    name_en: 'Salted Squid',
    description_en:
      'Thinly sliced squid cured in salt. This salty, chewy squid is one of the most popular jeotgal (salted seafood) dishes.',
    name_ja: 'イカの塩辛',
    description_ja: 'イカを細長く切り、塩に漬けた塩辛。塩辛く歯ごたえがある。最も一般的な塩辛。',
    name_zh: '鱿鱼酱',
    description_zh:
      '将鱿鱼切成丝后用盐腌渍而成的鱼酱，味道咸中带鲜，口感柔韧，咀嚼感强，是最大众化的鱼酱。',
    name_zh2: '魷魚醬',
    description_zh2: '將魷魚切絲，用鹽醃制發酵。它的味道微咸而富有彈性，是最為親民的一種海鮮醬。',
  },
  {
    id: 680,
    category: '젓갈 [Jeotgal]',
    name: '전복장',
    pronounce: 'Jeonbokjang',
    description:
      '간장에 파, 마늘, 생강 등의 양념을 넣고 조린 전복 요리이다. 짭조름하고 부드러운 맛이 일품이며, 무더운 여름에 신선한 전복을 즐기기 위해 만든 음식이다.',
    name_en: 'Soy Sauce-marinated Abalone',
    description_en:
      'Abalones braised in a sauce made with soy sauce, green onion, garlic, and ginger. Cooked this way, fresh abalones that are savory and tender can be enjoyed in the hot summer.',
    name_ja: 'アワビの醤油煮',
    description_ja:
      'アワビに醤油、ねぎ、にんにく、生姜などを加えて煮付けた料理。塩辛くてやわらかな味わいが絶品で、暑い夏にも新鮮なアワビを楽しむことができる。',
    name_zh: '酱鲍鱼',
    description_zh:
      '在酱油中加入葱、蒜、姜等调料炖制的鲍鱼料理。微咸的味道和软嫩的口感堪称一绝，可在炎热的夏天享用新鲜的鲍鱼。',
    name_zh2: '醬生鮑魚',
    description_zh2:
      '在醬油中加入蔥、大蒜、生薑等食材，和鮑魚一起煮。微鹹的味道和軟嫩的口感堪稱一絕，在炎炎夏日也能享用新鮮的鮑魚。',
  },
  {
    id: 681,
    category: '젓갈 [Jeotgal]',
    name: '젓갈',
    pronounce: 'Jeotgal',
    description:
      '해산물을 소금에 절여 삭혀 양념 또는 반찬으로 이용된다. 명란젓과 오징어젓갈, 굴젓은 한국의 대표적인 젓갈 반찬이다.',
    name_en: 'Salted Seafood',
    description_en:
      'Jeotgal refers to salted and fermented meat, roe, or entrails of fish and shellfish. The three most popular jeotgal dishes in Korea are: myeongranjeot (pollackroe cured in salt with care taken not to puncture the sacks), ojingeojeot (sliced squidcured in salt and seasoned in hot spices), and guljeot (salted and seasoned fresh oysters).',
    name_ja: '塩辛',
    description_ja:
      'ミョンナンチョッ(辛子明太子)、オジンオチョッ(イカの塩辛)、クルチョッ(牡蠣の塩辛)などに代表されるチョッカルは、テンジャン、カンジャン、コチュジャン、キムチと共に韓国の5大発酵食品に数えられ、広く親しまれている。',
    name_zh: '鱼虾酱',
    description_zh:
      '将海鲜用盐腌渍以后制成调味酱或佐餐的小菜。明太鱼籽酱，鱿鱼酱以及牡蛎酱是韩国最具代表性的佐餐用鱼虾酱。',
    name_zh2: '魚蝦醬',
    description_zh2:
      '將牡蠣、明太子、鱿魚等海鮮用食鹽醃漬發酵而成，當小菜吃或作為多種調味材料使用。',
  },
  {
    id: 682,
    category: '젓갈 [Jeotgal]',
    name: '조개젓',
    pronounce: 'Jogaejeot',
    description:
      '조개의 살만 발라 소금물에 씻어 물기를 뺀 후, 소금에 버무려 항아리에 담아 2주일 정도 삭힌다. 먹을 때 다진 풋고추, 고춧가루, 다진 파, 마늘, 깨소금을 넣어  무쳐 먹는다.',
    name_en: 'Salted Clam Meat',
    description_en:
      'Shucked clams washed in salt water, drained, and cured in salt in an earthen pot for two weeks. The fermented clam meat is mixed with minced green pepper, red chili powder, chopped green onion and garlic, and sesame seeds.',
    name_ja: '貝の塩辛',
    description_ja:
      '貝の身を塩水で洗い、水気を切った後、塩で和えて壷に入れて２週間ほど発酵させる。食べる際はみじん切りにした青唐辛子、粉唐辛子、みじん切りしたねぎ、にんにく、ごま塩で和えて食べる。',
    name_zh: '蛤蜊酱',
    description_zh:
      '蛤蜊去壳，将肉用盐水搓洗干净后沥干水分，加盐搅拌后放入坛子里腌制两个星期左右。食用时，加入剁碎的青辣椒、辣椒粉、葱末、蒜末、芝麻盐等调料搅拌均匀即可。',
    name_zh2: '蛤蜊醬',
    description_zh2:
      '把貝類的肉剝出來，用鹽水洗淨並瀝幹水分。跟鹽一起拌勻，放入缸裡醃製兩周左右。吃的時候放入青椒歲、辣椒粉、蔥花、蒜蓉、芝麻鹽拌勻即可。',
  },
  {
    id: 683,
    category: '젓갈 [Jeotgal]',
    name: '황석어젓',
    pronounce: 'Hwangseogeojeot',
    description:
      '황석어를 소금에 절여 담근 젓갈이다. 잘 숙성된 황석어젓은 다진 파, 마늘과 고춧가루 등 갖은 양념을 넣고 무쳐 밥반찬으로 먹거나, 김치를 담글 때 사용한다.',
    name_en: 'Salted Small Yellow Croaker',
    description_en:
      'Yellow croaker cured in salt. Well-fermented yellow croaker is often mixed with chopped green onion and garlic and red chili powder and served as a side dish or used in making kimchi.',
    name_ja: '金石魚の塩辛',
    description_ja:
      '金石魚を塩に漬けた塩辛。熟成させた金石魚の塩辛はみじん切りしたねぎ、にんにく、粉唐辛子などのたれと和えてご飯と一緒に食べたり、キムチを漬ける際に使用する。',
    name_zh: '小黄花鱼酱',
    description_zh:
      '将小黄花鱼用盐腌渍而成的鱼酱。发酵后的小黄花鱼酱加入葱末、蒜、辣椒粉等各种调料搅拌后，可作为配饭的小菜，也可作为腌制辛奇的配料。',
    name_zh2: '小黃花魚醬',
    description_zh2:
      '在小黃花魚中加入鹽發酵而成的海鮮醬。在發酵好的小黃花魚醬中加入蔥末、蒜末、辣椒粉等各種佐料涼拌，既可以作為下飯菜食用，在製作辛奇時也能用的到。',
  },
  {
    id: 684,
    category: '회 [Hoe]',
    name: '강어회',
    pronounce: 'Gangeohoe',
    description:
      '향어회라고도 한다. 민물고기인 향어는 살이 많고 육질이 단단하며 비린내가 나지 않는다. 향어 회를 깻잎 위에 담아 초고추장이나 겨자 장을 찍어 먹는다.',
    name_en: 'Sliced Raw Leather Carp',
    description_en:
      'Also referred to as hyangeohoe, leather carp is a freshwater fish known for its firm flesh and lack of fishy smell. For this dish, sliced raw leather carp is served with a vinegar-based gochujang wrapped in perilla leaves or a mustard dipping sauce.',
    name_ja: 'カガミゴイの刺身',
    description_ja:
      '淡水魚であるカガミゴイは、身が多く肉質がしっかりとしていて、臭みがない。刺身をエゴマの葉の上にのせ、酢コチュジャンや辛子ソースをつけて食べる。',
    name_zh: '德国镜鲤生鱼片',
    description_zh:
      '又叫香鱼生鱼片。香鱼是一种河鱼，肉质肥美，没有腥味。生鱼片可蘸取辣椒酱或芥末酱，用苏子叶包着吃。',
    name_zh2: '德國鏡鯉生魚片',
    description_zh2:
      '又稱香魚生魚片。香魚是淡水魚，肉質緊實且沒有腥味。用蘇子葉把香魚生魚片包起來，然後沾醋辣醬或芥末醬吃非常美味。',
  },
  {
    id: 685,
    category: '회 [Hoe]',
    name: '과메기',
    pronounce: 'Gwamegi',
    description:
      '겨울에 청어나 꽁치를 얼렸다 녹였다 반복하며 그늘에서 말린 것을 ‘과메기’라 한다. 뼈를 바르고 껍질을 벗긴 과메기에 생미역, 마늘, 풋고추, 초고추장을 곁들인다.',
    name_en: 'Half-dried Saury',
    description_en:
      'Gwamegi refers to saury half-dried through repeated cycles of freezing and thawing in a dark space. For this dish, remove the bones and skin the gwamegi and serve with fresh brown seaweed, garlic, green pepper, and a vinegar-based gochujang.',
    name_ja: '半干しさんま',
    description_ja:
      '冬にニシンやサンマを凍らせては溶かすの作業を繰り返しながら陰干ししたものを「クァメギ」と言う。骨を抜いて皮をむいた半干しさんまに生わかめ、にんにく、青唐辛子、酢コチュジャンを添えて食べる。',
    name_zh: '秋刀鱼干',
    description_zh:
      '冬天将秋刀鱼反复冷冻和解冻，在背光的阴凉处晒干，制成秋刀鱼干，也可使用青鱼。去骨去皮后，配上生海带、大蒜、青椒和酸辣酱一起吃即可。',
    name_zh2: '秋刀魚幹',
    description_zh2:
      '冬天在陰涼處晾乾青魚和秋刀魚，使之經歷反復的凍與解凍的過程，以這種方式加工的秋刀魚叫做「秋刀魚幹」。吃的時候剔除魚骨和魚皮，加入鮮海帶、蒜、辣椒、醋辣醬拌勻。',
  },
  {
    id: 686,
    category: '회 [Hoe]',
    name: '광어회',
    pronounce: 'Gwangeohoe',
    description:
      '뼈와 껍질을 제외한 광어 살을 비스듬히 얇게 저며 초고추장 등을 찍어 먹는 회의 종류다. 광어는 발육에 필요한 라이신이 많아 어린이에게 좋고 지방질이 적어 소화가 잘된다.',
    name_en: 'Sliced Raw Flatfish',
    description_en:
      'This dish is made with thinly-sliced flatfish, with the bones and skin removed, and served with gochujang mixed with vinegar. Flatfish is good for children as it is rich in lysine, an essential nutrient for growth, and is easy to digest due to its lean flesh.',
    name_ja: 'ヒラメの刺身',
    description_ja:
      '骨と皮をとったヒラメの身を斜めに薄くスライスし、酢コチュジャンなどをつけて食べる。ヒラメは発育に必要なリジンが豊富に含まれており、子どもの成長を助けるほか、脂肪が少ないため消化に良い。',
    name_zh: '左口鱼生鱼片',
    description_zh:
      '生鱼片的一种，将比目鱼除去鱼骨和鱼皮，把鱼肉斜切成薄片，蘸酸辣酱吃。比目鱼富含人体发育所需的赖氨酸，对儿童的发育很有益，而且还是低脂肪，有助于消 化。',
    name_zh2: '左口魚生魚片',
    description_zh2:
      '左口魚生魚片是將新鮮的左口魚肉切成片，沾在酸辣醬、山葵醬吃或用調味大醬包生菜吃的生魚片。',
  },
  {
    id: 687,
    category: '회 [Hoe]',
    name: '두부삼합',
    pronounce: 'Dubusamhap',
    description:
      '고소한 초당 모두부에 잘 삶은 돼지고기와 묵은지를 얹어 쌈을 싸서 먹는다. 묵은지는 오래된 김장김치로 저온에서 숙성되었기에 시지 않고 깊은 맛이 난다.',
    name_en: 'Bean Curd, Pork, and Aged KimchiCombo',
    description_en:
      'This dish is nutty Chodang Soft Bean Curd, boiled pork, and aged kimchi served with wraps. Aged kimchi, which is fermented at low temperatures, has a deep flavor without the typical sour tinge.',
    name_ja: '豆腐のサムハプ',
    description_ja:
      '香ばしいチョダン豆腐に、茹でた豚肉と熟成キムチをのせて野菜で巻いて食べる。熟成キムチは低温熟成しているため、酸味はなく、深みのある味が特徴的。',
    name_zh: '豆腐三合',
    description_zh:
      '将水煮的猪肉和陈年辛奇放在豆腐块上包起来吃。陈年的越冬辛奇是在低温下发酵的，口感醇厚，毫无酸涩的味道。',
    name_zh2: '豆腐三合',
    description_zh2:
      '香嫩的草堂塊豆腐加上煮得剛剛好的豬肉和酸辛奇包著吃，吃過一次就會念念不忘。酸辛奇是在辛奇冰箱裡長時間儲存的辛奇，所以不是特別酸，能品嘗出醇厚的滋味。',
  },
  {
    id: 688,
    category: '회 [Hoe]',
    name: '멸치회',
    pronounce: 'Myeolchihoe',
    description:
      '생멸치의 머리와 내장을 손질해 회로 먹는다. 부드러운 식감에 고소하고 감칠맛이 난다. 봄과 가을이 제철이다.',
    name_en: 'Sliced Raw Anchovy',
    description_en:
      'Raw anchovies headed and gutted. The tender anchovies taste savory and flavorful. Anchovies are in season in spring and fall.',
    name_ja: 'カタクチイワシの刺身',
    description_ja:
      '生カタクチイワシの頭と腹わたを取って刺身として食べるもの。やわらかな食感と香ばしい風味がクセになる。春と秋が旬。',
    name_zh: '鳀鱼生鱼片',
    description_zh:
      '收拾好生鳀鱼的头和内脏后生吃即可。口感柔嫩，味道鲜香。春季和秋季的鳀鱼最为肥美。',
    name_zh2: '鯷魚生魚片',
    description_zh2: '摘除生鳀魚的頭和內臟後生吃。口感柔軟、味道香甜。春季和秋季的鳀魚最為肥美。',
  },
  {
    id: 689,
    category: '회 [Hoe]',
    name: '모둠회',
    pronounce: 'Modumhoe',
    description:
      '돔, 우럭, 도다리 등 여러 가지 생선회를 한 접시에 모아 담은 것이다. 초고추장 등을 곁들여 찍어 먹으며 색깔도 아름다울 뿐 아니라 맛도 다양하게 즐길 수 있다.',
    name_en: 'Assorted Sliced Raw Fish',
    description_en:
      'This is a platter of slices of various raw fish, including sea bream, rockfish, and plaice. It is served with gochujang mixed with vinegar, and not only looks colorful, but offers a chance to try a variety of fish.',
    name_ja: '刺身の盛り合わせ',
    description_ja:
      'タイやクロソイ、メイタガレイなど、色々な刺身を盛り合わせたもの。酢コチュジャンなどをつけて食べると、鮮やかな色彩だけでなく、バラエティに富んだ味も楽しむことができる。',
    name_zh: '生鱼片拼盘',
    description_zh:
      '鲷鱼、石斑鱼、木叶鲽鱼等各种生鱼片组成一个拼盘，可以蘸酸辣酱吃，不仅颜色赏心悦目，而且可以享受到各种不同的味道。',
    name_zh2: '生魚片拼盤',
    description_zh2:
      '生魚片拼盤是將各種生魚片和海參、海鞘、鮑魚等盛在一個盤子裡吃的生魚片料理。沾酸辣醬食用。',
  },
  {
    id: 690,
    category: '회 [Hoe]',
    name: '문어삼합',
    pronounce: 'Muneosamhap',
    description:
      '껍질을 벗겨 뜨거운 물에 살짝 데친 문어숙회와 삭힌 홍어, 삶은 돼지고기를 적당한 크기로 잘라 담백한 백김치나 알싸한 깻잎장아찌 등에 싸서 함께 먹는다.',
    name_en: 'Octopus, Skate, and Pork Combo',
    description_en:
      'Here, peeled and parboiled octopus, fermented skate, and boiled pork are sliced and served together with white kimchi and pickled perilla leaves for wrapping.',
    name_ja: 'タコのサムハプ',
    description_ja:
      '皮をむいて熱湯で湯掻いたタコと、発酵させたガンギエイ、茹でた豚肉を適当な大きさに切り、あっさりとした白キムチやピリッとしたエゴマの葉の漬物などで巻いて食べる。',
    name_zh: '章鱼三合',
    description_zh:
      '将章鱼去皮后用开水焯一下制成烫章鱼片，发酵的斑鳐和水煮的猪肉切成适当的大小，用清淡的白辛奇或微辣的苏子叶辛奇等将三者包起来吃。',
    name_zh2: '章魚三合',
    description_zh2:
      '將章魚去皮後用開水燙一下做成燙章魚片，發酵的斑鰩和水煮的豬肉切成適當的大小，跟爽口的白辛奇或香辣醃製蘇子葉包起來一起吃非常美味。',
  },
  {
    id: 691,
    category: '회 [Hoe]',
    name: '문어숙회',
    pronounce: 'Muneosukhoe',
    description:
      '문어를 끓는 물에 살짝 데쳐 어슷하게 썬 후, 초고추장이나 기름소금장에 찍어 먹는 음식이다. 보양식으로, 쫄깃하면서도 부드러운 맛이 별미다. 경상도의 잔치에 빠져서는 안 되는 음식이다.',
    name_en: 'Parboiled Octopus',
    description_en:
      'Giant Pacific octopus parboiled and sliced sideways. This dish is served with a dipping sauce made by mixing vinegar with gochujang (red chili paste) or adding salt to sesame oil.',
    name_ja: 'ゆでタコ',
    description_ja:
      'タコを熱湯でさっと湯がき、斜めに切って酢コチュジャンやごま油と塩のたれにつけて食べる。滋養食とされ、食感とやわらかい味が絶妙。キョンサンド地方の祝い事に欠かせない料理。',
    name_zh: '白灼章鱼',
    description_zh:
      '章鱼用开水焯一下后斜切成片，蘸醋辣椒酱或香油酱吃即可。章鱼营养滋补，口感柔韧滑嫩，味道十分鲜美。在庆尚道地区是宴席上必不可缺的一道菜。',
    name_zh2: '白灼章魚',
    description_zh2:
      '將章魚放入沸水中焯一下，微斜著切絲，蘸加醋辣椒醬或香油鹽醬食用。它是一種保健食品，味道富有彈性，又十分柔和，別具特色。它是慶尚道宴席上不可或缺的一道美食。',
  },
  {
    id: 692,
    category: '회 [Hoe]',
    name: '물회',
    pronounce: 'Mulhoe',
    description:
      '생선을 잘게 썰어 채소와 함께 양념한 고추장으로 버무린 뒤 물을 부어 시원한 국물까지 마시는 별미 음식으로 자리돔, 오징어, 소라, 한치, 전복 등이 사용된다.',
    name_en: 'Cold Raw Fish Soup',
    description_en:
      'In this dish, sliced fish and vegetables are mixed with seasoned spicy hot pepper paste and cold soup is added to it. Whitesaddled reeffish, squid, conch, cuttlefish, and abalone are commonly used.',
    name_ja: '刺身入り冷やしスープ',
    description_ja:
      '魚を細かく切って野菜と一緒に薬味を加えたコチュジャンで和え、そこに水を注いで冷たいスープまで食べるという珍味。スズメダイ、イカ、サザエ、ヤリイカ、アワビなどが使われる。',
    name_zh: '水拌生鱼片',
    description_zh:
      '鲜鱼切成细丝，放入一些蔬菜和调过味的辣椒酱搅拌均匀，然后倒入凉水，连鱼带汤一起吃。鲜鱼可使用斑鳍光鳃鱼、鱿鱼、海螺、小鱿鱼、鲍鱼等。',
    name_zh2: '水拌生魚片',
    description_zh2:
      '把魚類切成小塊，跟蔬菜和辣醬一起拌勻，然後倒入冰水食用。這是一道帶湯一起吃的特色料理，一般用斑鰭光鰓雀鯛、魷魚、海螺、小魷魚、鮑魚等。',
  },
  {
    id: 693,
    category: '회 [Hoe]',
    name: '민어회',
    pronounce: 'Mineohoe',
    description:
      '싱싱한 민어를 얇게 저며 썰어 먹는 회. 민어는 특히 여름이 제철인 생선으로 여름 보양식으로 사랑받는다.',
    name_en: 'Sliced Raw Croaker',
    description_en:
      'Thinly sliced fresh croaker. Reaching its prime in the summer, croaker is known to be an energy-boosting food.',
    name_ja: 'ニベの刺身',
    description_ja: '新鮮なニベを薄切りにした刺身。ニベは夏が旬で、夏の滋養食として好まれる。',
    name_zh: '黄姑鱼生鱼片',
    description_zh:
      '将新鲜的黃姑鱼切成薄片后生吃即可，尤其夏天的黃姑鱼最为肥美，是绝佳的夏季滋补美食。',
    name_zh2: '黃姑魚生魚片',
    description_zh2:
      '將鮮黃姑魚切成薄片即成黃姑魚生魚片。黃姑魚夏季多產，是非常受人喜愛的夏季滋補美食。',
  },
  {
    id: 694,
    category: '회 [Hoe]',
    name: '산낙지',
    pronounce: 'Sannakji',
    description:
      '살아있는 낙지를 잘게 썰어 기름장이나 초고추장에 찍어 먹는 음식으로 주로 소주와 함께 즐겨 먹는다.',
    name_en: 'Live Octopus',
    description_en:
      'Live octopus cut into bite-sized pieces and eaten with a dipping oil or vinegar-based gochujang (red chili paste) sauce. This is a popular side dish with soju, a clear, distilled Korean alcoholic beverage.',
    name_ja: 'テナガダコの刺身',
    description_ja:
      '生きたテナガダコを小さく切り、塩とごま油のたれや酢コチュジャンにつけて食べる。焼酎と相性がいい。',
    name_zh: '活章鱼',
    description_zh: '活章鱼剁成小块，蘸香油酱或醋辣椒酱吃即可，搭配韩国烧酒一起吃更加美味。',
    name_zh2: '活章魚',
    description_zh2: '把活章魚切成小塊，沾醋醬或辣椒醬吃。一般喝燒酒的時候當下酒菜。',
  },
  {
    id: 695,
    category: '회 [Hoe]',
    name: '생선회',
    pronounce: 'Saengseonhoe',
    description:
      '살아 있는 생선의 가시와 껍질을 발라낸 다음 살을 얇게 저며 초고추장이나 간장, 된장 등을 찍어 먹는다. 채소 쌈을 싸먹기도 한다.',
    name_en: 'Sliced Raw Fish',
    description_en:
      'Live, whole fish skinned, deboned, and thinly sliced. Dipped in soy sauce, doenjang (soybean paste) or gochujang (red chili paste), or wrapped in vegetable leafs.',
    name_ja: '刺身',
    description_ja:
      '生きている魚の骨と皮を取り除き、薄切りにした身を唐辛子酢味噌や醤油、テンジャンなどにつけて食べる。野菜で包んで食べてもおいしい。',
    name_zh: '生鱼片',
    description_zh:
      '将活鱼去皮去骨，鱼肉切成薄片，沾酸辣椒酱或酱油、大酱等食用，也可以用蔬菜包起来吃。',
    name_zh2: '生魚片',
    description_zh2: '將鮮活的魚肉切成斜片，沾酸辣醬或醬油或大醬等食用。還可用蔬菜包著吃。',
  },
  {
    id: 696,
    category: '회 [Hoe]',
    name: '송어회',
    pronounce: 'Songeohoe',
    description:
      '송어를 먹기 좋은 크기로 잘라 초고추장이나 고추냉이를 섞은 간장에 찍어 먹는 생선회이다. 붉은 빛깔의 송어는 달콤한 맛과 담백한 맛을 즐길 수 있다.',
    name_en: 'Sliced Raw Trout',
    description_en:
      'Fresh trout sliced into bite-sized pieces and served with a vinegar-based gochujang (red chili paste) sauce or soy sauce mixed with horseradish. Characterized by its red-orange color, trout has a sweet and clean taste.',
    name_ja: 'マスの刺身',
    description_ja:
      'マスを食べやすい大きさに切り、酢コチュジャンやわさびを溶いたカンジャンにつけて食べる。赤身を帯びたマスは、甘みと淡泊な味が楽しめる。',
    name_zh: '鳟鱼生鱼片',
    description_zh:
      '鳟鱼切成适合入口的大小，蘸醋辣椒酱或芥末酱油吃即可。鳟鱼肉呈鲜红色，味道鲜美甜淡。',
    name_zh2: '鱒魚生魚片',
    description_zh2:
      '把鮮鱒魚切成適當大小，沾加有醋辣醬或芥末的醬油蘸料吃。鱒魚色澤泛紅，帶有甘甜味，口感清淡。',
  },
  {
    id: 697,
    category: '회 [Hoe]',
    name: '오징어물회',
    pronounce: 'Ojingeomulhoe',
    description:
      '살아있는 오징어를 채 썰어 오이, 양파, 당근, 고추 등과 함께 초고추장으로 양념하고 물을 부어 말아 먹는 음식이다. 차가운 국물과 회를 함께 먹는 음식으로 주로 여름철에 먹는다.',
    name_en: 'Cold Raw Squid Soup',
    description_en:
      'Live squid sliced and mixed with cucumber, onion, carrot, and green pepper, seasoned with a vinegar-based gochujang (red chili paste) sauce, and served in cold water. This soup is a summer delicacy.',
    name_ja: 'イカ入り冷やしスープ',
    description_ja:
      '生きたイカを千切りにし、キュウリ、玉ねぎ、にんじん、唐辛子などを加えて酢コチュジャンで和えたものに水を加えて食べる。夏によく食べられる冷たいスープと刺身を一緒に食べる料理。',
    name_zh: '水拌鱿鱼片',
    description_zh:
      '生鱿鱼切成丝，将黄瓜、洋葱、胡萝卜、辣椒等材料和生鱿鱼丝一起用醋辣椒酱搅拌，再倒入凉水即可。冰凉的汤水和鲜美的生鱼片一起吃，味道十分鲜美爽口，最适合夏天食用。',
    name_zh2: '水拌魷魚片',
    description_zh2:
      '將活魷魚切條，和黃瓜、胡蘿蔔、辣椒等一起，用加醋辣椒醬進行調味，再倒入水伴著吃。冰涼的湯、美味的生魚片搭配食用，口感獨特，主要在夏季食用。',
  },
  {
    id: 698,
    category: '회 [Hoe]',
    name: '오징어숙회',
    pronounce: 'Ojingeosukhoe',
    description:
      '오징어를 살짝 익혀 초고추장에 찍어 먹는 음식이다. 식감이 고소하고 탱글탱글하다. 미나리나 깻잎에 싸 먹기도 한다.',
    name_en: 'Parboiled Squid',
    description_en:
      'Squid parboiled and served with a vinegar-based gochujang (red chili paste) sauce. This dish tastes fresh and savory and can be served with water parsley or perilla leaves for wrapping.',
    name_ja: 'ゆでイカ',
    description_ja:
      'さっとゆでたイカを酢コチュジャンにつけて食べる。香ばしくてプリプリのイカの食感がクセになる。セリやエゴマの葉に包んで食べても美味しい。',
    name_zh: '白灼鱿鱼片',
    description_zh:
      '将鱿鱼用开水稍微焯一下后，蘸酸辣酱吃。味道鲜美，口感弹韧。也可根据个人喜好，用水芹或苏子叶包着吃。',
    name_zh2: '燙魷魚',
    description_zh2:
      '將魷魚用開水燙一下， 沾醋辣醬吃即可。口感柔韌滑嫩，味道香甜可口。也可根據喜好，用水芹或紫蘇葉包著吃。',
  },
  {
    id: 699,
    category: '회 [Hoe]',
    name: '육회',
    pronounce: 'Yukhoe',
    description:
      '소의 살코기를 가늘게 썰어 간장이나 고추장을 넣고 다진 마늘, 참기름, 설탕으로 버무린 다음 채 썬 배와 함께 먹는 날 음식이다. 계란노른자를 곁들여 섞어 먹기도 한다.',
    name_en: 'Beef Tartare',
    description_en:
      'Thinly-sliced lean cut of raw beef seasoned with soy sauce or gochujang, sesame oil, and sugar and mixed with julienned Asian pear. It is sometimes topped with an egg yolk.',
    name_ja: 'ユッケ',
    description_ja:
      '牛肉の赤身を細切りにし、醤油やコチュジャン、にんにくのみじん切り、ごま油、砂糖などを加えて和え、細切りにした梨と一緒に食べる。卵の黄身を添え、混ぜて食べてもおいしい。',
    name_zh: '生拌牛肉',
    description_zh: '将瘦牛肉切丝，放入调味酱搅拌即可。可配着梨丝一同食用，还可以拌入蛋黄食用。',
    name_zh2: '生拌牛肉',
    description_zh2:
      '將沒有油分、鮮嫩的牛肉切成絲，用醬油、麻油等調味料攪拌後，與梨或大蒜一起盛出的飲食。',
  },
  {
    id: 700,
    category: '회 [Hoe]',
    name: '자리물회',
    pronounce: 'Jarimulhoe',
    description:
      '자리돔을 뼈째로 썰어 여러 가지 채소를 넣고 된장을 풀어먹는 물회로 제주도 지방의 향토음식이다.',
    name_en: 'Cold Raw Pearl-spot Chromis Soup',
    description_en:
      'Fresh, whole white-saddled reef fish sliced and mixed with vegetables in cold doenjang (soybean paste) soup. This soup is a local specialty of Jeju Island.',
    name_ja: 'スズメダイ入り冷やしスープ',
    description_ja:
      'スズメダイを骨ごと切り、そこへ各種野菜を加えてテンジャンを溶いて食べる冷やしスープ。済州島地方の郷土料理。',
    name_zh: '水拌雀鲷鱼片',
    description_zh:
      '雀雕鱼连肉带骨一起切细，再放入各种蔬菜和大酱作为调料的水拌生鱼片，是济州岛的地方特色美食。',
    name_zh2: '水拌雀鯛魚片',
    description_zh2:
      '將雀鯛連通骨頭一起切片，再放上蔬菜，倒入用水稀釋過的大醬食用即可。這種水拌雀鯛魚片是濟州島的鄉土美食。',
  },
  {
    id: 701,
    category: '회 [Hoe]',
    name: '전복물회',
    pronounce: 'Jeonbokmulhoe',
    description:
      '살짝 익힌 전복을 잘게 썰고, 채소와 양념으로 버무려 물회 육수에 말아 차갑게 먹는 음식이다. 소면을 함께 담아내기도 한다.',
    name_en: 'Cold Abalone Soup',
    description_en:
      'Abalone parboiled, chopped, mixed with vegetables and condiments, and added to cold broth. The dish can be served with noodles.',
    name_ja: 'アワビの刺身入り冷製スープ',
    description_ja:
      'さっとゆでたアワビを細かく切って、野菜と薬味で和える。それを冷製スープに入れて食べる。素麺を添えることもある。',
    name_zh: '水拌鲍鱼刺身',
    description_zh:
      '将用开水焯过的鲍鱼切成小块，加入蔬菜和调料拌匀后泡在冷高汤里凉着吃。有时也会跟煮好的龙须面一起摆盘。',
    name_zh2: '水拌生鮑魚',
    description_zh2:
      '將用開水燙過的鮑魚切成小塊，加入蔬菜和調味料拌均勻後泡在水拌生魚片冷高湯裡食用。有時會和煮好的細麵一起擺盤。',
  },
  {
    id: 702,
    category: '회 [Hoe]',
    name: '전어무침',
    pronounce: 'Jeoneomuchim',
    description:
      '전어 살을 포를 떠서 채 썰고 무, 배, 오이, 풋고추, 쪽파 등 을 함께 섞어 초고추장으로 버무린 것이다. 고소한 전어와 새콤달콤한 초고추장이 어우러져 입맛을 돋운다.',
    name_en: 'Gizzard Shad Salad',
    description_en:
      'Gizzard shad fillets sliced and mixed with vegetables in a vinegar-based gochujang (red chili paste) sauce. The rich taste of the fish and sweet and sour spicy sauce stimulate the appetite.',
    name_ja: 'コノシロの和え物',
    description_ja:
      'コノシロの身を干物にし、そこへ千切りした大根、梨、キュウリ、青唐辛子、わけぎなどを加えて酢コチュジャンで和えたもの。香ばしいコノシロと甘酸っぱい酢コチュジャンがよく合い、食欲をそそる。',
    name_zh: '生拌斑鰶',
    description_zh:
      '斑鰶片成鱼片后再切丝，加入萝卜、梨、黄瓜、青辣椒、小葱等蔬菜和粗辣椒酱一起搅拌即可。斑鰶鲜嫩的味道和醋辣椒酱酸甜适中的味道相辅相成，令人不禁胃口大增。',
    name_zh2: '生拌斑鰶',
    description_zh2:
      '先將斑鰶切成肉絲，再切絲，然後與蘿蔔、梨、黃瓜、青辣椒、香蔥等涼拌，用加醋辣椒醬調味。斑鰶味道香嫩，與加醋辣椒醬搭配食用會讓人食欲大增。',
  },
  {
    id: 703,
    category: '회 [Hoe]',
    name: '전어회',
    pronounce: 'Jeoneohoe',
    description:
      '싱싱한 전어를 뼈째 얇게 썰어 초고추장이나 간장에 찍어 먹는 회이다. 고추와 마늘을 넣고 채소 쌈을 싸 먹기도 한다.',
    name_en: 'Sliced Raw Gizzard Shad',
    description_en:
      'Fresh whole gizzard shad thinly sliced and served with a vinegar-based gochujang (red chili paste) sauce or soy sauce. It is eaten with green pepper, garlic, and leafy wraps.',
    name_ja: 'コノシロの刺身',
    description_ja:
      '新鮮なコノシロを骨ごと薄切りにし、酢コチュジャンやカンジャンにつけて食べる。唐辛子とにんにくをのせて野菜で包んで食べる場合もある。',
    name_zh: '斑鰶生鱼片',
    description_zh:
      '将新鲜的斑鰶连肉带骨切成薄片后，蘸粗辣椒酱或酱油吃即可，还可以放入辣椒和蒜，用包饭用的蔬菜包着吃。',
    name_zh2: '斑鰶生魚片',
    description_zh2:
      '將新鮮的斑鰶連骨頭一同切成薄片，蘸加醋辣椒醬或醬油食用。也可以加入辣椒、蒜，做成蔬菜包飯食用。',
  },
  {
    id: 704,
    category: '회 [Hoe]',
    name: '한치물회',
    pronounce: 'Hanchimulhoe',
    description:
      '채 썬 한치와 각종 채소를 새콤달콤한 양념장을 넣은 육수에 넣어먹는 음식이다. 한치는 오징어의 한 종류로, 오징어보다 살이 부드럽고 담백하다.',
    name_en: 'Cold Raw Swordtip Squid Soup',
    description_en:
      'Fresh whole swordtip squid sliced and mixed with vegetables, seasoned with a sweet and sour sauce, and served in cold broth.',
    name_ja: 'ケンサキイカ入り冷やしスープ',
    description_ja:
      'ケンサキイカと各種野菜を甘酸っぱいスープに入れて食べる料理。ケンサキイカはイカの一種で、イカより身が柔らかく淡泊なのが特徴。',
    name_zh: '水拌小鱿鱼片',
    description_zh:
      '小鱿鱼切成丝，高汤中加入酸甜口味的调味酱后，将小鱿鱼丝和各种蔬菜一起放入高汤中即可。小鱿鱼是鱿鱼的一种，肉质更加细嫩鲜美。',
    name_zh2: '水拌小魷魚片',
    description_zh2:
      '將小魷魚切成絲，然後與各種蔬菜一起放入肉湯之中食用即可，肉湯事先要用酸甜的調味醬調好味道。小魷魚是魷魚的一種，它的肉質比魷魚更加柔嫩、清淡。',
  },
  {
    id: 705,
    category: '회 [Hoe]',
    name: '한치회무침',
    pronounce: 'Hanchihoemuchim',
    description:
      '한치를 채 썰어 양파, 무, 깻잎, 배, 풋고추, 붉은 고추와 함께 초고추장으로 버무린 음식으로 오징어 회보다 부드러운 맛이 특징이다.',
    name_en: 'Sliced Raw Swordtip Squid Salad',
    description_en:
      'Swordtip squid julienned and tossed with onion, radish, perilla leaves, pear, green pepper, and red pepper in a vinegar-based gochujang (red chili paste) sauce.',
    name_ja: 'ケンサキイカの刺身の和え物',
    description_ja:
      'ケンサキイカを千切りし、玉ねぎ、大根、エゴマの葉、梨、青唐辛子、赤唐辛子と一緒に酢コチュジャンで和えたもの。イカの刺身よりやわらかいのが特徴。',
    name_zh: '生拌小鱿鱼',
    description_zh:
      '小鱿鱼切丝，加入洋葱、萝卜、苏子叶、梨、青辣椒、红辣椒等材料，用醋辣椒酱搅拌即可，味道比生鱿鱼片更加柔嫩鲜美。',
    name_zh2: '生拌小魷魚',
    description_zh2:
      '將小魷魚切成絲，加入洋蔥、蘿蔔、蘇子葉、梨、青紅椒、醋辣醬一起拌勻。這道菜比魷魚生魚片口感更加柔和。',
  },
  {
    id: 706,
    category: '회 [Hoe]',
    name: '홍어회무침',
    pronounce: 'Hongeohoemuchim',
    description:
      '홍어를 발효시켜 양념장에 찍어 먹거나 묵은 김치에 싸 먹는 게 홍어회이고, 채 썰어 미나리와 초고추장에 무쳐 먹는 게 홍어회무침이다.',
    name_en: 'Sliced Raw Skate Salad',
    description_en:
      'Hongeohoe is fermented skate served with a dipping sauce or aged kimchi leaves. Hongeohoemuchim is sliced hongeohoe mixed with gochujang with vinegar and Korean parsley.',
    name_ja: 'ガンギエイの刺身の和え物',
    description_ja:
      '生のままか酢に漬けて発酵させたガンギエイを薄切りにし、塩漬けにした大根やきゅうり、太めに切った梨、せりなどと一緒に唐辛子酢味噌で和えて食べる。',
    name_zh: '生拌斑鳐',
    description_zh:
      '斑鳐生鱼片是将斑鳐发酵后蘸着调味酱吃或者用腌制很久的辛奇包着吃，而生拌斑鳐是将发酵过的斑鳐切成丝，加入水芹和酸辣椒酱拌着吃。',
    name_zh2: '生拌斑鰩',
    description_zh2: '將發酵的魟魚與水芹等蔬菜一起用酸辣醬攪拌而成。',
  },
  {
    id: 707,
    category: '회 [Hoe]',
    name: '회무침',
    pronounce: 'Hoemuchim',
    description:
      '손질한 생선을 굵게 채 썰어 오이, 양배추 등 채소와 함께 섞어 초고추장 양념에 버무려 먹는다. 병어, 오징어, 한치 등 비린내가 덜한 흰 살 생선을 주로 무쳐 먹는다.',
    name_en: 'Spicy Raw Fish Salad',
    description_en:
      'Thickly-shredded raw fish is mixed with various vegetables, such as cucumber and cabbage, and seasoned with gochujang with vinegar. Fish with white flesh and a milder fishy smell, such as butterfish, squid, and cuttlefish, are usually used in this dish.',
    name_ja: '刺身の和え物',
    description_ja:
      '下ごしらえした魚を太めに切り、キュウリやキャベツなどの野菜と一緒に混ぜ、酢コチュジャンの薬味で和えて食べる。主にマナガツオやイカなど臭みの少ない白身魚を和えて食べる。',
    name_zh: '凉拌生鱼片',
    description_zh:
      '将收拾干净的鱼切成粗丝，再放入同样切成丝的黄瓜、圆白菜等蔬菜，用酸辣酱搅拌均匀即可。材料主要使用鱼腥味较弱的鲳鱼、鱿鱼、小鱿鱼等白色肉质的鱼。',
    name_zh2: '涼拌生魚片',
    description_zh2: '將腥味少的魚肉切成厚絲，加入黃瓜、高麗菜等蔬菜，用酸辣醬拌著吃。',
  },
  {
    id: 708,
    category: '김치 [Kimchi]',
    name: '갓김치',
    pronounce: 'Gatkimchi',
    description:
      '갓에 액젓과 갖은 양념을 넣어 만든 김치이다. 전라도에서 주로 많이 먹는데, 특히 여수 돌산 갓으로 만든 김치가 유명하다. 쌉쌀하고 매운 맛이 특징이다.',
    name_en: 'Leaf Mustard Kimchi',
    description_en:
      'Leaf mustard mixed with salted seafood juice and a variety of seasonings. Enjoyed widely in Jeolla Province, gatkimchi made with leaf mustard grown in Dolsan, Yeosu, is especially popular. This kimchi has a unique pungent and spicy taste.',
    name_ja: 'カラシナキムチ',
    description_ja:
      'からし菜に液状の塩辛とたれを入れて和えたキムチ。主に全羅道でよく食べられる。特に麗水の突山カラシナで作ったキムチが有名で、苦味と辛味が特徴。',
    name_zh: '芥菜辛奇',
    description_zh:
      '将芥菜和鱼露等各种调料腌制而成的辛奇，是全罗道地区常吃的一种辛奇，尤其用丽水地区的突山芥菜腌制的辛奇最为有名。芥菜辛奇的味道鲜辣中带着微微的苦涩，很有特色。',
    name_zh2: '芥菜辛奇',
    description_zh2:
      '在芥菜中加入魚露與各種調味料製作而成。主要在全羅道食用廣泛，尤其是用麗水突山芥菜製作而成的辛奇十分有名，其特點是口味微咸，有辣味。',
  },
  {
    id: 709,
    category: '김치 [Kimchi]',
    name: '겉절이',
    pronounce: 'Geotjeori',
    description:
      '배추, 상추 등을 소금에 잠깐만 절이거나, 그대로 간장, 고춧가루, 참기름 등의 양념에 무쳐 먹는 즉석 김치다. 풋풋한 맛이 있으며 김치 중 유일하게 참기름이 들어간다.',
    name_en: 'Fresh Kimchi',
    description_en:
      'Lightly salted Korean cabbage or lettuce mixed with soy sauce, red chili powder, and sesame oil and served. Featuring a refreshing taste, it is the only kimchi seasoned with sesame oil.',
    name_ja: '浅漬けキムチ',
    description_ja:
      '軽く塩漬けにした白菜やちしゃなどを、醤油や粉唐辛子、ごま油などの薬味で和えて食べる即席キムチ。サラダ感覚であっさりと食べられる。',
    name_zh: '鲜辛奇',
    description_zh:
      '将白菜、生菜等用盐稍微渍一下，或者直接用酱油、辣椒粉、香油等拌在一起食用，口感比较鲜爽，是唯一加入香油的一种辛奇。',
    name_zh2: '鮮辛奇',
    description_zh2:
      '鮮辛奇是將白菜用食鹽稍微醃漬一下，或者直接用辣椒粉、魚蝦醬等調料攪拌後食用的即食辛奇。保持了白菜原有的清脆而鮮美、爽口。',
  },
  {
    id: 710,
    category: '김치 [Kimchi]',
    name: '고들빼기김치',
    pronounce: 'Godeulppaegikimchi',
    description:
      "고들빼기를 뿌리째 소금물에 삭혔다가 담그는 별미김치로 쌉쌀한 맛과 향이 마치 인삼과 같다고 하여 '인삼김치'라고도 한다. 전라북도에서 즐겨 먹는 김치이다.",
    name_en: 'Bitter Lettuce Kimchi',
    description_en:
      'Whole sonchus-leaf crepidiastrum soaked in brine with its roots and mixed with red chili powder and other seasonings. This type of kimchi is also referred to as “ginseng kimchi,” because its pungent taste and fragrance are similar to those of ginseng. It is a delicacy widely eaten in North Jeolla Province.',
    name_ja: 'イヌヤクシ草キムチ',
    description_ja:
      'イヌヤクシソウを根ごと塩水で漬けたキムチで、苦味と香りがまるで高麗人参のようだと「高麗人参キムチ」とも呼ばれる。全羅北道でよく食べられるキムチ。',
    name_zh: '苦菜辛奇',
    description_zh:
      '先将苦菜连根一起用盐水腌渍后，再将其做成辛奇，味道略带苦涩，而且香味类似人参，因此也叫做“人参辛奇”，是全罗北道常见的一种辛奇。',
    name_zh2: '苦菜辛奇',
    description_zh2:
      '將苦菜連根放入鹽水中醃制而成，其味道微咸，散發獨特香味，與人參類似，因此也被稱為「人參辛奇」，在全羅北道備受歡迎。',
  },
  {
    id: 711,
    category: '김치 [Kimchi]',
    name: '깍두기',
    pronounce: 'Kkakdugi',
    description:
      '무를 한입 크기로 팔모썰기하여 소금에 절인 뒤 고춧가루에 버무리고 파, 마늘, 생강, 새우젓 등으로 양념하여 담근 김치이다. 설렁탕에 빠지지 않고 결들여지는 김치다.',
    name_en: 'Diced Radish Kimchi',
    description_en:
      'Cubed, bite-sized radish seasoned with red chili powder and salted and fermented shrimp. Kkakdugi is a required side dish for seolleongtang (ox bonesoup).',
    name_ja: 'カクトゥギ',
    description_ja:
      '一口大のさいころ型に切った大根を塩漬けにし、唐辛子やねぎ、にんにく、生姜、アミの塩辛などを混ぜて漬けたキムチ。',
    name_zh: '萝卜块辛奇',
    description_zh:
      '萝卜切成丁，腌渍以后拌入辣椒粉以及葱、蒜头、生姜、虾酱等进行泡制，是喝雪浓汤的时候必配的辛奇。',
    name_zh2: '蘿蔔塊辛奇',
    description_zh2:
      '蘿蔔塊辛奇是將蘿蔔切成骰子狀後用食鹽醃漬，加入辣椒粉、蔥、大蒜、生薑等調味後醃製的辛奇。',
  },
  {
    id: 712,
    category: '김치 [Kimchi]',
    name: '깻잎김치',
    pronounce: 'Kkaennipkimchi',
    description:
      '깻잎을 소금물에 2~3일 담가 삭힌 후 양념을 얹으면서 켜켜이 담아 익힌 김치다. 간은 멸치젓국으로 하며 향이 좋은 별미 김치로 늦여름 더위에 지친 입맛을 살려 준다.',
    name_en: 'Perilla Leaf Kimchi',
    description_en:
      'To prepare this dish, soak perilla leaves in salt water for two to three days to allow fermentation to occur. Next, layer the leaves and drizzle seasonings on top. Add salted anchovy soup to taste. Perilla kimchi is a delicacy favored in the summer for its appetite-stimulating effect.',
    name_ja: 'エゴマの葉キムチ',
    description_ja:
      'エゴマの葉を塩水に2、3、日漬け込んで発酵させてから、薬味を葉と葉の間に塗って熟成させたキムチ。カタクチイワシの塩辛の汁で味を調えた香りのいいキムチで、残暑の食欲不振を回復してくれる。',
    name_zh: '苏子叶辛奇',
    description_zh:
      '将苏子叶用盐水浸泡两至三天，然后抹上调料一张一张叠起来放置发酵即可。咸淡可用鳀鱼酱调味，有一股苏子叶特有的香味，盛夏时没有食欲时吃，可令人食欲大开。',
    name_zh2: '蘇子葉辛奇',
    description_zh2:
      '用鹽水泡2~3天蘇子葉，蘇子葉軟了之後一層一層塗抹調料做成辛奇。用鯷魚醬調味的蘇子葉非常美味，是夏季末的上好開胃菜。',
  },
  {
    id: 713,
    category: '김치 [Kimchi]',
    name: '나박김치',
    pronounce: 'Nabakkimchi',
    description:
      '무를 얇고 네모지게 썰어 소금에 절인 뒤 고추, 파, 마늘, 미나리를 넣고 국물을 넉넉히 부어 담근 물김치. 배추를 적당히 섞거나, 사과, 배를 넣어 단맛을 내기도 한다.',
    name_en: 'Water Kimchi',
    description_en:
      'Sliced and salted white radish squares combined with peppers, green onions, garlic, and Korean parsley in brine. Korean cabbage, apples, or pears may be added to sweeten the brine.',
    name_ja: '大根と白菜の水キムチ',
    description_ja:
      '大根を四角く薄切りにして塩漬けにし、唐辛子、ねぎ、にんにく、せりを加えて漬けた水キムチ。好みで白菜を混ぜたり、りんごや梨を加えて甘みを出す。',
    name_zh: '萝卜片水辛奇',
    description_zh:
      '把萝卜切成四方片，用盐渍一下，并加入辣椒、葱、蒜头、水芹，并加入足量的水进行腌渍，可以适当地加入一些白菜，还 有苹果和梨。',
    name_zh2: '蘿蔔片水辛奇',
    description_zh2:
      '把蘿蔔和白菜切成四方片後用食鹽漬一下，加入梨和蔥、大蒜，並加入足量的辛奇水醃漬而成。',
  },
  {
    id: 714,
    category: '김치 [Kimchi]',
    name: '돌나물물김치',
    pronounce: 'Dolnamulmulkimchi',
    description:
      '돌나물에 미나리, 무, 생강, 마늘로 양념하여 고춧가루로 만든 국물을 부어 담근 김치이다. 시원하게 해서 바로 먹으면 씹는 맛과 향이 살아 있어 봄철 입맛을 돋워주는 계절김치이다.',
    name_en: 'Stringy Stonecrop Water Kimchi',
    description_en:
      'Stringy stonecrop mixed with water parsley, julienned radish, and chopped ginger and garlic in a red chili powder broth. This seasonal delicacy is enjoyed in spring and best served cold to bring out its chewy texture and flavor.',
    name_ja: 'ツルマンネングサの水キムチ',
    description_ja:
      'ツルマンネングサにセリ、大根、生姜、にんにくで味をつけ、粉唐辛子で作ったスープを加えて漬けたキムチ。冷たくして食べると歯ごたえと香りがたって食欲をそそる春のキムチ。',
    name_zh: '垂盆草水辛奇',
    description_zh:
      '将垂盆草和水芹、萝卜、生姜、蒜等一起搅拌后，倒入添加辣椒粉的汤水即可。清凉爽口的味道，加上爽脆的口感和淡淡的清香，十分开胃，是春季特有的一种时令辛奇。',
    name_zh2: '垂盆草水辛奇',
    description_zh2:
      '在垂盆草中放入水芹、蘿蔔、姜、蒜等材料，再倒入用辣椒粉製作而成的湯料醃製而成。它的味道清爽，醃好以後立即食用，會感覺咀嚼的味道與香味在唇齒之間徘徊，在春季食用可以增強人們的食欲，是一種很好的季節辛奇。',
  },
  {
    id: 715,
    category: '김치 [Kimchi]',
    name: '돌미나리물김치',
    pronounce: 'Dolminarimulkimchi',
    description:
      '봄철에 주로 담그는 물김치로, 돌미나리에 실파, 고추, 마늘, 생강 등을 섞고, 소금으로 간을 하여, 고춧물을 넣어 익혀 먹는 김치이다.',
    name_en: 'Wild Parsley Water Kimchi',
    description_en:
      'Usually eaten in spring, wild parsley water kimchi is made by mixing wild parsley with thread scallion, green pepper, garlic, ginger, and seasoning with salt. It is a type of kimchi that uses red chili powder mixed with brine for fermentation.',
    name_ja: '野芹の水キムチ',
    description_ja:
      '主に春に漬ける水キムチ。野芹にわけぎ、唐辛子、にんにく、生姜などを混ぜ、塩で味を調え、唐辛子の汁を入れてしばらく漬けてから食べる。',
    name_zh: '野生水芹水辛奇',
    description_zh:
      '春天常做的水辛奇，将野生水芹和香葱、辣椒、蒜、生姜等材料混在一起，用盐调味后，倒入辣椒水腌制发酵即可。',
    name_zh2: '野生水芹水辛奇',
    description_zh2:
      '是春季多吃的帶水辛奇。野生水芹裡加入蔥絲、辣椒、蒜末、生薑等拌勻，然後用鹽調味，最後倒入辣椒水進行發酵。',
  },
  {
    id: 716,
    category: '김치 [Kimchi]',
    name: '동치미',
    pronounce: 'Dongchimi',
    description:
      '소금에 절인 통무에 짜지 않게 소금물을 식혀 가득 붓고 담근 김치. 주로 겨울철에 담그며 죽이나 떡을 먹을 때 곁들이면 시원한 맛이 좋다.',
    name_en: 'Radish Water Kimchi',
    description_en:
      'A wintertime kimchi made of salted whole radish immersed in salt brine. It goes well with juk (porridge) and tteok (rice cake) and aids digestion.',
    name_ja: '大根の水キムチ',
    description_ja:
      '塩漬けにした大根に、一度沸かして冷ました塩水をかけて漬けたキムチ。主に冬場に漬けられ、さっぱりした風味が絶品。お粥や餅と相性が良い。',
    name_zh: '水萝卜辛奇',
    description_zh:
      '把一定咸度的盐水烧开冷却后，把盐渍过的整只萝卜放进去进行泡制。主要在冬季食用，与粥或米糕一起吃味道更加鲜爽，还能助消化。',
    name_zh2: '水蘿蔔辛奇',
    description_zh2:
      '水蘿蔔辛奇是在用食鹽醃漬的蘿蔔放入發酵的辣椒、香蔥後，倒入大量鹽水泡製的水辛奇。味道清爽獨特，將發酵完熟的水蘿蔔辛奇水與肉湯水混合當作冷面湯水也可。',
  },
  {
    id: 717,
    category: '김치 [Kimchi]',
    name: '배추겉절이',
    pronounce: 'Baechugeotjeori',
    description:
      '연한 배추를 칼로 쭉쭉 갈라 소금에 절인 후 쪽파, 멸치젓, 고춧가루 양념을 넣어 버무리고 참기름을 약간 넣은 것이다. 묵은 김치가 떨어지거나 신김치에 싫증날 때 해먹는 즉석 김치로 신선하고 개운하다.',
    name_en: 'Fresh Cabbage Kimchi',
    description_en:
      'Tender cabbage leaves shredded, salted, and mixed with bulb onion, salted anchovy juice, and red chili powder, with sesame oil added later. Fresh kimchi is one of the quickest and easiest types of kimchi to make, making it great when one becomes bored with or runs out of aged kimchi.',
    name_ja: '浅漬け白菜',
    description_ja:
      '縦切りにした白菜を塩漬けした後、わけぎ、カタクチイワシの塩辛、粉唐辛子の薬味と和えたものにごま油を少し入れたもの。熟成キムチが切れたり、漬けて日の浅いキムチに飽きた際に食べる即席キムチで、味も新鮮でさっぱりとしている。',
    name_zh: '鲜辛奇',
    description_zh:
      '嫩白菜用刀切成大片后用盐腌渍，再加入小葱、鳀鱼酱、辣椒粉等调料搅拌，最后加入些许香油即可。过冬辛奇吃完了，或者吃腻了酸辛奇时，可制作现拌现吃的鲜辛奇，味道鲜辣爽口，十分美味。',
    name_zh2: '鮮辛奇',
    description_zh2:
      '用刀把嫩白菜切開，用鹽醃製一下，然後加入香蔥、鯷魚醬、辣椒粉等材料進行攪拌，再稍微加一點香油。當陳辛奇吃完，或厭倦了酸味辛奇時，這種即食的辛奇由於其新鮮的口味，可以勾起人的食欲。',
  },
  {
    id: 718,
    category: '김치 [Kimchi]',
    name: '배추김치',
    pronounce: 'Baechukimchi',
    description:
      '배추를 소금에 절인 다음 잎 사이사이에 무채, 고춧가루, 다진 마늘, 젓갈 등을 버무린 소를 넣어 담근 김치다. 밥과 함께 한국인의 밥상에 반드시 오르는 반찬이다.',
    name_en: 'Kimchi(Baechukimchi)',
    description_en:
      'Salted Korean cabbage stuffed with a mixture of julienned white radish, red chili powder, minced garlic, and salted fish. Along with rice, kimchi is a required dish with every Korean meal.',
    name_ja: '白菜キムチ',
    description_ja:
      '塩漬けにした白菜の間に細切りにした大根や粉唐辛子、にんにくのみじん切り、塩辛などを混ぜ合わせた薬味をまぶして漬けたキムチ。韓国の食卓に欠かせない一品。',
    name_zh: '辛奇',
    description_zh:
      '在盐渍过的白菜叶片之间拌入用萝卜丝、辣椒粉、蒜蓉、鱼虾酱等制成的调味酱料而成。辛奇和米饭是韩国人餐桌上的必备食物。',
    name_zh2: '辛奇',
    description_zh2:
      '在醃漬過的白菜葉片之間拌入用蘿蔔絲、辣椒粉、蒜蓉、魚蝦醬等製成的調味醬料而成。',
  },
  {
    id: 719,
    category: '김치 [Kimchi]',
    name: '백김치',
    pronounce: 'Baekkimchi',
    description:
      '배추를 소금에 절인 다음 잎 사이사이에 무채, 배, 미나리, 밤 등을 버무린 소를 넣고 국물이 자작하게 담근 김치다. 고춧가루를 넣지 않아 맵지 않고 청량한 맛이다.',
    name_en: 'White Kimchi',
    description_en:
      'Salted Korean cabbage stuffed with a mixture of white radish, Asian pear, Korean parsley, chestnuts, and salted fish. Extra water is poured onto the kimchi. The absence of red chili powder gives this kimchi a mild and refreshing taste.',
    name_ja: '白キムチ',
    description_ja:
      '漬けにした白菜の間に大根や梨、せり、栗、塩辛などを混ぜ合わせた薬味をまぶして漬けた、汁気たっぷりのキムチ。粉唐辛子が入らないため、辛味がなくあっさりした味わい。',
    name_zh: '白辛奇',
    description_zh:
      '在盐渍过的白菜叶片之间拌入用萝卜、梨、水芹、板栗、鱼虾酱等调成的调味料泡制而成。因为没有加辣椒粉，因此口感不辣 而清爽。',
    name_zh2: '白辛奇',
    description_zh2:
      '在鹽漬過的白菜葉片之間拌入用蘿蔔、梨、水芹、板栗、魚蝦醬等調成的調味料泡製而成。白辛奇因為沒有加辣椒粉，口感不辣而清爽。',
  },
  {
    id: 720,
    category: '김치 [Kimchi]',
    name: '보쌈김치',
    pronounce: 'Bossamkimchi',
    description:
      '무와 배추를 절여 썬 다음 여러 가지 소를 넣고 배춧잎으로 감싸 담근 김치다. 보쌈 안에 낙지, 전복, 굴, 밤 등이 들어 있어 골라 먹는 재미가 있으며 맛이 담백하고 시원하다.',
    name_en: 'Wrapped Kimchi',
    description_en:
      'Korean cabbage, white radish, and assorted ingredients wrapped in a large cabbage leaf. Ingredients such as baby octopus, abalone, oyster, and chestnuts are added for variety and flavor.',
    name_ja: 'ポサムキムチ',
    description_ja:
      '浅漬けにした大根と白菜を切って薬味をまぶし、白菜の葉で包んで漬けたキムチ。食べるときは、テナガダコや、アワビ、牡蠣、栗などの具を一緒に楽しむ。',
    name_zh: '包卷辛奇',
    description_zh:
      '把盐渍的萝卜和白菜切成段，用白菜叶把各种馅料包裹起来泡制的辛奇。包菜的馅料里有章鱼、鲍鱼、牡蛎、板栗等，可根据个人口味挑选着吃，而且味道十分清淡爽口。',
    name_zh2: '包卷辛奇',
    description_zh2:
      '包卷辛奇是把醃漬的蘿蔔、辛奇切成片，用調味料攪拌，再加入章魚、鮑魚、板栗等後用白菜葉包著吃的特色辛奇。',
  },
  {
    id: 721,
    category: '김치 [Kimchi]',
    name: '봄동겉절이',
    pronounce: 'Bomdonggeotjeori',
    description:
      '봄동을 소금에 살짝 절이거나, 그대로 간장, 고춧가루, 참기름 등의 양념에 무쳐먹는 즉석김치이다. 겉절이는 풋풋한 맛이 있으며 김치 중 유일하게 참기름이 들어간다.',
    name_en: 'Fresh Winter Cabbage Kimchi',
    description_en:
      'Fresh or lightly salted winter cabbage leaves mixed with soy sauce, red chili powder, and sesame oil. Characterized by its refreshing taste, fresh kimchi is the only kimchi seasoned with sesame oil.',
    name_ja: '浅漬け春白菜',
    description_ja:
      '春白菜を軽く塩漬けにしたり、そのままカンジャン、粉唐辛子、ごま油などのたれで和えた即席キムチ。浅漬けはシャキッとした食感があり、キムチの中で唯一ごま油を使用する。',
    name_zh: '鲜辣春白菜',
    description_zh:
      '春白菜用盐腌制一会儿，也可直接使用，加入酱油、辣椒粉、香油等调料一起搅拌，是一种鲜辛奇。鲜辣春白菜味道新鲜爽口，是唯一加香油搅拌的辛奇。',
    name_zh2: '鮮辣春白菜',
    description_zh2:
      '春白菜用鹽稍微醃製一下，或者洗淨後直接放入醬油、辣椒粉、香油等拌勻即可享用。春白菜即食辛奇帶著新鮮的白菜味，是在所有的辛奇裡面唯一放香油的辛奇。',
  },
  {
    id: 722,
    category: '김치 [Kimchi]',
    name: '부추김치',
    pronounce: 'Buchukimchi',
    description:
      '부추가 흔한 여름철에 주로 담그는데, 멸치젓국과 고춧가루를 넣어 담근다. 겉절이같이 무쳐서 곧바로 먹을 수 있는 경상도의 별미 김치다.',
    name_en: 'Chive Kimchi',
    description_en:
      'Chive kimchi is eaten mostly in summer, when chives are harvested, and made by mixing chives with salted anchovy juice and red chili powder. This delicacy of Gyeongsang Province is one of the quickest types of kimchi to make.',
    name_ja: 'ニラキムチ',
    description_ja:
      'ニラがよくとれる夏に主に漬ける。カタクチイワシの塩辛の汁と粉唐辛子を加えて漬ける。浅漬けのように軽く和えてすぐに食べられる慶尚道のキムチ。',
    name_zh: '韭菜辛奇',
    description_zh:
      '韭菜辛奇主要在盛产韭菜的夏天腌制，用鳀鱼酱和辣椒粉作为调料，也是像鲜辛奇一样，可以现做现吃，是庆尚道地区的风味辛奇。',
    name_zh2: '韭菜辛奇',
    description_zh2:
      '韭菜辛奇一般在夏季醃制的比較多，醃製時需要加入鯷魚醬汁與辣椒粉。它跟鮮辛奇一樣，涼拌之後可以立即食用，是慶尚道的一道美食。',
  },
  {
    id: 723,
    category: '김치 [Kimchi]',
    name: '섞박지',
    pronounce: 'Seokbakji',
    description:
      '섞박지는 무와 배추를 섞어 만든 김치라고 해서 붙여진 이름이다. 궁중에서 먹던 김치 중 하나로, 무, 배추, 오이, 갓 등을 젓국으로 버무려 담는 김치이다.',
    name_en: 'Radish and Cabbage Kimchi',
    description_en:
      'Kimchi made with radish and cabbage leaves. One of the types of kimchi that were served at the royal court, seokbakji is made by mixing radish, cabbage leaves, cucumber, and leaf mustard with red chili powder and salted seafood juice.',
    name_ja: '白菜と大根のキムチ',
    description_ja:
      '大根と白菜を混ぜて作るキムチ。宮廷で食べられたキムチのひとつで、大根、白菜、キュウリ、カラシナなどを塩辛の汁で和えて漬けたキムチ。',
    name_zh: '白菜萝卜辛奇',
    description_zh:
      '顾名思义，是用萝卜和白菜一起腌制的辛奇。作为宫廷辛奇之一，以萝卜、白菜、黄瓜、芥菜等为材料，加入鱼虾酱汁搅拌后发酵而成。',
    name_zh2: '白菜蘿蔔辛奇',
    description_zh2:
      '顧名思義，白菜蘿蔔辛奇是指將白菜與蘿卜混在一起製作而成的辛奇，它是宮廷辛奇之一，製作時在蘿蔔、白菜、黃瓜、芥菜裡拌入魚蝦醬汁，發酵即可。',
  },
  {
    id: 724,
    category: '김치 [Kimchi]',
    name: '열무김치',
    pronounce: 'Yeolmukimchi',
    description:
      '열무는 무 크기가 작으면서 가늘지만 대는 굵고 푸른 잎이 많다. 젓갈을 넣어 국물 없이 담그거나 풀국을 넣어 국물김치로 담근다. 열무김치비빔밥, 열무김치냉면으로 먹어도 좋다.',
    name_en: 'Young Summer Radish Kimchi',
    description_en:
      'Young summer radish is characterized by its short root and thick, abundant green leaves. Yeolmukimchi (young summer radish kimchi) is made without liquid by adding salted shrimp or with liquid by adding rice paste. It is often eaten in the summer with cold noodles or rice mixed with gochujang.',
    name_ja: '大根若菜キムチ',
    description_ja:
      'ヨルム(若大根)は小さくて細いが、茎は太く、青い葉が多い。塩辛を入れて汁のないキムチにするか、またはプルグク(もち粉を水で溶き糊状にしたもの)を入れて汁の多いキムチにする。大根若菜キムチ・ビビンバや大根若菜キムチ冷麺などにしてもおいしい。',
    name_zh: '萝卜缨辛奇',
    description_zh:
      '萝卜缨的根部小且细，但茎部却很粗，绿叶也多，可以放适量的鱼虾酱做成没有水儿的辛奇，也可以放一些糯米浆糊做成带水儿的辛奇。用萝卜缨辛奇可做拌饭和拌面，也是味道极佳。',
    name_zh2: '蘿蔔纓辛奇',
    description_zh2: '醃漬根部小且帶有綠葉的小蘿蔔，放入蔥、大蒜、辣椒粉、魚蝦醬後攪拌而成。',
  },
  {
    id: 725,
    category: '김치 [Kimchi]',
    name: '열무얼갈이김치',
    pronounce: 'Yeolmueolgarikimchi',
    description:
      '열무와 얼갈이배추를 소금에 절여 찹쌀 풀과 섞어 곱게 간 양념과 홍고추, 풋고추와 버무려 담근 김치이다. 김장김치가 끝나갈 무렵 풋풋한 열무와 고소한 얼갈이배추로 담가 입맛을 산뜻하게 만들어 주는 김치이다.',
    name_en: 'Young Summer Radish and Winter Cabbage Kimchi',
    description_en:
      'Young radish and winter-grown cabbage salted and seasoned with a mixture of glutinous rice paste, red chili powder, and chopped green onion, garlic, and red and green pepper. This type of kimchi is often eaten when one runs out of aged kimchi.',
    name_ja: '大根若菜と山東菜キムチ',
    description_ja:
      '大根若菜と山東菜を塩漬けし、もち米のりと混ぜて、すりおろした薬味、赤唐辛子、青唐辛子と和えて漬けたキムチ。漬け置きしたキムチが終わる頃に、初物の大根若菜と香ばしい山東菜で漬けたさっぱりとしたキムチ。',
    name_zh: '萝卜缨冬白菜辛奇',
    description_zh:
      '萝卜缨和冬白菜用盐腌制后，倒入糯米浆糊和磨成泥状的调味酱，再加入红辣椒、青辣椒一起搅拌后发酵而成。在过冬辛奇快吃完的时候，吃一口用细嫩的萝卜缨和冬白菜腌制的辛奇，味道鲜爽清脆，十分鲜美。',
    name_zh2: '蘿蔔纓冬白菜辛奇',
    description_zh2:
      '首先將小蘿蔔與冬白菜加鹽醃製一下，然後與糯米粉糊攪拌均勻，再將各種佐料與紅辣椒、青辣椒等攪拌一起發酵即可。在越冬辛奇即將吃完的時候，用新鮮的小蘿蔔與美味的冬白菜醃製而成的辛奇，令人口味清爽。',
  },
  {
    id: 726,
    category: '김치 [Kimchi]',
    name: '오이소박이',
    pronounce: 'Oisobagi',
    description:
      '연한 오이를 토막 내 칼집을 넣어 소금에 절인 다음 부추, 마늘, 고춧가루 등을 버무린 소를 채워 익힌 여름철 별미 김치다. 아삭하고 시원한 맛이 일품인 여름철 별미김치다.',
    name_en: 'Cucumber Kimchi',
    description_en:
      'Cucumbers cut lengthwise, slit open, and stuffed with a mixture of chives, garlic, and red chili powder. Makes a crunchy and refreshingsummer kimchi.',
    name_ja: 'キュウリキムチ',
    description_ja:
      '身の柔らかい熟れていないキュウリをぶつ切りにし、十字に切り込みを入れて塩漬けにしたものに、にらやにんにく、粉唐辛子などを混ぜた薬味を挟んで漬けたキムチ。シャキシャキした食感とあっさり風味が特徴の夏の定番。',
    name_zh: '黄瓜辛奇',
    description_zh:
      '将嫩黄瓜切成段切上刀口，用盐腌渍后填入用韭菜、蒜头、辣椒粉等制成的调味料进行泡制。黄瓜辛奇口感鲜爽，是夏季美食。',
    name_zh2: '黃瓜辛奇',
    description_zh2:
      '將黃瓜切成段切上刀口，用食鹽醃漬後填入用韭菜、大蒜、辣椒粉等攪拌的調味料製成。',
  },
  {
    id: 727,
    category: '김치 [Kimchi]',
    name: '총각김치',
    pronounce: 'Chonggakkimchi',
    description:
      '어린무와 잎이 같이 붙은 채로 담구는 김치다. 총각무를 무청 째 다듬어 씻은 뒤 큰 것은 적당히 쪼개어 소금에 절였다가 고춧가루와 갖은 양념에 버무려 담근 김치다.',
    name_en: 'Whole Radish Kimchi',
    description_en:
      'Whole or half-split young white radishes, with the leaves on, salted and mixed with red chili powder and seasonings.',
    name_ja: 'ミニ大根キムチ',
    description_ja:
      'ミニ大根を葉ごときれいに洗って塩漬けにし、粉唐辛子などの薬味をまぶして漬けたキムチ。',
    name_zh: '小萝卜辛奇',
    description_zh:
      '将嫩萝卜带缨洗净，个头比较大的适当切开，用盐腌渍，然后用辣椒粉和各种调味酱拌匀泡制。',
    name_zh2: '嫩萝卜辛奇',
    description_zh2:
      '將嫩蘿蔔用食鹽醃漬後，加入辣椒粉和各種調味料調勻泡製。嫩蘿蔔又稱鮮嫩蘿蔔，指帶纓的小蘿蔔。',
  },
  {
    id: 728,
    category: '김치 [Kimchi]',
    name: '파김치',
    pronounce: 'Pakimchi',
    description:
      '중간 크기의 쪽파나 가는 실파를 잘 다듬어 멸치젓갈과 고춧가루를 넉넉히 넣고 담근 김치다. 파의 맵고 진한 맛이 남아 있어 오래 묵혀야 특유의 깊은 맛을 낸다.',
    name_en: 'Green Onion Kimchi',
    description_en:
      'This dish features kimchi with medium-sized chives and scallions mixed with red pepper and salted and fermented anchovies. In order to eliminate the strong, pungent taste that is unique to green onion, Pakimchi needs to be fermented for quite a long time.',
    name_ja: 'ねぎキムチ',
    description_ja:
      '万能ねぎやわけぎと、カタクチイワシの塩辛と粉唐辛子をたっぷり使って漬けたキムチ。ねぎの辛味と濃い味が残っており、長時間漬け込むことで特有の深い味わいが出る。',
    name_zh: '葱辛奇',
    description_zh:
      '将中等大小的小葱或细葱择好洗净，加入足量的鳀鱼酱和辣椒粉腌制的辛奇。葱辛奇要发酵较长的时间才能去除葱特有的辛辣，味道才会更加鲜美爽口。',
    name_zh2: '蔥辛奇',
    description_zh2:
      '把中等大小的小蔥或香蔥清理好後，放入足量鯷魚醬和辣椒粉進行醃製。因為蔥的獨特香氣和辣味很難消除，所以蔥辛奇要多醃製一段時間才能吃出好滋味。',
  },
  {
    id: 729,
    category: '김치 [Kimchi]',
    name: '포기김치',
    pronounce: 'Pogikimchi',
    description:
      '포기김치는 배추를 통째로 담그는 김치를 말하는데, 대표적인 예로는 김장김치가 있다.',
    name_en: 'Kimchi(Pogikimchi)',
    description_en: 'Kimchi is made with whole heads of cabbage, like gimjang kimchi.',
    name_ja: '白菜キムチ',
    description_ja:
      '白菜キムチは白菜を丸ごと漬けたキムチのこと。代表的なものにキムジャンキムチ がある。',
    name_zh: '整棵辛奇',
    description_zh: '用整棵白菜腌制而成的辛奇，最典型的有过冬辛奇。',
    name_zh2: '整棵辛奇',
    description_zh2:
      '整棵辛奇的特點是在醃製時將白菜整棵地進行醃製，而不是切開醃製。其代表性的例子便是越冬辛奇。',
  },
  {
    id: 730,
    category: '만두 [Mandu]',
    name: '갈비만두',
    pronounce: 'Galbimandu',
    description:
      '돼지고기의 갈비 부위를 잘게 다지고 부추를 잘라 듬뿍 넣은 후 마늘, 파, 생강, 간장, 물엿, 참기름 등으로 양념한 소를 넣고 빚어 쪄서 먹는 만두.',
    name_en: 'Pork Rib Dumpling',
    description_en:
      'Steamed dumplings with a filling of pork rib meat and garlic chives chopped and seasoned with chopped garlic, green onion, ginger, soy sauce, syrup, and sesame oil.',
    name_ja: 'カルビ餃子',
    description_ja:
      '豚肉のカルビの部位を細かく刻み、刻んだニラをたっぷり加えた後、にんにく、ねぎ、生姜、カンジャン、水あめ、ごま油などを合わせた調味料で味をつけ、包んで蒸して食べる餃子。',
    name_zh: '排骨饺子',
    description_zh:
      '将猪排骨肉剁碎，放入剁碎的韭菜，再加入葱、姜、蒜、酱油、糖稀、香油等调料做成馅料，然后包成饺子形状后蒸熟即可。',
    name_zh2: '排骨餃子',
    description_zh2:
      '把豬排骨肉剁碎，加入足量韭菜和大蒜、大蔥、生薑、醬油、糖稀、香油等調料做成餡料，再用面皮包餡後蒸熟即可。',
  },
  {
    id: 731,
    category: '만두 [Mandu]',
    name: '고기만두',
    pronounce: 'Gogimandu',
    description:
      '밀가루를 반죽해 얇게 만든 피에 고기나 채소로 만든 소를 넣고 빚어서 만든 음식이다. 만두피나 만두소의 재료, 익히는 방법에 따라 다양한 만두가 있다. 고기만두는 만두소로 소고기나 돼지고기를 다지고 여기에 약간의 채소를 넣어 만든 것이다.',
    name_en: 'Meat Dumpling',
    description_en:
      'Thinly rolled flour dough folded and filled with ground meat and vegetables. There are many kinds of dumplings made using different fillings, dumpling skins, and cooking methods. Meat dumpling is a dumpling with a filling of beef or pork mixed with vegetables.',
    name_ja: '肉餃子',
    description_ja:
      '小麦粉をこねて薄く伸ばして作った皮に、肉や野菜で作った具を入れて包んだ料理。餃子の皮や餃子の具材、調理法によって様々な餃子がある。肉餃子は餃子の具に牛や豚のひき肉を使用し、そこに少しの野菜を加えて作ったもの。',
    name_zh: '肉饺',
    description_zh:
      '用面粉和面后擀成薄薄的面皮，将用肉或蔬菜做成的馅料放在面皮上，捏成一定形状即可。饺子根据面皮或馅料的种类、烹饪方法，分为很多种。肉饺是将牛肉或猪肉搅碎，再加入一些蔬菜做成的馅料。',
    name_zh2: '肉餃',
    description_zh2:
      '將麵粉和成麵團，擀成薄皮兒，再用肉或蔬菜做成餡兒，在皮兒中包入餡兒即可。根據餃子皮與餃子餡的材料、烹飪方法的不同，餃子的種類也各有不同。肉餡兒餃子的餡兒一般是牛肉或豬肉，製作時先將牛肉或豬肉剁碎，裡面稍微加上一點兒蔬菜即可。',
  },
  {
    id: 732,
    category: '만두 [Mandu]',
    name: '군만두',
    pronounce: 'Gunmandu',
    description: '군만두는 만두를 빚어 기름에 구운 것으로, 찐만두에 비해 바삭한 맛이 매력이다.',
    name_en: 'Pan-fried Dumpling',
    description_en: 'Dumpling fried in an oiled pan. This is a crispy version of basic dumplings.',
    name_ja: '焼き餃子',
    description_ja:
      '焼き餃子は、餃子を作って油で焼いたもの。蒸し餃子に比べてサクっとした食感がある。',
    name_zh: '煎饺',
    description_zh: '将煮熟的饺子放凉后用油煎而成，口感不同于蒸饺，十分香脆。',
    name_zh2: '煎餃',
    description_zh2: '煎餃是指用油煎成的餃子，與蒸餃相比，它的口感更佳香酥，極具魅力。',
  },
  {
    id: 733,
    category: '만두 [Mandu]',
    name: '김치만두',
    pronounce: 'Kimchimandu',
    description:
      '김치만두는 얇게 민 만두피에 잘게 썬 신김치와 두부, 채소로 만든 소를 넣어 만든 것으로, 우리나라 사람들에게 가장 인기 있는 만두이다.',
    name_en: 'Kimchi Dumpling',
    description_en:
      'Kimchi dumplings are stuffed with a filling of chopped kimchi, bean curd, and vegetables. They are the most popular type of dumpling among Koreans.',
    name_ja: 'キムチ餃子',
    description_ja:
      'キムチ餃子は、薄くのばした餃子の皮に細かく刻んだ浅漬けキムチと豆腐、野菜の具を入れたもの。韓国人にもっとも人気のある餃子。',
    name_zh: '辛奇饺子',
    description_zh:
      '以剁碎的辛奇和豆腐、蔬菜做成馅料，用薄薄的面皮包起来捏成一定的形状即可，是韩国人最喜爱的一种饺子。',
    name_zh2: '辛奇餃子',
    description_zh2:
      '辛奇水餃的製作方法是：將酸辛奇、豆腐、蔬菜做成餡兒，擀出薄薄的餃子皮兒，在餃子皮兒中包上餡兒即可。辛奇餃子是最受韓國人歡迎的一種餃子。',
  },
  {
    id: 734,
    category: '만두 [Mandu]',
    name: '꿩만둣국',
    pronounce: 'Kkwongmandutguk',
    description:
      '꿩고기를 소로 넣어 만두를 빚은 뒤 만둣국을 끓인다. 꿩은 기름기가 적고 느끼하지 않아 별미로 꼽힌다. 겨울철 식사대용으로 먹는 음식.',
    name_en: 'Pheasant Dumpling Soup',
    description_en:
      'Dumplings stuffed with pheasant meat and boiled in broth. Pheasant meat is considered a delicacy as it is low-fat and does not taste greasy. This dish can be eaten as a meal in winter.',
    name_ja: 'キジ肉餃子スープ',
    description_ja:
      'キジ肉を詰めた餃子をスープに入れて煮た料理。キジ肉は脂分が少なく、淡泊であっさりとした味わいが特徴で、冬によく食べられている。',
    name_zh: '山鸡肉饺子汤',
    description_zh:
      '饺子馅中加入山鸡肉包成饺子后煮成饺子汤。山鸡肉油少不腻，堪称佳肴。冬季可代替正餐来吃。',
    name_zh2: '雉雞肉餃子湯',
    description_zh2:
      '用添加雉雞肉的餃子餡包餃子，然後煮成餃子湯。雉雞肉油少不膩，堪稱佳餚。冬季可作為正餐食用。',
  },
  {
    id: 735,
    category: '만두 [Mandu]',
    name: '떡만둣국',
    pronounce: 'Tteongmandutguk',
    description:
      '육수에 만두와 얇게 썬 가래떡을 함께 넣어 끓여 먹는다. 떡국과 만둣국은 별개의 음식이었으나 한데 섞여 하나의 음식이 되었다.',
    name_en: 'Sliced Rice Cake and DumplingSoup',
    description_en:
      'Mandu (dumplings) and slices oflong, cylinder-shaped rice cake (garaetteok) boiled in meat broth. This dish is a combination of two separate dishes – tteokguk and mandutguk.',
    name_ja: '餅と餃子のスープ',
    description_ja:
      '餃子と薄切りの餅をスープに入れて煮た料理。本来は別々の料理だったトックッとマンドゥククがひとつの料理となった。',
    name_zh: '年糕饺子汤',
    description_zh:
      '将饺子和年糕片放入高汤中煮熟食用。年糕汤和饺子汤本是各自一道食物，合二为一就成了年糕饺子汤。',
    name_zh2: '年糕餃子湯',
    description_zh2:
      '年糕餃子湯是在年糕湯放入餃子後煮出的湯，即「年糕湯」和「餃子湯」混合而成，可當主食吃。',
  },
  {
    id: 736,
    category: '만두 [Mandu]',
    name: '만두',
    pronounce: 'Mandu',
    description:
      '밀가루를 반죽해 얇게 민 다음 동그랗게 모양을 찍어 고기나 채소로 만든 소를 넣고 빚어 삶거나 찐 음식이다. 기름에 튀기거나 굽기도 한다.',
    name_en: 'Dumplings',
    description_en:
      'Korean dumplings made of thinly rolled flour dough folded with a filling of ground meat and vegetables. Served boiled, steamed, deep-fried, or pan-fried.',
    name_ja: '餃子',
    description_ja:
      '小麦粉をこねて薄く伸ばし、肉や野菜を混ぜて作った具を詰めてゆでたり蒸したりした料理。揚げ餃子や焼き餃子にしてもおいしい。',
    name_zh: '饺子',
    description_zh:
      '将面粉和面擀皮，在面皮上放入用肉或蔬菜做的馅料后两边捏紧，可以水煮或用蒸锅蒸，有时还可以过油煎炸。',
    name_zh2: '餃子',
    description_zh2:
      '將麵粉和麵擀皮，用圓形模具按壓剪切下餃子皮後，放入絞肉和蔬菜等餡料捏緊後水煮或蒸製的飲食。',
  },
  {
    id: 737,
    category: '만두 [Mandu]',
    name: '만둣국',
    pronounce: 'Mandutguk',
    description:
      '밀가루 반죽을 얇게 밀어 고기나 채소로 만든 소를 넣고 빚은 만두를 육수에 넣어 끓인 음식이다.',
    name_en: 'Dumpling Soup',
    description_en:
      'Minced meat and vegetables wrapped in thin flour dough shells and boiled in beef broth.',
    name_ja: '餃子スープ',
    description_ja:
      '小麦粉をこねて薄くのばしたものに肉や野菜を詰めて餃子を作り、スープに入れて煮た料理。',
    name_zh: '饺子汤',
    description_zh: '在擀好的面皮上放入肉或蔬菜馅料包好，放入高汤里煮熟即可。',
    name_zh2: '餃子湯',
    description_zh2:
      '在擀好的麵皮上放入肉或蔬菜餡料包好餃子。餃子湯是將包好的餃子放入高湯裡煮出的飲食。',
  },
  {
    id: 738,
    category: '만두 [Mandu]',
    name: '물만두',
    pronounce: 'Mulmandu',
    description:
      '물만두는 돼지고기, 부추, 대파 등을 다져 만든 소를 밀가루 피에 감싸 빚은 후 끓는 물이나 육수에 삶아 국물과 함께 먹는 만두이다.',
    name_en: 'Boiled Dumpling',
    description_en:
      'Boiled dumpling is stuffed with a filling of ground pork and chopped chives and green onion and boiled in water or broth.',
    name_ja: '水餃子',
    description_ja:
      '水餃子は、豚肉、ニラ、ねぎなどを刻んで作った具を小麦粉で作った皮で包んだ後、熱湯や出し汁で煮てスープと一緒に食べる餃子。',
    name_zh: '水饺',
    description_zh:
      '猪肉、韭菜、大葱等材料剁碎做成馅料，用面皮包起来捏成一定形状后，放入开水或高汤中煮熟，连饺子带汤一起吃即可。',
    name_zh2: '水餃',
    description_zh2:
      '先把豬肉、韭菜、大蔥等材料剁碎製成餃子餡兒，在將餡兒包到用麵粉製成的餃子皮兒中，包好以後投入到沸水或煮沸的肉湯中，煮好後與餃子湯一同食用即可。',
  },
  {
    id: 739,
    category: '만두 [Mandu]',
    name: '송어만두',
    pronounce: 'Songeomandu',
    description:
      '송어 살을 다져서 여러 가지 채소와 갖은 양념하여 소를 만들어 밀가루 반죽으로 빚은 만두다. 고 영양 저칼로리의 대표 식으로 쪄 먹기도 하고 구워 먹기도 한다.',
    name_en: 'Trout Dumpling',
    description_en:
      'Flour dough dumplings filled with minced trout and seasoned vegetables. A great dish that is rich in nutrients and low in calories, these dumplings can be steamed or pan-fried.',
    name_ja: 'マス餃子',
    description_ja:
      'マスの身を細かく刻んだものに野菜を加え、味付けしてあんを作り、小麦粉の皮で包んだ餃子。高栄養低カロリー食の代表食で、蒸したり焼いたりして食べる。',
    name_zh: '鳟鱼饺子',
    description_zh:
      '将鳟鱼肉剁碎后加入各种蔬菜和调料做成馅料，再用面粉和面做成饺子皮，皮薄馅厚，可以蒸或煎着吃，是典型的高营养、低热量食品。',
    name_zh2: '鱒魚餃子',
    description_zh2:
      '把鱒魚肉切碎，放入多種蔬菜與調料做成餃子餡，再用麵粉和麵做成餃子皮，皮薄餡厚。鱒魚餃子是高營養低能量的代表性美食，無論是蒸著吃還是煮著吃都非常美味。',
  },
  {
    id: 740,
    category: '만두 [Mandu]',
    name: '왕만두',
    pronounce: 'Wangmandu',
    description:
      '고기, 숙주, 두부 등을 다져 속을 만들고 밀가루로 만든 피로 감싸 주먹만 한 크기로 만든 만두이다. 국을 끓여 먹거나 쪄서 먹는다.',
    name_en: 'Jumbo Sized Dumpling',
    description_en:
      'Jumbo-sized dumpling filled with a mixture of ground meat, mung bean sprouts, and bean curd. It is prepared by steaming or boiling in a soup.',
    name_ja: '王餃子',
    description_ja:
      '肉、もやし、豆腐などを細かく刻み、あんを作る。それを小麦粉で作った皮で包み、拳くらいの大きさに作った餃子。スープで茹でたり蒸して食べる。',
    name_zh: '大包子',
    description_zh:
      '将肉、绿豆芽、豆腐等材料剁碎做成馅料后，用面粉和面擀成面皮，包入肉馅后捏成拳头大小的包子形状即可。大包子可放入汤裡吃，也可蒸着吃。',
    name_zh2: '大包子',
    description_zh2:
      '將肉、綠豆芽、豆腐等剁碎弄成餡料後，用面粉和面搟成面皮，包入肉餡後捏成拳頭大小的包子形狀即可。可以放入湯裡吃，也可蒸著吃。',
  },
  {
    id: 741,
    category: '만두 [Mandu]',
    name: '채만두',
    pronounce: 'Chaemandu',
    description:
      '정선의 향토 음식으로 뜨거운 물에 반죽한 메밀가루로 만두피를 만든 다음 갓김치와 말려두었던 묵은 나물로 만두소를 만들어 빚어 낸 만두다.',
    name_en: 'Buckwheat Dumpling',
    description_en:
      'A local specialty consumed in Jeongseon, Gangwon Province, chaemandu is a dumpling dish made with gatkimchi and aged, dried, and soaked vegetables wrapped in buckwheat wrappers.',
    name_ja: 'そば餃子',
    description_ja:
      '旌善の郷土料理で、熱湯にそば粉を混ぜて作った生地で餃子の皮を作り、カラシナキムチと干し菜であんを作って包んだ餃子。',
    name_zh: '荞麦素饺',
    description_zh:
      '旌善地区的乡土饮食，用荞麦粉加热水和面做成饺子皮，雪里蕻辛奇和晒干的陈年素菜做成馅料。',
    name_zh2: '蕎麥素餃',
    description_zh2:
      '蕎麥素餃是旌善的地方美食。用熱水燙蕎麥麵做成餃子皮，然後放入雪裡蕻辛奇和幹野菜做成餃子餡包起來。',
  },
  {
    id: 742,
    category: '떡 [Tteok]',
    name: '가래떡',
    pronounce: 'Garaetteok',
    description:
      '멥쌀가루를 찐 후, 쳐서 길고 가늘게 만든 흰떡이다. 설날의 대표적인 계절음식이며, 떡국의 재료로 사용한다.',
    name_en: 'Rice Cake Stick',
    description_en:
      'Short-grain rice steamed, pounded, and rolled to form a long, cylindrical rice cake. A staple of New Year’s Day, it is sliced sideways and used as the main ingredient of tteokguk (rice cake soup).',
    name_ja: 'カレトク',
    description_ja:
      '米粉を蒸した後、こねて細長くして作る白い餅のこと。韓国で正月に食べられる代表的な料理のトッククの材料として使われる。',
    name_zh: '长条年糕',
    description_zh:
      '粳米粉蒸熟后，用木榔头捶打做成长条状的米糕。长条年糕是韩国过年时吃的代表性节日食物，也是面片汤的原料。',
    name_zh2: '長條年糕',
    description_zh2:
      '先將粳米粉蒸熟，然後擊打成長條狀的白糕。長條年糕是春節典型的季節食物，是年糕湯的主要原料。',
  },
  {
    id: 743,
    category: '떡 [Tteok]',
    name: '감자떡',
    pronounce: 'Gamjatteok',
    description:
      '껍질 벗긴 감자를 갈아 면포에 짜서 앙금을 가라앉히고 건더기와 앙금, 불린 강낭콩을 섞어 반죽하여 모양을 내서 쪄 낸 간식으로 식으면 식감이 쫄깃하다.',
    name_en: 'Potato Cake',
    description_en:
      'To make this dish, first peeland grate potatoes and wring in a clean cloth to remove any excess moisture. Mix potato starch, grated potatoes, and soaked kidney beans to form a dough and then steam. When cooled, this potato cake makes a healthy snack with a chewy texture.',
    name_ja: 'じゃがいも餅',
    description_ja:
      '皮をむいたじゃがいもをすり下ろして綿布でこす。それにふやかしたインゲン豆を混ぜて生地にし、形成して蒸したおやつ。冷ますともっちりした食感を楽しめる。',
    name_zh: '土豆糕',
    description_zh:
      '土豆削皮，擦成泥后用棉布包起来挤干水分，将沉淀下来的淀粉和疙瘩、泡发的芸豆混合起来搅拌成团，捏制出形状后放入蒸锅里蒸熟即可。土豆糕口感筋道鲜香。',
    name_zh2: '土豆糕',
    description_zh2:
      '把削皮的土豆磨碎，用棉布擠出水分。用擠幹水分的土豆和沉底的土豆渣，以及提前泡好的四季豆混合起來攪拌成團，捏製出形狀後放入蒸鍋裡蒸熟即可。這樣蒸出來的土豆糕非常勁道。',
  },
  {
    id: 744,
    category: '떡 [Tteok]',
    name: '경단',
    pronounce: 'Gyeongdan',
    description:
      '찹쌀이나 찰수수 가루를 반죽해 밤톨만한 크기로 둥글게 빚어 끓는 물에 삶은 다음 여러 가지 고물을 묻혀 만든 떡이다. 고물 종류에 따라 깨경단, 팥경단, 밤경단 등으로 불린다.',
    name_en: 'Sweet Rice Balls',
    description_en:
      'Sweet rice or glutinous millet powder shaped into small balls, boiled in water, and coated in dressing powder (gomul). Called sesame gyeongdan, red bean gyeongdan, or chestnut gyeongdan, depending on the dressing powder.',
    name_ja: '団子',
    description_ja:
      'もち米やきび粉をこねて栗ほどの大きさに丸め、熱湯でゆでたものに様々な粉をまぶした餅。まぶし粉にはごまあずき、栗などが使われる。',
    name_zh: '琼团糕',
    description_zh:
      '糯米粉或粘高粱粉和面后团成板栗大小，用水煮熟后捞出来粘各种豆沙食用。根据豆沙种类，可分为芝麻琼团、红豆琼团、板栗 琼团等。',
    name_zh2: '瓊團糕',
    description_zh2:
      '是用糯米粉和麵後搓成圓球狀，用沸水煮熟後撈出裹上豆沙食用的糕點。製作豆沙常用的食材有芝麻、紅豆、板栗等。',
  },
  {
    id: 745,
    category: '떡 [Tteok]',
    name: '깨경단',
    pronounce: 'Kkaegyeongdan',
    description:
      '찹쌀가루를 익반죽하여 밤톨만 하게 빚어, 끓는 물에 삶아 여러 가지 고물을 묻혀 만든 떡이다. 고물에 따라서 명칭이 붙는데 깨고물을 묻히면 깨경단, 콩고물을 묻히면 콩가루경단이다.',
    name_en: 'Sesame Sweet Rice Balls',
    description_en:
      'Sweet rice powdered and shaped into small balls, boiled in water, and coated with a dressing powder made from various ingredients, such as sesame seeds (ggaegyeongdan) and boiled and powdered soybeans (konggarugyeongdan).',
    name_ja: 'ゴマ団子',
    description_ja:
      'もち粉に熱湯を注ぎながらこね、栗の実くらいの大きさに形を整え、熱湯で茹でて様々なまぶし粉をまぶした餅。まぶすものにより、名前が変わる。ゴマの場合はごま団子、きな粉の場合はきな粉団子となる。',
    name_zh: '芝麻琼团糕',
    description_zh:
      '糯米粉用开水和面后，做成栗子大小的圆球状，放入开水中煮熟，裹上各种豆面儿即成琼团糕。琼团糕根据不同的豆面儿命名，裹上芝麻面儿就叫芝麻琼团糕，裹上大豆面儿就叫大豆琼团糕。',
    name_zh2: '芝麻瓊團糕',
    description_zh2:
      '將糯米粉和成麵團，做成栗子大小，投入沸水中煮一會兒，沾上豆沙、芝麻等食用即可。根據蘸取的佐料不同，它的名字也各不相同，如蘸取芝麻食用，則為芝麻瓊團糕，如果蘸取黃豆沙食用，則為黃豆沙瓊團糕。',
  },
  {
    id: 746,
    category: '떡 [Tteok]',
    name: '꿀떡',
    pronounce: 'Kkultteok',
    description:
      '찹쌀가루에 꿀을 섞어 체에 내린 뒤 밤, 대추, 잣 등을 켜켜이 넣고 찌거나 또는 찹쌀가루 반죽에 꿀이나 설탕을 넣고 모양을 빚어 만든 떡이다.',
    name_en: 'Honey-filled Rice Cake',
    description_en:
      'Pass sweet rice powder mixed with honey through a sieve, layer with jujubes and pine nuts, and steam.Or make the mixture into a dough. Shape the dough into pieces and stuff with honey or sugar.',
    name_ja: '蜂蜜餅',
    description_ja:
      'もち米に蜂蜜を混ぜてふるいにかけ、栗やなつめ、松の実などをあしらって蒸したり、もち米をこねて中に蜂蜜や砂糖を入れて作った餅。',
    name_zh: '蜜糕',
    description_zh:
      '糯米粉中加入蜂蜜，用筛子筛下，加入板栗、大枣、松籽等蒸熟食用，还可以用糯米粉和面后，用蜂蜜或砂糖做馅料团起来。',
    name_zh2: '蜜糕',
    description_zh2: '粳米粉麵團蒸好後，放入蜂蜜或白糖包成。呈現餡料特有的香甜美味。',
  },
  {
    id: 747,
    category: '떡 [Tteok]',
    name: '녹두시루떡',
    pronounce: 'Nokdusirutteok',
    description:
      '시루떡은 멥쌀가루나 찹쌀가루와 고물을 시루에 켜켜이 쌓아 뜨거운 증기로 찐 떡이다. 녹두시루떡은 쌀가루에 찐 녹두를 통째로 또는 가루를 내어 얹어 찐 떡이다.',
    name_en: 'Mung Bean Steamed Rice Cake',
    description_en:
      'Sirutteok refers to glutinous or short grain rice powder layered alternatively with a dressing powder and steamed. Nokdusirutteok uses steamed whole mung beans or powdered mung beans as a topping.',
    name_ja: '緑豆のシルトク',
    description_ja:
      'シルトクは蒸し器に米粉やもち粉とまぶし粉を層にして重ね、熱い蒸気で蒸した餅。緑豆のシルトクは米粉に蒸した緑豆を丸ごとまたは粉にしてまぶした餅。',
    name_zh: '绿豆蒸糕',
    description_zh:
      '蒸糕是用粳米粉或糯米粉和豆面儿一层一层叠起来，用蒸气蒸熟的米糕，而绿豆蒸糕是将粳米粉和绿豆粉或整颗的绿豆一层一层叠放后，用蒸气蒸熟的米糕。',
    name_zh2: '綠豆蒸糕',
    description_zh2:
      '將粳米粉、糯米粉、各種豆沙層層地放到蒸籠中，用蒸汽蒸熟即為蒸糕。綠豆蒸糕是指在大米粉中放上整顆綠豆或用綠豆粉蒸成的年糕。',
  },
  {
    id: 748,
    category: '떡 [Tteok]',
    name: '무지개떡',
    pronounce: 'Mujigaetteok',
    description:
      '멥쌀가루에 치자, 쑥, 석이가루 등 색을 낼 수 있는 천연의 재료들을 섞어 한 칸씩 올려 찐 떡이다. 떡의 오색이 무지개 같다고 하여 부르는 이름으로, 색이 화려하여 잔칫상에 올렸다. 예전에는 돌상에 올려 아이가 오색의 조화로운 사람으로 성장하도록 기원했다.',
    name_en: 'Rainbow Rice Cake',
    description_en:
      'This is a layered rice cake with different colors, thus the name “mujigae (rainbow).” It is made from powdered short grain rice and colored using various natural ingredients, such as gardenia seeds, mugwort, and manna lichen powder. This colorful rice cake used to be served on special occasions, especially on first birthday parties for babies, in the hopes that the babies would grow into happy, well-rounded adults.',
    name_ja: '虹色のシルトク',
    description_ja:
      '米粉にクチナシの実、よもぎ、イワタケなど、天然色素の食材を混ぜて蒸した餅。餅の色が虹色のようだと言われる。色が華やかなため祝いの席に出される。以前は一歳祝いの席にも出され、子どもが五色の調和のとれた人として成長することを願った。',
    name_zh: '彩虹糕',
    description_zh:
      '将粳米粉和栀子、艾草、石耳粉等可发色的天然材料混合搅拌后，一层一层叠起来蒸熟即可。蒸糕的颜色五颜六色，就像彩虹一样，因此而得名，由于颜色华丽，成为喜宴上必不可少的糕点。过去孩子的周岁宴上会摆放彩虹蒸糕，以祝愿孩子成长为五色和谐的人。',
    name_zh2: '彩虹糕',
    description_zh2:
      '在粳米粉中加入梔子、艾草、石耳粉等各種天然染色的材料，層層疊加蒸製而成的年糕。年糕的五色如彩虹一般炫麗，所以稱為「彩虹糕」，又因其色彩華麗，所以經常作為宴會用的年糕。以前彩虹糕經常出現在周歲宴上，寓意孩子將來成長為五色和諧的人。',
  },
  {
    id: 749,
    category: '떡 [Tteok]',
    name: '백설기',
    pronounce: 'Baekseolgi',
    description:
      '멥쌀가루에 설탕물을 섞어 체에 내린 뒤 고물 없이 시루에 안쳐 쪄낸 흰떡. 깨끗하고 신성한 음식이라는 뜻에서 아이의 백일이나 첫돌 잔치 때 만들어 먹는다.',
    name_en: 'Snow White Rice Cake',
    description_en:
      'Powdered rice mixed with sugared water, sifted, and steamed in a siru (earthenware steamer) without any dressing powder. Due to its white color, believed to symbolize innocence and purity, beakseolgi is traditionally prepared to celebrate a baby’s 100th day or first birthday.',
    name_ja: '蒸し餅',
    description_ja:
      'うるち米に砂糖水を混ぜてふるいにかけ、蒸し器で蒸した白い餅。真っ白なことから神聖な食べ物とされ、生後100日のお祝いや1歳のお祝いに食べられる。',
    name_zh: '白雪糕',
    description_zh:
      '粳米粉加入糖水用筛子筛下后直接上屉蒸熟即可。因蒸糕呈白色，取其洁净神圣之意，多用于孩子的百日和一周岁生日宴。',
    name_zh2: '白雪糕',
    description_zh2: '混合粳米粉和白糖後過篩，不放入其他食材蒸製而成，口味淡雅。',
  },
  {
    id: 750,
    category: '떡 [Tteok]',
    name: '송편',
    pronounce: 'Songpyeon',
    description:
      '멥쌀가루를 뜨거운 물로 반죽한 뒤 깨, 밤, 콩 등의 소를 넣고 모양을 빚어 만든 떡이다. 추석 때 먹는 명절 음식으로 솔잎을 켜마다 깔고 쪄내기 때문에 송편이란 이름이 생겨났다.',
    name_en: 'Half-moon Rice Cake',
    description_en:
      'This is made by filling half-moon-shaped rice dough, made by mixing non-glutinous rice powder with warm water, with a mixture of sesame seeds, chestnuts, and beans,  mong others. The quintessential snack during Chuseok, songpyeon, literally meaning “pine rice cake” in Korean, is named thus as it is steamed over a layer of pine (“song” in Korean) needles.',
    name_ja: 'ソンピョン',
    description_ja:
      'うるち米の粉をお湯でこね、ゴマや栗、豆などを入れて作った餅。秋夕(旧盆)に食べる餅で、松の葉を敷いて蒸すことから「松葉餅」という名称が付けられた。',
    name_zh: '松糕',
    description_zh:
      '将粳米粉放到容器中慢慢添加热水和面，然后放入芝麻、栗子、豆子等馅料包好蒸熟即可。松年糕是韩国中秋节的代表性食物，因为在蒸煮时会在蒸笼底层铺上松叶,因此而得名。',
    name_zh2: '松糕',
    description_zh2:
      '用粳米粉和麵後加入芝麻、黃豆、板栗、紅豆等餡料包好蒸熟即可。蒸糕時在糕之間放入松葉而被稱為「松糕」。',
  },
  {
    id: 751,
    category: '떡 [Tteok]',
    name: '수수팥떡',
    pronounce: 'Susupattteok',
    description:
      '수수가루를 익반죽한 후 끓는 물에 삶아 건져서 붉은 팥고물을 묻힌 떡이다. 어린 아이의 백일이나 돌상에 반드시 올려 수수와 팥의 붉은 색이 나쁜 귀신을 내쫓아 건강하게 성장하기를 기원했다.',
    name_en: 'Red-bean-coated Millet Rice Cake',
    description_en:
      'Sorghum powder kneaded and shaped into small balls, boiled in water, and coated with an red bean powder. Susupattteok used to be an essential snack for babies’ 100th day or first birthday party, as the red color of sorghum and red beans was believed to drive evil spirits out of the home and help babies grow up strong and healthy.',
    name_ja: '小豆きび餅',
    description_ja:
      'きび粉に熱湯を注ぎながらこね、茹でる。茹で上がったものに赤い小豆の粉をまぶした餅。幼い子どもの百日祝いや一歳祝いに必ず出てくる。きびと小豆の赤が悪いものを追い出すとされ、健やかな子どもの成長への願いが込められた。',
    name_zh: '红豆高粱糕',
    description_zh:
      '将高粱米粉用开水和面，捏成圆球形状后放入开水中煮熟，捞出后裹上红豆面儿即可。红豆高粱糕是孩子白天或周岁宴上必不可少的糕点，祈愿高粱和红豆的红色可以驱灾辟邪，保佑孩子健康成长。',
    name_zh2: '紅豆高粱糕',
    description_zh2:
      '將高粱麵粉和成麵團，放入沸水中煮一會兒，再撈出來沾上紅色豆沙。嬰兒在百日宴與周歲宴時，一定要有高粱紅豆餅，因為人們相信高粱與紅豆的紅色可以驅趕惡鬼，保佑孩子健康成長。',
  },
  {
    id: 752,
    category: '떡 [Tteok]',
    name: '시루떡',
    pronounce: 'Sirutteok',
    description:
      '시루떡은 불린 멥쌀이나 찹쌀을 가루내서 시루에 찐 떡이다. 쌀가루 사이사이에 고물을 올려 찌거나, 콩, 팥, 호박고지, 무채, 곶감 등을 섞어 찌기도 한다. 각종 경조사에 빠지지 않는 떡으로 이웃과 나눠먹었다.',
    name_en: 'Steamed Rice Cake',
    description_en:
      'Short grain or glutinous rice powdered and steamed. The rice powder is layered alternatively with coating powder or mixed with soybeans, red beans, dried zucchini slices, julienned and dried radish, and dried persimmon. A staple of various special occasions, this rice snack used to be shared among neighbors.',
    name_ja: 'シルトク',
    description_ja:
      'シルトクは水につけたうるち米やもち米を粉にし、蒸し器で蒸した餅。米粉の間と間にまぶし粉を挟んで蒸したり、豆、小豆、干した薄切りのカボチャ、千切り大根、干し柿などを入れて蒸す場合もある。各種慶弔時には欠かさない餅で、隣近所と分け合って食べられた。',
    name_zh: '蒸糕',
    description_zh:
      '将用水浸泡过的粳米或糯米磨成粉末，放入蒸笼蒸熟即可。米粉中间可铺一层豆面儿，或者加入一些大豆、红豆、南瓜干、萝卜丝、柿饼等一起蒸。蒸糕是各种丧葬婚庆宴会上必不可少的糕点，与邻里一起分食。',
    name_zh2: '蒸糕',
    description_zh2:
      '首先將粳米粉或糯米粉泡發，然後磨成粉狀，放入蒸籠中蒸熟，即為蒸糕。在大米粉之間可以放上各種豆沙等材料，有時也可以放上紅豆、黃豆、南瓜、蘿卜絲等材料。蒸糕是各種紅白喜事中不可或缺的食物，人們經常與鄰居們分享食用。',
  },
  {
    id: 753,
    category: '떡 [Tteok]',
    name: '쑥떡',
    pronounce: 'Ssuktteok',
    description:
      '삶은 쑥을 넣어 만든 떡으로, 쑥의 향긋함과 푸른색이 매력적이다. 쑥개피떡, 쑥경단, 쑥설기, 쑥인절미 등 다양한 방법으로 만들 수 있다.',
    name_en: 'Mugwort Rice Cake',
    description_en:
      'Boiled mugwort mixed and steamed with rice powder. The refreshing green color and unique fragrance of mugwort have made this snack quite popular. Mugwort can be used for various types of rice cakes.',
    name_ja: 'よもぎ餅',
    description_ja:
      '茹でたよもぎを入れた餅。よもぎの香りと青々とした色が絶品。よもぎ桂皮餅、よもぎ団子、よもぎ蒸し餅、よもぎインジョルミなど様々な調理法がある。',
    name_zh: '艾草糕',
    description_zh:
      '加入煮熟的艾草做成的米糕，艾草的清香和青绿色颜色，可谓是色香味俱全。艾草糕有艾草桂皮糕、艾草琼团糕、艾草蒸糕、艾草打糕等多种做法。',
    name_zh2: '艾草糕',
    description_zh2:
      '將艾草煮熟，然後放進米團中製作成年糕，艾草獨有的香味和綠色最為吸引人。根據不同的製作方法，可分為艾草豆沙糕、艾草瓊團糕、艾草白蒸糕、艾草打糕等不同的種類。',
  },
  {
    id: 754,
    category: '떡 [Tteok]',
    name: '씨앗호떡',
    pronounce: 'Ssiathotteok',
    description:
      '땅콩, 해바라기씨, 호박씨 따위의 씨앗으로 만든 소를 넣은 호떡이다. 밀가루나 찹쌀 반죽에 흑설탕과 견과류, 계피가루를 넣어 납작하게 눌러 기름에 굽는다.',
    name_en: 'Korean Pancake with Seed and Brown Sugar Filling',
    description_en:
      'Flour or glutinous rice dough shaped into balls, filled with brown sugar, cinnamon powder, and nuts and seeds, such as peanuts, sunflower seeds, and pumpkin seeds, and pressed down while being pan-fried.',
    name_ja: '種入りホットク',
    description_ja:
      'ピーナッツ、ヒマワリの種、カボチャの種などナッツ類の入ったホットク。小麦粉やもち粉の生地に、黒砂糖やナッツ類、シナモンを加え、平たく押さえながら焼き上げる。',
    name_zh: '坚果糖饼',
    description_zh:
      '馅料中加入花生、葵花籽、南瓜子等坚果的糖饼。在用面粉或糯米粉和成的面团里放入红糖、坚果和桂皮粉后，压成扁平状油煎即可。',
    name_zh2: '果仁糖餅',
    description_zh2:
      '在餡料裡加入花生、葵花籽、南瓜籽等堅果的糖餅。在麵粉或糯米麵團中放入紅糖、堅果和桂皮粉後，壓成扁平狀油煎即可。',
  },
  {
    id: 755,
    category: '떡 [Tteok]',
    name: '약식',
    pronounce: 'Yaksik',
    description:
      '찹쌀을 물에 불려 시루에 찐 다음 간장을 비롯한 꿀, 설탕 등의 양념을 고루 섞어 버무려 다시 시루에 찐 음식이다. 찌는 떡 중에서 유일하게 찹쌀을 통으로 사용한다.',
    name_en: 'Sweet Rice with Nuts and Jujubes',
    description_en:
      'Steamed sweet rice mixed with chestnuts, jujubes, pine nuts, sesame oil, honey, brown sugar, or soy sauce, and re-steamed to achieve a sticky texture.',
    name_ja: 'おこわ',
    description_ja:
      '水に漬けておいたもち米を蒸し、栗、なつめ、松の実、ごま油、蜂蜜または黒砂糖、醤油を混ぜて再び蒸したもの。',
    name_zh: '韩式八宝饭',
    description_zh:
      '将泡发的糯米上屉蒸，熟后加入酱油以及蜂蜜、白糖等拌匀，然后重新上屉蒸熟即可，是蒸制的糕饼当中唯一使用整粒糯米的食物。',
    name_zh2: '韓式八寶飯',
    description_zh2:
      '在軟硬適中的糯米飯中放入蜂蜜、白糖、醬油、板栗、大棗等蒸煮的甜糕。韓國傳統在正月十五時做韓式八寶飯吃。',
  },
  {
    id: 756,
    category: '떡 [Tteok]',
    name: '인절미',
    pronounce: 'Injeolmi',
    description:
      '찹쌀이나 찹쌀가루를 시루에 쪄서 절구에 찧어 적당한 크기로 잘라 고물을 묻힌 떡이다. 쌀에 섞는 재료나 고물에 따라 다양한 인절미가 있다. 고물로는 콩가루를 가장 일반적이다.',
    name_en: 'Bean-powder-coated Rice Cake',
    description_en:
      'Steamed glutinous or short grain rice steamed, pounded in a mortar, shaped into small pieces, and covered with various coating powders. Bean powder is most commonly used for this type of rice cake.',
    name_ja: '黄な粉餅',
    description_ja:
      'もち米やもち粉を蒸し器で蒸し、臼でついて適当な大きさに切ったものに粉をまぶした餅。米に混ぜる材料やまぶし粉の種類により様々なインジョルミができる。まぶし粉には、黄な粉がもっとも一般的に使われる。',
    name_zh: '打糕',
    description_zh:
      '糯米或糯米粉蒸熟，放入木槽内用木榔头捣成泥状后，切成适当大小，最后裹上豆面儿即可。根据米粉中添加的材料或都豆面儿的种类，可分为各种不同的米糕，其中大豆面儿的米糕最为常见。',
    name_zh2: '打糕',
    description_zh2:
      '將糯米或糯米粉放到蒸籠裡蒸好後，再放到碓臼中擊打，最後切成合適的大小，再沾上豆沙等材料即可。根據大米中所摻雜的材料不同，或是夾層的不同，打糕的種類也各不相同。最為普遍的夾層是豆沙粉。',
  },
  {
    id: 757,
    category: '떡 [Tteok]',
    name: '절편',
    pronounce: 'Jeolpyeon',
    description:
      '멥쌀이나 멥쌀가루를 쪄서 많이 친 다음 떡살로 눌러 만든 떡이다. 멥쌀로 만들었지만, 쳐서 만들기 때문에 다른 떡과 달리 쫀득쫀득하다. 쑥을 넣어 만들기도 한다.',
    name_en: 'Patterned Rice Cake',
    description_en:
      'Short grain rice powder sieved and pressed into a rice cake mold. Unlike other rice cakes made with non-glutinous rice, jeolpyeon is quite chewy and often made with mugwort.',
    name_ja: '型押し餅',
    description_ja:
      'うるち米や米を蒸してついた後、型で押した餅。うるち米をつくため、他の餅に比べてもちもちしている。よもぎを加えて作る場合もある。',
    name_zh: '片糕',
    description_zh:
      '粳米或粳米粉蒸熟，放入木槽内头反复捶打捣成泥状后，用模子印出形状即可。虽然使用粳米制成，但是因为反复捶打，口感与其他米糕相比更加具有粘性和嚼劲。制作时在粳米粉中加入艾草亦可。',
    name_zh2: '片糕',
    description_zh2:
      '首先把粳米或糯米粉蒸好，然後用力擊打，再用糕餅模子使勁按壓即可。片糕雖然是用粳米製作而成的，但由於製作時擊打的原因，它的口味與眾不同，十分軟糯。製作時有時也可以加入艾草。',
  },
  {
    id: 758,
    category: '떡 [Tteok]',
    name: '조랭이떡',
    pronounce: 'Joraengitteok',
    description:
      '멥쌀가루를 이용해 얇은 가래떡 모양으로 뽑아 누에고치 모양으로 만든 떡이다. 개성지방의 전통 떡으로, 장수한다는 의미가 담겨있어 주로 새해에 먹는다.',
    name_en: 'Snowman-shaped Rice Cake',
    description_en:
      "Ground short-grain rice made into thin cylinder-shaped rice cake (garaetteok) and then shaped into cocoons. It is a traditional rice cake that originated in Gaeseong. The rice cake is usually eaten on New Year's Day since it symbolizes longevity.",
    name_ja: 'チョレンイトック',
    description_ja:
      'うるち米の粉で作った細長いお餅を、雪だるまのような形にしたもの。開城地域の伝統的なお餅で、長寿の願いを込めて作るため、主に新年に食べられている。',
    name_zh: '小葫芦年糕',
    description_zh:
      '用粳米粉做成细长的年糕条后再切成蚕茧形状的年糕。是开城地区的传统年糕，有着健康长寿的寓意，因此一般在过年时常吃。',
    name_zh2: '小葫蘆年糕',
    description_zh2:
      '用粳米粉做成長條年糕後切成蠶繭形狀的年糕。為開城地區的傳統年糕，意喻健康長壽，因此一般在過年時食用。',
  },
  {
    id: 759,
    category: '떡 [Tteok]',
    name: '증편',
    pronounce: 'Jeungpyeon',
    description:
      '멥쌀가루에 막걸리를 탄 뜨거운 물로 반죽해 부풀게 한 다음 틀에 담아 대추, 밤, 잣 등으로 고명을 얹어 찐 떡으로 소화가 잘되고 씹는 맛이 좋다.',
    name_en: 'Raised Rice Cake',
    description_en:
      'Here, non-glutinous rice powder is mixed with rice wine and water, formed into dough, and then placed into a mold. It is then garnished with shredded jujubes, chestnuts, and pine nuts and steamed. Jeungpyeon is chewy and easily digestible.',
    name_ja: '発酵蒸し餅',
    description_ja:
      'うるち米粉にマッコリを混ぜたお湯を加えて生地を作り、それを発酵させた後、型に入れてなつめ、栗、松の実などをのせて蒸した餅。消化に良く口当たりも良い。',
    name_zh: '发糕',
    description_zh:
      '在粳米粉中倒入一些加了米酒的热水和成柔软的面团，等到面团发酵膨胀后，将其装入模子里，上面再放一些大枣、栗子、松仁等，放入蒸锅里蒸熟，不仅口感好，而且有助于消化。',
    name_zh2: '發糕',
    description_zh2:
      '把馬格利酒和清水混合煮開，趁熱和大米麵，再把和好的大米麵放入模具裡，加上紅棗、粒子、松仁等各種輔料蒸熟，是易於消化和有嚼勁的糕點。',
  },
  {
    id: 760,
    category: '떡 [Tteok]',
    name: '찹쌀떡',
    pronounce: 'Chapssaltteok',
    description:
      '찹쌀을 쪄서 차지게 친 후, 팥 앙금을 넣어 만든 떡이다. 보통 겉에 녹말가루 등의 분을 묻혀 먹고, 수험생들의 시험 날 선물하기도 한다.',
    name_en: 'Sweet Rice Cake with Red Bean Filling',
    description_en:
      'Glutinous rice steamed, pounded, shaped into balls, stuffed with boiled red beans, and coated with starch powder. Boxes of these sweet rice cake balls are often given to students for good luck the day before an important exam.',
    name_ja: 'あんこ餅',
    description_ja:
      'もち米を蒸してつき、それにあんこを包んだもの。通常、表面に片栗粉などの粉をまぶして食べる。受験生の試験日に贈ったりもする。',
    name_zh: '红豆馅糯米糕',
    description_zh:
      '糯米蒸熟后反复捶打捣成泥状，里面放入红豆馅料后捏成圆扁形状即可。一般表面裹上淀粉等粉末，常作为祝愿应考生考中的礼物。',
    name_zh2: '紅豆餡糯米糕',
    description_zh2:
      '糯米粉蒸熟、擊打至黏稠，放入紅豆澱粉即可。食用時，人們經常在糕的表面沾上一層澱粉，有時也作為禮物送給考試的學生。',
  },
  {
    id: 761,
    category: '떡 [Tteok]',
    name: '호떡',
    pronounce: 'Hotteok',
    description:
      '밀가루 반죽을 발효 시켜 주먹만 하게 떼어 안에 흑설탕을 넣고 달궈진 팬에 지져내는 빵이다. 대개 흑설탕에 계피를 넣지만, 견과류를 넣은 씨앗호떡과 잡채를 넣은 야채호떡도 인기이다.',
    name_en: 'Syrup-filled Pancake',
    description_en:
      'Fermented flour dough shaped into balls, filled with a spoonful of brown sugar, and pan-fried in a preheated pan. Brown sugar mixed with cinnamon powder is a common filling, but seeds, nuts, and vegetables mixed with glass noodles are popular as well.',
    name_ja: 'ホットク',
    description_ja:
      '小麦粉をこねて発酵させ、拳ほどの大きさに丸める。その中に黒砂糖を入れて熱したフライパンで焼いたパン。通常、黒砂糖に桂皮を混ぜるが、ナッツを入れた種ホットクとチャプチェを入れた野菜ホットクも人気。',
    name_zh: '糖饼',
    description_zh:
      '面粉和面发酵后，揪成拳头大小，里面填入红糖后放入锅中油煎即可。通常在红糖里加入一些桂皮，此外还有以各种坚果为馅料的坚果糖饼和以什锦炒菜为馅料的蔬菜糖饼。',
    name_zh2: '糖餅',
    description_zh2:
      '首先將麵團進行發酵，再撕成拳頭大小的麵團，裡面放上紅糖，放到燒熱的平底鍋中烙熟即可。人們一般在紅糖裡加入一些桂皮，但有時也會加入一些堅果製作成堅果燒餅，或加入雜菜做成雜菜燒餅，它們也都很受歡迎。',
  },
  {
    id: 762,
    category: '떡 [Tteok]',
    name: '화전',
    pronounce: 'Hwajeon',
    description:
      '찹쌀가루를 뜨거운 물로 반죽해 동글납작하게 빚은 다음 꽃잎을 붙여 기름에 지진 떡이다. 계절별로 진달래화전, 장미화전, 국화전 등이 있다.',
    name_en: 'Pan-fried Flower Rice Cake',
    description_en:
      'Sweet rice powder kneaded with boiling water, shaped flat and round, decorated with flower petals, and pan-fried. Hwajeon was traditionally made with seasonal flowers – most commonly azalea, rose, and chrysanthemum',
    name_ja: '花びらのチヂミ',
    description_ja:
      '熱湯でこねたもち米を小分けにして丸め、平たく伸ばして花びらをのせて油で焼いた餅。季節によって、つつじやばら、菊の花などをあしらう。',
    name_zh: '花煎糕',
    description_zh:
      '糯米粉用开水和面，压成扁平状，贴上花瓣后用油煎熟即可。根据季节，有杜鹃花煎糕、玫瑰花煎糕、菊花煎糕等。',
    name_zh2: '花煎糕',
    description_zh2:
      '糯米粉用開水和麵，壓成扁平狀，貼上當季花瓣或葉子，用油煎熟即可。在韓國可依季節貼上食用的杜鵑花、菊花、玫瑰等多種花瓣。',
  },
  {
    id: 763,
    category: '한과 [Hangwa]',
    name: '감말랭이',
    pronounce: 'Gammallaengi',
    description:
      '감을 껍질을 벗기고, 조각내어 건조시킨 곶감의 한 종류이다. 일반적인 곶감보다도 맛이 부드럽고 쫄깃하며 당도가 높아 간식으로 먹기에 좋다.',
    name_en: 'Dried Persimmon',
    description_en:
      'Fresh persimmons peeled, cut, and dried. A type of gotgam (dried whole persimmon), gammallaengi makes a tasty snack, as it is more tender, chewier, and sweeter than most types of gotgam.',
    name_ja: '干し柿のスライス',
    description_ja:
      '柿の皮をむいてスライスし、乾燥させた干し柿の一種。一般的な干し柿よりマイルドでやわらかく、糖度が高いためおやつにぴったり。',
    name_zh: '柿子干',
    description_zh:
      '柿子去皮切块后晒干而成，是柿饼的一种。柿子干的口感比一般的柿饼更加细腻柔韧，而且糖度高，十分甘甜，是一道很美味的小吃。',
    name_zh2: '柿子乾',
    description_zh2:
      '柿子乾是柿餅的一種，在製作時首先將柿子去皮，然後打碎、晾幹。與普通的柿餅相比，它的味道更加柔軟、富有彈性，糖分也更高，適合作為零食食用。',
  },
  {
    id: 764,
    category: '한과 [Hangwa]',
    name: '강정',
    pronounce: 'Gangjeong',
    description:
      '튀긴 쌀과 콩 또는 볶은 깨를 되직한 물엿에 버무려 굳힌 후 여러 모양으로 썬 전통과자이다.',
    name_en: 'Sweet Rice Puffs',
    description_en:
      'This is a traditional Korean confectionery that is made by mixing puffed rice, beans, or toasted sesame seeds with a starch syrup. The mixture is rolled flat, allowed to harden, and then cut into various shapes.',
    name_ja: 'おこし',
    description_ja:
      '揚げた米、豆、煎りゴマを水飴と混ぜ合わせて固め、いろいろな形に切った韓国伝統の菓子。',
    name_zh: '江米块',
    description_zh:
      '将油炸的大米、大豆或芝麻用粘稠的麦芽糖搅拌后放置凝固，然后再切成各种形状的传统糕点。',
    name_zh2: '江米塊',
    description_zh2: '將油炸的大米、大豆、芝麻用黏稠的麥芽糖攪拌後凝固而成，是香甜的傳統糕點。',
  },
  {
    id: 765,
    category: '한과 [Hangwa]',
    name: '곶감',
    pronounce: 'Gotgam',
    description:
      '껍질을 벗기고 실에 꼭지를 달아 말린 감이다. 쫄깃한 식감과 달콤한 맛이 특징으로, 우리나라에서 겨울철에 많이 먹는 간식이다.',
    name_en: 'Dried Whole Persimmon',
    description_en:
      'Persimmon peeled and hung to dry by tying its stalk to a string. It is a winter delicacy favored for its chewy texture and sweet taste.',
    name_ja: '干し柿',
    description_ja:
      '皮をむいた柿のヘタに糸を巻いて干したもの。食感と甘みがあり、韓国で冬によく食べられるおやつ。',
    name_zh: '柿饼',
    description_zh:
      '柿子去皮后，用绳子绑住柿蒂吊起来晒干而成，口感柔韧，味道甘甜，是韩国冬季最长吃的小吃。',
    name_zh2: '柿餅',
    description_zh2:
      '首先將柿子去皮，再將柿子把兒掛到繩子上晾幹。它的特點是口感勁道、味道香甜，是韓國人冬季經常食用的零食之一。',
  },
  {
    id: 766,
    category: '한과 [Hangwa]',
    name: '다식',
    pronounce: 'Dasik',
    description:
      '쌀, 밤, 콩 등의 곡물을 곱게 가루 내어 꿀이나 조청으로 반죽한 다음 다양한 글자와 문양이 새겨진 다식판에 박아 만든 색색의 아름다운 과자이다.',
    name_en: 'Tea Confectionery',
    description_en:
      'Powdered rice, chestnuts, or beans combined with honey or syrup and pressed in a patterned wooden mold (dasik pan). It is a colorful and decorative sweet.',
    name_ja: 'らくがん',
    description_ja:
      '米や栗、豆などの穀物を細かく挽き、蜂蜜や水あめでこね、模様や文字が刻まれた型で抜いた色鮮やかなお菓子。',
    name_zh: '茶食',
    description_zh:
      '将白米、板栗、大豆等谷物碾成粉，加 入蜂蜜或糖稀和面后，用刻上各种文字和图 样的模子压出形形色色美丽的饼干。',
    name_zh2: '茶食',
    description_zh2:
      '用大豆、板栗、米、芝麻等製成穀物粉後，放入蜂蜜和麵，用刻上各種文字和圖樣的模板壓製而成。茶食是味道香脆，色澤優美的傳統茶點。',
  },
  {
    id: 767,
    category: '한과 [Hangwa]',
    name: '도라지정과',
    pronounce: 'Dorajijeonggwa',
    description:
      '통도라지를 속이 익을 때까지 푹 삶아 껍질을 벗겨 설탕시럽에 조리다가 거의 조려졌을 때 꿀을 넣어 윤기를 내 꾸덕하게 식혀서 완성한다.',
    name_en: 'Briased Bellflower Root in Sweet Sauce',
    description_en:
      'Boiled and peeled bellflower root simmered in sugar syrup, coated with a honey glaze, and cooled.',
    name_ja: '桔梗の根の砂糖煮',
    description_ja:
      '桔梗の根を火が通るまでじっくり茹でる。皮をむいて砂糖のシロップで煮詰める。完全に煮詰まったころ、蜂蜜を入れてテリを出す。',
    name_zh: '桔梗蜜饯',
    description_zh:
      '将一整根桔梗煮至熟透，去皮后用白糖水慢慢熬煮，最后放入蜂蜜使之变得光泽黏稠，冷却后即可食用。',
    name_zh2: '桔梗蜜餞',
    description_zh2: '把整個桔梗煮透並薄好皮，用糖水熬煮，差不多好的時候加點蜂蜜以增色，然後晾涼。',
  },
  {
    id: 768,
    category: '한과 [Hangwa]',
    name: '매작과',
    pronounce: 'Maejakgwa',
    description:
      "모양이 '마치 매화나무에 참새가 앉은 모습과 같다'하여 한자로 매화 매(梅), 참새 작(雀) 자(字)라고 한다. 밀가루 반죽에 칼집을 넣어 리본 모양으로 만들어 튀긴 후, 꿀과 조청을 발라 만든 한과의 일종이다.",
    name_en: 'Fried Twist',
    description_en:
      'The term “maejakgwa” comes from the shape of this cookie, which is said to look like a sparrow (雀 in Chinese and pronounced “jak” in Korean) perched on a Japanese apricot tree (梅 in Chinese and pronounced “mae” in Korean). To make this cookie, cut thinly rolled flour dough into small pieces, score to make ribbon shapes, and deep-fry. It is a sweet traditional Korean cookie coated with honey and syrup.',
    name_ja: '梅雀菓',
    description_ja:
      '形が「まるで梅の木に雀がとまっているよう」であることから名付けられた菓子。小麦粉の生地に切り込みを入れてリボンの形にし、油で揚げる。その後、蜂蜜や水あめをぬった韓菓のひとつ。',
    name_zh: '梅雀果',
    description_zh:
      '形状似“一只麻雀落在梅花树上”，因此而得名。面粉和面，用小刀雕出蝴蝶结的形状后用油炸，再抹上蜂蜜和糖稀即可，是韩式点心的一种。',
    name_zh2: '梅雀果',
    description_zh2:
      '韓式點心的一種，由於它的形狀酷似一隻麻雀站在梅花樹上，因而得名。製作時，首先在麵團上打花刀，然後做成蝴蝶結的形狀，再用油炸，最後再抹上蜂蜜與糖稀即可。',
  },
  {
    id: 769,
    category: '한과 [Hangwa]',
    name: '붕어빵',
    pronounce: 'Bungeoppang',
    description:
      '붕어 모양의 틀에 묽은 밀가루 반죽과 팥소를 넣어 만든 풀빵이다. 겉은 바삭하고 속살은 쫀득하다. 한국의 대표적인 길거리 음식이다.',
    name_en: 'Fish-shaped Bread',
    description_en:
      'This bread is made by pouring a thin batter into a fish-shaped mold and adding a red bean paste filling. The bread is crisp outside and chewy inside and it is a popular Korean street food.',
    name_ja: 'たい焼き',
    description_ja:
      '鯛を形とった焼き型に、小麦粉の生地とあんこを入れて作ったもの。外はカリッと､中はふんわりとして美味しい｡韓国の代表的なストリートフード。',
    name_zh: '红豆鲫鱼饼',
    description_zh:
      '在鲫鱼形模具中倒入面糊，放上红豆馅后烤出的烤饼。外皮酥脆，馅料有嚼劲。是韩国代表性街头美食。',
    name_zh2: '紅豆鯛魚燒',
    description_zh2:
      '將麵糊倒入鯽魚形狀的模具中，放進紅豆餡後烤出來的烤餅。外表酥脆，內餡Q彈。是韓國代表性街頭美食。',
  },
  {
    id: 770,
    category: '한과 [Hangwa]',
    name: '뻥튀기',
    pronounce: 'Ppeongtwigi',
    description:
      '쌀, 감자, 옥수수 따위를 불에 달군 틀에 넣어 밀폐하고 높은 온도와 압력으로 튀겨 낸 과자이다. 튀겨져 나올 때 뻥 하는 소리가 나는 데서 붙인 이름이다.',
    name_en: 'Puffed Grain',
    description_en:
      'A snack made by putting food ingredients like rice, potato, and corn into a containment vessel heated over an open flame and puffing them at high pressures and temperatures. "Ppeong" in the Korean word "Ppeongtwigi" refers to the booming sound produced when grains explode.',
    name_ja: 'ポン菓子',
    description_ja:
      '米、じゃがいも、とうもろこしなどを熱した圧力釜に入れ、加熱・加圧して膨らませたお菓子｡出来上がるときに鳴る大きな音から｢ポン菓子｣と名付けられた｡',
    name_zh: '爆米饼',
    description_zh:
      '将大米、土豆、玉米等放入加热的模具后盖上盖子，密封高温高压炸制而成的饼干。炸好的时候会发出“砰”的一声，因此而得名。',
    name_zh2: '爆米餅',
    description_zh2:
      '將米、馬鈴薯、玉米等穀物放入加熱的模具後密封起來，以高溫和高壓炸成。炸出來的時候會發出「砰」的一聲，因而得名。',
  },
  {
    id: 771,
    category: '한과 [Hangwa]',
    name: '산자',
    pronounce: 'Sanja',
    description:
      '불린 찹쌀을 가루 내 쪄서 반죽해 납작하게 밀어 정사각형으로 크게 썰어서 말려두었다가 기름에 튀겨 조청을 묻힌 후 튀긴 밥알이나 깨를 묻힌 과자다. 예로부터 각종 의례나 제례에서 필수음식으로 쓰인다.',
    name_en: 'Fried Rice Squares',
    description_en:
      'Steamed glutinous rice pounded in a mortar, thinly rolled, cut into squares, dried, and deep-fried, after which it is coated with syrup and covered with puffed rice or sesame seeds. Sanja is an essential staple of Korean ancestor worship ceremonies.',
    name_ja: '四角い油菓',
    description_ja:
      '蒸したもち米をペースト状になるまで臼でつき、平たく伸ばし正方形に切って乾燥させたものを油で揚げる。最後に水あめをからめて揚げた米粒やゴマをまぶした菓子。昔から各種儀式や祭礼に必ず使われてきた。',
    name_zh: '馓子油蜜果',
    description_zh:
      '将蒸熟的糯米放入石臼中反复捶打捣成细滑的泥状，擀成扁平的状态后切成正方形晒干，再放入锅中油炸，最后裹上糖稀和油炸的米粒或芝麻即可。馓子油蜜果自古以来就是各种典礼和祭礼中必不可少的食物。',
    name_zh2: '馓子油蜜果',
    description_zh2:
      '將蒸好的糯米放在碓臼裡擊打，使之光滑富有彈性，然後擀成薄餅狀，再切成正方形，放幹後上油鍋炸。最後抹上糖稀，再沾上炸好的飯粒或芝麻。馓子油蜜果自古以來就是各種典禮上不可或缺的一道美食。',
  },
  {
    id: 772,
    category: '한과 [Hangwa]',
    name: '송화다식',
    pronounce: 'Songhwadasik',
    description:
      '송화 가루는 봄철에 소나무에서 채취한 노란색 꽃가루로, 매우 귀한 식재료이다. 송홧가루를 꿀이나 조청으로 반죽하여 다식판에 박아낸 것인데, 주로 혼례상이나 회갑 상, 제사상 등의 의례상에 반드시 등장했던 과자였다.',
    name_en: 'Pine Flower Powder Tea Confectionery',
    description_en:
      'Pine pollen powder, which is collected from pine trees in spring, is a highly prized ingredient. To make this precious snack, yellow pine pollen powder is mixed with honey or syrup and pressed into a tea confectionery mold. It used to be served on important occasions, such as ancestor worship ceremonies, weddings, and 60th birthday banquets, among others.',
    name_ja: '松花粉らくがん',
    description_ja:
      '松花の粉は春に松の木から採取した黄色の花粉でとても貴重な食材。松花の粉を蜂蜜や水あめにからめてこね、らくがんの型で押したもの。主に婚礼の席や還暦祝い、祭事の料理などの行事に使われる菓子だった。',
    name_zh: '松花茶食',
    description_zh:
      '松花粉是春天在松树上采集的黄色花粉，是十分珍贵的食材。将松花粉用蜂蜜或糖稀搅拌后，用茶食模子印出花样即可，是婚宴和寿宴、祭礼等典礼上必不可少的点心。',
    name_zh2: '松花茶食',
    description_zh2:
      '松花粉是人們在春季采自松樹上的一種黃色的花粉，是一種極其珍貴的食材。製作時首先將蜂蜜、糖稀和到松花粉中，然後嵌入茶食板中即可。它是婚禮、花甲宴、祭祀等典禮上必不可少的一道點心。',
  },
  {
    id: 773,
    category: '한과 [Hangwa]',
    name: '수삼정과',
    pronounce: 'Susamjeonggwa',
    description:
      '수삼을 살짝 데쳐, 설탕물이나 꿀 또는 조청에 조린 정과이다. 인삼의 쌉싸래한 맛과 엿물의 달콤한 맛이 어우러져 외국인들에게도 인기가 좋다.',
    name_en: 'Briased Ginseng in Sweet Sauce',
    description_en:
      'Parboiled fresh ginseng preserved in sugared water, honey, or syrup. The bitter taste of ginseng blends so well with sweet honey that even those unfamiliar with ginseng love this snack.',
    name_ja: '生高麗人蔘の砂糖煮',
    description_ja:
      '生の高麗人参をさっと湯がき、砂糖水や蜂蜜、水あめで煮た菓子。高麗人参の苦味と甘みが見事に調和し、外国人にも人気。',
    name_zh: '水参蜜饯',
    description_zh:
      '水参用开水焯一下，捞出后倒入白糖水或蜂蜜、糖稀慢慢熬制的蜜饯。人参特有的苦涩味道和糖浆的甘甜味道形成绝妙的组合，尤其受到外国人的欢迎。',
    name_zh2: '水參蜜餞',
    description_zh2:
      '將水參稍微焯一下，然後在糖水、蜂蜜、糖稀炸製而成。人參的味道微苦，而糖水的味道則很甜，二者融合在一起，味道獨特，也深受外國人的歡迎。',
  },
  {
    id: 774,
    category: '한과 [Hangwa]',
    name: '약과',
    pronounce: 'Yakgwa',
    description:
      '밀가루를 꿀과 참기름으로 반죽해 약과판에 박아 모양을 만들어 기름에 지지거나 튀긴 다음 계핏가루를 넣은 조청이나 꿀에 담갔다가 잣가루를 뿌린다.',
    name_en: 'Honey Cookie',
    description_en:
      'Flour mixed with honey and sesame oil, pressed in a yakgwa pan (yakgwa mold), shallow-fried or deep-fried, dipped in grain syrup or honey, and sprinkled with chopped pine nuts.',
    name_ja: '薬菓',
    description_ja:
      '小麦粉を蜂蜜とごま油でこねて専用の型で抜いて油で揚げ、シナモンを混ぜた水あめや蜂蜜に浸けて、砕いた松の実をまぶしたお菓子。',
    name_zh: '药果（蜜油饼）',
    description_zh:
      '将面粉与蜂蜜、香油和面，用模子压出不同纹样后油炸，在加有桂皮粉的糖稀或蜂蜜中浸泡一下再撒上松籽粉即可。',
    name_zh2: '藥果',
    description_zh2:
      '在麵粉裡摻入麻油、酒、蜂蜜和麵，用模子壓出或切開後油炸。油炸後浸泡在蜂漿後撈出製成藥果。',
  },
  {
    id: 775,
    category: '한과 [Hangwa]',
    name: '양갱',
    pronounce: 'Yanggaeng',
    description:
      '팥을 삶아 체에 거르고 한천, 설탕, 물엿 등을 섞어 졸여 만든 과자이다. 가장 대표적인 팥앙금에 부재료로 고구마, 밤, 호두, 감 등을 넣어 만든 다양한 종류의 양갱이 있다.',
    name_en: 'Sweet Red Bean Jelly',
    description_en:
      'A snack made by straining boiled red beans, mixing mashed red beans with agar, sugar, and starch syrup, and then boiling the mixture down. The main ingredient is red bean paste. Minor ingredients, such as sweet potato, chestnut, walnut, and persimmons, can be added to make various kinds of sweet red bean jelly.',
    name_ja: '羊羹',
    description_ja:
      '小豆をゆでてこし、寒天、砂糖、水あめなどを加えて煮詰めたお菓子。一般的にあんこを使うが、さつまいも、栗、くるみ、柿などを入れて作る羊羹もある。',
    name_zh: '羊羹',
    description_zh:
      '红豆煮熟，用筛子过滤，加入琼脂、白糖、糖稀等后熬制而成。羊羹的种类很多，最具代表性的是在红豆沙中分别加入红薯、栗子、核桃、柿子等。',
    name_zh2: '羊羹',
    description_zh2:
      '將紅豆煮熟，用篩子過濾後拌入洋菜、糖、糖稀等熬製而成的點心。羊羹有很多種類，最具代表性的是只放入紅豆的紅豆羊羹，還有在紅豆泥中加入地瓜、栗子、核桃、柿子等各種羊羹。',
  },
  {
    id: 776,
    category: '한과 [Hangwa]',
    name: '율란',
    pronounce: 'Yulan',
    description:
      '삶은 밤을 잘 으깨어 계핏가루와 꿀을 섞고 반죽하여 밤 모양으로 빚어 만든다. 밑 부분에 꿀을 발라 계피가루, 잣가루 등을 바르기도 한다. 조선의 임금이 먹었던 간식이다.',
    name_en: 'Chestnut Balls',
    description_en:
      'A snack made by finely mashing boiled chestnuts, mixing the mashed chestnuts with honey and cinnamon powder, and kneading the dough to make chestnut-shaped cookies. The bottom of each cookie can be dipped into honey and then into cinnamon powder or ground pine nuts. During the Joseon dynasty, the confection was made for kings.',
    name_ja: '栗卵(栗菓子)',
    description_ja:
      'ゆでた栗を裏ごしして、シナモンや蜂蜜を加えてこねたものを、栗の形に作る。下の部分に蜂蜜を塗ってシナモンや砕いた松の実などをつけることもある。朝鮮王朝の王様がよく食べたおやつ。',
    name_zh: '栗子糕',
    description_zh:
      '将栗子煮熟并捣碎，加入桂皮粉与蜂蜜后揉成栗子的形状。有时也会在底部涂上蜂蜜再裹上桂皮粉或松子粉。是朝鲜君王曾经享用的零食。',
    name_zh2: '栗子糕',
    description_zh2:
      '將栗子煮熟並搗碎，加入桂皮粉與蜂蜜後揉成栗子的形狀。也可在底部塗上蜂蜜，然後沾上桂皮粉或松子粉。是朝鮮君王曾經享用的零食。',
  },
  {
    id: 777,
    category: '한과 [Hangwa]',
    name: '찹쌀꽈배기',
    pronounce: 'Chapssalkkwabaegi',
    description:
      '찹쌀가루와 밀가루를 섞어 반죽해 이스트, 우유와 물을 넣고 발효시킨다. 꽈배기 모양으로 빚어 기름에 튀긴 후 시나몬, 설탕 등을 묻혀 먹는다.',
    name_en: 'Twisted Sweet Rice Doughnut',
    description_en:
      'This snack is made by kneading a dough of glutinous rice powder and wheat flour mixed with yeast, milk, and water. The dough is then fermented, divided and shaped into twists, and deep-fried. Lastly, the doughnuts are coated with cinnamon powder and sugar.',
    name_ja: 'もち米ツイストドーナツ',
    description_ja:
      'もち粉と小麦粉を混ぜて生地にし、イーストや牛乳、水を加えて発酵させる。ツイスト状に形を作り、油で揚げた後、シナモンや砂糖などをまぶして食べる。',
    name_zh: '糯米麻花',
    description_zh:
      '将糯米粉和面粉搅拌，加入酵母、牛奶和水进行发酵，捏成麻花形状后油炸而成。裹上肉桂粉、白糖等即可食用。',
    name_zh2: '糯米麻花多拿滋',
    description_zh2:
      '將糯米粉和麵粉拌勻，加入酵母、牛奶和水進行發酵，把麵團捏成麻花形狀後油炸而成。撒上肉桂粉、糖等食用。',
  },
  {
    id: 778,
    category: '한과 [Hangwa]',
    name: '호두과자',
    pronounce: 'Hodugwaja',
    description:
      '껍질을 벗긴 호두의 속살을 잘게 쪼개거나 갈아서 밀가루와 섞은 다음 호두알 모양으로 둥글게 구워 만든다. 충청남도 천안의 명물이며 한국인의 대표적인 간식이다.',
    name_en: 'Walnut Cake',
    description_en:
      'Walnuts peeled and pounded or ground to be mixed into flour batter and then baked in walnut-shaped baking molds. This popular Korean snack is a local specialty of Cheonan, South Chungcheong Province.',
    name_ja: 'くるみ饅頭',
    description_ja:
      '皮をむいたくるみを細かく砕いたり、粉にしたりして、小麦粉と混ぜてくるみのように丸めて焼く。忠清南道天安市の名物で、韓国の代表的なおやつ。',
    name_zh: '核桃果子',
    description_zh:
      '将去壳核桃仁切碎或磨碎后与面粉搅拌烘烤成核桃仁状。是忠清南道天安的有名美食，也是韩国人常吃的零食。',
    name_zh2: '核桃菓子',
    description_zh2:
      '將去殼核桃仁切碎或磨碎，與麵粉攪拌後烘烤成核桃仁狀即可。是忠清南道天安的特色美食，也是韓國人常吃的零食。',
  },
  {
    id: 779,
    category: '한과 [Hangwa]',
    name: '호박엿',
    pronounce: 'Hobagyeot',
    description:
      '울릉도를 대표하는 특산 엿으로 청둥호박을 고아서 만든다. 호박에는 전분이 많이 함유되어 있기 때문에 엿기름으로 삭혀서 엿을 만들 수 있다.',
    name_en: 'Pumpkin Taffy',
    description_en:
      'A local specialty of Ulleung Island made by boiling down the starch syrup made with a fully ripened pumpkin with hard skin. Pumpkins with a high starch content can be fermented with malt to make taffy.',
    name_ja: 'カボチャ飴',
    description_ja:
      '鬱陵島を代表する特産品で、カボチャをじっくりと煮詰めて作る。カボチャにはデンプンが多く含まれており、麦芽で発酵させて飴を作ることができる。',
    name_zh: '南瓜麦芽糖',
    description_zh:
      '用老南瓜熬制而成的麦芽糖是郁陵岛的代表性特产。南瓜中富含淀粉，因此可以和麦芽一起制成麦芽糖。',
    name_zh2: '南瓜麥芽糖',
    description_zh2:
      '鬱陵島的代表性特產麥芽糖，以老南瓜熬製而成。南瓜富含澱粉，因此可以麥芽熬製成麥芽糖。',
  },
  {
    id: 780,
    category: '한과 [Hangwa]',
    name: '흑임자다식',
    pronounce: 'Heugimjadasik',
    description:
      '흑임자를 살짝 볶아 가루를 내 꿀로 반죽한 후 절구에 넣고 윤이 날 때까지 찧는다. 기름이 나와 윤기가 돌면 다식판에 꼭꼭 눌러 박아 낸다.',
    name_en: 'Black Sesame Tea Confectionery',
    description_en:
      'Lightly toasted and powdered black sesame seeds mixed with honey, pounded into a glaze with a mortar, and pressed into a tea confectionery mold.',
    name_ja: '黒ゴマらくがん',
    description_ja:
      '黒ゴマをさっと炒って粉にし、蜂蜜を加えてこねる。その後、臼に入れてテリが出るまでつく。油分でテリが出てきたら、らくがんの型につめて押す。',
    name_zh: '黑芝麻茶食',
    description_zh:
      '黑芝麻炒至微熟后研磨成粉，加入蜂蜜调和均匀，放入石臼中反复捣至油亮润滑后，用茶食模按压出一定的形状即可。',
    name_zh2: '黑芝麻茶食',
    description_zh2:
      '將黑芝麻稍微炒一下，用蜂蜜攪拌均勻，然後用臼搗碎，直到出油泛光澤。拿出來用茶食模子做出形狀即可。',
  },
  {
    id: 781,
    category: '음청류 [Eumcheongryu]',
    name: '구기자차',
    pronounce: 'Gugijacha',
    description:
      '구기자에 물을 붓고 은근히 달여 기호에 따라 꿀이나 설탕을 타서 마신다. 구기자는 오래 복용하면 눈이 맑아지고 빈혈에도 좋다고 한다.',
    name_en: 'Wolfberry Tea',
    description_en:
      'Wolfberry simmered in water and mixed with sugar or honey. wolfberries are known to help improve eyesight and anemia.',
    name_ja: 'クコの実茶',
    description_ja:
      'クコの実に水を加えて、とろ火で煎じる。好みにより蜂蜜や砂糖を加えて飲む。クコの実は長期的に服用すると目や貧血にいいと言われる。',
    name_zh: '枸杞茶',
    description_zh:
      '壶里倒入适量的水和枸杞慢火熬煮即可，食用时，可根据喜好加入蜂蜜或白糖。长期服用枸杞，不仅可明目，而且有助于治疗贫血。',
    name_zh2: '枸杞茶',
    description_zh2:
      '枸杞加點水熬煮，可根據喜好放入蜂蜜或白糖。常年服用枸杞可以明目，還有助於治療貧血。',
  },
  {
    id: 782,
    category: '음청류 [Eumcheongryu]',
    name: '꽃차',
    pronounce: 'Kkotcha',
    description:
      '꽃이 가지고 있는 고유의 색과 향, 맛을 즐길 수 있도록 여러 가지 방법을 이용해 음료로 만든다. 장미, 국화, 백목련 등 종류가 다양하다.',
    name_en: 'Flower Tea',
    description_en:
      'Tea drinks made in different ways that enable the enjoyment of the unique colors, fragrances, and flavors of flowers. There are a variety of flower teas, such as rose, chrysanthemum, and white magnolia teas.',
    name_ja: '花茶',
    description_ja:
      '花それぞれの色や香り、味を楽しむことができるように、さまざまな方法でお茶を作る。バラ、菊、白木蓮など色々な種類がある。',
    name_zh: '花茶',
    description_zh:
      '用多种方法制成的饮品，保留了花朵特有的色、香、味。有玫瑰茶、菊花茶、白玉兰花茶等种类繁多。',
    name_zh2: '花茶',
    description_zh2:
      '用多種方法製成的飲料，可享受花特有的色、香、味。種類繁多，有玫瑰茶、菊花茶、玉蘭花茶等。',
  },
  {
    id: 783,
    category: '음청류 [Eumcheongryu]',
    name: '녹차',
    pronounce: 'Nokcha',
    description:
      '차나무의 잎을 푸른빛이 그대로 나도록 말린 것으로 뜨거운 물에 우려 마신다. 대표적인 명산지인 보성의 녹차는 감칠맛이 뛰어나고 하동의 녹차는 맑고 풋풋한 맛이 난다.',
    name_en: 'Green Tea',
    description_en:
      'Green tea leaves, dried carefully to preserve the color, are brewed in boiled hot water. Boseong green tea is famous for its deep, long-lasting flavor, and Hadong green tea is famous for its pure, fresh aroma.',
    name_ja: '緑茶',
    description_ja:
      '色が変わらないよう乾燥させたお茶の葉を、熱い湯で煎じて飲む。お茶の産地として有名な全羅南道宝城（チョンラナムド・ポソン）の緑茶は旨みが強く、慶尚南道河東（キョンサンナムド・ハドン）の緑茶は澄んだ清々しい風味で名高い。',
    name_zh: '绿茶',
    description_zh:
      '将茶树的叶子进行晾晒，使之保持原有 的绿色，然后用煮沸的开水浸泡后饮用。韩国 著名的绿茶产地宝城所产的绿茶入口香气令 人回味无穷，而河东所产的绿茶则是特有一 股清新的味道。',
    name_zh2: '綠茶',
    description_zh2: '將茶樹的葉子放入鍋裡炒後曬乾，並用熱水浸泡後飲用。',
  },
  {
    id: 784,
    category: '음청류 [Eumcheongryu]',
    name: '단호박식혜',
    pronounce: 'Danhobaksikhye',
    description:
      '단호박을 삶아 으깬 후 엿기름물에 쌀밥과 함께 넣은 다음 50∼60℃에서 대여섯 시간 삭히면 밥알이 뜨는데, 거기에 설탕을 넣고 끓여 차게 식혀 먹는 전통 음료다.',
    name_en: 'Pumpkin Sweet Rice Punch',
    description_en:
      'A traditional dessert beverage made with boiled and mashed pumpkin and rice in malt, danhobaksikhye is served after having been chilled at a temperature of 50 to 60 ℃ for five to six hours, until the grains of cooked rice can be seen floating in it. Add sugar before serving.',
    name_ja: 'かぼちゃのシケ',
    description_ja:
      '茹でたかぼちゃをつぶし、麦芽を加えた水にご飯と一緒に入れ、50～60℃で 5、6時間発酵させるとご飯つぶが浮いてくる。そこに砂糖を加えて煮て、冷たく冷やして飲む伝統的な飲み物。',
    name_zh: '甜南瓜甜米露',
    description_zh:
      '一种传统饮料，甜南瓜煮熟 捣碎后，和白米饭一起放入麦芽糖水中，置于 50-60度的环境中发酵五六个小时，待米粒浮 起后加入白糖熬煮，放凉后饮用。',
    name_zh2: '甜南瓜甜米露',
    description_zh2:
      '把甜南瓜煮熟後弄碎，跟米飯一起放入麥芽水裡，在50∼60℃容器裡發酵五六個小時後，就能看到米粒浮起來。再加入白糖煮沸後晾涼即可飲用。甜南瓜甜米露是一種傳統飲料。',
  },
  {
    id: 785,
    category: '음청류 [Eumcheongryu]',
    name: '대추차',
    pronounce: 'Daechucha',
    description:
      '대추를 달여서 마시기도 하고, 푹 고아서 베보자기에 넣고 꼭 짜 내린 즙을 다시 은근한 불에 달여서 먹기도 한다. 예로부터 건강차로 많이 애용되고 있다.',
    name_en: 'Jujube Tea',
    description_en:
      'Made by simmering jujubes or straining boiled jujubes through a linen cloth and simmering the extract, jujube tea has long been popular for its health benefits.',
    name_ja: 'なつめ茶',
    description_ja:
      'なつめを煎じて飲んだり、じっくり煎じて麻布で濾したものを再び弱火で煎じて飲む。昔から健康茶として愛用されている。',
    name_zh: '红枣茶',
    description_zh:
      '红枣可直接加水熬煮成茶，也可将煮至烂熟的红枣用细麻布包起来挤出汁液后，再用文火熬煮成茶。红枣茶自古以来就被列为健康养生茶。',
    name_zh2: '紅棗茶',
    description_zh2:
      '將大棗熬煮後直接喝，或者煮爛後用麻布擠出湯汁重新熬成汁喝。自古以來大棗茶都是非常好的保健茶。',
  },
  {
    id: 786,
    category: '음청류 [Eumcheongryu]',
    name: '막걸리',
    pronounce: 'Makgeolli',
    description:
      '찹쌀, 멥쌀, 보리, 밀가루 등의 곡물을 쪄서 누룩과 물을 섞어 발효시킨 한국의 전통주다. 증류 과정을 거치지 않고 막 걸러 마신다 해서 ‘막걸리’라는 이름이 붙었다.',
    name_en: 'Unrefined Rice Wine',
    description_en:
      'This is a traditional Korean alcoholic beverage made by steaming glutinous and non-glutinous rice, barley, andwheat, mixing them with malt and water, and leaving the mixture to undergo fermentation. Makgeolli is one of Korea’s traditional, non- distilled alcoholic beverages.',
    name_ja: 'マッコリ',
    description_ja:
      'もち米、うるち米、麦、小麦などの穀物を蒸し、麹と水を混ぜて発酵させた韓国の伝統酒。蒸留の過程を経ずに「適当にこして（マッコルロ）」飲むことから「マッコリ」という名前が付いた。',
    name_zh: '马格利酒',
    description_zh:
      '将糯米、大米、小麦、面粉等谷物蒸干后加曲子兑水混合发酵而成的韩国传统酒。不经过蒸馏过程，只是将固体物简单地过滤后直接饮用，因此而得名。',
    name_zh2: '馬格利酒',
    description_zh2:
      '把糯米、大米、大麥、麵粉等穀物蒸熟，然後加入酒麴和清水進行發酵的就是韓國傳統酒馬格利酒。這種酒無需蒸餾過程，直接過濾一下就能喝。在韓語裡直接過濾的發音就是馬格利，所以叫做「馬格利」酒。',
  },
  {
    id: 787,
    category: '음청류 [Eumcheongryu]',
    name: '매실차',
    pronounce: 'Maesilcha',
    description:
      '제철에 딴 매실에 같은 양의 설탕을 섞어 서늘한 곳에서 발효시킨 다음 건더기를 건져내고 시원한 곳에 숙성시켰다가 뜨거운 물이나 찬물을 섞어 차로 마신다.',
    name_en: 'Green Plum Tea',
    description_en:
      'Tea made of green plum syrup, served hot or cold. The syrup is made in spring by mixing fresh green plums with an equivalent amount of sugar, leaving it in a cool place, and straining the liquid after it ferments.',
    name_ja: '梅茶',
    description_ja:
      '梅の季節に梅と同量の砂糖を混ぜて涼しい場所で発酵させ、できた液体を熱湯や水で溶いた飲み物。',
    name_zh: '青梅茶',
    description_zh:
      '将时令的梅子用等量的砂糖混合后放置阴凉处进行发酵，然后将里面的梅果捞出后继续放置阴凉处等待熟成，可用热水或冷水勾兑当成茶饮饮用。',
    name_zh2: '青梅茶',
    description_zh2:
      '將春季的梅子放入白糖發酵後，將梅果撈出後梅子露另存。青梅茶可用熱水或冷水沖泡後飲用。',
  },
  {
    id: 788,
    category: '음청류 [Eumcheongryu]',
    name: '모과차',
    pronounce: 'Mogwacha',
    description:
      '모과를 납작하게 썰어서 하루쯤 물기를 말린 뒤 주전자에 모과를 넣고 맛이 우러나도록 달여서 기호에 따라 설탕이나 꿀을 넣고 마신다. 맛이 새콤달콤하며 향기가 좋다.',
    name_en: 'Quince Tea',
    description_en:
      "Quince tea is made by simmering thinly sliced and dried quince for a day or so. Served with sugar or honey, depending upon one's preference, this fragrant tea tastes both sweet and sour.",
    name_ja: 'カリン茶',
    description_ja:
      '薄切りしたカリンを、一日ほど乾燥させる。乾燥させたカリンをやかんに入れて味がにじみでるように煮る。好みにより砂糖や蜂蜜を入れて飲む。すっきりとした甘みと香りがいい。',
    name_zh: '木梨茶',
    description_zh:
      '木梨切成薄片晾晒一天后，在水壶中倒入适量的水和木梨片慢慢熬煮至木瓜味道渗出即可。食用时，可根据喜好加入白糖或蜂蜜。木梨茶味道酸甜，十分清香。',
    name_zh2: '木梨茶',
    description_zh2:
      '將木瓜切成片晾曬一天去掉水分。把晾曬好的木瓜放入水壺裡熬出味道，然後放入白糖或蜂蜜飲用。木梨茶口感酸甜，香氣宜人。',
  },
  {
    id: 789,
    category: '음청류 [Eumcheongryu]',
    name: '미숫가루',
    pronounce: 'Misutgaru',
    description:
      '멥쌀, 찹쌀, 현미, 보리, 콩, 율무 등의 곡물을 쪄서 말린 다음 다시 볶아서 가루로 만든 것이다. 설탕, 얼음, 물을 넣고 타서 마시면 고소한 맛이 일품이며 식사대용으로도 좋다',
    name_en: 'Roasted Grain Powder',
    description_en:
      "A mixture of steamed, dried, roasted, and powdered grains, including short grain rice, glutinous rice, brown rice, barley, beans, Job's tears, and others. Sugar, ice, and water are added to make a tasty drink. This also serves as an excellent meal replacement.",
    name_ja: 'ミスッカル',
    description_ja:
      'うるち米、もち米、玄米、麦、豆、ハト麦などの穀物を蒸して乾燥させ、再び炒って粉にしたもの。砂糖、氷、水を加えて飲む。香ばしい味と香りが絶品。食事の代わりにもなる。',
    name_zh: '油茶面',
    description_zh:
      '粳米、糯米、玄米、大麦、大豆、薏米等谷物蒸熟晒干，放入锅中炒熟后研磨成粉。食用时，放入白糖、冰块和水调和均匀即可，味道香浓且具有饱腹感，可作为代餐饮。',
    name_zh2: '油茶麵',
    description_zh2:
      '將大米、糯米、糙米、大麥、大豆、薏米等穀物蒸熟曬乾，然後炒熟並磨成粉。加入白糖、冰塊兒和清水衝開，不僅美味且營養豐富，還可以做代餐食品。',
  },
  {
    id: 790,
    category: '음청류 [Eumcheongryu]',
    name: '생강차',
    pronounce: 'Saenggangcha',
    description:
      '생강은 깨끗이 씻어 껍질을 벗기고 얇게 편으로 썬 후 주전자에 물, 생강, 대추를 넣고 끓인다. 기호에 따라 마실 때 꿀을 넣어 먹는다. 주로 감기 걸렸을 때 달여 마신다.',
    name_en: 'Ginger Tea',
    description_en:
      "Washed and peeled ginger thinly sliced and boiled with dates and water in a pot. Served with or without honey, depending upon one's preference, ginger tea is known to be a natural remedy for the flu.",
    name_ja: '生姜茶',
    description_ja:
      '生姜をきれいに洗って皮をむき、薄く切ってからやかんに水、生姜、なつめを入れて煮る。好みで蜂蜜を加えて飲む。主に風邪をひいたときに煎じて飲む。',
    name_zh: '姜茶',
    description_zh:
      '生姜洗净、去皮、切成薄片状，水壶中放入水、姜片、红枣一起熬煮即可。食用时，可根据喜好放一些蜂蜜，尤其感冒时适合饮用。',
    name_zh2: '薑茶',
    description_zh2:
      '生薑洗淨後剝掉皮，切成薄片放入水壺裡，加入清水和大棗一起煮茶。可根據喜好放點蜂蜜。一般在感冒時多喝薑茶。',
  },
  {
    id: 791,
    category: '음청류 [Eumcheongryu]',
    name: '수정과',
    pronounce: 'Sujeonggwa',
    description:
      '계피와 생강을 달인 물에 설탕이나 꿀을 섞은 뒤 차게 식혀 마신다. 마실 때는 수정과에 불린 곶감을 넣고 잣을 띄워 먹는다.',
    name_en: 'Cinnamon Punch',
    description_en:
      'A cool drink of simmered fresh ginger and cinnamon sweetened with sugar or honey. Served with softened, dried persimmons and pine nuts.',
    name_ja: 'スジョングァ',
    description_ja:
      'シナモンやしょうがを煮出して、砂糖や蜂蜜を混ぜ、冷やした飲み物。ふやかした干し柿を入れ、松の実を浮かべて飲む。',
    name_zh: '水正果（生姜桂皮茶）',
    description_zh:
      '桂皮和生姜煮水，加 入砂糖和蜂蜜，冷却后饮用。饮用时可加入泡 制好的柿饼和松籽。',
    name_zh2: '水正果',
    description_zh2: '桂皮和生薑加水煮，摻入白糖，再放入乾柿子和松仁，置涼後飲用。',
  },
  {
    id: 792,
    category: '음청류 [Eumcheongryu]',
    name: '식혜',
    pronounce: 'Sikhye',
    description:
      '밥을 엿기름물로 삭힌 다음 설탕을 넣고 끓여 달콤하게 만든 음료로 차갑게 즐긴다. 밥알을 띄워서 마시면 식혜, 밥알을 걸러내고 마시면 감주라고 부른다.',
    name_en: 'Sweet Rice Punch',
    description_en:
      'A traditional dessert beverage made by fermenting rice in malt.Always served cold, it is also called dansul orgamju.',
    name_ja: 'シケ',
    description_ja:
      'ご飯を麦芽で発酵させたものに砂糖を加えて冷やしたもの。ご飯粒が浮かんだもの、ご飯粒をこしたものなどがあり、「カムジュ（甘酒）」とも呼ばれる。',
    name_zh: '甜米露',
    description_zh:
      '把米饭与麦芽一同发酵，然后加入砂糖制成的甜味饮料，多以冷饮食用，并加入一些米粒。将发酵的饭粒和麦芽水一起熬煮的 称为甘酒。',
    name_zh2: '甜米露',
    description_zh2: '把米飯與麥芽一同發酵，加入白糖煮成的香醇甜美的飲料。',
  },
  {
    id: 793,
    category: '음청류 [Eumcheongryu]',
    name: '쌍화차',
    pronounce: 'Ssanghwacha',
    description:
      '백작약, 숙지황, 당귀, 천궁, 계피. 감초 등의 한약재에 물을 부어 약탕기에서 뭉근히 달여 마시는 차다. 취향에 따라 호두, 잣, 달걀 등을 같이 넣어 마시는 보양용 차이다.',
    name_en: 'Medicinal Herb Tea',
    description_en:
      'White woodland peony, rehmannia glutinosa, licorice, cnidium, cinnamon, dong quai root, and other medicinal herbs decocted in a decoction maker. This is an energy-boosting tea that can be enjoyed with walnuts, pine nuts, and eggs, according to one’s preference.',
    name_ja: '双和茶',
    description_ja:
      '白芍薬、熱地黄、川芎、当帰、桂皮、甘草などの漢方薬材に水を注ぎ、とろ火で煎じて飲む。好みによりくるみ、松の実、卵などを加えて飲む滋養茶。',
    name_zh: '双和茶',
    description_zh:
      '将白芍药、熟地黄、当归、川芎、桂皮、甘草等药材和适量的清水倒入药罐子里满满熬煎即可，也可根据个人喜好，加入核桃、松仁、鸡蛋等一起食用，是一种营养滋补的养生茶。',
    name_zh2: '雙和茶',
    description_zh2:
      '在白芍藥、熟地黃、當歸、川芎、桂皮、甘草等中藥材中加水，用藥罐慢慢熬煮製成的茶。根據個人的喜好不同，還可以加入核桃、松子、雞蛋等材料，是一種保健茶。',
  },
  {
    id: 794,
    category: '음청류 [Eumcheongryu]',
    name: '오미자화채',
    pronounce: 'Omijahwachae',
    description:
      '단맛, 신맛, 쓴맛, 짠맛, 매운맛 다섯 가지 맛이 나는 오미자를 물에 담가 우린 물에 설탕이나 꿀, 물을 섞고 꽃 모양으로 만든 배를 띄운 음료다.',
    name_en: 'Omija Punch',
    description_en:
      'A sweet and tangy punch made with omija (schisandra berry), which boasts a complex flavor of five tastes - sweet, sour, bitter, salty, and spicy. Omija is brewed in water and sweetened with sugar or honey. The punch is served with floating slices of Asian pear cut into flower shapes.',
    name_ja: '五味子ポンチ',
    description_ja:
      '甘味、酸味、苦味、塩味、辛味など五つの味を持つ五味子を水に浸け、これを水出ししたものに砂糖や蜂蜜、水を混ぜ、花をかたどった梨を浮かべた飲み物。',
    name_zh: '五味子甜茶',
    description_zh:
      '将带有甜、酸、苦、咸、辣五种味道的五味子用水浸泡，加入砂糖或蜂蜜，再加入切成花纹模样的梨片饮用。',
    name_zh2: '五味子甜茶',
    description_zh2:
      '五味子甜茶是將帶有甜、酸、苦、鹹、辣五種味道的五味子用水浸泡，加入白糖調味的冰涼飲料。',
  },
  {
    id: 795,
    category: '음청류 [Eumcheongryu]',
    name: '유자차',
    pronounce: 'Yujacha',
    description:
      '유자를 얇게 저며 설탕이나 꿀에 재운 다음 겨울에는 뜨겁게, 여름철에는 시원하게 마시는 새콤달콤한 맛의 음료이다.',
    name_en: 'Citrus Tea',
    description_en:
      'Tea made with yuja (Korean citrus) concentrate, which is a preserve made with sliced yuja fruit and sugar or honey. It is a sweet and tart tea served hot in the winter and cold in the summer.',
    name_ja: '柚子茶',
    description_ja:
      '柚子を薄切りにし、砂糖や蜂蜜で漬けたものを、冬は熱湯で溶いて、夏は冷たくして飲む。甘酸っぱい味が特徴。',
    name_zh: '柚子茶',
    description_zh:
      '将柚子切成薄片用砂糖或蜂蜜腌制以后泡水饮用。冬天可用热水、夏天可用冷水浸泡，是一种酸甜可口的美味饮料。',
    name_zh2: '柚子茶',
    description_zh2: '將柚子用白糖醃製以後，泡熱水或涼水飲用。',
  },
  {
    id: 796,
    category: '음청류 [Eumcheongryu]',
    name: '유자화채',
    pronounce: 'Yujahwachae',
    description:
      '채 썬 유자껍질과 배, 유자 속에 꿀물을 부어 그 위에 석류알과 잣을 띄워 시원하게 먹는 음료이다. 달콤한 맛과 유자의 향긋한 내음이 잘 어울린다.',
    name_en: 'Citrus Punch',
    description_en:
      'Julienned pear and citrus peels and the flesh of citrus in chilled honeyed water garnished with pomegranate seeds and pine nuts. The sweet taste and fragrance of citrus are in perfect harmony.',
    name_ja: '柚子ポンチ',
    description_ja:
      '柚子の中に蜂蜜を注ぎ、その上に細切りした柚子の皮、梨、ザクロの実、松の実を浮かべたすっきりとした飲み物。甘みと柚子の香りがよく合う。',
    name_zh: '柚子甜茶',
    description_zh:
      '切成丝的柚子皮和梨以及柚子果肉中倒入蜂蜜水，上面加上几粒石榴和松仁，冰镇后饮用即可。甘甜的味道和柚子的清香，令人感觉回味无穷。',
    name_zh2: '柚子甜茶',
    description_zh2:
      '切成絲的柚子皮、梨、和柚子肉裡倒入蜂蜜水，上面撒一些石榴粒和松仁。柚子果茶香氣宜人，口感香甜清爽。',
  },
  {
    id: 797,
    category: '음청류 [Eumcheongryu]',
    name: '인삼차',
    pronounce: 'Insamcha',
    description:
      '인삼을 물에 넣고 달여 꿀이나 설탕을 섞어 마시는데, 달일 때 대추를 함께 넣으면 향이 훨씬 좋다. 팔팔 끓인 물에 인삼가루를 타서 마시기도 한다.',
    name_en: 'Ginseng Tea',
    description_en:
      'A traditional tea made with brewed fresh ginseng and sweetened with sugar. Jujubes may be added to enhance the aroma. Also made by adding ginseng tea powder to boiled water.',
    name_ja: '高麗人蔘茶',
    description_ja:
      '高麗人参を煮出して、蜂蜜や砂糖を加えた飲み物。なつめを加えて煮ると、香りがいっそう引き立つ。高麗人参の粉を熱い湯で溶かして飲むこともある。',
    name_zh: '人参茶',
    description_zh:
      '人参煮水放入蜂蜜或砂糖饮用，或者 在开水中沏入人参粉饮用。熬煮人参时加入 大枣味道会更好。',
    name_zh2: '人蔘茶',
    description_zh2: '人蔘茶是將水倒入人蔘裡煮出的茶。可穩定身心、恢複元氣，是韓國傳統的滋補茶。',
  },
  {
    id: 798,
    category: '음청류 [Eumcheongryu]',
    name: '칡차',
    pronounce: 'Chikcha',
    description:
      '말린 칡뿌리를 달이거나 볶아 가루로 만들어 뜨거운 물에 타서 마신다. 칡은 숙취해소와 간 건강, 갱년기 증상에 좋다고 알려졌으며 갈근차라고도 한다.',
    name_en: 'Arrowroot Tea',
    description_en:
      'Arrowroot dried and decocted or roasted, powdered, and mixed into water. Arrowroot protects the liver, helps cure a hangover and reduces menopause symptoms. Arrowroot tea is also called "kudzu root tea.',
    name_ja: '葛茶',
    description_ja:
      '干した葛の根を煎じたり、煎って粉にしたりして、お湯に加えて飲むもの。葛は二日酔い、肝臓の健康、更年期に効くとされていて、「葛根茶」とも呼ばれている。',
    name_zh: '葛茶',
    description_zh:
      '将晒干的葛根直接加水熬煮成茶，或炒成粉状后用热水沏开饮用。也叫做葛根茶。葛有着解酒护肝的功效，还有助缓解更年期症状。',
    name_zh2: '葛根茶',
    description_zh2:
      '將曬乾的葛根煎或炒成粉狀，用熱水沖泡飲用。葛根被認為具有解酒護肝的功效，對更年期症狀也有療效。也叫做葛茶。',
  },
  {
    id: 799,
    category: '음청류 [Eumcheongryu]',
    name: '팥빙수',
    pronounce: 'Patbingsu',
    description:
      '얼음을 갈아 삶은 팥을 올려 먹는 빙과류이다. 과일, 떡, 미숫가루, 젤리, 연유 등을 같이 얹어 맛을 내기도 한다.',
    name_en: 'Shaved Ice with Red Bean Topping',
    description_en:
      'Shaved ice topped with boiled red beans. This popular dessert can be topped with many other ingredients, such as fruit, rice cake, misutgaru, jello, and sweetened condensed milk, as well.',
    name_ja: '氷小豆',
    description_ja:
      'かき氷にあんこをのせて食べる氷菓。果物、餅、ミスッカル、ゼリー、練乳などをトッピングして食べる場合もある。',
    name_zh: '红豆刨冰',
    description_zh:
      '用冰块磨成冰沙，上面裹上一层软软绵绵的红豆，还可放入一些水果、米糕、油茶面儿、果冻、炼乳等，舀一勺送进口中，清凉爽口，香浓甘甜的味道令人乐不思蜀。',
    name_zh2: '紅豆刨冰',
    description_zh2:
      '將冰塊刨成碎冰，在上面放上煮好的紅豆即可。有時也會加上各種水果、糕類、炒麵、果凍、煉乳等調味。',
  },
  {
    id: 800,
    category: '음청류 [Eumcheongryu]',
    name: '홍삼차',
    pronounce: 'Hongsamcha',
    description:
      '홍삼 분말이나 홍삼의 성분을 추출한 것을 뜨거운 물에 타서 마신다. 홍삼은 인삼을 찌고 말리는 과정을 반복해 만든다. 고혈압, 당뇨, 피로회복에도 효과가 있다고 알려졌다.',
    name_en: 'Red Ginseng Tea',
    description_en:
      'Red ginseng powder or extract mixed in hot water. Red ginseng is made through a process of repeatedly steaming and drying ginseng and is known for its efficacy in relieving high blood pressure, diabetes, and fatigue.',
    name_ja: '紅参茶',
    description_ja:
      '紅参の粉やその成分を抽出したものをお湯に加えて飲むもの。紅参は高麗人参を何度も蒸して乾燥させて作る。高血圧や糖尿病、疲労回復にも効果があるとされている。',
    name_zh: '红参茶',
    description_zh:
      '将红参粉末或红参提取物用热水冲开饮用。红参是将人参反复蒸晒而成，对高血压、糖尿病、缓解疲劳有一定的效果。',
    name_zh2: '紅蔘茶',
    description_zh2:
      '將紅蔘粉末或紅蔘萃取物用熱水沖泡飲用。紅蔘是將人蔘反覆蒸曬而成，被認為對高血壓、糖尿病、恢復疲勞有一定的功效。',
  },
]
