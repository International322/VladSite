import styles from '@/app/home.module.scss';

const HomeSection3 = () => {
  const section3 = [
    {
      src: '/images/section-3/image-01.png',
      title: 'Бесплатная консультация',
      text: 'Бесплатная консультация со специалистом, где под вашу ситуацию рассчитываем стоимость проекта и дальнейшие условия сотрудничества.',
    },
    {
      src: '/images/section-3/image-02.png',
      title: 'Оформление взаимоотношений',
      text: 'составление технического задания (ТЗ) подписание договора на создание проекта, приложением к которому является утвержденное ТЗ; внесение 50 % аванса и начало работы над проектом.',
    },
    {
      src: '/images/section-3/image-03.png',
      title: 'Планировка и эскиз',
      text: 'Ставим стены и расставляем мебель, что бы всем было удобно Этап эскизного проекта – процесс творческий как для архитектора, так и для заказчика. На этом этапе необходимо ваше активное участие в процессе согласования предлагаемых вариантов',
    },
    {
      src: '/images/section-3/image-04.png',
      title: 'Рабочие чертежи',
      text: 'После согласования проекта делаем полный комплект чертежей. Составляем спецификацию материалов по каждому разделу.',
    },
    {
      src: '/images/section-3/image-05.png',
      title: 'Визуализация',
      text: 'Делаем базовую концепцию и визуализацию в 3D',
    },
    {
      src: '/images/section-3/image-06.png',
      title: 'Инженерные сети* (дополнительный раздел, оплачивается отдельно)',
      text: 'Архитектурные и конструктивные решения разработаны. Осталось проложить все инженерные сети (водоснабжение и канализация, отопление и вентиляция, электроснабжение и освещение).',
    },
    {
      src: '/images/section-3/image-07.png',
      title: 'Приемка проекта',
      text: 'После того как проект готов, Вы оплачиваете оставшиеся 50% стоимости и получаете электронную версию проекта дома в формате PDF',
    },
    {
      src: '/images/section-3/image-08.png',
      title: 'Консультации',
      text: 'Разъясним вашим подрядчикам узлы, при необходимости вносим корректировки.',
    },
  ];

  return (
    <section className="bg-gray-my">
      <div className={`${styles.container} pt-40 space-y-40`}>
        <h1 className="text-3xl lg:text-5xl text-yellow-100 font-bold uppercase ">
          Как происходит работа
        </h1>
        <div className="flex justify-center">
          <div className="w-full space-y-60">
            {section3
              .filter((_, index) => index % 2 === 0)
              .map((item, index) => (
                <div className="flex flex-col items-end text-end whitespace-normal">
                  <img
                    key={index}
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    className="mb-4"
                  />
                  <h3 className="text-gray-50 text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-gray-50/90 text-lg font-light">
                    {item.text}
                  </p>
                </div>
              ))}
          </div>

          <div className="mt-12 w-5/12 h-full bg-center">
            <img
              src="/images/section-3/Group.svg"
              alt="Group"
              className="w-full h-full"
            />
          </div>

          <div className="w-full space-y-48 pt-64">
            {section3
              .filter((_, index) => index % 2 !== 0)
              .map((item, index) => (
                <div className="whitespace-normal">
                  <img
                    key={index}
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    className="mb-4"
                  />
                  <h3 className="text-gray-50 text-3xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-gray-50/90 text-lg font-light">
                    {item.text}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
