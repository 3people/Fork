export interface RestaurantDetailInfoRaw {
  chkcreditcardfood: string
  contentid: string
  contenttypeid: string
  discountinfofood: string
  firstmenu: string
  infocenterfood: string
  kidsfacility: string
  lcnsno: string
  opendatefood: string
  opentimefood: string
  packing: string
  parkingfood: string
  reservationfood: string
  restdatefood: string
  scalefood: string
  seat: string
  smoking: string
  treatmenu: string
}

export interface RestaurantDetailInfo {
  creditCardAvailable?: string
  contentId?: string
  contentTypeId?: string
  discountInfo?: string
  firstMenu?: string
  phoneNumber?: string
  kidsFacility?: string
  lcsNo?: string
  openDate?: string
  openTime?: string
  packing?: string
  reservation?: string
  dayOff?: string
  scale?: string
  seat?: string
  smoking?: string
  offeredMenu?: string
}

export interface RestaurantCommonInfoRaw {
  addr1: string
  addr2: string
  booktour: string
  contentid: string
  contenttypeid: string
  cpyrhtDivCd: string
  createdtime: string
  firstimage: string
  firstimage2: string
  homepage: string
  modifiedtime: string
  overview: string
  tel: string
  telname: string
  title: string
  zipcode: string
  mapx: string
  mapy: string
  cat1: string
  cat2: string
  cat3: string
}

export interface RestaurantCommonInfo {
  firstAddress?: string
  secondAddress?: string
  bookTour?: string
  contentId?: string
  contentTypeId?: string
  copyrightCode?: string
  createdTime?: string
  firstImage?: string
  secondImage?: string
  homepage?: string
  modifiedTime?: string
  overview?: string
  phoneNumber?: string
  phoneNumberName?: string
  title?: string
  zipCode?: string
  mapX?: number
  mapY?: number
  cat1?: string
  cat2?: string
  cat3?: string
}

export const normalizeRestaurantDetailInfo = (
  item: RestaurantDetailInfoRaw,
): RestaurantDetailInfo => {
  return {
    creditCardAvailable: item.chkcreditcardfood,
    contentId: item.contentid,
    contentTypeId: item.contenttypeid,
    discountInfo: item.discountinfofood,
    firstMenu: item.firstmenu,
    phoneNumber: item.infocenterfood,
    kidsFacility: item.kidsfacility,
    lcsNo: item.lcnsno,
    openDate: item.opendatefood,
    openTime: item.opentimefood,
    packing: item.packing,
    reservation: item.reservationfood,
    dayOff: item.restdatefood,
    scale: item.scalefood,
    seat: item.seat,
    smoking: item.smoking,
    offeredMenu: item.treatmenu,
  }
}

export const normalizeRestaurantCommonInfo = (
  item: RestaurantCommonInfoRaw,
): RestaurantCommonInfo => {
  return {
    firstAddress: item.addr1,
    secondAddress: item.addr2,
    bookTour: item.booktour,
    contentId: item.contentid,
    contentTypeId: item.contenttypeid,
    copyrightCode: item.cpyrhtDivCd,
    createdTime: item.createdtime,
    firstImage: item.firstimage,
    secondImage: item.firstimage2,
    homepage: item.homepage,
    modifiedTime: item.modifiedtime,
    overview: item.overview,
    phoneNumber: item.tel,
    phoneNumberName: item.telname,
    title: item.title,
    zipCode: item.zipcode,
    mapX: parseFloat(item.mapx),
    mapY: parseFloat(item.mapy),
    cat1: item.cat1,
    cat2: item.cat2,
    cat3: item.cat3,
  }
}
