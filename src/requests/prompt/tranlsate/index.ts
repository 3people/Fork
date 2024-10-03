export interface TranslatePrompt {
  ko: string
  en: string
  ja: string
  zh: string
}

export const translatePrompt: TranslatePrompt = {
  ko: `
    제가 OCR로 읽어들인 메뉴판 내용을 드릴겁니다. 이 내용에는 다양한 정보가 포함되어 있으며, 메뉴의 이름, 가격, 옵션 등이 있을 수 있습니다. 
    또한, 메뉴의 설명이나 기타 추가 정보가 포함될 수 있습니다.
  
    당신의 작업은 이 메뉴판에서 각 메뉴의 정보를 추출하고, 아래 형식에 맞게 JSON 형태로 정리하는 것입니다.
    메뉴판의 내용은 한글이며 반드시 중국어 번역하여야 합니다.
    아래 데이터 형식 이외에 다른 응답은 절대 하지 않습니다.

    예시:
    {
      "title": "",
      "subText": "",
      "menuList": [
        {
          "name": "김밥",
          "price": "3700",
          "description": "꿈을 담은 김밥",
          "optionList": [],
          "allergyInfo": ["쌀","김"],
          "foodItem": ["김밥"]
        },
        {
          "name": "돈까스",
          "price": "7500",
          "description": "수제 등심 돈까스",
          "optionList": [],
          "allergyInfo": ["돼지고기"],
          "foodItem": ["돈까스"]
        },
        {
          "name": "라면",
          "price": "3000",
          "description": "간편하고 따뜻한 국물의 라면 요리",
          "optionList": [
            {
              "name": "계란 추가",
              "price": "700"
            },
            {
              "name": "치즈 추가",
              "price": "700"
            }
          ],
          "allergyInfo": ["밀가루"],
          "foodItem": ["라면"]
        }
      ]
    }
    
    예시 :
    {
      "title": "",
      "subText": ["아구-미국산 / 김치-국내산 / 쌀-국내산"],
      "menuList": [
        {
          "name": "아귀찜",
          "description": "매콤하고 부드러운 아귀살과 콩나물이 어우러진 찜 요리",
          "optionList": [
            {
              "name": "대",
              "price": "60000"
            },
            {
              "name": "중",
              "price": "50000"
            },
            {
              "name": "소",
              "price": "40000"
            }
          ],
          "allergyInfo": ["아귀","콩나물"],
          "foodItem": ["아귀찜"]
        },
        {
          "name": "섞어찜/탕",
          "description": "다양한 해산물과 야채가 풍부하게 들어간 찜 또는 탕 요리",
          "optionList": [
            {
              "name": "대",
              "price": "70000"
            },
            {
              "name": "중",
              "price": "60000"
            }
          ],
          "allergyInfo": [],
          "foodItem": []
        },
        {
          "name": "낙지대하찜/탕",
          "description": "쫄깃한 낙지와 신선한 대하가 조화를 이루는 찜 또는 탕 요리",
          "optionList": [
            {
              "name": "대",
              "price": "60000"
            },
            {
              "name": "중",
              "price": "50000"
            },
            {
              "name": "소",
              "price": "40000"
            }
          ],
          "allergyInfo": ["낙지","새우"],
          "foodItem": ["낙지 대하찜"]
        },
        {
          "name": "복분자",
          "description": "상큼하고 달콤한 복분자 주스 또는 음료",
          "optionList": [],
          "price": "10000",
          "allergyInfo": ["복분자"],
          "foodItem": ["복분자"]
        }
      ]
    }
    
    예시 : 
    {
      "title": "",
      "subText": "",
      "menuList": [
        {
          "name": "닭한마리",
          "description": "신선한 닭고기를 통째로 끓여낸 건강한 국물 요리",
          "optionList": [
           {
              "name": "소",
              "price": "20000"
            },
            {
              "name": "중",
              "price": "23000"
            },
            {
              "name": "대",
              "price": "28000"
            }
          ],
          "allergyInfo": ["닭고기"],
          "foodItem": ["닭"]
        },
        {
          "name": "닭볶음탕",
          "description": "매콤하고 진한 양념으로 맛을 낸 닭고기 볶음탕",
          "optionList": [
           {
              "name": "소",
              "price": "22000"
            },
            {
              "name": "중",
              "price": "25000"
            },
            {
              "name": "대",
              "price": "30000"
            }
          ],
          "allergyInfo": ["닭고기"],
          "foodItem": ["닭볶음탕"]
        },
        {
          "name": "메밀전병",
          "price": "9000",
          "description": "메밀 반죽으로 만든 전병, 고소한 맛이 일품",
          "optionList": [],
          "allergyInfo": ["메밀","밀가루"],
          "foodItem": ["메밀전병"]
        },
        {
          "name": "양념 코다리구이",
          "price": "12000",
          "description": "달콤하고 매콤한 양념으로 구워낸 코다리 요리",
          "optionList": [],
          "allergyInfo": ["코다리"],
          "foodItem": ["코다리"]
        }
      ]
    }
    
    예시 :
    {
      "title": "미미당돈까스",
      "subText": "",
      "menuList": [
        {
          "name": "생삼겹살",
          "price": "15000",
          "description": "신선한 고기",
          "optionList": [],
          "allergyInfo": ["돼지고기"],
          "foodItem": ["삼겹살"]
        },
        {
          "name": "돈까스",
          "price": "7500",
          "description": "수제 등심 돈까스",
          "optionList": [],
          "allergyInfo": ["밀가루", "돼지고기"],
          "foodItem": ["돈까스"]
        },
        {
          "name": "라면",
          "price": "3000",
          "description": "간편하고 따뜻한 국물의 라면 요리",
          "optionList": [
            {
              "name": "계란 추가",
              "price": "700"
            },
            {
              "name": "치즈 추가",
              "price": "700"
            }
          ],
          "allergyInfo": ["계란", "유제품", "밀가루"],
          "foodItem": ["라면"]
        },
        {
          "name": "생등심",
          "price": "15000",
          "description": "부드럽고 육즙이 풍부한 소고기 등심",
          "optionList": [],
          "allergyInfo": ["소고기"],
          "foodItem": ["등심"]
        },
        {
          "name": "돈코츠 라멘",
          "price": "9000",
          "description": "진한 돼지뼈 육수로 만든 일본식 라멘",
          "optionList": [],
          "allergyInfo": ["돼지고기"],
          "foodItem": ["라멘"]
        }
      ]
    }
    
    
    - **title**: 메뉴판 제목 또는 가게 이름 (있을 경우)
    - **subText**: 메뉴판에 포함된 설명이나 기타 부가 텍스트 (있을 경우)
    
    - **메뉴 목록**
      - name: 메뉴 이름
      - price: 메뉴 가격
      - description: 메뉴 설명 (비어있다면 메뉴에 대한 적절한 설명을 생성해주세요)
      - optionList: 메뉴의 옵션 리스트 (있을 경우, 예: 추가 토핑 등)
      - allergyInfo: 알레르기 정보 (있을 경우, name을 보고 알레르기가 있을거로 예상되는 재료를 써주세요. 예: name = "새우튀김" : allergyInfo = "새우","밀가루" name = "아구찜" : allergyInfo = "생선","콩나물", name = "돈코츠 라멘" : allergyInfo = "돼지고기")
      - foodItem: 포함된 음식의 종류 (있을 경우, name에 들어간 재료 정보를 나열해주세요. 예:"양파", "토마토", "오이", "상추", "고추", "감자", "당근", "브로콜리", "시금치", "사과", "바나나", "딸기", "포도", "오렌지", "수박", "소고기", "돼지고기", "닭고기", "생선", "쌀", "국수", "달걀", "우유", "빵", "치즈", "버터")
    
    만약 메뉴들 중 대,중,소에 대한 optionList정보가 있을 경우
    그 뒤에는 대,중,소에 대한 정보 없이 가격만 있는 경우가 있습니다.
    가격만 혼자 있을 경우 앞의 메뉴에 추가해서 optionList를 구분해서 추가해주세요.
    만약 아귀찜/탕 대 60,000 사이즈 정보 50,000 40000 이런 정보가 있을 경우
    이것은 아귀찜/탕 안에 있는 대 60,00 중 50,000 소 40,000에 대한 정보입니다.
    
    optionList의 경우
    "대"는 "중"과 "소" 보다 가격이 비싸고
    "중"은 "대"보다는 저렴하고, "소"보다는 비쌉니다.
    "소"는 "대"와 "중"보다 저렴합니다.
    이것을 참고해주세요.
    
    한번 사용된 정보는 두 번 다시 사용하지 않습니다.
    
    메뉴판의 내용은 한글이며 반드시 중국어로 번역하여야 합니다.
    
    OCR로 읽어들인 메뉴판 내용은 다음과 같으니, 이 내용을 위의 형식으로 정리해주세요.
    `,
  en: `I will provide you with the content of a menu that I've read using OCR. This content may include various information such as menu item names, prices, options, and other additional details.

Your task is to extract the information for each menu item and organize it into a JSON format according to the structure below. The menu content is in Korean, and it must be translated into English.

Do not provide any response other than the data in the format specified below.

Example:

{
  "title": "",
  "subText": "",
  "menuList": [
    {
      "name": "Gimbap",
      "price": "3700",
      "description": "Gimbap filled with dreams",
      "optionList": [],
      "allergyInfo": ["Rice","Seaweed"],
      "foodItem": ["Gimbap"]
    },
    {
      "name": "Pork Cutlet",
      "price": "7500",
      "description": "Homemade pork loin cutlet",
      "optionList": [],
      "allergyInfo": ["Pork"],
      "foodItem": ["Pork cutlet"]
    },
    {
      "name": "Ramen",
      "price": "3000",
      "description": "Simple and warm soup noodle dish",
      "optionList": [
        {
          "name": "Add egg",
          "price": "700"
        },
        {
          "name": "Add cheese",
          "price": "700"
        }
      ],
      "allergyInfo": ["Wheat flour"],
      "foodItem": ["Ramen"]
    }
  ]
}

Example:

{
  "title": "",
  "subText": ["Monkfish - US / Kimchi - Domestic / Rice - Domestic"],
  "menuList": [
    {
      "name": "Braised Monkfish",
      "description": "A spicy braised dish with tender monkfish and bean sprouts",
      "optionList": [
        {
          "name": "Large",
          "price": "60000"
        },
        {
          "name": "Medium",
          "price": "50000"
        },
        {
          "name": "Small",
          "price": "40000"
        }
      ],
      "allergyInfo": ["Monkfish","Bean sprouts"],
      "foodItem": ["Braised monkfish"]
    },
    {
      "name": "Mixed Braised/Soup",
      "description": "A braised or soup dish rich with various seafood and vegetables",
      "optionList": [
        {
          "name": "Large",
          "price": "70000"
        },
        {
          "name": "Medium",
          "price": "60000"
        }
      ],
      "allergyInfo": [],
      "foodItem": []
    },
    {
      "name": "Octopus and Shrimp Braised/Soup",
      "description": "A braised or soup dish combining chewy octopus and fresh shrimp",
      "optionList": [
        {
          "name": "Large",
          "price": "60000"
        },
        {
          "name": "Medium",
          "price": "50000"
        },
        {
          "name": "Small",
          "price": "40000"
        }
      ],
      "allergyInfo": ["Octopus","Shrimp"],
      "foodItem": ["Octopus shrimp braised"]
    },
    {
      "name": "Black Raspberry",
      "description": "A tangy and sweet black raspberry juice or beverage",
      "optionList": [],
      "price": "10000",
      "allergyInfo": ["Black raspberry"],
      "foodItem": ["Black raspberry"]
    }
  ]
}

Example:

{
  "title": "",
  "subText": "",
  "menuList": [
    {
      "name": "Whole Chicken",
      "description": "A healthy soup dish made by boiling a whole fresh chicken",
      "optionList": [
       {
          "name": "Small",
          "price": "20000"
        },
        {
          "name": "Medium",
          "price": "23000"
        },
        {
          "name": "Large",
          "price": "28000"
        }
      ],
      "allergyInfo": ["Chicken"],
      "foodItem": ["Chicken"]
    },
    {
      "name": "Spicy Braised Chicken",
      "description": "Braised chicken in a spicy and rich sauce",
      "optionList": [
       {
          "name": "Small",
          "price": "22000"
        },
        {
          "name": "Medium",
          "price": "25000"
        },
        {
          "name": "Large",
          "price": "30000"
        }
      ],
      "allergyInfo": ["Chicken"],
      "foodItem": ["Spicy braised chicken"]
    },
    {
      "name": "Buckwheat Pancake",
      "price": "9000",
      "description": "A pancake made with buckwheat batter, known for its nutty flavor",
      "optionList": [],
      "allergyInfo": ["Buckwheat","Wheat flour"],
      "foodItem": ["Buckwheat pancake"]
    },
    {
      "name": "Seasoned Grilled Half-Dried Pollack",
      "price": "12000",
      "description": "Grilled half-dried pollack with a sweet and spicy seasoning",
      "optionList": [],
      "allergyInfo": ["Pollack"],
      "foodItem": ["Pollack"]
    }
  ]
}

Example:

{
  "title": "MiMi Dang Pork Cutlet",
  "subText": "",
  "menuList": [
    {
      "name": "Fresh Pork Belly",
      "price": "15000",
      "description": "Fresh meat",
      "optionList": [],
      "allergyInfo": ["Pork"],
      "foodItem": ["Pork belly"]
    },
    {
      "name": "Pork Cutlet",
      "price": "7500",
      "description": "Homemade pork loin cutlet",
      "optionList": [],
      "allergyInfo": ["Wheat flour", "Pork"],
      "foodItem": ["Pork cutlet"]
    },
    {
      "name": "Ramen",
      "price": "3000",
      "description": "Simple and warm soup noodle dish",
      "optionList": [
        {
          "name": "Add egg",
          "price": "700"
        },
        {
          "name": "Add cheese",
          "price": "700"
        }
      ],
      "allergyInfo": ["Egg", "Dairy", "Wheat flour"],
      "foodItem": ["Ramen"]
    },
    {
      "name": "Fresh Beef Sirloin",
      "price": "15000",
      "description": "Tender and juicy beef sirloin",
      "optionList": [],
      "allergyInfo": ["Beef"],
      "foodItem": ["Sirloin"]
    },
    {
      "name": "Tonkotsu Ramen",
      "price": "9000",
      "description": "Japanese-style ramen with rich pork bone broth",
      "optionList": [],
      "allergyInfo": ["Pork"],
      "foodItem": ["Ramen"]
    }
  ]
}

- title: Menu title or restaurant name (if available)
- subText: Description or additional text included in the menu (if available)

- Menu List
  - name: Menu item name
  - price: Menu item price
  - description: Menu item description (if empty, please generate an appropriate description for the menu item)
  - optionList: List of menu options (if available, e.g., additional toppings)
  - allergyInfo: Allergy information (if available, please list potential allergens based on the item name. For example, name = "Fried Shrimp": allergyInfo = "Shrimp","Wheat flour" name = "Braised Monkfish": allergyInfo = "Fish","Bean sprouts", name = "Tonkotsu Ramen": allergyInfo = "Pork")
  - foodItem: Types of food included (if available, please list the ingredients mentioned in the name. For example: "Onion", "Tomato", "Cucumber", "Lettuce", "Pepper", "Potato", "Carrot", "Broccoli", "Spinach", "Apple", "Banana", "Strawberry", "Grape", "Orange", "Watermelon", "Beef", "Pork", "Chicken", "Fish", "Rice", "Noodles", "Egg", "Milk", "Bread", "Cheese", "Butter")

If there is optionList information for Large, Medium, and Small sizes among the menu items, there may be cases where only the price is listed without size information afterwards. In such cases, please add this information to the previous menu item's optionList, categorizing it accordingly.

If there is information like "Braised Monkfish/Soup Large 60,000 Size information 50,000 40000", this refers to Large 60,000, Medium 50,000, and Small 40,000 for the Braised Monkfish/Soup item.

For the optionList:
"Large" is more expensive than "Medium" and "Small"
"Medium" is cheaper than "Large" but more expensive than "Small"
"Small" is cheaper than "Large" and "Medium"
Please keep this in mind.

Do not use the same information twice.

The menu content is in Korean and must be translated into English.

Please organize the OCR-read menu content according to the format above.`,
  ja: `私がOCRで読み取ったメニューの内容をお伝えします。この内容には、メニューの名前、価格、オプションなど、さまざまな情報が含まれている可能性があります。また、メニューの説明やその他の追加情報が含まれている場合もあります。

あなたの作業は、このメニューから各メニューの情報を抽出し、以下の形式に従ってJSON形式で整理することです。
メニューの内容は韓国語ですが、必ず日本語に翻訳する必要があります。
以下のデータ形式以外の応答は絶対に行わないでください。

例：
{
  "title": "",
  "subText": "",
  "menuList": [
    {
      "name": "キンパ",
      "price": "3700",
      "description": "夢を込めたキンパ",
      "optionList": [],
      "allergyInfo": ["米","海苔"],
      "foodItem": ["キンパ"]
    },
    {
      "name": "とんかつ",
      "price": "7500",
      "description": "手作りロースとんかつ",
      "optionList": [],
      "allergyInfo": ["豚肉"],
      "foodItem": ["とんかつ"]
    },
    {
      "name": "ラーメン",
      "price": "3000",
      "description": "手軽で温かいスープのラーメン料理",
      "optionList": [
        {
          "name": "卵追加",
          "price": "700"
        },
        {
          "name": "チーズ追加",
          "price": "700"
        }
      ],
      "allergyInfo": ["小麦粉"],
      "foodItem": ["ラーメン"]
    }
  ]
}

例：
{
  "title": "",
  "subText": ["アンコウ-アメリカ産 / キムチ-国内産 / 米-国内産"],
  "menuList": [
    {
      "name": "アンコウの蒸し物",
      "description": "辛味のあるやわらかいアンコウの身ともやしが調和した蒸し料理",
      "optionList": [
        {
          "name": "大",
          "price": "60000"
        },
        {
          "name": "中",
          "price": "50000"
        },
        {
          "name": "小",
          "price": "40000"
        }
      ],
      "allergyInfo": ["アンコウ","もやし"],
      "foodItem": ["アンコウの蒸し物"]
    },
    {
      "name": "ミックス蒸し/スープ",
      "description": "様々な海鮮と野菜が豊富に入った蒸し料理またはスープ料理",
      "optionList": [
        {
          "name": "大",
          "price": "70000"
        },
        {
          "name": "中",
          "price": "60000"
        }
      ],
      "allergyInfo": [],
      "foodItem": []
    },
    {
      "name": "テナガダコと大エビの蒸し/スープ",
      "description": "コリコリしたテナガダコと新鮮な大エビが調和する蒸し料理またはスープ料理",
      "optionList": [
        {
          "name": "大",
          "price": "60000"
        },
        {
          "name": "中",
          "price": "50000"
        },
        {
          "name": "小",
          "price": "40000"
        }
      ],
      "allergyInfo": ["タコ","エビ"],
      "foodItem": ["テナガダコ 大エビの蒸し物"]
    },
    {
      "name": "ボクブンジャ",
      "description": "さっぱりと甘いボクブンジャジュースまたは飲料",
      "optionList": [],
      "price": "10000",
      "allergyInfo": ["ボクブンジャ"],
      "foodItem": ["ボクブンジャ"]
    }
  ]
}

例：
{
  "title": "",
  "subText": "",
  "menuList": [
    {
      "name": "丸鶏一匹",
      "description": "新鮮な鶏肉を丸ごと煮込んだ健康的なスープ料理",
      "optionList": [
       {
          "name": "小",
          "price": "20000"
        },
        {
          "name": "中",
          "price": "23000"
        },
        {
          "name": "大",
          "price": "28000"
        }
      ],
      "allergyInfo": ["鶏肉"],
      "foodItem": ["鶏"]
    },
    {
      "name": "タッポックムタン",
      "description": "辛味のある濃厚な味付けで味わう鶏肉の煮込み料理",
      "optionList": [
       {
          "name": "小",
          "price": "22000"
        },
        {
          "name": "中",
          "price": "25000"
        },
        {
          "name": "大",
          "price": "30000"
        }
      ],
      "allergyInfo": ["鶏肉"],
      "foodItem": ["タッポックムタン"]
    },
    {
      "name": "そば粉のチヂミ",
      "price": "9000",
      "description": "そば粉の生地で作ったチヂミ、香ばしい味が絶品",
      "optionList": [],
      "allergyInfo": ["そば","小麦粉"],
      "foodItem": ["そば粉のチヂミ"]
    },
    {
      "name": "味付けコダリの焼き物",
      "price": "12000",
      "description": "甘辛い味付けで焼き上げたコダリ料理",
      "optionList": [],
      "allergyInfo": ["コダリ"],
      "foodItem": ["コダリ"]
    }
  ]
}

例：
{
  "title": "ミミダンとんかつ",
  "subText": "",
  "menuList": [
    {
      "name": "生サムギョプサル",
      "price": "15000",
      "description": "新鮮な肉",
      "optionList": [],
      "allergyInfo": ["豚肉"],
      "foodItem": ["サムギョプサル"]
    },
    {
      "name": "とんかつ",
      "price": "7500",
      "description": "手作りロースとんかつ",
      "optionList": [],
      "allergyInfo": ["小麦粉", "豚肉"],
      "foodItem": ["とんかつ"]
    },
    {
      "name": "ラーメン",
      "price": "3000",
      "description": "手軽で温かいスープのラーメン料理",
      "optionList": [
        {
          "name": "卵追加",
          "price": "700"
        },
        {
          "name": "チーズ追加",
          "price": "700"
        }
      ],
      "allergyInfo": ["卵", "乳製品", "小麦粉"],
      "foodItem": ["ラーメン"]
    },
    {
      "name": "生ロース",
      "price": "15000",
      "description": "柔らかくジューシーな牛ロース",
      "optionList": [],
      "allergyInfo": ["牛肉"],
      "foodItem": ["ロース"]
    },
    {
      "name": "豚骨ラーメン",
      "price": "9000",
      "description": "濃厚な豚骨スープで作った日本風ラーメン",
      "optionList": [],
      "allergyInfo": ["豚肉"],
      "foodItem": ["ラーメン"]
    }
  ]
}


- **title**: メニューのタイトルまたは店舗名（ある場合）
- **subText**: メニューに含まれる説明やその他の補足テキスト（ある場合）

- **メニューリスト**
  - name: メニュー名
  - price: メニュー価格
  - description: メニューの説明（空欄の場合は、メニューに適切な説明を生成してください）
  - optionList: メニューのオプションリスト（ある場合、例：追加トッピングなど）
  - allergyInfo: アレルギー情報（ある場合、nameを見てアレルギーがありそうな材料を書いてください。例：name = "エビフライ" : allergyInfo = "エビ","小麦粉" name = "アンコウの蒸し物" : allergyInfo = "魚","もやし", name = "豚骨ラーメン" : allergyInfo = "豚肉"）
  - foodItem: 含まれる食品の種類（ある場合、nameに含まれる材料情報を列挙してください。例："タマネギ", "トマト", "キュウリ", "レタス", "唐辛子", "ジャガイモ", "ニンジン", "ブロッコリー", "ホウレンソウ", "リンゴ", "バナナ", "イチゴ", "ブドウ", "オレンジ", "スイカ", "牛肉", "豚肉", "鶏肉", "魚", "米", "麺", "卵", "牛乳", "パン", "チーズ", "バター"）

メニューの中に大、中、小に関するoptionList情報がある場合、
その後に大、中、小に関する情報なしで価格のみがある場合があります。
価格のみが単独である場合、前のメニューに追加してoptionListを区別して追加してください。
例えば、アンコウの蒸し物/スープ 大 60,000 サイズ情報 50,000 40000 というような情報がある場合、
これはアンコウの蒸し物/スープ内の大 60,000 中 50,000 小 40,000に関する情報です。

optionListの場合
"大"は"中"と"小"より価格が高く、
"中"は"大"より安く、"小"より高いです。
"小"は"大"と"中"より安いです。
これを参考にしてください。

一度使用された情報は二度と使用しません。

メニューの内容は韓国語ですが、必ず日本語に翻訳する必要があります。

OCRで読み取ったメニューの内容は以下の通りですので、この内容を上記の形式で整理してください。`,
  zh: `
我将为您提供通过OCR读取的菜单内容。这些内容可能包含各种信息，如菜品名称、价格、选项等。
还可能包含菜品描述或其他附加信息。

您的任务是从这份菜单中提取每个菜品的信息，并按照以下格式整理成JSON形式。
菜单内容为韩语，必须翻译成中文。
除了以下数据格式外，绝对不要添加其他回应。

示例：
{
  "title": "",
  "subText": "",
  "menuList": [
    {
      "name": "紫菜包饭",
      "price": "3700",
      "description": "充满梦想的紫菜包饭",
      "optionList": [],
      "allergyInfo": ["大米","海苔"],
      "foodItem": ["紫菜包饭"]
    },
    {
      "name": "炸猪排",
      "price": "7500",
      "description": "手工里脊肉炸猪排",
      "optionList": [],
      "allergyInfo": ["猪肉"],
      "foodItem": ["炸猪排"]
    },
    {
      "name": "拉面",
      "price": "3000",
      "description": "简便而温暖的汤面料理",
      "optionList": [
        {
          "name": "加鸡蛋",
          "price": "700"
        },
        {
          "name": "加奶酪",
          "price": "700"
        }
      ],
      "allergyInfo": ["面粉"],
      "foodItem": ["拉面"]
    }
  ]
}

示例：
{
  "title": "",
  "subText": ["鮟鱇鱼-美国产 / 泡菜-韩国产 / 大米-韩国产"],
  "menuList": [
    {
      "name": "鮟鱇鱼炖",
      "description": "辣味柔软的鮟鱇鱼肉与豆芽完美融合的炖菜",
      "optionList": [
        {
          "name": "大",
          "price": "60000"
        },
        {
          "name": "中",
          "price": "50000"
        },
        {
          "name": "小",
          "price": "40000"
        }
      ],
      "allergyInfo": ["鮟鱇鱼","豆芽"],
      "foodItem": ["鮟鱇鱼炖"]
    },
    {
      "name": "什锦炖/汤",
      "description": "丰富多样的海鲜和蔬菜的炖菜或汤",
      "optionList": [
        {
          "name": "大",
          "price": "70000"
        },
        {
          "name": "中",
          "price": "60000"
        }
      ],
      "allergyInfo": [],
      "foodItem": []
    },
    {
      "name": "章鱼大虾炖/汤",
      "description": "嚼劲十足的章鱼和新鲜大虾和谐搭配的炖菜或汤",
      "optionList": [
        {
          "name": "大",
          "price": "60000"
        },
        {
          "name": "中",
          "price": "50000"
        },
        {
          "name": "小",
          "price": "40000"
        }
      ],
      "allergyInfo": ["章鱼","虾"],
      "foodItem": ["章鱼大虾炖"]
    },
    {
      "name": "覆盆子酒",
      "description": "清新甜美的覆盆子果汁或饮料",
      "optionList": [],
      "price": "10000",
      "allergyInfo": ["覆盆子"],
      "foodItem": ["覆盆子"]
    }
  ]
}

示例：
{
  "title": "",
  "subText": "",
  "menuList": [
    {
      "name": "整只鸡",
      "description": "将新鲜整只鸡熬制的健康汤品",
      "optionList": [
       {
          "name": "小",
          "price": "20000"
        },
        {
          "name": "中",
          "price": "23000"
        },
        {
          "name": "大",
          "price": "28000"
        }
      ],
      "allergyInfo": ["鸡肉"],
      "foodItem": ["鸡"]
    },
    {
      "name": "辣炒鸡",
      "description": "以辣味浓郁的调味料烹制的鸡肉炖菜",
      "optionList": [
       {
          "name": "小",
          "price": "22000"
        },
        {
          "name": "中",
          "price": "25000"
        },
        {
          "name": "大",
          "price": "30000"
        }
      ],
      "allergyInfo": ["鸡肉"],
      "foodItem": ["辣炒鸡"]
    },
    {
      "name": "荞麦煎饼",
      "price": "9000",
      "description": "用荞麦面糊制作的煎饼，口感香浓可口",
      "optionList": [],
      "allergyInfo": ["荞麦","面粉"],
      "foodItem": ["荞麦煎饼"]
    },
    {
      "name": "调味明太鱼烤",
      "price": "12000",
      "description": "以甜辣酱料烤制的明太鱼料理",
      "optionList": [],
      "allergyInfo": ["明太鱼"],
      "foodItem": ["明太鱼"]
    }
  ]
}

示例：
{
  "title": "咪咪堂炸猪排",
  "subText": "",
  "menuList": [
    {
      "name": "生五花肉",
      "price": "15000",
      "description": "新鲜的肉",
      "optionList": [],
      "allergyInfo": ["猪肉"],
      "foodItem": ["五花肉"]
    },
    {
      "name": "炸猪排",
      "price": "7500",
      "description": "手工里脊肉炸猪排",
      "optionList": [],
      "allergyInfo": ["面粉", "猪肉"],
      "foodItem": ["炸猪排"]
    },
    {
      "name": "拉面",
      "price": "3000",
      "description": "简便而温暖的汤面料理",
      "optionList": [
        {
          "name": "加鸡蛋",
          "price": "700"
        },
        {
          "name": "加奶酪",
          "price": "700"
        }
      ],
      "allergyInfo": ["鸡蛋", "乳制品", "面粉"],
      "foodItem": ["拉面"]
    },
    {
      "name": "生里脊肉",
      "price": "15000",
      "description": "柔嫩多汁的牛里脊肉",
      "optionList": [],
      "allergyInfo": ["牛肉"],
      "foodItem": ["里脊肉"]
    },
    {
      "name": "豚骨拉面",
      "price": "9000",
      "description": "用浓郁的猪骨高汤制作的日式拉面",
      "optionList": [],
      "allergyInfo": ["猪肉"],
      "foodItem": ["拉面"]
    }
  ]
}


- **title**: 菜单标题或店名（如果有）
- **subText**: 菜单中包含的说明或其他附加文字（如果有）

- **菜单列表**
  - name: 菜品名称
  - price: 菜品价格
  - description: 菜品描述（如果为空，请为菜品生成适当的描述）
  - optionList: 菜品选项列表（如果有，例如：额外配料等）
  - allergyInfo: 过敏信息（如果有，请根据name猜测可能引起过敏的原料。例如：name = "炸虾" : allergyInfo = "虾","面粉" name = "鮟鱇鱼炖" : allergyInfo = "鱼","豆芽", name = "豚骨拉面" : allergyInfo = "猪肉"）
  - foodItem: 包含的食物种类（如果有，请列出name中包含的食材信息。例如："洋葱", "番茄", "黄瓜", "生菜", "辣椒", "土豆", "胡萝卜", "西兰花", "菠菜", "苹果", "香蕉", "草莓", "葡萄", "橙子", "西瓜", "牛肉", "猪肉", "鸡肉", "鱼", "大米", "面条", "鸡蛋", "牛奶", "面包", "奶酪", "黄油"）

如果菜单中有关于大、中、小的optionList信息，
之后可能会出现只有价格而没有大、中、小信息的情况。
当只有价格单独存在时，请将其添加到前面的菜单中，并区分optionList。
如果出现类似"鮟鱇鱼炖/汤 大 60,000 尺寸信息 50,000 40000"这样的信息，
这是关于鮟鱇鱼炖/汤中的大60,000 中50,000 小40,000的信息。

关于optionList
"大"比"中"和"小"的价格更贵
"中"比"大"便宜，但比"小"贵
"小"比"大"和"中"便宜
请参考这一点。

已使用的信息不要重复使用。

菜单内容为韩语，必须翻译成中文。

以下是通过OCR读取的菜单内容，请按上述格式整理这些内容。
`,
}
