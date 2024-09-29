import {derived, get, writable} from 'svelte/store'
import {img2Text, translate} from '../requests/fetch/translate'

export const createImageStore = () => {
  const srcStore = writable('')
  const imageFileStore = writable('')
  const translatedMenuStore = writable({})
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
    console.log(answer)
    return answer
  }

  const imageInfo = derived(
    [srcStore, imageFileStore, isLoadingStore, translatedMenuStore],
    ([src, imageFile, isLoading, translatedMenu]) => {
      return {src, imageFile, isLoading, translatedMenu}
    },
  )

  return {
    ...imageInfo,
    setImageSrc,
    setImageFile,
    translateMenu,
  }
}

export const imageStore = createImageStore()
