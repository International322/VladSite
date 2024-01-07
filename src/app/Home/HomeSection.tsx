import styles from './Home.module.scss';

export interface HomeSectionProps {
  id: number;
  src: string;
  header__title: string;
  header__text: string;
  header__button: string;
  body__image: string;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  id,
  src,
  header__title,
  header__text,
  header__button,
  body__image,
  ...props
}) => {
  const sectionClasses = styles[`section__${id}`];
  const headerContentClasses = styles[`header__content${id}`];
  const headerTitleClasses = styles[`header__title${id}`];
  const headerTextClasses = styles[`header__text${id}`];
  const headerButtonClasses = styles[`header__button${id}`];
  const bodyContentClasses = styles[`body__content${id}`];
  const bodyImgClasses = styles[`body__image${id}`];

  return (
    <section className={sectionClasses}>
      <div className={styles.container}>
        <div className={headerContentClasses}>
          <h1 className={headerTitleClasses}>{header__title}</h1>
          <p className={headerTextClasses}>{header__text}</p>
          <button className={headerButtonClasses}>
            <a href="">{header__button}</a>
          </button>
          <p>Проект будет максимально соответствовать вашим пожеланиям</p>
          <p>Проект прогнозирует сроки и бережет ваш бюджет строительства</p>
        </div>{' '}
        <div className={bodyContentClasses}>
          <img className={bodyImgClasses} src={body__image} alt="" />
        </div>
      </div>
    </section>
  );
};
