import {derived, get, writable} from 'svelte/store'
import {type AiReview, generateAiReview, img2Text, translate} from '../../requests/fetch/translate'

export const createImageStore = () => {
  const srcStore = writable('')
  const imageFileStore = writable('')
  const translatedMenuStore = writable()
  const aiReviewStore = writable<AiReview>()
  const isLoadingStore = writable(false)

  const setImageSrc = (src: string) => {
    srcStore.set(src)
  }

  const setImageFile = (file: string) => {
    imageFileStore.set(file)
  }

  const translateMenu = async () => {
    isLoadingStore.set(true)
    const result = await img2Text({imageFile: get(imageFileStore)})
    const answer = await translate({result})
    translatedMenuStore.set(answer)
    isLoadingStore.set(false)
    return answer
  }

  const getAiReview = async () => {
    const result = await generateAiReview(get(translatedMenuStore))
    aiReviewStore.set(result)
    localStorage.setItem('aiReview', JSON.stringify(result))
    console.log(result)
    return result
  }

  const imageInfo = derived(
    [srcStore, imageFileStore, isLoadingStore, translatedMenuStore, aiReviewStore],
    ([src, imageFile, isLoading, translatedMenu, aiReview]) => {
      return {src, imageFile, isLoading, translatedMenu, aiReview}
    },
  )

  return {
    ...imageInfo,
    setImageSrc,
    setImageFile,
    translateMenu,
    getAiReview,
  }
}

export const imageStore = createImageStore()
