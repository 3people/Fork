import {normalizeAnswer} from '../normalize/translate'

/**
 * TODO: api 파일 분리
 */
export const img2Text = async (payload: any) => {
  const formData = new FormData()
  formData.append('document', payload.imageFile)

  const response = await fetch('https://api.upstage.ai/v1/document-ai/ocr', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OCR_KEY}`,
    },
    body: formData,
  })

  const result = await response.json()
  return normalizeText(result)
}

/**
 * TODO: normalize 파일 분리
 */
const normalizeText = (rawData: any) => {
  const text = rawData.pages[0].text
  const lines = text.split('\n')
  return lines
    .map((line: string) => line.trim())
    .filter((line: string) => line)
    .join(' ')
}

/**
 * TODO: prompt 파일 분리
 * TODO: normalize 함수 분리
 */
export const translate = async (payload: any) => {
  const prompt = `
    제가 OCR로 읽어들인 메뉴판 내용을 드릴겁니다. 이 내용에는 다양한 정보가 포함되어 있으며, 메뉴의 이름, 가격, 옵션 등이 있을 수 있습니다. 또한, 메뉴의 설명이나 기타 추가 정보가 포함될 수 있습니다.
  
    당신의 작업은 이 메뉴판에서 각 메뉴의 정보를 추출하고, 아래 형식에 맞게 JSON 형태로 정리하는 것입니다.

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
`
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt + '\n' + payload.result,
          stream: false,
        },
      ],
    }),
  })

  const result = await response.json()
  return normalizeAnswer(result.choices[0].message.content)
}
