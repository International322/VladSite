'use client';

import HomeSection from './Home/HomeSection';
import { sectionData } from '../_data/home.data';
import styles from './Home.module.scss';
import CircularProgressBar from '../components/ui/CircularProgressBar/CircularProgressBar';
import { useEffect, useState } from 'react';

export default function Home() {
  const firstSection = sectionData[0];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 67 ? 67 : prevProgress + 1));
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      <HomeSection
        id={firstSection.id}
        src={firstSection.body__image}
        className={`${styles.section__1} bg-build1`}
      >
        <div className={styles.header__content1}>
          <h1 className={styles.header__title1}>
            {firstSection.header__title}
          </h1>
          <p className={styles.header__text1}>{firstSection.header__text}</p>
          <button className={styles.header__button1}>
            {firstSection.header__button}
          </button>
        </div>
        <div className={styles.body__content1}>
          <img className="" src={firstSection.body__image} alt="image" />
        </div>
      </HomeSection>
      <HomeSection id={2} src="" className={styles.section__2}>
        <div>
          <h1>О НАС В ЦИФРАХ</h1>
        </div>
        <div className="">
          <div className="flex">
            <CircularProgressBar progress={progress} />
            <CircularProgressBar progress={progress} />
            <CircularProgressBar progress={progress} />
          </div>
          <p>
            Бесплатные консультации по проекту в течении срока строительства
          </p>
        </div>
      </HomeSection>
    </div>
  );
}
