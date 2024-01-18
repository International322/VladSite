'use client';

import styles from '@/app/home.module.scss';
import CircularProgressBar from '@/components/ui/circular-progress-bar/circular-progress-bar';
import { useEffect, useState } from 'react';

interface progress {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  newProgress: number[];
}

const HomeSection2 = () => {
  const [progress, setProgress] = useState([500, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress: number[] = [...prevProgress];
        newProgress[0] = newProgress[0] + 1 < 540 ? newProgress[0] + 1 : 540;
        newProgress[1] = newProgress[1] + 1 < 9 ? newProgress[1] + 1 : 9;
        newProgress[2] = newProgress[2] + 1 < 15 ? newProgress[2] + 1 : 15;
        return newProgress;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.section} bg-brown-100`}>
      <div className={`${styles.container} space-y-40`}>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-100">
            О НАС В ЦИФРАХ
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center space-y-28">
          <div className=" md:flex gap-20">
            <CircularProgressBar progress={progress[0]} />
            <CircularProgressBar progress={progress[1]} />
            <CircularProgressBar progress={progress[2]} />
          </div>
          <div className="px-2 xl:px-80 text-center flex items-center justify-center">
            <p className="text-xl md:text-2xl font-light text-violet-100">
              Бесплатные консультации по проекту в течении срока строительства
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
