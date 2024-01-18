// Импортируйте необходимые стили и данные
import styles from '@/app/home.module.scss';
import sectionsData from '@/_data/home.data';

const HomeSection1 = () => {
  const section = sectionsData['section1'];

  if (!section) {
    return null;
  }

  return (
    <section className={`${styles.section_1} `}>
      <div className={`${styles.container} z-10 flex`}>
        <div className="space-y-4 w-full xl:flex flex-col justify-center items-start space-y-12 w-1/2">
          <h1 className="text-3xl  md:text-5xl font-bold text-white">
            {section.header__title}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white">
            {section.header__text}
          </p>
          <button className="text-lg md:text-lg font-semibold text-black bg-orange-300 py-4 px-10">
            {section.header__button}
          </button>
          <p className="text-sm md:text-sm font-bold text-white">
            {section.header__post_text_1}
          </p>
          <p className="text-sm md:text-sm font-bold text-white">
            {section.header__post_text_2}
          </p>
        </div>
        <div className=" sm:w-full flex items-center justify-center">
          <img
            className="hidden sm:block w-auto h-auto"
            src={section.body__image}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection1;
