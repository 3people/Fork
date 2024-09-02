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
      "optionList": []
    },
    {
      "name": "돈까스",
      "price": 7500,
      "description": "수제 등심 돈까스",
      "optionList": []
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
      ]
    },
    ...
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
      ]
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
      ]
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
      ]
    },
    {
      "name": "복분자",
      "description": "",
      "optionList": [
        {
          "name": "default",
          "price": 10000
        }
      ]
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
      ]
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
      ]
    },
    {
      "name": "메밀전병",
      "price": 9000,
      "description": "",
      "optionList": []
    },
    {
      "name": "양념 코다리구이",
      "price": 12000,
      "description": "",
      "optionList": []
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
  return result.choices[0].message.content
}
