import {normalizeAnswer} from '../normalize/translate'
import type {Language} from '../../locale/types'
import {translatePrompt} from '../prompt/tranlsate'
import {locale} from 'svelte-i18n'
import {get} from 'svelte/store'
import {aiReview} from '../prompt'

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
  const currentLocale = get(locale) as Language
  const prompt = aiReview[currentLocale] ?? aiReview['ko']

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
