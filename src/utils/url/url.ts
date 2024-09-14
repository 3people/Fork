export const parseQueryString = (querystring: string): Record<string, string> => {
  // 맨 앞의 '?'가 있으면 제거하고, 없으면 그대로 사용합니다.
  const query = querystring.startsWith('?') ? querystring.slice(1) : querystring

  // 빈 문자열이면 빈 객체를 반환합니다.
  if (!query) return {}

  // '&'로 분리하고 각 키-값 쌍을 배열로 변환한 후 객체로 만듭니다.
  return Object.fromEntries(
    query
      .split('&')
      .map((param) => {
        const [key, value] = param.split('=')
        return [decodeURIComponent(key), decodeURIComponent(value || '')]
      })
      .filter(([key]) => key !== ''),
  )
}
