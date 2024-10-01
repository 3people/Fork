interface TranslatePrompt {
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
    아래 데이터 형식 이외에 다른 응답은 절대 하지 않습니다.

    예시:
    {
      "title": "",
      "subText": "",
      "menuList": [
        {
          "name": "김밥",
          "price": 3700,
          "description": "꿈을 담은 김밥",
          "optionList": [],
          "allergyInfo": ["쌀","김"],
          "foodItem": ["김밥"]
        },
        {
          "name": "돈까스",
          "price": 7500,
          "description": "수제 등심 돈까스",
          "optionList": [],
          "allergyInfo": ["돼지고기"],
          "foodItem": ["돈까스"]
        },
        {
          "name": "라면",
          "price": 3000,
          "description": "",
          "optionList": [
            {
              "name": "계란 추가",
              "price": 700
            },
            {
              "name": "치즈 추가",
              "price": 700
            }
          ],
          "allergyInfo": ["밀가루"],
          "foodItem": ["라면"]
        },
        {
          "name": "새우튀김",
          "price": 5000,
          "description": "",
          "optionList": [],
          "allergyInfo": ["새우", "밀가루"],
          "foodItem": ["튀김"]
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
          "description": "",
          "optionList": [
            {
              "name": "대",
              "price": 60000
            },
            {
              "name": "중",
              "price": 50000
            },
            {
              "name": "소",
              "price": 40000
            }
          ],
          "allergyInfo": ["아귀","콩나물"],
          "foodItem": ["아귀찜"]
        },
        {
          "name": "섞어찜/탕",
          "description": "",
          "optionList": [
            {
              "name": "대",
              "price": 70000
            },
            {
              "name": "중",
              "price": 60000
            }
          ],
          "allergyInfo": [],
          "foodItem": []
        },
        {
          "name": "낙지대하찜/탕",
          "description": "",
          "optionList": [
            {
              "name": "대",
              "price": 60000
            },
            {
              "name": "중",
              "price": 50000
            },
            {
              "name": "소",
              "price": 40000
            }
          ],
          "allergyInfo": ["낙지","새우"],
          "foodItem": ["낙지 대하찜"]
        },
        {
          "name": "복분자",
          "description": "",
          "optionList": [],
          "price": 10000,
          "allergyInfo": ["복분자"],
          "foodItem": ["복분자"]
        }
      ]
    }
    
    예시:
    {
      "title": "",
      "subText": "",
      "menuList": [
        {
          "name": "닭한마리",
          "description": "",
          "optionList": [
           {
              "name": "소",
              "price": 20000
            },
            {
              "name": "중",
              "price": 23000
            },
            {
              "name": "대",
              "price": 28000
            }
          ],
          "allergyInfo": ["닭고기"],
          "foodItem": ["닭"]
        },
        {
          "name": "닭볶음탕",
          "description": "",
          "optionList": [
           {
              "name": "소",
              "price": 22000
            },
            {
              "name": "중",
              "price": 25000
            },
            {
              "name": "대",
              "price": 30000
            }
          ],
          "allergyInfo": ["닭고기"],
          "foodItem": ["닭볶음탕"]
        },
        {
          "name": "메밀전병",
          "price": 9000,
          "description": "",
          "optionList": [],
          "allergyInfo": ["메밀","밀가루"],
          "foodItem": ["메밀전병"]
        },
        {
          "name": "양념 코다리구이",
          "price": 12000,
          "description": "",
          "optionList": [],
          "allergyInfo": ["코다리"],
          "foodItem": ["코다리"]
        }
      ]
    }
    
    예시:
    {
      "title": "미미당돈까스",
      "subText": "",
      "menuList": [
        {
          "name": "생삼겹살",
          "price": 15000,
          "description": "신선한 고기",
          "optionList": [],
          "allergyInfo": ["돼지고기"],
          "foodItem": ["삼겹살"]
        },
        {
          "name": "돈까스",
          "price": 7500,
          "description": "수제 등심 돈까스",
          "optionList": [],
          "allergyInfo": ["밀가루", "돼지고기"],
          "foodItem": ["돈까스"]
        },
        {
          "name": "라면",
          "price": 3000,
          "description": "",
          "optionList": [
            {
              "name": "계란 추가",
              "price": 700
            },
            {
              "name": "치즈 추가",
              "price": 700
            }
          ],
          "allergyInfo": ["계란", "유제품","밀가루"],
          "foodItem": ["라면"]
        },
        {
          "name": "생등심",
          "price": 15000,
          "description": "",
          "optionList": [],
          "allergyInfo": ["소고기"],
          "foodItem": ["등심"]
        },
        {
          "name": "돈코츠 라멘",
          "price": 9000,
          "description": "",
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
      - price: 메뉴 가격 (숫자)
      - description: 메뉴 설명 (있을 경우)
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
    
    OCR로 읽어들인 메뉴판 내용은 다음과 같으니, 이 내용을 위의 형식으로 정리해주세요.
    `,
  en: `
  I will provide you with the contents of a menu that I have read using OCR. This content may include various information such as the name of the dish, price, and options. Additionally, descriptions or other supplementary information about the menu may also be included.
  
  All responses must be translated into English and formatted according to the data structure below.

  Your task is to extract the information for each menu item and organize it in JSON format according to the structure below. Do not provide any responses other than in this data format.
  
  Example:
  {
    "title": "",
    "subText": "",
    "menuList": [
      {
        "name": "Kimbap",
        "price": 3700,
        "description": "A dream-filled kimbap",
        "optionList": [],
        "allergyInfo": ["Rice", "Seaweed"],
        "foodItem": ["Kimbap"]
      },
      {
        "name": "Pork Cutlet",
        "price": 7500,
        "description": "Homemade pork cutlet",
        "optionList": [],
        "allergyInfo": ["Pork"],
        "foodItem": ["Pork Cutlet"]
      },
      {
        "name": "Ramen",
        "price": 3000,
        "description": "",
        "optionList": [
          {
            "name": "Add Egg",
            "price": 700
          },
          {
            "name": "Add Cheese",
            "price": 700
          }
        ],
        "allergyInfo": ["Wheat"],
        "foodItem": ["Ramen"]
      },
      {
        "name": "Shrimp Tempura",
        "price": 5000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["Shrimp", "Wheat"],
        "foodItem": ["Tempura"]
      }
    ]
  }
  
  Example:
  {
    "title": "",
    "subText": ["Monkfish - USA / Kimchi - Korea / Rice - Korea"],
    "menuList": [
      {
        "name": "Braised Monkfish",
        "description": "",
        "optionList": [
          {
            "name": "Large",
            "price": 60000
          },
          {
            "name": "Medium",
            "price": 50000
          },
          {
            "name": "Small",
            "price": 40000
          }
        ],
        "allergyInfo": ["Monkfish", "Bean Sprouts"],
        "foodItem": ["Braised Monkfish"]
      },
      {
        "name": "Mixed Stew/Hotpot",
        "description": "",
        "optionList": [
          {
            "name": "Large",
            "price": 70000
          },
          {
            "name": "Medium",
            "price": 60000
          }
        ],
        "allergyInfo": [],
        "foodItem": []
      },
      {
        "name": "Braised/Stewed Octopus & Prawns",
        "description": "",
        "optionList": [
          {
            "name": "Large",
            "price": 60000
          },
          {
            "name": "Medium",
            "price": 50000
          },
          {
            "name": "Small",
            "price": 40000
          }
        ],
        "allergyInfo": ["Octopus", "Shrimp"],
        "foodItem": ["Braised Octopus & Prawns"]
      },
      {
        "name": "Bokbunja Wine",
        "description": "",
        "optionList": [],
        "price": 10000,
        "allergyInfo": ["Bokbunja"],
        "foodItem": ["Bokbunja"]
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
        "description": "",
        "optionList": [
         {
            "name": "Small",
            "price": 20000
          },
          {
            "name": "Medium",
            "price": 23000
          },
          {
            "name": "Large",
            "price": 28000
          }
        ],
        "allergyInfo": ["Chicken"],
        "foodItem": ["Chicken"]
      },
      {
        "name": "Braised Spicy Chicken",
        "description": "",
        "optionList": [
         {
            "name": "Small",
            "price": 22000
          },
          {
            "name": "Medium",
            "price": 25000
          },
          {
            "name": "Large",
            "price": 30000
          }
        ],
        "allergyInfo": ["Chicken"],
        "foodItem": ["Braised Spicy Chicken"]
      },
      {
        "name": "Buckwheat Pancake",
        "price": 9000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["Buckwheat", "Wheat"],
        "foodItem": ["Buckwheat Pancake"]
      },
      {
        "name": "Seasoned Pollock",
        "price": 12000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["Pollock"],
        "foodItem": ["Pollock"]
      }
    ]
  }
  
  Example:
  {
    "title": "Mimidang Pork Cutlet",
    "subText": "",
    "menuList": [
      {
        "name": "Fresh Pork Belly",
        "price": 15000,
        "description": "Fresh meat",
        "optionList": [],
        "allergyInfo": ["Pork"],
        "foodItem": ["Pork Belly"]
      },
      {
        "name": "Pork Cutlet",
        "price": 7500,
        "description": "Homemade pork cutlet",
        "optionList": [],
        "allergyInfo": ["Wheat", "Pork"],
        "foodItem": ["Pork Cutlet"]
      },
      {
        "name": "Ramen",
        "price": 3000,
        "description": "",
        "optionList": [
          {
            "name": "Add Egg",
            "price": 700
          },
          {
            "name": "Add Cheese",
            "price": 700
          }
        ],
        "allergyInfo": ["Egg", "Dairy", "Wheat"],
        "foodItem": ["Ramen"]
      },
      {
        "name": "Fresh Sirloin",
        "price": 15000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["Beef"],
        "foodItem": ["Sirloin"]
      },
      {
        "name": "Tonkotsu Ramen",
        "price": 9000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["Pork"],
        "foodItem": ["Ramen"]
      }
    ]
  }
  
  - **title**: The menu title or restaurant name (if available)
  - **subText**: Any description or additional text on the menu (if available)
  
  - **Menu Items**
    - name: Menu item name
    - price: Menu item price (numeric)
    - description: Description of the menu item (if available)
    - optionList: List of options for the menu item (if available, e.g., extra toppings)
    - allergyInfo: Allergy information (if available; please infer based on the name. For example, name = "Shrimp Tempura" -> allergyInfo = "Shrimp", "Wheat", name = "Braised Monkfish" -> allergyInfo = "Fish", "Bean Sprouts", name = "Tonkotsu Ramen" -> allergyInfo = "Pork")
    - foodItem: List of included ingredients (if available, based on the name, e.g., "Onion", "Tomato", "Cucumber", "Lettuce", "Pepper", "Potato", "Carrot", "Broccoli", "Spinach", "Apple", "Banana", "Strawberry", "Grapes", "Orange", "Watermelon", "Beef", "Pork", "Chicken", "Fish", "Rice", "Noodles", "Eggs", "Milk", "Bread", "Cheese", "Butter")
  
  If there are options for Large, Medium, and Small sizes for any menu item, but later only prices are provided without size information, you should associate those prices with the previous menu item’s optionList and differentiate based on the Large, Medium, and Small order.
  
  For optionList:
  - "Large" is more expensive than "Medium" and "Small"
  - "Medium" is cheaper than "Large" but more expensive than "Small"
  - "Small" is cheaper than both "Large" and "Medium"
  Please use this as a reference.
  
  Once a piece of information is used, do not use it again.
  
  The menu content is in Korean, so all the information in the data must be translated into English.
  
  The OCR-read menu content is as follows. Please organize this content into the format above.
`,
  ja: `
  
  OCRを通して読み取ったメニューの内容を提供します。この内容には、メニュー名、価格、オプションなど、様々な情報が含まれる可能性があります。また、メニューの説明やその他の付加情報も含まれる可能性があります。
  
  すべての回答は必ず日本語に翻訳され、以下のデータ形式に従って整理されなければなりません。

  あなたの任務は、このメニューから各メニュー項目の情報を抽出し、次の形式に合わせてJSON形式で整理することです。以下のデータ形式以外では、絶対に他の形式で応答してはいけません

  例：
  {
    "title": "",
    "subText": "",
    "menuList": [
      {
        "name": "キンパ",
        "price": 3700,
        "description": "夢がつまったキンパ",
        "optionList": [],
        "allergyInfo": ["米", "海苔"],
        "foodItem": ["キンパ"]
      },
      {
        "name": "トンカツ",
        "price": 7500,
        "description": "自家製トンカツ",
        "optionList": [],
        "allergyInfo": ["豚肉"],
        "foodItem": ["トンカツ"]
      },
      {
        "name": "ラーメン",
        "price": 3000,
        "description": "",
        "optionList": [
          {
            "name": "卵追加",
            "price": 700
          },
          {
            "name": "チーズ追加",
            "price": 700
          }
        ],
        "allergyInfo": ["小麦"],
        "foodItem": ["ラーメン"]
      },
      {
        "name": "エビ天ぷら",
        "price": 5000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["エビ", "小麦"],
        "foodItem": ["天ぷら"]
      }
    ]
  }
  
  例：
  {
    "title": "",
    "subText": ["アンコウ - アメリカ産 / キムチ - 韓国産 / 米 - 韓国産"],
    "menuList": [
      {
        "name": "アンコウの煮付け",
        "description": "",
        "optionList": [
          {
            "name": "大",
            "price": 60000
          },
          {
            "name": "中",
            "price": 50000
          },
          {
            "name": "小",
            "price": 40000
          }
        ],
        "allergyInfo": ["アンコウ", "もやし"],
        "foodItem": ["アンコウの煮付け"]
      },
      {
        "name": "ミックス鍋",
        "description": "",
        "optionList": [
          {
            "name": "大",
            "price": 70000
          },
          {
            "name": "中",
            "price": 60000
          }
        ],
        "allergyInfo": [],
        "foodItem": []
      },
      {
        "name": "タコとエビの煮込み",
        "description": "",
        "optionList": [
          {
            "name": "大",
            "price": 60000
          },
          {
            "name": "中",
            "price": 50000
          },
          {
            "name": "小",
            "price": 40000
          }
        ],
        "allergyInfo": ["タコ", "エビ"],
        "foodItem": ["タコとエビの煮込み"]
      },
      {
        "name": "ボクブンジャワイン",
        "description": "",
        "optionList": [],
        "price": 10000,
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
        "name": "丸鶏",
        "description": "",
        "optionList": [
          {
            "name": "小",
            "price": 20000
          },
          {
            "name": "中",
            "price": 23000
          },
          {
            "name": "大",
            "price": 28000
          }
        ],
        "allergyInfo": ["鶏肉"],
        "foodItem": ["鶏肉"]
      },
      {
        "name": "スパイシーチキンの煮込み",
        "description": "",
        "optionList": [
          {
            "name": "小",
            "price": 22000
          },
          {
            "name": "中",
            "price": 25000
          },
          {
            "name": "大",
            "price": 30000
          }
        ],
        "allergyInfo": ["鶏肉"],
        "foodItem": ["スパイシーチキンの煮込み"]
      },
      {
        "name": "そばのパンケーキ",
        "price": 9000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["そば", "小麦"],
        "foodItem": ["そばのパンケーキ"]
      },
      {
        "name": "スケトウダラの味付け",
        "price": 12000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["スケトウダラ"],
        "foodItem": ["スケトウダラ"]
      }
    ]
  }
  
  例：
  {
    "title": "ミミダンのトンカツ",
    "subText": "",
    "menuList": [
      {
        "name": "新鮮な豚バラ肉",
        "price": 15000,
        "description": "新鮮な肉",
        "optionList": [],
        "allergyInfo": ["豚肉"],
        "foodItem": ["豚バラ肉"]
      },
      {
        "name": "トンカツ",
        "price": 7500,
        "description": "自家製トンカツ",
        "optionList": [],
        "allergyInfo": ["小麦", "豚肉"],
        "foodItem": ["トンカツ"]
      },
      {
        "name": "ラーメン",
        "price": 3000,
        "description": "",
        "optionList": [
          {
            "name": "卵追加",
            "price": 700
          },
          {
            "name": "チーズ追加",
            "price": 700
          }
        ],
        "allergyInfo": ["卵", "乳製品", "小麦"],
        "foodItem": ["ラーメン"]
      },
      {
        "name": "新鮮なサーロイン",
        "price": 15000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["牛肉"],
        "foodItem": ["サーロイン"]
      },
      {
        "name": "豚骨ラーメン",
        "price": 9000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["豚肉"],
        "foodItem": ["ラーメン"]
      }
    ]
  }
  
  - **title**: メニューのタイトルまたはレストラン名（利用可能な場合）
  - **subText**: メニューに記載されている説明文や追加テキスト（利用可能な場合）
  
  - **メニュー項目**
    - name: メニュー項目名
    - price: メニュー項目の価格（数値）
    - description: メニュー項目の説明（利用可能な場合）
    - optionList: メニュー項目のオプションリスト（利用可能な場合、例：追加トッピング）
    - allergyInfo: アレルギー情報（利用可能な場合；名前に基づいて推測してください。例：name = "エビ天ぷら" -> allergyInfo = "エビ", "小麦"、name = "アンコウの煮付け" -> allergyInfo = "魚", "もやし"、name = "豚骨ラーメン" -> allergyInfo = "豚肉"）
    - foodItem: 含まれる食材のリスト（利用可能な場合、名前に基づいて、例："タマネギ", "トマト", "キュウリ", "レタス", "ピーマン", "ジャガイモ", "ニンジン", "ブロッコリー", "ホウレンソウ", "リンゴ", "バナナ", "イチゴ", "ブドウ", "オレンジ", "スイカ", "牛肉", "豚肉", "鶏肉", "魚", "米", "麺", "卵", "牛乳", "パン", "チーズ", "バター"）
  
  メニュー項目に大、中、小のサイズオプションがあり、後でサイズ情報なしで価格のみが提供される場合は、それらの価格を前のメニュー項目のoptionListに関連付け、大、中、小の順序で区別してください。
  
  optionListについて：
  - "大"は"中"と"小"よりも高価です
  - "中"は"大"よりも安いですが、"小"よりも高価です
  - "小"は"大"と"中"の両方よりも安いです
  これを参考にしてください。
  
  一度使用した情報は繰り返し使用することはできません。
  
  メニューの内容が韓国語であるため、データ内のすべての内容は必ず日本語に翻訳しなければなりません。
  
  OCRで読み取ったメニューの内容は以下の通りです。上記で言及した形式に従って、これらの内容を整理してください。
`,
  zh: `
  我会提供通过 OCR 读取的菜单内容。此内容可能包含各种信息，如菜单名称、价格、选项等。此外，菜单的描述或其他附加信息也可能包括在内。
  
  所有回答必须翻译成中文，并按照下面的数据格式进行整理。
  
  你的任务是从这个菜单中提取每个菜单项的信息，并按照以下格式整理成 JSON 形式。除了以下数据格式外，绝对不能以其他格式回应。
  
  示例：
  {
    "title": "",
    "subText": "",
    "menuList": [
      {
        "name": "紫菜包饭",
        "price": 3700,
        "description": "充满梦想的紫菜包饭",
        "optionList": [],
        "allergyInfo": ["米饭", "海苔"],
        "foodItem": ["紫菜包饭"]
      },
      {
        "name": "炸猪排",
        "price": 7500,
        "description": "自制炸猪排",
        "optionList": [],
        "allergyInfo": ["猪肉"],
        "foodItem": ["炸猪排"]
      },
      {
        "name": "拉面",
        "price": 3000,
        "description": "",
        "optionList": [
          {
            "name": "加鸡蛋",
            "price": 700
          },
          {
            "name": "加芝士",
            "price": 700
          }
        ],
        "allergyInfo": ["小麦"],
        "foodItem": ["拉面"]
      },
      {
        "name": "炸虾",
        "price": 5000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["虾", "小麦"],
        "foodItem": ["炸虾"]
      }
    ]
  }
  
  示例：
  {
    "title": "",
    "subText": ["安康鱼-美国 / 泡菜-韩国 / 米饭-韩国"],
    "menuList": [
      {
        "name": "安康鱼煲",
        "description": "",
        "optionList": [
          {
            "name": "大",
            "price": 60000
          },
          {
            "name": "中",
            "price": 50000
          },
          {
            "name": "小",
            "price": 40000
          }
        ],
        "allergyInfo": ["安康鱼", "豆芽"],
        "foodItem": ["安康鱼煲"]
      },
      {
        "name": "什锦煲/汤",
        "description": "",
        "optionList": [
          {
            "name": "大",
            "price": 70000
          },
          {
            "name": "中",
            "price": 60000
          }
        ],
        "allergyInfo": [],
        "foodItem": []
      },
      {
        "name": "章鱼对虾煲/汤",
        "description": "",
        "optionList": [
          {
            "name": "大",
            "price": 60000
          },
          {
            "name": "中",
            "price": 50000
          },
          {
            "name": "小",
            "price": 40000
          }
        ],
        "allergyInfo": ["章鱼", "虾"],
        "foodItem": ["章鱼对虾煲"]
      },
      {
        "name": "覆盆子酒",
        "description": "",
        "optionList": [],
        "price": 10000,
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
        "name": "一只鸡",
        "description": "",
        "optionList": [
         {
            "name": "小",
            "price": 20000
          },
          {
            "name": "中",
            "price": 23000
          },
          {
            "name": "大",
            "price": 28000
          }
        ],
        "allergyInfo": ["鸡肉"],
        "foodItem": ["鸡肉"]
      },
      {
        "name": "鸡肉炖汤",
        "description": "",
        "optionList": [
         {
            "name": "小",
            "price": 22000
          },
          {
            "name": "中",
            "price": 25000
          },
          {
            "name": "大",
            "price": 30000
          }
        ],
        "allergyInfo": ["鸡肉"],
        "foodItem": ["鸡肉炖汤"]
      },
      {
        "name": "荞麦煎饼",
        "price": 9000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["荞麦", "小麦"],
        "foodItem": ["荞麦煎饼"]
      },
      {
        "name": "调味明太鱼",
        "price": 12000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["明太鱼"],
        "foodItem": ["明太鱼"]
      }
    ]
  }
  
  示例：
  {
    "title": "Mimidang 炸猪排",
    "subText": "",
    "menuList": [
      {
        "name": "生五花肉",
        "price": 15000,
        "description": "新鲜肉类",
        "optionList": [],
        "allergyInfo": ["猪肉"],
        "foodItem": ["五花肉"]
      },
      {
        "name": "炸猪排",
        "price": 7500,
        "description": "自制炸猪排",
        "optionList": [],
        "allergyInfo": ["小麦", "猪肉"],
        "foodItem": ["炸猪排"]
      },
      {
        "name": "拉面",
        "price": 3000,
        "description": "",
        "optionList": [
          {
            "name": "加鸡蛋",
            "price": 700
          },
          {
            "name": "加芝士",
            "price": 700
          }
        ],
        "allergyInfo": ["鸡蛋", "乳制品", "小麦"],
        "foodItem": ["拉面"]
      },
      {
        "name": "生牛里脊",
        "price": 15000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["牛肉"],
        "foodItem": ["牛里脊"]
      },
      {
        "name": "豚骨拉面",
        "price": 9000,
        "description": "",
        "optionList": [],
        "allergyInfo": ["猪肉"],
        "foodItem": ["豚骨拉面"]
      }
    ]
  }
  
  - **title**: 菜单标题或餐厅名称（如果有）
  - **subText**: 菜单上的描述或其他附加文本（如果有）
  
  - **菜单列表**
    - name: 菜品名称
    - price: 菜品价格（数字）
    - description: 菜品描述（如果有）
    - optionList: 菜品选项列表（如果有，例如：额外配料等）
    - allergyInfo: 过敏信息（如果有，请根据菜品名称推断。例如，name = "炸虾"：allergyInfo = "虾", "小麦"，name = "安康鱼煲"：allergyInfo = "鱼", "豆芽"，name = "豚骨拉面"：allergyInfo = "猪肉"）
    - foodItem: 包含的食材列表（如果有，请根据名称列出，例如："洋葱", "番茄", "黄瓜", "生菜", "辣椒", "土豆", "胡萝卜", "西兰花", "菠菜", "苹果", "香蕉", "草莓", "葡萄", "橙子", "西瓜", "牛肉", "猪肉", "鸡肉", "鱼", "米饭", "面条", "鸡蛋", "牛奶", "面包", "奶酪", "黄油"）
  
  如果菜单项中有大、中、小的选项列表，而后来只提供价格而没有尺寸信息，你应该将这些价格与前一项的 optionList 关联，并根据大、中、小的顺序进行区分。
  
  关于 optionList：
  - “大”比“中”和“小”贵
  - “中”比“大”便宜，但比“小”贵
  - “小”比“大”和“中”便宜
  请参考这些信息。
  
  一旦使用过的信息，不能重复使用。
  
  菜单内容是韩文的，所以数据内的所有内容必须翻译成中文。
  
  OCR 读取的菜单内容如下，请按照上述格式整理这些内容。
`,
}
