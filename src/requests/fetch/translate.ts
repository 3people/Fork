import {normalizeAnswer} from '../normalize/translate'
import type {Language} from '../../locale/types'
import {translatePrompt} from '../prompt'
import {locale} from 'svelte-i18n'
import {get} from 'svelte/store'

/**
 * TODO: api 파일 분리
 */

const urlToFile = async (url: string, filename: string): Promise<File> => {
  const response = await fetch(url)
  const blob = await response.blob()
  return new File([blob], filename, {type: blob.type})
}

export const imgUrl2Text = async (payload: any) => {
  const imageFile = await urlToFile(payload.imageUrl, 'menu.jpeg')
  const formData = new FormData()
  formData.append('document', imageFile)

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
  const currentLocale = get(locale) as Language
  const prompt = translatePrompt[currentLocale] ?? translatePrompt['ko']
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

export interface AiReview {
  recommendedMenu: ''
  cautionNote: ''
  menuHighlight: ''
  foreignerTip: ''
  overallImpression: ''
}

export const generateAiReview = async (payload: any): Promise<AiReview> => {
  const prevAnswer = JSON.stringify(payload)
  const prompt = `
  ---------
  제가 OCR로 읽어들인 메뉴판에 대한 JSON 내용을 드릴겁니다. 이 내용에는 다양한 정보가 포함되어 있습니다.
  당신의 작업은 이 JSON 메뉴판의 정보를 토대로
  아래 양식에 맞게 내용을 채워서 JSON 데이터를 만드는 것입니다.
  아래 데이터 형식 이외에 다른 응답은 절대 하지 않습니다.
  
  {
    "recommendedMenu": "",
    "cautionNote": "",
    "menuHighlight": "",
    "foreignerTip": "",
    "overallImpression": ""
  }
  
  ----
  키 설명
  "recommendedMenu": "가장 추천하고 싶은 메뉴와 그 이유",
  "cautionNote": "주의해야 할 사항이나 알레르기 정보",
  "menuHighlight": "메뉴의 특징이나 독특한 점",
  "foreignerTip": "외국인 관광객을 위한 팁이나 조언",
  "overallImpression": "메뉴판 전체에 대한 종합적인 평가나 인상"
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
          content: prompt + '\n' + prevAnswer,
          stream: false,
        },
      ],
    }),
  })

  const result = await response.json()
  return normalizeAnswer(result.choices[0].message.content)
}
