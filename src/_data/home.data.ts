// sectionsData.js
export interface SectionData {
  [key: string]: {
    id: number;
    src: string;
    header__title?: string;
    header__text?: string;
    header__post_text_1?: string;
    header__post_text_2?: string;
    header__button?: string;
    body__image?: string;
    body__text?: string;
  };
}

export const sectionsData: SectionData = {
  section1: {
    id: 1,
    src: 'bg-build1',
    header__title: 'Мы проектируем дома, которые реально построить',
    header__text:
      'Наш проект сэкономит вам деньги, будет соответствовать вашему бюджету и понятен любому строителю или дизайнеру',
    header__post_text_1:
      'Проект будет максимально соответствовать вашим пожеланиям',
    header__post_text_2:
      'Проект прогнозирует сроки и бережет ваш бюджет строительства',
    header__button: 'Записаться на расчет проекта',
    body__image:
      'https://thumb.tildacdn.com/tild3263-6662-4538-a165-653663363237/-/resize/714x/-/format/webp/Group_3.png',
    body__text: '',
  },
  section2: {
    id: 2,
    src: 'bg-build2',
    header__title: 'О нас в цифрах',
    header__text: 'ф',
    header__button: 'ф',
    body__image: 'ф',
    body__text:
      'Бесплатные консультации по проекту в течение срока строительства',
  },
  section3: {
    id: 3,
    src: 'bg-build3',
  },
  section4: {
    id: 4,
    src: 'bg-build4',
    header__title: '',
    header__text: '',
    header__button: '',
    body__image: '',
    body__text: '',
  },
  section5: {
    id: 5,
    src: 'bg-build5',
    header__title: '',
    header__text: '',
    header__button: '',
    body__image: '',
    body__text: '',
  },
  section6: {
    id: 6,
    src: 'bg-build6',
    header__title: '',
    header__text: '',
    header__button: '',
    body__image: '',
    body__text: '',
  },
  section7: {
    id: 7,
    src: 'bg-build7',
    header__title: '',
    header__text: '',
    header__button: '',
    body__image: '',
    body__text: '',
  },
};

export default sectionsData;
