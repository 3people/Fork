export interface RelationRaw {
    'kor_contentid': number,
    'eng_contentid': number,
    'jpn_contentid': number,
    'chs_contentid': number
    menu_image_1: string,
    menu_image_2: string,
}

export interface Relation {
    ko_id: number,
    en_id: number,
    ja_id: number,
    zh_id: number,
    images: string[]
}

export const normalizeRelation = (data: RelationRaw): Relation => {
    return {
        ko_id: data?.kor_contentid,
        en_id: data?.eng_contentid,
        ja_id: data?.jpn_contentid,
        zh_id: data?.chs_contentid,
        images: [data?.menu_image_1, data?.menu_image_2]
    }
}