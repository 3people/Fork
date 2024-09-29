export const normalizeAnswer = (payload: string) => {
  const jsonString = payload
    .replace(/```json?\s?/g, '')
    .replace(/```\s?/g, '')
    .trim()
  return JSON.parse(jsonString)
}
