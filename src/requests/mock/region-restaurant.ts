import type { Restaurant } from "./restaurant"

export interface RegionRestaurantMock {
    title: {
        ko: string,
        en: string,
        ja: string,
        zh: string,
    },
    mock: any[]
}

export const gangneungRestaurantsMock: RegionRestaurantMock = {
    title: {
        ko: "'강릉' 맛집을 찾아가요!",
        en: 'Let’s visit ‘Gangneung’!',
        ja: '「江陵」のグルメを探す！',
        zh: '去‘江陵’的美味餐廳吧！',
    },
    mock: [
        {
          contentId: '2674265',
          relation: {
            ko: '2674265',
            en: '2678307',
            ja: '2678314',
            zh: '2678315',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/88/2674488_image2_1.jpg',
        },
        {
          contentId: '2685282',
          relation: {
            ko: '2685282',
            en: '2692662',
            ja: '2692674',
            zh: '2692676',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/55/2684555_image2_1.jpg',
        },
        {
          contentId: '133817',
          relation: {
            ko: '133817',
            en: '2673378',
            ja: '2673383',
            zh: '2673384',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/09/3007909_image2_1.jpg',
        },
        {
          contentId: '2670860',
          relation: {
            ko: '2670860',
            en: '2676150',
            ja: '2678251',
            zh: '2676819',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/85/2671085_image2_1.jpg',
        },
        {
          contentId: '2674183',
          relation: {
            ko: '2674183',
            en: '2693680',
            ja: '2693690',
            zh: '2699207',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/05/2672905_image2_1.jpg',
        },
      ]
      
}

export const wonjuRestaurantsMock: RegionRestaurantMock = {
    title: {
        ko: "'원주' 의 보석같은 맛집",
        en: 'gem in ‘Wonju’',
        ja: '「原州」の宝石のようなレストラン',
        zh: '「原州」餐廳的瑰寶',
    },
    mock: [
        {
          contentId: '2687891',
          relation: {
            ko: '2687891',
            en: '2694723',
            ja: '2694729',
            zh: '2694730',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/29/2701329_image2_1.jpg',
        },
        {
          contentId: '2652850',
          relation: {
            ko: '2652850',
            en: '2656556',
            ja: '2656561',
            zh: '2656562',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/43/2652843_image2_1.jpg',
        },
        {
          contentId: '2670568',
          relation: {
            ko: '2670568',
            en: '2672865',
            ja: '2672871',
            zh: '2672872',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/90/2670790_image2_1.jpg',
        },
        {
          contentId: '2687958',
          relation: {
            ko: '2687958',
            en: '2694940',
            ja: '2694950',
            zh: '2694952',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/63/2701363_image2_1.jpg',
        },
        {
          contentId: '2687864',
          relation: {
            ko: '2687864',
            en: '2694649',
            ja: '2694654',
            zh: '2694655',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/13/2701313_image2_1.jpg',
        },
      ],
}

export const gangnamRestaurantsMock: RegionRestaurantMock = {
    title: {
        ko: "'강남' 에 이런곳이?",
        en: "place in ‘Gangnam’",
        ja: '「江南」にこんなところは？',
        zh: '《江南》裡有這樣的地方嗎？',
    },
    mock: [
        {
          contentId: '2643060',
          relation: {
            ko: '2643060',
            en: '2658510',
            ja: '2664765',
            zh: '2664766',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/29/2654729_image2_1.jpg',
        },
        {
          contentId: '2685263',
          relation: {
            ko: '2685263',
            en: '2695652',
            ja: '2695659',
            zh: '2695661',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/39/2685039_image2_1.jpg',
        },
        {
          contentId: '2678968',
          relation: {
            ko: '2678968',
            en: '2686139',
            ja: '2686679',
            zh: '2686686',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/34/2676434_image2_1.jpg',
        },
        {
          contentId: '2670512',
          relation: {
            ko: '2670512',
            en: '2672666',
            ja: '2672671',
            zh: '2672672',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/06/2670506_image2_1.png',
        },
        {
          contentId: '838829',
          relation: {
            ko: '838829',
            en: '2687124',
            ja: '2687131',
            zh: '2687133',
          },
          firstImage: 'http://tong.visitkorea.or.kr/cms/resource/09/1838709_image2_1.jpg',
        },
      ],      
}


export let getRandomRegionRestaurantMock = () => {
    const randomList = [gangneungRestaurantsMock, wonjuRestaurantsMock, gangnamRestaurantsMock]
    return randomList[Math.floor(Math.random()*3)];
}