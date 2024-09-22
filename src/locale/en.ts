import {food204, food31, food351, food539} from './ko'

export default {
  landing: {
    start: 'Start',
    title: 'Welcome!',
    description: 'What language would you like to translate Korean food travel information into?',
  },
  header: {
    language: 'English',
  },
  home: {
    popular: 'Popular restaurants right now',
  },
  food: {
    card: {
      539: {
        top: 'How about Korea’s <br /> signature pork belly?',
        name: food539.name_en,
        description: food539.description_en,
      },
      204: {
        top: 'Galbitang, <br /> perfect hearty meal',
        name: food204.name_en,
        description: food204.description_en,
      },
      351: {
        top: 'Spicy Sweet <br /> Addictive Dakgalbi',
        name: food351.name_en,
        description: food351.description_en,
      },
      31: {
        top: 'The joy of mixing <br /> Korean Bibimbap',
        name: food31.name_en,
        description: food31.description_en,
      },
    },
    popular: 'Restaurant',
  },
  search: {
    placeholder: 'Search Korean food, restaurants.',
  },
}
