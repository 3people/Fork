import { createClient } from "@supabase/supabase-js";
import type { Language } from "../../locale/types";
import { normalizeRelation, type RelationRaw } from "../normalize/id-menu-relation";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

const columnMap: Record<Language, string> = {
    ko: 'kor_contentid',
    en: 'eng_contentid',
    ja: 'jpn_contentid',
    zh: 'chs_contentid'
}

export const getRelationById = async (id: string, language: Language = 'ko') => {
    const columnName = columnMap[language]
    try {
        const {data, error} = await supabase.from('id_menu_relation').select().eq(columnName, id)
        if(error) {
            console.error('Error fetching data:', error);
            return null
        }
        return normalizeRelation(data[0] as any)
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
}